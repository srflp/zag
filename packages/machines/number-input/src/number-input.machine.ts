import { NumberParser } from "@internationalized/number"
import { choose, createMachine, guards, ref } from "@zag-js/core"
import { addDomEvent, requestPointerLock } from "@zag-js/dom-event"
import { isSafari, raf } from "@zag-js/dom-query"
import { trackFormControl } from "@zag-js/form-utils"
import { observeAttributes } from "@zag-js/mutation-observer"
import { clamp, decrement, increment, isAtMax, isAtMin, isWithinRange } from "@zag-js/number-utils"
import { callAll, compact, isEqual } from "@zag-js/utils"
import { recordCursor, restoreCursor } from "./cursor"
import { dom } from "./number-input.dom"
import type { MachineContext, MachineState, UserDefinedContext } from "./number-input.types"

const { not, and } = guards

export function machine(userContext: UserDefinedContext) {
  const ctx = compact(userContext)
  return createMachine<MachineContext, MachineState>(
    {
      id: "number-input",
      initial: "idle",
      context: {
        dir: "ltr",
        locale: "en-US",
        focusInputOnChange: true,
        clampValueOnBlur: true,
        allowOverflow: false,
        inputMode: "decimal",
        pattern: "[0-9]*(.[0-9]+)?",
        value: "",
        step: 1,
        min: Number.MIN_SAFE_INTEGER,
        max: Number.MAX_SAFE_INTEGER,
        invalid: false,
        spinOnPress: true,
        ...ctx,
        hint: null,
        scrubberCursorPoint: null,
        composing: false,
        fieldsetDisabled: false,
        formatter: createFormatter(ctx.locale || "en-US", ctx.formatOptions),
        parser: createParser(ctx.locale || "en-US", ctx.formatOptions),
        translations: {
          incrementLabel: "increment value",
          decrementLabel: "decrease value",
          ...ctx.translations,
        },
      },

      computed: {
        isRtl: (ctx) => ctx.dir === "rtl",
        valueAsNumber: (ctx) => ctx.parser.parse(String(ctx.value)) ?? 0,
        isAtMin: (ctx) => isAtMin(ctx.value, ctx),
        isAtMax: (ctx) => isAtMax(ctx.value, ctx),
        isOutOfRange: (ctx) => !isWithinRange(ctx.value, ctx),
        isValueEmpty: (ctx) => ctx.value === "",
        isDisabled: (ctx) => !!ctx.disabled || ctx.fieldsetDisabled,
        canIncrement: (ctx) => ctx.allowOverflow || !ctx.isAtMax,
        canDecrement: (ctx) => ctx.allowOverflow || !ctx.isAtMin,
        valueText: (ctx) => ctx.translations.valueText?.(ctx.value),
        formattedValue: (ctx) => {
          if (Number.isNaN(ctx.valueAsNumber)) return ctx.value
          return ctx.formatter.format(ctx.valueAsNumber)
        },
      },

      watch: {
        formatOptions: ["setFormatterAndParser", "syncInputElement"],
        locale: ["setFormatterAndParser", "syncInputElement"],
        value: ["syncInputElement"],
        isOutOfRange: ["invokeOnInvalid"],
        scrubberCursorPoint: ["setVirtualCursorPosition"],
      },

      entry: ["syncInputValue"],

      activities: ["trackFormControl"],

      on: {
        "VALUE.SET": {
          actions: ["setValue", "clampValue", "setHintToSet"],
        },
        "VALUE.CLEAR": {
          actions: ["clearValue"],
        },
        "VALUE.INCREMENT": {
          actions: ["increment"],
        },
        "VALUE.DECREMENT": {
          actions: ["decrement"],
        },
      },

      states: {
        idle: {
          on: {
            "TRIGGER.PRESS_DOWN": {
              target: "before:spin",
              actions: ["focusInput", "invokeOnFocus", "setHint"],
            },
            "SCRUBBER.PRESS_DOWN": {
              target: "scrubbing",
              actions: ["focusInput", "invokeOnFocus", "setHint", "setCursorPoint"],
            },
            "INPUT.FOCUS": {
              target: "focused",
              actions: ["focusInput", "invokeOnFocus"],
            },
          },
        },

        focused: {
          tags: "focus",
          entry: "focusInput",
          activities: "attachWheelListener",
          on: {
            "TRIGGER.PRESS_DOWN": {
              target: "before:spin",
              actions: ["focusInput", "setHint"],
            },
            "SCRUBBER.PRESS_DOWN": {
              target: "scrubbing",
              actions: ["focusInput", "setHint", "setCursorPoint"],
            },
            "INPUT.ARROW_UP": {
              actions: "increment",
            },
            "INPUT.ARROW_DOWN": {
              actions: "decrement",
            },
            "INPUT.HOME": {
              actions: "decrementToMin",
            },
            "INPUT.END": {
              actions: "incrementToMax",
            },
            "INPUT.CHANGE": {
              actions: ["setValue", "setHint"],
            },
            "INPUT.COMMIT": [
              {
                guard: and("clampValueOnBlur", not("isInRange")),
                target: "idle",
                actions: ["clampValue", "syncInputElement", "clearHint", "invokeOnBlur"],
              },
              {
                target: "idle",
                actions: ["syncInputElement", "invokeOnBlur"],
              },
            ],
            "INPUT.COMPOSITION_START": {
              actions: "setComposing",
            },
            "INPUT.COMPOSITION_END": {
              actions: "clearComposing",
            },
          },
        },

        "before:spin": {
          tags: "focus",
          activities: "trackButtonDisabled",
          entry: choose([
            { guard: "isIncrementHint", actions: "increment" },
            { guard: "isDecrementHint", actions: "decrement" },
          ]),
          after: {
            CHANGE_DELAY: {
              target: "spinning",
              guard: and("isInRange", "spinOnPress"),
            },
          },
          on: {
            "TRIGGER.PRESS_UP": {
              target: "focused",
              actions: "clearHint",
            },
          },
        },

        spinning: {
          tags: "focus",
          activities: "trackButtonDisabled",
          every: [
            {
              delay: "CHANGE_INTERVAL",
              guard: and(not("isAtMin"), "isIncrementHint"),
              actions: "increment",
            },
            {
              delay: "CHANGE_INTERVAL",
              guard: and(not("isAtMax"), "isDecrementHint"),
              actions: "decrement",
            },
          ],
          on: {
            "TRIGGER.PRESS_UP": {
              target: "focused",
              actions: "clearHint",
            },
          },
        },

        scrubbing: {
          tags: "focus",
          exit: "clearCursorPoint",
          activities: ["activatePointerLock", "trackMousemove", "setupVirtualCursor", "preventTextSelection"],
          on: {
            "SCRUBBER.POINTER_UP": "focused",
            "SCRUBBER.POINTER_MOVE": [
              {
                guard: "isIncrementHint",
                actions: ["increment", "setCursorPoint"],
              },
              {
                guard: "isDecrementHint",
                actions: ["decrement", "setCursorPoint"],
              },
            ],
          },
        },
      },
    },
    {
      delays: {
        CHANGE_INTERVAL: 50,
        CHANGE_DELAY: 300,
      },

      guards: {
        clampValueOnBlur: (ctx) => ctx.clampValueOnBlur,
        isAtMin: (ctx) => ctx.isAtMin,
        spinOnPress: (ctx) => !!ctx.spinOnPress,
        isAtMax: (ctx) => ctx.isAtMax,
        isInRange: (ctx) => !ctx.isOutOfRange,
        isDecrementHint: (ctx, evt) => (evt.hint ?? ctx.hint) === "decrement",
        isIncrementHint: (ctx, evt) => (evt.hint ?? ctx.hint) === "increment",
      },

      activities: {
        trackFormControl(ctx, _evt, { initialContext }) {
          const inputEl = dom.getInputEl(ctx)
          return trackFormControl(inputEl, {
            onFieldsetDisabledChange(disabled) {
              ctx.fieldsetDisabled = disabled
            },
            onFormReset() {
              set.value(ctx, initialContext.value)
            },
          })
        },
        setupVirtualCursor(ctx) {
          return dom.setupVirtualCursor(ctx)
        },
        preventTextSelection(ctx) {
          return dom.preventTextSelection(ctx)
        },
        trackButtonDisabled(ctx, _evt, { send }) {
          const btn = dom.getPressedTriggerEl(ctx, ctx.hint)
          return observeAttributes(btn, ["disabled"], () => {
            send({ type: "TRIGGER.PRESS_UP", src: "attr" })
          })
        },
        attachWheelListener(ctx, _evt, { send }) {
          const inputEl = dom.getInputEl(ctx)
          if (!inputEl || !dom.isActiveElement(ctx, inputEl) || !ctx.allowMouseWheel) return

          function onWheel(event: WheelEvent) {
            event.preventDefault()
            const dir = Math.sign(event.deltaY) * -1
            if (dir === 1) {
              send("VALUE.INCREMENT")
            } else if (dir === -1) {
              send("VALUE.DECREMENT")
            }
          }

          return addDomEvent(inputEl, "wheel", onWheel, { passive: false })
        },
        activatePointerLock(ctx) {
          if (isSafari()) return
          return requestPointerLock(dom.getDoc(ctx))
        },
        trackMousemove(ctx, _evt, { send }) {
          const doc = dom.getDoc(ctx)

          function onMousemove(event: MouseEvent) {
            if (!ctx.scrubberCursorPoint) return
            const value = dom.getMousementValue(ctx, event)
            if (!value.hint) return
            send({
              type: "SCRUBBER.POINTER_MOVE",
              hint: value.hint,
              point: value.point,
            })
          }

          function onMouseup() {
            send("SCRUBBER.POINTER_UP")
          }

          return callAll(
            addDomEvent(doc, "mousemove", onMousemove, false),
            addDomEvent(doc, "mouseup", onMouseup, false),
          )
        },
      },

      actions: {
        focusInput(ctx) {
          if (!ctx.focusInputOnChange) return
          const inputEl = dom.getInputEl(ctx)
          if (dom.isActiveElement(ctx, inputEl)) return
          raf(() => inputEl?.focus({ preventScroll: true }))
        },
        increment(ctx, evt) {
          const nextValue = increment(ctx.value, evt.step ?? ctx.step)
          set.value(ctx, String(clamp(nextValue, ctx)))
        },
        decrement(ctx, evt) {
          const nextValue = decrement(ctx.value, evt.step ?? ctx.step)
          set.value(ctx, String(clamp(nextValue, ctx)))
        },
        clampValue(ctx) {
          const nextValue = clamp(ctx.value, ctx)
          set.value(ctx, String(nextValue))
        },
        setValue(ctx, evt) {
          const value = evt.target?.value ?? evt.value
          set.value(ctx, value)
        },
        clearValue(ctx) {
          set.value(ctx, "")
        },
        incrementToMax(ctx) {
          set.value(ctx, String(ctx.max))
        },
        decrementToMin(ctx) {
          set.value(ctx, String(ctx.min))
        },
        setHint(ctx, evt) {
          ctx.hint = evt.hint
        },
        clearHint(ctx) {
          ctx.hint = null
        },
        setHintToSet(ctx) {
          ctx.hint = "set"
        },
        invokeOnFocus(ctx) {
          ctx.onFocusChange?.({
            focused: true,
            value: ctx.formattedValue,
            valueAsNumber: ctx.valueAsNumber,
          })
        },
        invokeOnBlur(ctx) {
          ctx.onFocusChange?.({
            focused: false,
            value: ctx.formattedValue,
            valueAsNumber: ctx.valueAsNumber,
          })
        },
        invokeOnInvalid(ctx) {
          if (!ctx.isOutOfRange) return
          const reason = ctx.valueAsNumber > ctx.max ? "rangeOverflow" : "rangeUnderflow"
          ctx.onValueInvalid?.({
            reason,
            value: ctx.formattedValue,
            valueAsNumber: ctx.valueAsNumber,
          })
        },
        syncInputElement(ctx, evt) {
          const inputEl = dom.getInputEl(ctx)
          const inputValue = evt.type.endsWith("CHANGE") ? ctx.value : ctx.formattedValue

          // record cursor position before updating input value
          const sel = recordCursor(inputEl!)

          dom.setValue(inputEl, inputValue)

          // restore cursor position after updating input value
          raf(() => {
            restoreCursor(inputEl!, sel)
          })
        },
        syncInputValue(ctx) {
          const inputEl = dom.getInputEl(ctx)
          if (!inputEl || inputEl.value == ctx.value) return
          set.value(ctx, ctx.formattedValue)
        },
        setCursorPoint(ctx, evt) {
          ctx.scrubberCursorPoint = evt.point
        },
        clearCursorPoint(ctx) {
          ctx.scrubberCursorPoint = null
        },
        setVirtualCursorPosition(ctx) {
          const cursorEl = dom.getCursorEl(ctx)
          if (!cursorEl || !ctx.scrubberCursorPoint) return
          const { x, y } = ctx.scrubberCursorPoint
          cursorEl.style.transform = `translate3d(${x}px, ${y}px, 0px)`
        },
        setComposing(ctx) {
          ctx.composing = true
        },
        clearComposing(ctx) {
          ctx.composing = false
        },
        setFormatterAndParser(ctx) {
          if (!ctx.locale) return
          ctx.formatter = createFormatter(ctx.locale, ctx.formatOptions)
          ctx.parser = createParser(ctx.locale, ctx.formatOptions)
        },
      },
      compareFns: {
        formatOptions: (a, b) => isEqual(a, b),
      },
    },
  )
}

const defaultFormatOptions: Intl.NumberFormatOptions = {
  style: "decimal",
  minimumFractionDigits: 0,
  maximumFractionDigits: 20,
}

const createFormatter = (locale: string, options: Intl.NumberFormatOptions = {}) => {
  const formatOptions = Object.assign({}, defaultFormatOptions, options)
  return ref(new Intl.NumberFormat(locale, formatOptions))
}

const createParser = (locale: string, options: Intl.NumberFormatOptions = {}) => {
  const formatOptions = Object.assign({}, defaultFormatOptions, options)
  return ref(new NumberParser(locale, formatOptions))
}

const invoke = {
  onChange: (ctx: MachineContext) => {
    ctx.onValueChange?.({
      value: ctx.value,
      valueAsNumber: ctx.valueAsNumber,
    })
  },
}

const set = {
  value: (ctx: MachineContext, value: string) => {
    if (isEqual(ctx.value, value)) return
    ctx.value = value
    invoke.onChange(ctx)
  },
}

import { isHTMLElement, nextById, prevById, queryAll, getByTypeahead, createScope } from "@zag-js/dom-query"
import { first, last } from "@zag-js/utils"
import type { MachineContext as Ctx } from "./menu.types"

export const dom = createScope({
  getTriggerId: (ctx: Ctx) => ctx.ids?.trigger ?? `menu:${ctx.id}:trigger`,
  getContextTriggerId: (ctx: Ctx) => ctx.ids?.contextTrigger ?? `menu:${ctx.id}:ctx-trigger`,
  getContentId: (ctx: Ctx) => ctx.ids?.content ?? `menu:${ctx.id}:content`,
  getArrowId: (ctx: Ctx) => ctx.ids?.arrow ?? `menu:${ctx.id}:arrow`,
  getPositionerId: (ctx: Ctx) => ctx.ids?.positioner ?? `menu:${ctx.id}:popper`,
  getGroupId: (ctx: Ctx, id: string) => ctx.ids?.group?.(id) ?? `menu:${ctx.id}:group:${id}`,
  getGroupLabelId: (ctx: Ctx, id: string) => ctx.ids?.label?.(id) ?? `menu:${ctx.id}:label:${id}`,

  getContentEl: (ctx: Ctx) => dom.getById(ctx, dom.getContentId(ctx)),
  getPositionerEl: (ctx: Ctx) => dom.getById(ctx, dom.getPositionerId(ctx)),
  getTriggerEl: (ctx: Ctx) => dom.getById(ctx, dom.getTriggerId(ctx)),
  getFocusedItem: (ctx: Ctx) => (ctx.highlightedId ? dom.getById(ctx, ctx.highlightedId) : null),
  getArrowEl: (ctx: Ctx) => dom.getById(ctx, dom.getArrowId(ctx)),

  getElements: (ctx: Ctx) => {
    const ownerId = CSS.escape(dom.getContentId(ctx))
    const selector = `[role^="menuitem"][data-ownedby=${ownerId}]:not([data-disabled])`
    return queryAll(dom.getContentEl(ctx), selector)
  },
  getFirstEl: (ctx: Ctx) => first(dom.getElements(ctx)),
  getLastEl: (ctx: Ctx) => last(dom.getElements(ctx)),
  getNextEl: (ctx: Ctx, loop?: boolean) => nextById(dom.getElements(ctx), ctx.highlightedId!, loop ?? ctx.loop),
  getPrevEl: (ctx: Ctx, loop?: boolean) => prevById(dom.getElements(ctx), ctx.highlightedId!, loop ?? ctx.loop),

  getElemByKey: (ctx: Ctx, key: string) =>
    getByTypeahead(dom.getElements(ctx), { state: ctx.typeahead, key, activeId: ctx.highlightedId }),

  isTargetDisabled: (v: EventTarget | null) => {
    return isHTMLElement(v) && v.dataset.disabled === ""
  },
  isTriggerItem: (el: HTMLElement | null) => {
    return !!el?.getAttribute("role")?.startsWith("menuitem") && !!el?.hasAttribute("aria-controls")
  },
  getHighlightedOptionEl(ctx: Ctx) {
    if (!ctx.highlightedId) return null
    return dom.getById(ctx, ctx.highlightedId)
  },
})

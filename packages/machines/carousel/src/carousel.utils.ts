import type { MachineContext } from "./carousel.types"

export const getAlignment = (containerSize: number) => ({
  start: () => 0,
  center: (slideSize: number) => (containerSize - slideSize) / 2,
  end: (slideSize: number) => containerSize - slideSize,
})

export const getViewPercent = (containerSize: number, slideSize: number) => (slideSize / containerSize) * 100

export const getScrollSnap = (ctx: MachineContext) => {
  const { spacing, slidesPerView, containerRect } = ctx

  const totalSpacing = spacing * (slidesPerView - 1)

  console.log({ totalSpacing })

  if (!containerRect) return []
  const snaps = ctx.slideRects
    // 332 - 332 + 32px
    .map((rect) => containerRect[ctx.startEdge] - rect[ctx.startEdge] + spacing)
    .map((snap) => -Math.abs(snap))

  console.log({ snaps })
  return snaps
}

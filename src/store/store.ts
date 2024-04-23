import { create } from "zustand"

type hoverStore = {
  value: boolean
  mouseEnter: () => void
  mouseLeave: () => void
}
export const useHoverStore = create<hoverStore>(set => ({
  value: false,
  mouseEnter: () => {
    set(state => ({ value: true }))
  },
  mouseLeave: () => {
    set(state => ({ value: false }))
  }
}))

// type outlineSizeStore = {
//   size: boolean
//   updateSize: (size: outlineSizeStore["size"]) => void
// }
// export const useOutlineSizeStore = create<outlineSizeStore>(set => ({
//   size: false,
//   updateSize: size => {
//     set(state => ({ size: size }))
//   }
// }))

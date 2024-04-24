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

type outlinePositionStore = {
	value: { x: number; y: number }
	setX: (x: number) => void
	setY: (y: number) => void
}

export const useOutlinePositionStore = create<outlinePositionStore>(set => ({
	value: { x: 0, y: 0 },
	setX: x => set(state => ({ value: { x: x, y: state.value.y } })),
	setY: y => set(state => ({ value: { x: state.value.x, y: y } }))
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

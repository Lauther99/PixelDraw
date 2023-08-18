import { create } from 'zustand'

const idStore = create((set) => ({
    index: 0,
    increaseIndex: () => set((state) => ({
        index: state.index + 1
    }
    )),
}))

export default idStore;



import { create } from "zustand";

export const useStore = create((set) => ({
    active: false,
    toogleActive: (e) => {

        if (e.target.name == "btnCloseCard") {
            set((state) => ({ active: false }))
        }
        else {
            set((state) => ({ active: true }))
        }
    }
}))
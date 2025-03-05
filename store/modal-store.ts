import { create } from "zustand"

type ModalStore = {
  isOpen: boolean
  inputValue: string
  setInputValue: (value: string) => void
  open: () => void
  close: () => void
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  inputValue: "",
  setInputValue: (value: string) => set({ inputValue: value }),
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}))
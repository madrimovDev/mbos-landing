import {create} from 'zustand';
interface ModalState {
  isOpen: boolean;
}

interface ModalActions {
  openModal: () => void;
  closeModal: () => void;
}

type ModalStore = ModalState & ModalActions;
const useModalStore = create<ModalStore>()((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));

export default useModalStore;

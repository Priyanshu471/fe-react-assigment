import { create } from "zustand";
type State = {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
};
export const useCustom = create<State>((set) => ({
  isAuth: false,
  setIsAuth: (isAuth) => set({ isAuth }),
}));

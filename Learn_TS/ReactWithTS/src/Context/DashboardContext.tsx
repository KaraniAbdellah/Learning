import { createContext, useContext } from "react";
import type { User } from "../types/User";
export const DashboardContext = createContext<User | undefined>(undefined);

// Create Custom Hook
export function useUserDashBoardContext() {
  const user = useContext(DashboardContext);
  return user ? user : new Error("User undefine");
}

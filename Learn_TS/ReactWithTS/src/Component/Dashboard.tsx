import React, { useContext } from "react";
import { useUserDashBoardContext } from "../Context/DashboardContext";

const Dashboard = () => {
  //   const user = useContext(DashboardContext); // with custom hook [we need ? --> user?.name]
  const user = useUserDashBoardContext();
  return <div>Hello {user.name}</div>; // this problem apear when we do not have custom hook in DashboardContext
};

export default Dashboard;

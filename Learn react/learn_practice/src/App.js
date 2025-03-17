import Home from "./Components_For_Learn/private_route/Home";
import Profile from "./Components_For_Learn/private_route/Profile";
import Login from "./Components_For_Learn/private_route/Login";
import {Routes, Route, Navigate} from "react-router-dom"
import ProtectedRoutes from "./Components_For_Learn/private_route/ProtectedRoutes";

function App() {
  const user = false;
  return (
    // Start Learning Private Route
    <div>
        <Routes>
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}></Route>
          <Route element={<ProtectedRoutes user={user}></ProtectedRoutes>}>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/profile" element={<Profile></Profile>}></Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;


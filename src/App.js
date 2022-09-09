import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Profile from "./pages/Profile";
import Notification from "./components/Notifications/Notifications";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./RequiredAuth";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"/signin"} element={<LogIn />} />
        <Route element={<RequireAuth />}>
          <Route path={"/me"} element={<Profile />} />
        </Route>
      </Routes>
      <Notification />
    </div>
  );
};

export default App;

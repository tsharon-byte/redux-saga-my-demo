import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./redux/actions/auth";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <button onClick={() => dispatch(login())}>LOGIN</button>
      <button onClick={() => dispatch(logout())}>LOGOUT</button>
    </div>
  );
}

export default App;

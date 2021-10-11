import React from "react";
import { UserState } from "./contexts/User/UserState";
import Demo from "./Demo";
import "./style.css";

export default function App() {
  return (
    <UserState>
      <Demo />
    </UserState>
  );
}


import React, { useState } from "react";
import { UserProvider } from "./context/UserContext";
import UserSelector from "./components/UserSelector";
import ClaimButton from "./components/ClaimButton";
import Leaderboard from "./components/Leaderboard";
import ClaimHistory from "./components/ClaimHistory";
import Image from "./assets/wing-removebg-preview.png"

import "./App.css"; 

function App() {
  const [selectedUser, setSelectedUser] = useState("");

  return (
    <UserProvider>
      <div className="app-container">
        
        <h1 className="app-title">   <img src={Image} alt="Leaderboard" className="app-image" />Leaderboard App</h1>
        
        <UserSelector selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        <ClaimButton selectedUser={selectedUser} />
        <Leaderboard />
        <ClaimHistory />
      </div>
    </UserProvider>
  );
}

export default App;





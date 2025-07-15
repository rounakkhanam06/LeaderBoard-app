import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import "./ClaimButton.css";

const ClaimButton = ({ selectedUser }) => {
  const { fetchUsers, fetchHistory } = useContext(UserContext);
  const [points, setPoints] = useState(null);

  const handleClaim = async () => {
    if (!selectedUser) return alert("Select a user first!");

    try {
      const res = await axios.post("http://localhost:5000/api/claim", {
        userId: selectedUser,
      });

      setPoints(res.data.claimedPoints);
      fetchUsers();
      fetchHistory();
    } catch (error) {
      alert("Failed to claim points. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="claim-button-container">
      <button className="claim-button" onClick={handleClaim}>
        Claim Points
      </button>
      {points !== null && (
        <div className="claim-points-message">
          🎯 Claimed <strong>{points}</strong> points!
        </div>
      )}
    </div>
  );
};

export default ClaimButton;





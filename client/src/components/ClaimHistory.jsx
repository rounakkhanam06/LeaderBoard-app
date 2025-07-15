import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./ClaimHistory.css";

const ClaimHistory = () => {
  const { history } = useContext(UserContext);

  return (
    <div className="claim-history-container">
      <h3 className="claim-history-title">📜 Claim History</h3>
      <div className="claim-history-header">
        <span>User</span>
        <span>Points</span>
        <span>Time</span>
      </div>
      <div className="claim-history-rows">
        {history.map((item, index) => (
          <div className="claim-history-row" key={index}>
            <span>{item.userName}</span>
            <span>{item.claimedPoints}</span>
            <span>{new Date(item.timestamp).toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClaimHistory;




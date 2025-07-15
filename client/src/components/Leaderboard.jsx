
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./Leaderboard.css";

const Leaderboard = () => {
  const { users } = useContext(UserContext);

  if (!users || users.length === 0) {
    return <p className="loading-text">Loading leaderboard...</p>;
  }

  const sortedUsers = [...users].sort((a, b) => b.points - a.points);

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-card">
        <h1 className="leaderboard-header">🏆 Leaderboard</h1>

        {/* Table Header */}
        <div className="leaderboard-header-row">
          <span className="column name">Name</span>
          <span className="column points">Total Points</span>
          <span className="column rank">Rank</span>
        </div>

        {/* Users List */}
        <div className="leaderboard-body">
          {sortedUsers.map((user, index) => (
            <div key={user._id} className="leaderboard-row">
              <span className="column name">{user.name}</span>
              <span className="column points">{user.totalPoints}</span>
              <span className="column rank">#{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;










// src/context/UserContext.jsx

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [history, setHistory] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      setUsers(res.data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  const fetchLeaderboard = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      setLeaderboard(res.data);
    } catch (error) {
      console.error("Failed to fetch leaderboard:", error);
    }
  };

  const fetchHistory = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/history");
      setHistory(res.data);
    } catch (error) {
      console.error("Failed to fetch history:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchLeaderboard();
    fetchHistory();
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        leaderboard,
        history,
        fetchUsers,
        fetchLeaderboard,
        fetchHistory,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};






// import React, { createContext, useEffect, useState } from "react";
// import axios from "axios";

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [users, setUsers] = useState([]);
//   const [history, setHistory] = useState([]);

//   const leaderboard = [...users].sort((a, b) => b.totalPoints - a.totalPoints);

//   const fetchUsers = async () => {
//     const res = await axios.get("http://localhost:5000/api/users");
//     setUsers(res.data);
//   };

//   const fetchHistory = async () => {
//     const res = await axios.get("http://localhost:5000/api/history");
//     setHistory(res.data);
//   };

//   useEffect(() => {
//     fetchUsers();
//     fetchHistory();
//   }, []);

//   return (
//     <UserContext.Provider
//       value={{ users, leaderboard, history, fetchUsers, fetchHistory }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };




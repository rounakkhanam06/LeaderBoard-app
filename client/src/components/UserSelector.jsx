import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import "./UserSelector.css";

const UserSelector = ({ selectedUser, setSelectedUser }) => {
  const { users, fetchUsers } = useContext(UserContext);
  const [newUser, setNewUser] = useState("");
  const [errorMsg, setErrorMsg] = useState("");


// add new User
  const handleAddUser = async () => {
    if (!newUser.trim()) {
      setErrorMsg("⚠️ Please enter a name before adding.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/users", { name: newUser });
      setNewUser("");
      setErrorMsg("");
      fetchUsers();
    } catch (err) {
      setErrorMsg("Something went wrong. Try again.");
    }
  };



  return (
    <div className="user-selector-container">
      <h3 className="user-selector-title">Select or Add User</h3>

      {/* User Dropdown */}
      <select
        className="user-select"
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
      >
        <option value="">-- Select User --</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>

      {/* Add User Input */}
      <div className="add-user-group">
        <input
          type="text"
          className="add-user-input"
          placeholder="Enter new user name"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleAddUser()}
        />
        <button className="add-user-button" onClick={handleAddUser}>
          Add
        </button>
      </div>
       {errorMsg && <div>{errorMsg}</div>}
    </div>
  );
};

export default UserSelector;




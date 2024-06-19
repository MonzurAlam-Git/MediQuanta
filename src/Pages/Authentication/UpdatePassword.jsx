import { getAuth, updatePassword } from "firebase/auth";
import React, { useState } from "react";

const UpdatePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handlePasswordChange = () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      updatePassword(user, newPassword)
        .then(() => {
          setSuccess("Password updated successfully!");
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
          setSuccess(null);
        });
    } else {
      setError("No user is currently signed in.");
      setSuccess(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="card w-96 bg-white shadow-xl p-6">
        <h2 className="card-title text-center mb-4">Update Password</h2>
        {error && <div className="alert alert-error">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        <div className="mb-4">
          <label
            className="block text-sm font-bold mb-2"
            htmlFor="new-password"
          >
            New Password
          </label>
          <input
            id="new-password"
            type="password"
            className="input input-bordered w-full"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary w-full"
          onClick={handlePasswordChange}
        >
          Update Password
        </button>
      </div>
    </div>
  );
};

export default UpdatePassword;

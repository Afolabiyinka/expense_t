import React, { useState, useEffect } from "react";
import { Tooltip } from "@mui/material";

function ProfilePicUpload() {
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    const savedPic = localStorage.getItem("profilePic");
    if (savedPic) setProfilePic(savedPic);
  }, [profilePic]);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      setProfilePic(base64String);

      localStorage.setItem("profilePic", base64String);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <Tooltip title="Profile pic" placement="top" arrow>
        <label htmlFor="profile-upload" className="cursor-pointer">
          {profilePic ? (
            <img
              src={profilePic}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover hover:opacity-60"
            />
          ) : (
            <label
              htmlFor="profile-upload"
              className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-400  cursor-pointer font-bold"
            >
              +
            </label>
          )}
        </label>
        <input
          id="profile-upload"
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />
      </Tooltip>
    </div>
  );
}

export default ProfilePicUpload;

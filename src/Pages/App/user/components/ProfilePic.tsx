import React, { useState, useEffect } from "react";
import { Tooltip } from "@mui/material";

function ProfilePicUpload() {
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    const savedPic: any = localStorage.getItem("profilePic");
    if (savedPic) setProfilePic(savedPic);
  }, [profilePic]);

  const handleChange = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String: any = reader.result;
      setProfilePic(base64String);

      localStorage.setItem("profilePic", base64String);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Tooltip
      title={`${profilePic ? "Change Pic" : "Upload Pic"}`}
      placement="top"
      arrow
    >
      <div className="flex flex-col items-center gap-3">
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
              className="w-14 h-14 rounded-full flex items-center justify-center border border-custom-border  cursor-pointer font-bold"
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
      </div>
    </Tooltip>
  );
}

export default ProfilePicUpload;

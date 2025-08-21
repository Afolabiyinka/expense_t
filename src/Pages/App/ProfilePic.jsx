import React, { useState, useEffect } from "react";

function ProfilePicUpload() {
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    const savedPic = localStorage.getItem("profilePic");
    if (savedPic) setProfilePic(savedPic);
  }, []);

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
      <label htmlFor="profile-upload" className="cursor-pointer">
        {profilePic ? (
          <img
            src={profilePic}
            alt="Profile"
            className="w-11 h-11 rounded-full object-cover hover:opacity-60"
          />
        ) : (
          <label
            htmlFor="profile-upload"
            className="w-11 h-11 rounded-full flex items-center justify-center border border-gray-400  cursor-pointer font-bold"
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
  );
}

export default ProfilePicUpload;

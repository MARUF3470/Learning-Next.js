import React from "react";

const ProfilePage = ({ params }) => {
  const [name] = params.segments || [];
  return <div>{name || new Date().getFullYear()}</div>;
};

export default ProfilePage;

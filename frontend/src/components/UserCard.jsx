import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={user.avatar} alt={user.firstName} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {user.firstName} {user.lastName}
        </div>
        <p className="text-gray-700 text-base">Email: {user.email}</p>
        <p className="text-gray-700 text-base">Gender: {user.gender}</p>
        <p className="text-gray-700 text-base">Domain: {user.domain}</p>
        <p className="text-gray-700 text-base">
          Available: {user.available ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
};

export default UserCard;

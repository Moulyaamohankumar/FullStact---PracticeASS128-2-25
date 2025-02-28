import React, { useState } from 'react';

export const UserCard = () => {
  const [photo, setPhoto] = useState("https://via.placeholder.com/150");
  const [name, setName] = useState("John Doe");
  const [address, setAddress] = useState("123 Main Street, City, Country");
  const [mail, setMail] = useState("johndoe@example.com");
  const [phone, setPhone] = useState("+1 234 567 890");

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg p-5 bg-white">
      <img className="w-24 h-24 rounded-full mx-auto" src={photo} alt="Profile" />
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{mail}</p>
        <p className="text-gray-600">{phone}</p>
        <p className="text-gray-600">{address}</p>
      </div>
    </div>
  );
};

export default UserCard;
// write the component code here

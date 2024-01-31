// CreateRoom.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CreateRoom = () => {
  return (
    <div className="container">
      <Link to={`/room/${uuid.v4()}`} id="create-btn" className="button">
        Create room
      </Link>
    </div>
  );
};

export default CreateRoom;

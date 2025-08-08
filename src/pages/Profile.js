import React from 'react';
import { auth } from '../firebase';

import { signOut } from "firebase/auth";

function Profile() {
  const user = auth.currentUser;

  return (
    <div>
      <h2>Welcome, {user?.email}</h2>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  );
}

export default Profile;

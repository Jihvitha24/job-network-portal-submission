import React, { useState } from 'react';
function ProfilePage() {
  const [profile, setProfile] = useState({ name: '', bio: '', wallet: '' });
  const updateProfile = () => { console.log('Profile Updated:', profile); alert('Profile Updated Successfully (Mock)'); };
  return (<div><h2>Profile</h2><input placeholder="Name" value={profile.name} onChange={e => setProfile({ ...profile, name: e.target.value })}/><button onClick={updateProfile}>Update Profile</button></div>);
}
export default ProfilePage;

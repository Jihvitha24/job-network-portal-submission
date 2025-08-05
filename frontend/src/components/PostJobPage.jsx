import React, { useState } from 'react';
function PostJobPage() {
  const [job, setJob] = useState({ title: '', description: '', skills: '', budget: '' });
  const postJob = () => { console.log('Job Posted:', job); alert('Job Posted Successfully (Mock)'); };
  return (<div><h2>Post a Job</h2><input placeholder="Title" value={job.title} onChange={e => setJob({ ...job, title: e.target.value })}/><button onClick={postJob}>Post Job</button></div>);
}
export default PostJobPage;

import React, { useState, useEffect } from 'react';
import data from './assets/data.json';
import JobBoardComponent from './components/JobBoardComponent';


function App() {
  const [jobs, setJobs] = useState([]);

  useEffect( () => {
    setJobs(data);
  }, []);

  return (
    <div className="App">
       <header className="bg-green-200 mb-12">
         <img src='/img/bg-header-desktop.svg' alt='Desktop' />
       </header>
       {
          jobs.length === 0 ? (
            <p>Jobs are fetching...</p>
          ) : (
            jobs.map((job) => <JobBoardComponent job={job} key={job.id} />
            ) 
          )
       }
    </div>
  );
}

export default App;

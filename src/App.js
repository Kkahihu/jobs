import React, { useState, useEffect } from 'react';
import data from './assets/data.json';
import JobBoardComponent from './components/JobBoardComponent';


function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect( () => {
    setJobs(data);
  }, []);

  const filterByTags = ({role, level, tools, languages}) => {
    if(filters.length === 0) {
      return true;
    }
     const tags = [role, level];

        if (tools) {
            tags.push(...tools);
        }

        if (languages) {
            tags.push(...languages);
        }

        return tags.some(tag => filters.includes(tag));
  };

  const handleTagClick = (tag) => {
    setFilters([...filters, tag]);
  };

  const filteredJobs = jobs.filter(filterByTags);

  return (
    <div className="App">
       <header className="bg-green-200 mb-12">
         <img src='/img/bg-header-desktop.svg' alt='Desktop' />
       </header>
       {
          jobs.length === 0 ? (
            <p>Jobs are fetching...</p>
          ) : (
            jobs.map((job) => (
              <JobBoardComponent 
                job={job} 
                key={job.id} 
                handleTagClick={handleTagClick} 
              />)
            ) 
          )
       }
    </div>
  );
}

export default App;

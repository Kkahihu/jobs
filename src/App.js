import React, { useState, useEffect } from 'react';
import data from './assets/data.json';
import JobBoardComponent from './components/JobBoardComponent';


function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect( () => {
    setJobs(data);
  }, []);

  const filterFunc = ({role, level, tools, languages}) => {
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

  

  const filteredJobs = jobs.filter(filterFunc);

  return (
    <div className="App">
       <header className="bg-green-200 mb-12">
         <img src='/img/bg-header-desktop.svg' alt='Desktop' />
       </header>
       <div className={`flex bg-white shadow-md my-16 mx-10 p-6 rounded`}>
         {
           filters.length > 0 && 
           filters.map(
             (filter) => <span onClick={() => handleTagClick
             (filter)}
             className='text-green-400 bg-green-100 font-bold mr-4 mb-4 p-2 rounded sm:mb-0'>{filter}</span>)
         }
       </div>
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

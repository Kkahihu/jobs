import React, { useState, useEffect } from 'react';
import data from './assets/data.json';
import JobBoardComponent from './components/JobBoardComponent';


function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect( () => {
    setJobs(data);
  }, []);

  const filterFunc = ({ role, level, tools, languages } 
  ) => {
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

        return tags.some((tag) => filters.includes(tag));
  };

  const handleTagClick = (tag) => {
    // avoid re-adding tag
    if (filters.includes(tag)) return;

    setFilters([...filters, tag]);
  };

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  };

  const filteredJobs = jobs.filter(filterFunc);

  return (
    <div className="App">
       <header className="bg-green-200 mb-12">
         <img src='/img/bg-header-desktop.svg' alt='Desktop' />
       </header>
         {
           filters.length > 0 && (
             <div className={`flex bg-white shadow-md my-16 mx-10 p-6 rounded`}>
                {filters.map(
                  (filter) => <span onClick={() => handleFilterClick
                  (filter)}>
                    <span className='text-green-400 bg-green-100 font-bold mr-4 mb-4 p-2 rounded sm:mb-0'>{filter} 
                    </span>
                    <span className='text-green-400 bg-green-100 cursor-pointer font-bold mr-2 mb-4 p-2 rounded sm:mb-0'>X
                    </span>
                  </span>)
         }
       </div>
           )}
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

import React, { useState, useEffect }from 'react';
import data from './assets/data.json'
import JobBoardComponent from './components/JobBoardComponent';


function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);

  }, []);


  console.log(jobs);


  return (
    <div className="App">
       <h1>Hello Sir</h1>
       <JobBoardComponent />
    </div>
  );
}

export default App;

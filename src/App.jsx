import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import AddJobPage from './pages/AddJobPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';
import EditJobPage from './pages/EditJobPage';



const App = () => {

  // add new job
  const addJob = async (newJob) => {
    
    const res = await fetch('/api/jobs',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newJob)
    });

    return;
  }

 // delete job  
  const deleteJob = async (jobId) => {

    const res = await fetch(`/api/jobs/${jobId}`,{
      method: 'DELETE',
      
    });

    return;

  }

  // edit job
  const updateJob = async (updatedJob) => {
    
    const res = await fetch(`/api/jobs/${updatedJob.id}`,{
      method: 'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(updatedJob)
    });

    return;
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
  
      <Route  path = '/' element = {<MainLayout />}>
             {/* all routes here will use the MainLayout as the layout */}
        <Route index element = { <HomePage/>} />

        <Route path='/jobs' element = { <JobsPage/>} />

        <Route path='/edit-job/:id' element = { <EditJobPage updatedJobSubmit = {updateJob} />} loader = {jobLoader}/>

        <Route path='/jobs/:id' element = { <JobPage deleteJob={deleteJob}/>} loader = {jobLoader}/>

        <Route path='/add-job' element = { <AddJobPage addJobSubmit={addJob}/>} />

        <Route path='*' element = { <NotFoundPage/>} />
  
      </Route>
      
    )
  );
  
  return (
    <RouterProvider router={ router} />
    // <>
      
      
      

    //   <Homecard />
      
    //   <JobListings />

    //   <ViewAllJobs />
    
    // </>
  )
}

export default App

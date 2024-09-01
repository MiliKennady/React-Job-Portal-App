import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import AddJobPage from './pages/AddJobPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route  path = '/' element = {<MainLayout />}>
           {/* all routes here will use the MainLayout as the layout */}
      <Route index element = { <HomePage/>} />
      <Route path='/jobs' element = { <JobsPage/>} />
      <Route path='/jobs/:id' element = { <JobPage/>} loader = {jobLoader}/>
      <Route path='/add-job' element = { <AddJobPage/>} />
      <Route path='*' element = { <NotFoundPage/>} />

    </Route>
    
  )
);

const App = () => {
  
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

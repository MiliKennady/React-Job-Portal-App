import React from 'react'
import Hero from '../components/Hero'
import Homecard from '../components/Homecard';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

function HomePage() {
  return (
    <>
        <Hero
    title = "Become a React Dev" 
    subtitle = "Find the React job that fits your skills and needs"/>

    <Homecard />

    <JobListings isHome = {true}/>
    <ViewAllJobs />
    </>
    
  )
}

export default HomePage

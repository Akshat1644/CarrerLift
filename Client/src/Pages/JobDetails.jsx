/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import PageHeader from '../components/PageHeader';

const JobDetails = () => {
    const {id}=useParams();
    const [job,setJob]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:3000/all-jobs/${id}`).then(res => res.json()).then(data => setJob(data))
    },[])

    const handleApply= async()=>{
        const { value: url } = await Swal.fire({
            input: "url",
            inputLabel: "URL address",
            inputPlaceholder: "Enter the URL"
          });
          if (url) {
            Swal.fire(`Entered URL: ${url}`);
          }
    }

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <PageHeader title={"Single Job Page"} path={"Single Job"}/>

    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>

      <h2 className='text-3xl mt-5 text-primary'>Job Details</h2>

      <p>Here's how the job details align with your job preferences.Manage job preference anytime in your profile.</p>

      <h1 className='mt-2 text-blue text-2xl'>{job.jobTitle}</h1>

      <button className='bg-pink px-8 py-2 mt-2 text-white' onClick={handleApply}>Apply Now</button>
    </div>
    </div>
  )
}

export default JobDetails

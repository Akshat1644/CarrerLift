import React from 'react'
import InputField from '../components/InputField'
import "../App.css"

const Location = ({handleChange}) => {
  return (
    <div>
      <h4 className='text-pink font-medium mb-2'>Location</h4>

      <div className='text-pink'>
        <label className='sidebar-label-container'>
            <input type="radio" 
            name="test" 
            id="test"
            value="" 
            onChange={handleChange}/>
            <span className='checkmark'>
            </span>All
        </label>

        <InputField 
        handleChange={handleChange} 
        value="hyderabad" 
        title="Hyderabad"
        name="test"
        />
        <InputField 
        handleChange={handleChange} value="pune" 
        title="Pune"
        name="test"
        />
        <InputField 
        handleChange={handleChange} value="mumbai" 
        title="Mumbai"
        name="test"
        />
        <InputField 
        handleChange={handleChange} value="delhi" 
        title="Delhi"
        name="test"
        />
      </div>
    </div>
  )
}

export default Location

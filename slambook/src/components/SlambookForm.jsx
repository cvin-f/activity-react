
import React from 'react'
import { useState, useEffect } from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import SlambookSaved from './SlambookSaved';

function SlambookForm() {
    const [slambook, setSlambook] = useState([]);
    const [slamBookData, setSlamBookData ] = useState({
        name : '',
        age : '',
        contact_no : '',
        fav_color: '',
        fav_food : ''
    })
   
    const handleChange =(e)=> {
        const key = e.target.id;
        const val = e.target.value;
        setSlamBookData((prev) => ({ ...prev, [key]: val }))
       
    }

    const handleSubmit = (e)=>{
        setSlambook([...slambook, slamBookData])
    }

  return (
    <>
    <div className='flex inline grid grid-cols-3'>
    <div className='bg-green-100 w-96 content-center'>
        <form className="flex p-10 max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="name"
            value="Name : "
          />
        </div>
        <TextInput
          id="name"
          required
          shadow
          onChange={handleChange}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="age"
            value="Age :"
          />
        </div>
        <TextInput
          id="age"
          required
          shadow
          onChange={handleChange}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="contact_no"
            value="Contact Number :"
          />
        </div>
        <TextInput
          id="contact_no"
          required
          shadow
          onChange={handleChange}
        />
      </div>

      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="fav-color"
            value="Favorite Color :"
          />
        </div>
        <TextInput
          id="fav_color"
          required
          shadow
          onChange={handleChange}
        />
      </div>

      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="fav-food"
            value="Favorite Food :"
          />
        </div>
        <TextInput
          id="fav_food"
          required
          shadow
          onChange={handleChange}
        />
      </div>
     
      <Button onClick={handleSubmit}>
        Submit
      </Button>
    </form>
    </div>
    {slambook.map((data) => (
            <SlambookSaved 
            props={data} key={data}
          />
        ))}
    </div>
    </>
  
    
  )
}

export default SlambookForm
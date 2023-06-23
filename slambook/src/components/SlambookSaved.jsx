import React from 'react'


function SlambookSaved({props}) {
  return (
    
    <div className='m-4'>
    <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary">{props.name}</h1>
        <hr />
        <div>
            <h3 className="mb-6 mt-2 leading-tight text-primary">{ props.age + "Years Old"} </h3>
            <h3 className="mb-6 mt-0 leading-tight text-primary">{ props.contact_no} </h3>
        </div>
        <h2 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary">Favorites</h2>
        <hr />
        <div>
             <h3 className="mb-6 mt-2 leading-tight text-primary">{props.fav_color}</h3>
             <h3 className="mb-6 mt-0 leading-tight text-primary">{props.fav_food}</h3>

        </div>
    

    </div>
   
  )
}

export default SlambookSaved
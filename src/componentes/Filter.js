import React from 'react';

export const Filter = ({filter,handleChange})=>{


    return <div className='filter-css'>
        <input type="text" value={filter} onChange={(e)=>handleChange(e)} />
    </div>
}
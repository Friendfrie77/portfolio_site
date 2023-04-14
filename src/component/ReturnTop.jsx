import React from 'react'
import {NavHashLink} from 'react-router-hash-link'

function ReturnTop() {
  return (
    <div className='return-to-top'>
        <NavHashLink smooth to='/#hero'>Return to top</NavHashLink>
    </div>
  )
}

export default ReturnTop

import React from 'react'
import {NavHashLink} from 'react-router-hash-link'

function ReturnTop() {
  return (
    <div className='return-to-top'>
        <NavHashLink smooth to='/#hero'> &#8679; Return to top &#8679;</NavHashLink>
    </div>
  )
}

export default ReturnTop

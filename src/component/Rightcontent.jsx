import React from 'react'
import Rightcard from './Rightcard'
import data from './data'

const Rightcontent = () => {
  return (
    <div className='rightcontent'>
      {data.map((elem, idx) => {
        return <Rightcard key={idx} name={elem.name} img={elem.image} />
      })}
    </div>
  )
}

export default Rightcontent

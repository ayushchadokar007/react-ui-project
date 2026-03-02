import React from 'react'

const Rightcard = (props) => {
  return (
    <div className="rightcard" style={{
        backgroundImage: `url(${props.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
      <h1>{props.name}</h1>
      <p>Lorem ipsummus impedit soluta ipsum, non eum culpa laudantium dolorum in repellat nostrum, esse voluptatibus? Reiciendis necessitatibus molestias magnam itaque rerum quas.</p>
      <button className="viewbtn">
        View Profile <span className="arrow">➡</span>
      </button>
    </div>
  )
}

export default Rightcard


//  ke={props.key} style={{background-image: 'url(${props.img})'}}
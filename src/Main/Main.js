import React from 'react'
import '../Main/Main.css'
const Main = (props) => {
  return (
    <div className="container-imgmH">
        <img  class="imgp" src={props.MainImg}/>
        <div className="Main-textmH">
            <h1 class="h1p">{props.title}</h1>
            <p class="tp">{props.text}</p>
            <a href={props.url} className={props.btnclass}>{props.buttonText} <i class="fa-solid fa-arrow-right"></i></a>
        </div>
    </div>
  )
}

export default Main
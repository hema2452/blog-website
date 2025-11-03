import React from 'react'
import mapIcon from '../assets/FIll 219.png'
import './main-content.css'

const MainContent = (props) => {
  const {img, title} = props.data
  return (
    <main className='main-content'>
        <div className="card">
        <div className="img-container">
            <img src={img.src} alt={props.data.img.alt} />
        </div>
        <div className='content'>
            <div className="upper-content">
                <div>
                <img src={mapIcon} alt="" />
                <span>{props.data.country}</span>
                </div>               
                <a href={props.data.googleMapsLink}>View on Google Maps</a>
            </div>
            <h1>{title}</h1>
            <p className='container'>{props.data.date}</p>
            <p className='description'>
              {props.data.text}</p>
          


        </div>

            
        </div>
    

    </main>
  )
}

export default MainContent

import React from 'react'
import './Hero.css'
import react from '../../assets/react.svg'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import sp from '../../assets/sp-1.jpeg'

const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-content">
            <h2>Building Digital Experiences That Inspire</h2>
            <p>Passionate Frontend Developer | Transforming Ideas into seamless 
                and visually Stunning web solutions.
            </p>
        </div>
        <div className="hero-img">
            <div>
                <div className="tech-icon">
                    <img src={react} alt="" />
                </div>
                <img className='sp-img' src={sp} alt="" />
            </div>
            <div>
                <div className="tech-icon">
                    <img src={html} alt="" />
                </div>
                <div className="tech-icon">
                    <img src={css} alt="" />
                </div>
                <div className="tech-icon">
                    <img src={js} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm K Sri Sai Santhosh Aryan,</span> Full Stack Developer</h1>
      <p>I am a motivated and versatile individual, always eager to take on new challenges. 
        With a passion for learning I am dedicated to deliver high-quality results.
         With a positive attitude and a growth mindset, 
         I am ready to make a meaningful contribution and achieve great things.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <button
  class="hero-resume"
  onClick={() => window.open('https://drive.google.com/file/d/1gb3QVIzoHTrXnN-QnnPenizBhUFJlvSN/view', '_blank')}
>
  My resume
</button>
      </div>
    </div>
  )
}

export default Hero

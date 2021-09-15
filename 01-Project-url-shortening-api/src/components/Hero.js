import React from 'react';
import heroImg from '../images/illustration-working.svg';

function Hero() {
  return (
    <section className='hero-center'>
      <img src={heroImg} alt='hero' />
      <div className='hero-info'>
        <h2>More than just shorter links</h2>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className='hero-btn' type='button'>
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;

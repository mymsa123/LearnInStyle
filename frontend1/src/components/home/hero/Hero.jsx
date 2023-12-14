import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO EDUQUIK' title='Best Online Education Expertise' />
            <p>Unlock your potential with our diverse range of online courses, designed to empower learners at every skill level</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
              <a href="/courses">All Courses</a> <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <div className='margin'></div> */}
    </>
  )
}

export default Hero

import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center' > {text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)
const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hey There,I am <span className="font-semibold">Piyush</span>👋
            <br />
            Web and Software Developer
        </h1>
    ),
    2: (
        <InfoBox
            text="Worked on several technologies and picked several skills alongwith some industry experience"
            link="/about"
            btnText="Learn More"
        />
    ),
    3: (
        <InfoBox
            text="Made Several Projects to Sharpen the skills, curious about the impact?"
            link="/projects"
            btnText="Visit Portfoloio"
        />
    ),
    4: (
        <InfoBox
            text="Have an Idea and need a dev to implement it? I'm just some clicks away"
            link="/contact"
            btnText="Let's Talk"
        />
    ),
}


const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;

}

export default HomeInfo
//reusable components making, a really good react feature and can be used many times, space and efforts saving 
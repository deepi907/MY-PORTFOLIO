import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'
const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">

            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
            </Link>
            </div>
)
const renderContent = {
    1: (
        <div className="image-container">
            <h1
                style={{
                    backgroundImage: 'url(./src/Assests/spide.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'cover',
                    color: 'white',
                    textAlign: 'center',
                    padding: '20px',
                }}
            >
                Hi, I am <span className="font-semibold">Deepika</span>
            </h1>
        </div>
    ),
    2: (<InfoBox text="design many projects"
    link="/about"
    btnText="Learn more"
    />),
    3:( <InfoBox text="design many projects"
    link="/projects"
    btnText="Visit my portfolio"
    />),
    4: (<InfoBox text="design many projects"
    link="/contact"
    btnText="Let's talk"
    />),
            }

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo;

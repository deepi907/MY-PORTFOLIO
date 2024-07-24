import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import React from 'react'
import { skills, education } from '../constants'
import CTA from '../components/CTA'

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">DEEPIKA</span>
        </h1>
        <div className="mt-5flex flex-col gap-3 text-slate-500">
          <p>
            Aspiring developer specializing in technical
            education through hands-on learning and building
             application
          </p>
          </div>

          <div className="py-10 flex flex-col">
            <h3 className="subhead-text">My Skills</h3>

            <div className="mt-16 flex flex-wrap gap-12">
              {skills.map((skill) => (
                <div className="block-container w-20 h-20">
                 <div className="btn-back rounded-x1" />
                  <div className="btn-front rounded-xl flex justify-center items-center">
                    <img 
                    src={skill.imageUrl}
                    alt={skills.name}
                    className="w-1/2 h-1/2 object-contain"
                    />
                    </div>
                    </div>
              ))}
              </div>
            </div>
                  <div className="py-16">
                    <h3 className="subhead-text">Education</h3>
                    <div className="mt-5flex flex-col gap-3 text-slate-500">
          <p>
           these are my education qualificaton
          </p>
          </div>
          <div className="mt-12 flex">
            <VerticalTimeline>
              {education.map((education) =>(
                <VerticalTimelineElement>
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {education.title} 
                     
                    </h3>
                    <h2 className="text-black text-xl font-poppins ">
                      {education.company_name} 
                     </h2>
                     <h1 className="text-black text-xl font-poppins ">
                      {education.CGPA} 
                     
                    </h1>
                    <p className=""></p>
                  </div>
                  </VerticalTimelineElement>
              ))}
              </VerticalTimeline>
            </div>
                    </div>
            <hr className="border-slate-200" />
            < CTA />
    </section>
  )
}

export default About
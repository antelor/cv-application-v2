/* eslint-disable react/prop-types */
import '../styles/CVDisplay.scss'

function CVDisplay({ info }) {

  return (
    <>
    <div className="Display">
        <div className='introduction container'>
            <div className='personalInfo'>
                <div className='personalInfoSection'>
                    <span className='fullName'>{info.generalInfo.fullName}</span>
                    <span>{info.generalInfo.location}</span>
                </div>
                <div className='personalInfoSection'>
                    <span className='website'>
                        {info.generalInfo.website}
                    </span>
                    <span>
                        {info.generalInfo.email} | {info.generalInfo.phone}
                    </span>
                </div>
                
            </div>
            <h2>Summary</h2>
            <hr></hr>

            <div className='summary'>
                {info.generalInfo.summary}
            </div>
        </div>
        
        <div className='skills container'>
            <h2>Skills</h2>
            <hr></hr>
            <ul className='skillList'>
                {info.skills.map( (skill, index) => {
                    return <li className="skillName" key={index}>
                    <span className="titleText"> {skill.title}:</span> <span>{skill.desc}</span>  
                    </li>
                })}
            </ul>
        </div>
        
        <div className='experience container'>
            <h2>Experience</h2>
            <hr></hr>
            <div className='jobList'>
                {info.experience.map((job, index)=>{
                    return <div key={index} className='jobContainer'>
                            <div className='titleContainer'>
                                <span>
                                    <span className='titleText'>{job.position}, </span>
                                    <span>{job.location}</span>
                                </span>
                                <span className='date'>
                                    <span>{job.startDate}</span>
                                    <span>-</span>
                                    <span>{job.endDate}</span>
                                </span>
                            </div>
                            <div>
                                <div className='description'>  {job.desc} </div>
                            </div> 
                        </div>
                } )}
            </div>
        </div>
        
        <div className='education container'>
            <h2>Education</h2>
            <hr></hr>
            <div className='edList'>
                {info.education.map((ed, index)=>{
                    return <div key={index}>
                            <div className='titleContainer'>
                                <span>
                                    <span className='titleText'>{ed.school}, {ed.degree}</span>
                                    <span> | </span>
                                    <span className='subTitle'>{ed.location}</span>
                                </span>
                                <span className='date'>
                                    <span>{ed.startDate}</span>
                                    <span>-</span>
                                    <span>{ed.endDate}</span>
                                </span>
                            </div>
                            <div>
                                <div className='description'>  {ed.desc} </div>
                            </div> 
                        </div>
                } )}
            </div>
        </div>   
    </div>
    </>
  )
}

export default CVDisplay

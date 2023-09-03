/* eslint-disable react/prop-types */
import '../styles/CVForm.scss'

import {useState} from 'react';

function CVForm({info, setInfo, generatePDF}) {


    return(
        <section className='Form'>
            <button className="exportBtn" onClick={generatePDF}>Export CV</button>
            <GeneralInfoForm info={info} setInfo={setInfo}/>
            <SkillsForm info={info} setInfo={setInfo}/>
            <ExperienceForm info={info} setInfo={setInfo}/>
            <EducationForm info={info} setInfo={setInfo}/>
        </section>)
    
}

function GeneralInfoForm({info, setInfo}) {
    const [isActive, setIsActive] = useState(false);

    function handleNameChange(e) {
        let newInfo = {...info};
        newInfo.generalInfo.fullName = e.target.value;
        setInfo(newInfo);
    }

    function handleWebsiteChange(e) {
        let newInfo = {...info};
        newInfo.generalInfo.website = e.target.value;
        setInfo(newInfo);
    }

    function handleLocationChange(e) {
        let newInfo = {...info};
        newInfo.generalInfo.location = e.target.value;
        setInfo(newInfo);
    }

    function handleEmailChange(e) {
        let newInfo = {...info};
        newInfo.generalInfo.email = e.target.value;
        setInfo(newInfo);
    }

    function handlePhoneChange(e) {
        let newInfo = {...info};
        newInfo.generalInfo.phone = e.target.value;
        setInfo(newInfo);
    }

    function handleSummaryChange(e) {
        let newInfo = {...info};
        newInfo.generalInfo.summary = e.target.value;
        setInfo(newInfo);
    }

    

    return (
        <div className='formSection'>
            <div className='formTitle' onClick={() => setIsActive(!isActive)}>
                <span>
                    General Info 
                </span>
                <span>
                    {isActive ? '-' : '+'}
                </span>
            </div>
            {isActive && 
                <div className='generalInfoForm'>
                    <input onChange={(e) => {handleNameChange(e)}} placeholder="FirstName LastName" value={info.generalInfo.fullName}></input>
                    <input onChange={(e) => {handleWebsiteChange(e)}} placeholder="website.com" value={info.generalInfo.website}></input>
                    <input onChange={(e) => {handleLocationChange(e)}} placeholder="Country, State, City" value={info.generalInfo.location}></input>
                    <input onChange={(e) => {handleEmailChange(e)}} placeholder="example@example.com" value={info.generalInfo.email}></input>
                    <input onChange={(e) => {handlePhoneChange(e)}} placeholder="+11 111 111111" value={info.generalInfo.phone}></input>
                    <textarea onChange={(e) => {handleSummaryChange(e)}} placeholder="Tell something about you" value={info.generalInfo.summary}></textarea>
                </div>
            }
        </div>
    )
}

function SkillsForm({info, setInfo}) {
    const [isActive, setIsActive] = useState(false);   
    const[skillTitle, setSkillTitle] = useState('');
    const[skillDesc, setSkillDesc] = useState('');
    
    function updateTitleValue(e){
        setSkillTitle(e.target.value);       
    }
    function updateDescValue(e){
        setSkillDesc(e.target.value);       
    }

    function addSkill() {
        let newInfo = {...info};
        if(skillTitle=='' || skillDesc==''){
            alert("Please fill in all fields");
            return;
        }
        newInfo.skills.push({title: skillTitle, desc: skillDesc});
        setInfo(newInfo);
        setSkillTitle('');
        setSkillDesc('');
    }

    function deleteSkill(index) {
        let newInfo = {...info};
        newInfo.skills = newInfo.skills.filter((skill, skillIndex) => skillIndex !== index)
        setInfo(newInfo);
    }

    return(
    <div className='formSection'>
        <div className='formTitle' onClick={() => setIsActive(!isActive)}>
            <span>
                Skills 
            </span>
            <span>
                {isActive ? '-' : '+'}
            </span>
        </div>
        {isActive && 
            <div className='generalSkillsForm'>
                {info.skills.map( (skill, index) => {
                    return (
                        <div key={index} className='skills'>
                            <span>{skill.title}: </span>
                            <span>{skill.desc}</span>
                            <button onClick={() => deleteSkill(index)}>Delete</button>
                        </div>
                    )})}
                    <div>
                        <input placeholder="Skill Title" onChange={(e) => updateTitleValue(e)} value={skillTitle}></input>
                        <textarea placeholder="Description" onChange={(e) => updateDescValue(e)} value={skillDesc}></textarea>
                        <button onClick={addSkill}>Add</button>
                    </div>
            </div>}
    </div>
    )
}

function ExperienceForm({info, setInfo}){
    const [isActive, setIsActive] = useState(false);
    const [position, setPosition] = useState('');
    const [location, setLocation] = useState('');
    const [desc, setDesc] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    function changePosition(e){
        setPosition(e.target.value)
    }

    function changeLocation(e){
        setLocation(e.target.value)
    }

    function changeDesc(e){
        setDesc(e.target.value)
    }

    function changeStartDate(e){
        setStartDate(e.target.value)
    }

    function changeEndDate(e){
        setEndDate(e.target.value)
    }

    function addJob(){
        let newInfo = {...info}
        if(position=='' || location=='' || desc=='' || startDate=='' || endDate==''){
            alert("Please fill in all fields");
            return;
        }
        newInfo.experience.push({position: position, location: location, desc: desc, startDate: startDate, endDate: endDate})
        setInfo(newInfo)
        resetPositionInput()
    }

    function resetPositionInput(){
        setPosition('')
        setLocation('')
        setDesc('')
        setStartDate('')
        setEndDate('')
    }

    function deleteJob(index){
        let newInfo = {...info};
        newInfo.experience = newInfo.experience.filter((job, jobIndex) => jobIndex !== index)
        setInfo(newInfo)
    }

    return(
        <div className='formSection'>
            <div className='formTitle' onClick={() => setIsActive(!isActive)}>
                <span>Experience</span>
                <span>{isActive ? '-' : '+'}</span>
            </div>
            {isActive && 
            <div>
                {info.experience.map((job, index) =>{
                    return(
                        <div key={index}>
                            <p>{job.position}</p>
                            <p>{job.location}</p>
                            <p>{job.desc}</p>
                            <span>{job.startDate}</span>
                            <span>{job.endDate}</span>
                            <button onClick={() => deleteJob(index)}>Delete</button>
                        </div>
                    )
                })}
                <div>
                    <input placeholder='Position' onChange={(e) => changePosition(e)}></input>
                    <input placeholder='Location' onChange={(e) => changeLocation(e)}></input>
                    <input placeholder='Description' onChange={(e) => changeDesc(e)}></input>
                    <input placeholder='Start Date' onChange={(e) => changeStartDate(e)}></input>
                    <input placeholder='End Date' onChange={(e) => changeEndDate(e)}></input>
                    <button onClick={addJob}>Add</button>
                </div>
            </div>}
        
        </div>
    )

}

function EducationForm({info, setInfo}){
    const [isActive, setIsActive] = useState(false);
    const [school, setSchool] = useState('');
    const [location, setLocation] = useState('');
    const [degree, setDegree] = useState('');
    const [desc, setDesc] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    function changeSchool(e){
        setSchool(e.target.value)
    }

    function changeLocation(e){
        setLocation(e.target.value)
    }

    function changeDegree(e){
        setDegree(e.target.value)
    }

    function changeDesc(e){
        setDesc(e.target.value)
    }

    function changeStartDate(e){
        setStartDate(e.target.value)
    }

    function changeEndDate(e){
        setEndDate(e.target.value)
    }

    function addEd(){
        let newInfo = {...info}
        if(school=='' || location=='' || degree=='' || desc=='' || startDate=='' || endDate==''){
            alert("Please fill in all fields");
            return;
        }
        newInfo.education.push({school: school, location: location, degree: degree, desc: desc, startDate: startDate, endDate: endDate})
        setInfo(newInfo)
        resetEdInput()
    }

    function resetEdInput(){
        setSchool('')
        setLocation('')
        setDegree('')
        setDesc('')
        setStartDate('')
        setEndDate('')
    }

    function deleteEd(index){
        let newInfo = {...info};
        newInfo.education = newInfo.education.filter((ed, edIndex) => edIndex !== index)
        setInfo(newInfo)
    }

    return(
        <div className='formSection'>
            <div className='formTitle' onClick={() => setIsActive(!isActive)}>
                <span>Education</span>
                <span>{isActive ? '-' : '+'}</span>
            </div>
            {isActive &&
            <div>
                {info.education.map((ed, index) =>{
                    return(
                        <div key={index}>
                            <p>{ed.school}</p>
                            <p>{ed.location}</p>
                            <p>{ed.degree}</p>
                            <p>{ed.desc}</p>
                            <span>{ed.startDate}</span>
                            <span>{ed.endDate}</span>
                            <button onClick={() => deleteEd(index)}>Delete</button>
                        </div>
                    )
                })}
                <div>
                    <input placeholder='School' onChange={(e) => changeSchool(e)}></input>
                    <input placeholder='Location' onChange={(e) => changeLocation(e)}></input>
                    <input placeholder='Degree' onChange={(e) => changeDegree(e)}></input>
                    <input placeholder='Description' onChange={(e) => changeDesc(e)}></input>
                    <input placeholder='Start Date' onChange={(e) => changeStartDate(e)}></input>
                    <input placeholder='End Date' onChange={(e) => changeEndDate(e)}></input>
                    <button onClick={addEd}>Add</button>
                </div>
            </div>}
        </div>
    )

}


export default CVForm

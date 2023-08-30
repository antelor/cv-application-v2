/* eslint-disable react/prop-types */

import {useState} from 'react';

function CVForm({info, setInfo, menuIndex}) {


    return(
        <div className='Form'>
            {(menuIndex == 0) && 
            <>
            <GeneralInfoForm info={info} setInfo={setInfo}/>
            <SkillsForm info={info} setInfo={setInfo}/>
            </>}
            
            {(menuIndex == 1) &&
            <>
            <ExperienceForm info={info} setInfo={setInfo}/>
            </>} 
        </div>)
    
}

function GeneralInfoForm({info, setInfo}) {

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
        <div>
            <input onChange={(e) => {handleNameChange(e)}} placeholder="FirstName LastName" value={info.generalInfo.fullName}></input>
            <input onChange={(e) => {handleWebsiteChange(e)}} placeholder="website.com" value={info.generalInfo.website}></input>
            <input onChange={(e) => {handleLocationChange(e)}} placeholder="Country, State, City" value={info.generalInfo.location}></input>
            <input onChange={(e) => {handleEmailChange(e)}} placeholder="example@example.com" value={info.generalInfo.email}></input>
            <input onChange={(e) => {handlePhoneChange(e)}} placeholder="+11 111 111111" value={info.generalInfo.phone}></input>
            <textarea onChange={(e) => {handleSummaryChange(e)}} placeholder="Tell something about you" value={info.generalInfo.summary}></textarea>
        </div>
    )
}

function SkillsForm({info, setInfo}) {
    
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
        <>
            {info.skills.map( (skill, index) => {
                return (
                    <div key={index}>
                        <span>{skill.title}: </span>
                        <span>{skill.desc}</span>
                        <button onClick={() => deleteSkill(index)}>Delete</button>
                    </div>
                )})}
                <div>
                    <input placeholder="Title" onChange={(e) => updateTitleValue(e)} value={skillTitle}></input>
                    <textarea placeholder="Description" onChange={(e) => updateDescValue(e)} value={skillDesc}></textarea>
                    <button onClick={addSkill}>Add</button>
                </div>
            
        </>
    )
}

function ExperienceForm({info, setInfo}){

}

export default CVForm

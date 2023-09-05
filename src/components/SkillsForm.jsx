/* eslint-disable react/prop-types */
import '../styles/CVForm.scss'

import {useState} from 'react';
import clsx from "clsx";

function SkillsForm({info, setInfo}) {
    const [isActive, setIsActive] = useState(false);
    const[skillTitle, setSkillTitle] = useState('');
    const[skillDesc, setSkillDesc] = useState('');
    const [checked, setChecked] = useState(false);   
    
    const formDisplay = clsx({
        "formDisplay": true,
        hidden: !checked,
        displayed: checked
    });

    const handleDisplay = () => {
        setChecked(!checked);
    };

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
        <div className='formTitle' onClick={() => {
                setIsActive(!isActive);
                handleDisplay();
            }}>
            <span>
                Skills 
            </span>
            <span>
                {isActive ? '-' : '+'}
            </span>
        </div>
        <div className={'formContent ' + formDisplay}>
            {info.skills.map( (skill, index) => {
                return (
                    <div key={index} className='skillItem'>
                        <div>
                            <span className='skillTitle'>{skill.title}: </span>
                            <span className='skillDesc'>{skill.desc}</span>
                        </div>
                        <button className='skillBtn' onClick={() => deleteSkill(index)}>❌</button>
                    </div>
                )})}
                <div className='skillSectionAdd'>
                    <div className="inputDiv">
                        <label htmlFor="skill">Skill Title</label>
                        <input id="skill" name="skill" placeholder="Skill Title" onChange={(e) => updateTitleValue(e)} value={skillTitle}></input>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="skillDesc">Description</label>
                        <input id="skillDesc" name="skillDesc" placeholder="Description" onChange={(e) => updateDescValue(e)} value={skillDesc}></input>
                    </div>
                    <button onClick={addSkill}>Add</button>
                </div>
        </div>
    </div>
    )
}

export default SkillsForm
/* eslint-disable react/prop-types */
import '../styles/CVForm.scss'

import {useState} from 'react';
import clsx from "clsx";


function ExperienceForm({info, setInfo}){
    const [isActive, setIsActive] = useState(false);
    const [position, setPosition] = useState('');
    const [location, setLocation] = useState('');
    const [desc, setDesc] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [checked, setChecked] = useState(false);
    
    const formDisplay = clsx({
        "formDisplay": true,
        hidden: !checked,
        displayed: checked
    });

    const handleDisplay = () => {
        setChecked(!checked);
    };

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
            <div className='formTitle' onClick={() => {
                    setIsActive(!isActive);
                    handleDisplay();
                }}>
                <span>Experience</span>
                <span>{isActive ? '-' : '+'}</span>
            </div>
            <div className={'formContent ' + formDisplay}>
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
            </div>
        </div>
    )

}

export default ExperienceForm;
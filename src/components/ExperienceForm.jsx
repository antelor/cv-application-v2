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

    function addExp(){
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

    function deleteExp(index){
        let newInfo = {...info};
        newInfo.experience = newInfo.experience.filter((exp, expIndex) => expIndex !== index)
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
                {info.experience.map((exp, index) =>{
                    return(
                        <div key={index} className="expItem">
                            <div className='expFirstSection'>
                                <span className='expPosition'>{exp.position}</span>
                                <span>{exp.location}</span>
                            </div>
                            <div className='expateSection'>
                                <span>{exp.startDate}</span>
                                <span>{exp.endDate}</span>
                            </div>
                            <p>{exp.desc}</p>
                            <button onClick={() => deleteExp(index)}>Delete</button>
                        </div>
                    )
                })}
                <div className='expSectionAdd'>
                    <div className="expFirstSectionAdd">
                        <input placeholder='Position' onChange={(e) => changePosition(e)}></input>
                        <input placeholder='Location' onChange={(e) => changeLocation(e)}></input>
                    </div>
                    <div className="expDateSectionAdd">
                        <input placeholder='Start Date' onChange={(e) => changeStartDate(e)}></input>
                        <input placeholder='End Date' onChange={(e) => changeEndDate(e)}></input>
                    </div>
                    <input className="expDesc" placeholder='Description' onChange={(e) => changeDesc(e)}></input>
                    <button onClick={addExp}>Add</button>
                </div>
            </div>
        </div>
    )

}

export default ExperienceForm;
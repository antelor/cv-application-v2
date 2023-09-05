/* eslint-disable react/prop-types */
import '../styles/CVForm.scss'

import {useState} from 'react';
import clsx from "clsx";


function EducationForm({info, setInfo}){
    const [isActive, setIsActive] = useState(false);
    const [school, setSchool] = useState('');
    const [location, setLocation] = useState('');
    const [degree, setDegree] = useState('');
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
            <div className='formTitle'onClick={() => {
                    setIsActive(!isActive);
                    handleDisplay();
                }}>
                <span>Education</span>
                <span>{isActive ? '-' : '+'}</span>
            </div>
            <div className={'formContent ' + formDisplay}>
                {info.education.map((ed, index) =>{
                    return(
                        <div className="edItem" key={index}>
                            <p className='edSchool'>{ed.school}</p>
                            <p>{ed.degree}</p>
                            <p>{ed.location}</p>
                            <p>{ed.desc}</p>
                            <div className='edDate'>
                                <span>{ed.startDate}</span>
                                <span>{ed.endDate}</span>
                            </div>
                            <button onClick={() => deleteEd(index)}>Delete</button>
                        </div>
                    )
                })}
                <div className='edSectionAdd'>
                    <div className="edFirstSectionAdd">
                        <input placeholder='School' onChange={(e) => changeSchool(e)}></input>
                        <input placeholder='Location' onChange={(e) => changeLocation(e)}></input>
                    </div>
                    <div className="edDateSectionAdd">
                        <input placeholder='Start Date' onChange={(e) => changeStartDate(e)}></input>
                        <input placeholder='End Date' onChange={(e) => changeEndDate(e)}></input>
                    </div>
                    <input placeholder='Degree' onChange={(e) => changeDegree(e)}></input>
                    <input placeholder='Description' onChange={(e) => changeDesc(e)}></input>
                    <button onClick={addEd}>Add</button>
                </div>
            </div>
        </div>
    )

}


export default EducationForm;
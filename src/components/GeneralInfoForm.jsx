/* eslint-disable react/prop-types */
import '../styles/CVForm.scss'

import {useState} from 'react';
import clsx from "clsx";


function GeneralInfoForm({info, setInfo}) {
    const [isActive, setIsActive] = useState(false);
    const [checked, setChecked] = useState(false);
    
    const formDisplay = clsx({
        "formDisplay": true,
        hidden: !checked,
        displayed: checked
    });

    const handleDisplay = () => {
        setChecked(!checked);
    };

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
            <div className='formTitle' onClick={() => {
                    setIsActive(!isActive);
                    handleDisplay();
                }}>
                <span>
                    General Info 
                </span>
                <span>
                    {isActive ? '-' : '+'}
                </span>
            </div>
                <div className={'formContent ' + formDisplay}>
                    <div className='inputDiv'>
                        <label htmlFor="name">FirstName LastName</label>
                        <input id="name" name="name" onChange={(e) => {handleNameChange(e)}} placeholder="FirstName LastName" value={info.generalInfo.fullName}></input>
                    </div>
                    <div className='inputDiv'>
                        <label htmlFor="website">Website</label>
                        <input id="website" name="website" onChange={(e) => {handleWebsiteChange(e)}} placeholder="website.com" value={info.generalInfo.website}></input>
                    </div>
                    <div className='inputDiv'>
                        <label htmlFor="location">Location</label>
                        <input id="location" name="location" onChange={(e) => {handleLocationChange(e)}} placeholder="Country, State, City" value={info.generalInfo.location}></input>
                    </div>
                    <div className='inputDiv'>
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" onChange={(e) => {handleEmailChange(e)}} placeholder="example@example.com" value={info.generalInfo.email}></input>
                    </div>
                    <div className='inputDiv'>
                        <label htmlFor="phone">Phone</label>
                        <input onChange={(e) => {handlePhoneChange(e)}} placeholder="+11 111 111111" value={info.generalInfo.phone}></input>
                    </div>
                    <div className='inputDiv'>
                        <label htmlFor="summary">Summary</label>
                        <input onChange={(e) => {handleSummaryChange(e)}} placeholder="Tell something about you" value={info.generalInfo.summary}></input>
                    </div>
                </div>
        </div>
    )
}

export default GeneralInfoForm;
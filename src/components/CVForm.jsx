/* eslint-disable react/prop-types */
import '../styles/CVForm.scss'

import GeneralInfoForm from'./GeneralInfoForm';
import SkillsForm from './SkillsForm';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';
import {emptyPlaceholderInfo, placeholderInfo} from './placeholders';




function CVForm({info, setInfo, generatePDF}) {


    function loadEmptyPlaceholder(){
        setInfo(emptyPlaceholderInfo)
    }

    function loadTemplate(){
        setInfo(placeholderInfo)
    }

    return(
        <section className='Form'>
            <div className='buttonMenu'>
                <button className="exportBtn" onClick={generatePDF}>Export CV</button>
                <button className='loadBtn' onClick={loadTemplate}>Load</button>
                <button className='emptyBtn' onClick={loadEmptyPlaceholder}>Empty</button>
            </div>
            <GeneralInfoForm info={info} setInfo={setInfo}/>
            <SkillsForm info={info} setInfo={setInfo}/>
            <ExperienceForm info={info} setInfo={setInfo}/>
            <EducationForm info={info} setInfo={setInfo}/>
        </section>)
    
}

export default CVForm

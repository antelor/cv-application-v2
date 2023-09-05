/* eslint-disable react/prop-types */
import '../styles/CVForm.scss'

import GeneralInfoForm from'./GeneralInfoForm';
import SkillsForm from './SkillsForm';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';

function CVForm({info, setInfo, generatePDF}) {


    return(
        <section className='Form'>
            <GeneralInfoForm info={info} setInfo={setInfo}/>
            <SkillsForm info={info} setInfo={setInfo}/>
            <ExperienceForm info={info} setInfo={setInfo}/>
            <EducationForm info={info} setInfo={setInfo}/>
            <button className="exportBtn" onClick={generatePDF}>Export CV</button>
        </section>)
    
}

export default CVForm

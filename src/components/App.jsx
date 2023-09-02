import { useState } from 'react'
import '../styles/App.scss'
import CVForm from './CVForm.jsx'
import CVDisplay from './CVDisplay'
import Menu from './Menu'
import { jsPDF } from "jspdf";


const generatePDF = () => {
    const report = new jsPDF('p', 'pt', 'a4');
    report.setFont('Helvetica', 'normal');
    report.html(document.querySelector('.Display'), {
      html2canvas: {
          scale: 0.7496,
      },
      callback: function (doc) {
          window.open(doc.output('bloburl'));
      }
  })
};


let placeholderInfo = {
  generalInfo:{
    fullName: 'Jon Bon Jovi',
    website: 'JonBovi.com',
    location: 'Bonshovi',
    email: 'BonShonBovi@Shomail.com',
    phone: '234243243',
    summary: 'Me llamo Jon Bon Jovi, tengo 23 años. Soy de Rosario, Santa Fe, Argentina. Actualmente estoy estudiando la carrera Ingenieria en Sistemas de Informacion en la Universidad Tecnologica Nacional (UTN). Mi objetivo a futuro es aprender tecnologias como React y NodeJS, a traves del curso The Odin Project que estoy realizando en este momento. Ademas estoy expandiendo mis conocimientos sobre bases de datos con SQL utilizando SQLite por mi cuenta. Me gustaria trabajar tanto de desarrollador front-end como de desarrollador fullstack.'
  },
  skills: [
    {title:'Lenguajes', desc:'Con Javascript me hice la casa'},
    {title:'Database', desc:'Con Javascript me hice la casa'},
    {title:'Dev Tools', desc:'Con Javascript me hice la casa'},
    {title:'Idiomas', desc:'Con Javascript me hice la casa'},
    {title:'Otros', desc:'Con Javascript me hice la casa'},
  ],
  experience:[
    {position:"Administrativo", location:"Madrid", desc:"Me desenvolvi en la funcion de lorem ipsum", startDate:"Apr 2000", endDate:"Mar 2000"},
    {position:"relative", location:"Madrid", desc:"Lorem Ipsum", startDate:"Mon 2000", endDate:"Mon 2000"},
    {position:"relative", location:"Madrid", desc:"Lorem Ipsum", startDate:"Mon 2000", endDate:"Mon 2000"},
    {position:"relative", location:"Madrid", desc:"Lorem Ipsum", startDate:"Mon 2000", endDate:"Mon 2000"}
  ],
  education:[
    {school: 'school', location: 'location', degree: 'degree', desc: 'desc', startDate: 'Mon 2000', endDate: 'Mon 2000'},
    {school: 'school', location: 'location', degree: 'degree', desc: 'desc', startDate: 'Mon 2000', endDate: 'Mon 2000'}
  ]
}


function App() {
  const [menuIndex, setMenuIndex] = useState(0);
  const [info, setInfo] = useState(placeholderInfo);

  return (
    <div className='App'>
      <Menu menuIndex={menuIndex} setMenuIndex={setMenuIndex}/>
      <CVForm info={info} setInfo={setInfo} menuIndex={menuIndex}/>
      <CVDisplay info={info}/>

      <button onClick={generatePDF}>a</button>
    </div>
  )
}

export default App

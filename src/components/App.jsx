import { useState } from 'react'
import '../styles/App.scss'
import CVForm from './CVForm'
import CVDisplay from './CVDisplay'
import { jsPDF } from "jspdf";

const generatePDF = () => {
    const report = new jsPDF('p', 'pt', 'a4');
    report.setFont('Helvetica', 'normal');
    report.html(document.querySelector('.Display'), {
      html2canvas: {
          scale: 0.7196,
      },
      callback: function (doc) {
          window.open(doc.output('bloburl'));
      }
  })
};

let placeholderInfo = {
  generalInfo:{
    fullName: 'Lionel Andres Messi Cuccittini',
    website: 'messi.com',
    location: 'Miami, Florida, USA',
    email: 'LionelMessi@goat.com',
    phone: '234243243',
    summary: "I am Lionel Messi, a passionate Argentine professional footballer who has had the privilege of playing for remarkable teams. During my career, I spent over two decades at FC Barcelona, where I had the honor of contributing to the club's success and becoming its all-time top scorer. My journey in football also includes representing the Argentine national team, culminating in winning the Copa America in 2021. I have recently embarked on a new chapter in my career, joining Paris Saint-Germain (PSG) with immense gratitude for the opportunities that have come my way, and I am committed to continuing to give my best to the beautiful game."
  },
  skills: [
    {title:'Dribbling', desc:'Exceptional close ball control and the ability to take on multiple defenders.'},
    {title:'Finishing', desc:'Precise and prolific goal-scoring abilities, including accurate shooting and positioning.'},
    {title:'Playmaking', desc:'Vision, passing accuracy, and creativity to create scoring opportunities for myself and teammates.'},
    {title:'Acceleration', desc:'Explosive bursts of speed to beat defenders and create goal-scoring opportunities.'},
    {title:'Tactical Intelligence', desc:'Deep understanding of the game, strategic positioning, and the ability to read and influence plays on the field.'},
  ],
  experience:[
    {position:"Attacking Midfielder", location:"FC Barcelona", desc:"I primarily played as a forward or attacking midfielder. I was the focal point of the team's attack, responsible for scoring goals, creating opportunities for teammates, and dictating the pace of the game. During my tenure, Barcelona enjoyed tremendous success, winning numerous titles, and I became the club's all-time top scorer.", startDate:"Oct 2004", endDate:"Aug 2021"},
    {position:"Forward/Attacking Midfielder", location:"Paris Saint-Germain", desc:"I continue to play as a forward and attacking midfielder. My role remains centered around scoring goals, providing assists, and contributing to the team's overall attacking prowess. PSG represents a new challenge in my career, and I aim to bring my experience and skills to help the team achieve its goals.", startDate:"Aug 2021", endDate:"Mon 2000"},
    {position:"Forward/Attacking Midfielder", location:"Inter Miami CF", desc:"I play as a forward and continue to be a key player in my team’s attack. My role is to score goals and create opportunities for my teammates to score.", startDate:"Jul 2023", endDate:"Present"},
  ],
  education:[
    {school: 'Escuela Primaria N° 66 "Gral. Las Heras"', location: 'Rosario, Santa Fe, Argentina', degree: 'Primary', desc: 'I finished my basic studies as a kid', startDate: 'Mar 1995', endDate: 'Dic 2000'},
    {school: 'Spain Secondary School', location: 'Barcelona, Spain', degree: 'Secondary', desc: "I finished my studies while I was playing for the Bacerlona's young team", startDate: 'Mar 2000', endDate: 'Dic 2007'}
  ]
}


function App() {
  const [info, setInfo] = useState(placeholderInfo);

  return (
    <div className='App'>
      <CVForm info={info} setInfo={setInfo} generatePDF={generatePDF}/>
      <CVDisplay info={info}/>
    </div>
  )
}

export default App

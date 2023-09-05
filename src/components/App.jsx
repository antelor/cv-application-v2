import { useState } from 'react'
import '../styles/App.scss'
import CVForm from './CVForm'
import CVDisplay from './CVDisplay'
import { jsPDF } from "jspdf";
import {placeholderInfo} from './placeholders';

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

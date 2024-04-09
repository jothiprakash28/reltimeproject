// MainPage.js

import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import MainCards from './MainCards';
import Phone from './Phone';
import html2pdf from 'html2pdf.js';

function MainPage() {
  const phoneRef = useRef(null);

  const handlePhoneDownload = () => {
    if (!phoneRef.current) return;

    const opt = {
        margin: 1,
        filename: 'phone_content.pdf',
        image: { type: 'jpeg', quality: 120 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        // Add position-related options here
        pagebreak: { mode: ['avoid-all'] }, // Example: avoid page breaks
        x: 2, // X position
        y: 3, // Y position
      };
      

    html2pdf().from(phoneRef.current).set(opt).save();
  }

  return (
    <div className='container main'>
      <div className='part-left'>
        <MainCards/>
      </div>
      <div style={{display:'flex', gap:'10px', position:'absolute', top:'20px', left:'570px'}}>
      <img src="https://reltime-super-app.netlify.app/images/logo.png" style={{ height: '10vh' }} alt="logo2" />       
      <img src="https://reltime-super-app.netlify.app/images/logo2.png" style={{height:'10vh'}} alt="logo2"></img>
      </div>
      <div className='lottie'>
        <img src="https://reltime-super-app.netlify.app/images/astronot.gif" alt="astronot"></img>
        <h2 style={{textAlign:"center", color:"white"}}><font face="MONO SPACE" size="5"> RELTIME SUPERAPP BUILDER</font></h2>
        <button type="button" className="btn btn-warning m-5" onClick={handlePhoneDownload}>Download</button>
      </div>

      <div className='part-right' ref={phoneRef}>
        <Phone/>
      </div>
    </div>
  );
}

export default MainPage;

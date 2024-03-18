import React from 'react';
import Head from 'next/head';
import Image from "next/image";
import resumeimg from "../public/WaqasJavedResume.svg";

const Resume = () => {
  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = '/WaqasJavedResume.pdf';
    link.download = 'WaqasJavedResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Head>
        <title>Waqas Javed | Resume</title>
        <meta
          name='description'
          content='I’m a Full-Stack Developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='../public/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px] resume-container'>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginBottom: '10px' }}>
          <button onClick={downloadPdf} style={{ background: '#4CAF50', color: 'white', padding: '15px 20px', textAlign: 'center', textDecoration: 'none', fontSize: '16px', cursor: 'pointer', border: 'none', borderRadius: '5px' }}>
            Download PDF
          </button>
        </div>
        <div style={{ width: '100%', height: '100%', display: 'fill', justifyContent: 'center', alignItems: 'center' }}>
          <Image src={resumeimg} objectFit="contain" className="rounded-xl" alt="/" />
        </div>
      </div>
    </>
  );
};

export default Resume;

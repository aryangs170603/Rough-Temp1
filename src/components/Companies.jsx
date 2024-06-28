import React from 'react';
import cognizantLogo from '../Logo_Cognizant.png';
import accentureLogo from '../Accenture-logo.png';
import deloitteLogo from '../Deloitte_Logo.png';
import googleLogo from '../Google-logo.png';

const Companies = () => (
  <section className="companies">
    <h2>Our top-tier Hiring companies</h2>
    <div className="company-logos">
      <img src={cognizantLogo} alt="Cognizant" />
      <img src={accentureLogo} alt="Accenture" />
      <img src={deloitteLogo} alt="Deloitte" />
      <img src={googleLogo} alt="Google" />
    </div>
  </section>
);

export default Companies;
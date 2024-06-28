import React from 'react';

const AboutUs = () => (
  <section className="about-us">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>About us</h2>
          <p>Connecting Dots ERP is The Best SAP Training institute in Pune for learning, dedicated to preparing students for success. Our institute is well-known for its exceptional SAP training, as well as other courses.</p>
          <p>Our faculty members who provide the best training and education. Our institute offers a wide range of courses, including SAP training, Software Courses, HR Courses and Training, Digital Marketing, HR, Salesforce, AWS, Data Science, web development, and more.</p>
        </div>
        <div className="col-md-6">
          <div className="download-brochure">
            <h3>Download Brochure</h3>
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Phone" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary">
      <section>
        <div className="container text-center">
          <div className="row">
            <div className='mt-2 mb-2' id='social-icons'>
              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: '#4285F4', border: 'none' }}
                href="https://drive.google.com/drive/folders/1y9l_5P36-lh2sW_Gxzhfe4b17l9-yCfg"
                target="_blank"
                role="button"
              >
                <i className="fab fa-google-drive"></i>
              </a>
              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: '#333333', border: 'none' }}
                href="https://github.com/ahmedmedhat-se/Orrery-Website" target='_blank'
                role="button"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4" id='company'>
              <h4 className="text-uppercase fw-bold mb-2">
                <i className="fa-solid fa-globe me-3"></i>Galactic Pioneers
              </h4>
              <p>
                We are a team joining NASA Space Apps,
                comprising MERN stack developers, scientific researchers,
                and UI/UX designers, innovating space solutions 🌌🚀.
              </p>
            </div>
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto" id='team-members'>
              <h4 className="text-uppercase fw-bold mb-2">
                <i className="fa-brands fa-teamspeak me-3"></i>Team Members
              </h4>
              <p>
                <a target='_blank' href="https://www.linkedin.com/in/ahmed-medhat-ramadan-4061b7263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Ahmed Medhat</a>
                <a href="#!">Sama Ibrahim</a>
                <a href='#!'>Muhammed Hassan</a>
                <a href='#!'>Wessam Abdelnabi</a>
                <a target='_blank' href="https://www.linkedin.com/in/loucas-monir-b0a50b2b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Loucas Monir</a>
                <a href="#!">Bassant Badawy</a>
              </p>
            </div>
          </div>
        </div>
        <div className="text-center p-1" id='div-footer'>
          © 2024 Copyright: CodeCrafters
        </div>
      </section>
    </footer>
  );
};

export default Footer;

import React from 'react';
import './ContactMe.css';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import githubIcon from '../../assets/github.png';
import mailIcon from '../../assets/mail.svg';
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl={mailIcon}
            text="vpsuriya13@gmail.com"
          />
          <ContactInfoCard
            iconUrl={githubIcon}
            text="https://github.com/sp-code3"
          />
        </div>
        <div style={{ flex: 1 }}>
            <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactMe;

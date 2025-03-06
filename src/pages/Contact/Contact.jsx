import React, { useRef, useState, useEffect, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { LanguageContext } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhoneSquare, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const { translations } = useContext(LanguageContext);
  const [statusMessage, setStatusMessage] = useState('');
  const [errorMessages, setErrorMessages] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const contactFormRef = useRef();



  useEffect(() => {
    const formInputs = document.querySelectorAll(".form-input");

    formInputs.forEach(input => {
      input.addEventListener("focus", () => {
        let targetLabel = document.querySelector(`.form-label[for=${input.id}]`);
        targetLabel.classList.add("focus");
      });
      input.addEventListener("blur", () => {
        let targetLabel = document.querySelector(`.form-label[for=${input.id}]`);
        if (input.value.length === 0) {
          targetLabel.classList.remove("focus");
        }
      });
    });

    // Cleanup function to remove event listeners
    return () => {
      formInputs.forEach(input => {
        input.removeEventListener("focus", () => { });
        input.removeEventListener("blur", () => { });
      });
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    const form = contactFormRef.current;
    const formData = new FormData(form);
    console.log(form);

    // Hibaüzenetek inicializálása
    const errors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    let valid = true;

    // Név validálása (nem üres)
    const name = formData.get('user-name');
    if (!name.trim()) {
      valid = false;
      errors.name = translations.contactPageContent.validationErrorMessage;  // "Name is required"
    }
    // Email validálása (nem üres, helyes formátum)
    const email = formData.get('user-email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      valid = false;
      errors.email = translations.contactPageContent.validationErrorMessage;  // "Email is required"
    } else if (!emailRegex.test(email)) {
      valid = false;
      errors.email = translations.contactPageContent.emailFormatErrorMessage;  // "Please enter a valid email address"
    }

    // Tárgy validálása (nem üres)
    const subject = formData.get('subject');
    if (!subject.trim()) {
      valid = false;
      errors.subject = translations.contactPageContent.validationErrorMessage;  // "Subject is required"
    }

    // Üzenet validálása (nem üres)
    const message = formData.get('message');
    if (!message.trim()) {
      valid = false;
      errors.message = translations.contactPageContent.validationErrorMessage;  // "Message is required"
    }

    // Ha van hiba, akkor a hibaüzeneteket megjelenítjük
    if (!valid) {
      setStatusMessage(""); // Töröljük a korábbi üzenetet, ha volt
      setErrorMessages(errors); // Beállítjuk a hibaüzeneteket
      return;  // Ne folytassuk a küldést, ha nem érvényes
    } else {
      setErrorMessages({
        name: '',
        email: '',
        subject: '',
        message: ''
      }); 
    }


    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;


    emailjs.sendForm(serviceID, templateID, form, publicKey)
      .then(response => {
        console.log(response.status, response.text);
        setStatusMessage(translations.contactPageContent.successMessage);
        setTimeout(() => setStatusMessage(""), 4000);
        form.reset();
        const labels = form.querySelectorAll('.form-label');
        labels.forEach(label => {
          label.classList.remove('focus');
        });
      }, error => {
        console.log(error);
        setStatusMessage(translations.contactPageContent.failMessage);
        setTimeout(() => setStatusMessage(""), 4000);
      });
  };

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });


  const iconMap = {
    FaPhoneSquare: <FaPhoneSquare />,
    FaEnvelope: <FaEnvelope />,
    FaLocationDot: <FaLocationDot />
  };

  return (
    <section className="contact section-link" id="contact" data-observe>
      <motion.div
        className="main-heading"
        ref={ref1}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: inView1 ? 1 : 0.8, opacity: inView1 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>{translations.contactPageContent.headingTitle}</h2>
        <span>{translations.contactPageContent.subHeading}</span>
      </motion.div>
      <div className="contact-container container">
        <div className="contact-content">
          <div className="contact-info-list">
            {translations.contactPageContent.contactInfoItems.map((item, index) => (
              <div className="contact-info-item" key={index}>
                <div className="icon-container">
                  {iconMap[item.icon]}
                </div>
                <div className="contact-group">
                  <p className="contact-title">{item.title}</p>
                  <p className="contact-subtitle">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
          <form className="form" id="contact-form" ref={contactFormRef} onSubmit={sendEmail}>
            <div className="form-container">

              <div className="form-group">
                <label htmlFor="name" className="form-label">{translations.contactPageContent.formLabels.name}</label>
                <input
                  type="text"
                  name="user-name"
                  id="name"
                  className={`input-primary form-input ${errorMessages.name ? "error-border" : ""}`}
                  autoComplete="off"

                />
              </div>
              <p className="error-message">{errorMessages.name ?? errorMessages.name}</p>
              <div className="form-group">
                <label htmlFor="email" className="form-label">{translations.contactPageContent.formLabels.email}</label>
                <input
                  type="text"
                  name="user-email"
                  id="email"
                  className={`input-primary form-input ${errorMessages.email ? "error-border" : ""}`}
                  autoComplete="off"
                />
              </div>
              <p className="error-message">{errorMessages.email ?? errorMessages.email}</p>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">{translations.contactPageContent.formLabels.subject}</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className={`input-primary form-input ${errorMessages.subject ? "error-border" : ""}`}
                  autoComplete="off"
                />
              </div>
              <p className="error-message">{errorMessages.subject ?? errorMessages.subject}</p>
              <div className="form-group">
                <label htmlFor="message" className="form-label">{translations.contactPageContent.formLabels.message}</label>
                <textarea
                  name="message"
                  id="message"
                  className={`input-primary form-input ${errorMessages.message ? "error-border" : ""}`}
                  autoComplete="off"

                ></textarea>
              </div>
              <p className="error-message">{errorMessages.message ?? errorMessages.message}</p>
              <div className="form-status-box">
                <p>{statusMessage}</p>
              </div>
              <button type="submit" name="submit" className="btn btn-contact">
                <FaPaperPlane />{translations.contactPageContent.submitButtonText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );


};

export default Contact;

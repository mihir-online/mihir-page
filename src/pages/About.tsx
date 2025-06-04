import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { contactInfo } from '../constants/Data/About/contact-me';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1>About Me</h1>
        
        <div className="about-content">
          <p>Learn more about my journey and interests</p>
        </div>

        <div className="contact-section">
          <h2>Get in Touch</h2>
          
          <div className="contact-list">
            {/* Email */}
            <div className="contact-item">
              <a 
                href={`mailto:${contactInfo.email}`}
                className="email"
              >
                <FaEnvelope className="icon" />
                <div className="text-content">
                  <span className="label">Email:</span>
                  <span className="value">{contactInfo.email}</span>
                </div>
              </a>
            </div>

            {/* GitHub */}
            <div className="contact-item">
              <a 
                href={contactInfo.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="github"
              >
                <FaGithub className="icon" />
                <div className="text-content">
                  <span className="label">GitHub:</span>
                  <span className="value">@{contactInfo.github.username}</span>
                </div>
              </a>
            </div>

            {/* LinkedIn */}
            <div className="contact-item">
              <a 
                href={contactInfo.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
              >
                <FaLinkedin className="icon" />
                <div className="text-content">
                  <span className="label">LinkedIn:</span>
                  <span className="value">@{contactInfo.linkedin.username}</span>
                </div>
              </a>
            </div>

            {/* Instagram - Only show if it exists */}
            {contactInfo.instagram && (
              <div className="contact-item">
                <a 
                  href={contactInfo.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram"
                >
                  <FaInstagram className="icon" />
                  <div className="text-content">
                    <span className="label">Instagram:</span>
                    <span className="value">@{contactInfo.instagram.username}</span>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 
import React from "react";
import "./Footer.css"; // استيراد ملف CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footername">
        <div className="footer1">
          <h4>Contact Us</h4>
          <p>Phone : 01028975932</p>
          <p>Email : <a href="https://mail.google.com/mail/u/0/#inbox" target="blank">gmail.com</a></p>
          <p>GitHub : <a href="https://github.com/amirsalama2002" target="blank">GitHub</a></p>
          <p>Linkedin : <a href="https://www.linkedin.com/in/amir-hassan-7b3408289/" target="blank">Linkedin</a></p>
          <p>whatsapp : <a href="https://api.whatsapp.com/send/?phone=%2B2001028975932&text&type=phone_number&app_absent=0" target="blank">whatsapp</a></p>
          <p>WebSite: <a href="https://amirsalama-com.web.app/" target="blank">WebSiet</a></p>
        </div>
        <div className="footer1">
          <h4>Front End</h4>
          <p>Html5</p>
          <p>CSS3</p>
          <p>javaScript</p>
          <p>BootStrap</p>
          <p>Tailwind</p>
          <p>React Js</p>
        </div>
        <div className="footer1">
          <h4>Back End</h4>
          <p>PHP</p>
          <p>MYSQL</p>
          <p>Laravel(MVC)</p>
          <p>RESTful API</p>
          <p>Postman Api</p>
        </div>
        <div className="footer1">
          <h4>Language</h4>
          <p>English</p>
          <p>Arab</p>
        </div>
      </div>
      <h1 className="footer-button">&copy; 2025 Your Company. Spandex Reserved.</h1>
    </footer>
  );
};

export default Footer;

//Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="footer p-10 bg-blue-700 text-white">
      <aside>
        <i className="fa-brands fa-windows fa-3x"></i>
        <p>
          <b>SHANMUGAM R</b><br />
          <b>Fullstack Developer</b> <br />
          <i className="fa-regular fa-envelope"></i> Email: <a href='mailto:shanmugamrskfamily@gmail.com'>shanmugamrskfamily@gmail.com</a>
        </p>
        <div className="grid grid-cols-2">
          <ul>
            <li><i className="fa-brands fa-react"></i> React</li>
            <li><i className="fa-brands fa-node"></i> NodeJs</li>
            <li><i className="icon-mongodb"></i> MongoDB</li>
          </ul>
          <ul>
            <li><span style={{ display: 'flex' }}><img src="/images/expressjs.svg" style={{ height: '20px', width: '20px', marginRight: '5px' }} alt="express js" /> ExpressJs</span></li>
            <li><i className="icon-bootstrap"></i> Bootstrap</li>
            <li><span style={{ display: 'flex' }}><img src="/images/tailwind_icon.svg" style={{ height: '20px', width: '20px', marginRight: '5px' }} alt="express js" /> Tailwind CSS</span></li>
          </ul>
        </div>
      </aside>
      <aside>
      </aside>
      <nav className="items-end">
        <header className="footer-title">Connect with Me</header>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/Shanmugamrskfamily" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github fa-4x"></i>
          </a>
          <a href="https://www.linkedin.com/in/shanmugamrskfamily/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin fa-4x"></i>
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;

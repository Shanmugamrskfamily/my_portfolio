// Experience.jsx
import React from 'react';

const Experience = () => {
  return (
    <div id="experience" className="mt-8">
      <div className="text-center mb-4">
        <p className="text-4xl font-bold inline border-b-4 border-pink-600 mb-8">My Experience and Journey</p>
      </div>
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="timeline">
          <div className="timeline-item  mt-4">
            <div className="timeline-content">
              <div className="experience-duration bg-pink-600 text-white p-2 mb-2 rounded">
                Sep 2023 - Dec 2023
              </div>
              <h3 className="text-xl font-bold mb-2">Frontend Developer Intern</h3>
              <div className="flex items-center mb-2">
                <img src="/images/senchola_logo.jpg" style={{ height: '40px', width: '40px' }} alt="Senchola Logo" className="mr-2" />
                <p className="text-gray-600 font-bold mb-2">Senchola Technology Solutions- Chennai</p>
              </div>
              <p className="text-sm text-gray-600">
                Intern at Senchola University specializing in HTML5, CSS3, Bootstrap, JavaScript, and ReactJS. Skilled in crafting responsive interfaces and dynamic web applications.
              </p>
            </div>
          </div>
          <div className="timeline-item mt-4">
            <div className="timeline-content">
              <div className="experience-duration bg-pink-600 text-white p-2 mb-2 rounded">
              Jun 2023 - Sep 2023
              </div>
              <h3 className="text-xl font-bold mb-2">Completed Fullstack Developer-MERN</h3>
              <div className="flex items-center mb-2">
                <img src="/images/guvi_logo.png" style={{ height: '40px', width: '40px' }} alt="Guvi Logo" className="mr-2" />
              <p className="text-gray-600 font-bold mb-2">GUVI, IITM- Chennai</p>
              </div>
              <p className="text-sm text-gray-600">
              I successfully completed Guvi's MERN stack developer course, gaining expertise in HTML, CSS, JavaScript, React.js, Node.js, and MongoDB.
               The hands-on projects, focused on user authentication and CRUD operations, provided practical experience. 
               The course equipped me with the skills needed for a career in MERN stack development.
              </p>
            </div> 
          </div>
          <div className="timeline-item mt-4">
            <div className="timeline-content">
              <div className="experience-duration bg-pink-600 text-white p-2 mb-2 rounded">
              Aug 2017 - May 2023
              </div>
              <h3 className="text-xl font-bold mb-2">Operating Engineer-L1</h3>
              <div className="flex items-center mb-2">
                <img src="/images/michelin_logo.jpg" style={{ height: '40px', width: '40px' }} alt="Michelin Logo" className="mr-2" />
              <p className="text-gray-600 font-bold mb-2">Michelin India Private Limited- Chennai</p>
              </div>
              <p className="text-sm text-gray-600">
              Managed semi-automatic extruder machines using Logic programs for efficient tire production. Acted as Safety Spoke, conducting shop
               floor audits, reporting incidents, and engaging in problem-solving initiatives.
              </p>
            </div>
          </div>
          <div className="timeline-item mt-4">
            <div className="timeline-content">
              <div className="experience-duration bg-pink-600 text-white p-2 mb-2 rounded">
              Jan 2017 - Jul 2017
              </div>
              <h3 className="text-xl font-bold mb-2">Assistent Officer- TVS Supplay Chain Solutions</h3>
              <div className="flex items-center mb-2">
                <img src="/images/tvs_logo.webp" style={{ height: '40px', width: '40px' }} alt="TVS Logo" className="mr-2" />
              <p className="text-gray-600 font-bold mb-2">Raising Star Mobiles India Private Ltd- Tada, Andrapradesh</p>
              </div>
              <p className="text-sm text-gray-600">
              During my tenure as Assistant Officer at Raising Star Mobile India Private Limited, 
              I not only managed warehouse operations, including SAP-based GRN generation and material verification but also 
              drove process improvements. I initiated KAPA activities for continuous improvement and implemented the 5S methodology, 
              emphasizing organization and efficiency in the workplace. These efforts demonstrated my commitment to enhancing 
              operational processes and maintaining high standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
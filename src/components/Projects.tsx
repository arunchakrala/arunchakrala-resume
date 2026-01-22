// import React from 'react';

// // const projects = [
// //   {
// //     title: 'Resume Builder',
// //     description: 'An online tool to create and export professional resumes. React + Typescript frontend, Django backend, PDF generation.',
// //     tech: ['React', 'TypeScript', 'Django', 'PDF'],
// //     link: 'https://github.com/yourgithubusername/resume-builder'
// //   },
// //   {
// //     title: 'Portfolio Website',
// //     description: 'Personal website to showcase professional info, projects, and skills. Modern design, responsive layout.',
// //     tech: ['React', 'Vite', 'CSS'],
// //     link: 'https://github.com/yourgithubusername/portfolio'
// //   },
// //   // Add more projects as needed
// // ];

// const projects = [
//   {
//     title: 'SeSuite Central',
//     description: `This is a React web application for asset management focused on Industrial Automation. Users can monitor asset performance with dashboards, time-series charts, 3D rendering, configurable grid, and more.`,
//     tech: ['React JS', 'GraphQL', 'PostgreSQL', 'GO Lang', 'Docker'],
//     link: '',
//   },
//   {
//     title: 'uFlex',
//     description: `A React web application for asset management in Industrial Automation. Users can monitor performance via dashboards, charts, and configurable grids with secure deployments.`,
//     tech: ['React', 'Next JS', 'Django', 'Docker', 'Celery', 'TimeseriesDB', 'RabbitMQ', 'Redis', 'Nginx'],
//     link: '',
//   },
//   {
//     title: 'License Manager',
//     description: `A React Next JS project designed for internal licensing requirements for customers over specific periods.`,
//     tech: ['React', 'Next JS', 'Django', 'PostgreSQL', 'Keycloak'],
//     link: '',
//   },
//   {
//     title: 'AMT Automated Migration Technology',
//     description: `Migrates iOS user data to new devices using PowerShell Automation and VMware.`,
//     tech: ['VMware', 'vSphere', 'Automated PowerShell Scripts'],
//     link: '',
//   },
//   {
//     title: 'Employee Resource Management System (ERMS)',
//     description: `Power Apps/Automate-based tool for employees to store personal and family details, timesheets, and other functions with integration to Active Directory.`,
//     tech: ['PowerApps', 'Power Automate', 'PowerShell', 'Active Directory', 'Azure Active Directory', 'Microsoft Graph API'],
//     link: '',
//   },
//   {
//     title: 'SharePoint Migration (Power Corporation)',
//     description: `Migrated content from SharePoint 2013 to SharePoint Online for 870 sites, including automated migration scripts and extensive client coordination.`,
//     tech: ['SharePoint 2013', 'SharePoint Online', 'ShareGate Migration Tool', 'PowerShell'],
//     link: '',
//   },
//   {
//     title: 'SharePoint Migration (Children\'s Hospital)',
//     description: `Migrated content from SharePoint 2013 to SharePoint Online for a major children's hospital, utilizing PowerShell and ShareGate automation.`,
//     tech: ['SharePoint 2013', 'SharePoint Online', 'ShareGate Migration Tool', 'PowerShell'],
//     link: '',
//   },
// ];


// const Projects: React.FC = () => (
//   <section
//     id="projects"
//     style={{
//       minHeight: '100vh',
//       minWidth: '100vw',
//       background: '#222f3e',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       padding: '100px 16px 32px 16px',
//       boxSizing: 'border-box',
//       color: '#fff',
//     }}
//   >
//     <h2 style={{ fontSize: '2.5rem', marginBottom: 32, color: '#64ffda' }}>Projects</h2>
//     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'center', maxWidth: 1200, width: '100%' }}>
//       {projects.map((project, idx) => (
//         <div
//           key={idx}
//           style={{
//             background: 'rgba(34,47,62,0.85)',
//             borderRadius: 16,
//             padding: 32,
//             minWidth: 280,
//             maxWidth: 400,
//             boxShadow: '0 8px 24px rgba(2,12,27,0.7)',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'space-between',
//           }}
//         >
//           <h3 style={{ color: '#fff', marginBottom: 12 }}>{project.title}</h3>
//           <p style={{ marginBottom: 12 }}>{project.description}</p>
//           {/* <div style={{ marginBottom: 12 }}>
//             {project.tech.map(tech => (
//               <span key={tech} style={{ color: '#64ffda', marginRight: 12 }}>{tech}</span>
//             ))}
//           </div> */}
//           <div style={{
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '8px',
//     marginBottom: 12,
//     maxWidth: '100%',
//     wordBreak: 'break-word',
// }}>
//   {project.tech.map(tech => (
//     <span key={tech} style={{ color: '#64ffda' }}>{tech}</span>
//   ))}
// </div>

//           <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#64ffda', textDecoration: 'underline' }}>
//             View Project
//           </a>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// export default Projects;


// Projects.tsx
import React from 'react';

const projects = [
  {
    title: 'SeSuite Central',
    description: `This is a React web application for asset management focused on Industrial Automation. Users can monitor asset performance with dashboards, time-series charts, 3D rendering, configurable grid, and more.`,
    tech: ['React JS', 'GraphQL', 'PostgreSQL', 'GO Lang', 'Docker'],
    link: '',
  },
  {
    title: 'uFlex',
    description: `A React web application for asset management in Industrial Automation. Users can monitor performance via dashboards, charts, and configurable grids with secure deployments.`,
    tech: ['React', 'Next JS', 'Django', 'Docker', 'Celery', 'TimeseriesDB', 'RabbitMQ', 'Redis', 'Nginx'],
    link: '',
  },
  {
    title: 'License Manager',
    description: `A React Next JS project designed for internal licensing requirements for customers over specific periods.`,
    tech: ['React', 'Next JS', 'Django', 'PostgreSQL', 'Keycloak'],
    link: '',
  },
  {
    title: 'AMT Automated Migration Technology',
    description: `Migrates iOS user data to new devices using PowerShell Automation and VMware.`,
    tech: ['VMware', 'vSphere', 'Automated PowerShell Scripts'],
    link: '',
  },
  {
    title: 'Employee Resource Management System (ERMS)',
    description: `Power Apps/Automate-based tool for employees to store personal and family details, timesheets, and other functions with integration to Active Directory.`,
    tech: ['PowerApps', 'Power Automate', 'PowerShell', 'Active Directory', 'Azure Active Directory', 'Microsoft Graph API'],
    link: '',
  },
  {
    title: 'SharePoint Migration (Power Corporation)',
    description: `Migrated content from SharePoint 2013 to SharePoint Online for 870 sites, including automated migration scripts and extensive client coordination.`,
    tech: ['SharePoint 2013', 'SharePoint Online', 'ShareGate Migration Tool', 'PowerShell'],
    link: '',
  },
  {
    title: 'SharePoint Migration (Children\'s Hospital)',
    description: `Migrated content from SharePoint 2013 to SharePoint Online for a major children's hospital, utilizing PowerShell and ShareGate automation.`,
    tech: ['SharePoint 2013', 'SharePoint Online', 'ShareGate Migration Tool', 'PowerShell'],
    link: '',
  },
];

const Projects: React.FC = () => (
  <section
    id="projects"
    style={{
      minHeight: '100vh',
      minWidth: '100vw',
      background: '#222f3e',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '100px 16px 32px 16px',
      boxSizing: 'border-box',
      color: '#fff',
    }}
  >
    <h2 style={{ 
      fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
      marginBottom: 32, 
      color: '#64ffda',
      textAlign: 'center'
    }}>
      Projects
    </h2>
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: 'clamp(16px, 3vw, 32px)', 
      justifyContent: 'center', 
      maxWidth: 1200, 
      width: '100%' 
    }}>
      {projects.map((project, idx) => (
        <div
          key={idx}
          style={{
            background: 'rgba(34,47,62,0.85)',
            borderRadius: 16,
            padding: 'clamp(20px, 4vw, 32px)',
            minWidth: 'min(280px, 100%)',
            maxWidth: 400,
            flex: '1 1 300px',
            boxShadow: '0 8px 24px rgba(2,12,27,0.7)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <h3 style={{ 
            color: '#fff', 
            marginBottom: 12,
            fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)'
          }}>
            {project.title}
          </h3>
          <p style={{ 
            marginBottom: 12,
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            lineHeight: '1.6'
          }}>
            {project.description}
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: 12,
            maxWidth: '100%',
          }}>
            {project.tech.map(tech => (
              <span 
                key={tech} 
                style={{ 
                  color: '#64ffda',
                  fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                color: '#64ffda', 
                textDecoration: 'underline',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)'
              }}
            >
              View Project
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Projects;

import React from 'react'

const services = [
  {
    id: 1,
    title: 'Custom Website Design and Development',
    description:
      "Create visually appealing, responsive, and user-friendly websites tailored to clients' needs.",
  },
  {
    id: 2,
    title: 'E-commerce Website Development',
    description:
      'Develop full-featured e-commerce websites with integrated payment gateways and product catalogs.',
  },
  {
    id: 3,
    title: 'Landing Page Creation',
    description:
      'Design and build high-converting landing pages for marketing campaigns or product launches.',
  },
  {
    id: 4,
    title: 'React/Next.js Web Apps',
    description:
      'Build dynamic and interactive web applications using React.js or Next.js, integrating state management with Redux or Context API.',
  },
  {
    id: 5,
    title: 'Single Page Applications (SPAs)',
    description:
      'Develop fast, responsive single-page applications that provide a seamless user experience.',
  },
  {
    id: 6,
    title: 'WordPress Theme Customization',
    description:
      'Customize and create WordPress themes and plugins for clients looking to build their websites on WordPress.',
  },
  {
    id: 7,
    title: 'Website Redesign',
    description:
      'Improve the design, usability, and functionality of existing websites, making them modern, mobile-friendly, and fast.',
  },
  {
    id: 8,
    title: 'SEO Optimization',
    description:
      'Offer search engine optimization services to improve website visibility and ranking on search engines.',
  },
  {
    id: 9,
    title: 'API Integration',
    description:
      'Integrate third-party APIs (e.g., payment gateways, social media, maps) into websites or web applications.',
  },
  {
    id: 10,
    title: 'Web Performance Optimization',
    description:
      'Improve website load times, performance, and user experience by optimizing assets and code.',
  },
  {
    id: 11,
    title: 'Custom Dashboards',
    description:
      'Build personalized dashboards to visualize data, track performance, or manage content.',
  },
  {
    id: 12,
    title: 'Web Accessibility Improvements',
    description:
      'Ensure websites meet accessibility standards to be inclusive of users with disabilities.',
  },
  {
    id: 13,
    title: 'Web App Maintenance & Support',
    description:
      'Offer ongoing maintenance, bug fixes, and updates for web applications.',
  },
  {
    id: 14,
    title: 'Mobile-Friendly Design (Responsive Design)',
    description:
      'Make sure websites and web apps are optimized for all devices, including mobile phones and tablets.',
  },
  {
    id: 15,
    title: 'Progressive Web Apps (PWAs)',
    description:
      'Develop progressive web apps that offer a native app-like experience on the web.',
  },
]

const Services = () => {
  return (
    <section className='services' id='services'>
      <h2>My Services</h2>
      <div className='services-list'>
        {services.map((service) => (
          <div key={service.id} className='service'>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services

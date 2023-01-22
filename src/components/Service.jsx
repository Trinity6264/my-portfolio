import React from 'react'
import {FaHtml5, FaMobileAlt, FaServer} from 'react-icons/fa'
const Service = () => {
  const listOfServices = [
    {
      iconTag: <FaMobileAlt/>,
      title: 'Mobile developer',
      content: 'As a mobile developer with expertise in Flutter, I provide a wide range of services to help businesses and individuals create high-performance, visually appealing, and user-friendly mobile applications. My expertise in the Flutter framework, along with my knowledge of mobile development best practices, allows me to create apps that run smoothly on both iOS and Android devices.'
    },
    {
      iconTag: <FaHtml5/>,
      title: 'Website developer',
      content: 'As a website developer with expertise in React, I provide a wide range of services to help businesses and individuals create high-performance, visually appealing, and user-friendly websites. My expertise in React and its ecosystem allows me to create fast and responsive web applications that provide a seamless user experience.'
    },
    {
      iconTag: <FaServer/>,
      title: 'Backend developer',
      content: 'I specialize in developing backend systems for various types of applications such as e-commerce, social media, and other business-related apps. I use Node.js and its popular frameworks such as Express, Nest.js, and Koa.js to create server-side logic and handle database operations. I also have experience working with databases such as MongoDB, MySQL, and Firebase, and using them to store and retrieve data.'
    },
  ];
  return (
    <div className='service' id='service'>
      <h2>Service</h2>
      <div className="service-divs-wrapper">
        {
          listOfServices.map(({ content, iconTag, title }) => {
            return <div className="service-wrapper" key={title}>
              {iconTag} 
              <h3>{title}</h3>
              <p>
                {content}
              </p>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Service
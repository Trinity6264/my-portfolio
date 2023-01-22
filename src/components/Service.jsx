import React from 'react'
import {FaHtml5, FaMobileAlt, FaServer} from 'react-icons/fa'
const Service = () => {
  const listOfServices = [
    {
      iconTag: <FaMobileAlt/>,
      title: 'Mobile developer',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ratione voluptatem, laudantium nihil asperiores quasi consequuntur ipsam vitae aliquam cumque assumenda? Tempora, adipisci. A aliquam rerum hic illum nobis dolore.'
    },
    {
      iconTag: <FaHtml5/>,
      title: 'Website developer',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ratione voluptatem, laudantium nihil asperiores quasi consequuntur ipsam vitae aliquam cumque assumenda? Tempora, adipisci. A aliquam rerum hic illum nobis dolore.'
    },
    {
      iconTag: <FaServer/>,
      title: 'Backend developer',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ratione voluptatem, laudantium nihil asperiores quasi consequuntur ipsam vitae aliquam cumque assumenda? Tempora, adipisci. A aliquam rerum hic illum nobis dolore.'
    },
  ];
  return (
    <div className='service' id='service'>
      <h2>What I do</h2>
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
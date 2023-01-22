import React from 'react'


import dartLogo from '../assets/dart.svg';
import cssLogo from '../assets/css-3.svg';
import booStrapLogo from '../assets/boostrap.svg';
import figmaLogo from '../assets/figma.svg';
import firebaseLogo from '../assets/firebase.svg';
import flutterLogo from '../assets/flutter.svg';
import htmlLogo from '../assets/html.svg';
import jsLogo from '../assets/js.svg';
import mongodbLogo from '../assets/mongodb.svg';
import mysqlLogo from '../assets/mysql.svg';
import nodejsLogo from '../assets/nodejs.svg';
import reactLogo from '../assets/react.svg';
import ubuntuLogo from '../assets/ubuntu.svg';
import vsCodeLogo from '../assets/vs.svg';

const Skills = () => {


    const skillsData = [
        {
            title: 'HTML 5',
            icon: htmlLogo,
        },
        {
            title: 'CSS 3',
            icon: cssLogo,
        },
        {
            title: 'BOOSTRAP 5',
            icon: booStrapLogo,
        },
        {
            title: 'JAVASCRIPT',
            icon: jsLogo,
        },
        {
            title: 'FIGMA',
            icon: figmaLogo,
        },
        {
            title: 'FLUTTER',
            icon: flutterLogo,
        },
        {
            title: 'DART',
            icon: dartLogo,
        },
        {
            title: 'FIREBASE',
            icon: firebaseLogo,
        },
        {
            title: 'MONGODB',
            icon: mongodbLogo,
        },
        {
            title: 'MYSQL',
            icon: mysqlLogo,
        },
        {
            title: 'NODE JS',
            icon: nodejsLogo,
        },
        {
            title: 'REACT JS',
            icon: reactLogo,
        },
        {
            title: 'UBUNTU',
            icon: ubuntuLogo,
        },
        {
            title: 'VS CODE',
            icon: vsCodeLogo,
        },
    ]

    return (
        <div className='skills'>
            <h2>Skills</h2>
            <hr />
            <div className="skills-container">
                {skillsData.map(({ icon, title }) => {
                    return <div className='skills-wrapper'>
                        <img src={icon} alt={icon} className='' />
                        <p>{title}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Skills
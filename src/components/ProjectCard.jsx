import React from 'react'
import Pic from '../assets/bg.jpg'
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

import { AiOutlineUpload, AiOutlineGithub } from 'react-icons/ai'
const ProjectCard = () => {
    return (
        <div className="project-card">
            <img src={Pic} alt="" />
            <h3>Uniplex</h3>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis commodi molestiae! Commodi, quaerat. Optio fugiat similique.</small>
            <div className="last-card-div">
                <div className="stack-wrapper">
                    <img src={dartLogo} alt="Dart-logo" />
                    <img src={flutterLogo} alt="Flutter-logo" />
                    <img src={mysqlLogo} alt="mysql-logo" />
                </div>
                <div className="inner-div"></div>
                <div className="card-routes-wrapper">
                    <a href="#"> <AiOutlineGithub /> </a>
                    <a href="#"> <AiOutlineUpload /> </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
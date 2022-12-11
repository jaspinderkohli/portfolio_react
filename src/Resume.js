import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Resume() {
    return (
        <div className="wrapper">
            <div className="resume">
                <div className="left">
                    <div className="img_holder">
                        <img src="https://imgur.com/D7ISMtE.jpg" className="picture" alt="picture"/>
                    </div>
                    <div className="contact_wrap pb">
                        {/*<!--- contact -->*/}
                        <div className="title">
                            Contact
                        </div>
                        <div className="contact">
                            <ul>
                                <li>
                                    <div className="li_wrap">
                                        <div className="icon">
                                            <a href="https://twitter.com/jaspinder_nl">
                                                <FontAwesomeIcon icon={['fab', 'twitter']} />
                                            </a>
                                        </div>
                                        <div className="text"><a href="https://twitter.com/jaspinder_nl">Twitter</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="li_wrap">
                                        <div className="icon">
                                            <a href="https://www.linkedin.com/in/jaspinder-nl/">
                                                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                                            </a>
                                        </div>
                                        <div className="text"><a
                                            href="https://www.linkedin.com/in/jaspinder-nl/">Linkedin</a></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="li_wrap">
                                        <div className="icon"><a href="https://github.com/jaspinderkohli">
                                            <FontAwesomeIcon icon={['fab', 'github']} />
                                        </a></div>
                                        <div className="text"><a href="https://github.com/jaspinderkohli">github</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/*<!--skills-->*/}
                    <div className="skills_wrap pb">
                        <div className="title">
                            skills
                        </div>
                        <div className="skills">
                            <ul>
                                <li>
                                    <div className="li_wrap">
                                        <div className="icon">
                                            <i className="fab fa-python"></i>
                                            <FontAwesomeIcon icon={['fab', 'python']} />
                                        </div>
                                        <div className="text">Python</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="li_wrap">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={['fab', 'angular']} />
                                        </div>
                                        <div className="text">Angular</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="li_wrap">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={['fab', 'angular']} />
                                        </div>
                                        <div className="text">Javascript</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="li_wrap">
                                        <div className="icon"><i className="fas fa-database"></i></div>
                                        <div className="text">SQL</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="li_wrap">
                                        <div className="icon"><i className="fas fa-database"></i></div>
                                        <div className="text">PostgreSQL</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="li_wrap">
                                        <div className="icon"><FontAwesomeIcon icon={['fab', 'docker']}/></div>
                                        <div className="text">Docker</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="li_wrap">
                                        <div className="icon"><FontAwesomeIcon icon={['fab', 'html5']}/></div>
                                        <div className="text">HTML</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="li_wrap">
                                        <div className="icon"><FontAwesomeIcon icon={['fab', 'css3']}/></div>
                                        <div className="text">CSS</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/*<!--hobbies-->*/}
                    <div className="hobbies_wrap pb">
                        <div className="title">
                            hobbies
                        </div>
                        <div className="hobbies">
                            {/*<!--                    <div class="skills">-->*/}
                            <ul>
                                <li>
                                    <div className="li_wrap">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={['fab', 'square-instagram']}/>
                                        </div>
                                        <div className="text">Photography</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="li_wrap">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={['fab', 'readme']}/>
                                        </div>
                                        <div className="text">Reading</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="li_wrap">
                                        <div className="icon"><FontAwesomeIcon icon={['fab', 'spotify']}/></div>
                                        <div className="text">Music</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="li_wrap">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={['fab', 'viadeo']}/>
                                        </div>
                                        <div className="text">Hiking</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*<!--header-->*/}
                <div className="right">
                    <div className="header">
                        <div className="name_role">
                            <div className="name">
                                Jaspinder S.
                            </div>
                            <div className="role">
                                Grad Student at Memorial University of Newfoundland
                            </div>
                        </div>
                        <div className="about">
                            Detail-oriented and creative-minded grad student with a keen interest in data science and
                            full-stack software development.
                        </div>
                    </div>
                    {/*<!--education-->*/}
                    <div className="right_inner">
                        <div className="exp">
                            <div className="title">
                                Education
                            </div>
                            <div className="exp_wrap">
                                <ul>
                                    <li>
                                        <div className="li_wrap">
                                            <div className="date">
                                                2021- Exp. 2023
                                            </div>
                                            <div className="info">
                                                <p className="info_title">
                                                    Master of Science
                                                </p>
                                                <p className="info_com">
                                                    Computer Science
                                                </p>
                                                <p className="info_cont">
                                                    Relevant courses taken:
                                                    Database Tech & Applications, Intro to Data Visualization
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="li_wrap">
                                            <div className="date">
                                                2015-2019
                                            </div>
                                            <div className="info">
                                                <p className="info_title">
                                                    Bachelors of Science
                                                </p>
                                                <p className="info_com">
                                                    Computer Science
                                                </p>
                                                <p className="info_cont">
                                                    Relevant courses taken:
                                                    Python, C++, OOP/C, Data Structures & Algorithms, Computer
                                                    Networking, Linux, Oracle SQL, Database Management
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/*<!-- experience-->*/}
                        <div className="exp">
                            <div className="title">
                                Experience
                            </div>
                            <div className="exp_wrap">
                                <ul>
                                    <li>
                                        <div className="li_wrap">
                                            <div className="date">
                                                Aug 2019 - Jul 2021
                                            </div>
                                            <div className="info">
                                                <p className="info_title">
                                                    Nyalazone Solutions Private Ltd.
                                                </p>
                                                <p className="info_com">
                                                    Data Engineer
                                                </p>
                                                <p className="info_cont">
                                                    <ul>
                                                        <li>• Worked on the backend team to build REST APIs for a CRM
                                                            system for a client in the Financial Services domain.
                                                        </li>
                                                        <li>• Built a web application to analyze survey data and
                                                            automate its reports and dashboards using Python,
                                                            PostgresSQL, Angular and fusioncharts.
                                                        </li>
                                                        <li>• Automated deployments for cloud servers using Python and
                                                            Bash Scripts.
                                                        </li>
                                                        <li>• Actively managed, improved, and monitored projects on GCP
                                                            and Azure Cloud Platforms, including backups and patches.
                                                        </li>
                                                        <li>• Responsible for deployments of the projects.</li>
                                                        <li>• Identify software bugs and fix them to improve systems.
                                                        </li>
                                                        <li>• Develop technical documentation to define the system
                                                            components, development environment and implementation
                                                            planning.
                                                        </li>
                                                        <li>• Provide guidance, and/or review the work of other
                                                            interns.
                                                        </li>
                                                    </ul>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="li_wrap">
                                            <div className="date">
                                                Aug 2018 - Aug 2019
                                            </div>
                                            <div className="info">
                                                <p className="info_title">
                                                    Nyalazone Solutions Private Ltd.
                                                </p>
                                                <p className="info_com">
                                                    Trainee Data Engineer
                                                </p>
                                                <p className="info_cont">
                                                    <ul>
                                                        <li>• Developed mobile applications using Angular and Cordova.
                                                        </li>
                                                        <li>• Performed DBA activities like creating tables, views,
                                                            triggers and developing scripts for data feeds.
                                                        </li>
                                                        <li>• Developed scripts to automate manual Database Management
                                                            tasks like scheduled backups, etc.
                                                        </li>
                                                    </ul>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="education">
                            <div className="title">
                                Projects
                            </div>
                            <div className="education_wrap">
                                <ul>
                                    {/*<!--                                Proj 1-->*/}
                                    <li>
                                        <div className="li_wrap">
                                            <div className="date">
                                                2022
                                            </div>
                                            <div className="info">
                                                <p className="info_title">
                                                    One Stop Agro
                                                </p>
                                                <p className="info_com">
                                                    Language(s) used: Python, Javascript, SQL
                                                </p>
                                                <p className="info_cont">
                                                    Built an image-based plant/crop diseases Detection using Deep
                                                    Learning.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    {/*<!--                                Proj 1-->*/}
                                    <li>
                                        <div className="li_wrap">
                                            <div className="date">
                                                2021
                                            </div>
                                            <div className="info">
                                                <p className="info_title">
                                                    Chatbot Using Deep Learning
                                                </p>
                                                <p className="info_com">
                                                    Language(s) used: Python
                                                </p>
                                                <p className="info_cont">
                                                    Built an AI chatbot using neural networks and natural language
                                                    processing in Python.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    {/* Proj 2*/}
                                    <li>
                                        <div className="li_wrap">
                                            <div className="date">
                                                2018
                                            </div>
                                            <div className="info">
                                                <p className="info_title">
                                                    Automated Attendance System
                                                </p>
                                                <p className="info_com">
                                                    Language(s) used: Python, Angular
                                                </p>
                                                <p className="info_cont">
                                                    Using Optical Character Recognition(OCR) to scan the handwritten
                                                    attendance register and build
                                                    corresponding XML or text files.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="li_wrap">
                                            <div className="date">
                                                2016
                                            </div>
                                            <div className="info">
                                                <p className="info_title">
                                                    Attendance Management Application
                                                </p>
                                                <p className="info_com">
                                                    Language(s) used: Django, Angular 4
                                                </p>
                                                <p className="info_cont">
                                                    Keep record of the attendance of students and make it easy to track
                                                    if the attendance is low.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;

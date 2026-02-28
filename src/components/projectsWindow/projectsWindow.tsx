import { useState } from 'react';
import { Frame } from '@react95/core/Frame';
import { TitleBar } from '@react95/core/TitleBar';
import { Button } from '@react95/core/Button';
import { Tabs } from '@react95/core/Tabs';
import { Tab } from '@react95/core/Tab';
import { Fieldset } from '@react95/core/Fieldset';
import { Checkbox } from '@react95/core/Checkbox';

import ProjectsWindowProps from './projectsWindow.types';
import './projectsWindow.css';

export default function ProjectsWindow (props: ProjectsWindowProps) {
    function closeWindow () {
        props.setShowWindow(false);
    }

    function minimizeWindow () {

    }

    if (props.showWindow) {
        return (
            <Frame
                h='600px' 
                w='700px' 
                bgColor='$material'
                boxShadow={props.activeWindow ? '$out' : '$in'}
                padding='2px'
            >
                <TitleBar 
                    title='Projects'
                    id='Projects-titlebar'
                    active={props.activeWindow}
                >
                    <TitleBar.Minimize 
                        onClick={() => {
                            minimizeWindow()
                        }}
                    />
                    <TitleBar.Close 
                        onClick={() => {
                            closeWindow()
                        }}
                    />
                </TitleBar>
                
                <Tabs defaultActiveTab='Senior Project' className='mt-2 ml-2'>
                    <Tab title='Senior Project' className='h-[90%]'>
                        <h1 className='ProjectsWindow-h1 font-mono ml-2'> Ground Speed Test Stand </h1>
                        <hr style={{ width: '95%', marginLeft: '10px'}}/>
                        <Frame h='450px' w='95%' bgColor='white' boxShadow='$in' className='mt-5 ml-2 p-2 overflow-y-scroll'>
                            <h2 className='ProjectsWindow-h2 font-mono'> John Deere </h2>
                            <Fieldset legend='Skills' className='pl-2 pr-2 pb-2'>
                                <div className='flex flex-col'>
                                    <Checkbox checked readOnly> React </Checkbox>
                                    <Checkbox checked readOnly> TypeScript </Checkbox>
                                    <Checkbox checked readOnly> Node.js </Checkbox>
                                    <Checkbox checked readOnly> TCP/IP Communication </Checkbox>
                                    <Checkbox checked readOnly> Build From Scratch </Checkbox>
                                </div>
                            </Fieldset>
                            
                            <p className='ProjectsWindow-p mt-2'> This project was sponsored by John Deere to design and build a Ground Speed Test Stand used to validate proprietary speed sensors under controlled conditions. The objective was to improve testing accuracy, repeatability, and overall efficiency compared to existing manual processes.</p>
                            <p className='ProjectsWindow-p mt-2'> I developed a cross-platform desktop application using Electron, React, and TypeScript that allowed engineers to control the test stand's motor speed, monitor real-time sensor data, and log test results for analysis. The interface was designed for clarity and usability in an engineering environment, providing live readouts, system status indicators, and structured data logging.</p>
                            <p className='ProjectsWindow-p mt-2'> On the embedded side, I implemented server-side software on a Raspberry Pi to manage hardware communication and transmit sensor data over Ethernet using ZeroMQ with TCP/IP sockets. This required designing a reliable messaging architecture to handle asynchronous communication, ensure data integrity, and maintain low-latency updates between the hardware and desktop application. </p>
                            <p className='ProjectsWindow-p mt-2'> This project strengthened my experience in distributed systems, networking, and hardware-software integration. It required building a complete system from scratch — from communication protocols to UI design — while collaborating within a team and meeting real-world engineering requirements.</p>
                        </Frame>
                    </Tab>

                    <Tab title='Bookstore' className='h-[90%]'>
                        <h1 className='ProjectsWindow-h1 font-mono ml-2'> Bookstore E-Commerce Website </h1>
                        <hr style={{ width: '95%', marginLeft: '10px'}}/>
                        <Frame h='450px' w='95%' bgColor='white' boxShadow='$in' className='mt-5 ml-2 p-2 overflow-y-scroll'>
                            <Fieldset legend='Skills' className='pl-2 pr-2 pb-2'>
                                <div className='flex flex-col'>
                                    <Checkbox checked readOnly> LAMP (Linux, Apache, MySQL, PHP) </Checkbox>
                                    <Checkbox checked readOnly> Database Design </Checkbox>
                                    <Checkbox checked readOnly> Custom APIs </Checkbox>
                                    <Checkbox checked readOnly> User Authentication </Checkbox>
                                </div>
                            </Fieldset>
                            
                            <p className='ProjectsWindow-p mt-2'>This project involved designing and implementing a full database-driven online bookstore using the LAMP stack from the ground up. The goal was to build a complete multi-user system that supports administrators and customers with real-time database interaction.</p> 
                            <p className='ProjectsWindow-p mt-2'>I implemented secure customer authentication (sign up, login, logout), dynamic book searching with case-insensitive keyword matching, and a purchasing system that tracks cumulative quantities and total spending per customer. The application supports concurrent users across multiple browsers and sessions.</p> 
                            <p className='ProjectsWindow-p mt-2'>Additionally, I built administrative functionality to manage book entries, system-wide reset capabilities to clear all stored data, and detailed reporting views for books and customers. The project emphasized user-friendly design, clean session management, and structured PHP/MySQL integration to maintain data integrity and relational consistency.</p>
                        </Frame>
                    </Tab>

                    <Tab title='Unity' className='h-[90%]'>
                        <h1 className='ProjectsWindow-h1 font-mono ml-2'> Game Development </h1>
                        <hr style={{ width: '95%', marginLeft: '10px'}}/>
                        <Frame h='450px' w='95%' bgColor='white' boxShadow='$in' className='mt-5 ml-2 p-2 overflow-y-scroll'>
                            <Fieldset legend='Skills' className='pl-2 pr-2 pb-2'>
                                <div className='flex flex-col'>
                                    <Checkbox checked readOnly> C# </Checkbox>
                                    <Checkbox checked readOnly> Unity Game Engine </Checkbox>
                                    <Checkbox checked readOnly> Object-Oriented Programming (OOP) </Checkbox>
                                    <Checkbox checked readOnly> Self Motivation </Checkbox>
                                    <Checkbox checked readOnly> Eagerness to learn </Checkbox>
                                </div>
                            </Fieldset>
                            
                            <p className='ProjectsWindow-p mt-2'> As a self-driven hobby project, I explored game development using Unity to deepen my understanding of software architecture, real-time systems, and interactive design. I built gameplay mechanics, implemented physics-based interactions, and developed structured C# scripts following object-oriented principles.</p> 
                            <p className='ProjectsWindow-p mt-2'> This reflects my eagerness to learn beyond coursework. By independently researching documentation, experimenting with new tools, and iterating through trial and error, I strengthened my ability to quickly adapt to unfamiliar technologies and solve complex problems.</p>
                        </Frame>
                    </Tab>
                </Tabs>
            </Frame>
        );
    }
}
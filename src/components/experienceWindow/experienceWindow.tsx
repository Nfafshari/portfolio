import { useState } from 'react';
import { Frame } from '@react95/core/Frame';
import { TitleBar } from '@react95/core/TitleBar';
import { Button } from '@react95/core/Button';
import { Tabs } from '@react95/core/Tabs';
import { Tab } from '@react95/core/Tab';
import { Fieldset } from '@react95/core/Fieldset';
import { Checkbox } from '@react95/core/Checkbox';

import volunteeringImg from '../../assets/internGf_day2.jpg';
import ExperienceWindowProps from './experienceWindow.types';
import './experienceWindow.css';

export default function ExperienceWindow (props: ExperienceWindowProps) {
    const [panelState, setPanelState] = useState<'Overview' | 'InternGF'>('Overview');

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
                    title='Experience'
                    id='Experience-titlebar'
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
                
                <Tabs defaultActiveTab='Ideal Aerosmith' className='mt-2 ml-2'>
                    <Tab title='Ideal Aerosmith' className='h-[90%]'>
                        <h1 className='ExperienceWindow-h1 font-mono ml-2'> Ideal Aerosmith </h1>
                        <hr style={{ width: '95%', marginLeft: '10px'}}/>
                        {(panelState === 'Overview') &&
                            <Frame h='450px' w='78%' bgColor='white' boxShadow='$in' className='mt-5 ml-2 p-2 overflow-y-scroll'>
                                <h2 className='ExperienceWindow-h2 font-mono'> Software Engineer Intern <span className='ExperienceWindow-span text-gray-500 text-xs'>[06/02/2025 - present]</span></h2>
                                <Fieldset legend='Skills' className='pl-2 pr-2 pb-2'>
                                    <div className='flex flex-col'>
                                        <Checkbox checked> React </Checkbox>
                                        <Checkbox checked> TypeScript/JavaScript </Checkbox>
                                        <Checkbox checked> Node.js </Checkbox>
                                        <Checkbox checked> Playwright testing </Checkbox>
                                        <Checkbox checked> Git </Checkbox>
                                        <Checkbox checked> Atlassian Products (Jira, Bitbucket, Sourcetree) </Checkbox>
                                    </div>
                                </Fieldset>
                                
                                <p className='ExperienceWindow-p mt-2'>This internship has been one of the most beneficial steps in my career. I was introduced to software design principles, agile methodologies, version control (of large code bases), and team work with other engineers. I am treated just like any other engineer and constantly learn new concepts.</p>
                                <p className='ExperienceWindow-p mt-2'>I mostly have been working on desktop applications using the above programming languages as well as Electron/Electron forge and webpack.</p>
                                <p className='ExperienceWindow-p mt-2'>Along with these applications I have learned how to integrate component libraries as well like MaterialUI and Bootstrap to create consistent interfaces.</p>
                            </Frame>
                        }
                        {(panelState === 'InternGF') &&
                            <Frame h='450px' w='78%' bgColor='white' boxShadow='$in' className='mt-5 ml-2 p-2 overflow-y-scroll'>
                                <h2 className='ExperienceWindow-h2 font-mono'> InternGF <span className='ExperienceWindow-span text-gray-500 text-xs'>[05/29/2025 - 08/07/2025]</span></h2>
                                <Fieldset legend='Activities' className='pl-2 pr-2 pb-2'>
                                    <div className='flex flex-col'>
                                        <Checkbox checked>Volunteering</Checkbox>
                                        <Checkbox checked>Networking</Checkbox>
                                        <Checkbox checked>Tours</Checkbox>
                                    </div>
                                </Fieldset>
                                
                                <p className='ExperienceWindow-p mt-2'>Intern Grand Forks (GF) was a summer cohort where interns from companies in the Grand Forks (ND) area participated in networking and explorative activities.</p>
                                <p className='ExperienceWindow-p mt-2'>Twice a month many interns and I would meet up and participate in some kind of socializing game, then move on to the activity for the day. I challenged myself to get out there and meet some new people which was not easy but really broke my shell! </p>
                                <p className='ExperienceWindow-p mt-2'>Here are some memorable activities:</p>
                                <p className='ExperienceWindow-p ml-5'><span className='text-[16px] font-extrabold'>Volunteering</span> - volunteered at United Way clothes drive, planted vegetation around the city, and a packaged food at a local food drive.</p>
                                <p className='ExperienceWindow-p ml-5'><span className='text-[16px] font-extrabold'>Industry Tours</span> - toured local industries that drive Grand Forks economy. I toured General Eletric wind plant and Minnekota Electric. </p>
                                <p className='ExperienceWindow-p ml-5'><span className='text-[16px] font-extrabold'>Sendoff</span> - formal attire social event for the end of the cohort. (yes, we had to learn how to eat fancy.)</p>

                                <div className='flex w-[100%] justify-center align-center mt-5'>
                                    <div className='flex flex-col justify-center text-center'>
                                        <img src={volunteeringImg}/>
                                        <p className='ExperienceWindow-p'>Volunteer Day (far left/black shirt)</p>
                                    </div>
                                </div>
                            </Frame>
                        }
                        <div className='absolute right-2 top-11 h-[89%] w-[21%] mt-14'>
                            <div className='flex items-center flex-col'>
                                <Button 
                                    className='mb-5 mt-10'
                                    onClick={() => {
                                        setPanelState('Overview')
                                    }}
                                >
                                    Overview
                                </Button>
                                <Button 
                                    className='mb-5'
                                    onClick={() => {
                                        setPanelState('InternGF')
                                    }}    
                                >
                                    InternGF
                                </Button>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </Frame>
        );
    }
}
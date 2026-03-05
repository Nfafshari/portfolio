import { useState } from 'react';
import { Frame, Button, Tabs, Tab, Fieldset, Checkbox } from '@react95/core';
import volunteeringImg from '../../assets/internGf_day2.jpg';

export default function ExperienceWindow () {
    const [panelState, setPanelState] = useState<'Overview' | 'InternGF'>('Overview');

    return (
        <Tabs defaultActiveTab='Ideal Aerosmith'>
            <Tab title='Ideal Aerosmith' className='font-mono'>
                <div className='pl-2'>
                    <h1 className='font-mono'> Ideal Aerosmith, Grand Forks, ND </h1>
                    <hr className='w-[95%]'/>
                    {(panelState === 'Overview') &&
                        <Frame h='382px' w='78%' bgColor='white' boxShadow='$in' className='mt-5 p-2 overflow-y-scroll max-h-[80%]'>
                            <h2 className='text-lg font-mono'> Software Engineer Intern <span className='text-gray-500 text-xs'>[June 2025 - present]</span></h2>
                            <Fieldset legend='Skills' className='pl-2 pr-2 pb-2'>
                                <div className='flex flex-col'>
                                    <Checkbox checked readOnly className='checkbox'> React </Checkbox>
                                    <Checkbox checked readOnly className='checkbox'> TypeScript </Checkbox>
                                    <Checkbox checked readOnly className='checkbox'> Node.js </Checkbox>
                                    <Checkbox checked readOnly className='checkbox'> Playwright Automated Testing </Checkbox>
                                    <Checkbox checked readOnly className='checkbox'> Git </Checkbox>
                                    <Checkbox checked readOnly className='checkbox'> Atlassian Products (Jira, Bitbucket, Sourcetree) </Checkbox>
                                </div>
                            </Fieldset>
                            
                            <p className='font-mono text-lg mt-2'>Contribute to the development of desktop applications for multi-axis motion control systems, working with cutting-edge technologies in the motion control industry.</p>
                            <p className='font-mono text-lg mt-2'>Collaborate in Agile sprints with cross-functional engineering teams, participating in daily standups, sprint planning, and retrospectives to deliver quality software on schedule.</p>
                            <p className='font-mono text-lg mt-2'>Work within large TypeScript/Node.js codebases using Git-based version control, managing branching strategies and maintaining code quality through proper documentation and commit practices.</p>
                            <p className='font-mono text-lg mt-2'>Build UI components using React for Electron applications, creating responsive and user-friendly interfaces for desktop environments.</p>
                            <p className='font-mono text-lg mt-2'>Participate in code reviews and software lifecycle processes, receiving constructive feedback and contributing to team knowledge sharing and continuous improvement.</p>
                        </Frame>
                    }
                    {(panelState === 'InternGF') &&
                        <Frame h='382px' w='78%' bgColor='white' boxShadow='$in' className='mt-5 p-2 overflow-y-scroll'>
                            <h2 className='text-lg font-mono'> InternGF <span className='ExperienceWindow-span text-gray-500 text-xs'>[05/29/2025 - 08/07/2025]</span></h2>
                            <Fieldset legend='Activities' className='pl-2 pr-2 pb-2'>
                                <div className='flex flex-col'>
                                    <Checkbox checked readOnly className='checkbox'>Volunteering</Checkbox>
                                    <Checkbox checked readOnly className='checkbox'>Networking</Checkbox>
                                    <Checkbox checked readOnly className='checkbox'>Tours</Checkbox>
                                </div>
                            </Fieldset>
                            
                            <p className='font-mono text-lg mt-2'>Intern Grand Forks (GF) was a summer cohort where interns from companies in the Grand Forks (ND) area participated in networking and explorative activities.</p>
                            <p className='font-mono text-lg mt-2'>Twice a month many interns and I would meet up and participate in some kind of socializing game, then move on to the activity for the day. I challenged myself to get out there and meet some new people which was not easy but really broke my shell! </p>
                            <p className='font-mono text-lg mt-2'>Here are some memorable activities:</p>
                            <p className='font-mono text-lg ml-5'><span className='text-[16px] font-extrabold'>Volunteering</span> - volunteered at United Way clothes drive, planted vegetation around the city, and a packaged food at a local food drive.</p>
                            <p className='font-mono text-lg ml-5'><span className='text-[16px] font-extrabold'>Industry Tours</span> - toured local industries that drive Grand Forks economy. I toured General Eletric wind plant and Minnekota Electric. </p>
                            <p className='font-mono text-lg ml-5'><span className='text-[16px] font-extrabold'>Sendoff</span> - formal attire social event for the end of the cohort. (yes, we had to learn how to eat fancy.)</p>

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
                </div>
            </Tab>
            <Tab title='CRC' className='font-mono'>
                <h1 className='font-mono ml-2'> Computational Research Center - UND </h1>
                <hr style={{ width: '95%', marginLeft: '10px'}}/>
                <Frame h='382px' w='95%' bgColor='white' boxShadow='$in' className='mt-5 ml-2 p-2 overflow-y-scroll'>
                    <h2 className='text-lg font-mono'> Software Engineer <span className='text-gray-500 text-xs'>[February 2026 - present]</span></h2>
                    <Fieldset legend='Skills' className='pl-2 pr-2 pb-2'>
                        <div className='flex flex-col'>
                            <Checkbox checked readOnly className='checkbox'> Next.js </Checkbox>
                            <Checkbox checked readOnly className='checkbox'> Authentication & Authorization </Checkbox>
                            <Checkbox checked readOnly className='checkbox'> TypeScript </Checkbox>
                            <Checkbox checked readOnly className='checkbox'> API Integration </Checkbox>
                            <Checkbox checked readOnly className='checkbox'> User Experience Design </Checkbox>
                        </div>
                    </Fieldset>
                    <p className='text-xs text-gray-400'> * Note: UND = University of North Dakota </p>

                    <p className='font-mono text-lg mt-2'>Develop and maintain frontend features for the UND Arctic Labs research platform, creating intuitive interfaces that enable university researchers to effectively utilize computational tools and resources.</p>
                    <p className='font-mono text-lg mt-2'>Implement robust authentication and authorization systems to secure user access and protect sensitive research data, ensuring compliance with university security standards.</p>
                    <p className='font-mono text-lg mt-2'>Integrate RESTful and GraphQL APIs with React-based frontend services, building responsive user interfaces that provide seamless data visualization and interaction.</p>
                </Frame>
            </Tab>
        </Tabs>
    );
}
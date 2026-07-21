import { Frame } from '@react95/core/Frame';
import { Tabs } from '@react95/core/Tabs';
import { Tab } from '@react95/core/Tab';
import { Fieldset } from '@react95/core/Fieldset';
import { Checkbox } from '@react95/core/Checkbox';

export default function ProjectsWindow () {
    
    return (
        <Tabs defaultActiveTab='Senior Project'>
            <Tab title='Senior Project' className='font-mono'>
                <h1 className='font-mono ml-2'> Ground Speed Test Stand </h1>
                <hr style={{ width: '95%', marginLeft: '10px'}}/>
                <Frame h='382px' w='95%' bgColor='white' boxShadow='$in' className='mt-5 ml-2 p-2 overflow-y-scroll'>
                    <h2 className='font-mono'> John Deere </h2>
                    <Fieldset legend='Skills' className='pl-2 pr-2 pb-2'>
                        <div className='flex flex-col'>
                            <Checkbox checked readOnly className='checkbox'> React </Checkbox>
                            <Checkbox checked readOnly className='checkbox'> TypeScript </Checkbox>
                            <Checkbox checked readOnly className='checkbox'> Node.js </Checkbox>
                            <Checkbox checked readOnly className='checkbox'> TCP/IP Communication </Checkbox>
                            <Checkbox checked readOnly className='checkbox'> Build From Scratch </Checkbox>
                        </div>
                    </Fieldset>
                    
                    <p className='font-mono text-lg mt-2'> This project was sponsored by John Deere to design and build a Ground Speed Test Stand used to validate proprietary speed sensors under controlled conditions. The objective was to improve testing accuracy, repeatability, and overall efficiency compared to existing manual processes.</p>
                    <p className='font-mono text-lg mt-2'> I developed a cross-platform desktop application using Electron, React, and TypeScript that allowed engineers to control the test stand's motor speed, monitor real-time sensor data, and log test results for analysis. </p>
                    <p className='font-mono text-lg mt-2'> On the embedded side, I implemented server-side software on a Raspberry Pi to manage hardware communication and transmit sensor data over Ethernet using ZeroMQ with TCP/IP sockets. This required designing a reliable messaging architecture to handle asynchronous communication, ensure data integrity, and maintain low-latency updates between the hardware and desktop application. </p>
                    <p className='font-mono text-lg mt-2'> This project strengthened my experience in distributed systems, networking, and hardware-software integration. It required building a complete system from scratch, from communication protocols to UI design, while collaborating within a team and meeting real-world engineering requirements.</p>
                </Frame>
            </Tab>

            <Tab title='Bookstore' className='font-mono'>
                <h1 className='font-mono ml-2'> Bookstore E-Commerce Website </h1>
                <hr style={{ width: '95%', marginLeft: '10px'}}/>
                <Frame h='382px' w='95%' bgColor='white' boxShadow='$in' className='mt-5 ml-2 p-2 overflow-y-scroll'>
                    <Fieldset legend='Skills' className='pl-2 pr-2 pb-2'>
                        <div className='flex flex-col'>
                            <Checkbox checked readOnly className='checkbox'> LAMP (Linux, Apache, MySQL, PHP) </Checkbox>
                            <Checkbox checked readOnly className='checkbox'> Database Design </Checkbox>
                            <Checkbox checked readOnly className='checkbox'> Custom APIs </Checkbox>
                            <Checkbox checked readOnly className='checkbox'> User Authentication </Checkbox>
                        </div>
                    </Fieldset>
                    
                    <p className='font-mono text-lg mt-2'>This project involved designing and implementing a full database-driven online bookstore using the LAMP stack from the ground up. The goal was to build a complete multi-user system that supports administrators and customers with real-time database interaction.</p> 
                    <p className='font-mono text-lg mt-2'>I implemented secure customer authentication (sign up, login, logout), dynamic book searching with case-insensitive keyword matching, and a purchasing system that tracks cumulative quantities and total spending per customer. The application supports concurrent users across multiple browsers and sessions.</p> 
                    <p className='font-mono text-lg mt-2'>Additionally, I built administrative functionality to manage book entries, system-wide reset capabilities to clear all stored data, and detailed reporting views for books and customers. The project emphasized user-friendly design, clean session management, and structured PHP/MySQL integration to maintain data integrity and relational consistency.</p>
                </Frame>
            </Tab>

            <Tab title='Wedding' className='font-mono'>
                <h1 className='font-mono ml-2'> Wedding Planner </h1>
                <hr style={{ width: '95%', marginLeft: '10px'}}/>
                <Frame h='382px' w='95%' bgColor='white' boxShadow='$in' className='mt-5 ml-2 p-2 overflow-y-scroll'>
                    <h2 className='font-mono'> Full-Stack Web App <span className='text-gray-500 text-xs'>[live]</span></h2>
                    <Fieldset legend='Skills' className='pl-2 pr-2 pb-2'>
                        <div className='flex flex-col'>
                            <Checkbox checked readOnly className='checkbox'> Next.js (App Router) </Checkbox>
                            <Checkbox checked readOnly className='checkbox'> TypeScript </Checkbox>
                            <Checkbox checked readOnly className='checkbox'> Prisma + PostgreSQL </Checkbox>
                            <Checkbox checked readOnly className='checkbox'> Auth.js (Google OAuth) </Checkbox>
                            <Checkbox checked readOnly className='checkbox'> Tailwind + shadcn/ui </Checkbox>
                            <Checkbox checked readOnly className='checkbox'> Data Visualization (Recharts) </Checkbox>
                        </div>
                    </Fieldset>

                    <p className='font-mono text-lg mt-2'> A full-stack wedding planning platform I designed and built for my fiancée and me, now deployed on Vercel. It turns the chaos of wedding planning into a single dashboard covering a categorized task checklist, a budget breakdown, RSVP and guest-list management, a gift registry with claim tracking so gifts aren't double-purchased, and a document archive for vendor quotes and contracts.</p>
                    <p className='font-mono text-lg mt-2'> Built with Next.js 16 and React 19 on the App Router, with a type-safe data layer using Prisma 7 and PostgreSQL. Every page follows the same shape: a Server Component fetches the data, passes typed props to a Client Component, and writes go through Server Actions colocated with the page.</p>
                    <p className='font-mono text-lg mt-2'> <span className='font-bold'>What I learned:</span> the biggest lesson was that authorization has to be enforced at every layer, not just one. Middleware alone isn't enough — because sessions are JWTs, a token stays valid after someone is removed from the allow list, so the session guard is re-checked in Server Components and again inside every Server Action. Server Actions also can't use redirects to bounce an unauthorized user, since a thrown redirect surfaces to the client as a generic error, so they return a typed failure result instead.</p>
                    <p className='font-mono text-lg mt-2'> That same result type became the contract for every mutation in the app: validate on the server, translate Prisma error codes into a specific message pointing at the offending field, and revalidate the affected route on success. Standardizing that early made error handling consistent instead of something I reinvented on each form.</p>
                    <p className='font-mono text-lg mt-2'> I also hit a real problem in shipping a private app publicly: I wanted to demo it without exposing our actual wedding data. I solved it by building a signed-out sandbox that mirrors the planner but swaps the database for an in-memory store injected into the actions, so the demo structurally cannot reach the database. Along the way I learned to keep filter state in URL search params so views survive a refresh and stay linkable, and to treat schema mistakes as normal — the budget and RSVP models were both redesigned through migrations once real use exposed the wrong shape.</p>
                    <p className='font-mono text-lg mt-2'>
                        <a href='https://piperandnathen2027.vercel.app' target='_blank' rel='noopener noreferrer'>
                            <span className='text-blue-700 underline'>Visit the live site →</span>
                        </a>
                    </p>
                    <p className='font-mono text-lg mt-2'>
                        <a href='https://piperandnathen2027.vercel.app/single-instance-planner' target='_blank' rel='noopener noreferrer'>
                            <span className='text-blue-700 underline'>Try the interactive demo planner →</span>
                        </a>
                    </p>
                    <p className='font-mono text-lg mt-2'>
                        <a href='https://github.com/Nfafshari/afshari_wedding_site' target='_blank' rel='noopener noreferrer'>
                            <span className='text-blue-700 underline'>View source on GitHub →</span>
                        </a>
                    </p>
                </Frame>
            </Tab>

            <Tab title='Shmifty' className='font-mono'>
                <h1 className='font-mono ml-2'> Shmifty Games </h1>
                <hr style={{ width: '95%', marginLeft: '10px'}}/>
                <Frame h='382px' w='95%' bgColor='white' boxShadow='$in' className='mt-5 ml-2 p-2 overflow-y-scroll'>
                    <h2 className='font-mono'> Mini-Game Platform <span className='text-gray-500 text-xs'>[in active development]</span></h2>
                    <Fieldset legend='Skills' className='pl-2 pr-2 pb-2'>
                        <div className='flex flex-col'>
                            <Checkbox checked readOnly className='checkbox'> Next.js (App Router) </Checkbox>
                            <Checkbox checked readOnly className='checkbox'> TypeScript </Checkbox>
                            <Checkbox checked readOnly className='checkbox'> Auth.js (OAuth + Credentials) </Checkbox>
                            <Checkbox checked readOnly className='checkbox'> Prisma + PostgreSQL </Checkbox>
                            <Checkbox checked readOnly className='checkbox'> Relational Schema Design </Checkbox>
                        </div>
                    </Fieldset>

                    <p className='font-mono text-lg mt-2'> A mini-games web platform pairing retro arcade titles with modern browser games. Players log in, play, track their personal play history, and compete on global leaderboards.</p>
                    <p className='font-mono text-lg mt-2'> On the backend I implemented authentication with Auth.js v5 (Google OAuth plus a credentials flow with bcrypt-hashed passwords) and a type-safe data layer with Prisma and PostgreSQL hosted on Supabase, hardened with Row-Level Security.</p>
                    <p className='font-mono text-lg mt-2'> I designed the relational schema around a single rank-able score column plus a flexible JSONB stats field, so one set of tables powers leaderboards and history across every game without per-game tables. The interface leans into a retro Windows 95 aesthetic via the React95 component library.</p>
                </Frame>
            </Tab>

            <Tab title='Unity' className='font-mono'>
                <h1 className='ProjectsWindow-h1 font-mono ml-2'> Game Development </h1>
                <hr style={{ width: '95%', marginLeft: '10px'}}/>
                <Frame h='382px' w='95%' bgColor='white' boxShadow='$in' className='mt-5 ml-2 p-2 overflow-y-scroll'>
                    <Fieldset legend='Skills' className='pl-2 pr-2 pb-2'>
                        <div className='flex flex-col'>
                            <Checkbox checked readOnly className='checkbox'> C# </Checkbox>
                            <Checkbox checked readOnly className='checkbox'> Unity Game Engine </Checkbox>
                            <Checkbox checked readOnly className='checkbox'> Object-Oriented Programming (OOP) </Checkbox>
                            <Checkbox checked readOnly className='checkbox'> Self Motivation </Checkbox>
                            <Checkbox checked readOnly className='checkbox'> Eagerness to learn </Checkbox>
                        </div>
                    </Fieldset>
                    
                    <p className='font-mono text-lg mt-2'> As a self-driven hobby project, I explored game development using Unity to deepen my understanding of software architecture, real-time systems, and interactive design. I built gameplay mechanics, implemented physics-based interactions, and developed structured C# scripts following object-oriented principles.</p> 
                    <p className='font-mono text-lg mt-2'> This reflects my eagerness to learn beyond coursework. By independently researching documentation, experimenting with new tools, and iterating through trial and error, I strengthened my ability to quickly adapt to unfamiliar technologies and solve complex problems.</p>
                </Frame>
            </Tab>
        </Tabs>
    );
}
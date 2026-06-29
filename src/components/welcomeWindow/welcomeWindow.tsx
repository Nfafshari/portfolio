import { useState } from 'react';
import { Frame } from '@react95/core/Frame';
import { Progman44, Progman45 } from '@react95/icons';

export default function WelcomeWindow () {
    const [pageNum, setPageNum] = useState<'1' | '2'>('1');

    return (
        <div className='flex flex-col h-full'>
            <h1 className='ml-4 mt-2 font-mono shrink-0'> Welcome to my Portfolio! </h1>
            <div className='flex-1 min-h-0 px-2 pb-2'>
                <Frame w='100%' h='100%' bgColor='white' boxShadow='$in' className='flex flex-col' style={{ padding: '10px' }}>
                    <div className='flex-1 min-h-0 overflow-y-auto'>
                    {
                        pageNum == '1' ?
                            <p className='text-lg font-mono'> 
                                Hi! I'm <span className='font-bold'>Nathen Afshari</span>, a recent <span className='font-bold'>Computer Science</span> graduate from the <a href='https://und.edu/' target='_blank'><span className='text-green-700 underline'>University of North Dakota</span></a> looking for the perfect company!
                                <br/>
                                <br/> I'm passionate about <span className='font-bold'>full-stack development</span>, <span className='font-bold'>frontend engineering</span>, and building intuitive user experiences. I currently work as a <span className='font-bold'>Software Engineer</span> at the <a href='https://crc.und.edu/' target='_blank'><span className='text-blue-700 underline'>Computational Research Center</span></a>, building authentication, authorization, and REST/GraphQL API features for the UND Arctic Labs research platform using Next.js. Previously, I was a <span className='font-bold'>Software Engineer Intern</span> at <a href='https://www.ideal-aerosmith.com/' target='_blank'><span className='text-orange-500 underline'>Ideal Aerosmith</span></a>, developing desktop applications for multi-axis motion control systems with React and Electron.
                            </p>
                        :
                            <p className='text-lg font-mono'> 
                                In my free time I enjoy hanging out with friends, sports, working out, gaming, and tackling side projects.
                                <br/>
                                <br/>
                                <br/> 
                                This portfolio was built using:
                                <br/>
                                <a href='https://react.dev/' target='_blank'> <span className='text-sky-300 underline'>React</span></a> + 
                                    <a href='https://vite.dev/' target='_blank'> <span className='text-violet-700 underline'>Vite</span></a> + 
                                    <a href='https://www.typescriptlang.org/' target='_blank'> <span className='text-blue-700 underline'>TypeScript</span></a>, with styling from
                                    <a href='https://tailwindcss.com/' target='_blank'> <span className='text-sky-700 underline ml-1'>Tailwind CSS</span></a> and the 
                                    <a href='https://react95.github.io/React95/?path=/story/all--all' target='_blank'> <span className='text-pink-500 underline'>React95</span> </a>
                                    component library for a <span className='font-sans font-bold text-lg'>Windows</span><span className='font-sans text-red-600 font-bold text-lg'>9</span><span className='font-sans text-blue-800 font-bold text-lg m-0'>5</span> feel!
                            </p>
                    }
                    </div>
                    <div className='flex justify-end items-center shrink-0 pt-2'>
                        <p> {pageNum}/2 </p>
                        {pageNum == '1' ? (
                            <Progman45 
                                variant="32x32_1" 
                                className='cursor-pointer'
                                onClick={() => {
                                    setPageNum('2')
                                }}
                            />
                        ) : (
                            <Progman44 
                                variant="32x32_1" 
                                className='cursor-pointer'
                                onClick={() => {
                                    setPageNum('1')
                                }}
                            />
                        )}
                    </div>
                </Frame>
            </div>
        </div>
    );
}
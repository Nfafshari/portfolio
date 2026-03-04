import { useState } from 'react';
import { Frame } from '@react95/core/Frame';
import { Progman44, Progman45 } from '@react95/icons';

export default function WelcomeWindow () {
    const [pageNum, setPageNum] = useState<'1' | '2'>('1');

    return (
        <>
            <h1 className='ml-4 mt-2 font-mono'> Welcome to my Portfolio! </h1>
            <div className='w-[100%] h-[100%]'>
                <Frame w='95%' h='95%' bgColor='white' boxShadow='$in' style={{ position: 'relative', margin: 'auto', padding: '10px' }}>
                    {
                        pageNum == '1' ?
                            <p className='text-lg font-mono'> 
                                My Name is Nathen Afshari. I'm from East Grand Forks, MN.
                                <br/>
                                <br/> I am currently a <span className='font-bold'>Senior</span> at the <a href='https://und.edu/' target='_blank'><span className='text-green-700 underline'>University of North Dakota</span></a> with a Bachelor's Degree in Computer Science.
                                <br/> I have a passion for software engineering; more specifically, software development, full-stack development, and UI design.
                                <br/>
                                <br/> I currently work for <a href='https://www.ideal-aerosmith.com/' target='_blank'><span className='text-orange-500 underline'>Ideal Aerosmith</span></a> as a <span className='font-bold'>Software Engineer Intern</span>  where I have gained meaningful career expierence!
                            </p>
                        :
                            <p className='text-lg font-mono'> 
                                In my free time I enjoy hanging out with my friends, sports, working out, playing video games, and working on little side projects.
                                <br/>
                                <br/>
                                <br/> 
                                This portfolio was built using
                                    <a href='https://react.dev/' target='_blank'> <span className='text-sky-300 underline ml-1'>React</span></a> + 
                                    <a href='https://vite.dev/' target='_blank'> <span className='text-violet-700 underline ml-1'>Vite</span></a> + 
                                    <a href='https://www.typescriptlang.org/' target='_blank'> <span className='text-blue-700 underline'>TypeScript</span></a>. Additionally, I used 
                                    <a href='https://tailwindcss.com/' target='_blank'> <span className='text-sky-700 underline ml-1'>Tailwind.css</span></a> and 
                                    <a href='https://react95.github.io/React95/?path=/story/all--all' target='_blank'> <span className='text-pink-500 underline'>React95</span> </a>
                                    for this nice <span className='font-sans font-bold text-lg'>Windows</span><span className='font-sans text-red-600 font-bold text-lg'>9</span><span className='font-sans text-blue-800 font-bold text-lg m-0'>5</span> retro look!
                            </p>
                    }
                    <div className='flex absolute right-0 bottom-0'>
                        <p className='pt-2'> {pageNum}/2 </p>
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
        </>
    );
}
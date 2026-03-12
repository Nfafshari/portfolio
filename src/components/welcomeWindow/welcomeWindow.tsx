import { useState } from 'react';
import { Frame } from '@react95/core/Frame';
import { Progman44, Progman45 } from '@react95/icons';

export default function WelcomeWindow () {
    const [pageNum, setPageNum] = useState<'1' | '2'>('1');

    return (
        <>
            <h1 className='ml-4 mt-2 font-mono'> Welcome to my Portfolio! </h1>
            <div className='w-[100%] h-[100%]'>
                <Frame w='95%' h='90%' bgColor='white' boxShadow='$in' style={{ position: 'relative', margin: 'auto', padding: '10px', overflow: 'auto' }}>
                    {
                        pageNum == '1' ? (
                            <div>
                                <p className='text-lg font-mono'> 
                                    Hi! I'm <span className='font-bold'>Nathen Afshari</span>, a <span className='font-bold'>Senior Computer Science student </span> at the <a href='https://und.edu/' target='_blank'><span className='text-green-700 underline'>University of North Dakota</span></a>, based in East Grand Forks, MN.
                                    <br/>
                                    <br/> I'm passionate about <span className='font-bold'>full-stack development</span>, <span className='font-bold'>frontend engineering</span>, and building intuitive user experiences. Currently, I work as a <span className='font-bold'>Software Engineer Intern</span> at <a href='https://www.ideal-aerosmith.com/' target='_blank'><span className='text-orange-500 underline'>Ideal Aerosmith</span></a>, developing desktop applications for multi-axis motion control systems using React and Electron. I also work as a <span className='font-bold'>Software Engineer</span> at the <a href='https://crc.und.edu/' target='_blank'><span className='text-blue-700 underline'>Computational Research Center</span></a>, building authentication, authorization, and API integration features for the UND Arctic Labs research platform using Next.js.
                                </p>
                                <div className='flex justify-end'>
                                    <p className='pt-2'> {pageNum}/2 </p>
                                    <Progman45 
                                        variant="32x32_1" 
                                        className='cursor-pointer'
                                        onClick={() => {
                                            setPageNum('2')
                                        }}
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className='relative h-full'>
                                <p className='flex-auto text-lg font-mono'> 
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
                                <div className='flex absolute bottom-0 right-0'>
                                    <p className='pt-2'> {pageNum}/2 </p>
                                    <Progman44 
                                        variant="32x32_1" 
                                        className='cursor-pointer'
                                        onClick={() => {
                                            setPageNum('1')
                                        }}
                                    />
                                </div>
                            </div>
                        )
                    }
                </Frame>
            </div>
        </>
    );
}
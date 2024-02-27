import { useRef, useEffect } from 'react';
import bannerImage from '../assets/Omkar-Rakshe-short-removebg-preview.png'
import bannerWallpaper from '../assets/banner_wallpaper.svg';
import Typed from 'typed.js';

const Banner = () => {
    const linkedInLink = 'https://www.linkedin.com/in/omkar-rakshe-5b8292217/'
    const gitHubLink = 'https://github.com/OMKARR10?tab=projects';

    const element =useRef(null)
    useEffect(() => {
        const typed = new Typed(element.current, {
          strings: ["an Electronics Engineer.", "a Frontend Developer.", "a Web Developer.", "Full Stack Developer."], // Strings to display
          // Speed settings, try diffrent values untill you get good results
        startDelay: 100,
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 100,
        loop:true,
        smartBackspace:true,
        cursorChar:'',
        fadeOut:false
        });
        // Destropying
        return () => {
        typed.destroy();
        };
    }, []);

    return (
        <>
            <div style={{
                    backgroundImage: `url(${bannerWallpaper})`,
                    backgroundSize: 'cover',
                }} 
                className="main-container flex h-30 items-center">
                <div
                className='w-full flex items-center justify-center text-white'>
                    {/* Text Content */}
                    <div className='w-2/3 ms-6'>
                        <h3 className='text-3xl font-semibold'>
                            Hi, I am
                        </h3>
                        <h1 className='mt-4 text-5xl font-bold'>
                            Omkar Ravindra Rakshe
                        </h1>
                        <h2 className=' mt-4 text-2xl'>
                            And I am  <span className='text-black underline' ref={element}></span>
                        </h2>
                        <p className='text-lg mt-4'>
                        A recent graduate with a passion for frontend development and a drive to bring creativity and innovation to digital experiences. As I embark on my journey into the world of web development, I'm excited to leverage my skills and learn from experienced professionals to craft engaging and intuitive user interfaces.
                        </p>
                        {/* <br/> */}
                        <div className='icons-container mt-5 flex space-x-5'>
                            {/* Icons */}
                                <a 
                                    className='hover:bg-purple-900 cursor-pointer py-7 px-7 w-12 h-12 bg-violet-800 bg-opacity-60 let-800 rounded-full flex justify-center items-center' 
                                    target='_blank' 
                                    href={linkedInLink}>
                                    <i className="text-4xl text-white fa-brands fa-linkedin"></i>
                                </a>
                            
                                <a 
                                    className='hover:bg-purple-900 cursor-pointer py-7 px-7 w-12 h-12 bg-violet-800 bg-opacity-60 rounded-full flex justify-center items-center' 
                                    target='_blank' 
                                    href={gitHubLink}>
                                    <i className="text-4xl text-white fa-brands fa-github"></i>
                                </a>
                        </div>
                        <div className='mt-6'>
                            <a 
                                className='px-3 py-2 text-white bg-fuchsia-800 bg-opacity-60 rounded-full shadow-lg hover:bg-fuchsia-900' 
                                href="/contact">
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
                <div className=' text -2xl w-full flex justify-center'>
                    {/* Image */}
                    <img 
                        className='rounded-full w-fit mb-3 shadow-lg shadow-red-400 h-fit' 
                        src={bannerImage} 
                        alt="Omkar Rakshe"/>
                </div>
            </div>
        </>
    )
};

export default Banner;
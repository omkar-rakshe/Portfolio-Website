import React,{ useState } from 'react';
import Photo from '../assets/Omkar-About.png'
import Resume from '../assets/OmkarRakshe.pdf'

const AboutMe = () => {
    // To make it dynamic
    const [about, setAbout] = useState({
        image: Photo,
        // title: 'Frontend Developer',
        content1: `Recent Electronics graduate with a deep passion for software and web development and a drive to create elegant, 
        efficient, and user-centric applications. Equipped with a strong foundation in programming language such as JavaScript, Python, as well as experience in web development like HTML, CSS, JavaScript and database management and familiar with various libraries and database such as MERN i.e. MongoDB, Express.js, React.js, Node.js. 
        I'm captivated by the fast-paced nature of the tech industry and its power to shape the future. My curiosity drives me to continuously explore new frameworks and tools, and I'm excited to contribute fresh perspectives to the world of software development. I have done an internship from the college which was to build a virtual lab for First Years students, in that internship we've used HTML, CSS and JavaScript.`,
        
        content2: `When I'm not coding, you'll likely find me immersed in music, learning new things, nurturing my creativity and problem-solving mindset, playing sports such as football, carrom, table tennis. As I embark on my professional career, I'm actively seeking opportunities to collaborate with experienced developers and contribute to cutting-edge software solutions.
        Let's connect and discuss how I can bring enthusiasm, dedication, and a fresh approach to your development team!
    `
    });

    const onClickDownload = () => {
        fetch(Resume).then((res) => {
            res.blob().then((blob) => {
                const fileUrl = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileUrl;
                alink.download = 'Resume.pdf';
                alink.click();
            })
        })
    }
    return (
        <>
            <div className="main-container  bg-opacity-50 bg-purple-300 py-16">
                    <h1 className="text-5xl pb-16 text-center font-semibold underline">About Me</h1>

                <div className="container mt-3 flex items-center">
                    <div className="left-container w-full flex justify-center">
                    {/* Image */}
                    <img 
                        className='w-fit rounded-full shadow-xl shadow-emerald-400 h-full' 
                        src={about.image} 
                        alt="Omkar Ravindra Rakshe"
                        />
                    </div>

                    <div className="right-container w-full flex justify-center">
                    {/* About */}
                        <div className='text-xl text-indigo-800 space-y-6 w-full mr-3'>
                            {/* <h1 className='text-4xl font-semibold'>
                                {about.title}
                            </h1> */}
                            <p>
                                {about.content1}
                            </p>
                            <p>
                                {about.content2}
                            </p>
                            <button onClick={onClickDownload} className='bg-violet-500 text-xl ml-10 shadow-lg shadow-emerald-300 rounded-full py-2 px-3 hover:bg-violet-700 text-white'>
                                Download Resume
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default AboutMe;

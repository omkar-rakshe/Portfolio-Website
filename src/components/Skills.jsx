import bannerWallpaper from '../../assets/banner_wallpaper.svg'


const Skills = () => {
    return (
        <>
            <div className="main-container mt-6">
                <h1 className="text-5xl mb-12 font-semibold underline text-center">
                    Skills
                </h1>

                {/* Box Section */}
                <div 
                    style={{
                    backgroundImage: `url(${bannerWallpaper})`,
                    backgroundSize: 'cover',
                    }} 
                    className="box-container flex items-center py-16">
                    {/* space-x-2 down */}
                    <div className="flex  text-white">
                        {/* Banner and   intro */}
                        <div className="text-lg w-1/2 px-20 text-center">
                            {/* <h1 className="text-3xl font-semibold">
                                I have proficiency in following
                            </h1> */}
                            <p> {/*className="text-lg" */}
                            Proficient in a diverse array of programming languages and technologies, with a focus on both frontend and backend development for web applications. Skilled in harnessing contemporary frameworks and tools to craft immersive user interfaces. Possesses adept problem-solving abilities, strong communication skills, and a collaborative mindset, driven by a intense dedication to ongoing learning and industry evolution.
                            </p>
                        {/* Button if you want add like hire me or resume */}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        {/* Skills */} 
                        {/* space-x-2 */}
                        <div className="flex space-x-5 space-y-2 w-2/2 h-full items-center  flex-wrap">
                            <p className="bg-violet-600 text-white rounded-full mt-3 w-fit px-4 py-3 cursor-pointer hover:bg-violet-800 "><i className="fa-brands fa-html5 "></i> HTML</p>
                            <p className="bg-violet-600 text-white rounded-full mt-3 w-fit px-4 py-3 cursor-pointer hover:bg-violet-800"><i className="fa-brands fa-css3"></i> CSS,Tailwind CSS</p>
                            <p className="bg-violet-600 text-white rounded-full mt-3 w-fit px-4 py-3 cursor-pointer hover:bg-violet-800"><i className="fa-brands fa-js"></i> Javascript</p>
                            <p className="bg-violet-600 text-white rounded-full mt-3 w-fit px-4 py-3 cursor-pointer hover:bg-violet-800"><i className="fa-brands fa-react"></i> React Js</p>
                            <p className="bg-violet-600 text-white rounded-full mt-3 w-fit px-4 py-3 cursor-pointer hover:bg-violet-800"><i className="fa-solid fa-database"></i> MongoDB</p>
                            <p className="bg-violet-600 text-white rounded-full mt-3 w-fit px-4 py-3 cursor-pointer hover:bg-violet-800"><i className="fa-solid fa-route"></i> Express Js</p>
                            <p className="bg-violet-600 text-white rounded-full mt-3 w-fit px-4 py-3 cursor-pointer hover:bg-violet-800"><i className="fa-brands fa-node"></i> Node Js</p>
                            <p className="bg-violet-600 text-white rounded-full mt-3 w-fit px-4 py-3 cursor-pointer hover:bg-violet-800">SQL</p>
                            <p className="bg-violet-600 text-white rounded-full mt-3 w-fit px-4 py-3 cursor-pointer hover:bg-violet-800"><i className="fa-brands fa-python"></i> Python</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Skills;
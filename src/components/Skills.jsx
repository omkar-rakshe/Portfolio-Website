import bannerWallpaper from '../assets/banner_wallpaper.svg'


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
                    <div className="flex justify-center text-white">
                        {/* Banner and   intro */}
                        <div className="w-2/3 text-center space-y-4">
                            <h1 className="text-3xl font-semibold">
                                I have proficiency in following
                            </h1>
                            <p className="text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ul
                            </p>
                        {/* Button if you want add like hire me or resume */}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        {/* Skills */} 
                        
                        <div className="flex justify-center w-2/3 h-fit space-x-3 flex-wrap">
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
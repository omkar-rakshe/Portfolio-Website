import { useState } from "react";


const Header = () => {

    const [name, setName] = useState('Omkar Ravindra Rakshe')
    const [menuLink, setMenuLink] = useState([
        {
            title: 'Home',
            link: '/link',
            id:1
        },{
            title: 'About',
            link: '/about',
            id:2
        },{
            title: 'Skills',
            link: '/skills',
            id:3
        },{
            title: 'Portfolio',
            link: '/portfolio',
            id:4
        },{
            title: 'Contact',
            link: '/contact',
            id:5
        }

    ])
    
    const [actionButton, setActionButton] = useState({
        title: 'Hire Me ',
        link: '/hire-me'
    })
    return (
        <>
            {/* justify content around will give spaces on both sides of the element */}
            <div className="main h-20 px-10 bg-indigo-200 flex justify-between items-center">
                <div>
                {/* Name */}
                <h1 className="text-xl font-bold">{name}</h1>
                </div>
                <div className="space-x-3">
                    {/* navbar */}
                    {menuLink.map((menu) => (
                        <a href={menu.link} key={menu.id} className='hover:text-violet-950 font-medium'>
                            {menu.title}
                        </a>
                    ))}
                    {/* <a href="/home" className='hover:text-orange-600'>Home</a>
                    <a href="/about" className='hover:text-orange-600'>About</a>
                    <a href="/skills" className='hover:text-orange-600'>Skills</a>
                    <a href="/portfolio" className='hover:text-orange-600'>Portfolio</a>
                    <a href="/contact" className='hover:text-orange-600'>Contact</a> */}

                </div>
                <div>
                    {/* Buttons */}
                    <a 
                        href={actionButton.link} 
                        className="px-4 py-2 bg-violet-500 text-white shadow-lg rounded-full text-xl  hover:bg-violet-700 bg-opacity-40">
                    {actionButton.title}
                    </a>
                </div>
            </div>
        </>
    )
};

export default Header;
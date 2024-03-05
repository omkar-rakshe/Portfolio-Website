

const Footer = () => {
    return (
        <>
            <div className="py-5 bg-indigo-800 px-60 border text-white flex justify-between">
                <div>
                    <p>@{new Date().getFullYear()} Omkar Rakshe <span>All Rights Reserved</span></p>
                </div>
                <div className="space-x-5">
                    <a href="/about" className="hover:underline">About</a>
                    <a href="/about" className="hover:underline">Privacy</a>
                    <a href="/about" className="hover:underline">Policy</a>
                    <a href="/about" className="hover:underline">Licensing</a>
                    <a href="/about" className="hover:underline">Contact</a>
                </div>
            </div>
        </>
    )
};

export default Footer;
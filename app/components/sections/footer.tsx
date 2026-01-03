import Image from "next/image";
const Footer = () => {
    return (
        <div className="bg-black py-5 items-center justify-center flex flex-col">
            {/* <div className="max-w-7xl mx-auto flex flex-row items-center">
                <div className="flex flex-row items-center">
                </div>
            </div> */}
            <h1 className="text-white text-center text-sm">© {new Date().getFullYear()} All rights reserved</h1>
            <a href="/RESUME-DEGUZMAN,ADRIAN.pdf" download className="text-gray-500 text-xs mt-2 hover:text-white transition-colors">Download CV</a>

        </div>
    );
};

export default Footer;
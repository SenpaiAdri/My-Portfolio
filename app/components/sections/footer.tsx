import Image from "next/image";
const Footer = () => {
    return (
        <div className="bg-black py-5 items-center justify-center flex flex-col">
            {/* <div className="max-w-7xl mx-auto flex flex-row items-center">
                <div className="flex flex-row items-center">
                </div>
            </div> */}
            <h1 className="text-white text-center text-sm">© {new Date().getFullYear()} All rights reserved</h1>

        </div>
    );
};

export default Footer;
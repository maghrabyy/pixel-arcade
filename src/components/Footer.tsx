import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaEarthAfrica } from "react-icons/fa6";
import { SectionTitle } from "../util/SectionTitle"
import pixelArcadeIcon from '../assets/images/objects/spaceInvader.png';

export const Footer = ()=>{
    return <div className="div bg-[url(assets/images/header.jpg)] bg-cover bg-center ">
            <div className="grid md:grid-cols-3 px-4 py-12 text-white font-pixel backdrop-blur-sm">
                <div className="site-info grid grid-cols-6 gap-2">
                    <div className="site-logo col-span-1">
                        <img src={pixelArcadeIcon} width={60} alt="space invader pixel arcade icon" />
                    </div>
                    <div className="info col-span-5">
                        <div className="site-title font-semibold text-3xl">Pixel Arcade</div>
                        <div className="founder-info">Created by <span>MaghTech</span></div>
                        <div className="desc text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam consequuntur sapiente laudantium, perferendis eius delectus.</div>
                        <div className="copyrights text-gray-400 text-sm">Copyright &copy; 2024</div>
                    </div>
                </div>
                <div className="nav-links">
                    <SectionTitle title="Pages" />
                    <div className="links py-2 flex flex-col items-baseline">
                        <div className="pageLink">Home</div>
                        <div className="pageLink">Arcade Games</div>
                        <div className="pageLink">My Item</div>
                        <div className="pageLink">Items Shop</div>
                        <div className="pageLink">About Us</div>
                    </div>
                </div>
                <div className="contact">
                <SectionTitle title="Contact" />
                    <div className="links py-2">
                        <div>Contact us</div>
                        <div className="contact-links flex gap-2 py-2">
                            <FaGithub className="pageLink"/>
                            <FaLinkedin className="pageLink"/>
                            <FaEarthAfrica className="pageLink"/>
                        </div>
                    </div>
                </div>
            </div>
    </div>
}
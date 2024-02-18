import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaEarthAfrica } from "react-icons/fa6";
import { SectionTitle } from "../util/SectionTitle"
import pixelArcadeIcon from '../assets/images/objects/spaceInvader.png';
import { Link } from "react-router-dom";

export const Footer = ({className}:{className?:string})=>{
    return <div className={`div bg-[url(assets/images/header.jpg)] bg-cover bg-center ${className}`}>
            <div className="grid md:grid-cols-3 px-4 py-12 text-white font-pixel backdrop-blur-sm">
                <div className="site-info order-last md:order-first ">
                    <div className="flex gap-2">
                        <div className="site-logo">
                            <img src={pixelArcadeIcon} width={60} alt="space invader pixel arcade icon" />
                        </div>
                        <div className="info col">
                            <div className="site-title font-semibold text-3xl">Pixel Arcade</div>
                            <div className="founder-info">Created by <span>MaghTech</span></div>
                        </div>
                    </div>
                    <div className="desc">
                        <div className="desc text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam consequuntur sapiente laudantium, perferendis eius delectus.</div>
                        <div className="copyrights text-gray-400 text-sm">Copyright &copy; 2024</div>
                    </div>
                </div>
                <div className="nav-links">
                    <SectionTitle title="Pages" />
                    <div className="links py-2 flex flex-col items-baseline md:bg-cover">
                        <Link to={'/'} className="pageLink">Home</Link>
                        <Link to={'/console'} className="pageLink">Arcade Games</Link>
                        <Link to={'/items-shop'} className="pageLink">My Item</Link>
                        <Link to={'/my-items'} className="pageLink">Items Shop</Link>
                        <Link to={'/aboutus'} className="pageLink">About Us</Link>
                    </div>
                </div>
                <div className="contact">
                <SectionTitle title="Contact" />
                    <div className="links py-2">
                        <Link to={'/contact'} className="pageLink">Contact us</Link>
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
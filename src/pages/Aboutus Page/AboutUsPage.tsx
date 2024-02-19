import { useNavHeight } from "../../Custom Hooks/useNavHeight"
import { TransparentContainer } from "../../util/TransparentContainer";
import { Reveal } from "../../util/Reveal";
import maghrabyImg from '../../assets/images/maghraby.jpg';
import { SectionTitle } from "../../util/SectionTitle";
import { FaHtml5,FaCss3,FaBootstrap,FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { SiDart } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaEarthAfrica } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Avatar } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';

export const AboutUsPage = ()=>{
    const navHeight = useNavHeight();
    return <div className="flex justify-center" style={{minHeight: `calc(100vh - ${navHeight}px)`,}}>
        <div className="about-me flex sm:items-stretch items-center py-4">
            <TransparentContainer expanded={false} className="sm:h-full">
                <Reveal className="flex flex-col items-center gap-4 h-full">
                    <div className="first-section flex flex-col items-center">
                        <div className="avatar-container border-4 border-white rounded-full">
                            <Avatar src={maghrabyImg} sx={{width:150,height:150}} alt="Mahmoud Elmaghraby" />
                        </div>
                        <h1 className="name font-righteous text-2xl font-bold text-white uppercase">Mahmoud Elmaghraby</h1>
                        <div className="title flex gap-2  font-ubuntu text-gray-300 font-semibold text-md">
                            <div className="title-1">Software Engineer</div>
                            <div className="title-2">
                                <span className="text-green-700">maghTech</span> Founder
                            </div>
                        </div>
                    </div>
                    <div className="second-section bg-white w-full h-full px-4 pb-4 rounded-t-md">
                        <div className="skills self-start text-4xl w-full pb-2">
                            <SectionTitle title="Skills" className="text-blue-950 pb-0" borderColor="border-blue-950"/>
                            <div className="skills-list grid grid-cols-6 pt-3 gap-3">
                                <FaHtml5 className="text-[#e34f26]"/>
                                <FaCss3 className="text-[#002561]"/>
                                <FaBootstrap className="text-[#7010EF]"/>
                                <SiTailwindcss className="text-[#36B7F0]"/>
                                <IoLogoJavascript className="text-[#f7df1e]"/>
                                <SiTypescript className="text-[#3178c6]"/>
                                <FaReact className="text-[#00d8ff]"/>
                                <SiRedux className="text-[#764ABC]"/>
                                <RiFlutterFill className="text-[#64CBF8]"/>
                                <SiDart className="text-[#04599C]"/>
                                <IoLogoFirebase className="text-[#FFA917]"/>
                            </div>
                        </div>
                        <div className="contact">
                            <SectionTitle title="Contact" className="text-blue-950 pb-0" borderColor="border-blue-950"/>
                            <div className="contact-list flex gap-2 ms-2 pt-3 text-blue-900">
                                <a href="https://github.com/maghrabyy" target="_blank" rel="noreferrer">
                                    <FaGithub className="cursor-pointer hover:text-gray-700"/>
                                </a>
                                <a href="https://www.linkedin.com/in/maghrabyy/" target="_blank" rel="noreferrer">
                                    <FaLinkedin className="cursor-pointer hover:text-gray-700"/>
                                </a>
                                <a href="https://maghrabyy.netlify.app/" target="_blank" rel="noreferrer">
                                    <FaEarthAfrica className="cursor-pointer hover:text-gray-700"/>
                                </a>
                                <Tooltip title='mahmoud.elmaghraby11@gmail.com' arrow>
                                    <div className="email" onClick={() => {navigator.clipboard.writeText('mahmoud.elmaghraby11@gmail.com')}}>
                                        <MdEmail className="cursor-pointer hover:text-gray-700"/>
                                    </div>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </TransparentContainer>
        </div>
    </div>
}
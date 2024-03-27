import { Reveal } from "../../util/Reveal";
import { useNavHeight } from "../../Custom Hooks/useNavHeight";
import { ReactNode } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom"; 

export const ArcadeConsolePage = ({arcadeGame}:{arcadeGame:ReactNode})=>{
  const navigate = useNavigate();
  const navHeight = useNavHeight();
    return <div style={{minHeight: `calc(100vh - ${navHeight}px)`,}} className="arcade-console flex flex-col justify-between">
    <div onClick={()=>navigate('..')} className="nav-back text-white hover:text-gray-300 cursor-pointer flex self-start gap-1 items-center bg-black bg-opacity-70 rounded-md p-2">
      <FaChevronLeft className="text-xl" />
      <span className="font-pixel text-lg">Games List</span>
    </div>
      <Reveal className="flex flex-col gap-1 justify-center items-center">
              <h1 className="text-white sm:text-4xl text-3xl font-pixel select-none bg-black bg-opacity-90 py-4 px-3 rounded-md">Game Arcade Console</h1>
              <div className="console w-full flex justify-center">
                <div className="frame xl:w-3/6 lg:w-4/6 md:w-5/6 w-full bg-[#120614]">
                  <div className="inner-frame">
                    <div className="mat overflow-hidden">
                      {arcadeGame}
                    </div>
                  </div>
                </div>
              </div>
        </Reveal>
        <div className="blankdiv"></div>
    </div>
}


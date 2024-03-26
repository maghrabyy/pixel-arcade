// import { TicTacToe } from "../../Console Games/TicTacToe"
import { Reveal } from "../../util/Reveal";
import { useNavHeight } from "../../Custom Hooks/useNavHeight";
import { RockPaperScissors } from "../../Console Games/RockPaperScissors";

export const ArcadeConsolePage = ()=>{
  const navHeight = useNavHeight();
    return <Reveal style={{minHeight: `calc(100vh - ${navHeight}px)`,}} className="arcade-console flex flex-col gap-1 justify-center items-center">           
            <h1 className="text-white sm:text-4xl text-3xl font-pixel select-none bg-black bg-opacity-90 py-4 px-3 rounded-md">Game Arcade Console</h1>
            <div className="console w-full flex justify-center">
              <div className="frame xl:w-3/6 lg:w-4/6 md:w-5/6 w-full bg-[#120614]">
                <div className="inner-frame">
                  <div className="mat overflow-hidden">
                      <RockPaperScissors/>
                  </div>
                </div>
              </div>
            </div>
      </Reveal>
}


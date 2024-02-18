import { TicTacToe } from "../../Console Games/TicTacToe"
import { navHeight } from "../../components/navbar";
import { Reveal } from "../../util/Reveal";

export const ArcadeConsolePage = ()=>{
    return <Reveal style={{minHeight: `calc(100vh - ${navHeight}px)`,}} className="arcade-console flex flex-col gap-2 justify-center items-center">           
            <h1 className="text-white text-4xl font-pixel">Game Arcade Console</h1>
            <div className="console w-full flex justify-center">
              <div className="frame xl:w-2/6 lg:w-3/6 md:w-4/6 sm:w-5/6 w-full bg-gradient-to-b from-[#200127] to-[#0e0111]">
                <div className="inner-frame">
                  <div className="mat">
                      <TicTacToe/>
                  </div>
                </div>
              </div>
            </div>
      </Reveal>
}
import { TicTacToe } from "../../Console Games/TicTacToe"
import arcadeConsole from '../../assets/images/objects/arcade.png';

export const ArcadeConsolePage = ()=>{
    return <div className="arcade-console relative my-4">
        <div className="console hidden md:flex justify-center relative pointer-events-none z-10" >
          <img src={arcadeConsole} width={798} alt="Arcade console" />
        </div>
        <div className="flex w-full justify-center">
          <div className="console-game md:absolute static w-[330px] h-[250px] bg-green-400 top-[calc(50%-15px)] left-[calc(50%+2px)] md:-translate-x-1/2 md:-translate-y-1/2 rounded-md flex justify-center items-center">
            <TicTacToe/>
          </div>
        </div>

      </div>
}
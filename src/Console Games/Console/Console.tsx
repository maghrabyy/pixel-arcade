import { TicTacToe } from "../TicTacToe"
import arcadeConsole from '../../assets/images/objects/arcade.png';
import { TransparentContainer } from "../../util/TransparentContainer";

export const ArcadeConsole = ()=>{
    return <TransparentContainer className="my-10">
      <div className="arcade-console relative">
        <div className="console flex justify-center relative pointer-events-none z-10">
          <img src={arcadeConsole} width={798} alt="Arcade console" />
        </div>
        <div className="console-game absolute w-[330px] h-[250px] bg-green-400 top-[calc(50%-15px)] left-[calc(50%+2px)] -translate-x-1/2 -translate-y-1/2 rounded-md flex justify-center items-center">
          <TicTacToe/>
        </div>
      </div>
  </TransparentContainer>
}
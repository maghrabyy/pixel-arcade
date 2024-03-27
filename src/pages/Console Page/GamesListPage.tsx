import { useNavHeight } from "../../Custom Hooks/useNavHeight";
import { TransparentContainer } from "../../util/TransparentContainer";
import { Reveal } from "../../util/Reveal";
import staticCoin from "../../assets/images/objects/staticcoin.png";
import tictactoeImg from "../../assets/images/games/tictactoe/tictactoe.png";
import rockPaperScissorsImg from "../../assets/images/games/rockpaperscissors/rockpaperscissors.png";
import { Button } from "../../util/Button";
import { useOutlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const GamesListPage = () => {
  const navHeight = useNavHeight();
  const outlet = useOutlet();
  return (
    outlet ?? <div
      className="games-list flex py-4"
      style={{ minHeight: `calc(100vh - ${navHeight}px)` }}
    >
      <TransparentContainer className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-full">
        <Reveal>
        <GameCard 
                gameImg={rockPaperScissorsImg} 
                gameTitle="Rock Paper Scissor"
                gameDesc="A classic game - Rock, Paper, Scissors! Choose one of the three
                choices - and see if you can beat the computer. Will you win?
                The chance is random!"
                gamePrice={0}
                gameNavPath="rockpaperscissor" />
        </Reveal>
        <Reveal>
            <GameCard 
                gameImg={tictactoeImg} 
                gameTitle="Tic Tac Toe"
                gameDesc="Tic-tac-toe, noughts and crosses, or Xs and Os is a paper-and-pencil game for two players who take turns marking the spaces in a three-by-three grid with X or O."
                gamePrice={20}
                gameNavPath="tictactoe" />
        </Reveal>
      </TransparentContainer>
    </div>
  );
};

type GameCardProps = {
    gameImg:string,
    gameTitle:string,
    gameDesc:string,
    gamePrice:number,
    gameNavPath:string
}
const GameCard = ({gameImg, gameTitle,gameDesc,gamePrice,gameNavPath}:GameCardProps)=>{
    const navigate = useNavigate();

    return <div className="game-card flex flex-col justify-between bg-slate-900 bg-opacity-85 rounded-md shadow-sm h-full">
    <div className="card-body">
    <div className="card-img bg-black bg-opacity-40">
          <img src={gameImg} alt={`${gameTitle} game`} />
        </div>
      <div className="card-content px-3 py-2">
        <div className="card-title text-2xl text-white font-pixel font-semibold">
          {gameTitle}
        </div>
        <div className="card-subtitle text-gray-400 font-pixel">
          {gameDesc}
        </div>
      </div>
    </div>
      <div className="card-footer px-2">
        <div className="pricing text-white text-lg font-pixel ms-2">
          {gamePrice > 0? <div className="flex gap-1">{gamePrice} <img src={staticCoin} width={24} alt="static pixel coin" />
          to play</div> : 'Free to play' }
        </div>

        <div className="card-action  py-2">
          <Button onClick={() => navigate(gameNavPath)}>Start Game</Button>
        </div>
      </div>
    </div>
}
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Button } from "../util/Button";
import rockImg from "../assets/images/games/rockpaperscissors/rock.png";
import paperImg from "../assets/images/games/rockpaperscissors/paper.png";
import scissorImg from "../assets/images/games/rockpaperscissors/scissors.png";
import pcAvatar from "../assets/images/objects/robot.png";
import { Avatar } from "@mui/material";
import UserContext from "../Context/UserContext";
import HealthContext from "../Context/HealthContext";
import CoinsContext from "../Context/CoinsContext";
import { motion } from "framer-motion";
import gameLostSound from "../assets/sounds/gameover.wav";
import gameWinSound from "../assets/sounds/arcadeWinSound.wav";
import gameDrawSound from "../assets/sounds/gameDrawSound.wav";
import spinningCoin from "../assets/images/objects/pixelcoin.png";
import { useAlert } from "../Context/AlertContext";

enum GameState {
  mainMenu = "mainMenu",
  playing = "playing",
  win = "win",
  lose = "lose",
  draw = "draw",
}

enum GameSelection {
  rock = "rock",
  paper = "paper",
  scissor = "scissor",
}

enum RoundCondition {
  playerWon = "You won!",
  pcWon = "PC Won!",
  draw = "Draw",
}
const RECHARGE_LIVES_AMOUNT = 50;
const PLAYER_WIN_AMOUNT = 20;

export const RockPaperScissors = () => {
  const {playerWonAlert,playerLostAlert} = useAlert()
  const { userHealth, setUserHealth } = useContext(HealthContext);
  const {  addCoins } = useContext(CoinsContext);
  const [gamestate, setGamestate] = useState(GameState.mainMenu);
  const [gameRound, setGameRound] = useState(1);
  const [playerScore, setPlayerScore] = useState(0);
  const [pcScore, setPcScore] = useState(0);
  const [playerSelection, setPlayerSelection] = useState<GameSelection | null>(null);
  const [pcSelection, setPCSelection] = useState<GameSelection | null>(null);
  const [roundCondition, setRoundCondition] = useState<RoundCondition | null>(null);
  const [pcTurn, setPcTurn] = useState(false);

  const resetGameState = () => {
    setGameRound(1);
    setPlayerScore(0);
    setPcScore(0);
    setPlayerSelection(null);
    setPCSelection(null);
    setRoundCondition(null);
    setPcTurn(false);
  };

  const replayGame = () => {
    if (userHealth > 0) {
      resetGameState();
      setGamestate(GameState.playing);
    }
  };

  const returnToMainMenu = () => {
    resetGameState();
    setGamestate(GameState.mainMenu);
  };


  const playerSelectionHandler = (userSelection: GameSelection) => {
    setPlayerSelection(userSelection);
    setPcTurn(true);
  };

  //PC turn random selection
  useEffect(() => {
    if (pcTurn) {
      const randPCSelection = Math.floor(Math.random() * 3);
      const pcOptions = [
        GameSelection.rock,
        GameSelection.paper,
        GameSelection.scissor,
      ];
      const pcAutoSelection = pcOptions[randPCSelection];
      const playerWinningConditions =
        (playerSelection === GameSelection.rock &&
          pcAutoSelection === GameSelection.scissor) ||
        (playerSelection === GameSelection.paper &&
          pcAutoSelection === GameSelection.rock) ||
        (playerSelection === GameSelection.scissor &&
          pcAutoSelection === GameSelection.paper);
      const drawCondition = playerSelection === pcAutoSelection;
      setPCSelection(pcAutoSelection);
      setTimeout(() => {
        setPcTurn(false);
        setGameRound((prevRound) => prevRound + 1);
      }, 3000);
      if (playerWinningConditions) {
        setTimeout(() => {
          setPlayerScore((prevScore) => prevScore + 1);
        }, 1000);
        setRoundCondition(RoundCondition.playerWon);
      } else if (drawCondition) {
        setRoundCondition(RoundCondition.draw);
      } else {
        setTimeout(() => {
          setPcScore((prevScore) => prevScore + 1);
        }, 1000);
        setRoundCondition(RoundCondition.pcWon);
      }
    }
  }, [pcTurn, playerSelection]);

  //Game condition
  useEffect(() => {
    if (gameRound > 3) {
      if (playerScore > pcScore) {
        setGamestate(GameState.win);
        addCoins(PLAYER_WIN_AMOUNT);
        playerWonAlert(PLAYER_WIN_AMOUNT);
        new Audio(gameWinSound).play();
      } else if (playerScore < pcScore) {
        if(userHealth > 0){
          setUserHealth((health) => health - 1);
        }
        playerLostAlert();
        setGamestate(GameState.lose);
        new Audio(gameLostSound).play();
      } else {
        setGamestate(GameState.draw);
        new Audio(gameDrawSound).play();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameRound, pcScore, playerScore]);

  return (
    <div className="RockPaperScissors bg-gradient-to-r from-[#373438] to-[#1e1d1f] 5 w-full h-[220px] p-1">
      {gamestate === GameState.mainMenu ? 
        <GameMainMenu setGamestate={setGamestate} />
        : 
        <div className="gameplay h-[calc(100%-32px)]">
          <GameHeader pcScore={pcScore} playerScore={playerScore} gameRound={gameRound}/>
          {gamestate === GameState.playing ?
            pcTurn ? 
              <PCTurnUI playerSelection={playerSelection} pcSelection={pcSelection} roundCondition={roundCondition}/>
            : <PlayerTurnUI playerSelectionCallbk={playerSelectionHandler}/>
        : <GameoverUI gamestate={gamestate} replayGameCallbk={replayGame} returnToMainMenuCallbk={returnToMainMenu}/>}
        </div>}
    </div>
  );
};

type GameHeaderType = {
  playerScore:number,
  pcScore:number
  gameRound:number
}
const GameHeader = ({playerScore,pcScore,gameRound}:GameHeaderType)=>{
  const { userAvatar } = useContext(UserContext);
  return <div className="game-header flex justify-between items-center px-2">
  <div className="game-score flex gap-2">
    <div className="text-white font-pixel text-lg select-none pe-2 border-r-2 border-r-white flex gap-2 items-center">
      <Avatar
        className="bg-white pt-2"
        sx={{ width: 32, height: 32 }}
        src={userAvatar}
        alt="user avatar"
      />
      {playerScore}
    </div>
    <div className="text-white font-pixel text-lg select-none ps-2 flex gap-2 items-center">
      <Avatar
        className="bg-white pt-1 px-1"
        sx={{ width: 32, height: 32 }}
        src={pcAvatar}
        alt="user avatar"
      />
      {pcScore}
    </div>
  </div>
  <h1 className="game-round text-white font-pixel text-lg select-none">
    Round {gameRound > 3 ? 3 : gameRound}/3
  </h1>
</div>
}

type PCTurnUIType = {
  playerSelection: GameSelection | null,
  pcSelection: GameSelection | null,
  roundCondition: RoundCondition | null
}
const PCTurnUI = ({playerSelection,pcSelection,roundCondition}:PCTurnUIType)=>{
  const selectionToImgSrc = (selection: GameSelection | null) => {
    if (selection === GameSelection.rock) return rockImg;
    if (selection === GameSelection.paper) return paperImg;
    if (selection === GameSelection.scissor) return scissorImg;
  };
  return <div className="pc-turn flex justify-center items-center h-full sm:gap-12 gap-8 relative">
  <motion.img
    initial={{ opacity: 0, translateX: -100,rotate:0 }}
    animate={{ opacity: 1, translateX: 0,rotate:90 }}
    src={selectionToImgSrc(playerSelection)}
    className="w-24 sm:w-28 rotate-90"
    alt={`player selection ${playerSelection}`}
  />
  <motion.img
    transition={{ delay: 0.5 }}
    initial={{ opacity: 0, translateX: 100, rotate:0 }}
    animate={{ opacity: 1, translateX: 0,rotate:-90 }}
    src={selectionToImgSrc(pcSelection)}
    className="w-24 sm:w-28"
    alt={`pc selection ${pcSelection}`}
  />
  <motion.div
    transition={{ delay: 0.8 }}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    className="round condition absolute w-full px-2"
  >
    <h1 className="text-white text-2xl text-center font-semibold w-full py-2 font-pixel rounded-md bg-black bg-opacity-75 select-none">
      {roundCondition}
    </h1>
  </motion.div>
</div>
}

type PlayerTurnUIType = {
  playerSelectionCallbk: (userSelection: GameSelection)=>void
}
const PlayerTurnUI = ({playerSelectionCallbk}:PlayerTurnUIType)=>{
  return  <div className="player-turn flex flex-wrap sm:gap-2 justify-center items-center h-full">
  <div
    onClick={() => playerSelectionCallbk(GameSelection.rock)}
    className="round-selection cursor-pointer p-1 duration-300 ease-out rounded-md hover:bg-black hover:bg-opacity-20 hover:scale-105"
  >
    <img src={rockImg} className="w-16 sm:w-24" alt="rock" />
  </div>
  <div
    onClick={() => playerSelectionCallbk(GameSelection.paper)}
    className="round-selection cursor-pointer p-1 duration-300 ease-out rounded-md hover:bg-black hover:bg-opacity-20 hover:scale-105"
  >
    <img src={paperImg} className="w-16 sm:w-24" alt="paper" />
  </div>
  <div
    onClick={() => playerSelectionCallbk(GameSelection.scissor)}
    className="round-selection cursor-pointer p-1 duration-300 ease-out rounded-md hover:bg-black hover:bg-opacity-20 hover:scale-105"
  >
    <img src={scissorImg} className="w-16 sm:w-24" alt="scissor"/>
  </div>
</div>
}

type GameoverUIType = {
  gamestate:GameState,
  replayGameCallbk:VoidFunction,
  returnToMainMenuCallbk:VoidFunction
}
const GameoverUI = ({gamestate,replayGameCallbk,returnToMainMenuCallbk}:GameoverUIType)=>{
  const { userHealth, refillHealth } = useContext(HealthContext);
  const { userCoins, payWithCoins } = useContext(CoinsContext);
  const {insufficientCoinsAlert} = useAlert()
  const rechargeLives = () => {
    if (userCoins >= RECHARGE_LIVES_AMOUNT) {
      refillHealth();
      payWithCoins(RECHARGE_LIVES_AMOUNT);
    }else{
      insufficientCoinsAlert();
    }
  }
  const gameCondition = () => {
    if (gamestate === GameState.win) return "You won!";
    if (gamestate === GameState.lose) return "PC won!";
    if (gamestate === GameState.draw) return "Game draw!";
  };
  return (
    <div className="game-over flex flex-col justify-center items-center gap-2">
      <h1
        className={`${
          gamestate === GameState.win && "text-green-700"
        } ${gamestate === GameState.lose && "text-red-500"} ${
          gamestate === GameState.draw && "text-white"
        } text-3xl font-semibold font-pixel mt-2`}
      >
        {gameCondition()}
      </h1>
      {userHealth === 0? 
        <div className="flex gap-2">
          <h1 onClick={rechargeLives} className="text-lg sm:text-2xl text-white font-pixel mt-2 font-bold cursor-pointer inline-block hover:text-gray-500">Recharge lives with {RECHARGE_LIVES_AMOUNT}</h1>
          <img src={spinningCoin}  width={20} alt="pixel coin" />
        </div>
      : <Button width={200} onClick={replayGameCallbk}>
        replay
      </Button>}
      <Button width={200} onClick={returnToMainMenuCallbk}>
        Main Menu
      </Button>
    </div>
  )
}

const GameMainMenu = ({
  setGamestate,
}: {
  setGamestate: Dispatch<SetStateAction<GameState>>;
}) => {

  const { userCoins, payWithCoins } = useContext(CoinsContext);
  const { refillHealth, userHealth } = useContext(HealthContext);
  const {insufficientCoinsAlert} = useAlert()
  const startGame = () => {
    setGamestate(GameState.playing);
  };
  const rechargeLives = () => {
    if (userCoins >= RECHARGE_LIVES_AMOUNT) {
      refillHealth();
      payWithCoins(RECHARGE_LIVES_AMOUNT);
    }else{
      insufficientCoinsAlert();
    }
  }
  return (
    <div className="h-full flex flex-col justify-between gap-2 text-gray-300">
      <div className="start-game-amount flex flex-col justify-center gap-1 relative">
        <h1 className="font-bold font-righteous text-4xl text-center mt-2">
          Rock Paper Scissors
        </h1>
        <p className="font-pixel text-lg font-medium text-center">
          Start game for free.
        </p>
      </div>
      {userHealth === 0 ? (
          <div className="recharge-lives flex justify-center gap-2 mb-3">
            <h1
              onClick={rechargeLives}
              className="sm:text-2xl mt-2 font-pixel font-bold cursor-pointer inline-block hover:text-gray-500"
            >
              Recharge lives with {RECHARGE_LIVES_AMOUNT}
            </h1>
            <img src={spinningCoin} width={20} alt="pixel coin" />
          </div>
        ) : (
          <div className="start-game mb-3">
            <Button onClick={startGame}>Start Game</Button>
          </div>
        )}
    </div>
  );
};

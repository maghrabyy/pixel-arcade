import { useState, useEffect, useContext } from "react";
import HealthContext  from "../Context/HealthContext";
import CoinsContext from "../Context/CoinsContext";
import coinSound from '../assets/sounds/collectcoin.wav';
import gameLostSound from '../assets/sounds/gameover.wav';
import startGameSound from '../assets/sounds/startgame.wav';
import gameWinSound from '../assets/sounds/arcadeWinSound.wav';
import gameDrawSound from '../assets/sounds/gameDrawSound.wav';
import spinningCoin from '../assets/images/objects/pixelcoin.png';
import staticCoin from '../assets/images/objects/staticcoin.png';
import { Button } from "../util/Button";

enum GameState{mainMenu="mainMenu", playing="playing",win="win",lose="lose",draw="draw"}
enum GameMode{onePlayer="onePlayer",twoPlayers="twoPlayers"}
enum PlayerCell{x="X",o="O"};

interface Player{
    playerCell:PlayerCell,
    playerName:string
}
export const TicTacToe = ()=>{
    const player1:Player = {
        playerName:'Player X',
        playerCell:PlayerCell.x
    }
    const player2:Player = {
        playerName:'Player O',
        playerCell:PlayerCell.o
    }
    const RECHARGE_LIVES_AMOUNT = 50;
    const START_GAME_AMOUNT = 20;
    const PLAYER_WIN_AMOUNT = 40;
    const INITIAL_PC_TURN = false;
    const INITIAL_GAME_STATE = GameState.mainMenu;
    const INITIAL_GAME_MODE = null;
    const INITIAL_CURRENT_PLAYER = player1;
    const INITIAL_PREV_PLAYER = null;
    const INITIAL_CURRENT_WINNER = null;

    const { userHealth, setUserHealth } = useContext(HealthContext);
    const { userCoins,payWithCoins, addCoins} = useContext(CoinsContext)
    interface ITicTacToeCell{
        cellNo:number
        cellData:string
    }
    const INITIAL_TICTACTOE_CELLS:ITicTacToeCell[] = [
        {cellNo:0,cellData:""},
        {cellNo:1,cellData:""},
        {cellNo:2,cellData:""},
        {cellNo:3,cellData:""},
        {cellNo:4,cellData:""},
        {cellNo:5,cellData:""},
        {cellNo:6,cellData:""},
        {cellNo:7,cellData:""},
        {cellNo:8,cellData:""},
    ];
    const [ticTacToeCells,setTicTacToeCells] = useState(INITIAL_TICTACTOE_CELLS);
    const [pcTurn,setPcTurn] = useState(INITIAL_PC_TURN);
    const [gameState,setGameState] = useState(INITIAL_GAME_STATE);
    const [gameMode,setGameMode ] = useState<GameMode | null>(INITIAL_GAME_MODE);
    const [currentPlayer,setCurrentPlayer] = useState<Player>(INITIAL_CURRENT_PLAYER);
    const [prevPlayer,setPrevPlayer] = useState<Player | null>(INITIAL_PREV_PLAYER);
    const [ currentWinner, setCurrentWinner ] = useState<Player | null>(INITIAL_CURRENT_WINNER);
    const [freezePlayer,setFreezePlayer] = useState(false);
    
    useEffect(()=>{
        const winningCombos = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        let playerWinner = false;
        let pcWinner = false;
        let gameDraw = false;
        for(let i = 0; i < winningCombos.length;i++){
            const a = ticTacToeCells[winningCombos[i][0]]; 
            const b = ticTacToeCells[winningCombos[i][1]];
            const c = ticTacToeCells[winningCombos[i][2]];
            if(gameMode === GameMode.onePlayer){
                playerWinner = (a.cellData === PlayerCell.x && b.cellData === PlayerCell.x && c.cellData === PlayerCell.x); 
            }
            if(gameMode === GameMode.twoPlayers){
                playerWinner = (a.cellData === PlayerCell.x && b.cellData === PlayerCell.x && c.cellData === PlayerCell.x) ||
                (a.cellData === PlayerCell.o && b.cellData === PlayerCell.o && c.cellData === PlayerCell.o); 
            }
            
            pcWinner = (a.cellData === PlayerCell.o && b.cellData === PlayerCell.o && c.cellData === PlayerCell.o);
            gameDraw = (!pcWinner && !playerWinner && !ticTacToeCells.map(cell=>cell.cellData).includes(''));
            if(playerWinner){
                setGameState(GameState.win);
                setCurrentWinner(prevPlayer);
                break;
            }
            if(i === winningCombos.length-1 && gameDraw){
                setGameState(GameState.draw);
            }
            if(gameMode === GameMode.onePlayer){
                if(pcWinner){
                    setGameState(GameState.lose);
                    break;
                }
            }

        }
    },[ticTacToeCells,gameMode,currentPlayer,prevPlayer])

    useEffect(()=>{
        if(gameState === GameState.lose){
            if(userHealth > 0){
                setUserHealth(userHealth-1);
                new Audio(gameLostSound).play();
            }
        }
        if(gameState === GameState.draw){
            new Audio(gameDrawSound).play();
        }
        if(gameState === GameState.win){
            if(gameMode === GameMode.onePlayer){
                new Audio(coinSound).play();
                addCoins(PLAYER_WIN_AMOUNT);
            }
            if(gameMode === GameMode.twoPlayers){
                new Audio(gameWinSound).play();
            }

        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[gameState])

    const cellClickedHandler = (index:number)=>{
        if((gameState === GameState.playing)){
            if(gameMode === GameMode.twoPlayers) {
                setPrevPlayer(currentPlayer);
                if(JSON.stringify(currentPlayer) === JSON.stringify(player1))
                    setCurrentPlayer(player2)
                else
                    setCurrentPlayer(player1);
            }
            if(!ticTacToeCells[index].cellData){
                if(!pcTurn){
                    if(!freezePlayer){
                        const currentCells = [...ticTacToeCells];
                        currentCells[index].cellData = currentPlayer.playerCell;
                        setTicTacToeCells(currentCells);
                        if(gameMode === GameMode.onePlayer){
                            setFreezePlayer(true);
                            setTimeout(()=>{
                                setPcTurn(true);
                                setFreezePlayer(false);
                            }
                            ,1000)  
                        }
                    }                    
                }
            }
        }
    }


    useEffect(()=>{
        if(gameMode === GameMode.onePlayer){
            const currentCells = [...ticTacToeCells];
            const filteredCells = currentCells.filter(cell=>cell.cellData ==='');
            if(gameState === GameState.playing){
                if(filteredCells.length > 0){
                    if(pcTurn){
                        const randCellIndex = filteredCells[Math.floor(Math.random() * filteredCells.length)].cellNo;
                        currentCells[randCellIndex].cellData = PlayerCell.o;
                        setTicTacToeCells(currentCells);
                        setPcTurn(false);
                    }
                }
            }
        }
    },[pcTurn,ticTacToeCells,gameState,gameMode])

    const replayClickedHandler = ()=>{
        if(userCoins >= START_GAME_AMOUNT){
            if(gameState !== GameState.win){
                payWithCoins(START_GAME_AMOUNT);
            }
            if(userHealth > 0){
                setGameState(GameState.playing);
                setCurrentWinner(INITIAL_CURRENT_WINNER);
                setPrevPlayer(INITIAL_PREV_PLAYER);
                setTicTacToeCells(INITIAL_TICTACTOE_CELLS);
                new Audio(startGameSound).play();
                if(gameMode === GameMode.onePlayer)
                    setPcTurn(INITIAL_PC_TURN);
            }
        }
    }
    const rechargeLives = ()=>{
        if(userCoins >= RECHARGE_LIVES_AMOUNT){
            setUserHealth(4);
            payWithCoins(RECHARGE_LIVES_AMOUNT);
        }
    }

    const selectGameModeHandler = (mode:GameMode)=>{
        if(userCoins >= START_GAME_AMOUNT){
            payWithCoins(START_GAME_AMOUNT);
       
            if(mode === GameMode.onePlayer){
                setGameMode(GameMode.onePlayer);
                setGameState(GameState.playing);
            }
            if(mode === GameMode.twoPlayers){
                setGameMode(GameMode.twoPlayers);
                setGameState(GameState.playing);
            }
        }
    }
    const goToMainMenuHandler =()=>{
        setGameMode(INITIAL_GAME_MODE);
        setGameState(INITIAL_GAME_STATE);
        setTicTacToeCells(INITIAL_TICTACTOE_CELLS);
        setPcTurn(INITIAL_PC_TURN);
        setCurrentPlayer(INITIAL_CURRENT_PLAYER);
        setPrevPlayer(INITIAL_PREV_PLAYER);
        setCurrentWinner(INITIAL_CURRENT_WINNER);
    }
    return gameState === GameState.mainMenu?
    <div className="main-menu bg-gradient-to-r from-[#373438] to-black w-full h-full p-1">
        <div className="h-full flex flex-col gap-2 text-gray-300">
            <h1 className="font-bold font-righteous text-4xl text-center mt-2">Tic Tac Toe</h1>
            <div className="start-game-amount flex justify-center gap-1">
                <p className="font-pixel text-lg font-medium">Start game for {START_GAME_AMOUNT}</p>
                <img src={staticCoin} width={28} alt="static pixel coin" />
            </div>
            <div className="game-modes font-pixel flex flex-col gap-2 justify-center h-full">
                <Button onClick={()=>selectGameModeHandler(GameMode.onePlayer)}>One Player</Button>
                <Button onClick={()=>selectGameModeHandler(GameMode.twoPlayers)}>Two Players</Button>
            </div>
        </div>
    </div>
    : <div className="game bg-gradient-to-r from-[#373438] to-black w-full h-full p-1">
        <div className="tic-tac-toe relative">
            {!(gameState === GameState.playing) && <div className="gameover-screen absolute w-full select-none text-center px-2 py-4 rounded-md bg-white bg-opacity-85 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <h1 className="text-4xl font-bold font-pixel">
                    {userHealth> 0? (gameState === GameState.win && (gameMode === GameMode.twoPlayers? `${currentWinner?.playerName} won` : "You're a winner!") ) ||
                    (gameState === GameState.lose && "You lost!") ||
                    (gameState === GameState.draw && "Game Draw."): "Gameover."}</h1>
                {userHealth > 0?
                <div className="game-end-screen">
                    {gameState === GameState.win? null : <div className="start-game-amount flex justify-center gap-1">
                        <p className="font-pixel text-lg font-medium">replay for {START_GAME_AMOUNT}</p>
                        <img src={staticCoin} width={28} alt="static pixel coin" />
                    </div>}
                    <div className="flex justify-center gap-4">
                        <h1 onClick={goToMainMenuHandler} className="text-2xl mt-2 font-bold font-pixel cursor-pointer inline-block hover:text-red-700">Main Menu</h1>
                        <h1 onClick={replayClickedHandler} className="text-2xl mt-2 font-bold font-pixel cursor-pointer inline-block hover:text-green-800">Replay</h1>
                    </div>
                </div> :
                <div className="recharge-lives flex justify-center gap-2">
                    <h1 onClick={rechargeLives} className="text-2xl mt-2 font-bold cursor-pointer inline-block hover:text-gray-500">Recharge lives with {RECHARGE_LIVES_AMOUNT}</h1>
                    <img src={spinningCoin}  width={20} alt="pixel coin" />
                </div>}
            </div>}
        <div className="grid grid-cols-3 gap-2 items-stretch h-full">
            {ticTacToeCells.map(cell=>{
                return <TicTacToeCell key={cell.cellNo} playerFreeze={freezePlayer} cellItem={cell.cellData} onClick={()=>cellClickedHandler(cell.cellNo)} />
            })}
        </div>
          </div>
    </div>
}

type TicTacToeCellProps={
    onClick?:()=>void
    cellItem:string
    playerFreeze:boolean
}
const TicTacToeCell = ({onClick,cellItem,playerFreeze}: TicTacToeCellProps)=>{
    return <div onClick={onClick} className={`cols shadow-md rounded-sm flex items-center justify-center h-[75px] bg-black opacity-55 ${!playerFreeze && 'hover:bg-gray-800 cursor-pointer'} select-none`}>
        <div className="player-action text-4xl font-bold font-righteous text-white">{cellItem}</div>
    </div>

}
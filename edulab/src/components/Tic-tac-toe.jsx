import {useState} from "react";
import "./Tic-tac-toe.css"
function TicTacToe() {

const createBoard=()=>{
const tempBoard=[];
    for (let i = 0; i < 3; i++) {
        const row =[]
        for (let j = 0; j < 3; j++) {
            row.push({value:"",color:"white",isWinning:false})
        }
        tempBoard.push(row)
    }
    return tempBoard
}


const[board,setBoard] = useState(createBoard);
const[player,setPlayer] = useState("X");
const [winner,setWinner] = useState(null);

const handelClick =(rowIndex,colIndex)=>{
    if (winner!==null || board[rowIndex][colIndex].value!==""){
        return
    }
    const newBoard = [...board];
    newBoard[rowIndex][colIndex].value = player
    newBoard[rowIndex][colIndex].color=player==="X"?"red":"blue";


   if (checkWinner()){
       setWinner(player)
   }
    setPlayer(player==="X"?"O":"X")
    setBoard(newBoard)
}
const checkWinner=()=>{
    //row
    let count=1;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length-1; j++) {
            if (board[i][j].value!=="" && board[i][j].value===board[i][j+1].value){
                count++;
            }
        }
        if (count===3){
            const newBoard = [...board];
            for (let j = 0; j < 3; j++) {
               newBoard[i][j].isWinning=true;
            }
            setBoard(newBoard)
            return true
        }else {
            count=1
        }

    }
}

const newGame=()=>{
    setBoard(createBoard)
    setWinner(null)
    setPlayer("X")
    console.log(board)
}

const isFull=()=>{
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j].value===""){
                return false
            }
        }
    }
    return true
}

    return (
        <main>
            <h1>Tic Tac Toe</h1>

            {winner===null?
            <h2>
                {
                    isFull()&&<h2>is draw</h2>
                }
            </h2>
            :
            <h2>The winner is: {winner}</h2>
            }

            <table>
                <tbody>
                {
                    board.map((row,rowIndex) => {
                        return(
                            <tr key={rowIndex}>
                                {
                                    row.map((cell,colIndex) => {
                                        return(
                                            <td key={colIndex} style={{backgroundColor: cell.isWinning&&"green"}}>
                                                <button onClick={()=>handelClick(rowIndex,colIndex)}
                                                    style={{color:cell.color}}
                                                >{cell.value}</button>
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>

            <button onClick={newGame}> new game</button>
        </main>
    );


}

export default TicTacToe;
import {useState} from "react";
import "./Tic-tac-toe.css"
function TicTacToe() {

const createBoard=()=>{
const tempBoard=[];
    for (let i = 0; i < 3; i++) {
        const row =[]
        for (let j = 0; j < 3; j++) {
            row.push({value:j,color:"blue"})
        }
        tempBoard.push(row)
    }
    return tempBoard
}


const[board,setBoard] = useState(createBoard);
const[player,setPlayer] = useState("X");




    return(
        <main>
           <h1>TicTacToe</h1>
            <table>
                <tbody>
                {
                    board.map((row,index)=>{
                        return(
                            <tr key={index}>
                                <td style={{color: row[0].color}}><button>{row[0].value}</button></td>
                                <td style={{color: row[1].color}}><button>{row[1].value}</button></td>
                                <td style={{color: row[2].color}}><button>{row[2].value}</button></td>

                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </main>
    )


}

export default TicTacToe;
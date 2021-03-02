import React, {useState} from 'react'
import {Pressable, StyleSheet, Text, View} from 'react-native'
import Entypo from "@expo/vector-icons/Entypo"
import styles from '../style/style'



const START = 'plus';
const CROSS = 'cross';

const SHIP = 'circle';

let initialBoard = [
    START, START, START, START, START,
    START, START, START, START, START,
    START, START, START, START, START,
    START, START, START, START, START,
    START, START, START, START, START,
];



export default function Gameboard() {
    const [status, setStatus] = useState("Game hasn't started yet");
    const [time, setTime] = useState(0);
    const [ships, setShips] = useState(3);
    const [bombs, setBombs] = useState(15);
    const [hit, setHit] = useState(0);
    const [isCross, setCross] = useState(true);
    const [board, setBoard] = useState(initialBoard);

    let status1 = "Game hasn't started yet";
    let status2 = "Game has started";
    let status3 = "You have sinked all the ships";
    let status4 = "You lost, there are ships remaining.";
    let status5 = "Click the start button first";
    let status6 = "You sinked all ships";






function drawItem(number){
   
  
    if (board[number] === START && status === status1){
      setStatus(status5);
      } else if (board[number] === START && status === status2) {
          board[number] = CROSS;
          setCross(!isCross);
          setBombs(bombs - 1);
      } else if (board[number] === SHIP && status === status2) {
          board[number] = CROSS;
          
          setBombs(bombs - 1);
          setShips(ships - 1);
          setHit(hit + 1);
      }
      if (status === status2 && ships < 1) {
          setStatus(status6)
          
      } else if (status === status2 && bombs < 2) {
          setStatus(status4)
          
      }

      
    
  }



  function chooseItemColor(number) {
    if(board[number] === CROSS) {
      return "#FF3031"
    }
    else if(board[number] === SHIP) {
      return "#45CE30"
    } else {
    return "#74B9FF"
    }  
  }


  






function resetGame() {
   
        setCross(true);
        setStatus(status2);
        initialBoard= [SHIP, START, START, START, START,
            START, START, START, START, START,
            START, START, START, START, START,
            START, START, START, SHIP, START,
            START, SHIP, START, START, START];
            setBoard(initialBoard);
            setTime("30");
            setHit(0);
            setShips("3");
            setBombs("15")
          
    }


return (
    <View style={styles.gameboard}>
        <View style={styles.flex}>
            <Pressable key={0} style={styles.row} onPress={() => drawItem(0)}>
                <Entypo key={0} name={board[0]} size={32} color={chooseItemColor(0)} />
            </Pressable>

            <Pressable key={1} style={styles.row} onPress={() => drawItem(1)}>
                <Entypo key={1} name={board[1]} size={32} color={chooseItemColor(1)} />
            </Pressable>

            <Pressable key={2} style={styles.row} onPress={() => drawItem(2)}>
                <Entypo key={2} name={board[2]} size={32} color={chooseItemColor(2)} />
            </Pressable>

            <Pressable key={3} style={styles.row} onPress={() => drawItem(3)}>
                <Entypo key={3} name={board[3]} size={32} color={chooseItemColor(3)} />
            </Pressable>

            <Pressable key={4} style={styles.row} onPress={() => drawItem(4)}>
                <Entypo key={4} name={board[4]} size={32} color={chooseItemColor(4)} />
            </Pressable>
        </View>

        <View style={styles.flex}>
            <Pressable key={5} style={styles.row} onPress={() => drawItem(5)}>
                <Entypo key={5} name={board[5]} size={32} color={chooseItemColor(5)} />
            </Pressable>

            <Pressable key={6} style={styles.row} onPress={() => drawItem(6)}>
                <Entypo key={6} name={board[6]} size={32} color={chooseItemColor(6)} />
            </Pressable>

            <Pressable key={7} style={styles.row} onPress={() => drawItem(7)}>
                <Entypo key={7} name={board[7]} size={32} color={chooseItemColor(7)} />
            </Pressable>

            <Pressable key={8} style={styles.row} onPress={() => drawItem(8)}>
                <Entypo key={8} name={board[8]} size={32} color={chooseItemColor(8)} />
            </Pressable>

            <Pressable key={9} style={styles.row} onPress={() => drawItem(9)}>
                <Entypo key={9} name={board[9]} size={32} color={chooseItemColor(9)} />
            </Pressable>
        </View>

        <View style={styles.flex}>
            <Pressable key={10} style={styles.row} onPress={() => drawItem(10)}>
                <Entypo key={10} name={board[10]} size={32} color={chooseItemColor(10)} />
            </Pressable>

            <Pressable key={11} style={styles.row} onPress={() => drawItem(11)}>
                <Entypo key={11} name={board[11]} size={32} color={chooseItemColor(11)} />
            </Pressable>

            <Pressable key={12} style={styles.row} onPress={() => drawItem(12)}>
                <Entypo key={12} name={board[12]} size={32} color={chooseItemColor(12)} />
            </Pressable>

            <Pressable key={13} style={styles.row} onPress={() => drawItem(13)}>
                <Entypo key={13} name={board[13]} size={32} color={chooseItemColor(13)} />
            </Pressable>

            <Pressable key={14} style={styles.row} onPress={() => drawItem(14)}>
                <Entypo key={14} name={board[14]} size={32} color={chooseItemColor(14)} />
            </Pressable>
        </View>
     
        <View style={styles.flex}>
            <Pressable key={15} style={styles.row} onPress={() => drawItem(15)}>
                <Entypo key={15} name={board[15]} size={32} color={chooseItemColor(15)} />
            </Pressable>

            <Pressable key={16} style={styles.row} onPress={() => drawItem(16)}>
                <Entypo key={16} name={board[16]} size={32} color={chooseItemColor(16)} />
            </Pressable>

            <Pressable key={17} style={styles.row} onPress={() => drawItem(17)}>
                <Entypo key={17} name={board[17]} size={32} color={chooseItemColor(17)} />
            </Pressable>

            <Pressable key={18} style={styles.row} onPress={() => drawItem(18)}>
                <Entypo key={18} name={board[18]} size={32} color={chooseItemColor(18)} />
            </Pressable>

            <Pressable key={19} style={styles.row} onPress={() => drawItem(19)}>
                <Entypo key={19} name={board[19]} size={32} color={chooseItemColor(19)} />
            </Pressable>
        </View>

        <View style={styles.flex}>
            <Pressable key={20} style={styles.row} onPress={() => drawItem(20)}>
                <Entypo key={20} name={board[20]} size={32} color={chooseItemColor(20)} />
            </Pressable>

            <Pressable key={21} style={styles.row} onPress={() => drawItem(21)}>
                <Entypo key={21} name={board[21]} size={32} color={chooseItemColor(21)} />
            </Pressable>

            <Pressable key={22} style={styles.row} onPress={() => drawItem(22)}>
                <Entypo key={22} name={board[22]} size={32} color={chooseItemColor(22)} />
            </Pressable>

            <Pressable key={23} style={styles.row} onPress={() => drawItem(23)}>
                <Entypo key={23} name={board[23]} size={32} color={chooseItemColor(23)} />
            </Pressable>

            <Pressable key={24} style={styles.row} onPress={() => drawItem(24)}>
                <Entypo key={24} name={board[24]} size={32} color={chooseItemColor(24)} />
            </Pressable>
        </View>


        <Pressable style={styles.button} onPress={() => resetGame()}>
            <Text style={styles.buttonText}>New Game</Text>
        </Pressable>

        <Text style={styles.gameinfo}>Hits: {hit} Bombs: {bombs} Ships: {ships}</Text>
        <Text style={styles.gameinfo}>Time: {time} sec </Text>
        <Text style={styles.gameinfo}>Status: {status} </Text>
    </View>
)


}

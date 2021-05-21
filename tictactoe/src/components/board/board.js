import React, { useState, useEffect } from 'react';
import Square from '../square/square';
import pattern from '../../reusable/pattern';
import './board.css';

const Board = () => {
  const [player, setPlayer] = useState('X');
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [winner, setWinner] = useState({ winner: '', state: '' });

  const chooseSquare = (square) => {
    setBoard(
      board.map((val, idx) => {
        if (idx == square && val == '') {
          return player;
        }
        return val;
      })
    );

    if (player === 'X') {
      setPlayer('O');
    } else {
      setPlayer('X');
    }
  };
  useEffect(() => {
    checkWinner();
  }, [board]);

  useEffect(() => {
      console.log(winner)
      if(winner.state=='won')
      alert('Game finished');
     
  }, [winner])

  const checkWinner = () => {
      
    pattern.forEach((element) => {
        console.log(element[0])
      const firstplayer = board[element[0]];
      let winner1 = true;
      if(firstplayer != ''){
      element.forEach((value) => {
        if (board[value] != firstplayer) {
          winner1 = false;
        }
      });
      if (winner1) {
        setWinner({ winner: player, state: 'won' });
      }
    }
    });
  };
  return (
    <div className='board'>
      <div className='row'>
        <Square val={board[0]} chooseSquare={() => chooseSquare(0)} />
        <Square val={board[1]} chooseSquare={() => chooseSquare(1)} />
        <Square val={board[2]} chooseSquare={() => chooseSquare(2)} />
      </div>
      <div className='row '>
        <Square val={board[3]} chooseSquare={() => chooseSquare(3)} />
        <Square val={board[4]} chooseSquare={() => chooseSquare(4)} />
        <Square val={board[5]} chooseSquare={() => chooseSquare(5)} />
      </div>
      <div className='row '>
        <Square val={board[6]} chooseSquare={() => chooseSquare(6)} />
        <Square val={board[7]} chooseSquare={() => chooseSquare(7)} />
        <Square val={board[8]} chooseSquare={() => chooseSquare(8)} />
      </div>
    </div>
  );
};

export default Board;

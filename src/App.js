import React from 'react';
import { ReactComponent as Top } from './assets/svg/top.svg';
import { ReactComponent as Bottom } from './assets/svg/bottom.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      ב“ה<br />
      <Top />
      <div className="title">
        <div>
          Shanael
        </div>
        <div>&</div>
        <div>
          Kévin
        </div>
      </div>
      <Bottom />
      <br />
      <br />
      Vous invitent à vous joindre à leur mariage<br />
      <br />
      Le 16 septembre 2020 à 17h<br />
      Pour la houppa<br />
      (la cérémonie religieuse)<br />
      Suivie de la réception au château de santeny<br />
      2 route de marolles, 94440 Santeny<br />
      <br />
      Shanael & Kevin<br />
      15, Boulevard Kennedy, 94000 Créteil<br />
      06.11.25.02.13 ou 06.23.25.50.99<br />

      <div className="btns">
        <button>Nous viendrons</button>
        <button>Nous ne viendrons pas</button>
      </div>
    </div>
  );
}

export default App;

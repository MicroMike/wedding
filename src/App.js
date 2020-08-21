import React, { useState } from 'react';
import { ReactComponent as Top } from './assets/svg/top.svg';
import { ReactComponent as Bottom } from './assets/svg/bottom.svg';
import './App.css';

const App = () => {
  const [popup, togglePopup] = useState(false);
  const [count, setCount] = useState(1);
  const max = 2;

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
        <button onClick={() => togglePopup(!popup)}>Nous seront présent</button>
        <button>Nous ne seront pas présent</button>
      </div>

      {popup &&
        <div className="popup">
          <form>
            Combien de personnes seront présentes :<br/>
            <button type="button" onClick={() => setCount(count === 1 ? count : count - 1)}>-</button>
            <input type="text" value={count} onChange={() => { }} />
            <button type="button" onClick={() => setCount(count === max ? count : count + 1)}>+</button><br />
            <button>Valider</button>
          </form>
        </div>
      }
    </div>
  );
}

export default App;

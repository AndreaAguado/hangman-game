import '../styles/main.scss';
import { useState, useEffect } from 'react';
import callToApi from '../services/callToApi';
import Header from './Header';

function App() {
  let nErrors;
  // let wrongLetters;
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);

  useEffect(() => {
    callToApi().then(response => {
      setWord(response);
    })
  }, []);

  const handleLastLetter = (ev) => {
    setLastLetter(ev.target.value);
    const valido = validar();
    if (valido) {
      const isIn = userLetters.find((userLetter) => {
        return userLetter === ev.target.value;
      })
      if (!isIn) {
        setUserLetters([...userLetters, ev.target.value]);
      }
    }

    function validar() {
      let isValid;
      // pattern to match:
      const pattern = new RegExp('^[a-zA-ZÀ-ÿ\u00f1\u00d1]$');
      //if input is empty it won't be valid:
      if (!ev.target.value) {
        isValid = false;
      } else {
        //if input doesn't match the permitted pattern it won't be valid:
        if (!pattern.test(ev.target.value)) {
          isValid = false;
        } else {
          isValid = true;
        }
      }
      return isValid;
    }

  };
  // end of handleLastLetter()

  const findLetters = (letter) => {
    return userLetters.find((userLetter) => {
      return userLetter === letter;
    })
  }

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((letter, index) => {
      if (findLetters(letter)) {
        return <li key={index} className="letter">{letter}</li>
      }
      else {
        return <li key={index} className="letter"></li>
      }

    });
  }

  const findWrongLetters = () => {
    let wrongLetters = userLetters.filter((userLetter) => {
      return !word.includes(userLetter);
    })
    return wrongLetters;
  }
  const renderErrorLetters = () => {
    return findWrongLetters().map((incorrectLetter, index) => {
      return <li key={index} className="letter">{incorrectLetter}</li>
    })
  }

  const youLost = () => {
    if (calcErrors() === 13) {
      console.log('you lost');
    }
  }
  // youLost();

  const calcErrors = () => {
    nErrors = findWrongLetters().length;
    return nErrors;
  }

  return (
    <div className="page">
      <Header></Header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">
              {renderSolutionLetters()}
            </ul>
          </div>
          <div className="feedback">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              {renderErrorLetters()}
            </ul>
          </div>
          <form className="form" onSubmit={ev => ev.preventDefault()}>
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              onChange={handleLastLetter}
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter}
            />
          </form>
        </section>
        <section className={`dummy error-${calcErrors()}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
    </div>
  );
}

export default App;

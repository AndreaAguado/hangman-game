import '../styles/main.scss';
import { useState, useEffect } from 'react';
import callToApi from '../services/callToApi';

function App() {
  let nErrors = 0;
  const [error, setError] = useState(0);

  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [incorrectLetters, setIncorrectLetters] = useState([]);

  useEffect(() => {
    callToApi().then(response => {
      setWord(response);
    })
  }, []);

  const handleLastLetter = (ev) => {
    console.log(ev.target.value);
    // Por último, nuestra función que verifica si el campo es válido antes de realizar cualquier otra acción.
    const valido = validar();
    if (valido) {
      setUserLetters([...userLetters, ev.target.value]);
      let chosenLetters = userLetters.filter((userLetter) => {
        console.log('here');
        console.log(!word.includes(userLetter));
        return !word.includes(userLetter);
      })
      console.log(chosenLetters);
      setIncorrectLetters(chosenLetters);
    }

    setLastLetter(ev.target.value);

    nErrors = incorrectLetters.length;
    setError(nErrors);

    // La siguiente funcion valida el elemento input
    function validar() {
      // Variable que usaremos para determinar si el input es valido
      let isValid = false;
      // El pattern que vamos a comprobar
      // const pattern = new RegExp('^[A-Z\u00D1\u00F1]$', 'i');
      const pattern = new RegExp('^[a-zA-ZÀ-ÿ\u00f1\u00d1]$');

      // Primera validacion, si input esta vacio entonces no es valido
      if (!ev.target.value) {
        isValid = false;
      } else {
        // Tercera validacion, si input contiene caracteres diferentes a los permitidos
        if (!pattern.test(ev.target.value)) {
          // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
          // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
          isValid = false;
        } else {
          // Si pasamos todas la validaciones anteriores, entonces el input es valido
          isValid = true;
        }
      }
      // devolvemos el valor de isValid
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

  const renderErrorLetters = () => {
    return incorrectLetters.map((incorrectLetter, index) => {
      return <li key={index} className="letter">{incorrectLetter}</li>
    })
  }

  return (
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
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
          <form className="form">
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
        <section className={`dummy error-${error}`}>
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

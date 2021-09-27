// Fichero src/components/App.js
import '../styles/main.scss';
import { useState } from 'react';

function App() {
  let nErrors = 0;
  const [error, setError] = useState(0);
  const numberOfErrors = (ev) => {
    nErrors = error + 1;
    console.log(nErrors);
    return setError(nErrors);
  };

  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('patricia');
  const [userLetters, setUserLetters] = useState([]);

  const handleLastLetter = (ev) => {
    console.log(ev.target.value);
      // Por último, nuestra función que verifica si el campo es válido antes de realizar cualquier otra acción.
    function verificar() {
      const valido = validar();
      if (!valido) {
        alert('El campo no es válido.');
      } else {
        alert('El campo es válido');
      }
    }
    verificar();
    return setLastLetter(ev.target.value);


    // La siguiente funcion valida el elemento input
    function validar() {
      // Variable que usaremos para determinar si el input es valido
      let isValid = false;
      // El pattern que vamos a comprobar
      // const pattern = new RegExp('^[A-Z\u00D1\u00F1]$', 'i');
      const pattern = new RegExp('^[a-zA-ZÀ-ÿ\u00f1\u00d1]$');

      // Primera validacion, si input esta vacio entonces no es valido
      if(!ev.target.value) {
        isValid = false;
      } else {
      // Tercera validacion, si input contiene caracteres diferentes a los permitidos
      if(!pattern.test(ev.target.value)){ 
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

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map( (letter,index) => { 
      return <li key={index} className="letter"></li>
    });
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
              {/* <li className="letter">k</li>
              <li className="letter">a</li>
              <li className="letter"></li>
              <li className="letter">a</li>
              <li className="letter">k</li>
              <li className="letter">r</li>
              <li className="letter"></li>
              <li className="letter">k</li>
              <li className="letter">e</li>
              <li className="letter">r</li> */}
               
            </ul>
          </div>
          <div className="feedback">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
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
          <button onClick={numberOfErrors}>Incrementar</button>
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

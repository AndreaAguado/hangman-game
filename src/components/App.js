import '../styles/main.scss';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import callToApi from '../services/callToApi';
import Header from './Header';
import Game from './Game';
import Footer from './Footer';
import Instructions from './Instructions';
import Options from './Options';
import NotFoundPage from './NotFoundPage';




function App() {
  let nErrors;
  let foundLetters = 1;
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasWon, setHasWon] = useState(false);
  const [hidden, setHidden] = useState('');
  const [hasLost, setHasLost] = useState(false);

  useEffect(() => {
    callToApi().then(response => {
      setIsLoading(false);
      setWord(response);
    })
  }, []);

  useEffect(() => {
    if (hidden === 'hidden' && hasWon) {
      setHidden('');
    }
    else if (hidden === 'hidden' && hasLost) {
      setHidden('');
    }
  }, [hasWon, hidden, hasLost]);

  // start of handleLastLetter()
  const handleLastLetter = (ev) => {
    setLastLetter(ev.target.value);
    const valido = validar(ev.target.value);
    if (valido) {
      const isIn = userLetters.find((userLetter) => {
        return userLetter === ev.target.value;
      })
      if (!isIn) {
        checkWon();
        setUserLetters([...userLetters, ev.target.value.toLocaleLowerCase()]);
        console.log(calcErrors());
        if (calcErrors() === 12) {
          console.log('ha perdido');
          setHasLost(true);
        }
      }
    }
  };
  // end of handleLastLetter()

  // start of validar()
  function validar(value) {
    let isValid;
    // pattern to match:
    const pattern = new RegExp('^[a-zA-ZÀ-ÿ\u00f1\u00d1]$');
    //if input is empty it won't be valid:
    if (!value) {
      isValid = false;
    } else {
      //if input doesn't match the permitted pattern it won't be valid:
      if (!pattern.test(value)) {
        isValid = false;
      } else {
        isValid = true;
      }
    }
    return isValid;
  }
  // end of validar()

  const handleInput = (value) => {
    setWord(value);
    setLastLetter('');
    setUserLetters([]);
  }
  const handleModalVisibility = () => {
    setHidden('hidden');
    setHasLost(false);
    setHasWon(false);
  }

  const handleButton = () => {
    callToApi().then(response => {
      setIsLoading(false);
      setWord(response);
    });
    setLastLetter('');
    setUserLetters([]);
    setHasWon(false);
    setHidden('hidden');
  }

  const replaceAccents = (str) => {
    str = str.toLocaleLowerCase();
    str = str.replace(/[àáâãäå]/, "a");
    str = str.replace(/[èéêë]/, "e");
    str = str.replace(/[ìíîï]/, "i");
    str = str.replace(/[òóôö]/, "o");
    str = str.replace(/[ùúûü]/, "u");
    str = str.replace(/[ç]/, "c");
    return str;
  }

  const findLetters = (letter) => {
    return userLetters.find((userLetter) => {
      letter = replaceAccents(letter);
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

  const calcErrors = () => {
    nErrors = findWrongLetters().length;
    return nErrors;
  }

  const checkWon = () => {
    const wordLetters = word.split('');
    wordLetters.forEach((letter) => {
      if (findLetters(letter)) {
        foundLetters++;
        console.log(foundLetters);
      }
    })
    if (foundLetters === wordLetters.length) {
      setHasWon(true);
    }
  }

  return (
    <div className="page">
      <Header></Header>
      <Routes>
        <Route path={process.env.PUBLIC_URL + '/'} element={<Game renderSolutionLetters={renderSolutionLetters}
          renderErrorLetters={renderErrorLetters}
          handleLastLetter={handleLastLetter}
          lastLetter={lastLetter}
          calcErrors={calcErrors}
          isLoading={isLoading}
          word={word}
          hasWon={hasWon}
          handleModalVisibility={handleModalVisibility}
          hidden={hidden}
          handleButton={handleButton}>
        </Game>} />
        <Route path={process.env.PUBLIC_URL + '/instructions'} element={<Instructions calcErrors={calcErrors}></Instructions>} />
        <Route path={process.env.PUBLIC_URL + '/options'} element={<Options calcErrors={calcErrors} handleInput={handleInput}>
        </Options>} />
        <Route path={process.env.PUBLIC_URL + '*'} element={<NotFoundPage calcErrors={calcErrors}></NotFoundPage>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

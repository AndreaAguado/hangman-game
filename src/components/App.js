import '../styles/main.scss';
import { useState, useEffect } from 'react';
import callToApi from '../services/callToApi';
import Header from './Header';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';
import { Routes, Route } from 'react-router-dom';
import Footer from './Footer';

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

  // const youLost = () => {
  //   if (calcErrors() === 13) {
  //     console.log('you lost');
  //   }
  // }
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
          <SolutionLetters renderSolutionLetters={renderSolutionLetters}></SolutionLetters>
          <ErrorLetters renderErrorLetters={renderErrorLetters}></ErrorLetters>
          <Form handleLastLetter={handleLastLetter} lastLetter={lastLetter}></Form>
        </section>
        <Dummy calcErrors={calcErrors}></Dummy>
      </main>
      <Footer></Footer>
      <Routes>
        {/* <Route path="/" element={ }></Route> */}
      </Routes>
    </div>
  );
}

export default App;

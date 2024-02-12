import { useState } from 'react';
import './index.css';

// Array of phrases to be displayed when the "NO" button is clicked
const phrases = [
  "nah",
  "ARE YOU SURE?",
  "No is not an answer.",
  "I thought we had something special!!",
  "Sorry, I cannot allow a no!!",
  "Ok fine. but are you sure sure??",
  "NOOOOO PLEASE I BEG U"
]

function App() {
  const [noCount, setNoCount] = useState(0); // State to keep track of the number of clicks on the "NO" button
  const [yesPressed, setYesPressed] = useState(false); // State to check if the "YES" button has been clicked
  const yesButtonSize = noCount * 20 + 16; // Dynamic adjustment of the "YES" button size based on the number of clicks on the "NO" button

  // Function to handle the click on the "YES" button
  function handleYesClick() {
    setYesPressed(true)
  }

  // Function to handle the click on the "NO" button
  function handleNoClick() {
    setNoCount(noCount+1);
  }

  // Function to get the text for the "NO" button based on the current number of clicks
  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className='valentine-container'>
      {yesPressed ? (  // Display content after clicking the "YES" button
        <>
          <img src="https://media.tenor.com/or3frIMFfScAAAAi/pooh-piglet.gif" alt="pooh" />
          <div className='text'></div>
        </>
      ) : ( // Display content before clicking the "YES" button
        <>
          <img className='kiss' src="https://media.tenor.com/JF6wQnZWb7QAAAAi/peach-goma-love-happy-lie-wiggle.gif" alt="bear with heart" />
          <div className='text'>Jania! Will you be my valentine?</div>
          <div className='both-Button'>
            <button className='yesButton'
            style={{ fontSize: yesButtonSize , backgroundColor:'rgb(240, 41, 41)'}}
              onClick={handleYesClick}
            >
              YES
            </button>
            <button
              className='NoButton'
              style={{ }}
              onClick={handleNoClick}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

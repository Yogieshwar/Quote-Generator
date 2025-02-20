import React from "react";
import { useState } from "react";
const App = () => {
  const quotes = [
    "Dream big, work hard, stay focused, and surround yourself with good people.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The secret of getting ahead is getting started.",
    "Happiness depends upon ourselves.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "Doubt kills more dreams than failure ever will.",
    "The best way to predict the future is to create it.",
    "It always seems impossible until it’s done.",
    "Do what you love, and you’ll never work a day in your life.",
    "Be yourself; everyone else is already taken.",
    "Sometimes the smallest step in the right direction ends up being the biggest step of your life.",
    "Don’t watch the clock; do what it does. Keep going.",
    "A goal without a plan is just a wish.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "You don’t have to be great to start, but you have to start to be great.",
    "Stay hungry, stay foolish.",
    "In the middle of difficulty lies opportunity.",
    "Success is getting what you want. Happiness is wanting what you get.",
    "Every day may not be good, but there is something good in every day.",
    "Small steps in the right direction can turn out to be the biggest step of your life.",
  ];
  const [quote, setQuote] = useState(quotes[0]);
  function GenerateQuote() {
    let index = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[index]);
  }
  function TweetQuote() {
    const tweetText = encodeURIComponent(quote);
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(tweetUrl, "_blank");
  }
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
        <div className="text-center w-75">
          <h1 className="fw-bold my-3">Random Quote Generator</h1>
          <div className="container bg-secondary bg-opacity-50 p-4 rounded shadow-lg">
            <p className="fs-5 fst-italic">{quote}</p>
            <button className="btn btn-warning mt-3 fw-bold" onClick={GenerateQuote} >
              Generate Quote
            </button>
            <button className="btn btn-info mt-3 mx-2" onClick={TweetQuote}>
                Tweet Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

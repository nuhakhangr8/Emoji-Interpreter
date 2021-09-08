import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [meaning, setmeaning] = useState("");

  var emojiDictionary = {
    "😊": "being diplomatic",
    "😔": "Yeh duniya yeh mehfil mere kaam kii nahi",
    "😑": "I better say nothing",
    "😒": "Dimag Kharab",
    "🙄": "Message Deleted?",
    "😬": "To err is Human",
    "🙂": "Dimag kharab but i cannot express",
    "😅": "Embarassed",
    "❤️": "404 Error Not Found",
    "🤔": "Unwelcomed opinions",
    "😏": "I'm a step ahead",
    "😎": "Thuglife"
  };

  var emojisWeKnow = Object.keys(emojiDictionary);

  function emojiListHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }

  function emojiInputHandler(emoji) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside Outt</h1>
      <input onChange={emojiInputHandler} />

      <div style={{ fontWeight: "bolder", fontSize: "1.5rem" }}>{meaning}</div>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiListHandler(emoji)}
            key={emoji}
            style={{ fontSize: "2.5rem", padding: "1rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
//VISER
// show in view---interact--set event state(useState)--render/react

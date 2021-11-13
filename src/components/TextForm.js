import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, settext] = useState("");

  const handleOnClickUpper = () => {
    // console.log("clicked" + text);
    let upperText = text.toUpperCase();
    settext(upperText);
    props.showAlert("Changed to uppercase", "success");
  };

  const handleOnClickLower = () => {
    let lowerText = text.toLowerCase();
    settext(lowerText);
    props.showAlert("Changed to lowercase", "success");
  };

  const handleOnClickClearText = () => {
    settext("");
    props.showAlert("Text Area cleared!!", "success");
  };

  const handleOnCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard", "success");
  };

  const handleOnChange = (e) => {
    // console.log("changed");
    settext(e.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "#03142e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleOnClickUpper}
        >
          Change To Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleOnClickLower}
        >
          Change To Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleOnCopy}
        >
          CopyToClipboard
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleOnClickClearText}
        >
          ClearText
        </button>
      </div>

      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Summary</h3>
        <p>
          {/* {text === "" ? "0" : text.trim().split(" ").length} */}
          {
            text.split(/\s/).filter((element) => {
              return element.length !== 0;
            }).length
          }
          words and {text.length} letters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}
          minute to read the content above
        </p>
        <p>
          {text === "" ? "0" : text.split(".").length - 1}
          no. of sentences
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Please write something to preview the text"}
        </p>
      </div>
    </>
  );
}
// text.split(".").length;
// 0.008 * text.split(" ").length;

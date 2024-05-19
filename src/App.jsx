import { DiffMethod } from "react-diff-viewer-continued";
import TextDiif from "./components/TextDiff";
import { useState } from "react";
import "./App.css";
export default function App() {
  const [showTextDiff, setShowTextDiff] = useState(true);
  const [originalText, setOriginalText] = useState("");
  const [changedText, setChangedText] = useState("");
  const [compareType, setCompareType] = useState("words");
  const [compareMethod, setCompareMethod] = useState(DiffMethod.WORDS);

  const handleCompareTypeChange = (event) => {
    const valueSelected = event.target.value;
    if (valueSelected === "words") setCompareMethod(DiffMethod.WORDS);
    else setCompareMethod(DiffMethod.CHARS);
    setCompareType(event.target.value);
  };

  return (
    <div className="App">
      <header style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <h1>Simple Text Diff</h1>
        </div>
        <div style={{ textAlign: "start" , paddingTop:"10px" }}>
          <label>Compare by:</label>
          <div>
            <input
              type="radio"
              id="words"
              name="compareType"
              value="words"
              checked={compareType === "words"}
              onChange={handleCompareTypeChange}
            />
            <label htmlFor="words">Words</label>
          </div>
          <div>
            <input
              type="radio"
              id="chars"
              name="compareType"
              value="chars"
              checked={compareType === "chars"}
              onChange={handleCompareTypeChange}
            />
            <label htmlFor="chars">Characters</label>
          </div>
        </div>
        <div>
          <button
            className="findDiff-button"
            onClick={() => setShowTextDiff(!showTextDiff)}
          >
            {showTextDiff ? "Hide" : "Find"} difference
          </button>
          <button
            className="findDiff-button"
            onClick={() => {
              // setShowTextDiff(false);
              setChangedText("");
              setOriginalText("");
            }}
          >
            Clear
          </button>
        </div>
      </header>
      <br />
      <br />
      <br />
      <br />
      {showTextDiff && (
        <TextDiif
          originalText={originalText}
          changedText={changedText}
          compareMethod={compareMethod}
        />
      )}
      <div className="input-container">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Original Text:</label>
          <textarea
            value={originalText}
            onChange={(e) => setOriginalText(e.target.value)}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Changed Text:</label>
          <textarea
            value={changedText}
            onChange={(e) => setChangedText(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

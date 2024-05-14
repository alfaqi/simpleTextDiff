import ReactDiffViewer, { DiffMethod } from "react-diff-viewer-continued";

export default function TextDiif({ originalText, changedText, compareMethod }) {
  const newStyles = {
    variables: {
      light: {
        codeFoldGutterBackground: "#6F767E",
        codeFoldBackground: "#E2E4E5",
      },
    },
  };

  return (
    <div className="App">
      <ReactDiffViewer
        oldValue={originalText}
        newValue={changedText}
        splitView={true}
        // compareMethod={DiffMethod.WORDS}
        compareMethod={compareMethod}
        styles={newStyles}
        leftTitle="Original text"
        rightTitle="Changed text"
        // renderContent={highlightSyntax}
      />
    </div>
  );
}

/*

*/
import * as RiTa from "rita";


document.getElementById("analyzeBtn").addEventListener("click", () => {
    const text = document.getElementById("poemInput").value.trim();
    const type = document.getElementById("analysisType").value;

    console.log(type)
    console.log(text)

    const result = analyze(text, type);
    document.getElementById("output").textContent = result;
  });


export function analyze(text, type) {
  switch (type) {
    case "rhyme": {
      return "will eventually call a rhyme analysis function";
    }
    case "syllables": {
      return "will eventually call a syllables analysis function";
    }
    case "pos": {
      return "will eventually call a POS analysis function";
    }
    default:
      return "Choose an option.";
  }
}

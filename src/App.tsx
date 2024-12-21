import "./App.css";
import screenshot1 from "./assets/screenshot1.png";
import { privacyPolicy } from "./privacyPolicy";

function App() {
  return (
    <>
      <h1>LP Counter</h1>
      <h2>Minimal life point counter</h2>
      <p>
        <a href="mailto:lp-counter@didley.dev">Email support</a>
      </p>
      <img src={screenshot1} className="img" />
      <div>
        <h2>Privacy Policy</h2>
        <div
          style={{ whiteSpace: "pre-wrap", textAlign: "left", fontSize: 12 }}
        >
          {privacyPolicy}
        </div>
      </div>
    </>
  );
}

export default App;

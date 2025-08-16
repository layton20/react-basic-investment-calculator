import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result"
import { useState } from "react";

function App() {
  let [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 300,
    expectedReturn: 5.5,
    duration: 12,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevState => {
      return {
        ...prevState,
        [inputIdentifier]: +newValue
      };
    });
  }

  const inputIsValid = userInput.duration > 0;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className="center">Please enter a valid duration greater than 0.</p>}
      {inputIsValid && <Result userInput={userInput} />}
    </>
  )
}

export default App

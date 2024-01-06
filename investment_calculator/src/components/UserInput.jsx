import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prev) => {
      return {
        ...prev,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <labeL>Initial Investment</labeL>
          <input
            type="number"
            required
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
            value={userInput.initialInvestment}
          />
        </p>
        <p>
          <labeL>Annual Investment</labeL>
          <input
            type="number"
            required
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
            value={userInput.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <labeL>Expected Return</labeL>
          <input
            type="number"
            required
            onChange={(event) =>
              heventandleChange("expectedReturn", event.target.value)
            }
            value={userInput.expectedReturn}
          />
        </p>
        <p>
          <labeL>Duration</labeL>
          <input
            type="number"
            required
            onChange={(event) =>
              heventandleChange("duration", event.target.value)
            }
            value={userInput.duration}
          />
        </p>
      </div>
    </section>
  );
}

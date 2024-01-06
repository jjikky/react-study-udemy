export default function UserInput({ userInput, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <labeL>Initial Investment</labeL>
          <input
            type="number"
            required
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
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
              onChange("annualInvestment", event.target.value)
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
            onChange={(event) => onChange("expectedReturn", event.target.value)}
            value={userInput.expectedReturn}
          />
        </p>
        <p>
          <labeL>Duration</labeL>
          <input
            type="number"
            required
            onChange={(event) => onChange("duration", event.target.value)}
            value={userInput.duration}
          />
        </p>
      </div>
    </section>
  );
}

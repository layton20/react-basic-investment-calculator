export default function UserInput({onChange, userInput}) {
    return (
        <>
            <div id="user-input">
                <div className="input-group">
                    <p>
                        <label htmlFor="initial-investment">Initial Investment</label>
                        <input type="number" id="initial-investment" onChange={(event) => onChange('initialInvestment', event.target.value)} value={userInput.initialInvestment} required />
                    </p>

                    <p>
                        <label htmlFor="annual-investment">Annual Investment</label>
                        <input type="number" id="annual-investment" onChange={(event) => onChange('annualInvestment', event.target.value)} value={userInput.annualInvestment} required />
                    </p>
                </div>
                <br />
                <div className="input-group">
                    <p>
                        <label htmlFor="expected-return">Expected Return</label>
                        <input type="number" id="expected-return" onChange={(event) => onChange('expectedReturn', event.target.value)} value={userInput.expectedReturn} required />
                    </p>

                    <p>
                        <label htmlFor="duration">Duration</label>
                        <input type="number" id="duration" onChange={(event) => onChange('duration', event.target.value)} value={userInput.duration} required />
                    </p>
                </div>
            </div>
        </>
    );
}
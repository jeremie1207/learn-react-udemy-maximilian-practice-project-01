
export default function UserInput({formData, handleChange}){

    return <form action="" id="user-input">
        <div className="input-group">
            <div>
                <label htmlFor="initial_investment">Initial Investment</label>
                <input 
                    type="number" 
                    name="initialInvestment" 
                    id="initial_investment"
                    value={formData.initialInvestment}
                    onChange={handleChange}
                    />
            </div>
            <div>
                <label htmlFor="annual_investment">Annual Investment</label>
                <input 
                    type="number" 
                    name="annualInvestment" 
                    id="annual_investment" 
                    value={formData.annualInvestment} 
                    onChange={handleChange}/>
            </div>
        </div>

        <div className="input-group">
            <div>
                <label htmlFor="expected_return">Expected Return</label>
                <input 
                    type="number" 
                    name="expectedReturn" 
                    id="expected_return" 
                    value={formData.expectedReturn} 
                    onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="duration">Duration</label>
                <input 
                    type="number" 
                    name="duration" 
                    id="duration" 
                    value={formData.duration} 
                    onChange={handleChange}/>
            </div>
        </div>
    </form>
}

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { useState } from "react";
import { calculateInvestmentResults, transformAnnualData, formatter } from "./util/investment";

function App() {

  const [formData, setFormData] = useState({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0, 
        duration: 0
    });

    const [result, setResult] = useState([]);

    function handleChange(event) {
        const {name, value} = event.target;
        setFormData( prev => {
            const updated = {
                ...prev,
                [name]: +value
            };
            
            console.log(calculateInvestmentResults(updated));
            const investmentData = calculateInvestmentResults(updated);
            setResult(transformAnnualData(investmentData));
            return updated;
        });
    }

  return (
    <>
      <Header />
      <UserInput formData={formData} handleChange={handleChange}/>
      <Result result={result}/>
    </>
  )
}

export default App

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { useState } from "react";
import { calculateInvestmentResults, transformAnnualData } from "./util/investment";

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

            let compilable = true;
            
            for(let value in updated) {
              if(!updated[value]) {
                compilable = false;
              }
            }

            if(compilable) {
              const investmentData = calculateInvestmentResults(updated);
              setResult(transformAnnualData(investmentData));
            }else {
              setResult([]);
            }

            
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

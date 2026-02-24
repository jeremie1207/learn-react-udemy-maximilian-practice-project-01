export default function Result({ result }) {
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {result.map(i => (
                    <tr key={i.year}>
                        <td>{i.year}</td>
                        <td>{i.valueEndOfYear}</td>
                        <td>{i.interest}</td>
                        <td>{i.totalInterest}</td>
                        <td>{i.investedCapital}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

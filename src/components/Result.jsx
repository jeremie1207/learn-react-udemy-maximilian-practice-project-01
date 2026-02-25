import { formatter } from "../util/investment";

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
                        <td>{formatter.format(i.valueEndOfYear)}</td>
                        <td>{formatter.format(i.interest)}</td>
                        <td>{formatter.format(i.totalInterest)}</td>
                        <td>{formatter.format(i.investedCapital)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

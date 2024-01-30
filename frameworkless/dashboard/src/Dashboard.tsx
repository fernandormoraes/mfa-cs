import { CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, Legend, Rectangle } from 'recharts';

const data = [
    { name: 'DUFF BEAR', amount: 400, profit: 3444.25 },
    { name: 'DR PEPPER 1LT', amount: 159, profit: 1155.25 },
    { name: 'DICED BEEF', amount: 223, profit: 2255.25 },
    { name: 'MAHATMA RICE 5KG', amount: 255, profit: 2366.25 }];

const renderLineChart = (
    <BarChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        <Bar dataKey="profit" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
    </BarChart>
);

export default function Dashboard() {
    return (
        <div>
            <h2>Sales Statistics</h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>{renderLineChart}</div>
        </div>
    )
}

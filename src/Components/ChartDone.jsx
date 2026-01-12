import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const data = [
  { name: 'M', value1: 120, value2: 100 },
  { name: 'T', value1: 140, value2: 105 },
  { name: 'W', value1: 180, value2: 110 },
  { name: 'T', value1: 160, value2: 95 },
  { name: 'F', value1: 190, value2: 115 },
  { name: 'S', value1: 170, value2: 108 },
  { name: 'S', value1: 150, value2: 102 },
  { name: 'M', value1: 130, value2: 98 },
  { name: 'T', value1: 170, value2: 112 },
  { name: 'W', value1: 145, value2: 105 },
  { name: 'T', value1: 125, value2: 95 },
  { name: 'F', value1: 155, value2: 110 },
  { name: 'S', value1: 135, value2: 100 },
  { name: 'S', value1: 115, value2: 92 },
  { name: 'M', value1: 200, value2: 118 },
  { name: 'T', value1: 175, value2: 108 },
  { name: 'W', value1: 140, value2: 102 },
  { name: 'T', value1: 160, value2: 110 },
  { name: 'F', value1: 130, value2: 98 },
  { name: 'S', value1: 145, value2: 105 },
  { name: 'S', value1: 155, value2: 112 },
  { name: 'M', value1: 165, value2: 108 },
  { name: 'T', value1: 185, value2: 115 },
  { name: 'W', value1: 195, value2: 118 },
  { name: 'T', value1: 175, value2: 110 },
  { name: 'F', value1: 190, value2: 112 },
  { name: 'S', value1: 180, value2: 108 },
  { name: 'S', value1: 170, value2: 105 },
];

export default function ChartDone() {
  return (
    <div className="w-full h-64 bg-white p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart 
          data={data}
          margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 12 }}
            stroke="#9ca3af"
            axisLine={false}
          />
          <YAxis 
            tick={{ fontSize: 12 }}
            stroke="#9ca3af"
            domain={[0, 250]}
            axisLine={false}
            width={30}
          />
          <Tooltip />
          <ReferenceLine y={150} stroke="#ff6b6b" strokeDasharray="5 5" />
          <Line 
            type="monotone" 
            dataKey="value1" 
            stroke="#4ade80" 
            strokeWidth={2}
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="value2" 
            stroke="#60a5fa" 
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
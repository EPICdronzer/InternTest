import { LineChart, Line, BarChart, Bar, AreaChart, Area, ResponsiveContainer } from 'recharts';

const data = [
  { value: 120 },
  { value: 140 },
  { value: 180 },
  { value: 160 },
  { value: 190 },
  { value: 170 },
  { value: 150 },
  { value: 130 },
  { value: 170 },
  { value: 145 },
  { value: 125 },
  { value: 155 },
  { value: 135 },
  { value: 115 },
  { value: 200 },
  { value: 175 },
  { value: 140 },
  { value: 160 },
  { value: 130 },
  { value: 145 },
];

export default function ChartDone({ 
  color = "#3b82f6", 
  showDots = false,
  lineType = "monotone",
  chartType = "line"  
}) {
  return (
    <div className="w-full h-16">
      <ResponsiveContainer width="100%" height="100%">
        {chartType === "line" && (
          <LineChart data={data}>
            <Line 
              type={lineType}
              dataKey="value" 
              stroke={color}
              strokeWidth={2}
              dot={showDots}
            />
          </LineChart>
        )}
        
        {chartType === "bar" && (
          <BarChart data={data}>
            <Bar 
              dataKey="value" 
              fill={color}
            />
          </BarChart>
        )}
        
        {chartType === "area" && (
          <AreaChart data={data}>
            <Area 
              type={lineType}
              dataKey="value" 
              stroke={color}
              fill={color}
              fillOpacity={0.3}
              strokeWidth={2}
            />
          </AreaChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
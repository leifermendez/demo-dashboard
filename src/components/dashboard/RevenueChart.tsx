import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Jan 28', thisPeriod: 15000, lastPeriod: 12000 },
  { date: 'Feb 4', thisPeriod: 18000, lastPeriod: 13000 },
  { date: 'Feb 11', thisPeriod: 19500, lastPeriod: 14000 },
  { date: 'Feb 18', thisPeriod: 17500, lastPeriod: 13500 },
  { date: 'Feb 25', thisPeriod: 20000, lastPeriod: 14500 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Revenue</h3>
        <select className="text-sm border rounded-lg px-3 py-2">
          <option>All Products</option>
        </select>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="date" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
              tickFormatter={(value) => `$${value / 1000}K`}
            />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="thisPeriod" 
              stroke="#4F46E5" 
              strokeWidth={2}
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="lastPeriod" 
              stroke="#93C5FD" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
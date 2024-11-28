import React from 'react';
import { Info } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: {
    value: number;
    trend: 'up' | 'down';
  };
  iconBgColor?: string;
}

export default function StatCard({ icon, title, value, change, iconBgColor = 'bg-blue-100' }: StatCardProps) {
  const trendColor = change.trend === 'up' ? 'text-green-500' : 'text-red-500';
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-start">
        <div className={`${iconBgColor} p-3 rounded-lg`}>
          {icon}
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <Info size={20} />
        </button>
      </div>
      
      <div className="mt-4">
        <p className="text-sm text-gray-600">{title}</p>
        <h3 className="text-2xl font-semibold mt-1">{value}</h3>
        
        <div className="flex items-center gap-2 mt-2">
          <span className={`${trendColor} text-sm font-medium`}>
            {change.trend === 'up' ? '↑' : '↓'} {Math.abs(change.value)}%
          </span>
          <span className="text-sm text-gray-500">from last period</span>
        </div>
      </div>
    </div>
  );
}
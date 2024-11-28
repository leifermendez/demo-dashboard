import React from 'react';
import { FileText, DollarSign, Users } from 'lucide-react';
import Sidebar from './components/layout/Sidebar';
import StatCard from './components/dashboard/StatCard';
import RevenueChart from './components/dashboard/RevenueChart';
import ContactsList from './components/dashboard/ContactsList';
import TasksList from './components/dashboard/TasksList';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <header className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-semibold">Dashboard</h1>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-sm text-gray-500">Last updated: Feb 28, 2024</span>
                <button className="text-blue-600">↻</button>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border shadow-sm hover:bg-gray-50">
                Filter
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700">
                Import/Export
              </button>
            </div>
          </header>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <StatCard
              icon={<FileText className="text-blue-600" size={24} />}
              title="Total Sales"
              value="$23,569.00"
              change={{ value: 10.5, trend: 'up' }}
            />
            <StatCard
              icon={<DollarSign className="text-cyan-600" size={24} />}
              title="Avg. Sale value"
              value="$12,680.00"
              change={{ value: 3.4, trend: 'up' }}
              iconBgColor="bg-cyan-100"
            />
            <StatCard
              icon={<Users className="text-indigo-600" size={24} />}
              title="Total Deals"
              value="1,204"
              change={{ value: 0.8, trend: 'down' }}
              iconBgColor="bg-indigo-100"
            />
          </div>

          <div className="mb-8">
            <RevenueChart />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <ContactsList />
            <TasksList />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
import React from 'react';
import { 
  LayoutDashboard, 
  Bell, 
  CheckSquare, 
  FileText, 
  Mail, 
  Calendar,
  BarChart2,
  Building2,
  Users,
  Users2,
  Boxes,
  HelpCircle
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Bell, label: 'Notifications' },
  { icon: CheckSquare, label: 'Tasks' },
  { icon: FileText, label: 'Notes' },
  { icon: Mail, label: 'Email' },
  { icon: Calendar, label: 'Calendar' },
];

const recordItems = [
  { icon: BarChart2, label: 'Reports' },
  { icon: Building2, label: 'Companies' },
  { icon: Users, label: 'Contacts' },
];

const bottomItems = [
  { icon: Users2, label: 'Invite Team' },
  { icon: Boxes, label: 'Integration' },
  { icon: HelpCircle, label: 'Help & First step' },
];

const MenuItem = ({ Icon, label, active = false }) => (
  <li>
    <a
      href="#"
      className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
        active 
          ? 'bg-blue-50 text-blue-600' 
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <Icon size={20} />
      <span className="text-sm font-medium">{label}</span>
    </a>
  </li>
);

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-gray-200 h-screen p-4 flex flex-col">
      <div className="flex items-center gap-2 px-3 py-2">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white font-semibold">C</span>
        </div>
        <span className="font-semibold">Clario</span>
      </div>

      <div className="mt-6 px-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-8 pr-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute left-2 top-2.5 text-gray-400">🔍</span>
        </div>
      </div>

      <nav className="mt-6 flex-1">
        <div className="space-y-1">
          <p className="px-3 text-xs font-medium text-gray-500 uppercase">Main Menu</p>
          <ul className="mt-2 space-y-1">
            {menuItems.map((item, index) => (
              <MenuItem 
                key={index} 
                Icon={item.icon} 
                label={item.label} 
                active={item.active} 
              />
            ))}
          </ul>
        </div>

        <div className="mt-8 space-y-1">
          <p className="px-3 text-xs font-medium text-gray-500 uppercase">Record</p>
          <ul className="mt-2 space-y-1">
            {recordItems.map((item, index) => (
              <MenuItem key={index} Icon={item.icon} label={item.label} />
            ))}
          </ul>
        </div>
      </nav>

      <div className="mt-auto">
        <ul className="space-y-1">
          {bottomItems.map((item, index) => (
            <MenuItem key={index} Icon={item.icon} label={item.label} />
          ))}
        </ul>

        <div className="mt-4 px-3 py-2 flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=faces"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <div className="flex-1">
            <p className="text-sm font-medium">Alexandra Andria</p>
            <p className="text-xs text-gray-500">alexandra@gmail.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
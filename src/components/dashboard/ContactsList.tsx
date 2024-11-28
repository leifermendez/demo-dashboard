import React from 'react';
import { Phone, Mail } from 'lucide-react';

const contacts = [
  {
    name: 'Jenny Wilson',
    company: 'Facebook',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=faces',
    source: 'Advertisement',
  },
  {
    name: 'Kristin Watson',
    company: 'Klarna',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=faces',
    source: 'Online store',
  },
  {
    name: 'Darrell Steward',
    company: 'Trello',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=faces',
    source: 'Referral',
  },
];

export default function ContactsList() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Contacts</h3>
          <button className="text-gray-400 hover:text-gray-600">
            <span className="sr-only">Add contact</span>
            +
          </button>
        </div>
        
        <div className="mt-4 relative">
          <input
            type="text"
            placeholder="Search contact..."
            className="w-full pl-8 pr-4 py-2 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute left-2 top-2.5 text-gray-400">🔍</span>
        </div>
      </div>

      <div className="divide-y">
        {contacts.map((contact, index) => (
          <div key={index} className="p-4 hover:bg-gray-50">
            <div className="flex items-center gap-4">
              <img
                src={contact.avatar}
                alt={contact.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {contact.name}
                </p>
                <p className="text-sm text-gray-500 truncate">{contact.company}</p>
              </div>
              <div className="flex gap-2">
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <Phone size={16} />
                </button>
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <Mail size={16} />
                </button>
              </div>
            </div>
            <div className="mt-2">
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                {contact.source}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
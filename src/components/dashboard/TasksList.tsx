import React from 'react';
import { Calendar } from 'lucide-react';

const tasks = [
  {
    title: 'New social media post',
    description: 'Sed mi ac ac sagittis mi. Interdum varius...',
    date: 'Feb 12',
    tags: ['Marketing', 'Internal'],
  },
  {
    title: 'Upload new item to marketplace',
    description: 'Sed mi ac ac sagittis mi. Interdum varius...',
    date: 'Feb 14',
    tags: ['Product', 'External'],
  },
];

export default function TasksList() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">My Tasks</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <span className="sr-only">Add task</span>
          +
        </button>
      </div>

      <div className="space-y-4">
        {tasks.map((task, index) => (
          <div key={index} className="p-4 border rounded-lg hover:shadow-sm transition-shadow">
            <h4 className="font-medium">{task.title}</h4>
            <p className="text-sm text-gray-500 mt-1">{task.description}</p>
            
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-gray-400" />
                <span className="text-sm text-gray-500">{task.date}</span>
              </div>
              
              <div className="flex gap-2">
                {task.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-2 py-1 rounded-md text-xs font-medium ${
                      tag === 'Marketing' ? 'bg-blue-100 text-blue-800' :
                      tag === 'Internal' ? 'bg-green-100 text-green-800' :
                      tag === 'Product' ? 'bg-purple-100 text-purple-800' :
                      'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
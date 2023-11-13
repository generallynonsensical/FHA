import React from 'react';
import { Disclosure } from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/24/outline'

const TaskAccordion: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between items-center text-gray-900 text-lg font-semibold mb-2 bg-gray-200 p-2 rounded-lg">
              Task Information
              <ChevronDownIcon 
                className={`w-5 h-5 ${open ? 'transform rotate-180' : ''}`}
              />
            </Disclosure.Button>
            <Disclosure.Panel>
              <form>
                <div className="mb-4">
                  <label htmlFor="inputTask" className="block text-sm font-medium text-gray-700">Task Name</label>
                  <input type="text" id="inputTask" className="mt-1 p-2 rounded-md border" />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md mt-4">
                  Submit Task
                </button>
              </form>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default TaskAccordion;
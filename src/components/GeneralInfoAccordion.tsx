import React from 'react';
import { Disclosure } from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/24/outline'

const GeneralInfoAccordion: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between items-center w-full text-gray-900 text-lg font-semibold mb-2 bg-gray-200 p-2 rounded-lg">
              General Information
              <ChevronDownIcon 
                className={`w-5 h-5 ${open ? 'transform rotate-180' : ''}`}
              />
            </Disclosure.Button>
            <Disclosure.Panel>
            <form>
          <div className="mb-4">
            <label htmlFor="inputGeneralName" className="block text-sm font-medium text-gray-700">Created By</label>
            <input type="text" id="inputGeneralName" className="mt-1 p-2 w-full rounded-md border" />
          </div>
          <div className="mb-4">
            <label htmlFor="inputDate" className="block text-sm font-medium text-gray-700">Date</label>
            <input type="date" id="inputDate" className="mt-1 p-2 w-full rounded-md border" />
          </div>
          <div className="mb-4">
            <label htmlFor="inputCompanyName" className="block text-sm font-medium text-gray-700">Company Name</label>
            <input type="text" id="inputCompanyName" className="mt-1 p-2 rounded-md border" />
          </div>
          <div className="mb-4">
            <label htmlFor="inputPositionEval" className="block text-sm font-medium text-gray-700">Position Being Evaluated</label>
            <input type="text" id="inputPositionEval" className="mt-1 p-2 rounded-md border" />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md mt-4">
            Submit Information
          </button>
        </form>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default GeneralInfoAccordion;


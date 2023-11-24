import React, { useState, useEffect } from 'react';

// Import your accordion modules
import TaskModule from './TaskModule';
import HazardModule from './HazardModule';
import ControlModule from './ControlModule';

interface DataControllerProps {
    // You can add props here if needed, like callbacks for data submission success or error
}

const DataController: React.FC<DataControllerProps> = (props) => {
    // State for managing accordion expanded status
    const [isTaskAccordionExpanded, setTaskAccordionExpanded] = useState(true);
    const [isHazardAccordionExpanded, setHazardAccordionExpanded] = useState(false);
    const [isControlAccordionExpanded, setControlAccordionExpanded] = useState(false);

    // Functions to toggle the state of each accordion
    const toggleTaskAccordion = () => {
        setTaskAccordionExpanded(true);
        setHazardAccordionExpanded(false);
        setControlAccordionExpanded(false);
    };
    const toggleHazardAccordion = () => {
        setTaskAccordionExpanded(false);
        setHazardAccordionExpanded(true);
        setControlAccordionExpanded(false);
    };
    const toggleControlAccordion = () => {
        setTaskAccordionExpanded(false);
        setHazardAccordionExpanded(false);
        setControlAccordionExpanded(true);
    };

    // Generic handler for submissions; adapt as necessary
    const handleSubmit = async (data: any, module: string) => {
        // Validate data
   
        // Toggle next accordion based on the module
        if (module === 'task') {
            toggleHazardAccordion();
        } else if (module === 'hazard') {
            toggleControlAccordion();
        } else if (module === 'control') {
            toggleTaskAccordion();
            // Optionally reset Task module form here
        }
    };

    // Function to fetch data (e.g., tasks, hazards, controls)
    const fetchData = async () => {
        // Implement logic to retrieve data
        // Example: const tasks = await api.fetchTasks();
    };

    // Fetch data when the component mounts
    useEffect(() => {
        if (typeof window !== 'undefined') {
            fetchData();
        }
    }, [])

    return (
        <div>
            <TaskModule 
                expanded={isTaskAccordionExpanded} 
                onToggle={toggleTaskAccordion}
                onSubmit={(data) => handleSubmit(data, 'task')}
            />
            <HazardModule 
                expanded={isHazardAccordionExpanded} 
                onToggle={toggleHazardAccordion}
                onSubmit={(data) => handleSubmit(data, 'hazard')} 
            />
            <ControlModule 
                expanded={isControlAccordionExpanded} 
                onToggle={toggleControlAccordion}
                onSubmit={(data) => handleSubmit(data, 'control')} 
            />
            {/* Add other modules as needed */}
        </div>
    );
}; 

export default DataController;

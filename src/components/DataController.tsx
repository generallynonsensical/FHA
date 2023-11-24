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
        console.log('toggleTaskAccordion called');
        setTaskAccordionExpanded(!isTaskAccordionExpanded);
        setHazardAccordionExpanded(false);
        setControlAccordionExpanded(false);
    };
    const toggleHazardAccordion = () => {
        console.log('toggleHazardAccordion called');
        setTaskAccordionExpanded(false);
        setHazardAccordionExpanded(!isHazardAccordionExpanded);
        setControlAccordionExpanded(false);
    };
    const toggleControlAccordion = () => {
        console.log('toggleControlAccordion called');
        setTaskAccordionExpanded(false);
        setHazardAccordionExpanded(false);
        setControlAccordionExpanded(!isControlAccordionExpanded);
    };

    // Generic handler for submissions; adapt as necessary
    const handleSubmit = async (data: any, module: string) => {
        console.log("Submitting form for module:", module);
                // Validate data
        if (module === 'task') {
            setTaskAccordionExpanded(false);
            setHazardAccordionExpanded(true);
        } else if (module === 'hazard') {
            setHazardAccordionExpanded(false);
            setControlAccordionExpanded(true);
        } else if (module === 'control') {
            setControlAccordionExpanded(false);
            // Decide what to do after control submission, e.g., reopen Task
            setTaskAccordionExpanded(true);
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

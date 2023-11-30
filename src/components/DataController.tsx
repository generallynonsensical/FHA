import React, { useState, useEffect } from 'react';
import GeneralModule from './GeneralModule';
import TaskModule from './TaskModule';
import HazardModule from './HazardModule';
import ControlModule from './ControlModule';

interface DataControllerProps {
    // Add props as needed
}

// DataController component manages accordion modules and their state
const DataController: React.FC = () => {
    const [isGeneralAccordionExpanded, setGeneralAccordionExpanded] = useState(true);
    const [isTaskAccordionExpanded, setTaskAccordionExpanded] = useState(false);
    const [isHazardAccordionExpanded, setHazardAccordionExpanded] = useState(false);
    const [isControlAccordionExpanded, setControlAccordionExpanded] = useState(false);

    // Function to toggle the state of the General accordion
    const toggleGeneralAccordion = () => {
        setGeneralAccordionExpanded(!isGeneralAccordionExpanded);
        setTaskAccordionExpanded(false);
        setHazardAccordionExpanded(false);
        setControlAccordionExpanded(false);
    };

    // Function to toggle the state of the Task accordion
    const toggleTaskAccordion = () => {
        setGeneralAccordionExpanded(false);
        setTaskAccordionExpanded(!isTaskAccordionExpanded);
        setHazardAccordionExpanded(false);
        setControlAccordionExpanded(false);
    };

    // Function to toggle the state of the Hazard accordion
    const toggleHazardAccordion = () => {
        setGeneralAccordionExpanded(false);
        setTaskAccordionExpanded(false);
        setHazardAccordionExpanded(!isHazardAccordionExpanded);
        setControlAccordionExpanded(false);
    };

    // Function to toggle the state of the Control accordion
    const toggleControlAccordion = () => {
        setGeneralAccordionExpanded(false);
        setTaskAccordionExpanded(false);
        setHazardAccordionExpanded(false);
        setControlAccordionExpanded(!isControlAccordionExpanded);
    };

    // Generic handler for form submissions; determines accordion behavior
    const handleSubmit = async (data: any, module: string) => {
        console.log("Submitting form for module:", module);
    
        // Manage accordion state transitions
        if (module === 'general') {
            setGeneralAccordionExpanded(false);
            setTaskAccordionExpanded(true);
            setHazardAccordionExpanded(false);
            setControlAccordionExpanded(false);
        } else if (module === 'task') {
            setGeneralAccordionExpanded(false);
            setTaskAccordionExpanded(false);
            setHazardAccordionExpanded(true);
            setControlAccordionExpanded(false);
        } else if (module === 'hazard') {
            setGeneralAccordionExpanded(false);
            setTaskAccordionExpanded(false);
            setHazardAccordionExpanded(false);
            setControlAccordionExpanded(true);
        } else if (module === 'control') {
            // Decide what to do after control submission
            // For example, you might want to reopen the GeneralModule or navigate elsewhere
            setGeneralAccordionExpanded(false);
            setTaskAccordionExpanded(false);
            setHazardAccordionExpanded(false);
            setControlAccordionExpanded(false);
        }
    };

    // Function to fetch data (e.g., tasks, hazards, controls)
    const fetchData = async () => {
        // Implement logic to retrieve data (e.g., using an API)
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
            <GeneralModule 
                expanded={isGeneralAccordionExpanded} 
                onToggle={toggleGeneralAccordion}
                onSubmit={(data) => handleSubmit(data, 'general')}
            />

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
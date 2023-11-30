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


    const handleSubmit = async (data: any, module: string) => {
        console.log("Submitting form for module:", module);

        // Manage accordion state transitions
        if (module === 'generalModule') {
            setGeneralAccordionExpanded(false);
            setTaskAccordionExpanded(true);
            setHazardAccordionExpanded(false);
            setControlAccordionExpanded(false);
        } else if (module === 'taskModule') {
            setGeneralAccordionExpanded(false);
            setTaskAccordionExpanded(false);
            setHazardAccordionExpanded(true);
            setControlAccordionExpanded(false);
        } else if (module === 'hazardModule') {
            setGeneralAccordionExpanded(false);
            setTaskAccordionExpanded(false);
            setHazardAccordionExpanded(false);
            setControlAccordionExpanded(true);
        } else if (module === 'controlModule') {
            // Decide what to do after control submission
            // For example, you might want to reopen the GeneralModule or navigate elsewhere
            setGeneralAccordionExpanded(false);
            setTaskAccordionExpanded(false);
            setHazardAccordionExpanded(true);
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
                onSubmit={(data) => handleSubmit(data, 'generalModule')}
            />

            <TaskModule 
                expanded={isTaskAccordionExpanded} 
                onSubmit={(data) => handleSubmit(data, 'taskModule')}
            />
            <HazardModule 
                expanded={isHazardAccordionExpanded} 
                onSubmit={(data) => handleSubmit(data, 'hazardModule')} 
            />
            <ControlModule 
                expanded={isControlAccordionExpanded} 
                onSubmit={(data) => handleSubmit(data, 'controlModule')} 
            />
            
            {/* Add other modules as needed */}
        </div>
    );
};

export default DataController;
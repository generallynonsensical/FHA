import React, { useState } from 'react';
import InputModule from '../containers/InputModule';

const DataController: React.FC = () => {
    const [isGeneralAccordionExpanded, setGeneralAccordionExpanded] = useState(true);
    const [isTaskAccordionExpanded, setTaskAccordionExpanded] = useState(false);
    const [isHazardAccordionExpanded, setHazardAccordionExpanded] = useState(false);
    const [isControlAccordionExpanded, setControlAccordionExpanded] = useState(false);

    const handleSubmit = async (module: string) => {
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
            setGeneralAccordionExpanded(false);
            setTaskAccordionExpanded(false);
            setHazardAccordionExpanded(true);
            setControlAccordionExpanded(false);
        }
    };

    return (
        <InputModule 
            isGeneralAccordionExpanded={isGeneralAccordionExpanded}
            setIsGeneralAccordionExpanded={setGeneralAccordionExpanded}
            isTaskAccordionExpanded={isTaskAccordionExpanded}
            setIsTaskAccordionExpanded={setTaskAccordionExpanded}
            isHazardAccordionExpanded={isHazardAccordionExpanded}
            setIsHazardAccordionExpanded={setHazardAccordionExpanded}
            isControlAccordionExpanded={isControlAccordionExpanded}
            setIsControlAccordionExpanded={setControlAccordionExpanded}
            handleSubmit={handleSubmit}
        />
    );
};

export default DataController;
import { createContext , useMemo, useState } from "react";

export const SequenceContext= createContext([]);

export const SequenceProvider = ({children}) => {
    
    const [humanSequence, setHumanSequence] = useState([]);
    const [machineSequence, setMachineSequence] = useState([]);

    const contextValue = useMemo(() => ({
        humanSequence, setHumanSequence, machineSequence, setMachineSequence
    }),[
        humanSequence, setHumanSequence, machineSequence, setMachineSequence
    ]);
    
    return (
        <SequenceContext.Provider 
        value={contextValue}>
            {children}
        </SequenceContext.Provider>
    );
};
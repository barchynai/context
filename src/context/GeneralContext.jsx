import { createContext, useState} from "react";

export const ContextCounter = createContext(0)

export const GeneralProvider = ({children}) => { 
    const [counter, setCounter] = useState(10)
    const [name, setName] = useState('Mario')
    const data = {
        counter: counter,
        setCounter: setCounter,
        name: name,
        setName: setName
    }
    return (
    <ContextCounter.Provider value={data}>
        {children}
    </ContextCounter.Provider>
    )
}


import React, { useState } from 'react';

export const CounterContext = React.createContext(0)

const CounterContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [count, setCount] = useState<number>(0)

    return (
        <CounterContext.Provider value={{ count, setCount }}>
            {children}
        </CounterContext.Provider>
    )
}
export default CounterContextProvider
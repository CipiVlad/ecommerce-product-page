import React, { useState } from 'react';

export const CounterContext = React.createContext<{ count: number; setCount: React.Dispatch<React.SetStateAction<number>> }>({ count: 0, setCount: () => { } });

const CounterContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [count, setCount] = useState<number>(0)


    return (
        <CounterContext.Provider value={{ count, setCount }}>
            {children}
        </CounterContext.Provider>
    )
}
export default CounterContextProvider
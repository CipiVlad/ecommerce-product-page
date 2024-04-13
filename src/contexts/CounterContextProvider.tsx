import React, { useEffect, useState } from 'react';

export const CounterContext = React.createContext<{ count: number; setCount: React.Dispatch<React.SetStateAction<number>>; dispatch: number; setDispatch: React.Dispatch<React.SetStateAction<number>> }>({ count: 0, setCount: () => { }, dispatch: 0, setDispatch: () => { } });

const CounterContextProvider = ({ children }: { children: React.ReactNode }) => {
    //only for Counter.tsx
    const [count, setCount] = useState<number>(0)

    //only for AddToCart.tsx
    const [dispatch, setDispatch] = useState<number>(0)


    return (
        <CounterContext.Provider value={{ count, setCount, dispatch, setDispatch }}>
            {children}
        </CounterContext.Provider>
    )
}
export default CounterContextProvider
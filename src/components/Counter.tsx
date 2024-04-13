import { useContext, useEffect, useState } from "react"
import '../sass/Counter.scss'
import { CounterContext } from "../contexts/CounterContextProvider"

const Counter = () => {
    const { count, setCount } = useContext(CounterContext) as { count: number, setCount: (count: number) => void };

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }

    //prevent count from ever going below zero with useEffect
    useEffect(() => {
        if (count < 0) {
            setCount(0)
        }
    }, [count])

    return (
        <div className="counter_container">
            <button onClick={handleDecrement}>-</button>
            <p>{count}</p>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}
export default Counter
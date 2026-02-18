import { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0);
    const [rCounter, setRCounter] = useState(10);
    return (
        <div>
            <h1>Counter</h1>
            <h1>{count}</h1>
            <h2>R Counter: {rCounter}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setRCounter(rCounter + 1)}>Increment R</button>
            <button onClick={() => setRCounter(rCounter - 1)}>Decrement R</button>

        </div>
    );
}
export default Counter;
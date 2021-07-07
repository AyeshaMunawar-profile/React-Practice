import react, { useState } from "react";
import "./counter.style.scss"

const Counter = () => {
	const [count, setCount] = useState(0);
	const increment = () => {
		setCount(count + 1);
	}
	const decrement = () => {
		setCount(count - 1);
	}
	return (<>
		<div className="counter section">
		<h1>Counter Componenet</h1>
		<h3>Count is : {count}</h3>
		<div className="sub-section">
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decreement</button>
			</div>
		</div>
	</>)
}
export default Counter;
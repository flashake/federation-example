import { useState } from "react"

export const Button = () => {
    const [count, setCount] = useState(0)

    return (
        <div style={{backgroundColor: 'red', padding: 20, borderRadius: 20}}>
            <h1>main</h1>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </div>
    )
}

export default Button
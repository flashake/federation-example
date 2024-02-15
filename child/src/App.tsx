import {useState} from 'react'

export const App = () => {
    const [count, setCount] = useState(0)

    return (
        <div style={{backgroundColor: 'blue', padding: 20, borderRadius: 20}}>
            <h1>child vite</h1>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </div>
    )
}

export default App

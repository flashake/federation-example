import React, {useState} from 'react'
import {App as CmFront} from 'main/App';

function App() {
    const [count, setCount] = useState(0)

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'yellow',
            padding: 20,
            borderRadius: 20,
            gap: 10
        }}>
            <h1>channel web-pack</h1>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <CmFront/>
        </div>
    )
}

export default App

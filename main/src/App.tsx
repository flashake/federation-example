import {useState} from 'react'
import {App as Child} from 'child/App';

export const App = () => {
    const [count, setCount] = useState(0)

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'red',
            padding: 20,
            borderRadius: 20,
            gap: 10
        }}>
            <h1>main</h1>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <Child />
        </div>
    )
}

export default App

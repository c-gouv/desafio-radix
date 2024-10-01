import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from 'index'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <h1>Banana1</h1>
        <Index/>
        <h1>Banana2</h1>
    </React.StrictMode>
);
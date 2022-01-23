import fetch from 'node-fetch'

const host = process.env.PYTHON_APP_HOST || "localhost"
const port = process.env.PYTHON_APP_PORT || "5000"

fetch(`http://${host}:${port}`).then(res => res.text()).then(console.log) // Hello, World!

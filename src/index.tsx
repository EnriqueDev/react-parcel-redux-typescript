import * as React from 'react'
import 'regenerator-runtime/runtime'
import ReactDom from 'react-dom'
import App from './App'

const container = document.getElementById('app')
ReactDom.render(<App />, container)

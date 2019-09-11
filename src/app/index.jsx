//console.log("This is automatic!!!");

import { store } from './store/index.js'

import React from 'react'
import ReactDOM from 'react-dom'
import { Main } from './components/Main.jsx'

//console.log(store.getState());

ReactDOM.render(
    < Main />,
    document.getElementById("app")
);

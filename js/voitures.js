import {voituresInitiales} from "./data.js"


const data= localStorage.getItem("data") && JSON.parse(localStorage.getItem("data"))!=="undefined" ? JSON.parse(localStorage.getItem("data")) :voituresInitiales

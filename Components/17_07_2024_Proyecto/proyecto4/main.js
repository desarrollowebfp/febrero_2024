import './style.css'
import Header from './components/Header/Header'
import Movies from './components/Movies/Movies'

document.querySelector("#app").innerHTML = `
${Header()}
${Movies()}
`
import './style.css'
import { dogFactory } from './factories/dogFactory' 

const dog1 = dogFactory("tracy, belgian malinois")
console.log(dog1)


document.querySelector('#app').innerHTML = `
  <div>

  </div>
`

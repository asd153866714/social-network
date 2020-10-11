import { Navbar } from '../components/Navbar.js'
import { SideNav } from '../components/SideNav.js'


const App = document.querySelector('#app')

let view = `<h3>Main</h3>`

export let Home = () => {
    App.innerHTML = (
        `
        ${Navbar}
        <div class="container">
            <div class="row">
                <div id="aside" class="col s2 white">
                    ${SideNav}
                </div>
                <div id="app" class="col s9 offset-s1 white">
                    ${view}
                </div>
            </div>
        </div>
        `
    )
}
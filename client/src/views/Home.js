import { Navbar } from '../components/Navbar.js'
import { Sidebar } from '../components/Sidebar.js'
import { Suggestion } from '../components/Suggestion.js'


const App = document.querySelector('#app')

let view = (
    `
    <!-- Main Posts -->
    <div id="main" class="col s7">
        <div class="row">
            <div class="col s12">
                <div class="card">

                    <div class="card-content">
                        <div class="row">
                            <div class="col s2">
                                <img src="https://www.genmyanmar.org/assets/medium/member.png" alt="avatar"
                                    style="height: 50px;" class="responsive-img circle valign-wrapper">
                            </div>
                            <div class="col s10">
                                <p>
                                    Jack123
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col s12">
                                <p>
                                    Test content...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card-image">
                        <img src="https://materializecss.com/images/sample-1.jpg">
                        <span class="card-title">Card Title</span>
                    </div>

                    <div class="card-action">
                        <a class="grey-text" href="">2 likes</a>
                        <a style="float: right;" class="grey-text" href="">1 comments</a>
                        <br><br>
                        <div class="divider"></div>
                        <br>
                        <div class="row">
                            <a class="col s4 offset-s2" href="#">Like</a>
                            <a class="col s4" style="float: right;" href="#">Comment</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    `
)

export let Home = () => {
    console.log(document.cookie)
    localStorage.setItem('isLogin', true)
    App.innerHTML = (
        `
        ${Navbar}
        <div class="container">
            <div class="row">
                ${Sidebar}
                ${view}
                ${Suggestion}
            </div>
        </div>
        `
    )

}
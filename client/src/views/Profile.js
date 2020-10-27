import Navbar from '../components/Navbar.js'
import { Sidebar } from '../components/Sidebar.js'
import { Suggestion } from '../components/Suggestion.js'
import { loadCss } from '../loadCss.js'

const App = document.querySelector('#app')

let view = (
    `
    <main class="profile-page col s12 l6 white">
    <div class="row">

        <div class="col s12">
            <div class="row">

                <div class="col s12">
                    <div class="row">
                        <img class="materialboxed" width="100%" height="250"
                            src="https://materializecss.com/images/sample-1.jpg">
                    </div>
                </div>

                <div class="col s12 description">

                    <div class="row">

                        <div class="col s12">

                            <img src="https://www.genmyanmar.org/assets/medium/member.png" alt="avatar">

                            <a class="waves-effect waves-light btn">Button</a>

                        </div>


                        <div class="col s12">
                            <h5>
                                Jack James
                            </h5>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ut, id
                                magnam velit adipisci cupiditate cum temporibus vel architecto
                                repellendus.
                            </p>
                        </div>

                    </div>

                    <!-- <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, dolor!
                    </p>


                    <a class="waves-effect waves-light btn">Button</a> -->

                </div>

            </div>
        </div>

        <div class="col s12">
            <div class="row">
                <ul class="tabs">
                    <li class="tab col s3"><a href="#test1">Posts</a></li>
                    <li class="tab col s3"><a class="active" href="#test2">Friends</a></li>
                    <li class="tab col s3"><a href="#test3">Test 1</a></li>
                    <li class="tab col s3"><a href="#test4">Test 2</a></li>
                </ul>
            </div>
        </div>

        <div class="col s12">

            <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse illum culpa minus
                repellendus cumque dolorem itaque, assumenda quis iusto aspernatur? Est vel, non
                eveniet, qui aliquid, pariatur voluptate labore assumenda doloremque nihil nesciunt
                amet. Possimus quibusdam inventore et! Iure nihil beatae sapiente, facere, ut,
                expedita necessitatibus iste voluptatum quod dolore ratione libero. Veritatis,
                aliquam obcaecati eos assumenda ducimus, praesentium sunt laudantium voluptates illo
                aliquid ea, reprehenderit consequuntur expedita nihil hic. Dicta architecto,
                reiciendis sequi voluptates omnis praesentium rerum natus minus, nostrum perferendis
                earum deleniti perspiciatis officiis exercitationem! Quos, vel quas dolorem
                voluptatum officiis sint ea architecto corporis consequatur blanditiis error!
            </h1>

        </div>
    </div>

</main>
`
)

export let Profile = async () => {

    App.innerHTML = (
        `
        ${Navbar.view()}
        <div class="container">
            <div class="row">
                ${Sidebar}
                ${view}
                ${Suggestion}
            </div>
        </div>
        `
    )

    loadCss("Profile")


    Navbar.controller()
}
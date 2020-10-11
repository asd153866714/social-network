const App = document.querySelector('#app')

let view = (
    `
    <div class="container">
        <h1>Error 404</h1>
    </div>
    `
)

export let Error404 = () => {
    App.innerHTML = view
}
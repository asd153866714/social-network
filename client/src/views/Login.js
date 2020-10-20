const App = document.querySelector('#app')

let view = (
    `
    <div class="container">
    <div class="row">

    </div>
    <div class="row">
        <div class="col s6 offset-s3">
            <form class="white login-form" class="login-form">
                <h3>Login</h3>
                <div class="row">
                    <div id="message" class="input-field col s12">

                    </div>
                    <div class="input-field col s12">
                        <input id="email" type="email" class="validate" required>
                        <label for="email">Email</label>
                    </div>
                    <div class="input-field col s12">
                        <input id="password" type="password" class="validate" required>
                        <label for="password">Password</label>
                    </div>
                </div>
                <div class='row'>
                    <div class="col s4">
                        <label style='float: left;'>
                            <a class='teal-text' href='/#/signup'>Sign up</a>
                        </label>
                    </div>
                    <div class="col s4 offset-s4">
                        <label style='float: right;'>
                            <a class='teal-text' href='/#/home'>Forgot Password?</a>
                        </label>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12">
                        <button class="col s12 btn-large waves-effect waves-light" type="submit" name="action">
                            LOGIN
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
    `
)

let feedBack = (message) => {
    let messageDiv = document.querySelector('#message')
    messageDiv.innerHTML = `<span class="red-text">${message}</span>`
    console.log(message)
}

export let Login = async () => {
    App.innerHTML = view
    let loginForm = document.querySelector('.login-form')
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault()

        let userEmail = event.target.email.value,
            userPwd = event.target.password.value;

        let res = await fetch(`http://localhost:3000/api/auth/login`, {
            method: 'POST',
            body: JSON.stringify({
                email: userEmail,
                password: userPwd
            }),
            headers: { 'Content-Type': 'application/json' },
            credentials: "include",
        })
        if (res.status !== 200) {
            let errorMessage = (await res.json()).message
            feedBack(errorMessage)
        } else {
            localStorage.setItem('isLogin', "true")
            window.location.hash = '#/home'
        }

    })
}
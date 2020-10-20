const App = document.querySelector('#app')

let view = (
    `
    <div class="container">
    <div class="row">

    </div>
    <div class="row">
        <div class="col s6 offset-s3">
            <form class="white login-form">
                <h3>Sign up</h3>
                <div class="row">

                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="name" type="text" class="validate" required>
                        <label for="name">Full name</label>
                    </div>
                    <div class="input-field col s12">
                        <input id="email" type="email" class="validate" required>
                        <label for="email">Email</label>
                    </div>
                    <div class="input-field col s12">
                        <input id="password" type="password" class="validate" required>
                        <label for="password">Password</label>
                    </div>
                    <div class="input-field col s12">
                        <input id="confirm-password" type="password" class="validate" required>
                        <label for="confirm-password">Confirm Password</label>
                    </div>
                </div>

                <div class='row'>
                    <div class="col s4">
                        <label style='float: left;'>
                            <a class='teal-text' href='/#/login'>Login</a>
                        </label>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12">
                        <button class="col s12 btn-large waves-effect waves-light" type="submit" name="action">
                            SIGN UP
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
    `
)

export let Signup = async () => {
    App.innerHTML = view
    let signupForm = document.querySelector('.login-form')
    signupForm.addEventListener('submit', async (event) => {
        event.preventDefault()

        let userEmail = event.target.email.value,
            userName = event.target.name.value,
            userPwd = event.target.password.value;

        let res = await fetch(`http://localhost:3000/api/auth/signup`, {
            method: 'POST',
            body: JSON.stringify({
                email: userEmail,
                name: userName,
                password: userPwd
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        console.log(await res.json())
    })
}
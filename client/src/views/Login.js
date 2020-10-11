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

                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="email" type="email" class="validate" required>
                        <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
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

export let Login = () => {
    App.innerHTML = view
}
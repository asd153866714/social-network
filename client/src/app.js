import * as Views from './views/index.js'

window.onhashchange = () => {

    let hashToken = window.location.hash.split('/')
    let route = hashToken[1]
    let id = hashToken[2]
    if (!route) route = 'home'
    console.log(
        'route:', route,
        'id:', id
    );

    switch (route) {
        case 'home':
            Views.Home()
            break;
        case 'login':
            Views.Login()
            break;
        case 'signup':
            Views.Signup()
            break;
        default:
            Views.Error404()
            break;
    }
}



window.onload = () => {
    console.log('Window Onload!')
    window.onhashchange()
}
class Navbar {
    view() {
        return (
            `
          <div class="navbar-fixed">
          <nav>
              <div class="nav-wrapper white">
                  <div class="container">
                      <a href="/" class="brand-logo">Logo</a>

                      <ul id="nav-mobile" class="right hide-on-med-and-down">

                          <li class="search-bar">
                              <div class="input-field valign-wrapper">
                                  <input type="text" placeholder="Search" />
                                  <div class="search-result z-depth-2">
                                      <a href="#">
                                          <div>Lorem.</div>
                                      </a>
                                      <a href="#">
                                          <div>Lorem.</div>
                                      </a>
                                      <a href="#">
                                          <div>Lorem.</div>
                                      </a>
                                  </div>
                              </div>
                          </li>
                          <li>
                              <a href="/#/messages">
                                  <i class="material-icons">mail_outline</i>
                              </a>
                          </li>
                          <li>
                              <a href="/#/notifications">
                                  <i class="material-icons">notifications_none</i>
                              </a>
                          </li>
                          <li>
                              <a href="/#/profile">
                                  <i class="material-icons">person_outline</i>
                              </a>
                          </li>
                          <li>
                              <a href="/#/logout">
                                  Logout
                              </a>
                          </li>

                      </ul>
                  </div>
              </div>
          </nav>
        </div>
        `
        )
    }
    controller() {
        const searchInput = document.querySelector(".search-bar input")
        const searchResult = document.querySelector(".search-result")
        const searchResultList = document.querySelector(".search-result > ul")
        const people = ["Jack", "Ja123", "Jack01"]

        searchInput.addEventListener('input', displayMatches)


        function findMatch(word, people) {
            return people.filter(person => {
                let regex = new RegExp(word, "gi")
                return person.match(regex)
            })
        }

        function displayMatches() {
            console.log('start input')
            let matchArrays = findMatch(this.value, people)
            let html = matchArrays.map(person => {
                return `
                <a href="#">
                    <div>
                    ${person}
                    </div>
                </a>
                `
            }).join('')

            searchResult.innerHTML = html
            console.log(searchResult)
        }

    }
}

export default new Navbar()

// export let Navbar = (
//     `
//   <div class="navbar-fixed">
//   <nav>
//       <div class="nav-wrapper white">
//           <div class="container">
//               <a href="/" class="brand-logo">Logo</a>

//               <ul id="nav-mobile" class="right hide-on-med-and-down">

//                   <li class="search-bar">
//                       <div class="input-field valign-wrapper">
//                           <input type="text" placeholder="Search" />
//                           <div class="search-result z-depth-2">
//                               <a href="#">
//                                   <div>Lorem.</div>
//                               </a>
//                               <a href="#">
//                                   <div>Lorem.</div>
//                               </a>
//                               <a href="#">
//                                   <div>Lorem.</div>
//                               </a>
//                           </div>
//                       </div>
//                   </li>
//                   <li>
//                       <a href="/#/messages">
//                           <i class="material-icons">mail_outline</i>
//                       </a>
//                   </li>
//                   <li>
//                       <a href="/#/notifications">
//                           <i class="material-icons">notifications_none</i>
//                       </a>
//                   </li>
//                   <li>
//                       <a href="/#/profile">
//                           <i class="material-icons">person_outline</i>
//                       </a>
//                   </li>
//                   <li>
//                       <a href="/#/logout">
//                           Logout
//                       </a>
//                   </li>

//               </ul>
//           </div>
//       </div>
//   </nav>
// </div>
// `
// )
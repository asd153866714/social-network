document.addEventListener('DOMContentLoaded', function () {


    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {
        alignment: "right",
        coverTrigger: false,
        constrainWidth: false,
    });

});

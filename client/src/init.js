document.addEventListener('DOMContentLoaded', function () {

    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {
        alignment: "right",
        coverTrigger: false,
        constrainWidth: false,
    });

    var el = document.querySelector('.tabs');
    var instance = M.Tabs.init(el);

    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {

  var buttons = document.querySelectorAll('.menu-button');
  var active = ('menuitem-is-open');

  function closeMenus() {
    for (var i = 0; i < buttons.length; i++) {

      var button = buttons[i];
      var menuId = button.getAttribute('aria-controls');
      var menu = document.getElementById(menuId);
      var state = menu.getAttribute('aria-hidden');

      if (state == 'false') {
        menu.setAttribute('aria-hidden', 'true');
        button.parentNode.classList.remove(active);
        menu.addEventListener('mousemove', function () {hide(menu)};
      }
    }
  }



  function openMenu(event) {

    var button = event.target;
    var menuId = button.getAttribute('aria-controls');
    var menu = document.getElementById(menuId);
    var state = menu.getAttribute('aria-hidden');

    if (state == 'false') {
      menu.setAttribute('aria-hidden', 'true');
      button.parentNode.classList.remove(active);
    } else {
      closeMenus();

      menu.setAttribute('aria-hidden', 'false');
      button.parentNode.classList.add(active);
    }
  }

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', openMenu);
  }

});

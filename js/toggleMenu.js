(function ($, Drupal) {
  Drupal.behaviors.tabs = {
    attach: function (context, settings) {
      if (context !== document) {
        return;
      }
      const toggler = document.querySelector(".menu-toggler__icon");
      const menu = document.querySelector("ul.menu");
      toggler.addEventListener('click', toggleMenu);
      function toggleMenu() {
        menu.classList.toggle("show");
        if (menu.classList.contains("show")) {
          menu.classList.remove("opacity0");
          menu.classList.remove("toggleUp");
        } else {
          menu.classList.add("toggleUp")
          setTimeout(() => {
            menu.classList.add("opacity0")
          }, 500);
        }
      }
    }
  };
})(jQuery, Drupal);




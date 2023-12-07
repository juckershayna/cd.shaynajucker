// script.js

// Funktion, um das Burger-Menü zu öffnen oder zu schließen
function toggleMenu() {
  var menu = document.querySelector('#burgerMenu');
  var nav = document.querySelector('.burger-nav');

  // Überprüfen, ob das Menü geöffnet ist
  if (menu.classList.contains('change')) {
    // Menü schließen
    menu.classList.remove('change');
    nav.style.display = 'none';
  } else {
    // Menü öffnen
    menu.classList.add('change');
    nav.style.display = 'block';
  }
}

// Füge Event Listener zum Burger-Icon hinzu
var burgerMenu = document.querySelector('.burger-menu');
burgerMenu.addEventListener('click', toggleMenu);

// Füge Event Listener zu jedem Menüpunkt im Burger-Menü hinzu
var burgerNavItems = document.querySelectorAll('.burger-nav a');

burgerNavItems.forEach(function (item) {
  item.addEventListener('click', toggleMenu);
});


// Farbpalette bei klick kopiert
document.addEventListener('DOMContentLoaded', function () {
  var colorCodes = ["#212125", "#88898b", "#f0f0f0", "#c4b69f", "#715c4c"];
  var colorPalette = document.getElementById('colorPalette');

  colorCodes.forEach(function (code) {
      var div = document.createElement('div');
      div.className = 'color-box';
      div.style.backgroundColor = code;
      colorPalette.appendChild(div);
  });

  colorPalette.addEventListener('click', function (e) {
      if (e.target.classList.contains('color-box')) {
          copyToClipboard(e.target.style.backgroundColor);
          alert('Farbcode kopiert: ' + e.target.style.backgroundColor);
      }
  });

  function copyToClipboard(text) {
      var dummy = document.createElement("textarea");
      document.body.appendChild(dummy);
      dummy.value = text;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
  }
});


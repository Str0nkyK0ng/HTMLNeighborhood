let mainContent = document.getElementById('mainContent');

let hoverContent = document.getElementById('hoverContent');
let hoverText = document.getElementById('hoverDescription');
let hoverImage = document.getElementById('hoverImg');

// read from houses.json
fetch('houses.json')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((house) => {
      createHome(house.name, house.href, house.description);
    });
  })
  .catch((error) => console.error('Error loading houses:', error));

function createHome(name, href, description) {
  var div = document.createElement('div');
  div.id = 'house';
  div.className = 'house';
  mainContent.appendChild(div);

  var a = document.createElement('a');
  a.href = href;
  div.appendChild(a);

  var p = document.createElement('p');
  p.innerHTML = `
_|=|__________
/              \\
/                \\
/__________________\\
||  || /--\\ ||  ||
||[]|| | .| ||[]||
()||__||_|__|_||__||()
( )|-|-|-|====|-|-|-| 
^^^^^^^^^^====^^^^^^^^`;

  var h2 = document.createElement('h2');
  h2.innerHTML = name;

  a.appendChild(p);
  a.appendChild(h2);

  // on hover over the house, show the hoverContent
  a.onmouseover = function (event) {
    hoverHome(href, description, event);
  };
  a.onmouseout = function () {
    hoverContent.style.display = 'none';
  };
  hoverContent.style.display = 'none';
}

function hoverHome(src, description, event) {
  hoverImage.src = src;
  hoverText.innerHTML = description;
  // change the display from none to block
  hoverContent.style.display = '';

  const padding = 10;
  const hoverRect = hoverContent.getBoundingClientRect();
  const pageWidth = window.innerWidth;
  const pageHeight = window.innerHeight;

  let x = event.clientX + padding;
  let y = event.clientY + padding;

  // Clamp horizontally
  if (x + hoverRect.width > pageWidth) {
    x = pageWidth - hoverRect.width - padding;
    if (x < 0) x = 0;
  }

  // Clamp vertically
  if (y + hoverRect.height > pageHeight) {
    y = pageHeight - hoverRect.height - padding;
    if (y < 0) y = 0;
  }

  hoverContent.style.position = 'fixed';
  hoverContent.style.left = `${x}px`;
  hoverContent.style.top = `${y}px`;
}

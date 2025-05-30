let mainContent = document.getElementById('mainContent');

// read from houses.json
fetch('houses.json')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((house) => {
      createHome(house.name, house.href);
    });
  })
  .catch((error) => console.error('Error loading houses:', error));

function createHome(name, href) {
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
}

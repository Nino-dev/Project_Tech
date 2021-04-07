const test =  document.querySelector('.test');

test.addEventListener('click', loadXMLDoc);

const pTag = document.querySelector('.content');

function loadXMLDoc(e) {
  e.preventDefault();
  console.log("update");
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "public/xml.txt", true);
  xhttp.onload = function () {
    pTag.innerHTML = xhttp.response;
    console.log(xhttp.response);
  };
  xhttp.send();
}

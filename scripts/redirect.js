let url = document.querySelector('meta[name="redirect"]').getAttribute('content');
let request = new XMLHttpRequest();
request.open("HEAD", url, true);
request.timeout = 2000;
request.onload = () => window.location = url;
request.ontimeout = () => window.location = 'index.html';
request.onerror = () => window.location = 'index.html';
request.send();
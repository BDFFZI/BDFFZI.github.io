let url = document.querySelector('meta[name="redirect"]').getAttribute('content');
let iframe = document.createElement(`iframe`);
iframe.src = url;
iframe.width = 1920/2;
iframe.height = 1080;
document.body.appendChild(iframe);
// let loading = document.getElementById('loading');
// loading.style.display = 'block'

// let url = document.querySelector('meta[name="redirect"]').getAttribute('content');
// let request = new XMLHttpRequest();
// request.open("HEAD", url, true);
// request.timeout = 2000;
// request.onload = () => OnSucceeded();
// request.ontimeout = () => OnFailed();
// request.onerror = () => OnFailed();
// request.send();

// function OnFailed()
// {
//     loading.style.display = 'none'

//     let text = document.createElement('span')
//     text.textContent = '加载失败';
//     document.body.appendChild(text)
// }

// function OnSucceeded()
// {
//     loading.style.display = 'none'

//     let iframe = document.createElement(`iframe`);
//     iframe.src = url;
//     iframe.width = 1920/2;
//     iframe.height = 1080;
//     document.body.appendChild(iframe);
// }
let loading = document.getElementById('loading');
loading.style.display = 'block'

let url = document.querySelector('meta[name="redirect"]').getAttribute('content');
let request = new XMLHttpRequest();
request.open("HEAD", url, true);
request.timeout = 2000;
request.onload = () => window.location = url;
request.ontimeout = () => OnFailed();
request.onerror = () => OnFailed();
request.send();

function OnFailed()
{
    loading.style.display = 'none'

    let text = document.createElement('span')
    text.textContent = '加载失败';
    document.body.appendChild(text)
}
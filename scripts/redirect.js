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
    let loading = document.getElementById('loading');
    let text = document.createElement('span')
    loading.appendChild(text)

    text.textContent = '加载失败';
}
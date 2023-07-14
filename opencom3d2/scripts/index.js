// 创建WebSocket对象
const socket = new WebSocket('ws://127.0.0.1:8080');

// 连接成功时的回调函数
socket.onopen = function () {
    console.log('WebSocket connection established.');

    // 发送消息
    socket.send('成功了');
};

// 接收到消息时的回调函数
socket.onmessage = function (event) {
    // 处理接收到的消息
    const message = event.data;
    console.log('Received message:', message);
};

// 连接关闭时的回调函数
socket.onclose = function (event) {
    // 处理连接关闭事件
    console.log('WebSocket connection closed:', event.code, event.reason);
};
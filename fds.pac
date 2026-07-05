// 这是一行单行注释，系统不会执行它
function FindProxyForURL(url, host) {
    // 检查是否是本地局域网地址
    if (isInNet(host, "192.168.0.0", "255.255.0.0")) {
        return "DIRECT"; // 局域网直接连接
    }
    return "PROXY 127.0.0.1:8080";
}
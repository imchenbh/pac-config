function FindProxyForURL(url, host) {
    // 转换为小写以便匹配
    host = host.toLowerCase();

    // 匹配 Google 翻译相关的常用 API 和域名
    if (
        dnsDomainIs(host, "translate.googleapis.com") ||      // 核心 Translate API
        dnsDomainIs(host, "translate-pa.googleapis.com")
    ) {
        // 【情况 A】如果你的 40000 端口是 HTTP / HTTPS 代理：
        return "PROXY 127.0.0.1:40000; DIRECT";

        // 【情况 B】如果你的 40000 端口是 SOCKS5 代理，请注释上一行并启用下面这行：
        // return "SOCKS5 127.0.0.1:40000; SOCKS 127.0.0.1:40000; DIRECT";
    }

    // 其余所有请求直接连接（不走代理）
    return "DIRECT";
}

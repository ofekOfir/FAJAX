class FAJAX {
    open(method, url) {
        this.method = method;
        this.url = url;
    }

    send(obj = {}) {
        this.data = obj;
        this.response = server.serving(this.method, this.url);
        return this.onload();
    }
}
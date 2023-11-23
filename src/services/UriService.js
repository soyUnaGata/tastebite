class UrlService {
    pushToHistory(url){
        window.history.pushState(null, document.title, url)
    }

    getWithParam(name, value){
        const params = new URLSearchParams(location.search)
        params.set(name, value);
        return`${location.pathname}?${params.toString()}`
    }

    getParam(key){
        return new URLSearchParams(location.search).get(key);
    }
}


export default new UrlService();
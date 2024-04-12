(function (w, d) {
    w['KKTracer'] = () => {
        const data = {}; try { data['url'] = window.location.href; } catch (e) { console.error(e); }
        try {
            if (d.referrer && !d.referrer.startsWith(w.location.origin))
                data['ref'] = new URL(d.referrer).hostname;
        } catch (e) { console.error(e); }
        try { return fetch('/tracer/server/event', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data), }).then(r => r.status, e => String(e)).then(r => console.log(data, r)); } catch (e) { console.error(e); }
    }; return KKTracer();
})(window, document);
(function (document: any) {
    var contarinEl = document.createElement('div')
    var hEl = document.createElement('h2')
    var pEl = document.createElement('p')
    var style: Record<string, string> = {
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '999',
        width: '100%',
        padding: '24px 0',
        margin: '0',
        lineHeight: '1.5',
        fontSize: '14px',
        color: '#666',
        backgroundColor: '#fff9cc',
        textAlign: 'center',
        boxShadow: '0 1px 5px rgba(0,0,0,0.1)'
    }
    var hStyle: Record<string, string> = {
        padding: '0',
        margin: '0',
        lineHeight: '1.2',
        fontSize: '24px',
        fontWeight: '700',
        color: '#000',
    }
    for (var key in style) {
        contarinEl.style[key] = style[key]
    }
    for (var key in hStyle) {
        hEl[key] = hStyle[key]
    }
    // todo: i18n
    // todo: add browser info
    hEl.innerText = 'Your browser is out of date.'
    pEl.innerHTML = 'Aleph.js requires <a href="https://caniuse.com/es6-module" style="font-weight:500;color:#000;">ES module</a> support during development.'
    contarinEl.appendChild(hEl)
    contarinEl.appendChild(pEl)
    document.body.appendChild(contarinEl)
})((window as any).document)

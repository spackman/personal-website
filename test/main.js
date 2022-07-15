alert('the page read the javascript');

class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <h1>
            THIS IS FROM A SHARED FILE
        </h1>
        `
    }
};

customElements.define('my-header', MyHeader);

alert('the page read the javascript2');

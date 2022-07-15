class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="footer-container">
            <div class="footer-left">
                <div class="footer-table">
                    updated June 2022 &emsp;|
                </div>
                <div class="footer-table">
                    <a href="https://www.linkedin.com/in/isaacspackman"> 
                        www.linkedin.com/in/isaacspackman
                    </a>
                </div>
            </div>
            <div class="footer-right">
                <div class="footer-table">
                    <img onclick="location.href='https://www.linkedin.com/in/isaacspackman';", style="cursor: pointer;", class="footer-img" src="images/linkedinlogo.png"alt="linkedinlogo">
                </div>
                <div class="footer-table">
                    <img class="footer-img" src="images/pnnlgreenlogo.png"alt="PNNL sustainability">
                </div>
            </div>
        </div>
        `
    }
};

customElements.define('my-footer', MyFooter);


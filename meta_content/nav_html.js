alert('the page read the javascript');

class HeaderNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <ul class="gnav">
                <li>
                    <a href="overview.html">Overview  </a>
                </li>
                <li>
                    <a href="climate&energy.html">Climate & Energy  </a>
                    <div class="drop-down">
                        <div class="nav-column">
                            <h3>Climate Modeling</h3>
                            <ul>
                                <li><a href="#">Pampers Diapers</a></li>
                                <li><a href="#">Huggies Diapers</a></li>
                                <li><a href="#">Seventh Generation</a></li>
                            </ul>
                        </div>
                    
                        <div class="nav-column">
                            <h3>Carbon Accounting</h3>
                            <ul>
                                <li><a href="#">Driving shoes</a></li>
                                <li><a href="#">Espadrilles</a></li>
                                <li><a href="#">Loafers</a></li>
                            </ul>
                        </div>
                        <div class="nav-column">
                            <h3>Climate Policy</h3>
                            <ul>
                                <li><a href="#">Driving shoes</a></li>
                                <li><a href="#">Espadrilles</a></li>
                                <li><a href="#">Loafers</a></li>
                            </ul>
                        </div>
        
                        <div class="nav-column">
                            <h3>Highlighting Energy Research</h3>
                            <ul>
                                <li><a href="#">Power Generation</a></li>
                                <li><a href="#">Power Storage</a></li>
                                <li><a href="#">Modeling Plants</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="#">Instrumentation  </a>
                    <div class="drop-down">
                        <div class="nav-column">
                            <h3>Spectroscopy</h3>
                            <ul>
                                <li><a href="#">UV/Visible Spectroscopy</a></li>
                                <li><a href="#">IR Spectroscopy</a></li>
                                <li><a href="#">Raman Spectroscopy</a></li>
                                <li><a href="#">NMR Spectroscopy</a></li>
                            </ul>
                        </div>
                    
                        <div class="nav-column">
                            <h3>Microscopy</h3>
                            <ul>
                                <li><a href="#">Visible Microscopy</a></li>
                                <li><a href="#">Confocal Microscopy</a></li>
                            </ul>
        
                            <h3>Separations</h3>
                            <ul>
                                <li><a href="#">Gas Chromatography</a></li>
                                <li><a href="#">Liquid Chromatography</a></li>
                                <li><a href="#">Field Flow Fractionation</a></li>
                            </ul>
                        </div>
        
                        <div class="nav-column">
                            <h3>Mechanical</h3>
                            <ul>
                                <li><a href="#">Strain Gauges</a></li>
                                <li><a href="#">Huggies Diapers</a></li>
                            </ul>
                            <h3>Electrical</h3>
                            <ul>
                                <li><a href="#">Oscilloscope</a></li>
                                <li><a href="#">Potentiostat</a></li>
                            </ul>
                        </div>
                        <div class="nav-column">
                            <h3>Miscellaneous</h3>
                            <ul>
                                <li><a href="#">Nodal Geophone</a></li>
                                <li><a href="#">Turbidimeter</a></li>
                                <li><a href="#">Radio Telescope</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="#">Lab Equipment  </a>
                    <div class="drop-down">
                        <div class="nav-column">
                            <h3>Autosampler</h3>
                            <ul>
                                <li><a href="#">Pampers Diapers</a></li>
                                <li><a href="#">Huggies Diapers</a></li>
                                <li><a href="#">Seventh Generation</a></li>
                            </ul>
                        </div>
                    
                        <div class="nav-column">
                            <h3>Autotitrator</h3>
                            <ul>
                                <li><a href="#">Driving shoes</a></li>
                                <li><a href="#">Espadrilles</a></li>
                                <li><a href="#">Loafers</a></li>
                            </ul>
        
                            <h3>Product Collection</h3>
                            <ul>
                                <li><a href="#">Driving shoes</a></li>
                                <li><a href="#">Espadrilles</a></li>
                                <li><a href="#">Loafers</a></li>
                            </ul>
                        </div>
        
                        <div class="nav-column">
                            <h3>Reactor</h3>
                            <ul>
                                <li><a href="#">Pampers Diapers</a></li>
                                <li><a href="#">Huggies Diapers</a></li>
                            </ul>
                            <h3>Gantry</h3>
                            <ul>
                                <li><a href="#">Pampers Diapers</a></li>
                                <li><a href="#">Huggies Diapers</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="#">Computational Studies  </a>
                    <div class="drop-down">
                        <div class="nav-column">
                            <h3>Miscibility and Solvation</h3>
                            <ul>
                                <li><a href="#">Pampers Diapers</a></li>
                                <li><a href="#">Huggies Diapers</a></li>
                                <li><a href="#">Seventh Generation</a></li>
                            </ul>
                        </div>
                    
                        <div class="nav-column">
                            <h3>Reduction Potential and Reversibility</h3>
                            <ul>
                                <li><a href="#">Driving shoes</a></li>
                                <li><a href="#">Espadrilles</a></li>
                                <li><a href="#">Loafers</a></li>
                            </ul>
        
                            <h3>Blind Signal Separation and PERGA</h3>
                            <ul>
                                <li><a href="#">Driving shoes</a></li>
                                <li><a href="#">Espadrilles</a></li>
                                <li><a href="#">Loafers</a></li>
                            </ul>
                        </div>
        
                        <div class="nav-column">
                            <h3>GUI for Open Source Computational Chemistry</h3>
                            <ul>
                                <li><a href="#">Pampers Diapers</a></li>
                                <li><a href="#">Huggies Diapers</a></li>
                            </ul>
                            <h3>Molecular Dynamics and Docking</h3>
                            <ul>
                                <li><a href="#">Pampers Diapers</a></li>
                                <li><a href="#">Huggies Diapers</a></li>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="#">Data Science  </a>
                    <div class="drop-down">
                        <div class="nav-column">
                            <h3>Reinforcement Learning</h3>
                            <ul>
                                <li><a href="#">Pampers Diapers</a></li>
                                <li><a href="#">Huggies Diapers</a></li>
                                <li><a href="#">Seventh Generation</a></li>
                            </ul>
                        </div>
                    
                        <div class="nav-column">
                            <h3>Universal Function Originators</h3>
                            <ul>
                                <li><a href="#">Driving shoes</a></li>
                                <li><a href="#">Espadrilles</a></li>
                                <li><a href="#">Loafers</a></li>
                            </ul>
        
                            <h3>Bootstrapping</h3>
                            <ul>
                                <li><a href="#">Driving shoes</a></li>
                                <li><a href="#">Espadrilles</a></li>
                                <li><a href="#">Loafers</a></li>
                            </ul>
                        </div>
        
                        <div class="nav-column">
                            <h3>Data Sampling</h3>
                            <ul>
                                <li><a href="#">Pampers Diapers</a></li>
                                <li><a href="#">Huggies Diapers</a></li>
                            </ul>
                            <h3>Classification</h3>
                            <ul>
                                <li><a href="#">Pampers Diapers</a></li>
                                <li><a href="#">Huggies Diapers</a></li>
                            </ul>
                        </div>
                        <div class="nav-column">
                            <h3>Visualization and Dashboards</h3>
                            <ul>
                                <li><a href="#">Pampers Diapers</a></li>
                                <li><a href="#">Huggies Diapers</a></li>
                            </ul>
                            <h3>Statisitcal Design of Experiments</h3>
                            <ul>
                                <li><a href="#">Pampers Diapers</a></li>
                                <li><a href="#">Huggies Diapers</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="#">Pyscript  </a>
                    <div class="drop-down">
                        <div class="nav-column">
                            <h3>Home</h3>
                            <ul>
                                <li><a href="#">Pampers Diapers</a></li>
                                <li><a href="#">Huggies Diapers</a></li>
                                <li><a href="#">Seventh Generation</a></li>
                            </ul>
                        </div>
                    
                        <div class="nav-column">
                            <h3>Home</h3>
                            <ul>
                                <li><a href="#">Driving shoes</a></li>
                                <li><a href="#">Espadrilles</a></li>
                                <li><a href="#">Loafers</a></li>
                            </ul>
        
                            <h3>Home</h3>
                            <ul>
                                <li><a href="#">Driving shoes</a></li>
                                <li><a href="#">Espadrilles</a></li>
                                <li><a href="#">Loafers</a></li>
                            </ul>
                        </div>
        
                        <div class="nav-column">
                            <h3>Home</h3>
                            <ul>
                                <li><a href="#">Pampers Diapers</a></li>
                                <li><a href="#">Huggies Diapers</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="#">Miscellaneous  </a>
                    <div class="drop-down">
                        <div class="nav-column">
                            <h3>Fermentation</h3>
                            <ul>
                                <li><a href="#">Pampers Diapers</a></li>
                                <li><a href="#">Huggies Diapers</a></li>
                                <li><a href="#">Seventh Generation</a></li>
                            </ul>
                            <h3>Biomaterials</h3>
                            <ul>
                                <li><a href="#">Driving shoes</a></li>
                                <li><a href="#">Espadrilles</a></li>
                                <li><a href="#">Loafers</a></li>
                            </ul>
                        </div>
                    
                        <div class="nav-column">
                            <h3>Compliant Mechanisms</h3>
                            <ul>
                                <li><a href="#">Driving shoes</a></li>
                                <li><a href="#">Espadrilles</a></li>
                                <li><a href="#">Loafers</a></li>
                            </ul>
                            <h3>Walking Mechanisms</h3>
                            <ul>
                                <li><a href="#">Pampers Diapers</a></li>
                                <li><a href="#">Huggies Diapers</a></li>
                            </ul>
                        </div>
        
                        <div class="nav-column">
                            <h3>Microfluidics</h3>
                            <ul>
                                <li><a href="#">Pampers Diapers</a></li>
                                <li><a href="#">Huggies Diapers</a></li>
                            </ul>
                            <h3>Aquaponics</h3>
                            <ul>
                                <li><a href="#">Pampers Diapers</a></li>
                                <li><a href="#">Huggies Diapers</a></li>
                            </ul>
                        </div>
                        <div class="nav-column">
                            <h3>Multi-threading Computation</h3>
                            <ul>
                                <li><a href="#">Pampers Diapers</a></li>
                                <li><a href="#">Huggies Diapers</a></li>
                            </ul>
                            <h3>Homebrew Styles Machine Learning Classifier</h3>
                            <ul>
                                <li><a href="#">Pampers Diapers</a></li>
                                <li><a href="#">Huggies Diapers</a></li>
                            </ul>
                            <h3>Glassworking</h3>
                            <ul>
                                <li><a href="#">Pampers Diapers</a></li>
                                <li><a href="#">Huggies Diapers</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="about.html">About</a>
                    <div class="drop-down">
                        <div class="nav-column">
                            <h3>Contact</h3>
                            <ul>
                                <li><a href="#">Pampers Diapers</a></li>
                            </ul>
                        </div>
                    
                        <div class="nav-column">
                            <h3>Paper of the Week</h3>
                            <ul>
                                <li><a href="#">Driving shoes</a></li>
                                <li><a href="#">Espadrilles</a></li>
                                <li><a href="#">Loafers</a></li>
                            </ul>
        
                            <h3>Resources</h3>
                            <ul>
                                <li><a href="#">Driving shoes</a></li>
                                <li><a href="#">Espadrilles</a></li>
                                <li><a href="#">Loafers</a></li>
                            </ul>
                        </div>
        
                        <div class="nav-column">
                            <h3>Future Directions</h3>
                            <ul>
                                <li><a href="#">Pampers Diapers</a></li>
                                <li><a href="#">Huggies Diapers</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
        `
    }
};

customElements.define('header-nav', HeaderNav);

alert('the page read the javascript2');

/* Importar Montserrat de Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

/* Reset básico y estilos generales    N O   M O D I F I C A R*/
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.6;
    background-color: #f4d4d4;
}

/* Header y navegación    N O   M O D I F I C A R*/
header {
    background-color: white;
    padding: 10px 50px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: all 0.3s ease;
}

header.scrolled {
    padding: 5px 50px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

.header-left {
    display: flex;
    align-items: center;
    gap: 15px;
}

.home-logo img {
    width: 126px;
    height: 112px;
    object-fit: cover;
    transition: all 0.3s ease;
}

.home-logo img:hover {
    transform: scale(1.05); /* Ligero zoom al pasar el mouse */
    cursor: pointer;
}

header.scrolled .home-logo img {
    width: 100px;
    height: 90px;
}

.brand-name {
    text-decoration: none;
    color: #640505;
    font-size: 1.5rem;
    font-weight: 600;
}

nav ul {
    list-style-type: none;
    display: flex;
    gap: 50px;
}

nav ul li a {
    text-decoration: none;
    color: #640505;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
}

nav ul li a:hover,
nav ul li a.active {
    color: #b21919;
}

nav ul li a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #b21919;
    transition: width 0.3s ease;
}

nav ul li a:hover::after,
nav ul li a.active::after {
    width: 100%;
}

/* Sección Hero */
.hero {
    display: flex;
    justify-content: space-between;
    align-items: start;
    padding: 40px;
    background-color: #f4d4d4;
    gap: 40px;
}

.hero-content {
    flex: 1;
}

.logo-main {
    width: 567px;
    height: 215px;
    display: block;
    margin-bottom: 20px;
}

.hero-image-container {
    flex-shrink: 0;
}

.hero-image {
    width: 567px;
    height: 378px;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease;
}

.hero-image:hover {
    transform: scale(1.02);
}

/* Barra de búsqueda y sus animaciones */
.search-bar {
    background: rgba(255, 255, 255, 0.95);
    padding: 2rem;
    border-radius: 8px;
    max-width: 800px;
    transform: translateY(0);
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.search-bar:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.search-bar h1 {
    color: #640505;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    font-weight: 700;
}

.search-container {
    display: flex;
    gap: 10px;
    align-items: center;
}

.search-container input {
    flex: 1;
    padding: 12px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    min-width: 600px;
    transition: all 0.3s ease;
}

.search-container input:focus {
    outline: none;
    border-color: #ff0000;
    box-shadow: 0 0 5px rgba(255, 0, 0, 0.2);
}

.search-container input.error {
    border: 2px solid #ff0000;
    animation: shake 0.5s linear;
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
}

.search-btn {
    background-color: #ff0000;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    transition: all 0.3s ease;
    text-decoration: none;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
}

.search-btn:hover {
    background-color: #b21919;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(178, 25, 25, 0.3);
}

.search-btn::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.3s ease, height 0.3s ease;
}

.search-btn:hover::after {
    width: 300px;
    height: 300px;
}

/* Estilos anteriores del CSS de FarmaHelper */

/* Variables de color para facilitar la personalización */
:root {
    --main-bg-color: #f4d3d3;
    --secondary-bg-color: #f7f7f7;
    --primary-text-color: #333;
    --secondary-text-color: #000;
    --highlight-color: #ff6347;
    --premium-bg-color: #000;
    --premium-text-color: #fff;
    --free-version-bg-color: #e0e0e0;
}

body {
    background-color: #fff;
    color: var(--primary-text-color);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

header {
    background-color: var(--main-bg-color);
    padding: 20px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.header-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 15px;
}

.header-logo img {
    width: 250px;
    height: auto;
}

.header-title {
    font-size: 2rem;
    text-align: right;
    flex: 1;
    color: var(--secondary-text-color);
    font-weight: bold;
}

.header-nav {
    width: 100%;
    padding-top: 15px;
    display: flex;
    justify-content: center;
    background-color: transparent;
}

.header-nav ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    margin: 0;
    gap: 15px;
}

.header-nav ul li a {
    text-decoration: none;
    color: var(--secondary-text-color);
    transition: color 0.3s ease;
    font-weight: bold;
}

.header-nav ul li a:hover {
    color: var(--highlight-color);
}

main {
    padding: 20px;
    flex: 1;
}

.profile-header {
    background-color: var(--main-bg-color);
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
}

.profile-info {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 25px;
}

.profile-data, .billing-info {
    background-color: var(--secondary-bg-color);
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 0 auto;
}

@media (min-width: 769px) {
    .profile-info {
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .profile-data, .billing-info {
        width: 45%;
    }
}

.profile-data h2, .billing-info h2, .subscription h3 {
    margin-bottom: 10px;
}

.subscription-info {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 25px;
}

.premium {
    background-color: var(--premium-bg-color);
    color: var(--premium-text-color);
    padding: 25px;
    max-width: 600px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
}

.free-version {
    background-color: var(--free-version-bg-color);
    color: var(--primary-text-color);
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    margin: 0 auto;
}

button {
    background-color: var(--main-bg-color);
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    color: var(--primary-text-color);
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: var(--highlight-color);
}

footer {
    background-color: var(--main-bg-color);
    padding: 30px;
    text-align: center;
    width: 100%;
}

footer .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

@media (min-width: 769px) {
    footer .footer-content {
        flex-direction: row;
        justify-content: space-between;
    }
}

footer .footer-content nav ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 20px;
}

footer .footer-content .social-links a {
    margin-right: 10px;
}

footer .footer-content .social-links img {
    width: 30px;
    height: 30px;
    transition: transform 0.3s ease;
}

footer .footer-content .social-links img:hover {
    transform: scale(1.1);
}

/* Añadir un poquito más de estilo al pie de página */
footer .contact-info, footer nav, footer .social-links {
    flex: 1;
    text-align: center;
}

footer .contact-info p {
    margin: 5px 0;
}

footer p {
    margin: 10px 0;
}

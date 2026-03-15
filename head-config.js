const headContent = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no,">
    <meta name="description" content="All-in-One Live TV Channels Indonesia. JuaraVision successor.">
    <meta name="keywords" content="MoonlightBay Plus, MoonlightBay, MoonlightBay Channel, MoonlightBay TV, Live TV Indonesia, Live Radio Player Indonesia">
    <meta property="og:title" content="MoonlightBay Plus">
    <meta property="og:site_name" content="MoonlightBay Plus">
    <meta property="og:description" content="All-in-One Live TV Channels Indonesia. JuaraVision successor.”">
    <meta property="og:image" content="assets/img/Logo.png">
    <meta property="og:url" content="https://moonlightbayapp.github.io/">
    <link rel="canonical" href="https://moonlightbayapp.github.io/" />
    <link rel="icon" type="image/png" href="/favicon.png">
    <link rel="stylesheet" href="/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.cdnfonts.com/css/sf-pro-display" rel="stylesheet">
    <link href='assets/img/Icon%20App.png' rel='apple-touch-icon'/>
    <meta content='yes' name='apple-mobile-web-app-capable'/>
    <meta content='default' name='apple-mobile-web-app-status-bar-style'/>
    <meta content='MoonlightBay Plus' name='apple-mobile-web-app-title'/>
`;

// Suntikkan ke bagian paling atas <head>
document.head.insertAdjacentHTML('afterbegin', headContent);

// --- GOOGLE ANALYTICS (GA4) INJECTION ---
const gaScript = document.createElement('script');
gaScript.async = true;
gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-XS00CDL5GD";
document.head.appendChild(gaScript);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-XS00CDL5GD');

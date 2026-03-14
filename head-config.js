const headContent = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no,">
    <meta name="description" content="All-in-One Live TV Channels Indonesia. JuaraVision successor.">
    <meta property="og:title" loaded="no" content="MoonlightBay Plus">
    <meta property="og:site_name" loaded="no" content="MoonlightBay Plus">
    <meta property="og:description" loaded="no" content="All-in-One Live TV Channels Indonesia. JuaraVision successor.”">
    <meta property="og:image" loaded="no" content="assets/img/Logo.png">
    <link rel="icon" type="image/png" href="/favicon.png">
    <link rel="stylesheet" href="/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
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

$(document).ready(function () {
    document.oncontextmenu = function () { return false; }
    $('#fullpage').fullpage({
        sectionsColor: ['white', 'white', 'white', 'white', 'white'],
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['main', 'introduce', 'story','QRcode', 'practice'],
    });
});

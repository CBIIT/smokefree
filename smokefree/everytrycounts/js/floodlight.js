function makeFloodlightTagCall(value) {
    console.log(value);
    gtag('event', 'conversion', {
        'allow_custom_scripts': true,
        'send_to': value
    });
}
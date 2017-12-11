
jQuery(document).ready(function () {
    jQuery('.appDownloads .ios img').on( "click", function() {
        console.log('Clicked iOS Button');
        makeFloodlightTagCall('DC-4345482/CTP/posev006+standard');
    });
    jQuery('.appDownloads .android img').on( "click", function() {
        console.log('Clicked Android Button');
        makeFloodlightTagCall('DC-4345482/CTP/posev007+standard');
    });

    function makeFloodlightTagCall(value) {
        gtag('event', 'conversion', {
            'allow_custom_scripts': true,
            'send_to': value
        });
    }
});
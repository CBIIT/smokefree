fallback.load({

    jQuery: [
        '//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js',
        'js/jquery-3.2.1.min.js'
    ],

    vue: [
        'https://unpkg.com/vue@2.4.2',
        'js/vuejs/dist/vue.min.js'
    ],

    axios: [
        'https://unpkg.com/axios@0.16.2/dist/axios.min.js',
        'axios/dist/axios.min.js'
    ]
});

fallback.ready(function() {
    alert('suckas!!!');
});
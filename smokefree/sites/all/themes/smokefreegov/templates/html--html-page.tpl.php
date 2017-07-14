<head>
    <?php if ($_SERVER['HTTP_HOST'] != "smokefree.gov" && $_SERVER['HTTP_HOST'] != "www.smokefree.gov") : ?>
        <!-- Google Tag Manager -->
        <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-MKWX85"
                          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MKWX85');</script>
        <!-- End Google Tag Manager -->
    <?php endif; ?>

    <?php if ($_SERVER['HTTP_HOST'] == "smokefree.gov" || $_SERVER['HTTP_HOST'] == "www.smokefree.gov") : ?>
        <meta name="google-site-verification" content="PUSFJOhbNJlL_-NDz0NB49EN2MdclUqhec3d2qQh8iY" />
        
        <!-- Google Tag Manager -->
        <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-55BKGG" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-55BKGG');</script>
        <!-- End Google Tag Manager -->
    <?php endif; ?>

    <?php if(!empty($node->id) && $node->id == 31) : ?>
        <!-- Google Analytics Content Experiment code -->
        <script>function utmx_section(){}function utmx(){}(function(){var
                k='79709729-3',d=document,l=d.location,c=d.cookie;
                if(l.search.indexOf('utm_expid='+k)>0)return;
                function f(n){if(c){var i=c.indexOf(n+'=');if(i>-1){var j=c.
                indexOf(';',i);return escape(c.substring(i+n.length+1,j<0?c.
                    length:j))}}}var x=f('__utmx'),xx=f('__utmxx'),h=l.hash;d.write(
                    '<sc'+'ript src="'+'http'+(l.protocol=='https:'?'s://ssl':
                        '://www')+'.google-analytics.com/ga_exp.js?'+'utmxkey='+k+
                    '&utmx='+(x?x:'')+'&utmxx='+(xx?xx:'')+'&utmxtime='+new Date().
                    valueOf()+(h?'&utmxhash='+escape(h.substr(1)):'')+
                    '" type="text/javascript" charset="utf-8"><\/sc'+'ript>')})();
        </script><script>utmx('url','A/B');</script>
        <!-- End of Google Analytics Content Experiment code -->
    <?php endif; ?>
</head>
<?php print $page; ?>
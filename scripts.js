if (window.jQuery)
    $(document).ready(function () {
        /**
         * More informations
         * URI: http://api.vagalume.com.br/docs/radios/
         */
        var radio = "coca-cola-fm", // Your webradio here
            api_key = ""; // Get key here http://auth.vagalume.com.br/settings/api/

        if (typeof "undefined" != radio
            && typeof "undefined" != api_key) {
            var vagalume = $.getJSON("http://api.vagalume.com.br/radio.php?type=mus&radio=" + radio + "&apikey=" + api_key, {
                _: new Date().getTime() //
            }, function (r) {
                if (r.status == "success" &&
                    typeof "undefined" != r.mus) {
                    /*
                     * Hide Text erro ;)
                     */
                    $(".alert.alert-danger");
                    r.mus = r.mus.reverse();
                    $.each(r.mus, function (i, musica) {
                        /*
                         * @var artist return name artist
                         * @var music return name sound
                         * @object picture return the image medium or small of artist
                         *
                         */
                        var artist = musica.art.name;
                        var music = musica.name;
                        var picture = {
                            medium: musica.art.pic_medium,
                            small: musica.art.pic_medium
                        };

                        /*
                         * Insert music in list.
                         */
                        $(".historyMusic").prepend(
                            '<li class="list-group-item">' + music + ' - ' + artist + '</li>'
                        ).hide().slideDown(1000);
                    });

                    /*
                     * Remove the last music from list
                     */
                    if ($(".historyMusic li").length > 10) {
                        $('.historyMusic li:last-child').slideDown(500, function () {
                            $(this).remove();
                        });
                    }
                } else {
                    $(".alert.alert-danger").text("Ocorreu algum erro!").slideDown();
                }
            });
            /*
             * Check vagalume for two minutes
             * More minutes? Edit the number lower
             * You have questions about "setInterval"? Check here http://www.w3schools.com/jsref/met_win_setinterval.asp
             */
            // setInterval(vagalume, 12E4);
        }
    });
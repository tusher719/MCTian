$('[data-countdown]').each(function () {
    var $deadLine = new Date($(this).data('countdown')).getTime();

    var $dataDays = $(this).children('[data-days]');
    var $dataHours = $(this).children('[data-hours]');
    var $dataMinuts = $(this).children('[data-minuts]');
    var $dataSeconds = $(this).children('[data-seconds]');


    var x = setInterval(function () {
        var now = new Date().getTime();
        var t = $deadLine - now;

        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor(t % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        var minuts = Math.floor(t % (1000 * 60 * 60) / (1000 * 60));
        var seconds = Math.floor(t % (1000 * 60) / (1000));

        $dataDays.html(days);
        $dataHours.html(hours);
        $dataMinuts.html(minuts);
        $dataSeconds.html(seconds);
    }, 1000);
});
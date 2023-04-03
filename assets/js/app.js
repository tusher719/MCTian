$('[data-countdown]').each(function () {                    
    var $dataDays = $(this).find("[data-days]");
    var $dataHours = $(this).find("[data-hours]");
    var $dataMinutes = $(this).find("[data-minutes]");
    var $dataSeconds = $(this).find("[data-seconds]");
  
    var birthdate = new Date($(this).data("countdown"));
    birthdate.setFullYear(new Date().getFullYear());
    var now = new Date().getTime();
    if (birthdate.getTime() < now) {
      birthdate.setFullYear(new Date().getFullYear() + 1);
    }
    var countdown = setInterval(function () {
      var now = new Date().getTime();
      var t = birthdate.getTime() - now;
  
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((t % (1000 * 60)) / 1000);
  
      $dataDays.html(days);
      $dataHours.html(hours);
      $dataMinutes.html(minutes);
      $dataSeconds.html(seconds);
  
      if (t < 0) {
        clearInterval(countdown);
      }
    }, 1000);
  });
  
var tay = new Date();
var courant = new Date();
mois = new Array('Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre');
jours = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
$('#chaine_date').text(sd(tay));
calendrier(tay);


function sd(d) {
    return jours[d.getDay()] + ' le ' + d.getDate() + ' ' + mois[d.getMonth()] + ' ' + (d.getYear() > 200 ? d.getYear() : d.getYear() + 1900);
}

function calendrier(date) {
    var endDate = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();
    var prevDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();
    var com = new Date(
        date.getFullYear(),
        date.getMonth(),
        1
    ).getDay();
    $('#annee').text(date.getYear() > 200 ? date.getYear() : date.getYear() + 1900);
    $('#month').text(mois[date.getMonth()]);

    var monthDays = "";
    if (com == 0) {
        com = 7;
    }
    for (var i = com - 1; i > 0; i--) {
        monthDays += "<div class='pass'>" + (prevDate - i + 1) + "</div>" + "\n"
    }
    for (var i = 1; i <= endDate; i++) {
        if (tay.getYear() === date.getYear() && tay.getMonth() === date.getMonth() && i == tay.getDate()) {
            monthDays += "<div class='today'>" + i + "</div>" + "\n";
        } else {
            monthDays += "<div>" + i + "</div>" + "\n";
        }
    }
    $(".days").html(monthDays);

}

function prev() {
    courant.setMonth(courant.getMonth() - 1);
    calendrier(courant);
}

function suivant() {
    courant.setMonth(courant.getMonth() + 1);
    calendrier(courant);
}

function time() {
    var date = new Date();
    var h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds();
    h = h == 0 ? 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    var d = h + ":" + m + ":" + s;
    $("#heur").text(d);
    setTimeout(time, 1000);
}
time();
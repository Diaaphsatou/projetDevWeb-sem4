var exp = '',
    shiftv = false,
    majv = false,
    curseur = [1, 1],
    curseurtp,
    altgr = false;
var saisi = $('#saisi')[0];
saisi.focus();
//$('.altgrv').css('display', 'none');
reg();

function DC(a) {
    $('#saisi').caret(a);
}

function insertCar(low, up, altg) {
    curseurtp = saisi.selectionStart;
    if (low == 1) {
        low = '"';
    } else if (low == 2) {
        low = '\'';
    }
    exp = saisi.value;
    var altg = altg || '';
    if (altgr) {
        exp = exp.slice(0, saisi.selectionStart) + altg + exp.slice(saisi.selectionStart, exp.length);

    } else if ((shiftv || majv) && !(shiftv && majv)) {
        exp = exp.slice(0, saisi.selectionStart) + up + exp.slice(saisi.selectionStart, exp.length);

    } else {
        exp = exp.slice(0, saisi.selectionStart) + low + exp.slice(saisi.selectionStart, exp.length);
    }
    saisi.value = exp;
    altgr = false;
    shiftv = false;
    if (low == '\n') {
        curseur[0]++;
    } else {
        curseur[1]++;
    }


    DC(curseurtp + 1);
    saisi.focus();
    reg();
    colorer();
}

function shift() {
    if (shiftv) {
        shiftv = false;
    } else {
        shiftv = true;
    }
    reg();
    colorer();
}

function altGr() {
    if (altgr) {
        altgr = false;
    } else {
        altgr = true;
    }
    reg();
    colorer();
}

function maju() {
    if (majv) {
        majv = false;
    } else {
        majv = true;
    }
    reg();
    colorer();
}

function bas() {
    var press = jQuery.Event("keypress");
    press.ctrlKey = false;
    press.which = 13;
    $(this).trigger(press);
    // jQuery.event.trigger({ type: 'keydown', which: 77 });
}

function haut() {

}

function gauche() {
    curseurtp = saisi.selectionStart;
    DC(curseurtp - 1);

}

function droite() {
    curseurtp = saisi.selectionStart;
    DC(curseurtp + 1);

}

function back() {
    exp = saisi.value;
    curseurtp = saisi.selectionStart;
    exp = exp.slice(0, saisi.selectionStart - 1) + exp.slice(saisi.selectionStart, exp.length);
    saisi.value = exp;
    DC(curseurtp - 1);
    saisi.focus();

}

function echap() {
    curseurtp = 1;
    exp = '';
    saisi.value = exp;
    saisi.focus();
}

function ajou(link) {
    var linklen = link.length;
    var cursorPos = $("#saisi").prop('selectionStart');
    var v = $("#saisi").val();
    var textBefore = v.substring(0, cursorPos);
    var textAfter = v.substring(cursorPos, v.length);
    $("#saisi").val(textBefore + link + textAfter);
    $("#saisi").prop('selectionEnd', cursorPos + linklen);
    $("#saisi").focus();
}

function colorer() {
    if (shiftv) {
        $(".sh").css("background", "rgba(0,0,1,0.1)");
    } else {
        $(".sh").css("background", "#fff");
    }
    if (majv) {
        $("#clin").css("background", "rgba(0,0,1,0.1)");
    } else {
        $("#clin").css("background", "#fff");
    }
    if (altgr) {
        $("#rs").css("background", "rgba(0,0,1,0.1)");
    } else {
        $("#rs").css("background", "#fff");
    }
}

function reg() {
    if (shiftv) {
        if (majv) {
            if (altgr) {
                $('.nonaltgrv').css('opacity', '0');
                $('.altgrv').css({ 'display': 'inline', 'opacity': '1' });
            } else {
                $('.lettre').css('opacity', '1');
                $('.altgrv').css({ 'display': 'none' });
                $('.maj').css('opacity', '0.5');
                $('.nonmaj').css('opacity', '1');
                $('.lettre').css('textTransform', 'lowercase');
            }
        } else {
            if (altgr) {
                $('.nonaltgrv').css('opacity', '0');
                $('.altgrv').css({ 'display': 'inline', 'opacity': '1' });
            } else {
                $('.lettre').css('opacity', '1');
                $('.altgrv').css({ 'display': 'none' });
                $('.maj').css('opacity', '1');
                $('.nonmaj').css('opacity', '0.5');
                $('.lettre').css('textTransform', 'uppercase');
            }


        }
    } else {
        if (majv) {
            if (altgr) {
                $('.nonaltgrv').css('opacity', '0');
                $('.altgrv').css({ 'display': 'inline', 'opacity': '1' });
            } else {
                $('.altgrv').css({ 'display': 'none' });
                $('.lettre').css('opacity', '1');
                $('.maj').css('opacity', '1');
                $('.nonmaj').css('opacity', '0.5');
                $('.lettre').css('textTransform', 'uppercase');
            }

        } else {
            if (altgr) {
                $('.nonaltgrv').css('opacity', '0');
                $('.altgrv').css({ 'display': 'inline', 'opacity': '1' });
            } else {
                $('.lettre').css('opacity', '1');
                $('.altgrv').css({ 'display': 'none' });
                $('.maj').css('opacity', '0.5');
                $('.nonmaj').css('opacity', '1');
                $('.lettre').css('textTransform', 'lowercase');
            }

        }
    }
}
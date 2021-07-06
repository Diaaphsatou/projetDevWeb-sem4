var exp = '0',
    number, decimal, egal, operateur, permissionSR = true,
    symbo,
    scie = false;
var ecran = $('#ecran')[0];
ecran.value = exp;

function inserNo(no) {
    if (egal) {
        exp = no;
        ecran.value = exp;
        number = true;
        egal = false;

    } else {
        if (exp == '0') {
            ecran.value = '';
            exp = '';
        }
        exp = ecran.value + no;
        ecran.value = exp;
        number = true;
    }
    if (operateur) decimal = false;
}

function inserOperation(op) {
    symbol();
    if (symbo) {
        ecran.value = exp + op;
        egal = false;
        permissionSR = false;
        SR('a');

    }

}

function des() {
    if (number && !decimal) {
        ecran.value = exp + '.';
        decimal = true;
        operateur = false;

    }
}

function factorielle(n) {
    if (n < 0) {
        alert("Veuillez Saisir Un Entier Positif ou null");
        return "### Erreur ###";
    } else {
        if (n == 0) {
            return 1;
        } else {
            return n * factorielle(n - 1);
        }
    }
}

function egalA() {
    if (exp) {
        exp = eval(exp);
        ecran.value = exp;
        egal = true;
        decimal = false;
        number = false;
        permissionSR = true;
        SR('a');

    }
}

function sup() {
    exp = '0';
    ecran.value = exp;
    decimal = false;

}

function effacer() {
    exp = ecran.value;
    exp = exp.substring(0, exp.length - 1);
    if (exp == '') {
        exp = '0';
    }
    ecran.value = exp;

}

function symbol() {
    if (exp[exp.length - 1] != '/' && exp[exp.length - 1] != '-' && exp[exp.length - 1] != '*' && exp[exp.length - 1] != '+' &&
        exp[exp.length - 1] != '%') {
        symbo = true;
    } else {
        symbo = false;
    }
}

function SR(x) {
    exp = ecran.value;
    if (x == 'ra') {
        exp = Math.sqrt(exp);
        ecran.value = exp;
    } else if (x == 'ca') {
        exp = exp * exp;
        ecran.value = exp;
    } else if (x == 'lo') {
        exp = Math.log10(exp);
        ecran.value = exp;
    } else if (x == 'ln') {
        exp = Math.log(exp);
        ecran.value = exp;
    } else if (x == 'co') {
        exp = Math.cos(exp);
        ecran.value = exp;
    } else if (x == 'si') {
        exp = Math.sin(exp);
        ecran.value = exp;
    } else if (x == 'ta') {
        exp = Math.tan(exp);
        ecran.value = exp;
    } else if (x == 'fa') {
        exp = factorielle(Math.floor(exp));
        ecran.value = exp;
    } else if (x == 'ex') {
        exp = Math.exp(exp);
        ecran.value = exp;
    } else if (x == 'a' && permissionSR) {
        var op = $('.op');
        for (var i = 0; i < op.length; i++) {
            op[i].desabled = false;
        }

    } else if (!permissionSR) {
        var op = $('.op');
        for (var i = 0; i < op.length; i++) {
            op[i].desabled = true;
        }
    }


}

function sci() {
    $(".fonction").slideToggle(1000);

}
$("#calc").css({ "fontWeight": "bold", "color": " #2ecc71" });

function distribuer(x) {
    if (x == 'a') {
        $("#calc").css({ "fontWeight": "bold", "color": " #2ecc71" });
        $("#clav,#cale").css({ "fontWeight": "normal", "color": "black" });
        $("#cal").show();
        $("#wrapper,#w").hide();

    } else if (x == 'b') {
        $("#clav").css({ "fontWeight": "bold", "color": " #2ecc71" });
        $("#calc,#cale").css({ "fontWeight": "normal", "color": "black" });
        $("#w").show();
        $("#wrapper,#cal").hide();

    } else if (x == 'c') {
        $("#cale").css({ "fontWeight": "bold", "color": " #2ecc71" });
        $("#clav,#calc").css({ "fontWeight": "normal", "color": "black" });
        $("#wrapper").show();
        $("#cal,#w").hide();

    }
}
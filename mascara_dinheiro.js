$(document).on("input", ".mascara_dinheiro", function() {
    var value = $(this).val().replace(/\D/g, '');
    if(value.length > 2){
        value = value.substring(0, value.length - 2) + '.' + value.substring(value.length - 2);
    }
    var formattedValue = 'R$ ' + addCommas(value);
    $(this).val(formattedValue);
});
$(document).on("blur", ".mascara_dinheiro", function() {
    var valor = $(this).val();
    if (valor.indexOf(',') === -1) {
        valor += ',00';
        $(this).val(valor);
    }
});

function addCommas(nStr){
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? ',' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + x2;
}
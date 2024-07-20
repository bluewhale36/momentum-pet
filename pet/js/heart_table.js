//모든 체크박스 상태 한번에 변경
$('#allchk').on('click', () => {
    let status = $('#allchk').is(':checked');
    $('.chkbox').prop('checked', status);
});

//체크박스 체크 여부 확인하여 상태 변경
$('.chkbox').on('click', () => { checked(); });

function checked() {
    let chkbox = $('.chkbox');
    let chkcnt = 0;
    for (var i = 0; i < chkbox.length; i++) {
        if (chkbox.eq(i).is(':checked')) { chkcnt++; }
    }
    if (chkcnt == chkbox.length) {
        $('#allchk').prop('checked', true);
    } else {
        $('#allchk').prop('checked', false);
    }
}
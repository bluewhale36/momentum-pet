const applyData = $('#info td :not(input[type=button], input[type=email]');

$('#idchk').on('click', function () {
    $('#idchkval').val(2);
});

$('#postcodechk').on('click', function () {
    $('#postcodechkval').val(2);
})

$('#prevbtn').on('click', function () {
    if (confirm('진행상황이 저장되지 않습니다. 이전 페이지로 돌아가시겠습니까?')) {
        $(location).attr('href', 'signin.html');
    }
})

$('#nextbtn').on('click', function () { erase(); validation(); });

function erase() {
    $('#info caption').css('visibility', 'hidden');
    $('#info caption').html('caution<br>message<br>test');
}

function validation() {
    let cnt = 0;
    $.each(applyData, function (i, item) {
        if (item.value.length != 0) {
            let spCnt = 0;
            for (let j = 0; j < item.value.length; j++) {
                if (item.value.charAt(j) == ' ') { spCnt++; }
            }
            if (item.value.length != spCnt) { cnt++; }
        }
    });
    let numValid = /^[0-9]*$/;
    let idnumtext = $('#idnumtext').val();
    let teltext = $('#teltext').val();
    let postcodetext = $('#postcodetext').val();
    if (numValid.test(idnumtext) && numValid.test(teltext) && numValid.test(postcodetext)) { cnt++; }
    console.log(cnt);
    if (cnt == 10 && $('#idchkval').val() == 2 && $('#postcodechkval').val() == 2) {
        $(location).attr('href', 'signin_complete.html');
    } else {
        $('#info caption').css('visibility', 'visible');
        $('#info caption').html('입력되지 않거나 공백으로 입력된 항목이 존재합니다.<br>또는 주민등록번호, 전화번호, 우편번호가 숫자로만 이루어지지 않았거나<br>우편번호 및 아이디 중복을 확인하지 않았습니다.')
    }
}
/* 추가되는 입력란이 없으므로 const 자료형 사용하여 변수 선언 */
const applyData = $('#application input[type=text]');
const applyRadioData = $('#application input[type=radio]');

$('td input[type=button]').on('click', function () { erase(); validation(); });
$('td input[type=reset]').on('click', function () { erase(); });

function erase() {
    for (let i = 0; i < applyData.length; i++) {
        /* 입력란의 css 기존 상태로 초기화 */
        applyData.eq(i).css('border', '1px solid gray');
    }
    /* caption 태그의 css 기존 상태로 초기화 */
    $('table caption').css('visibility', 'hidden');
    $('table caption').text('caution message');
}

/* 유효성 검사 함수. 입력 값이 없거나, 입력 값이 공백으로만 이루어졌거나, 전화번호 입력 값에 숫자 제외 문자가 있을 경우 재입력 유도. */
function validation() {
    let flag = false;
    let cnt = 0;
    $.each(applyData, function (i, item) {
        if (item.value.length != 0) { /* 입력 값이 있을 경우 */
            let spCnt = 0; /* 입력 값의 공백 개수 저장 위해 변수 spCnt 선언. */
            for (let j = 0; j < item.value.length; j++) {
                if (item.value.charAt(j) == " ") { spCnt++; }
            }
            if (spCnt != item.value.length) {
                cnt++;
            }
        }
    });
    let telValid = /^[0-9]*$/; /* 전화번호 입력란에 대한 유효성 검사 위해 정규식 사용 (숫자만 입력 가능) */
    if (telValid.test($('#teltext').val())) { /* 전화번호 입력란 값의 정규식 만족 여부 확인 위해 test() 함수 사용 */
        cnt++;
        $.each(applyRadioData, function (i, item) {
            if (item.checked) {
                cnt++;
            }
        });
    }
    if (cnt == 9) {
        $('form').submit(); /* 유효성을 모두 만족할 경우 submit()함수를 통해 form 태그 내의 데이터 전송 */
    } else {
        $('table caption').css('visibility', 'visible');
        $('table caption').text('입력되지 않거나 공백으로 입력된 항목이 존재합니다. 또는 전화번호가 숫자로만 이루어지지 않았습니다.');
    }
}
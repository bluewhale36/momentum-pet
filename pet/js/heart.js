$(document).ready(()=>{
    $('#table').load('heart_table.html')
});

//삭제 버튼 누를 시 체크한 행 삭제
$('#delbtn').on('click', () => { delrow(); });

function delrow() {
    let chkbox = $('.chkbox');
    for (var i = 0; i < chkbox.length; i++) {
        if (chkbox.eq(i).is(':checked')) { chkbox.eq(i).closest('tr').remove(); }
    }
}
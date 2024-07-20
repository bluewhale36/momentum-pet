let addedInfo = new Array();
let hearttable;

$(document).ready(function () {
    hearttable = $('#heart_middle').load('heart_table.html');
});

$('.heart_btn').on('click', function () {
    let td = $(this).closest('tr').children('td');
    let chkbox = '<td><input type="checkbox" name="chk" class="chkbox"></td>'
    let name = '<td>'+td.eq(1).text()+'</td>';
    let kind = '<td>'+td.eq(2).text()+'</td>';
    let curdate = new Date();
    let date = '<td>'+curdate.toLocaleDateString()+'</td>';
    let img = '<td class="td_img">'+td.eq(3).html()+'</td>'; // 검색된 반려견 사진
    let hearttable = $('#heart_table');
    let appendtext = '<tr>'+chkbox+name+kind+date+img+'</tr>';
    hearttable.append(appendtext);
    addedInfo.push(appendtext);
    $(this).closest('tr').remove();
});
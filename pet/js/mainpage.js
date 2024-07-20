let photos = $('img');
photos.css('display','none');
let photoIdx = 0;
photos.eq(0).css('display', 'inline');

$('#login').on('click', function() {
    $('body').load('login.html');
});

$('#left').on('click', () => {
    photos.eq(photoIdx).css('display', 'none');
    if (photoIdx == 0) {
        photoIdx = photos.length - 1;
    } else {
        photoIdx--;
    }
    photos.eq(photoIdx).css('display', 'inline');
});

$('#right').on('click', () => {
    photos.eq(photoIdx).css('display', 'none');
    photoIdx++;
    if (photoIdx == photos.length) { photoIdx = 0; }
    photos.eq(photoIdx).css('display', 'inline');
});
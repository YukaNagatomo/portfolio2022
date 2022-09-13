$(function () { //ロード中はコンテンツの高さをページの高さに合わせる
    var h = $(window).height();
    $('#contents').css('display', 'none');
    $('#loader-bg ,#loader').height(h).css('display', 'block');
});

window.onload = function () { //全ての読み込みが完了したら実行する
    $(function () {
        $("#loading").fadeOut();
        $('#contents').css('display', 'block');
        $('#loader-bg').delay(900).fadeOut(800);
        $('#loader').delay(600).fadeOut(300);
    });
}

$(function () { //10秒たったらロードを終わらせる
    setTimeout('stopload()', 10000);
});

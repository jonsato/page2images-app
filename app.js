// 入力されたURLの要素を取得
var url = document.getElementById('url');

// 選択されたデバイスの要素を取得
var device = document.getElementById('device');

var capture = document.getElementById('capture');
var btn = document.getElementById('btn');

btn.addEventListener('click', function() {
  var targetUrl = encodeURI(url.value);
  capture.src = "http://api.page2images.com/directlink?p2i_url=" + targetUrl + "&p2i_key=【ここに自分のAPIキーを記載】&p2i_device=" + device.value;
});
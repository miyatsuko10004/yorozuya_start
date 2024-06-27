function punchTimeCard() {
  // 出社ボタンを特定
  var punchButton = document.querySelector('#timerecorder_txt');
  if (punchButton) {
    // ボタンの子要素（実際のクリック可能な部分）を探す
    var actualButton = punchButton.querySelector('input[type="button"], button');
    if (actualButton) {
      actualButton.click();
      console.log('出社を打刻しました');
    } else {
      console.log('出社ボタンが見つかりません');
    }
  } else {
    console.log('タイムレコーダーの要素が見つかりません');
  }
}

// ページ読み込み完了後に実行
window.addEventListener('load', function() {
  // ページが完全に読み込まれるまで少し待機
  setTimeout(punchTimeCard, 2000);
});

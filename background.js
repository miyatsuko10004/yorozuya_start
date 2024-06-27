chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({ url: "https://www.e4628.jp/?rd=1" }, function(tab) {
    chrome.tabs.executeScript(tab.id, { file: "content_script.js" });
  });
});

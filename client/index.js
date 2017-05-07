function openTab() {
  var callback = chrome.extension.getURL("oauth_callback.html")
  chrome.tabs.create({ 'url': 'https://shrouded-ravine-50926.herokuapp.com/oauth/authorize?client_id=1&redirect_uri=chrome-extension://ohmmemmhjcnccpghiachpikplacnkmid/oauth_callback.html&response_type=token' });
}

chrome.browserAction.onClicked.addListener(openTab);
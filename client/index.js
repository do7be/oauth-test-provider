function openTab() {
  var callbackURL = chrome.extension.getURL("oauth_callback.html")
  chrome.tabs.create({ 'url': `https://shrouded-ravine-50926.herokuapp.com/oauth/authorize?client_id=1&redirect_uri=${callbackURL}&response_type=token` });
}

chrome.browserAction.onClicked.addListener(openTab);
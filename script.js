var regex = /https?:\/\/(?:(?:www)|(?:encrypted))\.google(?:\.\w*){1,2}\/(?:(?:search)|(?:\?gws_rd=ssl)|(?:#q=)|(?:.*&q=)).*/;
var timesFound = 0;
var attempts = 0;
if (regex.test(window.location.href)) {
  process();
}
function process() {
  attempts ++;
  if (!!window.wrappedJSObject.rwt) {
    timesFound ++;
    console.log('found ' + timesFound);
    delete window.wrappedJSObject.rwt;
	}
  if (attempts > 200) {
    return;
  }
  setTimeout(process, 50 + attempts);
}

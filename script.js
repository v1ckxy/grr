var regex = /https?:\/\/(?:(?:www)|(?:encrypted))\.google(?:\.\w*){1,2}\/(?:(?:search)|(?:\?gws_rd=ssl)|(?:#q=)|(?:.*&q=)).*/;
if (regex.test(window.location.href)) {
   delete window.wrappedJSObject.rwt
}
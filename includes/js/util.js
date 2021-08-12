function createUUID() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}

function getUniqueId(prefix) {
    var text = "";
    var possible = "0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    if (prefix) {
        text = prefix + text;
    }

    if (!localStorage.getItem('pageUniqueId')) {
        localStorage.setItem('pageUniqueId', '[]');
    }

    var pageUniqueId = JSON.parse(localStorage.getItem('pageUniqueId'));
    if ($.inArray(text, pageUniqueId) != -1) {
        return getUniqueId();
    } else {
        pageUniqueId.push(text);
        localStorage.setItem('pageUniqueId', JSON.stringify(pageUniqueId));
        return text;
    }
}

function showTime(element){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    element.innerText = time;
    element.textContent = time;
    
    //setTimeout(showTime, 1000);
    
}

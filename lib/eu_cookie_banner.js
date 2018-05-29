// Creare's 'Implied Consent' EU Cookie Law Banner v:2.4
// Conceived by Robert Kent, James Bavington & Tom Foyster
 
var dropCookie = true;                      // false disables the Cookie, allowing you to style the banner
var cookieDuration = 14;                    // Number of days before the cookie expires, and the banner reappears
var cookieName = 'kalidoCookie';        // Name of our cookie
var cookieValue = 'on';                     // Value of cookie
 
function createDiv(){

        console.log('no cookie');
        var bodytag = document.getElementsByTagName('body')[0];
        var div = document.createElement('div');
        div.setAttribute('id','cookie-law');
        div.innerHTML = '<p>We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it. <a class="close-cookie-banner" href="javascript:void(0);" onclick="createMe();">Got it</a><a class="close-cookie-banner href="javascript:void(0);" onclick="removeMe();">No thanks</a><a class="secondary-buttons" href="https://www.kalido.me/support/cookie_policy.html" rel="nofollow" title="Cookie policy" target="_blank">Read more</a></p>';    
        // Be advised the Close Banner 'X' link requires jQuery
        
        // bodytag.appendChild(div); // Adds the Cookie Law Banner just before the closing </body> tag
        // or
        bodytag.insertBefore(div,bodytag.firstChild); // Adds the Cookie Law Banner just after the opening <body> tag
        
        document.getElementsByTagName('body')[0].className+=' cookiebanner'; //Adds a class tothe <body> tag when the banner is visible
     
}

function createSecondDiv()
{
    console.log('second thingy');
        var bodytag = document.getElementsByTagName('body')[0];
        var div = document.createElement('div');
        div.setAttribute('id','cookie-law');
        div.innerHTML = '<p>You have allowed us to use cookies. Is this true? <a class="close-cookie-banner" href="javascript:void(0);" onclick="removeMe();">Got it</a><a class="close-cookie-banner href="javascript:void(0);" onclick="removeCookie();">Opt out</a><a class="secondary-buttons" href="https://www.kalido.me/support/cookie_policy.html" rel="nofollow" title="Cookie policy" target="_blank">Read more</a></p>';    
        // Be advised the Close Banner 'X' link requires jQuery
        
        // bodytag.appendChild(div); // Adds the Cookie Law Banner just before the closing </body> tag
        // or
        bodytag.insertBefore(div,bodytag.firstChild); // Adds the Cookie Law Banner just after the opening <body> tag
        
        document.getElementsByTagName('body')[0].className+=' cookiebanner'; //Adds a class tothe <body> tag when the banner is visible
}
 

function createMe()
{
    createCookie(window.cookieName,window.cookieValue, window.cookieDuration); //Create cookie
    removeMe();
    var headTag = document.getElementsByTagName('head')[0];
    var scriptTag = document.createElement('script');
    scriptTag.innerHTML = '(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0]; a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","https://www.google-analytics.com/analytics.js","ga"); ga("create", "UA-77869347-1", "auto"); ga("send", "pageview"); window["ga-disable-UA-77869347-1"] = true;';
}

function removeCookie()
{
    eraseCookie(window.cookieName);
    removeMe();
}

function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000)); 
        var expires = "; expires="+date.toGMTString(); 
    }
    else var expires = "";
    if(window.dropCookie) { 
        document.cookie = name+"="+value+expires+"; path=/"; 
    }
}
 
function checkCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
 
function eraseCookie(name) {
    createCookie(name,"",-1);
}
 
window.onload = function(){
    console.log('onload');
    if(checkCookie(window.cookieName) != window.cookieValue){
        createDiv(); 
    }
    else
    {
        createSecondDiv();
    }
}

function removeMe(){
	var element = document.getElementById('cookie-law');
	element.parentNode.removeChild(element);
}
var ewfSetCookie = function(exdays) {
    var psmed = $("#email").val();
    var pswed = $("#pcodeStu").val();
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = "mwallcstu=true; expires=" + expires + ";path=/;domain=mastrowall.com";
    document.cookie = "mwallpswstus="+btoa(psmed)+"; expires=" + expires + ";path=/;domain=mastrowall.com";
    document.cookie = "mwallpswstud="+btoa(pswed)+"; expires=" + expires + ";path=/;domain=mastrowall.com";
  };
  function getCookie(cname) {
    var name = cname + "="; 
    var decodedCookie = decodeURIComponent(document.cookie); 
    var ca = decodedCookie.split(';'); 
for(var p=0;p<ca.length;p++){
var cookstrem = ca[p].split('mwallpswstus='); 
var cookstrkd = ca[p].split('mwallpswstud='); 
if(cookstrem[0] == 0){
  var paem = window.atob(cookstrem[1]);
  document.getElementById('email').value= paem;
}
else if(cookstrkd[0]== 0){
  var pacd = window.atob(cookstrkd[1]);
  document.getElementById('pcodeStu').value= pacd;
  inwallStu();
}}}
  $(document).ready(function(){getCookie() })  ;
  function deleteAllCookies() {
   var cookies = document.cookie.split(";");
       for (var i = 0; i < cookies.length; i++) {
         var cookie = cookies[i];
           var eqPos = cookie.indexOf("=");
         var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
         document.cookie = name + "=true;"+"expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
               }
              setTimeout(function(){location.reload();},2000);
       }     
       function deleteAllCookies() {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=true;"+"expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=mastrowall.com";
        }
        setTimeout(function(){location.reload();},2000);
        }  
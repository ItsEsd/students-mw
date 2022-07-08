function inwallStu() {
  document.body.style.pointerEvents ="none";
    eduwaiting();eduapprv();readsaveexm();
    var ur1 = "https://script.google.com/macros/s/";
    var ur2 ="AKfycbx9SDHRafWW8KCUD0xtHflnzFKkaWIi_OteyK0hKzBay7Bxy9YvvpCzkL43lFOnv85zYg";
    var email1 = $("#email").val();
    var pass = $("#pcodeStu").val();
    if (email1 != 0 && pass != 0) {
      document.getElementById("loader").style.visibility = "visible";
      document.getElementById("checkP").innerHTML = "";
      var url = ur1+ur2+"/exec" + "?callback=ctrlqstuin&chemid=" + email1 + "&chpass=" + pass + "&action=chstud";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });
    } else {
      return false;  
    }
  }
function ctrlqstuin(e){
  var res= e.records;
  if(res!="ID not found!"){
    document.getElementById("signInStu").style.display = "none";
    document.getElementById("StuDashboard").style.display = "block";
    document.getElementById('showProfileStu').innerHTML = '<div align="center"><img class="propic" src="' + res[0].ProfilePic + '" ><div id="name" style="padding-top:14px;"></div><p style="font-size:18px;margin:0px;">' + res[0].Class + ' (' + res[0].Board + ') </p><h4 style="margin:0px;color:#48485c;">' + res[0].FName + ' ' + res[0].LName + ' </h4><p class="geninfoid">&#8226; ID: '+res[0].STid+' '+'&#8226; Email: '+res[0].Email+'</p></div>';
    document.getElementById('recntavtr').innerHTML = '<img class="propicavtrbrd" src="' + res[0].ProfilePic + '" >';
    document.getElementById('avtrbrdname').innerHTML = res[0].FName + ' ' + res[0].LName;
    document.getElementById("stuid").value = res[0].STid;
    document.getElementById("avtrpicurl").value = res[0].ProfilePic;
    document.getElementById("upstclass").value =  res[0].Class;
    document.getElementById("upstboard").value = res[0].Board;
    document.getElementById("loader").style.visibility = "hidden";
     document.getElementById("stuidst").value = res[0].STid ;
     document.body.style.pointerEvents ="auto";
           
if( res[0].AllTOD !=0){
$('#storetodpost').empty();
var allsttod = res[0].AllTOD;
var singlesttod = allsttod.split("{td},");
var lenstr = singlesttod.length;
var st = 0;
var srno = 1;
for(st;st<lenstr-1;st+=3){
  document.getElementById("storetodpost").innerHTML += '<div class="storedtd"><div class="sharebiton" title="Copy Link" onclick="crcpbitlink(this)"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16"> <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/> <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/></svg></div><p>TOD No. '+srno+'</p><p><span class="todcommnt">'+
  JSON.parse(singlesttod[st+2])+'</span><br><span class="todidstyl">ID: '+JSON.parse(singlesttod[st])+
  ' Key: '+JSON.parse(singlesttod[st+1])+'</span></p>'+
  '<div align="right"><button class="btn btn-warning showsttod" onclick="showtopictod(this);">View</button>'+
  '<button class="btn btn-dark delsttod" onclick="deltopictod(this);">Delete</button>'+'<input class="tdcid" style="display: none;" value="'+
  JSON.parse(singlesttod[st])+'"/><input class="tdkeyid" style="display:none;" value="'+
  JSON.parse(singlesttod[st+1])+'"/></div></div>'+
  '<hr>';
  srno = srno + 1;
}

}
var fname = res[0].FName;
var lname = res[0].LName;
var name = fname.toLowerCase()+'-'+lname.toLowerCase();
var shname = name.split(" ").join("-");
let stateObj = { id: "0" };
 window.history.replaceState(stateObj,
       "", shname);
document.title = res[0].FName + ' ' + res[0].LName +" | MASTROWALL";

var preevn = res[0].CalendarTODO;
document.getElementById('allsvevnt').value =preevn;
getcalendar();
ewfSetCookie(14);
  }
  else{
    document.body.style.pointerEvents ="auto";
    document.getElementById("checkP").innerHTML = "User email and password not found.";
    document.getElementById("loader").style.visibility = "hidden";
  }
}
  $('.closefw').on('click',function(){
    $('.fullwidth').slideUp('fast');
  });
  function opensframe(){
    $("#fmcontainers").slideDown('fast');   
  }

  function opentframe(){
    $("#fmcontainert").slideDown('fast');  
  }

  $('#changeavtr').click(function(){
$('#avtrbrdstsec').toggle('fast');
var bd = document.body;
if(bd.style.overflow !="hidden"){
  bd.style.overflow = 'hidden';
  bd.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
else{
  bd.style.overflow ="auto";
  bd.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
  });
  $(document).ready(function(){
 var avtrpic = ["../images/avtr/1.png",
 "../images/avtr/2.png",
 "../images/avtr/3.png",
 "../images/avtr/4.png",
 "../images/avtr/5.png",
 "../images/avtr/6.png",
 "../images/avtr/7.png",
 "../images/avtr/8.png",
 "../images/avtr/9.png",
 "../images/avtr/10.png",
"../images/avtr/11.png",
"../images/avtr/12.png",
"../images/avtr/13.png",
"../images/avtr/14.png",
"../images/avtr/15.png",
"../images/avtr/16.png",
"../images/avtr/17.png",
"../images/avtr/18.png",
"../images/avtr/19.png",
"../images/avtr/20.png",
"../images/avtr/21.png",
"../images/avtr/22.png",
"../images/avtr/23.png",
"../images/avtr/24.png",
"../images/avtr/25.png",
"../images/avtr/26.png",
"../images/avtr/27.png",
"../images/avtr/28.png",
"../images/avtr/29.png",
"../images/avtr/30.png",
"../images/avtr/31.png",
"../images/avtr/32.png",
"../images/avtr/33.png",
"../images/avtr/34.png",
"../images/avtr/35.png",
"../images/avtr/36.png",
"../images/avtr/37.png",
"../images/avtr/38.png",
"../images/avtr/39.png",
"../images/avtr/40.png"];  
 var avtlen = avtrpic.length;
 for(var i=0;i<=avtlen-1;i++){
  document.getElementById('chooseavtr').innerHTML += '<img class="avtrpictemp" onclick="addavtrtobrd(this)" src="'+avtrpic[i]+'">';
 } 

  });

  $('#avtrbrdappr').click(function(){

    $('#chooseavtrbrd').toggle('fast');
  });
  $('#clsavtrbrd').click(function(){
    $('#avtrbrdstsec').toggle('fast');
    var bd = document.body;
if(bd.style.overflow !="hidden"){
  bd.style.overflow = 'hidden';
  bd.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
else{
  bd.style.overflow ="auto";
  bd.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
  });
  function addavtrtobrd(label){
    var list=document.getElementsByClassName("avtrpictemp");
  list = [].slice.call(list); 
  var posofq = list.indexOf(label);
  var avtrlink = document.getElementsByClassName('avtrpictemp')[posofq].src;
  document.getElementById('avtrpicurl').value= avtrlink;
  document.getElementById('recntavtr').innerHTML = '<img class="propicavtrbrd" src="' + avtrlink + '" >';
  }

  chngproinfo.addEventListener('submit', (event) => {
    document.getElementById('smitstproinfo').disabled = true;
    var studid = $('#stuidst').val();
    var avlnk = $('#avtrpicurl').val();
    var stcls = $('#upstclass').val();
    var stbrd = $('#upstboard').val();
    var ur1="https://script.google.com/macros/s/";
    var ur2="AKfycby30c0MJMakFPIPC1TbpPuGuouboRfgAhr9Y73WO9tJgVvVL2lGwXVhEwJE7km04phDTA";
    var url=ur1+ur2+"/exec"+"?callback=strstuinfo&stid="+studid+"&avtrlk="+avlnk+"&stclass="+stcls+"&stbrd="+stbrd+"&action=upstinfor";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });
  });

  function strstuinfo(e){
    var res= e.result;
    if(res == "Value updated successfully!"){
      inwallStu();
      document.getElementById('smitstproinfo').disabled = false;
    }
  }
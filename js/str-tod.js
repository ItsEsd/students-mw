
function deltopictod(label){
  $("#showdelnote").show();
var click = 1;
document.getElementById('varvrdigit').value = click;

var stuid = $('#stuid').val();


var list=document.getElementsByClassName("delsttod");
list = [].slice.call(list); 
var posofinput = list.indexOf(label);
var x = document.getElementsByClassName('tdcid');
var todid = JSON.stringify(x[posofinput].value);
var ur1 = "https://script.google.com/macros/s/";
var ur2 = "AKfycbzC8ye7vGFJd5GLtVtVKcgq2cNAoRuuaW6iSyy1qjlWQthONjFroMIV3-MXOOM2EbA-fw";
var urlrmv = ur1+ur2+"/exec" + "?callback=removefrmlst&tdid="+todid+"&stuid="+stuid+"&action=rmvtod";
document.getElementById('varvrdigit').value = urlrmv;

}



$('#deletetodst').click(function(click){
  document.getElementById("deletetodst").disabled = true;
  var url = $('#varvrdigit').val();
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });
  document.getElementById('varvrdigit').value = 0;
});  

 $('#hidedelnote').click(function(){
  $("#showdelnote").hide();
    });  

function removefrmlst(e){
  storedtods();
  $("#showdelnote").hide();
}



strtodstu.addEventListener('submit', (event) =>{
  $('#renotitod').slideDown('fast');
  $('#renotitod').empty();
  document.getElementById('storetdbtnfin').disabled = true;
    var tdid =JSON.stringify($('#todid').val());
    var tdpass =JSON.stringify($('#todpass').val());
    var tdcomnt =escape(JSON.stringify($('#todcmnt').val()));
    var stuid =$('#stuid').val();
    var ur1= "https://script.google.com/macros/s/";
     var ur3 ="AKfycbwUJdpY-B16X7HFEL9GQvyL435ik8Pi-DTo1G1oErQY7TSVKVJVUivVmocge2jqC5bhnA";
     var url = ur1+ur3+"/exec" + "?callback=ctrlqsttd&todid=" + tdid + "&todpass=" + tdpass + 
     "&todcmnt=" + tdcomnt + "&stuid=" + stuid + "&action=rdtod";
     var request = jQuery.ajax({
       crossDomain: true,
       url: url,
       method: "GET",
       dataType: "jsonp"
     });
    
    });
    
function ctrlqsttd(e){
  document.getElementById('storetdbtnfin').disabled = false;
  storedtods();
  strtodstu.reset();
  document.getElementById("storetodpost").scrollTop = 0;
  if(e.result == "TOD not found!"){
    document.getElementById('renotitod').innerHTML="TOD not found!";
  }else if(e.result == "TOD Found!"){
    document.getElementById('renotitod').innerHTML="TOD stored!";
  }
  setTimeout(function() {
    jQuery('#renotitod').fadeOut('fast');
  }, 6000);

}


function storedtods(){
var ur1 = "https://script.google.com/macros/s/";
var ur2 ="AKfycbyEI27cuOCoOGf-hTzLpKjFDFgWCw8DHXrhfZuDYQ-Vdv32VvRxeZWzjvHOCZwy-yY9EQ";
var url= ur1 +ur2+ "/exec"+"?action=read";
var email1 = $("#email").val();
var pass = $("#pcodeStu").val();
$.getJSON(url, function(json) {
for (var i = 0; i < json.records.length - 1; i++) {
  if (email1 == json.records[i].Email && pass == json.records[i].Passcode) {
        
    if( json.records[i].AllTOD !=0){
      $('#storetodpost').empty();
     var allsttod = json.records[i].AllTOD;
     var singlesttod = allsttod.split("{td},");
     var lenstr = singlesttod.length;
     var st = 0;
     var srno = 1;
     for(st;st<lenstr-1;st+=3){
          document.getElementById("storetodpost").innerHTML += '<div class="storedtd"><p>TOD No. '+srno+'</p><p><span class="todcommnt">'+
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
    else{
      document.getElementById("storetodpost").innerHTML=`<div style="padding:20px;padding-top:30px;"> <svg xmlns="http://www.w3.org/2000/svg" style="color:#8a8a8b;" width="60" height="60" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
      <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" /></svg> 
   <br> <br><p>No stored TOD</p></div>`;
    }
  }
}

});

}


function showtopictod(label){

  var list=document.getElementsByClassName("showsttod");
  list = [].slice.call(list); 

  var posofinput = list.indexOf(label);

  var x = document.getElementsByClassName('tdcid');
  var y = document.getElementsByClassName('tdkeyid');
  //   var lenposition = x[v].val();
       var todid = JSON.stringify(x[posofinput].value);
       var todkey = JSON.stringify(y[posofinput].value);
       document.getElementsByClassName("showsttod")[posofinput].disabled = true;
   var ur1 = "https://script.google.com/macros/s/";
   var ur2 = "AKfycbzGI2GphM15BFPHN6Fow5pzs13UmZy5_AGRMkz7z3qT8tkop4l3M7JkYg";
       var url = ur1+ur2+"/exec" + "?action=readTD";
       $.getJSON(url, function(json) {
         for (var i = 0; i < json.records.length - 1; i++) {
           if (todid === json.records[i].TODidd && todkey === json.records[i].TODFood) {
            document.getElementById("preview").style.display = "block";
            var prepostpre = JSON.parse(JSON.parse(json.records[i].TODhtm));
            var inHTML = atob(prepostpre.TODContent);
            document.getElementById("previewPost").innerHTML = unescape(inHTML);
            document.getElementById("previewPostTime").innerHTML = json.records[i].TimeStamp;
            document.getElementById("previewPostId").innerHTML = "ID: " + JSON.parse(json.records[i].TODidd);
            document.getElementById("previewPostCreator").innerHTML = JSON.parse(json.records[i].TODAddmin);
            document.getElementById("avthumb").innerHTML = '<img width="60px" src="' + prepostpre.AVPic + '" style="padding:4px;">';
            document.getElementById("previewPostTitle").innerHTML = prepostpre.TODTitle;
            document.getElementById('preview').scrollTop = 0;
            document.getElementsByClassName("showsttod")[posofinput].disabled = false; 

           }
          
          }
        
        })
      
      

}


function getId(url) {
  var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = url.match(regExp);
  if (match && match[2].length == 11) {
    return match[2];
  } else {
    return 'error';
  }
}
$('#backtotdbrd').click(function(){
  $('#preview').slideUp('fast');
});

$('#avthumb').click(function(){
  $('#preview').slideUp('fast');
});
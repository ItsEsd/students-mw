function eduwaiting(){
    $('#myeduc-wait').empty();
    document.getElementById('myeduc-wait').style.backgroundImage ="url('images/frameloader.gif')";
    var ur1 = "https://script.google.com/macros/s/";
    var ur2 ="AKfycbyEI27cuOCoOGf-hTzLpKjFDFgWCw8DHXrhfZuDYQ-Vdv32VvRxeZWzjvHOCZwy-yY9EQ";
    var email1 = $("#email").val();
    var pass = $("#pcodeStu").val();
    var url = ur1 +ur2+"/exec"+ "?action=read";
    $.getJSON(url, function(json) {
      for (var i = 0; i < json.records.length - 1; i++) {
        if (email1 == json.records[i].Email && pass == json.records[i].Passcode) {
            if(json.records[i].EduWait !=0){
                document.getElementById("assignededu").style.display = "none";
                document.getElementById("meducatordiv").style.display = "block";
                var allst = json.records[i].EduWait;
                var singlest = allst.split(",");
                var lenstr = singlest.length;
                var st = 0;
                        for(st;st<lenstr;st++){
                          var edidsrc = singlest[st];
                          srcedidwait(edidsrc);
                        }
                  }
                else{

                  document.getElementById("myeduc-wait").innerHTML ='<div class="nocontentalled"><svg xmlns="http://www.w3.org/2000/svg" style="color:#8a8a8b;" width="60" height="60" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">'+
                  '<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />'+
                  '<path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" /></svg>'+
                  '<br><h5 style="color:#474749;">Empty</h5></div>';
                  document.getElementById('myeduc-wait').style.backgroundImage ="none";

                }
        }
      }
    });
}


function srcedidwait(edidsrc){
    var ur1 = "https://script.google.com/macros/s/";
    var ur2 ="AKfycbzQb1AFfuHBzUQZx-OYWzoMa-wGbrgwY13_nsVw9ndaV_57Mr--ondYLkpUJKVjSmn-5w";
    var url= ur1 +ur2+ "/exec"+"?action=read";
   $.getJSON(url, function(json) {
     for (var i = 0; i < json.records.length - 1; i++) {
       if (edidsrc == json.records[i].CardId) {
  
        document.getElementById("myeduc-wait").innerHTML +="<div class='edproclroom'><span class='ednametitle'>"+
        json.records[i].FName+" "+json.records[i].LName+"</span><img class='edpropic' src='"+
        json.records[i].ProfilePic+"'><button onclick='rmvedwait(this);' class='rmvstbtn' class='btn btn-light'>"+
        "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-trash' viewBox='0 0 16 16'>"+
        "<path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z'/>"+
        "<path fill-rule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'/>"+
        "</svg></button><br> &#9679; "+json.records[i].Subject+ " &#9679; "+ json.records[i].Class + " &#9679; "+json.records[i].Board+
        "<br> &#9679; <a href='mailto:"+ json.records[i].Email +"'>"+ json.records[i].Email + "</a>"+
        " &#9679; <a href=tel:"+json.records[i].CountryCode+json.records[i].PhoneNo+">+"+
        json.records[i].CountryCode+" "+json.records[i].PhoneNo+
        "</div><input class='strmvid' style='display: none;' value='"+
        json.records[i].CardId+"'/>";
  
       }
       
      }
      document.getElementById('myeduc-wait').style.backgroundImage = "none";
    });
  }
  

function rmvedwait(label){

    var list=document.getElementsByClassName("rmvstbtn");
    list = [].slice.call(list); 
 
    var posofinput = list.indexOf(label);
 
    var x = document.getElementsByClassName('strmvid');
    //   var lenposition = x[v].val();
         var stadid = x[posofinput].value;
         document.getElementById('myeduc-wait').style.pointerEvents = "none";
         document.getElementById('eduidst').value= stadid;
         document.getElementById('posofst').value= posofinput;
         list[posofinput].disabled = true;
         list[posofinput].innerHTML= "Removing..";
         var eduid =$("#eduidst").val();
         var studid =$("#stuidst").val();
         var ur1= "https://script.google.com/macros/s/";
         var ur2="AKfycbziAX0ujuZB5YFi2TdlNc7njP31OUs-PCjoCzwYJXmLwQqQD41MtWxYoptZUnFhD2bU";
       
         var urlrmvedw = ur1+ur2+"/exec" + "?callback=ctrlqrmvw&eduidst=" + eduid + "&stuidst=" + studid + "&action=rmvedw";
         var request = jQuery.ajax({
           crossDomain: true,
           url: urlrmvedw,
           method: "GET",
           dataType: "jsonp"
         });      
}


function ctrlqrmvw(){
    var p = $('#posofst').val();
    var z =document.getElementsByClassName('rmvstbtn');
    z[p].innerHTML = "Removed";
    z[p].style.backgroundColor = "black";
    document.getElementById('myeduc-wait').style.pointerEvents = "auto";
    eduwaiting();
  }

function eduapprv(){
  $('#myeduc-appr').empty();
  document.getElementById('myeduc-appr').style.backgroundImage ="url('images/frameloader.gif')";
    var ur1 = "https://script.google.com/macros/s/";
    var ur2 ="AKfycbyEI27cuOCoOGf-hTzLpKjFDFgWCw8DHXrhfZuDYQ-Vdv32VvRxeZWzjvHOCZwy-yY9EQ";
    var email1 = $("#email").val();
    var pass = $("#pcodeStu").val();
    var url = ur1 +ur2+"/exec"+ "?action=read";
    $.getJSON(url, function(json) {
      for (var i = 0; i < json.records.length - 1; i++) {
        if (email1 == json.records[i].Email && pass == json.records[i].Passcode) {
            

if(json.records[i].EduAppr !=0){
     document.getElementById("assignededu").style.display = "none";
     document.getElementById("meducatordiv").style.display = "block";
     var allstap = json.records[i].EduAppr;
     var singlestap = allstap.split(",");
     var lenstrap = singlestap.length;
     var str = 0;
             for(str;str<lenstrap;str++){
               var edidsrcap = singlestap[str];
               srcedidapprv(edidsrcap);
             }
       }
       else{

        document.getElementById("myeduc-appr").innerHTML ='<div class="nocontentalled"><svg xmlns="http://www.w3.org/2000/svg" style="color:#8a8a8b;" width="60" height="60" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">'+
        '<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />'+
        '<path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" /></svg>'+
        '<br><h5 style="color:#474749;">Empty</h5></div>';
        document.getElementById('myeduc-appr').style.backgroundImage ="none";

      }
  }
}
});
}
function srcedidapprv(edidsrcap){
    var ur1 = "https://script.google.com/macros/s/";
    var ur2 ="AKfycbzQb1AFfuHBzUQZx-OYWzoMa-wGbrgwY13_nsVw9ndaV_57Mr--ondYLkpUJKVjSmn-5w";
    var url= ur1 +ur2+ "/exec"+"?action=read";
   $.getJSON(url, function(json) {
     for (var i = 0; i < json.records.length - 1; i++) {
       if (edidsrcap == json.records[i].CardId) {
  
        document.getElementById("myeduc-appr").innerHTML +="<div onclick='showeduin(this);' class='edproclroomfin'><span class='ednametitle'>"+
        json.records[i].FName+" "+json.records[i].LName+"</span><img class='edpropic' src='"+
        json.records[i].ProfilePic+"'><br> &#9679; "+json.records[i].Subject+ " &#9679; "+ json.records[i].Class + " &#9679; "+json.records[i].Board+
        "<br> &#9679; <a href='mailto:"+ json.records[i].Email +"'>"+ json.records[i].Email + "</a>"+
        " &#9679; <a href=tel:"+json.records[i].CountryCode+json.records[i].PhoneNo+">+"+
        json.records[i].CountryCode+" "+json.records[i].PhoneNo+
        "</div><input class='eduprewid' style='display: none;' value='"+
        json.records[i].CardId+"'/>";
  
       }
       
      }
      document.getElementById('myeduc-appr').style.backgroundImage = "none";
    });  
  }  

  function showeduin(label){
    $('#showedpro,#showedprotod,#edtdstrfulsr').empty();
    $('#connected1').empty();$('#connected2').empty();
    $('#edunlink').empty();$('#edullink').empty();
    $('.srvcdived').html('');
    $('.srvcdived').css({'background':'linear-gradient(-75deg, #e2e2e2,#c2c2c2,#e2e2e2)',
    'animation':'gradient 2s ease infinite','backgroundSize':'400% 400%'});
    $('#showedpro,#showedprotod').css({'background':'linear-gradient(-75deg, #e2e2e2,#c2c2c2,#e2e2e2)',
    'animation':'gradient 2s ease infinite','backgroundSize':'400% 400%'});
    
    document.getElementById('eduproste').style.display = "block";
    
    var list=document.getElementsByClassName("edproclroomfin");
    list = [].slice.call(list); 
    var posofinput = list.indexOf(label);
    var x = document.getElementsByClassName('eduprewid');
    var eduprid = x[posofinput].value;
    document.getElementById('eduidst').value= eduprid;
    document.getElementById('posofst').value= posofinput;
         var eduid =$("#eduidst").val();
         var studid =$("#stuidst").val();
         var ur1 = "https://script.google.com/macros/s/";
         var ur2 ="AKfycbzQb1AFfuHBzUQZx-OYWzoMa-wGbrgwY13_nsVw9ndaV_57Mr--ondYLkpUJKVjSmn-5w";
         var url= ur1 +ur2+ "/exec"+"?action=read";
        $.getJSON(url, function(json) {
          for (var i = 0; i < json.records.length - 1; i++) {
            if (eduid == json.records[i].CardId) {
console.log(json);
          document.getElementById('showedpro').innerHTML = "<div class='edproindv'><span class='ednametitle'>"+
          json.records[i].FName+" "+json.records[i].LName+"</span><img class='edpropic' src='"+
          json.records[i].ProfilePic+"'><br> &#9679; "+json.records[i].Subject+ " &#9679; "+ json.records[i].Class + " &#9679; "+json.records[i].Board+
          "<br> &#9679; <a href='mailto:"+ json.records[i].Email +"'>"+ json.records[i].Email + "</a>"+
          " &#9679; <a href=tel:"+json.records[i].CountryCode+json.records[i].PhoneNo+">+"+
          json.records[i].CountryCode+" "+json.records[i].PhoneNo+
          "</div><input class='eduprewid' style='display: none;' value='"+
          json.records[i].CardId+"'/>";

          if(json.records[i].Connectivity!=""){
          var Go = JSON.parse(json.records[i].Connectivity);
          var totalConnect = Go.idConnect.length;
          var j = 0;
          for (var prop in Go.idConnect) {
           
            document.getElementById("connected1").innerHTML = '<a href="tel:' + Go.idConnect[0] + '"><img class="connectIcon" src="' + Go.Connect[0] + '"></a><a href="mailto:' + Go.idConnect[1] + '"><img class="connectIcon" src="' + Go.Connect[1] + '"></a>';
          }
          for (j = 2; j < totalConnect; j++) {
            document.getElementById("connected2").innerHTML += '<a target="_blank" href="' + Go.idConnect[j] + '"><img class="connectIcon" src="' + Go.Connect[j] + '"></a>';
            
          }
        }else{
          document.getElementById("connected1").innerHTML = '<p class="noconempty">Live Connectivity not updated!</p>';
        }
          if(json.records[i].TOD !=""){
            var TOD = unescape(json.records[i].TOD);
        var singlest = TOD.split("{td},");
        var lenstr = singlest.length;
          for (var w=0; w<lenstr-1;w++) {
            document.getElementById("showedprotod").innerHTML += '<div class="wrapTOD"><div class="card">'+
            '<img class="card-img-top" src="' + singlest[w+3] + '"><div class="card-body"><h4>' + singlest[w+1] + '</h4></div> <div class="card-footer" style="text-align:left;"><p>' + singlest[w+2] + '</p></div> </div></div><input class="topictdid" style="display: none;" value="'+singlest[w] +'"><br><hr class="edprevtodhr">';
            document.getElementById("edtdstrfulsr").innerHTML += '<div class="wrapTODfl"><div class="card">'+
            '<img class="card-img-top" src="' + singlest[w+3] + '"><div class="card-body"><h4>' + singlest[w+1] + '</h4></div> <div class="card-footer" style="text-align:left;"><p>' + singlest[w+2] + '</p></div> </div></div><input class="topictdid" style="display: none;" value="'+singlest[w] +'"><br><hr class="edprevtodhr">';
            w= w+3;
          }}
         else{
             document.getElementById("showedprotod").innerHTML = '<div class="nocontenttod"><svg xmlns="http://www.w3.org/2000/svg" style="color:#8a8a8b;" width="60" height="60" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">'+
                  '<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'+
                  '<path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/></svg>'+
                  '<br><h5 style="color:#474749;font-size:16px;">No Recent Topic Updated</h5></div>';
                  document.getElementById("edtdstrfulsr").innerHTML = '<div class="nocontenttod"style="max-width:1000px;"><svg xmlns="http://www.w3.org/2000/svg" style="color:#8a8a8b;" width="60" height="60" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">'+
                  '<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'+
                  '<path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/></svg>'+
                  '<br><h5 style="color:#474749;font-size:16px;">No Recent Topic Updated</h5></div>';
            }

         if(json.records[i].ExternalNoteId !=0) {   
          document.getElementById("showedulink").style.display="block";      
          document.getElementById("edunlink").innerHTML = '<a class="edulink" target="_blank" href="' +json.records[i].ExternalNoteId+ '">Notes</a>';
             }
             else{
              document.getElementById("showedulink").style.display="block";      
              document.getElementById("edunlink").innerHTML = '<button class="edulinkempt" disabled>Empty</button>';
             } 
        
         if(json.records[i].ExternalLecId !=0) {
              document.getElementById("showedulink").style.display="block";
              document.getElementById("edullink").innerHTML = '<a class="edulink" target="_blank" href="' +json.records[i].ExternalLecId+ '">Lectures</a>';
             } 
             else{
              document.getElementById("showedulink").style.display="block";      
              document.getElementById("edullink").innerHTML = '<button class="edulinkempt" disabled>Empty</button>';
             } 
        var allstudnt = json.records[i].StuAppr.split(',');
        var nofallstd = allstudnt.length -1;
        var alltds = json.records[i].AllTOD.split("{td},");
        var nofaltd = (alltds.length -1)/3;
        var allotexm = json.records[i].AllExam.split("{ex},");
        var nofotexm = (allotexm.length -1)/3;
        document.getElementById("showedsrvc").innerHTML=`
            <div class="srvcdived">
              <img src="images/edsrvc/allstd.png">
              <p id="alstds">All Students</p>
            </div>
            <div class="srvcdived">
              <img src="images/edsrvc/linkins.png">
              <p id="allnks">LinkIns</p>
            </div>
            <div class="srvcdived">
              <img src="images/edsrvc/tods.png">
              <p id="altds">TOD Store</p>
            </div>
            <div class="srvcdived">
              <img src="images/edsrvc/ontest.png">
              <p id="svdontst">Saved Test</p>
            </div>
            <div class="srvcdived">
              <img src="images/edsrvc/cmnts.png">
              <p id="allcmnts">Comments</p>
            </div>`;
              document.getElementById('alstds').innerHTML = 'All Students '+'('+nofallstd+')';
              document.getElementById('allnks').innerHTML = 'LinkIns';
              document.getElementById('altds').innerHTML = 'TOD Store '+'('+nofaltd+')';
              document.getElementById('svdontst').innerHTML = 'Saved Test '+'('+nofotexm+')';
              document.getElementById('allcmnts').innerHTML = 'Comments '+'(----)';

              var elemed = document.createElement('div');
              elemed.class="crtelem";
              elemed.id="crtelem";
              $('body').append(elemed);


              document.getElementsByClassName('srvcdived')[2].addEventListener('click',function(){
                if(json.records[i].AllTOD !=""){
                  $('#crtelem').empty();$('#crtelem').slideDown();
                  document.getElementById('crtelem').innerHTML='<center><span class="clssrvccon" onclick="document.getElementById(`crtelem`).style.display=`none`;">X</span></center>';
                  var srno = 1;
                  for(var k=0;k<alltds.length-1;k+=3){
                var elemtds = document.createElement('div');
                elemtds.innerHTML+='<center><div class="srvcconone">'+
                '<div><p style="text-align:right;color:#555;border-bottom:1px solid #555;padding-bottom:4px;">TOD No. '+srno+'</p><div><p><italic>Remarks:</italic> '+JSON.parse(alltds[k+2])+'</p><font size="2"><p>ID: '+JSON.parse(alltds[k])+' Key: '+JSON.parse(alltds[k+1])+'</p></font></div></div>'+
                '<input class="tdstdcid" style="display:none;" value="'+JSON.parse(alltds[k])+'"/><input class="tdstdkeyid" style="display:none;" value="'+JSON.parse(alltds[k+1])+'"/>'+
                '<button class="btn btn-primary viewtds" onclick="viewstods(this)">View</button></div><center>'; srno = srno+1;
                $('#crtelem').append(elemtds);
                  }
                }
              else{
                return false;
              }
              });

              document.getElementsByClassName('srvcdived')[3].addEventListener('click',function(){
                if(json.records[i].AllExam!=""){
                  $('#crtelem').empty();$('#crtelem').slideDown();
                document.getElementById('crtelem').innerHTML='<center><span class="clssrvccon" onclick="document.getElementById(`crtelem`).style.display=`none`;">X</span></center>';
                var srno = 1;
                for(var k=0;k<allotexm.length-1;k+=3){
              var elemtds = document.createElement('div');
              elemtds.innerHTML+='<center><div class="srvcconone">'+
              '<div><p style="text-align:right;color:#555;border-bottom:1px solid #555;padding-bottom:4px;">Exam No. '+srno+'</p><div><p>'+allotexm[k+2]+'</p><font size="2"><p>Exam ID: '+allotexm[k]+' Pass: '+allotexm[k+1]+'</p></font></div></div>'+
              // '<input class="exstdcid" style="display:none;" value="'+allotexm[k]+'"/><input class="exstdkeyid" style="display:none;" value="'+allotexm[k+1]+'"/>'+
              // '<button class="btn btn-primary viewexpr" onclick="exmprfmnc(this)">View</button>'+
              '</div><center>'; srno = srno+1;
              $('#crtelem').append(elemtds);
                }
                }else{
                  return false;
                }
                
              });

              document.getElementsByClassName('srvcdived')[1].addEventListener('click',function(){
                var edtc = $("#eduidst").val(); 
                var tdkid = window.btoa(edtc);
                var newlk = "https://mastrowall.com/linkins/?srvc=true&ed="+tdkid;
                $('#crtelem').empty();$('#crtelem').slideDown();
                document.getElementById('crtelem').innerHTML='<center><span class="clssrvccon" onclick="document.getElementById(`crtelem`).style.display=`none`;">X</span></center>';
                var elemtds = document.createElement('div');
                elemtds.innerHTML = '<center><div class="srvcconone"><iframe frameborder="0" style="width:100%;height:100%;min-height:500px;overflow-y:auto;background:#555;" src="'+newlk+'"></iframe></div></center>';
                console.log(edtc);console.log(newlk);
                $('#crtelem').append(elemtds);
              });

          document.getElementById('showedpro').style.background = "transparent";
          document.getElementById('showedprotod').style.background = "transparent";
          $('.srvcdived').css('background','white');
         }
                    
      }
      });    
      
}

// function exmprfmnc(label){
// }

function viewstods(label){
  var list=document.getElementsByClassName("viewtds");
  list = [].slice.call(list); 
  var posofinput = list.indexOf(label);
  var x = document.getElementsByClassName('tdstdcid');console.log();
  var y = document.getElementsByClassName('tdstdkeyid');
       var tdid = window.btoa(x[posofinput].value);
       var tdkid = window.btoa(y[posofinput].value);
  var newlk = "https://tods.mastrowall.com?topictd="+tdid+"&tdkey="+tdkid+"&td=valid";
  window.open(newlk, '_blank', 'location=center,height=570,width=1200,left=80,top=100,scrollbars=yes,status=yes');
}
$('.clssrvccon').click(function(){
  $('#crtelem').slideUp();
 });

$('#fullscrntod').click(function(){
$('#edtdstrfulsr').slideDown('fast');
});
$('#edtdstrfulsr').click(function(){
  $('#edtdstrfulsr').slideUp('fast');
  });
$('#opnsktch').click(function(){
  window.open('https://sketch.mastrowall.com','_blank', 'location=center,height=670,width=1200,left=80,top=0,scrollbars=yes,status=yes');
});

/////////////////Calender////////////////

function getcalendar() {
var calendarEl = document.getElementById('calendar');
var preevent =$('#allsvevnt').val();
var elemev = preevent.split("{e},");
var eventsup =[];
for(var i=0;i<elemev.length-1;i+=3){
var entry = {};
entry.title = JSON.parse(elemev[i]);
entry.start = JSON.parse(elemev[i+1]);
entry.end= JSON.parse(elemev[i+2]);
eventsup.push(entry);
}
var date = new Date();
var tois = date.toISOString();
var flcaldate = tois.substring(0, 10);
  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialDate: flcaldate,
    navLinks: true, 
    weekNumbers: true,
    weekNumberCalculation: 'ISO',
    selectable: true,
    selectMirror: true,
    select: function(arg) {
      var title = prompt('Event Title:');
      if (title) {
        calendar.addEvent({
          title: title,
          start: arg.start,
          end: arg.end,
          allDay: arg.allDay
        })
      // console.log(title,arg.start,arg.allDay);
   var t = JSON.stringify(title);
   var s = JSON.stringify(arg.start.toISOString());
   var e = JSON.stringify(arg.end.toISOString());
   var k = "{e},";
   var evnt = t+k+s+k+e+k;
         var email1 = $("#email").val();
         var pass = $("#pcodeStu").val();
         var ur1="https://script.google.com/macros/s/";
         var ur2 ="AKfycbxJ4c20CgHr73ZIARWQfeXU5qSxHApmiE0rJBBaQ4nswWQYW-m4wfP24741to6l3qbQ";
         var url = ur1+ur2+"/exec" + "?callback=ctrlqevsv&usem=" + email1 + "&usid=" + pass + "&event=" + evnt + "&action=upevnt";
         var request = jQuery.ajax({
          crossDomain: true,
          url: url,
          method: "GET",
          dataType: "jsonp"
        });
      }
      calendar.unselect();
    },
    eventClick: function(arg) {
      if (confirm('Are you sure you want to delete this event?')) {
        arg.event.remove();
var tt = JSON.stringify(arg.event.title);
var st = JSON.stringify(arg.event.start.toISOString());
var et = JSON.stringify(arg.event.end.toISOString());
var kt = "{e},";
var delitm = tt+kt+st+kt+et+kt;
        var email1 = $("#email").val();
        var pass = $("#pcodeStu").val();
        var ur1="https://script.google.com/macros/s/";
         var ur2 ="AKfycbxJ4c20CgHr73ZIARWQfeXU5qSxHApmiE0rJBBaQ4nswWQYW-m4wfP24741to6l3qbQ";
         var url = ur1+ur2+"/exec" + "?callback=ctrlqevrmv&usem=" + email1 + "&usid=" + pass + "&event=" + delitm + "&action=rmvevnt";
        var request = jQuery.ajax({
         crossDomain: true,
         url: url,
         method: "GET",
         dataType: "jsonp"
       });
      }
    },
   // editable: true,
    dayMaxEvents: true, 
    events:eventsup
  });
  calendar.render();
}
function ctrlqevsv(e){
inwallStu();
}
function ctrlqevrmv(e){
  inwallStu();
}
$('#sdmntwo').click(function(){
$('#calcontain').slideDown();
});
$('#clscal').click(function(){
  $('#calcontain').slideUp();
});
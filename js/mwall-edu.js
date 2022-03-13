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
        " &#9679; <a href=tel:"+json.records[i].CountryCode+json.records[i].PhoneNo+">"+
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
        " &#9679; <a href=tel:"+json.records[i].CountryCode+json.records[i].PhoneNo+">"+
        json.records[i].CountryCode+" "+json.records[i].PhoneNo+
        "</div><input class='eduprewid' style='display: none;' value='"+
        json.records[i].CardId+"'/>";
  
       }
       
      }
      document.getElementById('myeduc-appr').style.backgroundImage = "none";
    });  
  }  

  function showeduin(label){
    $('#showedpro').empty();
    $('#connected1').empty();$('#connected2').empty();
    $('#showedprotod').empty();$('#edtdstrfulsr').empty();$('#edunlink').empty();$('#edullink').empty();
    document.getElementById('eduproste').style.display = "block";
    document.getElementById('loader-edpr').style.display = "block";

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

          document.getElementById('showedpro').innerHTML = "<div class='edproindv'><span class='ednametitle'>"+
          json.records[i].FName+" "+json.records[i].LName+"</span><img class='edpropic' src='"+
          json.records[i].ProfilePic+"'><br> &#9679; "+json.records[i].Subject+ " &#9679; "+ json.records[i].Class + " &#9679; "+json.records[i].Board+
          "<br> &#9679; <a href='mailto:"+ json.records[i].Email +"'>"+ json.records[i].Email + "</a>"+
          " &#9679; <a href=tel:"+json.records[i].CountryCode+json.records[i].PhoneNo+">"+
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
        }
          if(json.records[i].TOD !=""){
            var TOD = unescape(json.records[i].TOD);
        var singlest = TOD.split("{td},");
        var lenstr = singlest.length;
      //      var TOD = JSON.parse(json.records[i].TOD);
          for (var w=0; w<lenstr-1;w++) {
    //        var j = 0;
            document.getElementById("showedprotod").innerHTML += '<div class="wrapTOD"><div class="card">'+
            '<img class="card-img-top" src="' + singlest[w+3] + '"><div class="card-body"><h4>' + singlest[w+1] + '</h4></div> <div class="card-footer" style="text-align:left;"><p>' + singlest[w+2] + '</p></div> </div></div><input class="topictdid" style="display: none;" value="'+singlest[w] +'"><br><hr class="edprevtodhr">';
            document.getElementById("edtdstrfulsr").innerHTML += '<div class="wrapTODfl"><div class="card">'+
            '<img class="card-img-top" src="' + singlest[w+3] + '"><div class="card-body"><h4>' + singlest[w+1] + '</h4></div> <div class="card-footer" style="text-align:left;"><p>' + singlest[w+2] + '</p></div> </div></div><input class="topictdid" style="display: none;" value="'+singlest[w] +'"><br><hr class="edprevtodhr">';
            
            w= w+3;
           
       /*     var maxTOD = TOD.title.length;
            var wrapperTOD = $(".wrapTOD");
            var add_buttonTOD = $(".add_button_TOD");
            $(add_buttonTOD).on("click", function(e) {
              e.preventDefault();
              if (j < maxTOD) {
                j++;
                $(wrapperTOD).append('<br><div class="wrapTOD"><div class="card"> <img class="card-img-top" src="' + TOD.thumb_ref[j] + '"><div class="card-body"><h4>' + TOD.title[j] + '</h4></div> <div class="card-footer" style="text-align:left;"><p>' + TOD.brief_topic[j] + '</p></div> </div></div>');
              }
              if (j == maxTOD - 1) {
                $(".add_button_TOD").hide();
              }
            });    */      
          }
          }
         else{
             document.getElementById("showedprotod").innerHTML = '<div class="nocontenttod"><svg xmlns="http://www.w3.org/2000/svg" style="color:#8a8a8b;" width="60" height="60" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">'+
                  '<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'+
                  '<path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/></svg>'+
                  '<br><h5 style="color:#474749;font-size:16px;">No Recent Topic Updated</h5></div>';
                  document.getElementById("edtdstrfulsr").innerHTML = '<div class="nocontenttod"><svg xmlns="http://www.w3.org/2000/svg" style="color:#8a8a8b;" width="60" height="60" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">'+
                  '<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'+
                  '<path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/></svg>'+
                  '<br><h5 style="color:#474749;font-size:16px;">No Recent Topic Updated</h5></div>';
            }

         if(json.records[i].ExternalNoteId !=0) {   
          document.getElementById("showedulink").style.display="block";      
          document.getElementById("edunlink").innerHTML = '<a class="edulink" target="_blank" href="' +json.records[i].ExternalNoteId+ '">Notes</a>';
             } 
        
         if(json.records[i].ExternalLecId !=0) {
              document.getElementById("showedulink").style.display="block";
              document.getElementById("edullink").innerHTML = '<a class="edulink" target="_blank" href="' +json.records[i].ExternalLecId+ '">Lectures</a>';
             }          
          document.getElementById('loader-edpr').style.display = "none";
         }
                    
      }
      });    
      
}

$('#fullscrntod').click(function(){
$('#edtdstrfulsr').slideDown('fast');
});
$('#edtdstrfulsr').click(function(){
  $('#edtdstrfulsr').slideUp('fast');
  });
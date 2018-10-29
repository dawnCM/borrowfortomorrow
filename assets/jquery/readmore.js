$(document).ready(function(){
	var div1=1,div2=1,div3=1,div4=1,div5=1;

    $("#btnid-1").click(function(){
      $("#1").toggle("slow");
      if(div1==1){
      	$("#btnid-1").html("Read Less <i class='fa fa-arrow-left'></i>");
      	div1=0;	
      }else{
      	$("#btnid-1").html("Read More <i class='fa fa-arrow-right'></i>");
      	div1=1;	
      }
    });

    $("#btnid-2").click(function(){
      $("#2").toggle("slow");
      if(div2==1){
      	$("#btnid-2").html("Read Less <i class='fa fa-arrow-left'></i>");
      	div2=0;	
      }else{
      	$("#btnid-2").html("Read More <i class='fa fa-arrow-right'></i>");
      	div2=1;	
      }
    });

    $("#btnid-3").click(function(){
      $("#3").toggle("slow");
      if(div3==1){
      	$("#btnid-3").html("Read Less <i class='fa fa-arrow-left'></i>");
      	div3=0;	
      }else{
      	$("#btnid-3").html("Read More <i class='fa fa-arrow-right'></i>");
      	div3=1;	
      }
    });

    $("#btnid-4").click(function(){
      $("#4").toggle("slow");
      if(div4==1){
      	$("#btnid-4").html("Read Less <i class='fa fa-arrow-left'></i>");
      	div4=0;	
      }else{
      	$("#btnid-4").html("Read More <i class='fa fa-arrow-right'></i>");
      	div4=1;	
      }
    });

    $("#btnid-5").click(function(){
      $("#5").toggle("slow");
      if(div5==1){
      	$("#btnid-5").html("Read Less <i class='fa fa-arrow-left'></i>");
      	div5=0;	
      }else{
      	$("#btnid-5").html("Read More <i class='fa fa-arrow-right'></i>");
      	div5=1;	
      }
    });
});
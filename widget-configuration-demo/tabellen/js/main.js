
/* display images select button */

$("#left-list a").click(function (){
    compareleft(this);
});

$("#right-list a").click(function (){
    compareright(this);
});

function compareleft(compare1){
    console.log("compare1");
    $("#select-left img").attr('src', $(compare1).find('img').attr('src') );
    $("#select-left span").text($(compare1).text());

    loadTablecontent(compare1, "left");

    $("#left-list").collapse("hide");
}

function compareright(compare2){
    $("#select-right img").attr('src', $(compare2).find('img').attr('src') );
        $("#select-right span").text($(compare2).text());
        
        loadTablecontent(compare2, "right");
        
        $("#right-list").collapse("hide");
}


/* load & paste individual results */

function loadTablecontent(ref,position){
    
    for(var i = 1; i<=3; i++) {
        $("#cat-"+i+"-"+position).load("tabellen/"+$(ref).text()+"-"+i+".html", function(){

        var fat1r = $("b");
        var r1r = $("#cat-1-right").find(fat1r).text();
        $("#result-right .right-result-cat-1").html("<b>" + r1r + "</b>");  
        
        var fat2r = $("b");
        var r2r = $("#cat-2-right").find(fat2r).text();
        $("#result-right .right-result-cat-2").html("<b>" + r2r + "</b>");    
            
        var fat3r = $("b");
        var r3r = $("#cat-3-right").find(fat3r).text();
        $("#result-right .right-result-cat-3").html("<b>" + r3r + "</b>");
        
        
        var fat1l = $("b");
        var r1l = $("#cat-1-left").find(fat1l).text();
        $("#result-left .left-result-cat-1").html("<b>" + r1l + "</b>");
        
        var fat2l = $("b");
        var r2l = $("#cat-2-left").find(fat2l).text();
        $("#result-left .left-result-cat-2").html("<b>" + r2l + "</b>");
        
        var fat3l = $("b");
        var r3l = $("#cat-3-left").find(fat3l).text();
        $("#result-left .left-result-cat-3").html("<b>" + r3l + "</b>");
        
        var fat1r = $("b");
        var r1r = parseInt($("#cat-1-right").find(fat1r).text(), 10);

        var fat2r = $("b");
        var r2r = parseInt($("#cat-2-right").find(fat2r).text(), 10);

        var fat3r = $("b");
        var r3r = parseInt($("#cat-3-right").find(fat3r).text(), 10);

        var fat1l = $("b");
        var r1l = parseInt($("#cat-1-left").find(fat3r).text(), 10);

        var fat2l = $("b");
        var r2l = parseInt($("#cat-2-left").find(fat3r).text(), 10);

        var fat3l = $("b");
        var r3l = parseInt($("#cat-3-left").find(fat3r).text(), 10);

        var trl = r1l+r2l+r3l;                                      // end result left
        var trr = r1r+r2r+r3r;                                      // end result right
        
        $("#result-left .leftresult-color").html("<b>" + trl + "</b>");
        $("#result-right .rightresult-color").html("<b>" + trr + "</b>");
        
        /* define background color depending on result */

        if ( trr < trl) {
            
            var rightresultcolor = { backgroundColor : '#f2dede', color : '#333' };
            var leftresultcolor = { backgroundColor : '#dff0d8', color : '#333' };
            $(".rightresult-color").css(rightresultcolor);
            $(".leftresult-color").css(leftresultcolor);
            $( "#left-win" ).html("<img src='img/trophy.png'>");
            $( "#right-win" ).html("&nbsp;");
            

            } else if ( trr === trl) {
                
                var rightresultcolor = { backgroundColor : '#f3f3f3!important', color : '#333' };
                var leftresultcolor = { backgroundColor : '#f3f3f3!important', color : '#333' };
                $(".rightresult-color").css(rightresultcolor);
                $(".leftresult-color").css(leftresultcolor);
                $( "#right-win" ).html("&nbsp;");
                $( "#left-win" ).html("&nbsp;");

            } else {
                var rightresultcolor = { backgroundColor : '#dff0d8!important', color : '#333' };
                var leftresultcolor = { backgroundColor : '#f2dede!important', color : '#333' };
                $(".rightresult-color").css(rightresultcolor);
                $(".leftresult-color").css(leftresultcolor);
                $( "#right-win" ).html("<img src='img/trophy.png'>");
                $( "#left-win" ).html("&nbsp;");
                

            }
            
        
        });   
      
    }
}


function toggleSubscribe(){
    $('#subscribe').modal('toggle');
    $.cookie('applicant-tracking', '1', { expires: 7, path: '/' }); // set cookie, expires after 7 days
}

/* lock modale */

$('#subscribe').modal({
    backdrop: 'static',
    keyboard: false
});

/* toggle transition */

$(function() {
	$("#select-left, .list-group-item").click(function() {
		$(".caret-normal-left").toggleClass("caret-turn");
	});
});

$(function() {
	$("#select-right, .list-group-item").click(function() {
		$(".caret-normal-right").toggleClass("caret-turn");
	});
});

/* trigger toolips if mobile*/


if ($(window).width() < 500) {
    $(function () {
    $('[data-toggle="tooltip"]').tooltip();
    });
}

/* calculate result */
$(document).ready(function(){

    $("#left-list a").click(function (){

        var count1left = $("#cat-1-left").find('.green').length;
        var count2left = $("#cat-2-left").find('.green').length;
        var count3left = $("#cat-3-left").find('.green').length;

        var resultleft = count1left + count2left + count3left;
        

    });
    
    $("#right-list a").click(function (){
    
        var count1right = $("#cat-1-right").find('.green').length;
        var count2right = $("#cat-2-right").find('.green').length;
        var count3right = $("#cat-3-right").find('.green').length;
        
        var resultright = count1right + count2right + count3right;
        
        

    });
    
});


/* display selected names in result */

 $(document).ready(function(){

    $("#right-list a").click(function (){
        
        var spantags = $("span");
        var selectedname = $("#select-right").find(spantags).text();
        $("#result-right #result-title-right").text(selectedname);
        
    });
    
    $("#left-list a").click(function (){
        
        var spantags = $("span");
        var selectedname = $("#select-left").find(spantags).text();
        $("#result-left #result-title-left").text(selectedname);
        
    });
       
}); 
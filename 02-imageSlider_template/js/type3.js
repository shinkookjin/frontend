$(function(){
    // type2에 추가된 기능 마우스 오버하면 페이드 아웃 효과 멈춤
    // hover() 이벤트

    $("#slider ul li.item:gt(0)").hide();   
    var fading;    
    function start(){
        fading = setInterval(function(){
            $("#slider ul li.item:first").fadeOut(1000).next().fadeIn(1000).end().appendTo("#slider ul");
        },2000)
    }

    function stop(){
        clearInterval(fading)
    }
    
    $("#slider li").hover(function(){
        stop();
    },function(){
        start();
    })
    start();
})
$(function(){
    //slider 라는 아이디 속성을 가진 요소를 선택하는 스크립트 소스의 차이점
    // jQuery  ==> $("#slider")
    //              $(".slider")
    // javascript ==> document.getElementById("slider")
    //              document.getElementsByClassName("slider")

    // type1은 단순히 보이고 안보이고,
    // type2는 서서히 보이고 안보이고,

    //각 이미지는 absolute로 모두 겹쳐져 있음
    
    //인덱스 0 보다 큰 요소들은 안보이게 시작.
    $("#slider ul li.item:gt(0)").hide();

    // next() 선택요소의 다음으로 이동
    // end() 선택 이동을 종료하여 다시 처음으로 이동
    // 메소드 체이닝으로 
    // appendTo() 선택요소를 마지막으로 이동
    
    setInterval(function(){
        $("#slider ul li.item:first").fadeOut(1000).next().fadeIn(1000).end().appendTo("#slider ul")
    },2000)

});
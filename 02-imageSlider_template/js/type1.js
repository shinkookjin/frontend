$(document).ready(function(){
    // $ ==> jQuery 의 약자
    // document  ==> 문서객체가 들어 있는 변수


    //일정한 시간 주기로 이미지를 순서대로 보여주는 슬라이드 코드
    $items = $("#slider ul li.item");
    // setTimeout();   원하는 시간 이후 실행
    // setInterval();  원하는 주기 마다 반복 실행
    
    var currentIndex = 1;
    var imgCount = $items.length;
    
    setInterval(function(){
        if(currentIndex >= imgCount) currentIndex = 0;

        // 모든 이미지의 active 클래스 제거
        $items.removeClass('active');

        // currentIndex의 이미지에 active 클래스 추가, currentIndex 에 1을 증가시켜 놓음
        $items.eq(currentIndex++).addClass('active');
    },1000)

})
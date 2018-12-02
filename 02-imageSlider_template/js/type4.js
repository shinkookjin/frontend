$(function(){

    $("#slider ul li.item:gt(0)").hide();   
    $(window).resize(()=>{
        resizePanelPosition()
    })
    
    function resizePanelPosition(){
        $left = $("#slider .control .left i");
        $right = $("#slider .control .right i");
        $controlPanel = $("#slider .control a");
        $img = $("#slider .item img");

        let imgHeight = $img.height();
        let adjustPosition = imgHeight - imgHeight/2;

        $controlPanel.css("height", imgHeight + "px");
        $left.css("padding-top", adjustPosition + "px");
        $right.css("padding-top", adjustPosition + "px");
        // console.log(".item last", $("#slider ul .item:first").last());
    }
    
    resizePanelPosition();
    
    function nextSlide() {
        $("#slider ul .item:first")
          .fadeOut(1000)
          .next()
          .fadeIn(1000)
          .end()
          .appendTo("#slider ul");
      }
      // prev image sliding
      function prevSlide() {
        $("#slider ul .item:first")
          .fadeOut(1000)
          .siblings()
          .last()
          .fadeIn(1000);
        $("#slider ul .item:last").prependTo("#slider ul");
      }
    
      $("#slider .control a").hover(
        event => {
          $(event.target).css("background-color", "rgba(0,0,0,.5)");
        },
        event => {
          $(event.target).css("background-color", "rgba(0,0,0,0)");
        }
      );
    
      $("#slider .control a").click(event => {
        if ($(event.target).hasClass("left")) {
          prevSlide();
        } else {
          nextSlide();
        }
      });

    // function nextImg(){
    //     $("#slider ul li.item:first").fadeOut(1000).next().fadeIn(1000).end().appendTo("#slider ul");
    // }
    // function prevImg(){
    //     $("#slider ul li.item:first").fadeOut(1000).next().fadeIn(1000).end().appendTo("#slider ul");

    // }


    // $("#slider .control .left").click(function(){
    //     prevImg();
    // });
    // $("#slider .control .right").click(function(){
    //     nextImg();
    // });



})
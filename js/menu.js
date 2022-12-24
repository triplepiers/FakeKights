// 滚轮事件和menu点击事件的处理
    var bigBox = document.getElementById("bottom");
    var pg = document.querySelectorAll(".pg ul li");
    var lis = document.querySelectorAll(".controls li");
    var viewHeight = document.body.clientHeight;
    var flag = true;
    var index = 0;

    const list = document.querySelectorAll('.num-wrapper li');
    function activeLink() {
        list.forEach((item) => item.classList.remove('active'));
        this.classList.add('active');
    }
    list.forEach((item) => 
    item.addEventListener('click', activeLink));

    function on(obj,eventType,fn){
        if(obj.addEventListener){
            obj.addEventListener(eventType, fn);
        }else{
            obj.attachEvent("on" + eventType, fn);
        }
    }

    function handler(e){
        var _e = window.event || e;
        if(flag){
            flag = false;
            if(_e.wheelDelta==120 || _e.detail==-3){
                index--;
                if(index<0){
                    index = 0;
                }
            }else{
                index++;
                if(index>lis.length-1){
                    index = lis.length-1;
                }
            }
            bigBox.style.top = -index*viewHeight + "px";
            for(var i=0; i<pg.length; i++) {
                pg[i].style.top = -index*21 + "px";
            }
            for(var i=0; i<lis.length; i++){
                lis[i].className = "";
            }
            lis[index].className = "active";
            setTimeout(function(){
                flag = true;
            },1000);
        }
    }
    on(document,"mousewheel",handler);
    on(document,"DOMMouseScroll",handler);

    for(var i=0; i<lis.length; i++){
        lis[i].tag = i;
        lis[i].onclick = function(){
            for(var j=0; j<lis.length; j++){
                lis[j].className = "";
            }
            lis[this.tag].className = "active";
            bigBox.style.top = -this.tag*viewHeight + "px";
            for(var j=0; j<pg.length; j++) {
                pg[j].style.top = -this.tag*21 + "px";
            }
        }
    }

    // 档案 - 节事回顾 button 处理
    var event_review = document.getElementById("event-review");
    var lil_container = document.querySelector("div.lil-container");
    var section_media = document.getElementById("section-media");
    event_review.addEventListener("click", function() {
        lil_container.classList.remove("active");
        section_media.classList.add("active");
    });
    var cross = document.querySelector("div.cross");
    cross.addEventListener("click", function() {
        lil_container.classList.add("active");
        section_media.classList.remove("active");
    });
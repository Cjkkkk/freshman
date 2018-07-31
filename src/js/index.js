var sessions = document.getElementsByClassName("session")
var containers = document.getElementsByClassName("container")
var title = document.getElementById("declaration")
var site = document.getElementById("official-site")
var url = document.getElementById("url")
var state = true
var device = "PC"
var current_container = 0
// zIndex
// -100(container初始位置) 1(封面4个session元素初始位置) 
// 点击后 50(container主体文字容器的出现位置) 100 (被点击的session元素出现位置)
window.onload = function(){
    var mq = window.matchMedia("(min-width: 700px)")
    if (mq.matches) {
    // window width is at least 700px
        mq = window.matchMedia("(orientation: landscape) and (min-width: 700px),(min-width: 1025px)")
        if (mq.matches) {
            device = "PC"
        }else{
            device = "ipad"
        }
    } else {
    // window width is less than 700px
        device = "phone"
    }
}

var move_in_PC = function(i){
    console.log("pc")
    var session = sessions[i]
    var container = containers[i]
    var p_collection = session.getElementsByTagName("p")
    var return_button = container.getElementsByClassName("return")[0]
    var img = session.getElementsByTagName("img")[0]
    session.style.width = "100vw"
    session.style.left = 0
    session.style.zIndex = 100
    setTimeout(()=>{
        //三个p标签字体变为白色
        p_collection[0].style.color = "#ffffff"
        p_collection[1].style.color = "#ffffff"
        p_collection[2].style.color = "#ffffff"
        //改变3个p的位置
        p_collection[0].style.top = "5vh"
        p_collection[1].style.top = "6vh"
        p_collection[2].style.top = "13vh"
        p_collection[0].style.left = "5vw"
        p_collection[1].style.left = "15vw"
        p_collection[2].style.left = "15vw"
        container.style.display = "block"
        session.style.backgroundPosition = "right bottom"
        session.style.height = "25vh"
        url.style.color = "#ffffff"
        title.style.color = "#ffffff"  
        img.style.opacity = 0;
    },500)
    setTimeout(()=>{
        img.style.width = 0;
    },1000)

}

var move_out_PC = function(i){
    console.log("pc")
    var session = sessions[i]
    var container = containers[i]
    var p_collection = session.getElementsByTagName("p")
    var return_button = container.getElementsByClassName("return")[0]
    var img = session.getElementsByTagName("img")[0]
    session.style.zIndex = 1
    session.style.height = "100vh"
    p_collection[0].style.color = "#0db2a9"
    p_collection[0].style.left = "20%"
    p_collection[0].style.top = "25%"
    p_collection[1].style.color = "#000000"
    p_collection[1].style.left = "20%"
    p_collection[1].style.top = "57%"
    p_collection[2].style.color = "#000000"
    p_collection[2].style.left = "20%"
    p_collection[2].style.top = "65%"
    session.style.backgroundPosition = "left bottom"
    session.style.width = "25%"
    session.style.left = i * 25 + "%"
    container.style.display = "none"
    url.style.color = "#000000"
    title.style.color = "#000000"
    img.style.opacity = 1
}


var move_in_phone = function(i){
    console.log("phone")
    var session = sessions[i]
    var container = containers[i]
    var p_collection = session.getElementsByTagName("p")
    var return_button = container.getElementsByClassName("return")[0]
    var img = session.getElementsByTagName("img")[0]
    img.style.left = "50%";
    img.style.width = "50%"
    session.style.backgroundPosition = "right bottom"
    session.style.zIndex = 100//浮动到上方
    p_collection[0].style.color = "#ffffff"
    p_collection[1].style.color = "#ffffff"
    p_collection[2].style.color = "#ffffff"
    setTimeout(()=>{
        p_collection[0].style.left = "10%"
        p_collection[1].style.left = "30%"
        p_collection[2].style.left = "30%"
        container.style.display = "block"
        url.style.color = "#ffffff"
        title.style.color = "#ffffff"
        session.style.top = 0;
        img.style.opacity = 0;
    },500)
    setTimeout(()=>{
        img.style.width = 0;
    },1000)
}

var move_out_phone = function(i){
    console.log("phone")
    var session = sessions[i]
    var container = containers[i]
    var p_collection = session.getElementsByTagName("p")
    var return_button = container.getElementsByClassName("return")[0]
    var img = session.getElementsByTagName("img")[0]
    session.style.zIndex = 1
    p_collection[0].style.color = "#0db2a9"
    p_collection[0].style.left = "20%"
    p_collection[0].style.top = "20%"
    p_collection[1].style.color = "#000000"
    p_collection[1].style.left = "50%"
    p_collection[1].style.top = "25%"
    p_collection[2].style.color = "#000000"
    p_collection[2].style.left = "50%"
    p_collection[2].style.top = "50%"
    session.style.backgroundPosition = "left bottom"
    session.style.top = i * 20 + 10 + "%"
    container.style.display = "none"
    url.style.color = "#000000"
    site.style.top = "4%"
    title.style.color = "#000000"
    title.style.top = "4%"
    img.style.opacity = 1
    img.style.width = "0"
    img.style.left = "100%"
}


var move_in_ipad = function(i){
    console.log("ipad")
    var session = sessions[i]
    var container = containers[i]
    var p_collection = session.getElementsByTagName("p")
    var return_button = container.getElementsByClassName("return")[0]
    var img = session.getElementsByTagName("img")[0]
    img.style.left = "50%";
    img.style.width = "50%"
    session.style.backgroundPosition = "right bottom"
    session.style.zIndex = 100//浮动到上方
    p_collection[0].style.color = "#ffffff"
    p_collection[1].style.color = "#ffffff"
    p_collection[2].style.color = "#ffffff"
    setTimeout(()=>{
        p_collection[0].style.left = "10%"
        p_collection[1].style.left = "30%"
        p_collection[2].style.left = "30%"
        container.style.display = "block"
        url.style.color = "#ffffff"
        title.style.color = "#ffffff"
        session.style.top = 0;
        img.style.opacity = 0;
    },500)
    setTimeout(()=>{
        img.style.width = 0;
    },1000)
}

var move_out_ipad = function(i){
    console.log("ipad")
    var session = sessions[i]
    var container = containers[i]
    var p_collection = session.getElementsByTagName("p")
    var return_button = container.getElementsByClassName("return")[0]
    var img = session.getElementsByTagName("img")[0]
    session.style.zIndex = 1
    p_collection[0].style.color = "#0db2a9"
    p_collection[0].style.left = "20%"
    p_collection[0].style.top = "20%"
    p_collection[1].style.color = "#000000"
    p_collection[1].style.left = "50%"
    p_collection[1].style.top = "25%"
    p_collection[2].style.color = "#000000"
    p_collection[2].style.left = "50%"
    p_collection[2].style.top = "50%"
    session.style.backgroundPosition = "left bottom"
    session.style.top = i * 20 + 10 + "%"
    container.style.display = "none"
    url.style.color = "#000000"
    title.style.color = "#000000"
    img.style.opacity = 1
    img.style.width = "0"
    img.style.left = "100%";
}


for(var i = 0 ; i < sessions.length ; i++ ){
    (function(i){
        session = sessions[i]
        return_button = containers[i].getElementsByClassName("return")[0]
        session.style.zIndex = 1;
        return_button.addEventListener("click",function(){
            current_container = i;
            var mq = window.matchMedia("(min-width: 700px)")
            if (mq.matches) {
            // window width is at least 700px
                mq = window.matchMedia("(orientation: landscape) and (min-width: 700px),(min-width: 1025px)")
                if (mq.matches) {
                    move_out_PC(i)
                }
                else{
                    move_out_ipad(i)
                }
            } else {
            // window width is less than 1025px
                move_out_phone(i)
            }
            state = true
        })

        session.addEventListener("click",function(event){
            current_container = i;
            var mq = window.matchMedia("(min-width: 700px)")
            if (mq.matches) {
            // window width is at least 700px
                mq = window.matchMedia("(orientation: landscape) and (min-width: 700px),(min-width: 1025px)")
                if (mq.matches) {
                    // window width is at least 1025px
                    if(state){
                        move_in_PC(i)
                        state = false
                    }else{
                        move_out_PC(i)
                        state = true;
                    }
                }else{
                    if(state){
                        move_in_ipad(i)
                        state = false
                    }else{
                        move_out_ipad(i)
                        state = true;
                    }
                }
            } else {
            // window width is less than 700px
                if(state){
                    move_in_phone(i)
                    state = false
                }else{
                    move_out_phone(i)
                    state = true;
                }
            }
        })
    })(i)
    
}

//设置滚动到特定元素事件
// let 代替 var IEEF
for(var i = 0 ; i < containers.length ; i++ ){
    (function(i){
        var container = containers[i]
        window.addEventListener('scroll', function(e) {
            var title_set = container.getElementsByClassName("Main-title")
            if(window.scrollY > window.innerHeight * 0.3){
                var button_set = container.getElementsByClassName("button-set")[0]
                button_set.style.top = "5vh"
            }
            if(window.scrollY < window.innerHeight * 0.4){
                var button_set = container.getElementsByClassName("button-set")[0]
                button_set.style.top = "30vh"
            }
            for(var i = 0 ; i  < title_set.length ; i++){
                rect = title_set[i].getBoundingClientRect()
                var in_viewport = rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
                rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
                // console.log(i,in_viewport)
                var border = title_set[i].getElementsByClassName("border")[0]
                if(in_viewport){
                    border.style.width = "100%"
                }
                else border.style.width = 0
            }
        });
    })(i)
}
var clear_style = function(){
    for(var i = 0 ; i < sessions.length ; i++){
        var session = sessions[i]
        var container = containers[i]
        var p_collection = session.getElementsByTagName("p")
        var return_button = container.getElementsByClassName("return")[0]
        var img = session.getElementsByTagName("img")[0]
        if(session.style)session.style = ""
        if(container.style)container.style = ""
        if(p_collection[0].style)p_collection[0].style = ""
        if(p_collection[1].style)p_collection[1].style = ""
        if(p_collection[2].style)p_collection[2].style = ""
        if(return_button.style)return_button.style = ""
        if(img.style)img.style = ""
    }
}
window.onresize = function(){

    var mq = window.matchMedia("(min-width: 700px)")
    if (mq.matches) {
    // window width is at least 700px
        mq = window.matchMedia("(orientation: landscape) and (min-width: 700px),(min-width: 1025px)")
        if (mq.matches) {
            // window width is at least 1025px
            modified_devide = "PC"
            if(modified_devide != device){
                clear_style()
                device = modified_devide
                if(state){
                    // move_out_PC(current_container)
                    console.log("PC out")
                    
                }else{
                    move_in_PC(current_container)
                    console.log("PC in ")
                }
            }
        }else{
            modified_devide = "ipad"
            if(modified_devide != device){
                console.log("ipad in out")
                clear_style()
                device = modified_devide
                if(state){
                    
                }else{
                    move_in_ipad(current_container)
                    
                }
            }
        }
    } else {
    // window width is less than 700px
        modified_devide = "phone"
        if(modified_devide != device){
            clear_style()
            device = modified_devide
            if(state){
                // move_out_phone(current_container)
                console.log("phone out")
            }else{
                move_in_phone(current_container)
                console.log("phone in ")
                
            }
        }
    }
}
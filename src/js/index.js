const sessions = document.getElementsByClassName("session")
    var containers = document.getElementsByClassName("container");
    for(var i = 0 ; i < sessions.length ; i++ ){
        sessions[i].style.zIndex = 1;
        (function(i,state){
            var session = sessions[i]
            var container = containers[i]
            var p_collection = session.getElementsByTagName("p")
            var title = document.getElementById("declaration")
            var site = document.getElementById("official-site")
            var url = document.getElementById("url")
            var return_button = container.getElementsByClassName("return")[0]
            var img = session.getElementsByTagName("img")[0]

            const move_in_PC = ()=>{
                console.log("pc")
                session.style.width = "100vw"
                session.style.left = 0
                session.style.zIndex = 100
                setTimeout(()=>{
                    p_collection[0].style.color = "#ffffff"
                    p_collection[0].style.top = "20%"
                    p_collection[0].style.left = "5%"
                    p_collection[1].style.color = "#ffffff"
                    p_collection[1].style.top = "23%"
                    p_collection[1].style.left = "10%"
                    p_collection[2].style.color = "#ffffff"
                    p_collection[2].style.top = "45%"
                    p_collection[2].style.left = "10%"
                    container.style.display = "block"
                    container.style.position = "absolute"
                    container.style.left = "0"
                    container.style.height = "100vh"
                    container.style.width = "100%"
                    container.style.zIndex = 50
                    container.style.backgroundColor="#ffffff"
                    session.style.backgroundPosition = "right bottom"
                    session.style.height = "25vh"
                    url.style.color = "#ffffff"
                    site.style.top = "1.5%"
                    title.style.color = "#ffffff"
                    title.style.top = "1.5%"
                    img.style.opacity = 0;

                },500)
                setTimeout(()=>{
                    img.style.width = 0;
                },1000)

            }

            const move_out_PC = ()=>{
                console.log("pc")
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
                container.style.zIndex = -100
                container.style.height = 0
                container.style.display = "none"
                url.style.color = "#000000"
                site.style.top = "4%"
                title.style.color = "#000000"
                title.style.top = "4%"
                img.style.opacity = 1;
                img.style.width = "100%"
            }


            const move_in_phone = ()=>{
                console.log("phone")
                session.style.backgroundPosition = "right bottom"
                session.style.zIndex = 100//浮动到上方
                p_collection[0].style.color = "#ffffff"
                p_collection[1].style.color = "#ffffff"
                p_collection[2].style.color = "#ffffff"
                setTimeout(()=>{
                    // p_collection[0].style.top = "20%"
                    p_collection[0].style.left = "10%"
                    // p_collection[1].style.top = "23%"
                    p_collection[1].style.left = "30%"
                    // p_collection[2].style.top = "50%"
                    p_collection[2].style.left = "30%"
                    container.style.position = "absolute"
                    container.style.left = "0"
                    container.style.height = "100vh"
                    container.style.width = "100%"
                    container.style.zIndex = 50
                    container.style.backgroundColor="#ffffff"
                    url.style.color = "#ffffff"
                    site.style.top = "1.5%"
                    title.style.color = "#ffffff"
                    title.style.top = "1.5%"
                    session.style.top = 0;
                },500)
            }

            const move_out_phone = ()=>{
                console.log("phone")
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
                container.style.zIndex = -100
                url.style.color = "#000000"
                site.style.top = "4%"
                title.style.color = "#000000"
                title.style.top = "4%"
            }


            const move_in_ipad = ()=>{
                console.log("ipad")
                session.style.backgroundPosition = "right bottom"
                session.style.zIndex = 100//浮动到上方
                p_collection[0].style.color = "#ffffff"
                p_collection[1].style.color = "#ffffff"
                p_collection[2].style.color = "#ffffff"
                setTimeout(()=>{
                    p_collection[0].style.left = "10%"
                    p_collection[1].style.left = "30%"
                    p_collection[2].style.left = "30%"
                    container.style.position = "absolute"
                    container.style.left = "0"
                    container.style.height = "100vh"
                    container.style.width = "100%"
                    container.style.zIndex = 50
                    container.style.backgroundColor="#ffffff"
                    url.style.color = "#ffffff"
                    site.style.top = "1.5%"
                    title.style.color = "#ffffff"
                    title.style.top = "1.5%"
                    session.style.top = 0;
                },500)
            }

            const move_out_ipad = ()=>{
                console.log("ipad")
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
                container.style.zIndex = -100
                url.style.color = "#000000"
                site.style.top = "4%"
                title.style.color = "#000000"
                title.style.top = "4%"
            }

            return_button.addEventListener("click",function(){
                let mq = window.matchMedia("(min-width: 700px)")
                if (mq.matches) {
                // window width is at least 700px
                    mq = window.matchMedia("(min-width: 1025px)")
                    if (mq.matches) {
                        move_out_ipad()
                    }
                    else{
                        move_out_PC()
                    }
                } else {
                // window width is less than 1025px
                    move_out_phone()
                }
                state = true
            })
            session.addEventListener("click",function(event){
                let mq = window.matchMedia("(min-width: 700px)")
                if (mq.matches) {
                // window width is at least 700px
                    mq = window.matchMedia("(min-width: 1025px)")
                    if (mq.matches) {
                        // window width is at least 1025px
                        if(state){
                            move_in_PC()
                            state = false
                        }else{
                            move_out_PC()
                            state = true;
                        }
                    }else{
                        if(state){
                            move_in_ipad()
                            state = false
                        }else{
                            move_out_ipad()
                            state = true;
                        }
                    }
                } else {
                // window width is less than 700px
                    if(state){
                        move_in_phone()
                        state = false
                    }else{
                        move_out_phone()
                        state = true;
                    }
                }
            })
    })(i,true)
}
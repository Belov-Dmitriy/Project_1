window.onload = function(){

    let search_img_menu_btn = document.querySelector(".search_img_menu");
    let secretive_menu_list_array = document.querySelector(".secretive_menu");

    search_img_menu_btn.onclick = function(){
        secretive_menu_list_array.style.display = "block";
    }

    let secretive_menu_btn_array = document.querySelector(".secretive_menu_btn");
    let secretive_menu_list = document.querySelector(".secretive_menu");

    secretive_menu_btn_array.onclick = function(){
        secretive_menu_list_array.style.display = "none";
    }


}


jQuery(document).ready(function(){

    $(".search__list_search").on("click", function(){
        console.log("hi");
        if($(this).next().hasClass("show_div")){
            $(this).next().removeClass("show_div");
            // $(this).slideUp(500);
        }
        else{
            $(this).next().addClass("show_div");
            // $(this).slideDown(500);
        }
    })

})

// Карусель
jQuery(document).ready(function(){
    
    var w_img = $(".main_wrap_project_picture").width();
    console.log(w_img);

    var w_wrap = $(".main_wrap").width();
    console.log(w_wrap);

    var w_sum_img = $(".main_wrap_project_picture img").length * w_img;
    console.log(w_sum_img);

    var s = 0;

    $(".main_wrap_btn_right").on("click", function(){

        s = s + w_img;
        if(w_sum_img - s >= w_wrap){
            $(".main_wrap_project").animate({"margin-left" : "-=" + w_img},1000);
        }
        else{
            s = s - w_img;
        }
    })

    $(".main_wrap_btn_left").on("click", function(){
        s = s - w_img
        if(s >= 0){
            $(".main_wrap_project").animate({"margin-left" : "+=" + w_img},1000);
        }
        else{
            s = 0;
        }
    })
    
})


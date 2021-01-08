window.onload = function(){
    // Поиск
    // let search_img_search = document.querySelector(".search_img_search");
    // let btn_search__list_item = document.querySelector(".search__list_item");
    // let search__list_cabinet = document.querySelector(".search__list_cabinet");

    // search_img_search.onclick = function(){
    //     // search__list_cabinet.style.display = "none";
    //     btn_search__list_item.style.display = "block";
    //     btn_search__list_item.style.position = "absolute";
    //     btn_search__list_item.style.right = "15px";
    //     btn_search__list_item.style.top = "70px";
    // }

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

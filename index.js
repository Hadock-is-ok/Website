function switch_menu_state() {
    var list = document.getElementsByClassName("menu-item");
    for (var i = 0; i < list.length; i++) {
        if (list[i].style.display === "none") {
            list[i].style.display = "inline";
        } else {
            list[i].style.display = "none";
        }
    }
}

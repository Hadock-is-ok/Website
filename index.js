function handle_switch() {
    var list = document.getElementsByClassName("menu-item");
    list.forEach(switch_display(item));
}

function switch_display(item) {
    if (item.style.display === "none") {
        item.style.display = "block";
    } else {
        item.style.display = "none";
    }
}
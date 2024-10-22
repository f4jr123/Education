// Toggle main About dropdown
document.getElementById("aboutBtn").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("aboutDropdown").classList.toggle("show");
});

// Toggle Galeri submenu dropdown
document.getElementById("galeriBtn").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("galeriDropdown").classList.toggle("show");

    // Toggle arrow rotation
    this.querySelector(".arrow").classList.toggle("rotate");
});

//Toogle Tentang Kami submenu dropdown
document.getElementById("tentangBtn").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("tentangDropdown").classList.toggle("show");

    // Toggle arrow rotation
    this.querySelector(".arrow").classList.toggle("rotate");
});

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.galeri-btn') && !event.target.matches('.tentang-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var submenus = document.getElementsByClassName("dropdown-content-submenu");
        for (var i = 0; i < dropdowns.length; i++) {
            if (dropdowns[i].classList.contains('show')) {
                dropdowns[i].classList.remove('show');
            }
        }
        for (var j = 0; j < submenus.length; j++) {
            if (submenus[j].classList.contains('show')) {
                submenus[j].classList.remove('show');
            }
        }

        // Remove arrow rotation
        var arrows = document.getElementsByClassName("arrow");
        for (var k = 0; k < arrows.length; k++) {
            if (arrows[k].classList.contains("rotate")) {
                arrows[k].classList.remove("rotate");
            }
        }
    }
}
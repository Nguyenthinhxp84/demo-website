//const menuBar = document.querySelector(".menu-bar")
//menuBar.addEventListener("click", function(){
//	menuBar.classList.toggle("active")
//	document.querySelector(".menu-items").classList.toggle("active")
//})

//const toP = document.querySelector('.top')
//window.addEventListener("scroll", function(){
//	const x = this.pageYOffset;
//	if (x>80) {toP.classList.add("active")}
//	else{toP.classList.remove("active")}	
//})



const menuTitle = document.querySelector(".menu-hs-title");
menuTitle.addEventListener("click",function(x) {
	if(x.target.classList.contains("menus-button")){
		const Target = x.target.getAttribute("data-title");
		// console.log(Target)
		menuTitle.querySelector(".active").classList.remove("active");
		x.target.classList.add("active");

		const menuItem = document.querySelector("#menu-hs");
		menuItem.querySelector(".menu-item-content.active").classList.remove("active");
		menuItem.querySelector(Target).classList.add("active")
	}
})

//const toggleButton = document.getElementById('toggle-button');
//const navList = document.getElementById('navi-list');

//	toggleButton.addEventListener('click', ()  {
//	naviList.classList.toggle('active');
//})

 window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        var logo = document.querySelector('.navbar-brand img')
        if (window.pageYOffset > sticky) {
          header_navbar.classList.add("sticky");
          logo.src = 'assets/images/logo/Logo_IUH.png';
        } else {
          header_navbar.classList.remove("sticky");
          logo.src = 'assets/images/logo/Logo_IUH.png';
        }

        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };
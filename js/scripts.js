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

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function () {
        tilt([event.beta, event.gamma]);
    }, true);
} else if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function () {
        tilt([event.acceleration.x * 2, event.acceleration.y * 2]);
    }, true);
} else {
    window.addEventListener("MozOrientation", function () {
        tilt([orientation.x * 50, orientation.y * 50]);
    }, true);
}
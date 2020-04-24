
		window.onscroll = function() {scrollFunction()};
		var mq = window.matchMedia( "(max-width: 768px)");
		
		
		
		function scrollFunction(){
		if(mq.matches){
			document.getElementById("navBar").style.opacity = "80%";
		document.getElementById("navBar").style.padding = "10px 0px";
		}
		else{
			
			if (document.body.scrolltop > 80 || document.documentElement.scrollTop > 80){
			document.getElementById("navBar").style.opacity = "80%";
			document.getElementById("navBar").style.padding = "0px 0px";
			document.getElementById("h").style.top = "60%";
			document.getElementById("a").style.top = "60%";
			document.getElementById("c").style.top = "60%";
			document.getElementById("g").style.top = "60%";
			document.getElementById("logo").style.top = "2px";
			document.getElementById("buffer").style.opacity = "0%";
	
		
		
		
		
		
		
	
			} else {
			document.getElementById("navBar").style.opacity = "100%";
			document.getElementById("navBar").style.padding = "10px 0px";
			document.getElementById("h").style.top = "78%";
			document.getElementById("a").style.top = "78%";
			document.getElementById("c").style.top = "78%";
			document.getElementById("g").style.top = "78%";
			document.getElementById("logo").style.top = "10px";
			document.getElementById("buffer").style.opacity = "100%";
		
		
		
		}
	}
}
		
		
	function openForm(){
		if(mq.matches) {
			
		document.getElementById("sideForm").style.width = "100%";
		} else {
			document.getElementById("sideForm").style.width = "33.3%";
		}
	}
	
	
	
	
		
	function openMiddleForm(){
		if (mq.matches) {
	document.getElementById("middleForm").style.width = "100%";
	document.getElementById("middleForm").style.height = "100%";
	document.getElementById("middleForm").style.visibility = "visible";
	document.getElementById("middleForm").style.left = "0%";
	
	
		} else{
	document.getElementById("middleForm").style.height = "100%";
	document.getElementById("middleForm").style.visibility = "visible";
	document.getElementById("middleForm").style.width = "33.3%";
		}
	
	}
		
		
	function openRightForm(){
		if (mq.matches){
			document.getElementById("rightForm").style.width = "100%";
		} else {
	document.getElementById("rightForm").style.width = "33.4%";
		}
	}
		
		
	function closeSideForm(){
	document.getElementById("sideForm").style.width = "0%";
	
	}
	
	function closeMiddleForm(){
	document.getElementById("middleForm").style.height = "0%";
	document.getElementById("middleForm").style.visibility = "hidden";
	}
	
	function closeRightForm(){
	document.getElementById("rightForm").style.width="0%";
	}
		
	function hamburger(){
		var menu = document.getElementById("navMenu");
		if (menu.style.visibility == "hidden"){
			menu.style.visibility = "visible";
		} else {
			menu.style.visibility = "hidden";
		}
		
		
	}

	
		



		
		
	
		
function openMenu()
{
	document.getElementById("myMenu").style.width = "270px";
	document.getElementById("content").style.opacity = "0.4";
	document.body.style.overflow = "hidden";
}

function closeMenu()
{
	document.getElementById("myMenu").style.width = "0px";
	document.getElementById("content").style.opacity = "1";
	document.body.style.overflow = "visible";
}

var topBtn = document.getElementById("buttonTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction()
{
	if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40)
		topBtn.style.display = "block";
	else topBtn.style.display = "none";
}

function topFunction()
{
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
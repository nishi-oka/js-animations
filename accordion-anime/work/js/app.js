// JavaScriptファイル (app.js)
const accordions = document.querySelectorAll(".list-item");

accordions.forEach(accordion => {
	accordion.addEventListener("click",function (){
		const content = accordion.querySelector(".list-content");
	content.classList.toggle("active");

	if (content.classList.contains("active")){
		content.style.height = content.scrollHeight + "px";
	} else {
		content.style.height= "0px";
	}
	});
});


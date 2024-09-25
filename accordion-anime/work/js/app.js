// JavaScriptファイル (app.js)
const lists = document.querySelectorAll(".list-item");

lists.forEach(list => {
	list.addEventListener("click",function (){
		const content = list.querySelector(".list-content");
	content.classList.toggle("active");

	if (content.classList.contains("active")){
		content.style.height = content.scrollHeight + "px";
	} else {
		content.style.height= "0px";
	}
	});
});

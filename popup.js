
console.log("popup.js start");
$(document).ready(function() {
  console.log(document);
	//input事件註冊
  document.querySelectorAll(".popCheckBox").forEach((it, index) => {
		console.log("querySelectorAll:",document.querySelectorAll(".popCheckBox"));
		let { name } = it;
		it.addEventListener("change", event => {
			console.log("event change");
			// CFG[name].visible = event.target.checked ? true : false;
			checkBlock();
		});
	});
});

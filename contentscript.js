console.log("FB插件起動中 by Majitoo!");
function checkBlock() {
	for(it in CFG)
	{
		let dom=document.querySelector(CFG[it].tag);
		if(dom!=null)
		{
			if(CFG[it].visible)
				dom.style.display = "none";
			else
				dom.style.display = "auto";
		}
	}
}
checkBlock();
window.checkBlock=checkBlock;
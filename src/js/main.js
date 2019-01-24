var myUI;

myUI = {
	init: () => {
		console.log("init");
		myUI.hookInputs();
	},
	hookInputs: () => {
		var troutBtn = createEle("button");
        
        troutBtn.innerHTML = "&nbsp;";
        troutBtn.className = "troutBtn";
        troutBtn.onclick = myUI.generateTrout(troutBtn);

		troutContain.append(troutBtn);
	},
	generateTrout: (troutBtn) => {
		return () => {
            troutBtn.onclick = null;
            makeLock(troutBtn);
            var troutHolder = createEle("div"),
                troutImg = createEle("div"),
                slapImg = createEle("div");

            slapImg.innerHTML = "&nbsp;";
            slapImg.className = "slapImg";

            troutImg.innerHTML = "&nbsp;";
            troutImg.className = "troutImg";

            troutHolder.innerHTML = "&nbsp;";
            troutHolder.className = "troutHolder";
            troutHolder.append(slapImg);
            troutHolder.append(troutImg);        

 
            body.append(troutHolder);

            setTimeout(() => {
            	makeFull(troutHolder);
            	setTimeout(() => {
            		makeFull(troutImg);
            		setTimeout(() => {
            		    makeFull(slapImg);
            	    }, 400);
            	}, 400);
            }, 400);
		}
	}
};

window.onload = () => {
	myUI.init();
};
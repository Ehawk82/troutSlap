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
            var whoosh = new Audio("src/assets/whoosh.wav"),
                tic = new Audio("src/assets/tic.wav"),
                slap = new Audio("src/assets/slap.wav");
            troutBtn.onclick = null;
            playClick(tic);
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
                    playClick(whoosh);
            		makeFull(troutImg);
            		setTimeout(() => {
                        

            		    makeFull(slapImg);
                        setTimeout(() => {
                            playClick(slap);
                        }, 800)
            	    }, 400);
            	}, 400);
            }, 400);
		}
	}
};

window.onload = () => {
	myUI.init();
};
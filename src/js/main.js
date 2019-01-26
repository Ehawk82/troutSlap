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
                slapImg = createEle("div"),
                ooofBtn = createEle("button");
            
            ooofBtn.innerHTML = "\"Ooof!\"";
            ooofBtn.className = "ooofBtn";
            ooofBtn.onclick = myUI.resetWidget(troutBtn, troutHolder, troutImg, slapImg, ooofBtn);

            slapImg.innerHTML = "&nbsp;";
            slapImg.className = "slapImg";

            troutImg.innerHTML = "&nbsp;";
            troutImg.className = "troutImg";

            troutHolder.innerHTML = "&nbsp;";
            troutHolder.className = "troutHolder";
            troutHolder.append(slapImg);
            troutHolder.append(troutImg);       
            troutHolder.append(ooofBtn);       

            body.append(troutHolder);
            
            setTimeout(() => {
            	makeFull(troutHolder);
            	setTimeout(() => {
                    playHighClick(whoosh);
            		makeFull(troutImg);
            		setTimeout(() => {
            		    makeFull(slapImg);
                        setTimeout(() => {
                            playClick(slap);
                            setTimeout(() => { 
                                playClick(slap);
                            },30);
                            makeFull(ooofBtn);
                        }, 800)
            	    }, 400);
            	}, 400);
            }, 400);
		}
	},
    resetWidget: (troutBtn, troutHolder, troutImg, slapImg, ooofBtn) => {
        return () => {
            deleteThis(ooofBtn);
            setTimeout(() => {
                takeFull(slapImg);
                setTimeout(() => {
                    takeFull(troutImg);
                    setTimeout(() => {
                        takeFull(troutHolder);
                        setTimeout(() => {
                            deleteThis(troutHolder);
                        }, 800)
                    }, 600);
                }, 400);
            }, 200);

            takeLock(troutBtn);
            troutBtn.onclick = myUI.generateTrout(troutBtn);
        };
    }
};

window.onload = () => {
	myUI.init();
};
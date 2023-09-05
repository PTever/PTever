function checkAgreement() {
    all.addEventListener("click", (e) => {
        const checked = e.target.checked;
        if(checked) {
            terms.forEach((term) => {
                term.checked = true;
            });
            agreementBtn.disabled = false;
        } else {
            terms.forEach((term) => {
                term.checked = false;
            });
            agreementBtn.disabled = true;
        }
    });

    terms.forEach((term) => {
        term.addEventListener("click", (e) => {
         all.checked = terms.map((term) => term.checked).filter((checked) => checked).length == 3;
         if(all.checked) {
            agreementBtn.disabled = false;
         } else {
            all.checked = false;
            agreementBtn.disabled = true;
         }
        });
    });
    
}


function checkAgreementMobile() {
    allMobile.addEventListener("click", () => {
        const checkedMobile = e.target.checked;
        if(checkedMobile) {
            termsMobile.forEach((term) => {
                term.checked = true;
            });
            agreementBtnMobile.disabled = false;
        } else {
            terms.forEach((term) => {
                term.checked = false;
            });
            agreementBtnMobile.disabled = true;
        }
    
    });
    
    termsMobile.forEach((term) => {
      term.addEventListener("click", (e) => {
        allMobile.checked = termsMobile.map((term) => term.checked).filter((checked) => checked).length == 3;
        if(allMobile.checked) {
            agreementBtnMobile.disabled = false;
         } else {
            all.checked = false;
            agreementBtnMobile.disabled = true;
         }
      });
    });
    
}
jQuery(document).ready(function () {
    jQuery("body").on('click', function () {
        console.log("Lights Out! And away we go!");
        var mercedez = document.getElementById('mercedez');
        var ferrari = document.getElementById('ferrari');
        var redbull = document.getElementById('redbull');

        // Setup for a standard Free Practice 1
        mercedez.className = "fp1 standard-session";
        ferrari.className = "fp1 standard-session";
        redbull.className = "fp1 standard-session";

        // Team and its strategies which plat a key role across sessions decided here
        mercedez.addEventListener("animationstart", listener, false);
        mercedez.addEventListener("animationend", listener, false);
        mercedez.addEventListener("animationiteration", listener, false);

        ferrari.addEventListener("animationstart", listener, false);
        ferrari.addEventListener("animationend", listener, false);
        ferrari.addEventListener("animationiteration", listener, false);

        redbull.addEventListener("animationstart", listener, false);
        redbull.addEventListener("animationend", listener, false);
        redbull.addEventListener("animationiteration", listener, false);

        function listener(oEvent) {
            switch (oEvent.type) {
                case "animationstart":
                    console.log(oEvent.target.className + ' Starts');
                    break;
                case "animationend":
                    console.log(oEvent.target.className + ' Ends');
                    if (oEvent.target.className.includes("fp1")) { // Teams entering FP2
                        if (oEvent.target.id == "ferrari") {
                            oEvent.target.className = "fp2 mega-session";
                        } else {
                            oEvent.target.className = "fp2 standard-session";
                        }
                    } else if (oEvent.target.className.includes("fp2")) { // Teams entering FP3
                        if (oEvent.target.id == "ferrari") {
                            oEvent.target.className = "fp3 slow-session";
                        } else if (oEvent.target.id == "mercedez") {
                            oEvent.target.className = "fp3 mega-session";
                        } else if (oEvent.target.id == "redbull") {
                            oEvent.target.className = "fp3 mega-session";
                        }
                    } else if (oEvent.target.className.includes("fp3")) { // Teams entering Qualification
                        if (oEvent.target.id == "ferrari") {
                            oEvent.target.className = "quali no-session";
                        } else if (oEvent.target.id == "mercedez") {
                            oEvent.target.className = "quali standard-session";
                        } else if (oEvent.target.id == "redbull") {
                            oEvent.target.className = "quali slow-session";
                        }
                    } else if (oEvent.target.className.includes("quali")) { // Teams entering Race Day
                        if (oEvent.target.id == "ferrari") {
                            oEvent.target.className = "race ultraslow-session";
                        } else if (oEvent.target.id == "mercedez") {
                            oEvent.target.className = "race standard-session";
                        } else if (oEvent.target.id == "redbull") {
                            oEvent.target.className = "race slow-session";
                        }
                    } else if (oEvent.target.className.includes("race")) {
                        oEvent.target.className = "done";
                    }
                    break;
            }
        }
    });
});
/**
 * Created by jaWeber on 10/2/16.
 */

var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};

var errorMsg = document.getElementById("errorMsg");

function checkZip() {
    "use strict";
    var tstString = $("zip").value;
    var pattern = /^\d{5}$/;
    var userMsg = "";

    if (!pattern.test(tstString)) {
        userMsg = "ERROR: Zip code consistsof 5 digits.";
        $("zip").value = "";
    } else {
        userMsg = "Good data!"
    }
     errorMsg.innerHTML = userMsg;
}

function checkPhone() {
    "use strict";
    var tstString = $("phone").value;
    var pattern = /^[2-9]\d{2}-\d{3}-\d{4}$/;
    var userMsg = "";

    if (!pattern.test(tstString)) {
        userMsg = "ERROR: Phone number should be entered using this format: ###-###-####";
        $("phone").value = "";
    } else {
        userMsg = "Phone provided acceptable!"
    }
     errorMsg.innerHTML = userMsg;
}

function checkMobile() {
    "use strict";
    var tstString = $("mobile").value;
    var pattern = /^[2-9]\d{2}-\d{3}-\d{4}$/;
    var userMsg = "";

    if (!pattern.test(tstString)) {
        userMsg = "Phone number should be entered using this format: ###-###-####";
        $("mobile").value = "";
    } else {
        userMsg = "Mobile provided acceptable!"
    }
    errorMsg.innerHTML = userMsg;
}

function checkEmail() {
    "use strict";
    var tstString = $("emailAddr").value;
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var userMsg = "";

    if (!pattern.test(tstString)) {
        userMsg = "ERROR: invalid format for email address.";
        $("emailAddr").value = "";
    } else {
        userMsg = "Email address provided acceptable!"
    }

    errorMsg.innerHTML = userMsg;
}


function checkOthers() {
    "use strict";
    errorMsg.innerHTML = "Data for this fields First Name, Last Name, Address, City and State not validated.";
}

function noenter() {
    return !(window.event && window.event.keyCode == 13); }

function processInput(){
    "use strict";
    errorMsg.innerHTML = "SUBMIT button clicked.  The form input would now be processed, but not today.";
}

/**
 * Created by jaWeber on 10/2/16.
 */

var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};


function checkField() {
    //"use strict";
    var tstString = "";
    var pattern = "";
    var userMsg = "";
    var errorTxt = document.getElementById("errorMsg");

    switch (field) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5: userMsg = "Data for this fields First Name, Last Name, Address, City and State not validated.";
            break;
        case 6: // zip code
            tstString = $("zip").value;
            pattern = /^[0-9]{5}$/;
            if (!pattern.test(tstString)) {
                userMsg = "ERROR: Zip code consistsof 5 digits.";
                $("zip").value = "";
            } else {
                userMsg = "Good data!"
            }
            break;
        case 7:   // phone
            tstString = $("phone").value;
            pattern = /[2-9]\d{2}-\d{3}-\d{4}/;
            //alert (pattern.test(tstString));
            if (!pattern.test(tstString)) {
                userMsg = "ERROR: Phone number should be entered using this format: ###-###-####";
                $("phone").value = "";
            } else {
                userMsg = "Phone provided acceptable!"
            }
            break;
        case 8: // mobile
            tstString = $("mobile").value;
            pattern = /[2-9]\d{2}-\d{3}-\d{4}/;
            if (!pattern.test(tstString)) {
                userMsg = "Phone number should be entered using this format: ###-###-####";
                $("mobile").value = "";
            } else {
                userMsg = "Mobile provided acceptable!"
            }
            break;
        case 9: // email
            tstString = $("email").value;
            //alert (tstString);
            pattern = new RegExp("^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$");
            if (!pattern.test(tstString)) {
                userMsg = "ERROR: invalid format for email address.";
                $("email").value = "";
            } else {
                userMsg = "Email address provided acceptable!"
            }
            break;
    }
    //alert (userMsg);
    errorTxt.innerHTML = userMsg;
} // end of checkField()

function processInput(){
    "use strict";
    var errorTxt = document.getElementById("errorMsg");
    errorTxt.innerHTML = "SUBMIT button clicked.  The form input would now be processed, but not today.";
}
/*
function onload() {
    "use strict";
    $("submit").onclick = processInput();
}
*/
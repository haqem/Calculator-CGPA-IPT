//Untuk Grade Points
function computeGradenum2(input) {

    var hqgradepoints = input;
    var thegrade = input;
    //  if (thegrade=="A"  || thegrade=="a") hqgradepoints=4;
    if (thegrade == "A+");
    if (thegrade == "A");
    if (thegrade == "A-");
    if (thegrade == "B+");
    if (thegrade == "B");
    if (thegrade == "B-");
    if (thegrade == "C+");
    if (thegrade == "C");
    if (thegrade == "C-");
    if (thegrade == "D+");
    if (thegrade == "D");
    if (thegrade == "F");

    return hqgradepoints;
}

function computeField(input) {
    if (input.value != null && input.value.length != 0)
        input.value = "" + eval(input.value);
    computeForm(input.form);
}

function computeForm(form) {
    form.hqgradepoints.value = ((computeGradenum2(form.hqgrade.value)) * form.hqcredithours.value);
}

//Proses kira-kira
function computesumForm(form) {
    document.forms["frmGrade9"].hqgradepoints.value = 0;
    document.forms["frmGrade9"].hqcredithours.value = 0;
    document.forms["frmGrade9"].hqgrade.value = 0;

    for (var i = 0; i < 9; i++) {
        if (!(document.forms['frmGrade' + i].hqcredithours.value == null || document.forms['frmGrade' + i].hqcredithours.value.length == 0)) {
            if (!(document.forms['frmGrade' + i].hqcredithours.value == null || document.forms['frmGrade' + i].hqcredithours.value.length == 0)) {
                var temp = computeField(document.forms['frmGrade' + i].hqgradepoints);
                var temp = computeField(document.forms['frmGrade' + i].hqcredithours);
                // var temp = computeForm(document.forms['frmGrade' + i]);
                //Total Grade
                if (!(document.forms['frmGrade' + i].hqgradepoints.value == 0))
                    document.forms["frmGrade9"].hqgradepoints.value = eval(document.forms["frmGrade9"].hqgradepoints.value) + (eval(document.forms['frmGrade' + i].hqgradepoints.value));
                if (!(document.forms['frmGrade' + i].hqcredithours.value == 0))
                    document.forms["frmGrade9"].hqcredithours.value = eval(document.forms["frmGrade9"].hqcredithours.value) + (eval(document.forms['frmGrade' + i].hqcredithours.value));
            }
        }
    }
    if (!(document.forms["frmGrade9"].hqcredithours.value == 0))
        document.forms["frmGrade9"].hqgrade.value = (eval(document.forms["frmGrade9"].hqgradepoints.value) / (eval(document.forms["frmGrade9"].hqcredithours.value)));
}
//Proses kira-kira
function computesumForm1(form) {
    document.forms["frmGrade9"].hqgrade.value = 0;
}

function clearForm(form) {
    form.hqcredithours.value = "";
    form.hqgrade.value = "";
    form.hqgradepoints.value = "";
}

//Untuk Grade Pointer
function pointers(field, grade_point) {

    var textfield = "pointergrade";
    document.forms["frmGrade" + field].elements[textfield].value = grade_point;
}

while (index <= 8) {
    pointers(index, document.forms['frmGrade'].value);

}

window.onload = function () {
    location.href = document.getElementById("selectbox").value;
}
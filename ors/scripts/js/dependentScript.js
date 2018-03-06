/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function checkDate(element) {
    var bdateCheck = /^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    var val = element.value;
    if (!bdateCheck.test(val)) {
        element.value = '';
        $('#' + element.getAttribute('regex')).css("display", "block");
    } else {
        $('#' + element.getAttribute('regex')).css("display", "none");
    }
}

function setNewAccountHolder() {
    var registrationId = $("#accountRegistrationId").val();
    var firstName = $("#newFirstName").val();
    var middleName = $("#newMiddleName").val() !== "" ? $("#newMiddleName").val() : ".";
    var lastName = $("#newLastName").val();
    var gender = $("#newGender :selected").val();
    var suffix = $("#newSuffix :selected").val();
    var birthDate = $("#newBirthDate").val();
    var relation = $("#newRelation :selected").val();
    var reason = $("#newReason :selected").val();
//    var counter = validateRequiredFields(lastName, firstName, birthDate, gender, relation, reason);
    AccountHolderManager.validateAccountHolder(registrationId, firstName, lastName, birthDate, gender, relation, reason, function(dtl) {
        if (dtl === "no error") {
            AccountHolderManager.saveNewAccountHolder(registrationId, lastName, firstName, middleName, suffix, birthDate, gender, relation, reason, function() {
                accountHolderSubmit();
                //location.reload(true);
            });
            // here prompt survey
            //isAnswerSurveyForMinor();
        } else {
            $('#accountHolderModal').modal('hide');
            if ((dtl.indexOf("older") !== -1 || dtl.indexOf("younger") !== -1) && (dtl.indexOf("male") !== -1 || dtl.indexOf("female") !== -1)) {
                decorateFields("age, gender and relation");
            } else if (dtl.indexOf("male") !== -1 || dtl.indexOf("female") !== -1) {
                decorateFields("gender and relation");
            } else if (dtl.indexOf("below 18") !== -1) {
                decorateFields("minor");
            } else {
                decorateFields("all");
            }
            $("#accountErrorMessage").text(dtl);
            $("#accountHolderErrorModal").modal("show");
        }
    });


//    location.reload(true);
}
function decorateFields(errorType) {
    $("#newFirstName").css({
        'border': ''
    });
    $("#newLastName").css({
        'border': ''
    });
    $("#newBirthDate").css({
        'border': ''
    });
    $("#newGender").css({
        'border': ''
    });
    $("#newRelation").css({
        'border': ''
    });
    $("#newReason").css({
        'border': ''
    });
    if (errorType === "all") {
        if ($("#newFirstName").val() === "") {
            $("#newFirstName").css({
                'border': 'solid 1px red'
            });
        } else {
            $("#newFirstName").css({
                'border': ''
            });
        }
        if ($("#newLastName").val() === "") {
            $("#newLastName").css({
                'border': 'solid 1px red'
            });
        } else {
            $("#newLastName").css({
                'border': ''
            });
        }
        if ($("#newBirthDate").val() === "") {
            $("#newBirthDate").css({
                'border': 'solid 1px red'
            });
        } else {
            $("#newBirthDate").css({
                'border': ''
            });
        }
        if ($("#newGender").val() === "") {
            $("#newGender").css({
                'border': 'solid 1px red'
            });
        } else {
            $("#newGender").css({
                'border': ''
            });
        }
        if ($("#newRelation").val() === "REL00") {
            $("#newRelation").css({
                'border': 'solid 1px red'
            });
        } else {
            $("#newRelation").css({
                'border': ''
            });
        }
        if ($("#newReason").val() === "") {
            $("#newReason").css({
                'border': 'solid 1px red'
            });
        } else {
            $("#newReason").css({
                'border': ''
            });
        }
    } else if (errorType === "minor") {
        $("#newFirstName").css({
            'border': ''
        });
        $("#newLastName").css({
            'border': ''
        });
        $("#newGender").css({
            'border': ''
        });
        $("#newRelation").css({
            'border': ''
        });
        $("#newReason").css({
            'border': ''
        });
        $("#newBirthDate").css({
            'border': 'solid 1px red'
        });
    } else if (errorType === "gender and relation") {
        $("#newFirstName").css({
            'border': ''
        });
        $("#newLastName").css({
            'border': ''
        });
        $("#newBirthDate").css({
            'border': ''
        });
        $("#newReason").css({
            'border': ''
        });
        $('#newRelation').css({
            'border': 'solid 1px red'
        });
    } else if (errorType === "age, gender and relation") {
        $("#newFirstName").css({
            'border': ''
        });
        $("#newLastName").css({
            'border': ''
        });
        $("#newReason").css({
            'border': ''
        });
        $("#newBirthDate").css({
            'border': 'solid 1px red'
        });
        $('#newRelation').css({
            'border': 'solid 1px red'
        });
    }
}
function saveAccountHolder(ehubPin) {
    AccountHolderManager.saveAccountHolderFromDependent(ehubPin, function() {
        location.reload(true);
    });
}
function closeMinorPrompt() {
    $.session.set("minorPrompt", "close");
    $("#minorModal").modal("hide");
    isAnswerSurveyForMinor();
}
function openMinorAccountHolder() {
    $("#newFirstName").val("");
    $("#newMiddleName").val("");
    $("#newLastName").val("");
    $("#newBirthDate").val("");
    $('#newSuffix option[value="SFX-"]').attr('selected', true);
    $('#newGender option[value=""]').attr('selected', true);
    $('#newRelation option[value="REL00"]').attr('selected', true);
    $('#newReason option[value="1"]').attr('selected', true);
    $("#newReason").attr("disabled", true);
    $('#minorModal').modal('hide');

    $('#accountHolderModal').modal('show');
}
function openMinorAccountHolderForDependent() {
    $("#newFirstName").val("");
    $("#newMiddleName").val("");
    $("#newLastName").val("");
    $("#newBirthDate").val("");
    $('#newSuffix option[value="SFX-"]').attr('selected', true);
    $('#newGender option[value=""]').attr('selected', true);
    $('#newRelation option[value="REL00"]').attr('selected', true);
    $('#newReason option[value="1"]').attr('selected', true);
    $("#newReason").attr("disabled", true);
    $('#holderMinorModal').modal('hide');
    $('#accountHolderModal').modal('show');
}
function openNonMinorAccountHolder() {
    $("#newFirstName").val("");
    $("#newMiddleName").val("");
    $("#newLastName").val("");
    $("#newBirthDate").val("");
    $('#newSuffix option[value="SFX-"]').attr('selected', true);
    $('#newGender option[value=""]').attr('selected', true);
    $('#newRelation option[value="REL00"]').attr('selected', true);
    $('#newReason option[value=""]').attr('selected', true);
    $("#newReason").attr("disabled", false);
    $('#dependentNotMinorModal').modal('hide');
    $('#accountHolderModal').modal('show');
}
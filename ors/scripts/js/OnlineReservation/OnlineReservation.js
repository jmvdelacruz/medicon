function yesNo() {
    if ($('#YES').is(':checked')) {
        //alert("YES");
        $("#doctorDiv").show();
        $("#attendingDoc").val("");
        $("#docCode").val("");
        $("#attendingDoc").attr('class', 'requiredField form-control');
        $("#attendingDoc").css({
            'border': ''
        });
        $('label[for=YES]').css({
            'color': ''
        });
        $('label[for=NO]').css({
            'color': ''
        });
    } else if ($('#NO').is(':checked')) {
        //	alert("NO");
        $("#doctorDiv").hide();
        $("#attendingDoc").val("");
        $("#docCode").val("");
        $("#attendingDoc").attr('class', 'form-control');
        $("#attendingDoc").css({
            'border': ''
        });
        $('label[for=YES]').css({
            'color': ''
        });
        $('label[for=NO]').css({
            'color': ''
        });
    }
}
function validateContactNum(thisVal, contactType) {
    if (thisVal.val() !== "") {
        var value = thisVal.val().replace(/^\s\s*/, '').replace(/\s\s*$/, '');
        var intRegex = /^\d+$/;
        if (!intRegex.test(value)) {
            thisVal.val("");
            //if(contactType == 'areaCode'){
            //    $('#invalidAreaCodeFormat').show();
            //    $('#invalidAreaCodeFormat').css("display", "block");
            //    $('#invalidAreaCodeFormat').fadeIn(1000);
            //    $('#invalidAreaCodeFormat').delay(2000).fadeOut(5000);
            //}else if(contactType == 'phoneNumber'){
            //    $('#invalidPhoneNumFormat').show();
            //    $('#invalidPhoneNumFormat').css("display", "block");
            //    $('#invalidPhoneNumFormat').fadeIn(1000);
            //    $('#invalidPhoneNumFormat').delay(2000).fadeOut(5000);
            //}

        }
    }
}

function removeInvalidAreaCodeFormatErrorMessage() {
    $('#invalidAreaCodeFormat').hide();
}
function removeInvalidPhoneNumFormatErrorMessage() {
    $('#invalidPhoneNumFormat').hide();
}
$(function() {
    $(".contactNum").keydown(function(event) {
        // Allow: backspace, delete, tab, escape, and enter
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
                // Allow: Ctrl+A
                        (event.keyCode == 65 && event.ctrlKey === true) ||
                        // Allow: home, end, left, right
                                (event.keyCode >= 35 && event.keyCode <= 39)) {
                    // let it happen, don't do anything
                    return;
                }
                else {
                    // Ensure that it is a number and stop the keypress
                    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                        event.preventDefault();
                    }
                }
            });
    $('.postalCode').keypress(function(event) {
        var regex = new RegExp("^[a-zA-Z0-9]");
        var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (regex.test(str)) {
            return true;
        } else if (event.which === 8 || event.keyCode === 9 || event.keyCode === 46 || event.keyCode === 37 || event.keyCode === 39 || event.which === 27 || event.which === 13 || event.which === 32 ||
                // Allow: Ctrl+A
                        (event.which === 65 && event.ctrlKey === true)) {
            // let it happen, don't do anything
            if (str === '%' || str === '.' || str === '\'') {
                event.preventDefault();
                return false;
            } else {
                return true;
            }
        }
        event.preventDefault();
        return false;
    });
    $("#doctorDiv").hide();
    limitSelection();
    $('#choice1').change(function() {
        limitSelection();
    });
    $('#choice2').change(function() {
        limitSelection();
    });
    yesNo();
    var val = $("input:radio[name='accountClassCode']:checked").val();
    selectAccountClass(val);
    $("#divGName").hide();
    $("#divOthers").hide();
    $("#divRel").hide();
    $("#divHMO").hide();
    $("#divCOM").hide();
    $('#divResAddress1').hide();
    $('#divResAddress2').hide();
    $('#divResAddress3').hide();
    $('#divResContact').hide();
    $('select#selectHMO').change(function() {
        var add = $(this).val();
        var det = add.split("~");
        $('#hidden').val(det[0]);
        $('#hidden2').val(det[1]);
    });
    $('select#selectCOM').change(function() {
        var add = $(this).val();
        var det = add.split("~");
        $('#hidden').val(det[0]);
        $('#hidden2').val(det[1]);
    });
});
function limitSelection() {
    var choice1 = $("#choice1 option:selected").html();
    var choice2 = $("#choice2 option:selected").html();
    $("#choice1 option").each(function() {
        $(this).show();
        if (choice2 == $(this).html()) {
            $(this).hide();
        }
    });
    $("#choice2 option").each(function() {
        $(this).show();
        if (choice1 == $(this).html()) {
            $(this).hide();
        }
    });
}
function accountCity() {
    var text1 = "City";
    var text2 = "OUTSIDE OF THE PHILIPPINES";
    var text3 = "Country";
    var text4 = "PHILIPPINES";
    if ($("#accCityCode option:selected").text() == text1 || $("#accCityCode option:selected").text() == text2) {
        $('#accCountCode option:contains("' + text3 + '")').prop('selected', 'selected');
    } else if ($("#accCityCode option:selected").text() != text1 || $("#accCityCode option:selected").text() != text2) {
        $('#accCountCode option:contains("' + text4 + '")').prop('selected', 'selected');
    }
}
function accountCountry() {
    var text1 = "City";
    var text2 = "OUTSIDE OF THE PHILIPPINES";
    var text3 = "Country";
    var text4 = "PHILIPPINES";
    if ($("#accCountCode option:selected").text() == text4 || $("#accCountCode option:selected").text() == text3) {
        $('#accCityCode option:contains("' + text1 + '")').prop('selected', 'selected');
    } else {
        $('#accCityCode option:contains("' + text2 + '")').prop('selected', 'selected');
    }
}
function selectAccountClass(val) {

    if (val === 'IND2') {
        $("#guarantor_name").prop('readonly', false);
        $('#guarantor_name').val("");
        $('#accNumSt').val("");
        $('#accBldgName').val("");
        $('#accProvCode').val("");
        $('#accPostCode').val("");
        $('#arAreaCode').val("");
        $('#arPhoneNum').val("");
        $("select#guarantor_relation").prop('selectedIndex', 0);
        $("select#accCityCode").prop('selectedIndex', 0);
        $("select#accCountCode").prop('selectedIndex', 0);
        $("#divOthers").hide();
        $("#divGName").show();
        $("#divRel").show();
        $("#divHMO").hide();
        $("#divCOM").hide();
        $('#divResAddress1').show();
        $('#divResAddress2').show();
        $('#divResAddress3').show();
        $('#divResContact').show();
        $("#LoaN").attr('checked', 'checked');
        $("#LoaN").prop('checked', 'checked');
    } else if (val === 'HMO2') {
        $('#guarantor_name').val("");
        $("#LoaN").removeAttr('checked');
        $("#divOthers").hide();
        $("#divGName").hide();
        $("#divRel").hide();
        $("#divHMO").show();
        $("#divCOM").hide();
        $('#divResAddress1').hide();
        $('#divResAddress2').hide();
        $('#divResAddress3').hide();
        $('#divResContact').hide();
        $("select#selectHMO").prop('selectedIndex', 0);
    } else if (val === 'COM2') {
        $("select#selectCOM").prop('selectedIndex', 0);
        $('#guarantor_name').val("");
        $("#LoaN").removeAttr('checked');
        $("#divOthers").hide();
        $("#divCOM").show();
        $("#divGName").hide();
        $("#divRel").hide();
        $("#divHMO").hide();
        $('#divResAddress1').hide();
        $('#divResAddress2').hide();
        $('#divResAddress3').hide();
        $('#divResContact').hide();
    } else if (val === 'OTH') {
        $("#LoaN").removeAttr('checked');
        $('#others').val("");
        $('#guarantor_name').val("");
        $("#divOthers").show();
        $("#divCOM").hide();
        $("#divGName").hide();
        $("#divRel").hide();
        $("#divHMO").hide();
        $('#divResAddress1').hide();
        $('#divResAddress2').hide();
        $('#divResAddress3').hide();
        $('#divResContact').hide();
    }
}
function transferOthersName() {
    var x = document.getElementById("others");
    var otherGuarantor = x.value;
    $('#guarantor_name').val(otherGuarantor);
}
function transferGuarantorName() {
    var selectBoxMale = document.getElementById("selectHMO");
    var selected = selectBoxMale.options[selectBoxMale.selectedIndex].text;
    $('#guarantor_name').val(selected);
}
function transferCorporateName() {
    $('#guarantor_name').val($("#selectCOM option:selected").text());
}
function checkRelationToPatient() {
    var val = $("#guarantor_name").val();


    if ($("#guarantor_relation option:selected").text() === "SELF") {
        $('#divResAddress1').hide();
        $('#divResAddress2').hide();
        $('#divResAddress3').hide();
        $('#divResContact').hide();
        $("#guarantor_name").val($("#patientFullName").text());
        $("#guarantor_name").attr('readonly', 'true');
    } else {
        // comment out for issue number 18965
        //$("#guarantor_name").val("");
        $("#guarantor_name").removeAttr('readonly');
        $('#divResAddress1').show();
        $('#divResAddress2').show();
        $('#divResAddress3').show();
        $('#divResContact').show();
    }
}
function showDoctor() {
    $('iframe').attr("src", "");
    $.session.set("searchType", "orsDoctor");
    var targetmodal = "#doctor";

    $(targetmodal + ' .modalReservation-body iframe').css("height",($(window).height() * .6));
    $(targetmodal + ' .modal-header h3').html("DOCTORS SEARCH");
    $(targetmodal + ' .modal-header').show();
    $('iframe').attr("src", "../common/doctorSearch");
    var i = setInterval(function() {
        clearInterval(i);
        $(targetmodal).modal({show: true});
        return false;
    }, 1000);

}
function checkMe() {

    if (validateTime()) {
        if (validateRequiredFields() > 0) {
            window.scrollTo(0, 0);
            $("#acceptance").prop('checked', '');
            $('#errorMessage').html('Please fill out the required fields before submitting. Items marked with * are required fields. Thank You.');
            $('#errorModal').modal('show');
            readFalse();
            document.getElementById("btnContinue").disabled = true;
        } else {
            if ($('#acceptance').prop("checked")) {
                $("#arContactNum").val($("#arAreaCode").val() + "-" + $("#arPhoneNum").val());
                $('#termsAndCondition').modal('show');
            } else {
                readFalse();
            }

        }
    } else {
        window.scrollTo(0, 0);
        $("#acceptance").prop('checked', '');
        $('#errorMessage').html('Admission Time must not be earlier than time today.');
        $('#errorModal').modal('show');
        readFalse();
        document.getElementById("btnContinue").disabled = true;
    }
}
function checkDateValidity() {
    var textDate = new Date($("[name='plannedAdmissionDate']").val());
    var matches = $(this).val().match(/(\d{1,2})[- \/](\d{1,2})[- \/](\d{4,10})/); // Regex to validate date format
    if ($("[name='plannedAdmissionDate']").val() !== $("[name='plannedAdmissionDate']").attr('placeholder') && $("[name='plannedAdmissionDate']").val() !== "") {
        if (!matches || matches === null) {
            $('#errorMessage').html('Invalid date format. Please Input in (mm/dd/yyyy) format.');
            $("input:text[name=plannedAdmissionDate]").val("");
            $("[name='plannedAdmissionDate']").css('border', '1px solid #CCC');
            $('#errorModal').modal('show');
            readFalse();
            document.getElementById("btnContinue").disabled = true;
            return false;
        } else {
            var month = parseInt(matches[1], 10);
            var day = parseInt(matches[2], 10);
            var year = parseInt(matches[3], 10);
            var date = new Date(year, month - 1, day);
            var today = new Date();
            // make sure we didn't have any illegal 
            // month or day values that the date constructor
            // coerced into valid values
            var dateMonth = date.getMonth() + 1;
            var dateDay = date.getDate();
            var dateYear = date.getFullYear();
            var yearToday = today.getFullYear();
            if (dateYear.toString().length > yearToday.toString().length) {
                $('#errorMessage').html('Invalid date format. Please Input in (mm/dd/yyyy) format.');
                $("input:text[name=plannedAdmissionDate]").val("");
                $("[name='plannedAdmissionDate']").css('border', '1px solid #CCC');
                $('#errorModal').modal('show');
                readFalse();
                document.getElementById("btnContinue").disabled = true;
                return false;
            } else {
                if (dateMonth !== month ||
                        dateYear !== year ||
                        dateDay !== day) {
                    $('#errorMessage').html('Invalid date format. Please Input in (mm/dd/yyyy) format.');
                    $("input:text[name=plannedAdmissionDate]").val("");
                    $("[name='plannedAdmissionDate']").css('border', '1px solid #CCC');
                    $('#errorModal').modal('show');
                    readFalse();
                    document.getElementById("btnContinue").disabled = true;
                    return false;
                } else {

                    if ($(this).attr("minDate") !== undefined && $(this).attr("minDate") !== "") {

                        var minDate = new Date();

                        if (textDate < minDate) {
                            $('#errorMessage').html('<p>Planned Admission Date must not be less than date today.</p>');
                            $("input:text[name=plannedAdmissionDate]").val("");
                            $("[name='plannedAdmissionDate']").css('border', '1px solid #CCC');
                            $('#errorModal').modal('show');
                            readFalse();
                            document.getElementById("btnContinue").disabled = true;
                            return false;
                        } else {
                            $(this).css({
                                'border': ''
                            });
                            return true;
                        }
                    }
                }
            }
        }
    }
}
function validateTime() {
    if ($('input:text[name=plannedAdmissionDate]').val() !== "" && $('input:text[name=arrivalTime]').val() !== "") {
        var timeVal = new Date($('input:text[name=plannedAdmissionDate]').val() + " " + $('input:text[name=arrivalTime]').val());
        var now = new Date();
        if (timeVal.getTime() <= now.getTime()) {
            $('input:text[name=arrivalTime]').val('');
            $('input:text[name=arrivalTime]').css({
                'border': 'solid 1px red'
            });

            return false;
        } else {
            return true;
        }
    } else {
        return true;
    }
}

function saveReservationChecking() {
    if (validateRequiredFields() > 0) {
        if (validateTime()) {
            $("#acceptance").prop('checked', '');
            $('#errorMessage').html('Please fill out the required fields before submitting. Items marked with * are required fields. Thank You.');
            $('#errorModal').modal('show');
            readFalse();
            document.getElementById("btnContinue").disabled = true;
        } else {
            $("#acceptance").prop('checked', '');
            $('#errorMessage').html('Admission Time must not be earlier than time today.');
            $('#errorModal').modal('show');
            readFalse();
            document.getElementById("btnContinue").disabled = true;
        }
    } else {
        $('#admForm').submit();
    }
}
function validateRequiredFields() {
    var counter = 0;
    if ($("input:radio[name='orderFlag']:checked").length == 0) {
        $("input:radio[name='orderFlag']").each(function() {
            $('label[for=YES]').css({
                'color': 'red'
            });
            $('label[for=NO]').css({
                'color': 'red'
            });
        });
        counter++;
    } else {
        if ($("input:radio[name='orderFlag']:checked").val() === 'Y') {
            if ($("#docCode").val() === "") {
                $("#attendingDoc").css({
                    'border': 'solid 1px red'
                });
                counter++;
            } else {
                $("#attendingDoc").css({
                    //'border': 'solid 0px red'
                    'border': '1px solid #ccc'
                });
            }
        }
    }

    if ($("input:text[name='plannedAdmissionDate']").val() === "") {
        $("input:text[name='plannedAdmissionDate']").css({
            'border': 'solid 1px red'
        });
        counter++;
    } else {
        $("input:text[name='plannedAdmissionDate']").css({
            //'border': 'solid 0px red'
            'border': '1px solid #ccc'
        });
    }
    if ($("input:text[name='arrivalTime']").val() === "") {
        $("input:text[name='arrivalTime']").css({
            'border': 'solid 1px red'
        });
        counter++;
    } else {
        $("input:text[name='arrivalTime']").css({
            //'border': 'solid 0px red'
            'border': '1px solid #ccc'
        });
    }
    if ($("input:radio[name='accountClassCode']:checked").length === 0) {
        $("input:radio[name='accountClassCode']").each(function() {
//            $(this).css({
//                'border': 'solid 1px red'
//            });
            $('label[for=IND2]').css({
                'color': 'red'
            });
            $('label[for=HMO2]').css({
                'color': 'red'
            });
            $('label[for=COM2]').css({
                'color': 'red'
            });
            $('label[for=OTH]').css({
                'color': 'red'
            });
        });
        counter++;
    } else {
        $('label[for=IND2]').css({
            'color': 'black'
        });
        $('label[for=HMO2]').css({
            'color': 'black'
        });
        $('label[for=COM2]').css({
            'color': 'black'
        });
        $('label[for=OTH]').css({
            'color': 'black'
        });

        if ($("input:radio[name='accountClassCode']:checked").val() === 'IND2') {
            if ($("#guarantor_name").val() === "") {
                $("#guarantor_name").css({
                    'border': 'solid 1px red'
                });
                counter++;
            } else {
                $("#guarantor_name").css({
                    //'border': 'solid 0px red'
                    'border': '1px solid #ccc'
                });
            }

            if ($("#guarantor_relation").val() === "REL00") {
                $("#guarantor_relation").css({
                    'border': 'solid 1px red'
                });
                counter++;
            } else {
                $("#guarantor_relation").css({
                    //'border': 'solid 0px red'
                    'border': '1px solid #ccc'
                });
            }

        } else if ($("input:radio[name='accountClassCode']:checked").val() === 'HMO2') {
            if ($("#selectHMO").val() === "") {

                $("#selectHMO").css({
                    'border': 'solid 1px red'
                });
                counter++;
            } else {
                $("#selectHMO").css({
                    //'border': 'solid 0px red'
                    'border': '1px solid #ccc'
                });
            }
        } else if ($("input:radio[name='accountClassCode']:checked").val() === 'COM2') {
            if ($("#selectCOM").val() === "") {
                $("#selectCOM").css({
                    'border': 'solid 1px red'
                });
                counter++;
            } else {
                $("#selectCOM").css({
                    //'border': 'solid 0px red'
                    'border': '1px solid #ccc'
                });
            }
        } else if ($("input:radio[name='accountClassCode']:checked").val() === 'OTH') {
            if ($("#guarantor_name").val() === "") {
                $("#others").css({
                    'border': 'solid 1px red'
                });
                counter++;
            } else {
                $("#others").css({
                    //'border': 'solid 0px red'
                    'border': '1px solid #ccc'
                });
            }
        }
    }
    if ($("input:radio[name='loaFlag']:checked").length === 0) {
        $("input:radio[name='loaFlag']").each(function() {
            $('label[for=LoaY]').css({
                'color': 'red'
            });
            $('label[for=LoaN]').css({
                'color': 'red'
            });
        });
        counter++;
    } else {
        $('label[for=LoaY]').css({
            'color': 'black'
        });
        $('label[for=LoaN]').css({
            'color': 'black'
        });
    }
    return counter;


}

function readTrue() {

    $("#acceptance").prop('checked', 'true');
    $("#termsAndCondition").modal("hide");
    $('#btnContinue').prop('disabled', '');

}
function readFalse() {
    $("#acceptance").prop('checked', '');
    $("#termsAndCondition").modal("hide");
    $('#btnContinue').prop('disabled', 'true');

}
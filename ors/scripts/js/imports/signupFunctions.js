/**
 * Created by St Lukes13 on 3/27/2015.
 */
$(function () {
	$("#birthdate").datepicker({
//					showOn: "button",
//					buttonImage: "images/calendar.gif",
//					buttonImageOnly: true,
//					buttonText: "Select date",
		changeMonth: true,
		changeYear: true
	});
});

$(function () {
	$("#birthdateDependent").datepicker({
//					showOn: "button",
//					buttonImage: "images/calendar.gif",
//					buttonImageOnly: true,
//					buttonText: "Select date",
		changeMonth: true,
		changeYear: true
	});
});

function patientNotAvailable() {
	if (document.getElementById('checkPatientNotAvailable').checked) {
		document.getElementById('dependentBlock').style.display = 'block';
		document.getElementById('pinBlock').style.display = 'none';
		document.getElementById('checkPinNotAvailableBlock').style.display = 'none';

		document.getElementById('nationalityBlock').style.display = 'none';
		document.getElementById('citizenshipBlock').style.display = 'none';
		document.getElementById('checkPinNotAvailable').checked = false;

		document.getElementById('pinBlockDependent').style.display = 'block';
		document.getElementById('nationalityBlockDependent').style.display = 'none';
		document.getElementById('citizenshipBlockDependent').style.display = 'none';
		document.getElementById('checkPinNotAvailableDependent').checked = false;
	} else {
		document.getElementById('dependentBlock').style.display = 'none';
		document.getElementById('pinBlock').style.display = 'block';
		document.getElementById('checkPinNotAvailableBlock').style.display = 'block';
	}
}

function pinNotAvailable() {
	if (document.getElementById('checkPinNotAvailable').checked) {
		document.getElementById('nationalityBlock').style.display = 'block';
		document.getElementById('citizenshipBlock').style.display = 'block';
		document.getElementById('pinBlock').style.display = 'none';
	} else {
		document.getElementById('nationalityBlock').style.display = 'none';
		document.getElementById('citizenshipBlock').style.display = 'none';
		document.getElementById('pinBlock').style.display = 'block';
	}
}

function pinNotAvailableDependent() {
	if (document.getElementById('checkPinNotAvailableDependent').checked) {
		document.getElementById('nationalityBlockDependent').style.display = 'block';
		document.getElementById('citizenshipBlockDependent').style.display = 'block';
		document.getElementById('pinBlockDependent').style.display = 'none';
	} else {
		document.getElementById('nationalityBlockDependent').style.display = 'none';
		document.getElementById('citizenshipBlockDependent').style.display = 'none';
		document.getElementById('pinBlockDependent').style.display = 'block';
	}
}

function validateForm() {
	var fName = $('#fName').val();
	var mName = $('#mName').val();
	var lName = $('#lName').val();
	var gender = $('#gender').val();
	var birthdate = $('#birthdate').val();
	var nationality = $('#nationality').val();
	var citizenship = $('#citizenship').val();
	var pin = $('#pin').val();

	if (fName == '') {
		document.getElementById('fNameValidation').style.display = 'block';
	}

	if (mName == '') {
		document.getElementById('mNameValidation').style.display = 'block';
	}

	if (lName == '') {
		document.getElementById('lNameValidation').style.display = 'block';
	}

	if (gender == '') {
		document.getElementById('genderValidation').style.display = 'block';
	}

	if (birthdate == '') {
		document.getElementById('birthdateValidation').style.display = 'block';
	}

	if (nationality == 'NL-') {
		document.getElementById('nationalityValidation').style.display = 'block';
	}

	if (citizenship == 'CTZ-') {
		document.getElementById('citizenshipValidation').style.display = 'block';
	}

	if (pin == '') {
		document.getElementById('pinValidation').style.display = 'block';
	}

	if (fName == '' || mName == '' || lName == '' || gender == '' || birthdate == ''
		|| nationality == 'NL-' || citizenship == 'CTZ-' || pin == '') {
		return false;
	}
}

function checkFields() {
	if (document.getElementById("fName").value != "") {
		document.getElementById('fNameValidation').style.display = 'none';
	}

	if (document.getElementById("mName").value != "") {
		document.getElementById('mNameValidation').style.display = 'none';
	}

	if (document.getElementById("lName").value != "") {
		document.getElementById('lNameValidation').style.display = 'none';
	}

	if (document.getElementById("gender").value != "") {
		document.getElementById('genderValidation').style.display = 'none';
	}

	if (document.getElementById("birthdate").value != "") {
		document.getElementById('birthdateValidation').style.display = 'none';
	}

	if (document.getElementById("birthdate").value != "") {
		document.getElementById('nationalityValidation').style.display = 'none';
	}

	if (document.getElementById("citizenship").value != "") {
		document.getElementById('citizenshipValidation').style.display = 'none';
	}

	if (document.getElementById("pin").value != "") {
		document.getElementById('pinValidation').style.display = 'none';
	}
}
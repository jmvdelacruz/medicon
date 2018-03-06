/**
 * Created by St Lukes13 on 4/23/2015.
 */

function updatePatientPersonalInfo(thisVal){
	var ehubPin = $("#eHubPin").val();
	var columnName=thisVal.attr('name');
	var columnValue=thisVal.val();
	var regId = $("#hiddenRegistrationId").val();
	var chumsAccountNumberAvailable;
	var saveChanges = true;
	var saveName = true;
	var saveNameIsNotExisting = true;
	var emailOldVal = $('#email').val();
	var oldBirthPlaceVal = $('#birthPlaceInputId').val();
	var oldBirthPlaceDropVal = $('#birthPlaceDropdownId').val();
	var chumsAccountNumber = $('#chumsAccountNumber').val();
	var oldLastNameValue = $('#oldLastNameValue').val();
	var oldFirstNameValue = $('#oldFirstNameValue').val();
	var oldMiddleNameValue = $('#oldMiddleNameValue').val();
	var oldSuffixValue = $('#oldSuffixValue').val();
	var oldGenderValue = $('#oldGenderValue').val();
	var saveBirthday = false;

	if(columnName == 'nationality'){
		if(columnValue == 'NL-'){
			saveChanges = false;
			$('#nationalityUpdateMessage').hide();
			$('#invalidNationalityMessage').show();
			$('#invalidNationalityMessage').css("display", "block");
			$('#invalidNationalityMessage').fadeIn(1000);
			$('#invalidNationalityMessage').delay(2000).fadeOut(2000);
		}else {
			saveChanges = true;
			$('#invalidNationalityMessage').hide();
			/*
			//$('#nationalityUpdateMessage').show();
			$('#nationalityUpdateMessage').css("display", "block");
			$('#nationalityUpdateMessage').fadeIn(1000);
			$('#nationalityUpdateMessage').delay(2000).fadeOut(2000);
*/
		}

	} else if(columnName == 'citizenship'){
		if(columnValue == 'CTZ-'){
			saveChanges = false;
			$('#citizenshipUpdateMessage').hide();
			$('#invalidCitizenshipMessage').show();
			$('#invalidCitizenshipMessage').css("display", "block");
			$('#invalidCitizenshipMessage').fadeIn(1000);
			$('#invalidCitizenshipMessage').delay(2000).fadeOut(2000);
		}else{
			saveChanges = true;
			$('#invalidCitizenshipMessage').hide();
			//$('#citizenshipUpdateMessage').show();
			/*
			$('#citizenshipUpdateMessage').css("display", "block");
			$('#citizenshipUpdateMessage').fadeIn(1000);
			$('#citizenshipUpdateMessage').delay(2000).fadeOut(2000);
			*/
		}

	} else if(columnName == 'civilStatus'){
		/*
		//$('#civilStatusUpdateMessage').show();
		$('#civilStatusUpdateMessage').css("display", "block");
		$('#civilStatusUpdateMessage').fadeIn(1000);
		$('#civilStatusUpdateMessage').delay(2000).fadeOut(2000);
		*/
	}
	else if(columnName == 'pwdId'){
/*
		//$('#pwdUpdateMessage').show();
		$('#pwdUpdateMessage').css("display", "block");
		$('#pwdUpdateMessage').fadeIn();
		$('#pwdUpdateMessage').delay(2000).fadeOut(2000);
	*/
	}else if(columnName == 'seniorId'){
		/*
		//$('#seniorCitizenNumberUpdateMessage').show();
		$('#seniorCitizenNumberUpdateMessage').css("display", "block");
		$('#seniorCitizenNumberUpdateMessage').fadeIn(1000);
		$('#seniorCitizenNumberUpdateMessage').delay(2000).fadeOut(2000);
		*/
	}else if(columnName == 'philHealthId'){
		/*
		//$('#philHealthIdNumberUpdateMessage').show();
		$('#philHealthIdNumberUpdateMessage').css("display", "block");
		$('#philHealthIdNumberUpdateMessage').fadeIn(1000);
		$('#philHealthIdNumberUpdateMessage').delay(2000).fadeOut(2000);
		*/
	}else if(columnName == 'employer'){
		/*
		//$('#employerUpdateMessage').show();
		$('#employerUpdateMessage').css("display", "block");
		$('#employerUpdateMessage').fadeIn(1000);
		$('#employerUpdateMessage').delay(2000).fadeOut(2000);
		*/
		if(chumsAccountNumber != ''){
			$('#chumsAccountNumberError').hide();
			/*
			//$('#chumsAccountNumberUpdateMessage').show();
			$('#chumsAccountNumberUpdateMessage').css("display", "block");
			$('#chumsAccountNumberUpdateMessage').fadeIn();
			$('#chumsAccountNumberUpdateMessage').delay(2000).fadeOut(2000);
			*/
			$('#chumsAccountNumber').val('');
		}
		//todo : oct 9 here

	} else if(columnName == 'occupation'){
		/*
		//$('#occupationUpdateMessage').show();
		$('#occupationUpdateMessage').css("display", "block");
		$('#occupationUpdateMessage').fadeIn(1000);
		$('#occupationUpdateMessage').delay(2000).fadeOut(2000);
*/
	} else if(columnName == 'spouseLastName'){
		/*
		//$('#spouseLastNameUpdateMessage').show();
		$('#spouseLastNameUpdateMessage').css("display", "block");
		$('#spouseLastNameUpdateMessage').fadeIn(1000);
		$('#spouseLastNameUpdateMessage').delay(2000).fadeOut(2000);
*/
	} else if(columnName == 'spouseFirstName'){
		/*
		//$('#spouseFirstNameUpdateMessage').show();
		$('#spouseFirstNameUpdateMessage').css("display", "block");
		$('#spouseFirstNameUpdateMessage').fadeIn(1000);
		$('#spouseFirstNameUpdateMessage').delay(2000).fadeOut(2000);
*/
	} else if(columnName == 'spouseMiddleName'){
		/*
		//$('#spouseMiddleNameUpdateMessage').show();
		$('#spouseMiddleNameUpdateMessage').css("display", "block");
		$('#spouseMiddleNameUpdateMessage').fadeIn(1000);
		$('#spouseMiddleNameUpdateMessage').delay(2000).fadeOut(2000);
*/
	} else if(columnName == 'contactInfoEmail'){
		if(emailOldVal != columnValue){
			/*
			//$('#contactInfoEmailUpdateMessage').show();
			$('#contactInfoEmailUpdateMessage').css("display", "block");
			$('#contactInfoEmailUpdateMessage').fadeIn(1000);
			$('#contactInfoEmailUpdateMessage').delay(2000).fadeOut(2000);
			*/
		}

	}

	else if(columnName == 'lastName'){
		var nameNow = validateName(columnValue , 'patLastName');
		if(nameNow == 'invalid'){
			saveName = false;
			$('#patLastNameUpdateMessage').hide();
			$('#invalidLastNameUpdate').hide();
			$('#invalidLastName').show();
			$('#invalidLastName').css("display", "block");
			$('#invalidLastName').fadeIn(1000);
			$('#invalidLastName').delay(2000).fadeOut(2000);
		}else{
			if(columnValue.length <= 0){
				saveName = true;

				$('#invalidLastName').hide();
				$('#invalidLastNameUpdate').hide();
				/*
				//$('#patLastNameUpdateMessage').show();
				$('#patLastNameUpdateMessage').css("display", "block");
				$('#patLastNameUpdateMessage').fadeIn(1000);
				$('#patLastNameUpdateMessage').delay(2000).fadeOut(2000); */

			} else if(columnValue.trim().length <= 0){
				saveName = false;
				$('#patLastNameUpdateMessage').hide();
				$('#invalidLastNameUpdate').hide();
				$('#invalidLastName').show();
				$('#invalidLastName').css("display", "block");
				$('#invalidLastName').fadeIn(1000);
				$('#invalidLastName').delay(2000).fadeOut(2000);
			} else {
				//todo ; heeree nov 26
				AccountHolderManager.validateIfUpdateIsNotExisting(ehubPin , columnValue , null , null , null , null , null, null
					,{callback: function(data) {
						if(data == false){
							if(oldLastNameValue.toUpperCase() == columnValue.toUpperCase()){
								saveNameIsNotExisting = false;
								$('#invalidLastName').hide();
								$('#patLastNameUpdateMessage').hide();
								$('#invalidLastNameUpdate').hide();
							}else{
								saveNameIsNotExisting = false;
								$('#invalidLastName').hide();
								$('#patLastNameUpdateMessage').hide();
								$('#invalidLastNameUpdate').show();
								$('#invalidLastNameUpdate').css("display", "block");
								$('#invalidLastNameUpdate').fadeIn(1000);
								$('#invalidLastNameUpdate').delay(2000).fadeOut(8000);
							}

						}else{
							saveName = true;

							$('#invalidLastName').hide();
							$('#invalidLastNameUpdate').hide();
							//$('#patLastNameUpdateMessage').show();
							//$('#patLastNameUpdateMessage').css("display", "block");
							//$('#patLastNameUpdateMessage').fadeIn(1000);
							//$('#patLastNameUpdateMessage').delay(2000).fadeOut(2000);
							$('#oldLastNameValue').val(columnValue);

						}
					},async:false});
				//});
				//$('#invalidLastName').hide();
				//$('#patLastNameUpdateMessage').show();
				//$('#patLastNameUpdateMessage').css("display", "block");
				//$('#patLastNameUpdateMessage').fadeIn(1000);
				//$('#patLastNameUpdateMessage').delay(2000).fadeOut(2000);
			}
		}

	} else if(columnName == 'firstName'){
		var nameNow = validateName(columnValue , 'patFirstName');
		if(nameNow == 'invalid'){
			saveName = false;
			$('#firstNameUpdateMessage').hide();
			$('#firstNameInvalidUpdateMessage').hide();
			$('#invalidFirstName').show();
			$('#invalidFirstName').css("display", "block");
			$('#invalidFirstName').fadeIn(1000);
			$('#invalidFirstName').delay(2000).fadeOut(2000);
		}else{
			if(columnValue.length <= 0){
				saveName = true;
				$('#invalidFirstName').hide();
				$('#firstNameInvalidUpdateMessage').hide();
				//$('#firstNameUpdateMessage').show();
				//$('#firstNameUpdateMessage').css("display", "block");
				//$('#firstNameUpdateMessage').fadeIn(1000);
				//$('#firstNameUpdateMessage').delay(2000).fadeOut(2000);
			} else if(columnValue.trim().length <= 0){
				saveName = false;
				$('#firstNameUpdateMessage').hide();
				$('#firstNameInvalidUpdateMessage').hide();
				$('#invalidFirstName').show();
				$('#invalidFirstName').css("display", "block");
				$('#invalidFirstName').fadeIn(1000);
				$('#invalidFirstName').delay(2000).fadeOut(2000);
			} else {
				AccountHolderManager.validateIfUpdateIsNotExisting(ehubPin , null , columnValue , null , null , null , null, null
					,{callback: function(data) {
						if(data == false){
							if(oldFirstNameValue.toUpperCase() == columnValue.toUpperCase()){
								saveNameIsNotExisting = false;
								$('#invalidFirstName').hide();
								$('#firstNameUpdateMessage').hide();
								$('#firstNameInvalidUpdateMessage').hide();
							}else{
								saveNameIsNotExisting = false;
								$('#invalidFirstName').hide();
								$('#firstNameUpdateMessage').hide();
								$('#firstNameInvalidUpdateMessage').show();
								$('#firstNameInvalidUpdateMessage').css("display", "block");
								$('#firstNameInvalidUpdateMessage').fadeIn(1000);
								$('#firstNameInvalidUpdateMessage').delay(2000).fadeOut(8000);
							}

						}else{
							saveName = true;
							$('#oldFirstNameValue').val(columnValue);
							$('#invalidFirstName').hide();
							$('#firstNameInvalidUpdateMessage').hide();
							//$('#firstNameUpdateMessage').show();
							//$('#firstNameUpdateMessage').css("display", "block");
							//$('#firstNameUpdateMessage').fadeIn(1000);
							//$('#firstNameUpdateMessage').delay(2000).fadeOut(2000);
						}
					},async:false});

			}
		}
	} else if(columnName == 'middleName'){
		var nameNow = validateName(columnValue , 'patMiddleName');
		if(columnValue == ''){
			nameNow = '';
		}

		if(nameNow == 'invalid'){
			saveName = false;
			$('#middleNameUpdateMessage').hide();
			$('#middleNameInvalidUpdateMessage').hide();
			$('#invalidMiddleName').show();
			$('#invalidMiddleName').css("display", "block");
			$('#invalidMiddleName').fadeIn(1000);
			$('#invalidMiddleName').delay(2000).fadeOut(2000);
		}else{
			if(columnValue.length <= 0){
				columnValue = '!!!';
				//start
				AccountHolderManager.validateIfUpdateIsNotExisting(ehubPin , null , null , columnValue , null , null , null, null
					,{callback: function(data) {
						if(data == false){
							if(oldMiddleNameValue.toUpperCase() == columnValue.toUpperCase()){
								saveNameIsNotExisting = false;
								$('#invalidMiddleName').hide();
								$('#middleNameInvalidUpdateMessage').hide();
								$('#middleNameUpdateMessage').hide();
							}else{
								saveNameIsNotExisting = false;
								$('#invalidMiddleName').hide();
								$('#middleNameInvalidUpdateMessage').show();
								$('#middleNameUpdateMessage').hide();
								$('#middleNameInvalidUpdateMessage').css("display", "block");
								$('#middleNameInvalidUpdateMessage').fadeIn(1000);
								$('#middleNameInvalidUpdateMessage').delay(2000).fadeOut(2000);
							}

						}else{
							columnValue = '';
							saveName = true;
							$('#oldMiddleNameValue').val(columnValue);
							$('#invalidMiddleName').hide();
							$('#middleNameInvalidUpdateMessage').hide();
							//$('#middleNameUpdateMessage').show();
							//$('#middleNameUpdateMessage').css("display", "block");
							//$('#middleNameUpdateMessage').fadeIn(1000);
							//$('#middleNameUpdateMessage').delay(2000).fadeOut(2000);
						}
					},async:false});

				//end
			} else if(columnValue.trim().length <= 0){
				saveName = false;
				$('#invalidMiddleName').hide();
				$('#invalidMiddleName').show();
				$('#invalidMiddleName').css("display", "block");
				$('#invalidMiddleName').fadeIn(1000);
				$('#invalidMiddleName').delay(2000).fadeOut(2000);
			} else {
				AccountHolderManager.validateIfUpdateIsNotExisting(ehubPin , null , null , columnValue , null , null , null, null
					,{callback: function(data) {
						if(data == false){
							if(oldMiddleNameValue.toUpperCase() == columnValue.toUpperCase()){
								saveNameIsNotExisting = false;
								$('#invalidMiddleName').hide();
								$('#middleNameInvalidUpdateMessage').hide();
								$('#middleNameUpdateMessage').hide();
							}else{
								saveNameIsNotExisting = false;
								$('#invalidMiddleName').hide();
								$('#middleNameInvalidUpdateMessage').show();
								$('#middleNameUpdateMessage').hide();
								$('#middleNameInvalidUpdateMessage').css("display", "block");
								$('#middleNameInvalidUpdateMessage').fadeIn(1000);
								$('#middleNameInvalidUpdateMessage').delay(2000).fadeOut(8000);
							}

						}else{
							saveName = true;
							$('#oldMiddleNameValue').val(columnValue);
							$('#invalidMiddleName').hide();
							$('#middleNameInvalidUpdateMessage').hide();
							//$('#middleNameUpdateMessage').show();
							//$('#middleNameUpdateMessage').css("display", "block");
							//$('#middleNameUpdateMessage').fadeIn(1000);
							//$('#middleNameUpdateMessage').delay(2000).fadeOut(2000);
						}
					},async:false});
			}
		}

	} else if(columnName == 'suffix'){
		AccountHolderManager.validateIfUpdateIsNotExisting(ehubPin , null , null , null , columnValue , null , null, null
			,{callback: function(data) {
				if(data == false){
					if(oldSuffixValue.toUpperCase() == columnValue.toUpperCase()){
						saveNameIsNotExisting = false;
						$('#suffixUpdateMessage').hide();
						$('#suffixInvalidUpdateMessage').hide();
					}else{
						saveNameIsNotExisting = false;
						$('#suffixUpdateMessage').hide();
						$('#suffixInvalidUpdateMessage').show();
						$('#suffixInvalidUpdateMessage').css("display", "block");
						$('#suffixInvalidUpdateMessage').fadeIn(1000);
						$('#suffixInvalidUpdateMessage').delay(2000).fadeOut(8000);
					}

				}else{
					saveName = true;
					$('#oldSuffixValue').val(columnValue);
					$('#suffixInvalidUpdateMessage').hide();
					//$('#suffixUpdateMessage').show();
					//$('#suffixUpdateMessage').css("display", "block");
					//$('#suffixUpdateMessage').fadeIn(1000);
					//$('#suffixUpdateMessage').delay(2000).fadeOut(2000);
				}
			},async:false});


	} else if(columnName == 'dateOfBirth'){
		saveBirthday = true;
		var newVal = $('#patDateOfBirth').val();
		var oldVal = $('#hiddenBirthDate').val();
		var hiddenAge = $('#hiddenAgeValue').val();
		var dependentDescription = $('#dependentDescriptionId').val();
		var accountHolderBirthDate = $('#accountHolderBirthdate').val();
		var accountHolderAge = getAge(accountHolderBirthDate , 'current');
		var userInputAge = getAge(newVal, 'userInput');
		var isPrimaryProfile = $('#isPrimaryProfile').val();

		//var ageGap = accountHolderAge - userInputAge;
		var saveUpdateBirthdate = false;
		if(newVal != oldVal){
			if(isPrimaryProfile == 'Y' && userInputAge < 18){
				$('#accountHolderIsMinor').show();
				$('#accountHolderIsMinor').css("display", "block");
				$('#accountHolderIsMinor').fadeIn(1000);
				$('#accountHolderIsMinor').delay(2000).fadeOut(2000);
				$('#dateOfBirthUpdateMessage').css("display", "none");
				$('#dateOfBirthUpdateError').css("display", "none");
			}else{
				if(dependentDescription == 'DAUGHTER' || dependentDescription == 'SON'){
					if(userInputAge > accountHolderAge){
						$('#dateOfBirthUpdateError').show();
						$('#dateOfBirthUpdateError').css("display", "block");
						$('#accountHolderIsMinor').css("display", "none");
						$('#dateOfBirthUpdateMessage').css("display", "none");
						$('#dateOfBirthUpdateError').fadeIn(1000);
						$('#dateOfBirthUpdateError').delay(2000).fadeOut(2000);
					} else {
						saveUpdateBirthdate = true;
					}
				} else if(dependentDescription == 'MOTHER' || dependentDescription == 'FATHER'){
					if(userInputAge < accountHolderAge){
						$('#dateOfBirthUpdateOlderError').show();
						$('#dateOfBirthUpdateOlderError').css("display", "block");
						$('#dateOfBirthUpdateMessage').css("display", "none");
						$('#accountHolderIsMinor').css("display", "none");
						$('#dateOfBirthUpdateOlderError').fadeIn(1000);
						$('#dateOfBirthUpdateOlderError').delay(2000).fadeOut(2000);
					} else {
						saveUpdateBirthdate = true;
					}
				}  else if(dependentDescription == 'GRANDPARENT'){
					if(userInputAge < accountHolderAge){
						$('#dateOfBirthUpdateOlderError').show();
						$('#dateOfBirthUpdateOlderError').css("display", "block");
						$('#dateOfBirthUpdateMessage').css("display", "none");
						$('#accountHolderIsMinor').css("display", "none");
						$('#dateOfBirthUpdateOlderError').fadeIn(1000);
						$('#dateOfBirthUpdateOlderError').delay(2000).fadeOut(2000);
					} else {
						saveUpdateBirthdate = true;
					}
				} else if(dependentDescription == 'GRANDDAUGHTER' || dependentDescription == 'GRANDSON'){
					if(userInputAge > accountHolderAge){
						$('#dateOfBirthUpdateError').show();
						$('#dateOfBirthUpdateError').css("display", "block");
						$('#dateOfBirthUpdateMessage').css("display", "none");
						$('#accountHolderIsMinor').css("display", "none");
						$('#dateOfBirthUpdateError').fadeIn(1000);
						$('#dateOfBirthUpdateError').delay(2000).fadeOut(2000);
					} else {
						saveUpdateBirthdate = true;
					}
				}else {
					saveUpdateBirthdate = true;
				}

				if(saveUpdateBirthdate == true){
					if(columnValue == ""){
						saveChanges = false;
						$('#dateOfBirthUpdateMessage').hide();
						$('#invalidBirthdateUpdate').hide();
						$('#dateOfBirthUpdateError').css("display", "none");
						$('#accountHolderIsMinor').css("display", "none");
						$('#invalidBirthdateUpdateNull').show();
						$('#invalidBirthdateUpdateNull').css("display", "block");
						$('#invalidBirthdateUpdateNull').fadeIn(1000);
						$('#invalidBirthdateUpdateNull').delay(2000).fadeOut(2000);
						$('#invalidBirthdateUpdateNull').delay(2000).fadeOut(2000);
					}else{
						//var ageVal = getAge(newVal, 'userInput');
						if(isNaN(userInputAge)) {
						saveBirthday = true;
						closeDatepicker();
						}else{
						AccountHolderManager.validateIfUpdateIsNotExisting(ehubPin , null , null , null , null , columnValue , null, null
							,{callback: function(data) {
								if(data == false){
									if(newVal != oldVal){
										//var ageVal = getAge(newVal, 'userInput');
										//if(isNaN(ageVal)) {
										//	saveBirthday = true;
										//	closeDatepicker();
										//}else{
											saveChanges = false;
											$('#invalidBirthdateUpdateNull').hide();
											$('#dateOfBirthUpdateMessage').hide();
											$('#invalidBirthdateUpdate').show();
											$('#dateOfBirthUpdateError').css("display", "none");
											$('#accountHolderIsMinor').css("display", "none");
											$('#invalidBirthdateUpdate').css("display", "block");
											$('#invalidBirthdateUpdate').fadeIn(1000);
											$('#invalidBirthdateUpdate').delay(4000).fadeOut(4000);
										//}
									}
								}else{
									saveBirthday = false;
									hiddenAge = hiddenAge.replace(/[^0-9\.]+/g, "");
									if(newVal != oldVal) {
										var ageVal = getAge(newVal, 'userInput');
											if(isNaN(ageVal)){
												closeDatepicker();
											}else{
												if (ageVal != hiddenAge) {
													if (ageVal <= 1) {
														$('#hiddenAgeValue').val(ageVal);
														ageVal = ageVal + ' yr old';
														$('#ageValue').val(ageVal);
													} else if (ageVal > 1) {
														$('#hiddenAgeValue').val(ageVal);
														ageVal = ageVal + ' yrs old';
														$('#ageValue').val(ageVal);
													}
													//$('#ageUpdateMessage').show();
													//$('#ageUpdateMessage').css("display", "block");
													//$('#ageUpdateMessage').fadeIn(1000);
													//$('#ageUpdateMessage').delay(2000).fadeOut(2000);
												}
												if (userInputAge < 60) {
													document.getElementById("seniorTextField").disabled = true;
													if ($('#seniorTextField').val() != '') {
														//$('#seniorCitizenNumberUpdateMessage').show();
														//$('#seniorCitizenNumberUpdateMessage').css("display", "block");
														//$('#seniorCitizenNumberUpdateMessage').fadeIn(1000);
														//$('#seniorCitizenNumberUpdateMessage').delay(2000).fadeOut(2000);
														$('#seniorTextField').val('');
													}
												} else {
													document.getElementById("seniorTextField").disabled = false;
												}

												$('#hiddenBirthDate').val(newVal);
												//$('#dateOfBirthUpdateMessage').show();
												$('#dateOfBirthUpdateError').css("display", "none");
												$('#accountHolderIsMinor').css("display", "none");
												//$('#dateOfBirthUpdateMessage').css("display", "block");
												//$('#dateOfBirthUpdateMessage').fadeIn(1000);
												//$('#dateOfBirthUpdateMessage').delay(2000).fadeOut(2000);
												closeDatepicker();
											}

									}else{
										saveChanges = false;
									}
								}
							},async:false});

						//here
						}
					}
				}

				$('#hiddenBirthDate').val(newVal);
				closeDatepicker();
			}
		}


	} else if(columnName == 'patGender'){
		AccountHolderManager.validateIfUpdateIsNotExisting(ehubPin , null , null , null , null , null , columnValue, null
			,{callback: function(data) {
				if(data == false){
					if(oldGenderValue.toUpperCase() == columnValue.toUpperCase()){
						saveChanges = false;
						$('#patGenderInvalidUpdateMessage').hide();
						$('#patGenderUpdateMessage').hide();
					}else{
						saveChanges = false;
						$('#patGenderInvalidUpdateMessage').show();
						$('#patGenderUpdateMessage').hide();
						$('#patGenderInvalidUpdateMessage').css("display", "block");
						$('#patGenderInvalidUpdateMessage').fadeIn(1000);
						$('#patGenderInvalidUpdateMessage').delay(2000).fadeOut(8000);
					}

				}else{
					saveChanges = true;
					$('#oldGenderValue').val(columnValue);
					$('#patGenderInvalidUpdateMessage').hide();
					/*//$('#patGenderUpdateMessage').show();
					$('#patGenderUpdateMessage').css("display", "block");
					$('#patGenderUpdateMessage').fadeIn(1000);
					$('#patGenderUpdateMessage').delay(2000).fadeOut(2000);*/
				}
			},async:false});

	} else if(columnName == 'religion'){
		/*
		//$('#religionUpdateMessage').show();
		$('#religionUpdateMessage').css("display", "block");
		$('#religionUpdateMessage').fadeIn(1000);
		$('#religionUpdateMessage').delay(2000).fadeOut(2000); */
	} else if(columnName == 'countryOfBirth'){
		//if(oldBirthPlaceVal != ''){
		//	$('#birthPlaceUpdateMessage').show();
		//	$('#birthPlaceUpdateMessage').css("display", "block");
		//	$('#birthPlaceUpdateMessage').fadeIn(1000);
		//	$('#birthPlaceUpdateMessage').delay(2000).fadeOut(2000);
		//}
		//$('#birthPlaceInputId').val('');
		/*
		//$('#countryOfBirthUpdateMessage').show();
		$('#countryOfBirthUpdateMessage').css("display", "block");
		$('#countryOfBirthUpdateMessage').fadeIn(1000);
		$('#countryOfBirthUpdateMessage').delay(2000).fadeOut(2000); */
	} else if(columnName == 'birthPlace'){
		/*
		//$('#birthPlaceUpdateMessage').show();
		$('#birthPlaceUpdateMessage').css("display", "block");
		$('#birthPlaceUpdateMessage').fadeIn(1000);
		$('#birthPlaceUpdateMessage').delay(2000).fadeOut(2000); */
	}

	if($('#chumsCheckbox').is(":checked")) {
		chumsAccountNumberAvailable = 'true'
		$('#chumsDiv').find('input, select').attr('disabled', true);
		//$('#chumsAccountNumber').val('');
	}else{
		chumsAccountNumberAvailable = 'false';
		$('#chumsDiv').find('input, select').attr('disabled', false);
	}

	if(columnName == 'chumsCheckbox'){
		if($('#chumsCheckbox').is(":checked")) {
			chumsAccountNumberAvailable = 'true'
			$('#chumsDiv').find('input, select').attr('disabled', true);
		}else{
			chumsAccountNumberAvailable = 'false';
			$('#chumsDiv').find('input, select').attr('disabled', false);
			$('#chumsAddressNotif').hide();
		}
	}

	if(columnName == 'chumsAccountNumber') {
		if($('#chumsAccountNumber').val().length > 0){
			$('#employerAddressDiv').find('input, select').attr('disabled', true);
		}else{
			$('#employerAddressDiv').find('input, select').attr('disabled', false);
		}
		if(columnName == null){
			$('#employerAddressDiv').find('input, select').attr('disabled', false);
		}
		if(columnValue != ""){
			RefEmployeeManager.getRefEmployeeById(columnValue,{callback: function(data) {
				if(data != null){
					$('#employerId').val(data.compCode.companyName);
					$('#chumsAccountNumberError').hide();
					/*
					//$('#chumsAccountNumberUpdateMessage').show();
					$('#chumsAccountNumberUpdateMessage').css("display", "block");
					$('#chumsAccountNumberUpdateMessage').fadeIn();
					$('#chumsAccountNumberUpdateMessage').delay(2000).fadeOut(2000);
					*/
					$('#employerAddressCountry').val("PHL");
					$('#employerAddressProvince').val('');
					$('#employerAddressProvinceInput').val('');
					$('#employerAddressZipOrPostalCodeId').val('');
					$('#employerAddressCityInputDiv').val('');
					/*
					//$('#employerUpdateMessage').show();
					$('#employerUpdateMessage').css("display", "block");
					$('#employerUpdateMessage').fadeIn();
					$('#employerUpdateMessage').delay(2000).fadeOut(2000);
					*/
					$('#employerAddressDiv').find('input, select').attr('disabled', true);
					$('#chumsAddressNotif').show();
				}else{
					//$('#employerAddressCountry').val(null);
					//$('#employerAddressProvince').val(null);
					//$('#employerAddressCountry').val(null);
					//$('#employerId').val("");
					$('#chumsAccountNumberUpdateMessage').hide();
					$('#chumsAccountNumberError').show();
					$('#chumsAccountNumberError').css("display", "block");
					$('#chumsAccountNumberError').fadeIn();
					$('#chumsAccountNumberError').delay(2000).fadeOut(2000);
					//$('#employerAddressDiv').find('input, select').attr('disabled', false);
					$('#chumsAddressNotif').hide();
				}
			},async:false});
		}else{
			$('#employerAddressCountry').val(null);
			$('#employerAddressProvince').val(null);
			$('#employerAddressCountry').val(null);
			$('#employerId').val("");
			/*
			//$('#chumsAccountNumberUpdateMessage').show();
			$('#chumsAccountNumberUpdateMessage').css("display", "block");
			$('#chumsAccountNumberUpdateMessage').fadeIn();
			$('#chumsAccountNumberUpdateMessage').delay(2000).fadeOut(2000);
			//$('#employerUpdateMessage').show();
			$('#employerUpdateMessage').css("display", "block");
			$('#employerUpdateMessage').fadeIn();
			$('#employerUpdateMessage').delay(2000).fadeOut(2000);
			 */
			$('#chumsAddressNotif').hide();
		}
	}

/*
	if(saveChanges == true && saveName == true && saveNameIsNotExisting == true && saveBirthday == false){
		PatientEditDwr.editPatientProfile(ehubPin,columnName,columnValue,regId,chumsAccountNumberAvailable);
	}
*/

	//alert(thisVal.attr('id') + "     SSAAVVEEDD");
}

function closeDatepicker(){
	$(".datepicker").hide();
}

function updatePatientRelativeInfo(thisVal){
	var ehubPin = $("#eHubPin").val();
	var columnName=thisVal.attr('name');
	var columnValue=thisVal.val();
	var regId = $("#hiddenRegistrationId").val();
    var isValid = true;

	if(columnName == 'fatherLastName'){
/*		$('#fatherLastNameUpdateMessage').show();
		$('#fatherLastNameUpdateMessage').css("display", "block");
		$('#fatherLastNameUpdateMessage').fadeIn(1000);
		$('#fatherLastNameUpdateMessage').delay(2000).fadeOut(2000);*/

	} else if(columnName == 'fatherFirstName'){
/*		$('#fatherFirstNameUpdateMessage').show();
		$('#fatherFirstNameUpdateMessage').css("display", "block");
		$('#fatherFirstNameUpdateMessage').fadeIn(1000);
		$('#fatherFirstNameUpdateMessage').delay(2000).fadeOut(2000);*/

	} else if(columnName == 'fatherMiddleName'){
/*		$('#fatherMiddleNameUpdateMessage').show();
		$('#fatherMiddleNameUpdateMessage').css("display", "block");
		$('#fatherMiddleNameUpdateMessage').fadeIn(1000);
		$('#fatherMiddleNameUpdateMessage').delay(2000).fadeOut(2000);*/

	} else if(columnName == 'motherLastName'){
        var nameNow = validateName(columnValue , 'mothersLastName');
        if(nameNow != 'invalid'){
            $('#invalidMothersLastName').hide();
/*            $('#motherLastNameUpdateMessage').show();
            $('#motherLastNameUpdateMessage').css("display", "block");
            $('#motherLastNameUpdateMessage').fadeIn(1000);
            $('#motherLastNameUpdateMessage').delay(2000).fadeOut(2000);*/
        }else{
            isValid = false;
            $('#motherLastNameUpdateMessage').hide();
            $('#invalidMothersLastName').show();
            $('#invalidMothersLastName').css("display", "block");
            $('#invalidMothersLastName').fadeIn(1000);
            $('#invalidMothersLastName').delay(2000).fadeOut(2000);
        }
	} else if(columnName == 'motherFirstName'){
	    var nameNow = validateName(columnValue , 'mothersFirstName');
        if(nameNow != 'invalid'){
            $('#invalidMothersFirstName').hide();
/*            $('#motherFirstNameUpdateMessage').show();
            $('#motherFirstNameUpdateMessage').css("display", "block");
            $('#motherFirstNameUpdateMessage').fadeIn(1000);
            $('#motherFirstNameUpdateMessage').delay(2000).fadeOut(2000);*/
		}else{
             isValid = false;
             $('#motherFirstNameUpdateMessage').hide();
             $('#invalidMothersFirstName').show();
             $('#invalidMothersFirstName').css("display", "block");
             $('#invalidMothersFirstName').fadeIn(1000);
             $('#invalidMothersFirstName').delay(2000).fadeOut(2000);
         }
	} else if(columnName == 'motherMiddleName'){
/*		$('#motherMiddleNameUpdateMessage').show();
		$('#motherMiddleNameUpdateMessage').css("display", "block");
		$('#motherMiddleNameUpdateMessage').fadeIn(1000);
		$('#motherMiddleNameUpdateMessage').delay(2000).fadeOut(2000);*/

	} else if(columnName == 'erMiddleName'){
/*     		$('#erMiddleNameUpdateMessage').show();
     		$('#erMiddleNameUpdateMessage').css("display", "block");
     		$('#erMiddleNameUpdateMessage').fadeIn(1000);
     		$('#erMiddleNameUpdateMessage').delay(2000).fadeOut(2000);*/

	}
	// http://imdweb.stluke.com.ph/redmine/issues/20738

	else if(columnName == 'erLastName'){
/*		$('#erLastNameUpdateMessage').show();
		$('#erLastNameUpdateMessage').css("display", "block");
		$('#erLastNameUpdateMessage').fadeIn(1000);
		$('#erLastNameUpdateMessage').delay(2000).fadeOut(2000);*/

	} else if(columnName == 'erFirstName'){
/*		$('#erFirstNameUpdateMessage').show();
		$('#erFirstNameUpdateMessage').css("display", "block");
		$('#erFirstNameUpdateMessage').fadeIn(1000);
		$('#erFirstNameUpdateMessage').delay(2000).fadeOut(2000);*/

	} else if(columnName == 'erRelationWithPatient'){
/*		$('#erRelationWithPatientUpdateMessage').show();
		$('#erRelationWithPatientUpdateMessage').css("display", "block");
		$('#erRelationWithPatientUpdateMessage').fadeIn(1000);
		$('#erRelationWithPatientUpdateMessage').delay(2000).fadeOut(2000);*/

	} else if(columnName == 'erContactNumber'){
/*		$('#erContactNumberUpdateMessage').show();
		$('#erContactNumberUpdateMessage').css("display", "block");
		$('#erContactNumberUpdateMessage').fadeIn(1000);
		$('#erContactNumberUpdateMessage').delay(2000).fadeOut(2000);*/

	}

    if(isValid == true) {
		PatientEditDwr.editPatientRelativeInfo(ehubPin, columnName, columnValue, regId);
	}
	//alert(thisVal.attr('id') + "     SSAAVVEEDD");
}

function updatePatientAddressInfo(thisVal){

	var ehubPin = $("#eHubPin").val();
	var regId = $("#hiddenRegistrationId").val();
	var columnName=thisVal.attr('name');
	var columnValue=thisVal.val();
	var addressTypeCode=thisVal.attr('addressTypeCode');
	var isSameAsPresentPermanentAddress;
	var isSameAsPresentContactInfoAddress;
	var isForeignAddress = thisVal.attr('isForeignAddressType');
	var presentAddressCountry = $('#presentAddressCountry').val();

	var presentAddressCountryVal = $('#presentAddressCountry').val();
	var presentAddressBldgIdVal = $('#presentAddressBldgId').val();
	var presentAddressNumStIdVal = $('#presentAddressNumStId').val();
	var presentAddressBrgyVillageIdVal = $('#presentAddressBrgyVillageId').val();
	var presentAddressCityVal = $('#presentAddressCity').val();
	var presentAddressCityInputId = $('#presentAddressCityInput').val();
	var presentAddressProvinceVal = $('#presentAddressProvince').val();
	var presentAddressProviceInputVal = $('#presentAddressProviceInput').val();
	var presentAddressZipOrPostalCodeIdVal = $('#presentAddressZipOrPostalCodeId').val();

	//If all values for permanent address are empty
	if(presentAddressCountryVal.length == 0 &&  presentAddressBldgIdVal.length == 0 && presentAddressNumStIdVal.length == 0 &&
		presentAddressBrgyVillageIdVal.length == 0 && presentAddressCityVal.length == 0 && presentAddressCityInputId.length == 0 &&
		presentAddressProvinceVal.length == 0 && presentAddressProviceInputVal.length == 0 &&  presentAddressZipOrPostalCodeIdVal.length == 0){
		$('#presentAddressCheckerIfNull').val('');
		$('#permanentAddressCheckBox').attr('checked', false);
		$('#personToContactAddressCheckBox').attr('disabled' , false);
		$('#permanentAddressDiv').find('input, select').attr('disabled', false);
		$('#personToContactAddressDiv').find('input, select').attr('disabled', 'disabled');

		$('#permanentAddressCheckBox').prop('disabled' , true);
		$('#permanentAddressCheckBox').attr('title','You must have a present address to select this option');
		$('#personToContactAddressCheckBox').prop('disabled' , true);
		$('#personToContactAddressCheckBox').attr('title','You must have a present address to select this option');
	}

	if($('#presentAddressCheckerIfNull').val() != ''){
		$('#permanentAddressCheckBox').prop('disabled' , false);
		$('#personToContactAddressCheckBox').prop('disabled' , false);
	}


	if($('#permanentAddressCheckBox').is(":checked")){
		isSameAsPresentPermanentAddress = '1';
		$('#permanentAddressDiv').find('input, select').attr('disabled', 'disabled');
		$('#permanentAddressCheckBox').attr('disabled' , false);
		//setter
		$('#permanentAddressCountry').val($('#presentAddressCountry').val());
		$('#permanentAddressBldgId').val($('#presentAddressBldgId').val());
		$('#permanentAddressNumStId').val($('#presentAddressNumStId').val());
		$('#permanentAddressBrgyVillageId').val($('#presentAddressBrgyVillageId').val());
		if(columnName == 'presentAddressCountry' || columnName == 'presentAddressCity' || columnName == 'presentAddressProvince' || columnName == 'permanentAddressCheckBox'){
			if(presentAddressCountry == 'PHL'){
				$('#permanentAddressCityInputDiv').hide();
				$('#permanentAddressCityDropDiv').show();
				$('#permanentAddressProvinceInputDiv').hide();
				$('#permanentAddressProvinceDropDiv').show();
				$('#permanentAddressCity').val($('#presentAddressCity').val());
				$('#permanentAddressProvince').val($('#presentAddressProvince').val());
			}else if(presentAddressCountry != 'PHL' && presentAddressCountry != '' && columnName != 'employerAddressCountry'){
				$('#permanentAddressCityInputDiv').show();
				$('#permanentAddressCityDropDiv').hide();
				$('#permanentAddressProvinceInputDiv').show();
				$('#permanentAddressProvinceDropDiv').hide();
				$('#permanentAddressCityInput').val($('#presentAddressCityInput').val());
				$('#permanentAddressProvinceInput').val($('#presentAddressProviceInput').val());
			}
		}

		$('#permanentAddressZipOrPostalCodeId').val($('#presentAddressZipOrPostalCodeId').val());

	}else {
		isSameAsPresentPermanentAddress = '0';
		$('#permanentAddressDiv').find('input, select').attr('disabled', false);
		$('#permanentAddressCheckBox').attr('disabled' , false);

	}

	if($('#personToContactAddressCheckBox').is(":checked")){
		isSameAsPresentContactInfoAddress = '1';
		$('#personToContactAddressDiv').find('input, select').attr('disabled', 'disabled');
		$('#personToContactAddressCheckBox').attr('disabled' , false);

		//setter
		$('#personToContactAddressCountry').val($('#presentAddressCountry').val());
		$('#personToContactAddressBldgId').val($('#presentAddressBldgId').val());
		$('#personToContactAddressNumStId').val($('#presentAddressNumStId').val());
		$('#personToContactAddressBrgyVillageId').val($('#presentAddressBrgyVillageId').val());

		if(columnName == 'presentAddressCountry' || columnName == 'presentAddressCity' || columnName == 'presentAddressProvince' || columnName == 'personToContactAddressCheckBox'){

			/**
			 * for ticket #19594
			 * Contact Information - Unable to retrieve City and Province value for Same with Present Address
			 */
			//if(isForeignAddress == 'N'){
			if(presentAddressCountry == 'PHL'){
				$('#personToContactAddressCityInputDiv').hide();     //Foreign
				$('#personToContactAddressCityDropDiv').show();		//PHL
				$('#personToContactAddressProvinceInputDiv').hide();
				$('#personToContactAddressProvinceDropDiv').show();
				$('#personToContactAddressCity').val($('#presentAddressCity').val());
				$('#personToContactAddressProvince').val($('#presentAddressProvince').val());
				//} else if (isForeignAddress == 'Y' && columnName != 'employerAddressCountry'){
			} else if (presentAddressCountry != 'PHL' && columnName != 'employerAddressCountry'){
				$('#personToContactAddressCityInputDiv').show();
				$('#personToContactAddressCityDropDiv').hide();
				$('#personToContactAddressProvinceInputDiv').show();
				$('#personToContactAddressProvinceDropDiv').hide();
				$('#personToContactAddressCityInput').val($('#presentAddressCityInput').val());
				$('#personToContactAddressProvinceInput').val($('#presentAddressProviceInput').val());
			}
		}

		$('#personToContactAddressZipOrPostalCodeId').val($('#presentAddressZipOrPostalCodeId').val());

	}else {
		isSameAsPresentContactInfoAddress = '0';
		$('#personToContactAddressDiv').find('input, select').attr('disabled', false);
		$('#personToContactAddressCheckBox').attr('disabled' , false);
	}


	if(columnName == 'presentAddressCountry' && columnValue != 'PHL'){
		//thisVal.attr('isForeignAddressType', 'Y');
		isForeignAddress = 'Y';
		$('#presentAddressCityInput').val('');
		$('#presentAddressProviceInput').val('');
		$('#presentAddressCityInputDiv').show();
		$('#presentAddressCityDropDiv').hide();
		$('#presentAddressProvinceInputDiv').show();
		$('#presentAddressProvinceDropDiv').hide();
	}else if (columnName == 'presentAddressCountry' && columnValue == 'PHL'){
		isForeignAddress = 'N';
		$('#presentAddressCity').val('');
		$('#presentAddressProvince').val('');
		$('#presentAddressCityDropDiv').show();
		$('#presentAddressCityInputDiv').hide();
		$('#presentAddressProvinceDropDiv').show();
		$('#presentAddressProvinceInputDiv').hide();
	}

	// for permanent address text or drop
	if(columnName == 'permanentAddressCountry' && columnValue != 'PHL'){
		isForeignAddress = 'Y';
		$('#permanentAddressCityInput').val('');
		$('#permanentAddressProvinceInput').val('');
		$('#permanentAddressCityInputDiv').show();
		$('#permanentAddressCityDropDiv').hide();
		$('#permanentAddressProvinceInputDiv').show();
		$('#permanentAddressProvinceDropDiv').hide();
	} else if (columnName == 'permanentAddressCountry' && columnValue == 'PHL'){
		isForeignAddress = 'N';
		$('#permanentAddressCity').val('');
		$('#permanentAddressProvince').val('');
		$('#permanentAddressCityDropDiv').show();
		$('#permanentAddressCityInputDiv').hide();
		$('#permanentAddressProvinceDropDiv').show();
		$('#permanentAddressProvinceInputDiv').hide();
	}
	// for employer address text or drop
	else if(columnName == 'employerAddressCountry' && columnValue != 'PHL'){
		isForeignAddress = 'Y';

		$('#employerAddressCityInput').val('');
		$('#employerAddressProvinceInput').val('');
		$('#employerAddressCityInputDiv').show();
		$('#employerAddressCityDropDiv').hide();
		$('#employerAddressProvinceInputDiv').show();
		$('#employerAddressProvinceDropDiv').hide();
	} else if (columnName == 'employerAddressCountry' && columnValue == 'PHL'){
		isForeignAddress = 'N';
		$('#employerAddressCity').val('');
		$('#employerAddressProvince').val('');
		$('#employerAddressCityDropDiv').show();
		$('#employerAddressCityInputDiv').hide();
		$('#employerAddressProvinceDropDiv').show();
		$('#employerAddressProvinceInputDiv').hide();
	}

	// for contactPerson address text or drop
	else if(columnName == 'personToContactAddressCountry' && columnValue != 'PHL'){
		isForeignAddress = 'Y';
		$('#personToContactAddressCityInput').val('');
		$('#personToContactAddressProvinceInput').val('');
		$('#personToContactAddressCityInputDiv').show();
		$('#personToContactAddressCityDropDiv').hide();
		$('#personToContactAddressProvinceInputDiv').show();
		$('#personToContactAddressProvinceDropDiv').hide();
		//alert('This must be foreign' + columnValue);
	} else if (columnName == 'personToContactAddressCountry' && columnValue == 'PHL'){
		isForeignAddress = 'N';
		$('#personToContactAddressCity').val('');
		$('#personToContactAddressProvince').val('');
		$('#personToContactAddressCityDropDiv').show();
		$('#personToContactAddressCityInputDiv').hide();
		$('#personToContactAddressProvinceDropDiv').show();
		$('#personToContactAddressProvinceInputDiv').hide();
		//alert('This must be Philippines' + columnValue);
	}

	//end

}

function updatePatientContactInfo(thisVal){
	var ehubPin = $("#eHubPin").val();
	var columnName=thisVal.attr('name');
	var columnValue=thisVal.val();
	var contactType=thisVal.attr('contactType');


	if(columnName == 'contactDetailMobile'){
/*		$('#contactDetailMobileUpdateMessage').show();
		$('#contactDetailMobileUpdateMessage').css("display", "block");
		$('#contactDetailMobileUpdateMessage').fadeIn(1000);
		$('#contactDetailMobileUpdateMessage').delay(2000).fadeOut(2000);*/

	} else if(columnName == 'contactDetailPhone'){
/*		$('#contactDetailPhoneUpdateMessage').show();
		$('#contactDetailPhoneUpdateMessage').css("display", "block");
		$('#contactDetailPhoneUpdateMessage').fadeIn(1000);
		$('#contactDetailPhoneUpdateMessage').delay(2000).fadeOut(2000);*/

	}
	PatientEditContactDwr.editPatientContactInfo(ehubPin,columnName,columnValue,contactType);
}

function getAge(dateString , current) {
	if(current == 'current'){
		var today = new Date();
		var birthDate = new Date(dateString);
		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		return age;
	}else{
		var isValid = checkDate(dateString);
		if(isValid == 'valid'){
			var today = new Date();
			var birthDate = new Date(dateString);
			var age = today.getFullYear() - birthDate.getFullYear();
			var m = today.getMonth() - birthDate.getMonth();
			if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
				age--;
			}
			return age;
		}else {
			closeDatepicker();
			return isValid;
		}
	}

}

function checkDate(dateString) {
	$('#invalidBirthdateUpdateFormat').hide();
	$('#birthdateFutureCheck').hide();
	var bdateCheck = /^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
	var val = dateString;

	var bdate = new Date(val);
	var now = new Date();

	if (!bdateCheck.test(val)) {
		closeDatepicker();
		$('#birthdateFutureCheck').hide();
		$('#invalidBirthdateUpdateFormat').show();
		$('#invalidBirthdateUpdateFormat').css("display", "block");
		$('#invalidBirthdateUpdateFormat').fadeIn(1000);
		$('#invalidBirthdateUpdateFormat').delay(2000).fadeOut(2000);
		return 'invalid';
	} else {
		if (bdate < now) {
			var comp = val.split('/');
			var m = parseInt(comp[0], 10);
			var d = parseInt(comp[1], 10);
			var y = parseInt(comp[2], 10);
			var date = new Date(y,m-1,d);
			if (date.getFullYear() == y && date.getMonth() + 1 == m && date.getDate() == d) {
				return 'valid';
			} else {
				closeDatepicker();
				$('#birthdateFutureCheck').hide();
				$('#invalidBirthdateUpdateFormat').show();
				$('#invalidBirthdateUpdateFormat').css("display", "block");
				$('#invalidBirthdateUpdateFormat').fadeIn(1000);
				$('#invalidBirthdateUpdateFormat').delay(2000).fadeOut(2000);
				return 'invalid';
			}

		} else {
			closeDatepicker();
			$('#invalidBirthdateUpdateFormat').hide();
			$('#birthdateFutureCheck').show();
			$('#birthdateFutureCheck').css("display", "block");
			$('#birthdateFutureCheck').fadeIn(1000);
			$('#birthdateFutureCheck').delay(2000).fadeOut(2000);
			return 'future';
		}
	}
}

function validateName(name , columnName){
	//if(/^[ñA-Za-z _]*[A-Za-zÑñ][ñA-Za-zÑ _]*$/.test(name)) {
	//if(/^[a-zA-Z0-9\u00C0-\u00ff '.-]+$/.test(name)) {
	//	$('#' + columnName).val(name.replace(/  +/g, ' '));
	//	return name;
	//}
	if(name.trim().length == 0){
		if(columnName == 'patMiddleName'){
			if(name.length == 0){
				$('#oldMiddleNameValue').val('!!!');
			}
		}
		return 'invalid';
	}else{
		var nameNow = name.trim();
		$('#' + columnName).val(nameNow);
		if(columnName == 'patLastName'){
			$('#oldLastNameValue').val(nameNow);
		}else if(columnName == 'patFirstName'){
			$('#oldFirstNameValue').val(nameNow);
		}else if(columnName == 'suffix'){
			$('#oldSuffixValue').val(nameNow);
		}else if(columnName == 'patMiddleName'){
			$('#oldMiddleNameValue').val(nameNow);
		}
		return nameNow;
	}
}




function checkNameAndContactEmptiness() {

	var lastName = $('#erLastNameId').val();
	var firstName = $('#erFirstNameId').val();
	var middleName = $('#erMiddleNameId').val();
	var contactPersonContactNumber = $('#contactPersonContactNumberId').val();

	if (lastName=='' && firstName=='' && middleName=='' && contactPersonContactNumber==''){
		$("#erRelationWithPatientId")[0].selectedIndex=0;
		dataChanged($('#erRelationWithPatientId'));
		//updatePatientRelativeInfo($('#erRelationWithPatientId'));
	}
}

function savePersonalInfoTab(){

	if($('#patLastName').attr('data-has-changed') == "Y"){
		//updatePatientPersonalInfo($('#patLastName'));
		//$("#patLastName").attr("data-has-changed", "N");
		$("#patLastName").attr("name", "patient.lastName");
	}

	if($('#patFirstName').attr('data-has-changed') == "Y"){
		//updatePatientPersonalInfo($('#patFirstName'));
		//$("#patFirstName").attr("data-has-changed", "N");
		$("#patFirstName").attr("name", "patient.firstName");
	}

	if($('#patMiddleName').attr('data-has-changed') == "Y"){
		//updatePatientPersonalInfo($('#patMiddleName'));
		//$("#patMiddleName").attr("data-has-changed", "N");
		$("#patMiddleName").attr("name", "patient.middleName");
	}

	if($('#patSuffix').attr('data-has-changed') == "Y"){
		//updatePatientPersonalInfo($('#patSuffix'));
		//$("#patSuffix").attr("data-has-changed", "N");
		$("#patSuffix").attr("name", "patient.suffixCode");
	}

	if($('#patDateOfBirth').attr('data-has-changed') == "Y"){
		//updatePatientPersonalInfo($('#patDateOfBirth'));
		//$("#patDateOfBirth").attr("data-has-changed", "N");
	$("#patDateOfBirth").attr("name", "patientDateOfBirthString");
	}

	if($('#patGender').attr('data-has-changed') == "Y"){
		//updatePatientPersonalInfo($('#patGender'));
		//$("#patGender").attr("data-has-changed", "N");
		$("#patGender").attr("name", "patient.gender");
	}

	if($('#nationality').attr('data-has-changed') == "Y"){
		//updatePatientPersonalInfo($('#nationality'));
		//$("#nationality").attr("data-has-changed", "N");
		$("#nationality").attr("name", "patient.nationality");
	}

	if($('#citizenship').attr('data-has-changed') == "Y"){
		//updatePatientPersonalInfo($('#citizenship'));
		//$("#citizenship").attr("data-has-changed", "N");
		$("#citizenship").attr("name", "patient.citizenship");
	}

	if($('#civilStatus').attr('data-has-changed') == "Y"){
		//updatePatientPersonalInfo($('#civilStatus'));
		//$("#civilStatus").attr("data-has-changed", "N");
		$("#civilStatus").attr("name", "patient.civilStatus");
	}

	if($('#birthPlaceInputId').attr('data-has-changed') == "Y"){
		//updatePatientPersonalInfo($('#birthPlaceInputId'));
		//$("#birthPlaceInputId").attr("data-has-changed", "N");
		$("#birthPlaceInputId").attr("name", "patient.birthPlace");
	}

	if($('#countryOfBirthId').attr('data-has-changed') == "Y"){
		//updatePatientPersonalInfo($('#countryOfBirthId'));
		//$("#countryOfBirthId").attr("data-has-changed", "N");
		$("#countryOfBirthId").attr("name", "patient.birthCountry");
	}

	if($('#religionId').attr('data-has-changed') == "Y"){
		//updatePatientPersonalInfo($('#religionId'));
		//$("#religionId").attr("data-has-changed", "N");
		$("#religionId").attr("name", "patient.religion");
	}

	if($('#pwdId').attr('data-has-changed') == "Y"){
		//updatePatientPersonalInfo($('#pwdId'));
		//$("#pwdId").attr("data-has-changed", "N");
		$("#pwdId").attr("name", "patient.pwdId");
	}

	if($('#seniorTextField').attr('data-has-changed') == "Y"){
		//updatePatientPersonalInfo($('#seniorTextField'));
		//$("#seniorTextField").attr("data-has-changed", "N");
		$("#seniorTextField").attr("name", "patient.seniorId");
	}

	if($('#philHealthId').attr('data-has-changed') == "Y"){
		//updatePatientPersonalInfo($('#philHealthId'));
		//$("#philHealthId").attr("data-has-changed", "N");
		$("#philHealthId").attr("name", "patient.philHealthId");
	}

	if($('#occupationId').attr('data-has-changed') == "Y"){
		//updatePatientPersonalInfo($('#occupationId'));
		//$("#occupationId").attr("data-has-changed", "N");
		$("#occupationId").attr("name", "patient.occupation");
	}

	if($('#employerId').attr('data-has-changed') == "Y"){
		//updatePatientPersonalInfo($('#employerId'));
		//$("#employerId").attr("data-has-changed", "N");
		$("#employerId").attr("name", "patient.employer");
	}

	if($('#spouseLastName').attr('data-has-changed') == "Y"){
		//updatePatientPersonalInfo($('#spouseLastName'));
		//$("#spouseLastName").attr("data-has-changed", "N");
		$("#spouseLastName").attr("name", "patient.spouseLastName");
	}

	if($('#spouseFirstName').attr('data-has-changed') == "Y"){
		//updatePatientPersonalInfo($('#spouseFirstName'));
		//$("#spouseFirstName").attr("data-has-changed", "N");
		$("#spouseFirstName").attr("name", "patient.spouseFirstName");
	}

	if($('#spouseMiddleName').attr('data-has-changed') == "Y"){
		//updatePatientPersonalInfo($('#spouseMiddleName'));
		//$("#spouseMiddleName").attr("data-has-changed", "N");
		$("#spouseMiddleName").attr("name", "patient.spouseMiddleName");
	}

	if($('#fatherLastName').attr('data-has-changed') == "Y"){
		$("#fatherLastName").attr("name", "patientRelation.fatherLastName");
	}

	if($('#fatherFirstName').attr('data-has-changed') == "Y"){
		$("#fatherFirstName").attr("name", "patientRelation.fatherFirstName");
	}

	if($('#fatherMiddleName').attr('data-has-changed') == "Y"){
		$("#fatherMiddleName").attr("name", "patientRelation.fatherMiddleName");
	}

	if($('#mothersLastName').attr('data-has-changed') == "Y"){
		$("#mothersLastName").attr("name", "patientRelation.motherLastName");
	}

	if($('#mothersFirstName').attr('data-has-changed') == "Y"){
		$("#mothersFirstName").attr("name", "patientRelation.motherFirstName");
	}

	if($('#motherMiddleName').attr('data-has-changed') == "Y"){
		$("#motherMiddleName").attr("name", "patientRelation.motherMiddleName");
	}

}

function updatePatientAddressInfoOnDatabase(thisVal){
	var ehubPin = $("#eHubPin").val();
	var regId = $("#hiddenRegistrationId").val();
	var columnName=thisVal.attr('name');
	var columnValue=thisVal.val();
	var addressTypeCode=thisVal.attr('addressTypeCode');
	var isSameAsPresentPermanentAddress;
	var isSameAsPresentContactInfoAddress;
	var isForeignAddress = thisVal.attr('isForeignAddressType');
	var presentAddressCountry = $('#presentAddressCountry').val();

	var presentAddressCountryVal = $('#presentAddressCountry').val();
	var presentAddressBldgIdVal = $('#presentAddressBldgId').val();
	var presentAddressNumStIdVal = $('#presentAddressNumStId').val();
	var presentAddressBrgyVillageIdVal = $('#presentAddressBrgyVillageId').val();
	var presentAddressCityVal = $('#presentAddressCity').val();
	var presentAddressCityInputId = $('#presentAddressCityInput').val();
	var presentAddressProvinceVal = $('#presentAddressProvince').val();
	var presentAddressProviceInputVal = $('#presentAddressProviceInput').val();
	var presentAddressZipOrPostalCodeIdVal = $('#presentAddressZipOrPostalCodeId').val();

	if($('#permanentAddressCheckBox').is(":checked")) {
		isSameAsPresentPermanentAddress = '1';
	} else {
		isSameAsPresentPermanentAddress = '0';
	}

	if($('#personToContactAddressCheckBox').is(":checked")) {
		isSameAsPresentContactInfoAddress = '1';
	} else {
		isSameAsPresentContactInfoAddress = '0';
	}

	if(columnName == 'presentAddressCountry' || columnName == 'permanentAddressCountry' || columnName == 'employerAddressCountry' || columnName == 'personToContactAddressCountry'){
		if(columnValue != 'PHL') {
			isForeignAddress = 'Y';
		}else if (columnValue == 'PHL'){
			isForeignAddress = 'N';
		}
	}

	if(columnName == 'permanentAddressCheckBox'){
		columnValue = isSameAsPresentPermanentAddress;
	}
	if(columnName == 'personToContactAddressCheckBox'){
		columnValue = isSameAsPresentContactInfoAddress;
	}

	PatientEditAddressDwr.editPatientAddressesInfo(ehubPin,columnName,columnValue,addressTypeCode,regId
		,isSameAsPresentPermanentAddress,isSameAsPresentContactInfoAddress,isForeignAddress,{callback: function(addId){
			if(addId != ''){
				$('#presentAddressCheckerIfNull').val(addId);
				$('#permanentAddressCheckBox').attr('disabled' , false);
				$('#personToContactAddressCheckBox').attr('disabled' , false);
				$('#personToContactAddressCheckBox').attr('title','')
			}else{
				$('#permanentAddressCheckBox').attr('disabled' , true);
				$('#permanentAddressCheckBox').attr('title','You must have a present address to select this option')
				$('#personToContactAddressCheckBox').attr('disabled' , true);
				$('#personToContactAddressCheckBox').attr('title','You must have a present address to select this option')
			}

			$('#hiddenPresentAddressForeign').val(isForeignAddress);
			$('#hiddenPermanentAddressForeign').val(isForeignAddress);
			$('#hiddenPersonToContactAddressForeign').val(isForeignAddress);

		}});

	// message prompt update for present address div
	if (addressTypeCode == 'ADT01') {

		if (columnName == 'presentAddressCountry') {
/*			$('#presentAddressCountryUpdateMessage').show();
			$('#presentAddressCountryUpdateMessage').css("display", "block");
			$('#presentAddressCountryUpdateMessage').fadeIn(1000);
			$('#presentAddressCountryUpdateMessage').delay(2000).fadeOut(2000);*/

		} else if (columnName == 'presentAddressBldg') {
/*			$('#presentAddressBldgUpdateMessage').show();
			$('#presentAddressBldgUpdateMessage').css("display", "block");
			$('#presentAddressBldgUpdateMessage').fadeIn(1000);
			$('#presentAddressBldgUpdateMessage').delay(2000).fadeOut(2000);*/

		} else if (columnName == 'presentAddressNumSt') {
/*			$('#presentAddressNumStUpdateMessage').show();
			$('#presentAddressNumStUpdateMessage').css("display", "block");
			$('#presentAddressNumStUpdateMessage').fadeIn(1000);
			$('#presentAddressNumStUpdateMessage').delay(2000).fadeOut(2000);*/

		} else if (columnName == 'presentAddressBrgyVillage') {
/*			$('#presentAddressBrgyUpdateMessage').show();
			$('#presentAddressBrgyUpdateMessage').css("display", "block");
			$('#presentAddressBrgyUpdateMessage').fadeIn(1000);
			$('#presentAddressBrgyUpdateMessage').delay(2000).fadeOut(2000);*/

		} else if (columnName == 'presentAddressCity') {
			if (isForeignAddress == 'N') {
				$('#presentAddressCityInputUpdateMessage').hide();
/*				$('#presentAddressCityUpdateMessage').show();
				$('#presentAddressCityUpdateMessage').css("display", "block");
				$('#presentAddressCityUpdateMessage').fadeIn(1000);
				$('#presentAddressCityUpdateMessage').delay(2000).fadeOut(2000);*/

			} else if (isForeignAddress == 'Y') {
				$('#presentAddressCityUpdateMessage').hide();
/*				$('#presentAddressCityInputUpdateMessage').show();
				$('#presentAddressCityInputUpdateMessage').css("display", "block");
				$('#presentAddressCityInputUpdateMessage').fadeIn(1000);
				$('#presentAddressCityInputUpdateMessage').delay(2000).fadeOut(2000);*/
			}

		} else if (columnName == 'presentAddressProvince') {
			if (isForeignAddress == 'Y') {
				$('#presentAddressProvinceUpdateMessage').hide();
/*				$('#presentAddressProvinceInputUpdateMessage').show();
				$('#presentAddressProvinceInputUpdateMessage').css("display", "block");
				$('#presentAddressProvinceInputUpdateMessage').fadeIn(1000);
				$('#presentAddressProvinceInputUpdateMessage').delay(2000).fadeOut(2000);*/
			} else if (isForeignAddress == 'N') {
				$('#presentAddressProvinceInputUpdateMessage').hide();
/*				$('#presentAddressProvinceUpdateMessage').show();
				$('#presentAddressProvinceUpdateMessage').css("display", "block");
				$('#presentAddressProvinceUpdateMessage').fadeIn(1000);
				$('#presentAddressProvinceUpdateMessage').delay(2000).fadeOut(2000);*/

			}
		} else if (columnName == 'presentAddressZipOrPostalCode') {
/*			$('#presentAddressZipUpdateMessage').show();
			$('#presentAddressZipUpdateMessage').css("display", "block");
			$('#presentAddressZipUpdateMessage').fadeIn(1000);
			$('#presentAddressZipUpdateMessage').delay(2000).fadeOut(2000);*/
		}

		//var presentAddressCountryVal = $('#presentAddressCountry').val();
		//var presentAddressBldgIdVal = $('#presentAddressBldgId').val();
		//var presentAddressNumStIdVal = $('#presentAddressNumStId').val();
		//var presentAddressBrgyVillageIdVal = $('#presentAddressBrgyVillageId').val();
		//var presentAddressCityVal = $('#presentAddressCity').val();
		//var presentAddressCityInputId = $('#presentAddressCityInput').val();
		//var presentAddressProvinceVal = $('#presentAddressProvince').val();
		//var presentAddressProviceInputVal = $('#presentAddressProviceInput').val();
		//var presentAddressZipOrPostalCodeIdVal = $('#presentAddressZipOrPostalCodeId').val();
		//
		//
		//if(presentAddressCountryVal.length == 0 &&  presentAddressBldgIdVal.length == 0 && presentAddressNumStIdVal.length == 0 &&
		//	presentAddressBrgyVillageIdVal.length == 0 && presentAddressCityVal.length == 0 && presentAddressCityInputId.length == 0 &&
		//	presentAddressProvinceVal.length == 0 && presentAddressProviceInputVal.length == 0 &&  presentAddressZipOrPostalCodeIdVal.length == 0){
		//	$('#presentAddressCheckerIfNull').val('');
		//	$('#permanentAddressCheckBox').attr('checked', false);
		//	$('#personToContactAddressCheckBox').attr('disabled' , false);
		//	$('#permanentAddressDiv').find('input, select').attr('disabled', false);
		//	$('#personToContactAddressDiv').find('input, select').attr('disabled', 'disabled');
		//}
		//
		//if($('#presentAddressCheckerIfNull').val() != ''){
		//	$('#permanentAddressCheckBox').prop('disabled' , false);
		//	$('#personToContactAddressCheckBox').prop('disabled' , false);
		//}else{
		//	$('#permanentAddressCheckBox').prop('disabled' , true);
		//	$('#permanentAddressCheckBox').attr('title','You must have a present address to select this option')
		//	$('#personToContactAddressCheckBox').prop('disabled' , true);
		//	$('#personToContactAddressCheckBox').attr('title','You must have a present address to select this option')
		//}

		// message prompt update for permanent address div
	} else if(addressTypeCode == 'ADT02'){
		if(columnName == 'permanentAddressCountry'){
/*			$('#permanentAddressCountryUpdateMessage').show();
			$('#permanentAddressCountryUpdateMessage').css("display", "block");
			$('#permanentAddressCountryUpdateMessage').fadeIn(1000);
			$('#permanentAddressCountryUpdateMessage').delay(2000).fadeOut(2000);*/

		} else if(columnName == 'permanentAddressBldg'){
/*			$('#permanentAddressBldgUpdateMessage').show();
			$('#permanentAddressBldgUpdateMessage').css("display", "block");
			$('#permanentAddressBldgUpdateMessage').fadeIn(1000);
			$('#permanentAddressBldgUpdateMessage').delay(2000).fadeOut(2000);*/

		} else if(columnName == 'permanentAddressNumSt'){
/*			$('#permanentAddressNumStUpdateMessage').show();
			$('#permanentAddressNumStUpdateMessage').css("display", "block");
			$('#permanentAddressNumStUpdateMessage').fadeIn(1000);
			$('#permanentAddressNumStUpdateMessage').delay(2000).fadeOut(2000);*/

		}  else if(columnName == 'permanentAddressBrgyVillage'){
/*			$('#permanentAddressBrgyVillageUpdateMessage').show();
			$('#permanentAddressBrgyVillageUpdateMessage').css("display", "block");
			$('#permanentAddressBrgyVillageUpdateMessage').fadeIn(1000);
			$('#permanentAddressBrgyVillageUpdateMessage').delay(2000).fadeOut(2000);*/

		} 	else if(columnName == 'permanentAddressCity'){
			if(isForeignAddress == 'Y'){
				$('#permanentAddressCityDropDiv').hide();
				$('#permanentAddressCityInputDiv').show();
/*				$('#permanentAddressCityInputUpdateMessage').show();
				$('#permanentAddressCityInputUpdateMessage').css("display", "block");
				$('#permanentAddressCityInputUpdateMessage').fadeIn(1000);
				$('#permanentAddressCityInputUpdateMessage').delay(2000).fadeOut(2000);*/
			} else if(isForeignAddress == 'N'){
				$('#permanentAddressCityInputDiv').hide();
				$('#permanentAddressCityDropDiv').show();
	/*			$('#permanentAddressCityUpdateMessage').show();
				$('#permanentAddressCityUpdateMessage').css("display", "block");
				$('#permanentAddressCityUpdateMessage').fadeIn(1000);
				$('#permanentAddressCityUpdateMessage').delay(2000).fadeOut(2000);*/
			}

		} else if(columnName == 'permanentAddressProvince'){
			if(isForeignAddress == 'Y'){
				//alert(isForeignAddress);
				$('#permanentAddressProvinceDropDiv').hide();
				$('#permanentAddressProvinceInputDiv').show();
				$('#permanentAddressProvinceUpdateMessage').hide();
/*				$('#permanentAddressProvinceInputUpdateMessage').show();
				$('#permanentAddressProvinceInputUpdateMessage').css("display", "block");
				$('#permanentAddressProvinceInputUpdateMessage').fadeIn(1000);
				$('#permanentAddressProvinceInputUpdateMessage').delay(2000).fadeOut(2000);*/
			} else if(isForeignAddress == 'N'){
				//alert(isForeignAddress);
				$('#permanentAddressProvinceInputDiv').hide();
				$('#permanentAddressProvinceDropDiv').show();
/*				$('#permanentAddressProvinceUpdateMessage').show();
				$('#permanentAddressProvinceUpdateMessage').css("display", "block");
				$('#permanentAddressProvinceUpdateMessage').fadeIn(1000);
				$('#permanentAddressProvinceUpdateMessage').delay(2000).fadeOut(2000);*/
			}

		} else if(columnName == 'permanentAddressZipOrPostalCode'){
/*			$('#permanentAddressZipUpdateMessage').show();
			$('#permanentAddressZipUpdateMessage').css("display", "block");
			$('#permanentAddressZipUpdateMessage').fadeIn(1000);
			$('#permanentAddressZipUpdateMessage').delay(2000).fadeOut(2000);*/

		}

	} else if(addressTypeCode == 'ADT03'){
	//	alert('ADT03 ' + columnName + ' ' + columnValue);

		$('#chumsAddressNotif').hide();
		$('#chumsAccountNumber').val('');

		if(columnName == 'employerAddressCountry'){
			$('#employerAddressCountryUpdateMessage').show();
			$('#employerAddressCountryUpdateMessage').css("display", "block");
			$('#employerAddressCountryUpdateMessage').fadeIn(1000);
			$('#employerAddressCountryUpdateMessage').delay(2000).fadeOut(2000);

		} else if(columnName == 'employerAddressBldg'){
			$('#employerAddressBldgUpdateMessage').show();
			$('#employerAddressBldgUpdateMessage').css("display", "block");
			$('#employerAddressBldgUpdateMessage').fadeIn(1000);
			$('#employerAddressBldgUpdateMessage').delay(2000).fadeOut(2000);

		} else if(columnName == 'employerAddressNumSt'){
			$('#employerAddressNumStUpdateMessage').show();
			$('#employerAddressNumStUpdateMessage').css("display", "block");
			$('#employerAddressNumStUpdateMessage').fadeIn(1000);
			$('#employerAddressNumStUpdateMessage').delay(2000).fadeOut(2000);

		}  else if(columnName == 'employerAddressBrgyVillage'){
			$('#employerAddressBrgyVillageUpdateMessage').show();
			$('#employerAddressBrgyVillageUpdateMessage').css("display", "block");
			$('#employerAddressBrgyVillageUpdateMessage').fadeIn(1000);
			$('#employerAddressBrgyVillageUpdateMessage').delay(2000).fadeOut(2000);

		} 	else if(columnName == 'employerAddressCity'){
			if(isForeignAddress == 'Y'){
				$('#employerAddressCityDropDiv').hide();
				$('#employerAddressCityInputUpdateMessage').show();
				$('#employerAddressCityInputUpdateMessage').css("display", "block");
				$('#employerAddressCityInputUpdateMessage').fadeIn(1000);
				$('#employerAddressCityInputUpdateMessage').delay(2000).fadeOut(2000);
			} else if(isForeignAddress == 'N'){
				$('#employerAddressCityInputDiv').hide();
				$('#employerAddressCityUpdateMessage').show();
				$('#employerAddressCityUpdateMessage').css("display", "block");
				$('#employerAddressCityUpdateMessage').fadeIn(1000);
				$('#employerAddressCityUpdateMessage').delay(2000).fadeOut(2000);
			}

		} else if(columnName == 'employerAddressProvince'){
			if(isForeignAddress == 'Y'){
				$('#employerAddressProvinceDropDiv').hide();
				$('#employerAddressProvinceInputDiv').show();
				$('#employerAddressProvinceInputUpdateMessage').show();
				$('#employerAddressProvinceInputUpdateMessage').css("display", "block");
				$('#employerAddressProvinceInputUpdateMessage').fadeIn(1000);
				$('#employerAddressProvinceInputUpdateMessage').delay(2000).fadeOut(2000);
			} else if(isForeignAddress == 'N'){
				$('#employerAddressProvinceInputDiv').hide();
				$('#employerAddressProvinceDropDiv').show();
				$('#employerAddressProvinceUpdateMessage').show();
				$('#employerAddressProvinceUpdateMessage').css("display", "block");
				$('#employerAddressProvinceUpdateMessage').fadeIn(1000);
				$('#employerAddressProvinceUpdateMessage').delay(2000).fadeOut(2000);
			}

		} else if(columnName == 'employerAddressZipOrPostalCode'){
			$('#employerAddressZipInputUpdateMessage').show();
			$('#employerAddressZipInputUpdateMessage').css("display", "block");
			$('#employerAddressZipInputUpdateMessage').fadeIn(1000);
			$('#employerAddressZipInputUpdateMessage').delay(2000).fadeOut(2000);
		}

		$('#chumsCheckbox').prop('checked', true);
		document.getElementById("chumsAccountNumber").disabled = true;
		document.getElementById("employerId").disabled = false;

	} else if(addressTypeCode == 'ADT04'){
		if(columnName == 'personToContactAddressCountry'){
/*			$('#personToContactAddressCountryUpdateMessage').show();
			$('#personToContactAddressCountryUpdateMessage').css("display", "block");
			$('#personToContactAddressCountryUpdateMessage').fadeIn(1000);
			$('#personToContactAddressCountryUpdateMessage').delay(2000).fadeOut(2000);*/

		} else if(columnName == 'personToContactAddressBldg'){
/*
			$('#personToContactAddressBldgUpdateMessage').show();
			$('#personToContactAddressBldgUpdateMessage').css("display", "block");
			$('#personToContactAddressBldgUpdateMessage').fadeIn(1000);
			$('#personToContactAddressBldgUpdateMessage').delay(2000).fadeOut(2000);
*/

		} else if(columnName == 'personToContactAddressNumSt'){
/*
			$('#personToContactAddressNumStUpdateMessage').show();
			$('#personToContactAddressNumStUpdateMessage').css("display", "block");
			$('#personToContactAddressNumStUpdateMessage').fadeIn(1000);
			$('#personToContactAddressNumStUpdateMessage').delay(2000).fadeOut(2000);
*/

		}  else if(columnName == 'personToContactAddressBrgyVillage'){
/*
			$('#personToContactAddressBrgyVillageUpdateMessage').show();
			$('#personToContactAddressBrgyVillageUpdateMessage').css("display", "block");
			$('#personToContactAddressBrgyVillageUpdateMessage').fadeIn(1000);
			$('#personToContactAddressBrgyVillageUpdateMessage').delay(2000).fadeOut(2000);
*/

		} 	else if(columnName == 'personToContactAddressCity'){
			if(isForeignAddress == 'Y'){
				$('#personToContactAddressCityDropDiv').hide();
				$('#personToContactAddressCityInputDiv').show();
				$('#personToContactAddressProvinceDropDiv').hide();
				$('#personToContactAddressProvinceInputDiv').show();
/*				$('#personToContactAddressCityInputUpdateMessage').show();
				$('#personToContactAddressCityInputUpdateMessage').css("display", "block");
				$('#personToContactAddressCityInputUpdateMessage').fadeIn(1000);
				$('#personToContactAddressCityInputUpdateMessage').delay(2000).fadeOut(2000);*/
			} else if(isForeignAddress == 'N'){
				$('#personToContactAddressCityDropDiv').show();
				$('#personToContactAddressCityInputDiv').hide();
				$('#personToContactAddressProvinceDropDiv').show();
				$('#personToContactAddressProvinceInputDiv').hide();
/*				$('#personToContactAddressCityUpdateMessage').show();
				$('#personToContactAddressCityUpdateMessage').css("display", "block");
				$('#personToContactAddressCityUpdateMessage').fadeIn(1000);
				$('#personToContactAddressCityUpdateMessage').delay(2000).fadeOut(2000);*/
			}

		} else if(columnName == 'personToContactAddressProvince'){
			if(isForeignAddress == 'Y'){
				$('#personToContactAddressProvinceDropDiv').hide();
/*				$('#personToContactAddressProvinceInputUpdateMessage').show();
				$('#personToContactAddressProvinceInputUpdateMessage').css("display", "block");
				$('#personToContactAddressProvinceInputUpdateMessage').fadeIn(1000);
				$('#personToContactAddressProvinceInputUpdateMessage').delay(2000).fadeOut(2000);*/
			} else if(isForeignAddress == 'N'){
				$('#personToContactAddressProvinceInputDiv').hide();
/*				$('#personToContactAddressProvinceUpdateMessage').show();
				$('#personToContactAddressProvinceUpdateMessage').css("display", "block");
				$('#personToContactAddressProvinceUpdateMessage').fadeIn(1000);
				$('#personToContactAddressProvinceUpdateMessage').delay(2000).fadeOut(2000);*/
			}

		} else if(columnName == 'personToContactAddressZipOrPostalCode'){
/*			$('#personToContactAddressZipInputUpdateMessage').show();
			$('#personToContactAddressZipInputUpdateMessage').css("display", "block");
			$('#personToContactAddressZipInputUpdateMessage').fadeIn(1000);
			$('#personToContactAddressZipInputUpdateMessage').delay(2000).fadeOut(2000);*/

		}

	}

	//alert(thisVal.attr('id') + "     SSAAVVEEDD");
	//alert(addressTypeCode + ' ' + columnName + ' ' + columnValue);
}

function saveContactInfoTab(){
	var isPersonToContactForeign = ($('#personToContactAddressCountry').val() != 'PHL');


	////////////////////////////  Those Requiring Validation  //////////////////////////////////

	if($('#email').attr('data-has-changed') == "Y"){
		//validateEmailThenSave();
		//$("#email").attr("data-has-changed", "N");
		$("#email").attr("name", "patientContactInfoEmail");
	}
	if($('#mobile').attr('data-has-changed') == "Y"){
		//validateMobileNumberThenSave();
		//$("#mobile").attr("data-has-changed", "N");
		$("#mobile").attr("name", "patientContactInfoMobile");
	}
	if($('#phone').attr('data-has-changed') == "Y"){
		//validatePhoneNumberThenSave();
		//$("#phone").attr("data-has-changed", "N");
		$("#phone").attr("name", "patientContactInfoPhone");
	}
	if($('#contactPersonContactNumberId').attr('data-has-changed') == "Y"){
		//validationContactPersonContactNumberThenSave($('#contactPersonContactNumberId'));
		//$("#contactPersonContactNumberId").attr("data-has-changed", "N");
		$("#contactPersonContactNumberId").attr("name", "patientRelation.erContactNumber");
	}


	//////////////////////////// Person to contact NAMEE here //////////////////////////////////
	if($('#erLastNameId').attr('data-has-changed') == "Y"){
		//updatePatientRelativeInfo($('#erLastNameId'));
		$("#erLastNameId").attr("name", "patientRelation.erLastName");
	}
	if($('#erFirstNameId').attr('data-has-changed') == "Y"){
		//updatePatientRelativeInfo($('#erFirstNameId'));
		$("#erFirstNameId").attr("name", "patientRelation.erFirstName");
	}
	if($('#erMiddleNameId').attr('data-has-changed') == "Y"){
		//updatePatientRelativeInfo($('#erMiddleNameId'));
		$("#erMiddleNameId").attr("name", "patientRelation.erMiddleName");
	}
	if($('#erRelationWithPatientId').attr('data-has-changed') == "Y"){
		//updatePatientRelativeInfo($('#erRelationWithPatientId'));
		$("#erRelationWithPatientId").attr("name", "patientRelation.erRelation");
	}

	//////////////////////////// Person to contact ADDRESSSZXZS here ////////////////////////////

	if($('#personToContactAddressCheckBox').attr('data-has-changed') == "Y"){
		//updatePatientAddressInfoOnDatabase($('#personToContactAddressCheckBox'));
		//$("#personToContactAddressCheckBox").attr("data-has-changed", "N");
		if($('#personToContactAddressCheckBox').is(":checked")) {

			$('#personToContactAddressCheckBox').val('1');
			$('#hiddenValueIsSameAsPresentPersonToContact').val('1');

		} else {
			$('#personToContactAddressCheckBox').val('0');
			$('#hiddenValueIsSameAsPresentPersonToContact').val('0');
		}
		$("#hiddenValueIsSameAsPresentPersonToContact").attr("name", "personToContactAddress.isSameAsPresent");
	}

	if($('#personToContactAddressCountry').attr('data-has-changed') == "Y"){
		//updatePatientAddressInfoOnDatabase($('#personToContactAddressCountry'));
		//$("#personToContactAddressCountry").attr("data-has-changed", "N");
		$("#personToContactAddressCountry").attr("name", "personToContactAddress.countryCode");
	}
	if($('#personToContactAddressBldgId').attr('data-has-changed') == "Y"){
		//updatePatientAddressInfoOnDatabase($('#personToContactAddressBldgId'));
		//$("#personToContactAddressBldgId").attr("data-has-changed", "N");
		$("#personToContactAddressBldgId").attr("name", "personToContactAddress.bldgName");
	}
	if($('#personToContactAddressNumStId').attr('data-has-changed') == "Y"){
		//updatePatientAddressInfoOnDatabase($('#personToContactAddressNumStId'));
		//$("#personToContactAddressNumStId").attr("data-has-changed", "N");
		$("#personToContactAddressNumStId").attr("name", "personToContactAddress.numStreet");
	}
	if($('#personToContactAddressBrgyVillageId').attr('data-has-changed') == "Y"){
		//updatePatientAddressInfoOnDatabase($('#personToContactAddressBrgyVillageId'));
		//$("#personToContactAddressBrgyVillageId").attr("data-has-changed", "N");
		$("#personToContactAddressBrgyVillageId").attr("name", "personToContactAddress.brgyVillage");
	}
	if($('#personToContactAddressZipOrPostalCodeId').attr('data-has-changed') == "Y"){
		//updatePatientAddressInfoOnDatabase($('#personToContactAddressZipOrPostalCodeId'));
		//$("#personToContactAddressZipOrPostalCodeId").attr("data-has-changed", "N");
		$("#personToContactAddressZipOrPostalCodeId").attr("name", "personToContactAddress.postalCode");
	}
	if(isPersonToContactForeign) {
		if($('#personToContactAddressCityInput').attr('data-has-changed') == "Y"){
			//updatePatientAddressInfoOnDatabase($('#personToContactAddressCityInput'));
			$("#personToContactAddressCityInput").attr("name", "personToContactAddress.cityCode");
			$("#personToContactAddressCity").attr("name", "");
		}
		if($('#personToContactAddressProvinceInput').attr('data-has-changed') == "Y"){
			//updatePatientAddressInfoOnDatabase($('#personToContactAddressProvinceInput'));
			$("#personToContactAddressProvinceInput").attr("name", "personToContactAddress.provinceCode");
			$("#personToContactAddressProvince").attr("name", "");
		}
	} else if (!isPersonToContactForeign) {
		if($('#personToContactAddressCity').attr('data-has-changed') == "Y"){
			//updatePatientAddressInfoOnDatabase($('#personToContactAddressCity'));
			$("#personToContactAddressCityInput").attr("name", "");
			$("#personToContactAddressCity").attr("name", "personToContactAddress.cityCode");
		}
		if($('#personToContactAddressProvince').attr('data-has-changed') == "Y"){
			//updatePatientAddressInfoOnDatabase($('#personToContactAddressProvince'));
			$("#personToContactAddressProvinceInput").attr("name", "");
			$("#personToContactAddressProvince").attr("name", "personToContactAddress.provinceCode");
		}
	}
	/////////////////////////////////////////////////////////////////////////////////////////
}

function updatePatientAddressInfoOriginal(thisVal){

	var ehubPin = $("#eHubPin").val();
	var regId = $("#hiddenRegistrationId").val();
	var columnName=thisVal.attr('name');
	var columnValue=thisVal.val();
	var addressTypeCode=thisVal.attr('addressTypeCode');
	var isSameAsPresentPermanentAddress;
	var isSameAsPresentContactInfoAddress;
	var isForeignAddress = thisVal.attr('isForeignAddressType');
	var presentAddressCountry = $('#presentAddressCountry').val();

	var presentAddressCountryVal = $('#presentAddressCountry').val();
	var presentAddressBldgIdVal = $('#presentAddressBldgId').val();
	var presentAddressNumStIdVal = $('#presentAddressNumStId').val();
	var presentAddressBrgyVillageIdVal = $('#presentAddressBrgyVillageId').val();
	var presentAddressCityVal = $('#presentAddressCity').val();
	var presentAddressCityInputId = $('#presentAddressCityInput').val();
	var presentAddressProvinceVal = $('#presentAddressProvince').val();
	var presentAddressProviceInputVal = $('#presentAddressProviceInput').val();
	var presentAddressZipOrPostalCodeIdVal = $('#presentAddressZipOrPostalCodeId').val();


	if(presentAddressCountryVal.length == 0 &&  presentAddressBldgIdVal.length == 0 && presentAddressNumStIdVal.length == 0 &&
		presentAddressBrgyVillageIdVal.length == 0 && presentAddressCityVal.length == 0 && presentAddressCityInputId.length == 0 &&
		presentAddressProvinceVal.length == 0 && presentAddressProviceInputVal.length == 0 &&  presentAddressZipOrPostalCodeIdVal.length == 0){
		$('#presentAddressCheckerIfNull').val('');
		$('#permanentAddressCheckBox').attr('checked', false);
		$('#personToContactAddressCheckBox').attr('disabled' , false);
		$('#permanentAddressDiv').find('input, select').attr('disabled', false);
		$('#personToContactAddressDiv').find('input, select').attr('disabled', 'disabled');

		$('#permanentAddressCheckBox').prop('disabled' , true);
		$('#permanentAddressCheckBox').attr('title','You must have a present address to select this option');
		$('#personToContactAddressCheckBox').prop('disabled' , true);
		$('#personToContactAddressCheckBox').attr('title','You must have a present address to select this option');
	}

	if($('#presentAddressCheckerIfNull').val() != ''){
		$('#permanentAddressCheckBox').prop('disabled' , false);
		$('#personToContactAddressCheckBox').prop('disabled' , false);
	}

	// for present address text or drop
	if(columnName == 'presentAddressCountry' && columnValue != 'PHL'){
		isForeignAddress = 'Y';
		$('#presentAddressCityInput').val('');
		$('#presentAddressProviceInput').val('');
		$('#presentAddressCityInputDiv').show();
		$('#presentAddressCityDropDiv').hide();
		$('#presentAddressProvinceInputDiv').show();
		$('#presentAddressProvinceDropDiv').hide();
	}else if (columnName == 'presentAddressCountry' && columnValue == 'PHL'){
		isForeignAddress = 'N';
		$('#presentAddressCity').val('');
		$('#presentAddressProvince').val('');
		$('#presentAddressCityDropDiv').show();
		$('#presentAddressCityInputDiv').hide();
		$('#presentAddressProvinceDropDiv').show();
		$('#presentAddressProvinceInputDiv').hide();
	}

	// for permanent address text or drop
	if(columnName == 'permanentAddressCountry' && columnValue != 'PHL'){
		isForeignAddress = 'Y';
		$('#permanentAddressCityInput').val('');
		$('#permanentAddressProvinceInput').val('');
		$('#permanentAddressCityInputDiv').show();
		$('#permanentAddressCityDropDiv').hide();
		$('#permanentAddressProvinceInputDiv').show();
		$('#permanentAddressProvinceDropDiv').hide();
	} else if (columnName == 'permanentAddressCountry' && columnValue == 'PHL'){
		isForeignAddress = 'N';
		$('#permanentAddressCity').val('');
		$('#permanentAddressProvince').val('');
		$('#permanentAddressCityDropDiv').show();
		$('#permanentAddressCityInputDiv').hide();
		$('#permanentAddressProvinceDropDiv').show();
		$('#permanentAddressProvinceInputDiv').hide();
	}
	// for employer address text or drop
	else if(columnName == 'employerAddressCountry' && columnValue != 'PHL'){
		isForeignAddress = 'Y';
		$('#employerAddressCityInput').val('');
		$('#employerAddressProvinceInput').val('');
		$('#employerAddressCityInputDiv').show();
		$('#employerAddressCityDropDiv').hide();
		$('#employerAddressProvinceInputDiv').show();
		$('#employerAddressProvinceDropDiv').hide();
	} else if (columnName == 'employerAddressCountry' && columnValue == 'PHL'){
		isForeignAddress = 'N';
		$('#employerAddressCity').val('');
		$('#employerAddressProvince').val('');
		$('#employerAddressCityDropDiv').show();
		$('#employerAddressCityInputDiv').hide();
		$('#employerAddressProvinceDropDiv').show();
		$('#employerAddressProvinceInputDiv').hide();
	}

	// for contactPerson address text or drop
	else if(columnName == 'personToContactAddressCountry' && columnValue != 'PHL'){
		isForeignAddress = 'Y';
		$('#personToContactAddressCityInput').val('');
		$('#personToContactAddressProvinceInput').val('');
		$('#personToContactAddressCityInputDiv').show();
		$('#personToContactAddressCityDropDiv').hide();
		$('#personToContactAddressProvinceInputDiv').show();
		$('#personToContactAddressProvinceDropDiv').hide();
	} else if (columnName == 'personToContactAddressCountry' && columnValue == 'PHL'){
		isForeignAddress = 'N';
		$('#personToContactAddressCity').val('');
		$('#personToContactAddressProvince').val('');
		$('#personToContactAddressCityDropDiv').show();
		$('#personToContactAddressCityInputDiv').hide();
		$('#personToContactAddressProvinceDropDiv').show();
		$('#personToContactAddressProvinceInputDiv').hide();
	}

	//end

	if($('#permanentAddressCheckBox').is(":checked")){
		isSameAsPresentPermanentAddress = '1';
		$('#permanentAddressDiv').find('input, select').attr('disabled', 'disabled');
		$('#permanentAddressCheckBox').attr('disabled' , false);
		//setter
		$('#permanentAddressCountry').val($('#presentAddressCountry').val());
		$('#permanentAddressBldgId').val($('#presentAddressBldgId').val());
		$('#permanentAddressNumStId').val($('#presentAddressNumStId').val());
		$('#permanentAddressBrgyVillageId').val($('#presentAddressBrgyVillageId').val());
		if(columnName == 'presentAddressCountry' || columnName == 'presentAddressCity' || columnName == 'presentAddressProvince' || columnName == 'permanentAddressCheckBox'){
			if(presentAddressCountry == 'PHL'){
				$('#permanentAddressCityInputDiv').hide();
				$('#permanentAddressCityDropDiv').show();
				$('#permanentAddressProvinceInputDiv').hide();
				$('#permanentAddressProvinceDropDiv').show();
				$('#permanentAddressCity').val($('#presentAddressCity').val());
				$('#permanentAddressProvince').val($('#presentAddressProvince').val());
			}else if(presentAddressCountry != 'PHL' && presentAddressCountry != '' && columnName != 'employerAddressCountry'){
				$('#permanentAddressCityInputDiv').show();
				$('#permanentAddressCityDropDiv').hide();
				$('#permanentAddressProvinceInputDiv').show();
				$('#permanentAddressProvinceDropDiv').hide();
				$('#permanentAddressCityInput').val($('#presentAddressCityInput').val());
				$('#permanentAddressProvinceInput').val($('#presentAddressProviceInput').val());
			}
		}

		$('#permanentAddressZipOrPostalCodeId').val($('#presentAddressZipOrPostalCodeId').val());

	}else {
		isSameAsPresentPermanentAddress = '0';
		$('#permanentAddressDiv').find('input, select').attr('disabled', false);
		$('#permanentAddressCheckBox').attr('disabled' , false);

	}

	if($('#personToContactAddressCheckBox').is(":checked")){
		isSameAsPresentContactInfoAddress = '1';
		$('#personToContactAddressDiv').find('input, select').attr('disabled', 'disabled');
		$('#personToContactAddressCheckBox').attr('disabled' , false);

		//setter
		$('#personToContactAddressCountry').val($('#presentAddressCountry').val());
		$('#personToContactAddressBldgId').val($('#presentAddressBldgId').val());
		$('#personToContactAddressNumStId').val($('#presentAddressNumStId').val());
		$('#personToContactAddressBrgyVillageId').val($('#presentAddressBrgyVillageId').val());

		if(columnName == 'presentAddressCountry' || columnName == 'presentAddressCity' || columnName == 'presentAddressProvince' || columnName == 'personToContactAddressCheckBox'){

			/**
			 * for ticket #19594
			 * Contact Information - Unable to retrieve City and Province value for Same with Present Address
			 */
			//if(isForeignAddress == 'N'){
			if(presentAddressCountry == 'PHL'){
				$('#personToContactAddressCityInputDiv').hide();
				$('#personToContactAddressCityDropDiv').show();
				$('#personToContactAddressProvinceInputDiv').hide();
				$('#personToContactAddressProvinceDropDiv').show();
				$('#personToContactAddressCity').val($('#presentAddressCity').val());
				$('#personToContactAddressProvince').val($('#presentAddressProvince').val());
				//} else if (isForeignAddress == 'Y' && columnName != 'employerAddressCountry'){
			} else if (presentAddressCountry != 'PHL' && columnName != 'employerAddressCountry'){
				$('#personToContactAddressCityInputDiv').show();
				$('#personToContactAddressCityDropDiv').hide();
				$('#personToContactAddressProvinceInputDiv').show();
				$('#personToContactAddressProvinceDropDiv').hide();
				$('#personToContactAddressCityInput').val($('#presentAddressCityInput').val());
				$('#personToContactAddressProvinceInput').val($('#presentAddressProviceInput').val());
			}
		}

		$('#personToContactAddressZipOrPostalCodeId').val($('#presentAddressZipOrPostalCodeId').val());

	}else {
		isSameAsPresentContactInfoAddress = '0';
		$('#personToContactAddressDiv').find('input, select').attr('disabled', false);
		$('#personToContactAddressCheckBox').attr('disabled' , false);
	}

	PatientEditAddressDwr.editPatientAddressesInfo(ehubPin,columnName,columnValue,addressTypeCode,regId
		,isSameAsPresentPermanentAddress,isSameAsPresentContactInfoAddress,isForeignAddress,{callback: function(addId){
			if(addId != ''){
				$('#presentAddressCheckerIfNull').val(addId);
				$('#permanentAddressCheckBox').attr('disabled' , false);
				$('#personToContactAddressCheckBox').attr('disabled' , false);
				$('#personToContactAddressCheckBox').attr('title','')
			}else{
				$('#permanentAddressCheckBox').attr('disabled' , true);
				$('#permanentAddressCheckBox').attr('title','You must have a present address to select this option')
				$('#personToContactAddressCheckBox').attr('disabled' , true);
				$('#personToContactAddressCheckBox').attr('title','You must have a present address to select this option')
			}

			$('#hiddenPresentAddressForeign').val(isForeignAddress);
			$('#hiddenPermanentAddressForeign').val(isForeignAddress);
			$('#hiddenPersonToContactAddressForeign').val(isForeignAddress);

		}});

	// message prompt update for present address div
	if (addressTypeCode == 'ADT01') {

		if (columnName == 'presentAddressCountry') {
			$('#presentAddressCountryUpdateMessage').show();
			$('#presentAddressCountryUpdateMessage').css("display", "block");
			$('#presentAddressCountryUpdateMessage').fadeIn(1000);
			$('#presentAddressCountryUpdateMessage').delay(2000).fadeOut(2000);

		} else if (columnName == 'presentAddressBldg') {
			$('#presentAddressBldgUpdateMessage').show();
			$('#presentAddressBldgUpdateMessage').css("display", "block");
			$('#presentAddressBldgUpdateMessage').fadeIn(1000);
			$('#presentAddressBldgUpdateMessage').delay(2000).fadeOut(2000);

		} else if (columnName == 'presentAddressNumSt') {
			$('#presentAddressNumStUpdateMessage').show();
			$('#presentAddressNumStUpdateMessage').css("display", "block");
			$('#presentAddressNumStUpdateMessage').fadeIn(1000);
			$('#presentAddressNumStUpdateMessage').delay(2000).fadeOut(2000);

		} else if (columnName == 'presentAddressBrgyVillage') {
			$('#presentAddressBrgyUpdateMessage').show();
			$('#presentAddressBrgyUpdateMessage').css("display", "block");
			$('#presentAddressBrgyUpdateMessage').fadeIn(1000);
			$('#presentAddressBrgyUpdateMessage').delay(2000).fadeOut(2000);

		} else if (columnName == 'presentAddressCity') {
			if (isForeignAddress == 'N') {
				$('#presentAddressCityInputUpdateMessage').hide();
				$('#presentAddressCityUpdateMessage').show();
				$('#presentAddressCityUpdateMessage').css("display", "block");
				$('#presentAddressCityUpdateMessage').fadeIn(1000);
				$('#presentAddressCityUpdateMessage').delay(2000).fadeOut(2000);

			} else if (isForeignAddress == 'Y') {
				$('#presentAddressCityUpdateMessage').hide();
				$('#presentAddressCityInputUpdateMessage').show();
				$('#presentAddressCityInputUpdateMessage').css("display", "block");
				$('#presentAddressCityInputUpdateMessage').fadeIn(1000);
				$('#presentAddressCityInputUpdateMessage').delay(2000).fadeOut(2000);
			}

		} else if (columnName == 'presentAddressProvince') {
			if (isForeignAddress == 'Y') {
				$('#presentAddressProvinceUpdateMessage').hide();
				$('#presentAddressProvinceInputUpdateMessage').show();
				$('#presentAddressProvinceInputUpdateMessage').css("display", "block");
				$('#presentAddressProvinceInputUpdateMessage').fadeIn(1000);
				$('#presentAddressProvinceInputUpdateMessage').delay(2000).fadeOut(2000);
			} else if (isForeignAddress == 'N') {
				$('#presentAddressProvinceInputUpdateMessage').hide();
				$('#presentAddressProvinceUpdateMessage').show();
				$('#presentAddressProvinceUpdateMessage').css("display", "block");
				$('#presentAddressProvinceUpdateMessage').fadeIn(1000);
				$('#presentAddressProvinceUpdateMessage').delay(2000).fadeOut(2000);

			}
		} else if (columnName == 'presentAddressZipOrPostalCode') {
			$('#presentAddressZipUpdateMessage').show();
			$('#presentAddressZipUpdateMessage').css("display", "block");
			$('#presentAddressZipUpdateMessage').fadeIn(1000);
			$('#presentAddressZipUpdateMessage').delay(2000).fadeOut(2000);
		}

		//var presentAddressCountryVal = $('#presentAddressCountry').val();
		//var presentAddressBldgIdVal = $('#presentAddressBldgId').val();
		//var presentAddressNumStIdVal = $('#presentAddressNumStId').val();
		//var presentAddressBrgyVillageIdVal = $('#presentAddressBrgyVillageId').val();
		//var presentAddressCityVal = $('#presentAddressCity').val();
		//var presentAddressCityInputId = $('#presentAddressCityInput').val();
		//var presentAddressProvinceVal = $('#presentAddressProvince').val();
		//var presentAddressProviceInputVal = $('#presentAddressProviceInput').val();
		//var presentAddressZipOrPostalCodeIdVal = $('#presentAddressZipOrPostalCodeId').val();
		//
		//
		//if(presentAddressCountryVal.length == 0 &&  presentAddressBldgIdVal.length == 0 && presentAddressNumStIdVal.length == 0 &&
		//	presentAddressBrgyVillageIdVal.length == 0 && presentAddressCityVal.length == 0 && presentAddressCityInputId.length == 0 &&
		//	presentAddressProvinceVal.length == 0 && presentAddressProviceInputVal.length == 0 &&  presentAddressZipOrPostalCodeIdVal.length == 0){
		//	$('#presentAddressCheckerIfNull').val('');
		//	$('#permanentAddressCheckBox').attr('checked', false);
		//	$('#personToContactAddressCheckBox').attr('disabled' , false);
		//	$('#permanentAddressDiv').find('input, select').attr('disabled', false);
		//	$('#personToContactAddressDiv').find('input, select').attr('disabled', 'disabled');
		//}
		//
		//if($('#presentAddressCheckerIfNull').val() != ''){
		//	$('#permanentAddressCheckBox').prop('disabled' , false);
		//	$('#personToContactAddressCheckBox').prop('disabled' , false);
		//}else{
		//	$('#permanentAddressCheckBox').prop('disabled' , true);
		//	$('#permanentAddressCheckBox').attr('title','You must have a present address to select this option')
		//	$('#personToContactAddressCheckBox').prop('disabled' , true);
		//	$('#personToContactAddressCheckBox').attr('title','You must have a present address to select this option')
		//}

		// message prompt update for permanent address div
	} else if(addressTypeCode == 'ADT02'){
		if(columnName == 'permanentAddressCountry'){
			$('#permanentAddressCountryUpdateMessage').show();
			$('#permanentAddressCountryUpdateMessage').css("display", "block");
			$('#permanentAddressCountryUpdateMessage').fadeIn(1000);
			$('#permanentAddressCountryUpdateMessage').delay(2000).fadeOut(2000);

		} else if(columnName == 'permanentAddressBldg'){
			$('#permanentAddressBldgUpdateMessage').show();
			$('#permanentAddressBldgUpdateMessage').css("display", "block");
			$('#permanentAddressBldgUpdateMessage').fadeIn(1000);
			$('#permanentAddressBldgUpdateMessage').delay(2000).fadeOut(2000);

		} else if(columnName == 'permanentAddressNumSt'){
			$('#permanentAddressNumStUpdateMessage').show();
			$('#permanentAddressNumStUpdateMessage').css("display", "block");
			$('#permanentAddressNumStUpdateMessage').fadeIn(1000);
			$('#permanentAddressNumStUpdateMessage').delay(2000).fadeOut(2000);

		}  else if(columnName == 'permanentAddressBrgyVillage'){
			$('#permanentAddressBrgyVillageUpdateMessage').show();
			$('#permanentAddressBrgyVillageUpdateMessage').css("display", "block");
			$('#permanentAddressBrgyVillageUpdateMessage').fadeIn(1000);
			$('#permanentAddressBrgyVillageUpdateMessage').delay(2000).fadeOut(2000);

		} 	else if(columnName == 'permanentAddressCity'){
			if(isForeignAddress == 'Y'){
				$('#permanentAddressCityDropDiv').hide();
				$('#permanentAddressCityInputUpdateMessage').show();
				$('#permanentAddressCityInputUpdateMessage').css("display", "block");
				$('#permanentAddressCityInputUpdateMessage').fadeIn(1000);
				$('#permanentAddressCityInputUpdateMessage').delay(2000).fadeOut(2000);
			} else if(isForeignAddress == 'N'){
				$('#permanentAddressCityInputDiv').hide();
				$('#permanentAddressCityUpdateMessage').show();
				$('#permanentAddressCityUpdateMessage').css("display", "block");
				$('#permanentAddressCityUpdateMessage').fadeIn(1000);
				$('#permanentAddressCityUpdateMessage').delay(2000).fadeOut(2000);
			}

		} else if(columnName == 'permanentAddressProvince'){
			if(isForeignAddress == 'Y'){
				$('#permanentAddressProvinceUpdateMessage').hide();
				$('#permanentAddressProvinceInputUpdateMessage').show();
				$('#permanentAddressProvinceInputUpdateMessage').css("display", "block");
				$('#permanentAddressProvinceInputUpdateMessage').fadeIn(1000);
				$('#permanentAddressProvinceInputUpdateMessage').delay(2000).fadeOut(2000);
			} else if(isForeignAddress == 'N'){
				$('#permanentAddressProvinceInputDiv').hide();
				$('#permanentAddressProvinceUpdateMessage').show();
				$('#permanentAddressProvinceUpdateMessage').css("display", "block");
				$('#permanentAddressProvinceUpdateMessage').fadeIn(1000);
				$('#permanentAddressProvinceUpdateMessage').delay(2000).fadeOut(2000);
			}

		} else if(columnName == 'permanentAddressZipOrPostalCode'){
			$('#permanentAddressZipUpdateMessage').show();
			$('#permanentAddressZipUpdateMessage').css("display", "block");
			$('#permanentAddressZipUpdateMessage').fadeIn(1000);
			$('#permanentAddressZipUpdateMessage').delay(2000).fadeOut(2000);

		}

	} else if(addressTypeCode == 'ADT03'){
		$('#chumsAddressNotif').hide();
		$('#chumsAccountNumber').val('');
		if(columnName == 'employerAddressCountry'){
			$('#employerAddressCountryUpdateMessage').show();
			$('#employerAddressCountryUpdateMessage').css("display", "block");
			$('#employerAddressCountryUpdateMessage').fadeIn(1000);
			$('#employerAddressCountryUpdateMessage').delay(2000).fadeOut(2000);

		} else if(columnName == 'employerAddressBldg'){
			$('#employerAddressBldgUpdateMessage').show();
			$('#employerAddressBldgUpdateMessage').css("display", "block");
			$('#employerAddressBldgUpdateMessage').fadeIn(1000);
			$('#employerAddressBldgUpdateMessage').delay(2000).fadeOut(2000);

		} else if(columnName == 'employerAddressNumSt'){
			$('#employerAddressNumStUpdateMessage').show();
			$('#employerAddressNumStUpdateMessage').css("display", "block");
			$('#employerAddressNumStUpdateMessage').fadeIn(1000);
			$('#employerAddressNumStUpdateMessage').delay(2000).fadeOut(2000);

		}  else if(columnName == 'employerAddressBrgyVillage'){
			$('#employerAddressBrgyVillageUpdateMessage').show();
			$('#employerAddressBrgyVillageUpdateMessage').css("display", "block");
			$('#employerAddressBrgyVillageUpdateMessage').fadeIn(1000);
			$('#employerAddressBrgyVillageUpdateMessage').delay(2000).fadeOut(2000);

		} 	else if(columnName == 'employerAddressCity'){
			if(isForeignAddress == 'Y'){
				$('#employerAddressCityDropDiv').hide();
				$('#employerAddressCityInputUpdateMessage').show();
				$('#employerAddressCityInputUpdateMessage').css("display", "block");
				$('#employerAddressCityInputUpdateMessage').fadeIn(1000);
				$('#employerAddressCityInputUpdateMessage').delay(2000).fadeOut(2000);
			} else if(isForeignAddress == 'N'){
				$('#employerAddressCityInputDiv').hide();
				$('#employerAddressCityUpdateMessage').show();
				$('#employerAddressCityUpdateMessage').css("display", "block");
				$('#employerAddressCityUpdateMessage').fadeIn(1000);
				$('#employerAddressCityUpdateMessage').delay(2000).fadeOut(2000);
			}

		} else if(columnName == 'employerAddressProvince'){
			if(isForeignAddress == 'Y'){
				$('#employerAddressProvinceDropDiv').hide();
				$('#employerAddressProvinceInputDiv').show();
				$('#employerAddressProvinceInputUpdateMessage').show();
				$('#employerAddressProvinceInputUpdateMessage').css("display", "block");
				$('#employerAddressProvinceInputUpdateMessage').fadeIn(1000);
				$('#employerAddressProvinceInputUpdateMessage').delay(2000).fadeOut(2000);
			} else if(isForeignAddress == 'N'){
				$('#employerAddressProvinceInputDiv').hide();
				$('#employerAddressProvinceDropDiv').show();
				$('#employerAddressProvinceUpdateMessage').show();
				$('#employerAddressProvinceUpdateMessage').css("display", "block");
				$('#employerAddressProvinceUpdateMessage').fadeIn(1000);
				$('#employerAddressProvinceUpdateMessage').delay(2000).fadeOut(2000);
			}

		} else if(columnName == 'employerAddressZipOrPostalCode'){
			$('#employerAddressZipInputUpdateMessage').show();
			$('#employerAddressZipInputUpdateMessage').css("display", "block");
			$('#employerAddressZipInputUpdateMessage').fadeIn(1000);
			$('#employerAddressZipInputUpdateMessage').delay(2000).fadeOut(2000);
		}

		$('#chumsCheckbox').prop('checked', true);
		document.getElementById("chumsAccountNumber").disabled = true;
		document.getElementById("employerId").disabled = false;

	} else if(addressTypeCode == 'ADT04'){
		if(columnName == 'personToContactAddressCountry'){
			$('#personToContactAddressCountryUpdateMessage').show();
			$('#personToContactAddressCountryUpdateMessage').css("display", "block");
			$('#personToContactAddressCountryUpdateMessage').fadeIn(1000);
			$('#personToContactAddressCountryUpdateMessage').delay(2000).fadeOut(2000);

		} else if(columnName == 'personToContactAddressBldg'){
			$('#personToContactAddressBldgUpdateMessage').show();
			$('#personToContactAddressBldgUpdateMessage').css("display", "block");
			$('#personToContactAddressBldgUpdateMessage').fadeIn(1000);
			$('#personToContactAddressBldgUpdateMessage').delay(2000).fadeOut(2000);

		} else if(columnName == 'personToContactAddressNumSt'){
			$('#personToContactAddressNumStUpdateMessage').show();
			$('#personToContactAddressNumStUpdateMessage').css("display", "block");
			$('#personToContactAddressNumStUpdateMessage').fadeIn(1000);
			$('#personToContactAddressNumStUpdateMessage').delay(2000).fadeOut(2000);

		}  else if(columnName == 'personToContactAddressBrgyVillage'){
			$('#personToContactAddressBrgyVillageUpdateMessage').show();
			$('#personToContactAddressBrgyVillageUpdateMessage').css("display", "block");
			$('#personToContactAddressBrgyVillageUpdateMessage').fadeIn(1000);
			$('#personToContactAddressBrgyVillageUpdateMessage').delay(2000).fadeOut(2000);

		} 	else if(columnName == 'personToContactAddressCity'){
			if(isForeignAddress == 'Y'){
				$('#personToContactAddressCityDropDiv').hide();
				$('#personToContactAddressCityInputUpdateMessage').show();
				$('#personToContactAddressCityInputUpdateMessage').css("display", "block");
				$('#personToContactAddressCityInputUpdateMessage').fadeIn(1000);
				$('#personToContactAddressCityInputUpdateMessage').delay(2000).fadeOut(2000);
			} else if(isForeignAddress == 'N'){
				$('#personToContactAddressCityInputDiv').hide();
				$('#personToContactAddressCityUpdateMessage').show();
				$('#personToContactAddressCityUpdateMessage').css("display", "block");
				$('#personToContactAddressCityUpdateMessage').fadeIn(1000);
				$('#personToContactAddressCityUpdateMessage').delay(2000).fadeOut(2000);
			}

		} else if(columnName == 'personToContactAddressProvince'){
			if(isForeignAddress == 'Y'){
				$('#personToContactAddressProvinceDropDiv').hide();
				$('#personToContactAddressProvinceInputUpdateMessage').show();
				$('#personToContactAddressProvinceInputUpdateMessage').css("display", "block");
				$('#personToContactAddressProvinceInputUpdateMessage').fadeIn(1000);
				$('#personToContactAddressProvinceInputUpdateMessage').delay(2000).fadeOut(2000);
			} else if(isForeignAddress == 'N'){
				$('#personToContactAddressProvinceInputDiv').hide();
				$('#personToContactAddressProvinceUpdateMessage').show();
				$('#personToContactAddressProvinceUpdateMessage').css("display", "block");
				$('#personToContactAddressProvinceUpdateMessage').fadeIn(1000);
				$('#personToContactAddressProvinceUpdateMessage').delay(2000).fadeOut(2000);
			}

		} else if(columnName == 'personToContactAddressZipOrPostalCode'){
			$('#personToContactAddressZipInputUpdateMessage').show();
			$('#personToContactAddressZipInputUpdateMessage').css("display", "block");
			$('#personToContactAddressZipInputUpdateMessage').fadeIn(1000);
			$('#personToContactAddressZipInputUpdateMessage').delay(2000).fadeOut(2000);

		}

	}

	//alert(thisVal.attr('id') + "     SSAAVVEEDD");
}

function saveAddressInfoTab() {
	var isPresentForeign = ($('#presentAddressCountry').val() != 'PHL');
	var isPermanentForeign = ($('#permanentAddressCountry').val() != 'PHL');
	var isEmployerForeign = ($('#employerAddressCountry').val() != 'PHL');

	///////////////////////////// PRESENT ADDRESS /////////////////////////////////////
	if($('#presentAddressCountry').attr('data-has-changed') == "Y"){
		//updatePatientAddressInfoOnDatabase($('#presentAddressCountry'));
		//$("#presentAddressCountry").attr("data-has-changed", "N");
		$("#presentAddressCountry").attr("name", "presentAddress.countryCode");
	}
	if($('#presentAddressBldgId').attr('data-has-changed') == "Y"){
		//updatePatientAddressInfoOnDatabase($('#presentAddressBldgId'));
		//$("#presentAddressBldgId").attr("data-has-changed", "N");
		$("#presentAddressBldgId").attr("name", "presentAddress.bldgName");
	}
	if($('#presentAddressNumStId').attr('data-has-changed') == "Y"){
		//updatePatientAddressInfoOnDatabase($('#presentAddressNumStId'));
		//$("#presentAddressNumStId").attr("data-has-changed", "N");
		$("#presentAddressNumStId").attr("name", "presentAddress.numStreet");
	}
	if($('#presentAddressBrgyVillageId').attr('data-has-changed') == "Y"){
		//updatePatientAddressInfoOnDatabase($('#presentAddressBrgyVillageId'));
		//$("#presentAddressBrgyVillageId").attr("data-has-changed", "N");
		$("#presentAddressBrgyVillageId").attr("name", "presentAddress.brgyVillage");
	}
	if($('#presentAddressZipOrPostalCodeId').attr('data-has-changed') == "Y"){
		//updatePatientAddressInfoOnDatabase($('#presentAddressZipOrPostalCodeId'));
		//$("#presentAddressZipOrPostalCodeId").attr("data-has-changed", "N");
		$("#presentAddressZipOrPostalCodeId").attr("name", "presentAddress.postalCode");
	}
	if(isPresentForeign) {
		if($('#presentAddressCityInput').attr('data-has-changed') == "Y"){
			//updatePatientAddressInfoOnDatabase($('#presentAddressCityInput'));
			//$("#presentAddressCityInput").attr("data-has-changed", "N");
			$("#presentAddressCity").attr("name", "");
			$("#presentAddressCityInput").attr("name", "presentAddress.cityCode");
		}
		if($('#presentAddressProviceInput').attr('data-has-changed') == "Y"){
			//updatePatientAddressInfoOnDatabase($('#presentAddressProviceInput'));
			//$("#presentAddressProviceInput").attr("data-has-changed", "N");
			$("#presentAddressProvince").attr("name", "");
			$("#presentAddressProviceInput").attr("name", "presentAddress.provinceCode");
		}
	} else if (!isPresentForeign) {
		if($('#presentAddressCity').attr('data-has-changed') == "Y"){
			//updatePatientAddressInfoOnDatabase($('#presentAddressCity'));
			$("#presentAddressCityInput").attr("name", "");
			//$("#presentAddressCity").attr("data-has-changed", "N");
			$("#presentAddressCity").attr("name", "presentAddress.cityCode");
		}
		if($('#presentAddressProvince').attr('data-has-changed') == "Y"){
			//updatePatientAddressInfoOnDatabase($('#presentAddressProvince'));
			$("#presentAddressProviceInput").attr("name", "");
			//$("#presentAddressProvince").attr("data-has-changed", "N");
			$("#presentAddressProvince").attr("name", "presentAddress.provinceCode");
		}
	}

	///////////////////////////// PERMANENT ADDRESS /////////////////////////////////////

	if($('#permanentAddressCheckBox').attr('data-has-changed') == "Y"){
		//updatePatientAddressInfoOnDatabase($('#permanentAddressCheckBox'));
		//$("#permanentAddressCheckBox").attr("data-has-changed", "N");
		if($('#permanentAddressCheckBox').is(":checked")) {

			$('#permanentAddressCheckBox').val('1');
			$('#hiddenValueIsSameAsPresentPermanent').val('1');

		} else {
			$('#permanentAddressCheckBox').val('0');
			$('#hiddenValueIsSameAsPresentPermanent').val('0');
		}
		$("#hiddenValueIsSameAsPresentPermanent").attr("name", "permanentAddress.isSameAsPresent");
	}

	if($('#permanentAddressCountry').attr('data-has-changed') == "Y"){
		//updatePatientAddressInfoOnDatabase($('#permanentAddressCountry'));
		//$("#permanentAddressCountry").attr("data-has-changed", "N");
		$("#permanentAddressCountry").attr("name", "permanentAddress.countryCode");
	}
	if($('#permanentAddressBldgId').attr('data-has-changed') == "Y"){
		//updatePatientAddressInfoOnDatabase($('#permanentAddressBldgId'));
		//$("#permanentAddressBldgId").attr("data-has-changed", "N");
		$("#permanentAddressBldgId").attr("name", "permanentAddress.bldgName");
	}
	if($('#permanentAddressNumStId').attr('data-has-changed') == "Y"){
		//updatePatientAddressInfoOnDatabase($('#permanentAddressNumStId'));
		//$("#permanentAddressNumStId").attr("data-has-changed", "N");
		$("#permanentAddressNumStId").attr("name", "permanentAddress.numStreet");
	}
	if($('#permanentAddressBrgyVillageId').attr('data-has-changed') == "Y"){
		//updatePatientAddressInfoOnDatabase($('#permanentAddressBrgyVillageId'));
		//$("#permanentAddressBrgyVillageId").attr("data-has-changed", "N");
		$("#permanentAddressBrgyVillageId").attr("name", "permanentAddress.brgyVillage");
	}
	if($('#permanentAddressZipOrPostalCodeId').attr('data-has-changed') == "Y"){
		//updatePatientAddressInfoOnDatabase($('#permanentAddressZipOrPostalCodeId'));
		//$("#permanentAddressZipOrPostalCodeId").attr("data-has-changed", "N");
		$("#permanentAddressZipOrPostalCodeId").attr("name", "permanentAddress.postalCode");
	}
	if(isPermanentForeign) {
		if($('#permanentAddressCityInput').attr('data-has-changed') == "Y"){
			//updatePatientAddressInfoOnDatabase($('#permanentAddressCityInput'));
			$("#permanentAddressCityInput").attr("name", "permanentAddress.cityCode");
			$("#permanentAddressCity").attr("name", "");
		}
		if($('#permanentAddressProvinceInput').attr('data-has-changed') == "Y"){
			//updatePatientAddressInfoOnDatabase($('#permanentAddressProvinceInput'));
			$("#permanentAddressProvinceInput").attr("name", "permanentAddress.provinceCode");
			$("#permanentAddressProvince").attr("name", "");
		}
	} else if (!isPermanentForeign) {
		if($('#permanentAddressCity').attr('data-has-changed') == "Y"){
			//updatePatientAddressInfoOnDatabase($('#permanentAddressCity'));
			$("#permanentAddressCityInput").attr("name", "");
			$("#permanentAddressCity").attr("name", "permanentAddress.cityCode");
		}
		if($('#permanentAddressProvince').attr('data-has-changed') == "Y"){
			//updatePatientAddressInfoOnDatabase($('#permanentAddressProvince'));
			$("#permanentAddressProvinceInput").attr("name", "");
			$("#permanentAddressProvince").attr("name", "permanentAddress.provinceCode");
		}
	}

	///////////////////////////// EMPLOYER ADDRESS /////////////////////////////////////


	if($('#employerAddressCountry').attr('data-has-changed') == "Y"){
		//updatePatientAddressInfoOnDatabase($('#employerAddressCountry'));
		$("#employerAddressCountry").attr("name", "employerAddress.countryCode");
	}
	if($('#employerAddressBldgId').attr('data-has-changed') == "Y"){
		//updatePatientAddressInfoOnDatabase($('#employerAddressBldgId'));
		$("#employerAddressBldgId").attr("name", "employerAddress.bldgName");
	}
	if($('#employerAddressNumStId').attr('data-has-changed') == "Y"){
		//updatePatientAddressInfoOnDatabase($('#employerAddressNumStId'));
		$("#employerAddressNumStId").attr("name", "employerAddress.numStreet");
	}
	if($('#employerAddressBrgyVillageId').attr('data-has-changed') == "Y"){
		//updatePatientAddressInfoOnDatabase($('#employerAddressBrgyVillageId'));
		$("#employerAddressBrgyVillageId").attr("name", "employerAddress.brgyVillage");
	}
	if($('#employerAddressZipOrPostalCodeId').attr('data-has-changed') == "Y"){
		//updatePatientAddressInfoOnDatabase($('#employerAddressZipOrPostalCodeId'));
		$("#employerAddressZipOrPostalCodeId").attr("name", "employerAddress.postalCode");
	}
	if(isEmployerForeign) {
		if($('#employerAddressCityInput').attr('data-has-changed') == "Y"){
			//updatePatientAddressInfoOnDatabase($('#employerAddressCityInput'));
			$("#employerAddressCityInput").attr("name", "employerAddress.cityCode");
			$("#employerAddressCity").attr("name", "");
		}
		if($('#employerAddressProvinceInput').attr('data-has-changed') == "Y"){
			//updatePatientAddressInfoOnDatabase($('#employerAddressProvinceInput'));
			$("#employerAddressProvinceInput").attr("name", "employerAddress.provinceCode");
			$("#employerAddressProvince").attr("name", "");
		}
	} else if (!isEmployerForeign) {
		if($('#employerAddressCity').attr('data-has-changed') == "Y"){
			//updatePatientAddressInfoOnDatabase($('#employerAddressCity'));
			$("#employerAddressCityInput").attr("name", "");
			$("#employerAddressCity").attr("name", "employerAddress.cityCode");
		}
		if($('#employerAddressProvince').attr('data-has-changed') == "Y"){
			//updatePatientAddressInfoOnDatabase($('#employerAddressProvince'));
			$("#employerAddressProvinceInput").attr("name", "");
			$("#employerAddressProvince").attr("name", "employerAddress.provinceCode");
		}
	}
}
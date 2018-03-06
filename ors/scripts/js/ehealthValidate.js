/**
 * Created by St Lukes13 on 3/27/2015.
 */
(function ($) {

	/*
	 *@Author Paul Nikko Baysa
	 *Directions for use
	 *Add Required Tag on your form element to tag it as required.
	 *Placeholder tag will also work for non HTML5 supported browsers
	 *Set errorMessage attribute to set error message that will be displayed on popup
	 *This popup will only validate non-hidden fields.
	 *Works on input types = "text,email,url,checkbox" selectbox, and radio button
	 *input type="date" on construction

	 */


	$.fn.ehealthValidate = function (options) {

		$(this).each(function () {
			var defaultMessage = "Please fill out the required fields before submitting. Items marked with * are required fields. Thank You.";
			var defaultNoneSelected = "Please select an option before submitting. Thank You.";
			//default configuration properties
			var defaults = {
				async: true,
				responseDiv: null,
				colorOn: '#000000',
				colorOff: '#a1a1a1',
				messages: false,
				emptyMessage: "#title",
				emailMessage: false,
				noneSelected: "#title"
			};
			var opts = $.extend({}, defaults, options);

			//Filters latest WebKit versions only


			//Private properties
			var form = $(this);
			var required = new Array();
			var email = new Array();
			var requiredRadio = new Array();
			var requiredSelect = new Array();
			var requiredCheckbox = new Array();
			var dates = new Array();

			//Setup color & placeholder function
			function fillInput(input) {
				if (input.attr('placeholder') && input.val() === "") {
					input.val(input.attr('placeholder'));
					input.css('color', opts.colorOff);

				} else {
					if (!input.data('value')) {
						if (input.val() !== '') {
							input.data('value', input.val());
						}
					} else {
						input.val("");
//                        input.val(input.data('value'));
					}
					input.css('color', opts.colorOn);
				}
			}


			//Select event handler (just colors)
			$.each($('select', this), function () {
//                $(this).css('color', opts.colorOn);
				if ($(this).prop("selectedIndex") !== 0) {
					$(this).css('color', opts.colorOn);
				}

				$(this).change(function () {
					if ($(this).prop("selectedIndex") !== 0) {
						$(this).css('color', opts.colorOn);
					} else if ($(this).prop("selectedIndex") === 0) {
						$(this).css('color', opts.colorOff);
					}

				});
			});

			//For each textarea & visible input excluding button, submit, radio, checkbox and select
			$.each($(':input:not(:button, :submit, :radio, :checkbox, select)', form), function (i) {

				//Setting color & placeholder
				fillInput($(this));

				//Make array of required inputs
				if (this.getAttribute('required') !== null) {
					required[i] = $(this);
				}

				//Make array of Email inputs

				if ($(this).attr('type') === 'email') {
					email[i] = $(this);
				}

				if ($(this).attr('type') === 'datepicker') {
					dates[i] = $(this);
				}


				//FOCUS event attach
				//If input value == placeholder attribute will clear the field
				//If input type == url will not
				//In both cases will change the color with colorOn property
				$(this).bind('focus', function (ev) {
					ev.preventDefault();
					if ($(this).val() === $(this).attr('placeholder')) {
						if (this.getAttribute('type') !== 'url') {
							$(this).val('');
						}
					}
					$(this).css('color', opts.colorOn);
				});

				//BLUR event attach
				//If input value == empty calls fillInput fn
				//if input type == url and value == placeholder attribute calls fn too
				$(this).bind('blur', function (ev) {
					ev.preventDefault();
					if (this.value === '') {
						fillInput($(this));
					}
					else {
						if ((this.getAttribute('type') === 'url') && ($(this).val() === $(this).attr('placeholder'))) {
							fillInput($(this));
						}
					}
				});

				//Limits content typing to TEXTAREA type fields according to attribute maxlength
				$('textarea').filter(this).each(function () {
					if ($(this).attr('maxlength') > 0) {
						$(this).keypress(function (ev) {
							var cc = ev.charCode || ev.keyCode;
							if (cc === 37 || cc === 39) {
								return true;
							}
							if (cc === 8 || cc === 46) {
								return true;
							}
							if (this.value.length >= $(this).attr('maxlength')) {
								return false;
							}
							else {
								return true;
							}
						});
					}
				});


			});


			/*
			 *method to validate on click of submit function
			 */
			$.each($(':submit', this), function () {
				$(this).bind('click', function (ev) {


					//////////////////////////////////////////////////////////////////////// reset all first
					$("input").each(function () {
						$(this).css({
							'border': ''
						});
						$(this).css({
							'outline': 'none'
						});
					});
					$("select").each(function () {
						$(this).css({
							'border': ''
						});
					});


					////////////////////////////////////////////////////////////////////////////////////////////////////////////		Set from Select box as required Field
					$.each($('select:visible:not(:button, :submit, :radio, :checkbox, input)', form), function (i) {
						if (this.getAttribute('required') !== null) {
							requiredSelect[i] = $(this);
							i++;

							if ($(this).prop("selectedIndex") === 0) {
								$(this).css({
									'border': 'solid 1px red'
								});
							} else {
								$(this).css({
									'border': ''
								});
							}
						}

						$(this).change(function () {
							$(this).css({
								'border': ''
							});
						});
					});

					//////////////////////////////////////////////////////////////////////////////////////////////////////////// end Select box setting as required field


					////////////////////////////////////////////////////////////////////////////////////////////////////////////		Set from input text as required Field
					$.each($(':input:visible:not(:button, :submit, :radio, :checkbox, select)', form), function (i) {
						if (this.getAttribute('required') !== null) {
							required[i] = $(this);
							i++;


							if ($(this).val().trim() === "" || $(this).val().trim() === $(this).attr("placeholder")) {
								$(this).css({
									'border': 'solid 1px red'
								});
							} else {
								$(this).css({
									'border': ''
								});
							}
						}

						$(this).keyup(function () {
							$(this).css({
								'border': ''
							});
						});

					});

					//////////////////////////////////////////////////////////////////////////////////////////////////////////// end input text box setting as required field


					////////////////////////////////////////////////////////////////////////////////////////////////////////////		Set from radio Button as required Field
					$.each($(':input:radio:visible:not(:button, :submit, :text, :checkbox, select)', form), function (i) {
						var group = $(this).attr('name');

						if (this.getAttribute('required') !== null) {
							requiredRadio[i] = $(this);
						}

						$("input[name=" + group + "]").each(function () {
							$(this).css({
								'outline': 'thin solid red'
							});
						});


						$(this).click(function () {
							$("input[name=" + group + "]").each(function () {
								$(this).css({
									'outline': 'none'
								});
							});
						});

					});

					//////////////////////////////////////////////////////////////////////////////////////////////////////////// end radio button setting as required field
					$.each($(':input:checkbox:visible:not(:button, :submit, :text, :radio, select)', form), function (i) {
						var group = $(this).attr('name');

						if (this.getAttribute('required') !== null) {
							requiredCheckbox[i] = $(this);
						}

						$("input[name=" + group + "]").each(function () {
							$(this).css({
								'outline': 'thin solid red'
							});
						});


						$(this).click(function () {
							$(this).css({
								'outline': 'none'
							});
							$("input[name=" + group + "]").each(function () {
								$(this).css({
									'outline': 'none'
								});
							});
						});

					});

					//////////////////////////////////////////////////////////////////////////////////////////////////////////// end radio button setting as required field

					var emptyInput = null;
					var emailError = null;
					var dateError = null;
					var selectError = null;
					var radioError = null;
					var checkboxError = null;

					var input = $(':input:not(:button, :submit, :radio, :checkbox, select)', form);

					//Search for empty fields & value same as placeholder
					//returns first input founded
					//Add messages for multiple languages
					$(required).each(function (key, value) {

						if ($(this).is(":visible")) {


							if (value === undefined) {
								return true;
							}

							if (($(this).val().trim() === $(this).attr('placeholder')) || ($(this).val().trim() === '') || ($(this).val().trim() === '/')) {
								emptyInput = $(this);
								var emptyMessage = opts.emptyMessage;

								if ($(this).attr('errorMessage') === undefined) {
									emptyMessage = emptyMessage.replace("#title", defaultMessage);
								} else {
									emptyMessage = emptyMessage.replace("#title", $(this).attr('errorMessage'));
								}


								$("#errorMessage").html(emptyMessage);

								$("#errorPopup").modal("show");
								return false;
							} else {
								$(this).css({
									'border': ''
								});
							}

							return emptyInput;

						}
					});

					//////////////////////////////////////////////////////////////////////////////////////////////////////////// Required Select Box 				returns selectError
					$(requiredSelect).each(function (key, value) {
						if ($(this).is(":visible")) {

							if (value === undefined) {
								return true;
							}

							if ($(this).prop("selectedIndex") === 0) {
								selectError = $(this);
								var noneSelected = opts.noneSelected;
								// $("#errorMessage").html('<p>'+$(this).attr('title')+' must be selected.</p>');

								if ($(this).attr('errorMessage') === undefined) {
									noneSelected = noneSelected.replace("#title", defaultNoneSelected);
								} else {
									noneSelected = noneSelected.replace("#title", $(this).attr('errorMessage'));
								}

								//                                $("#errorMessage").html(noneSelected);
								//                                $("#errorPopup").modal("show");
								return false;
							} else {
								$(this).css({
									'border': ''
								});
							}

							return selectError;
						}
					});
					////////////////////////////////////////////////////////////////////////////////////////////////////////////end Select Box

					//////////////////////////////////////////////////////////////////////////////////////////////////////////// Required Radio Button 				returns radioError
					$(requiredRadio).each(function (key, value) {
						if ($(this).is(":visible")) {
							var radioCheck = true;
							var group = $(this).attr('name');

							if (value === undefined) {
								return true;
							}

							$("input[name=" + group + "]").each(function () {


								if (!$(this).is(':checked')) {
									radioCheck = true;
								} else {
									radioCheck = false;
									$("input[name=" + group + "]").each(function () {
										$(this).css({
											'outline': ''
										});
									});
									return false;
								}
							});

							if (radioCheck === true) {

								radioError = $(this);
								var noneSelected = opts.noneSelected;

								if ($(this).attr('errorMessage') === undefined) {
									noneSelected = noneSelected.replace("#title", defaultNoneSelected);
								} else {
									noneSelected = noneSelected.replace("#title", $(this).attr('errorMessage'));
								}

								$("#errorMessage").html(noneSelected);
								$("#errorPopup").modal("show");
								return radioError;
							}
						}
					});

					$(":input:radio").each(function (key, value) {
						console.log("radio");
						if ($(this).is(":visible")) {
							var chkCheck = true;
							var group = $(this).attr('name');

							if (value === undefined) {
								return true;
							}
							$("input[name=" + group + "]").each(function () {
								if (!$(this).is(":checked")) {
									chkCheck = true;
								}
								else {
									chkCheck = false;
									$("input[name=" + group + "]").each(function () {
										$(this).css({
											'outline': ''
										});
									});
									return false;
								}
							});
						}
					});
					////////////////////////////////////////////////////////////////////////////////////////////////////////////end Radio Button
					$(requiredCheckbox).each(function (key, value) {
						if ($(this).is(":visible")) {
							var chkCheck = true;
							var group = $(this).attr('name');

							if (value === undefined) {
								return true;
							}

							$("input[name=" + group + "]").each(function () {
								if (!$(this).is(':checked')) {
									chkCheck = true;
								} else {
									chkCheck = false;
									$("input[name=" + group + "]").each(function () {
										$(this).css({
											'outline': ''
										});
									});
									return false;
								}
							});

							if (chkCheck === true) {

								radioError = $(this);
								var noneSelected = opts.noneSelected;

								if ($(this).attr('errorMessage') === undefined) {
									noneSelected = noneSelected.replace("#title", defaultNoneSelected);
								} else {
									noneSelected = noneSelected.replace("#title", $(this).attr('errorMessage'));
								}

								$("#errorMessage").html(noneSelected);
								$("#errorPopup").modal("show");
								return radioError;
							}
						}
					});

					////////////////////////////////////////////////////////////////////////////////////////////////////////////end Radio Button

					//check email type inputs with regular expression
					//return first input founded
					$(email).each(function (key, value) {
						if ($(this).is(":visible")) {
							if (value === undefined) {
								return true;
							}
							if ($(this).val().search(/[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/i)) {
								console.log("xxasasa");
								emailError = $(this);
								//                                $("#errorMessage").html('<p>Please input a valid email address.</p>');
								//                                $("#errorPopup").modal("show");
								//   return false;
							} else {
								$(this).css({
									'border': ''
								});
							}
							return emailError;
						}
					});

					///////////////////////////////////////////////////////////////////////////////////////////////////////////
					$(dates).each(function (key, value) {
						if ($(this).is(":visible")) {
							if (value === undefined) {
								return true;
							}

							var textDate = new Date($(this).val());

							var pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/; // Regex to validate date format


							if ($(this).val() !== $(this).attr('placeholder') && $(this).val() !== "") {
								if (pattern.test($(this).val())) {

									if ($(this).attr("minDate") !== undefined && $(this).attr("minDate") !== "") {
										var minDate = new Date();
										minDate.setDate(minDate.getDate() + 6);

										if (textDate < minDate) {
											$(this).val("");
											$("#errorMessage").html('<p>Planned Admission Date must be a week greater than date ' + $(this).attr('minDate') + '.</p>');
											$("#errorPopup").modal("show");

											dateError = $(this);
										} else {
											$(this).css({
												'border': ''
											});
										}
									}


									/*
									 * for maxDate validation
									 */
									if ($(this).attr("maxDate") !== undefined && $(this).attr("maxDate") !== "") {
										var maxDate = new Date();


										if ($(this).attr("maxDate") === "yesterday") {
											maxDate.setDate(maxDate.getDate() - 1);
										} else if ($(this).attr("maxDate") === "tommorrow") {
											var maxDate = new Date();
											maxDate.setDate(maxDate.getDate() + 1);
										}


										if (textDate > maxDate) {
											$(this).val("");
											$("#errorMessage").html('<p>Please input a date less than or equal to ' + $(this).attr('maxDate') + '.</p>');
											$("#errorPopup").modal("show");
											dateError = $(this);
										} else {
											$(this).css({
												'border': ''
											});
										}
									}

								} else {
									$(this).val("");
									$("#errorMessage").html('<p>Invalid date format. Please Input in (mm/dd/yyyy) format.</p>');
									$("#errorPopup").modal("show");
									dateError = $(this);
								}
							}


							return dateError;
						}
					});

					///////////////////////////////////////////////////////////////////////////////////////////////////////////


					//Submit form ONLY if emptyInput & emailError are null
					if (!emptyInput && !emailError && !radioError & !selectError & !checkboxError & !dateError) {

						//Clear all empty value fields before Submit
						$.each($(':input:not(:button, :submit, :radio, :checkbox, select)', form), function (i) {
							if ($(this).val() === $(this).attr('placeholder')) {
								$(this).val('');
							}
						});


						//if Contact Us Form form, submission is redirected to custom form submission
						//Can be defaulted to form.submit() method;

						if ($(form).attr("id") === "contactUsForm") {
							sendMessage();
						} else {
							//If all fields are validated call submit method you want from your main form
							submitThisForm($(form).attr("id"));
						}


					} else {
						if (emptyInput) {
							// $(emptyInput).focus().select();
							$(emptyInput).css({
								'border': 'solid 1px red'
							});
							if (emailError) {
								$(emailError).css({
									'border': 'solid 1px red'
								});
							}
						}
						else if (emailError) {
							$(emailError).css({
								'border': 'solid 1px red'
							});
							$("#errorMessage").html('<p>Please input a valid email address.</p>');
							$("#errorPopup").modal("show");
						} else if (radioError) {
							$(radioError).css({
								'outline': 'thin solid red'
							});
						} else if (checkboxError) {
							$(checkboxError).css({
								'outline': 'medium solid red'
							});
						} else if (selectError) {
							$(selectError).css({
								'border': 'solid 1px red'
							});
							$("#errorMessage").html('<p>Please select an option before submitting. Thank You.</p>');
							$("#errorPopup").modal("show");
						} else if (dateError) {
							$(dateError).css({
								'border': 'solid 1px red'
							});
						} else {
							alert('Unknown Error');
						}
					}
					return false;
				});
			});

			function setErrorMessage(errorMessage) {
				alert(errorMessage);
			}

		});
	};

})(jQuery);

function sendMessage() {

	var hashReturn = rpHash($("#captchaTextbox").val().toUpperCase());
	var value = $("[name=captchaHash]").val();

	if ($("#captchaTextbox").val().length > 0) {
		contactEhealth(hashReturn, value);
	}
}


function contactEhealth(hashReturn, value) {
	$.post("checkContactUsCaptcha.html",
		{
			realPersonHash: value,
			defaultReal: hashReturn
		},
		function (data) {
			if (data === 'EQUAL') {
				$.ajax({
					type: "POST",
					url: "contactUs.html",
					data: $('#contactUsForm').serialize(),

					beforeSend: function (xhr) {
						if (xhr.overrideMimeType) {
							xhr.overrideMimeType("application/json");

						}
					},
					dataType: 'json',
					complete: messageSent

				});
			} else if (data === 'NOT EQUAL') {
				$("#errorMessage").text('The security code you entered did not match. Please try again.');
				$("#errorPopup").modal("show");
			} else if (data === "NULL") {
				console.log("captcha does not appear");
			}
		});
}


function messageSent() {
	$("#ContactUsDialog").modal("hide");
	$("#errorMessage").html('Your message has been sent. Thank you.');
	$("#errorPopup").modal("show");

	$("#ContactUsDialog textarea").each(function () {
		$(this).css({
			'border': ''
		});
	});
	$("#ContactUsDialog input").each(function () {
		$(this).css({
			'border': ''
		});
	});

}


///captcha******
function rpHash(value) {
	var hash = 5381;
	for (var i = 0; i < value.length; i++) {
		hash = ((hash << 5) + hash) + value.charCodeAt(i);
	}
	return hash;
}


/*
 *Setting the error message of an input element
 *if input elemect.errorMessage is not set then use the default message set in the configuration or built in default
 *
 *
 */

jQuery.fn.setErrorMessage = function (options) {
	var defaults = {
		errorMessage: "",
		defaultMessage: "Please fill out the required fields before submitting. Items marked with * are required fields. Thank You."
	};

	var myoptions = $.extend({}, defaults, options);
	if (myoptions.errorMessage === undefined || myoptions.errorMessage === '') {
		$(this).attr("errorMessage", myoptions.defaultMessage);
	} else {
		$(this).attr("errorMessage", myoptions.errorMessage);
	}
};






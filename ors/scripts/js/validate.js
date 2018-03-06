//
//	jQuery Validate example script
//
//	Prepared by David Cochran
//
//	Free for your use -- No warranties, no guarantees!
//

$(document).ready(function () {

	// Validate
	// http://bassistance.de/jquery-plugins/jquery-plugin-validation/
	// http://docs.jquery.com/Plugins/Validation/
	// http://docs.jquery.com/Plugins/Validation/validate#toptions

	$('#firstName').validate({
		errorPlacement: function (error, element) {
			' '
		},
		rules: {
			name: {
				required: true
			},
			username: {
				required: true
			},
			newpassword: {
				required: true
			},
			confirmpassword: {
				required: true
			},
			oldpassword: {
				required: true
			},
			password: {
				required: true
			}
		},
		highlight: function (element) {
			$(element).closest('.control-group').removeClass('success').addClass('error');
		},
		success: function (element) {
			element
				//	.text('OK!').addClass('valid')
				.closest('.control-group').removeClass('error').addClass('success');
		}

	});
	/* state validation*/
	$validator.addMethod("required", function (value, element) {
		return this.optional(element) || (value.indexOf("") == -1);
	}, "Please select a option.");

}); // end document.ready
function formatCurrency(num) {
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num))
        num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10)
        cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
        num = num.substring(0, num.length - (4 * i + 3)) + ','
                + num.substring(num.length - (4 * i + 3));

    if (cents >= 1) {
        num = num.toString().replace(/\$|\,/g, '');
        num = parseFloat(num) + 1;
        num = num.toString().replace(/\$|\,/g, '');
        for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
            num = num.substring(0, num.length - (4 * i + 3)) + ','
                    + num.substring(num.length - (4 * i + 3));
    }
    cents = "00";


    return (((sign) ? '' : '-') + 'Php ' + num + '.' + cents);

}

var roomMap = {};

$(function() {
    disableCheckbox();

    var sessionRoomChoice1 = $('#first').val();
    var sessionRoomChoice2 = $('#second').val();

    $('input.cb').ready(function() {
        if ($('input.cb').filter(':checked').length == 2)
            $('input.cb:not(:checked)').attr('disabled', 'disabled');
        else
            $('input.cb').removeAttr('disabled');
    });

    $('input[type=checkbox]').each(function() {
        if ($(this).val() == sessionRoomChoice1) {
            $(this).prop('checked', true);
            $('#first').val(sessionRoomChoice1);
            document.getElementById('room1').innerHTML = roomMap[$('#first').val()];
        }
        if ($(this).val() == sessionRoomChoice2) {
            $(this).prop('checked', true);
            $('#second').val(sessionRoomChoice2);
            document.getElementById('room2').innerHTML = roomMap[$('#second').val()];
        }
    });

    var boxVal = '';
    $('input.cb[type="checkbox"]').click(
            function() {
                var allVals = [];
                var trans = 'add'
                boxVal = $(this).val();
                $('input.placer').each(function() {
                    if ($(this).val() == boxVal) {
                        $(this).attr('value', '');
                        trans = 'remove'
                    }
                    allVals.push($(this).val());
                });
                if (trans != 'remove') {
                    var $input = $('input.placer[value=""]:first');
                    $input.attr('value', boxVal);
                }

                if ($('#first').val() == "") {
                    document.getElementById('room1').innerHTML = "";
                    document.getElementById('roomName1').value = "";
                } else {
                    document.getElementById('room1').innerHTML = roomMap[$('#first').val()];
                    document.getElementById('roomName1').value = roomMap[$('#first').val()];
                }

                if ($('#second').val() == '') {
                    document.getElementById('room2').innerHTML = "";
                    document.getElementById('roomName2').value = "";
                    ;
                } else {
                    document.getElementById('room2').innerHTML = roomMap[$(
                            '#second').val()];
                    document.getElementById('roomName2').value = roomMap[$(
                            '#second').val()];
                }

            });


//    $('select#choice1').change(function() {
//
//        var room = $(this).val();
//        var det = room.split("~");
//        var rmPrice = det[1];
//        $('#rm_choice1').val(det[0]);
//
//        if ($("#seniorId").is(":hidden")) {
//            rmPrice = rmPrice - (rmPrice * normalDiscount);
//        } else {
//            rmPrice = rmPrice - (rmPrice * specialDiscount);
//        }
//
//        $('#rate1').html(formatCurrency(rmPrice));
//
//
//        $('#details1').html(det[2]);
//        if (det[3] != "") {
//            document.getElementById('image1').innerHTML = "<img src='images/OnlineReservation/rooms/" + det[3] + "' width='700' height='467'>";
//        } else if (det[3] == "") {
//            document.getElementById('image1').innerHTML = "<img src='images/OnlineReservation/rooms/RoomImageNotAvailable.png' width='700' height='467'>";
//        }
//        $('#name1').html(det[4]);
//
//    });
//    $('select#choice2').change(function() {
//        var room = $(this).val();
//        var det = room.split("~");
//        var rmPrice = det[1];
//        $('#rm_choice2').val(det[0]);
//
//        if ($("#seniorId").is(":hidden")) {
//            rmPrice = rmPrice - (rmPrice * normalDiscount);
//        } else {
//            rmPrice = rmPrice - (rmPrice * specialDiscount);
//        }
//
//        $('#rate2').html(formatCurrency(rmPrice));
//
//        $('#details2').html(det[2]);
//        if (det[3] != "") {
//            document.getElementById('image2').innerHTML = "<img src='images/OnlineReservation/rooms/" + det[3] + "' width='700' height='467'>";
//        } else if (det[3] == "") {
//            document.getElementById('image2').innerHTML = "<img src='images/OnlineReservation/rooms/RoomImageNotAvailable.png' width='700' height='467'>";
//        }
//        $('#name2').html(det[4]);
//    });

    $(document).ready(function() {

    	 
        var room1 = $('#choice1 option:selected').val();
        var det1 = room1.split("~");
        var rmPrice1 = det1[1];

        $('#rm_choice1').val(det1[0]);

        if ($("#seniorId").is(":hidden")) {
            rmPrice1 = rmPrice1 - (rmPrice1 * normalDiscount);
        } else {
            rmPrice1 = rmPrice1 - (rmPrice1 * specialDiscount);
        }

        $('#rate1').html(formatCurrency(rmPrice1));
        $('#details1').html(det1[2]);
        if (det1[3] != "") {
            document.getElementById('image1').innerHTML = "<img src='images/OnlineReservation/rooms/" + det1[3] + "' width='700' height='467'>";
        } else if (det1[3] == "") {
            document.getElementById('image1').innerHTML = "<img src='images/OnlineReservation/rooms/RoomImageNotAvailable.png' width='700' height='467'>";
        }
        $('#name1').html(det1[4]);

        var room2 = $('#choice2 option:selected').val();
        var det2 = room2.split("~");
        var rmPrice2 = det2[1];

        $('#rm_choice2').val(det2[0]);


        if ($("#seniorId").is(":hidden")) {
            rmPrice2 = rmPrice2 - (rmPrice2 * normalDiscount);
        } else {
            rmPrice2 = rmPrice2 - (rmPrice2 * specialDiscount);
        }

        $('#rate2').html(formatCurrency(rmPrice2));
        $('#details2').html(det2[2]);
        if (det2[3] != "") {
            document.getElementById('image2').innerHTML = "<img src='images/OnlineReservation/rooms/" + det2[3] + "' width='700' height='467'>";
        } else if (det2[3] == "") {
            document.getElementById('image2').innerHTML = "<img src='images/OnlineReservation/rooms/RoomImageNotAvailable.png' width='700' height='467'>";
        }
        $('#name2').html(det2[4]);

    });


});

function disableCheckbox() {
    $('input.cb').change(
            function() {

                if ($('input.cb').filter(':checked').length == 2)
                    $('input.cb:not(:checked)').attr('disabled',
                            'disabled');
                else
                    $('input.cb').removeAttr('disabled');
            });
}
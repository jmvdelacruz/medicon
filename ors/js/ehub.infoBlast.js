function getActiveInfoBlasts(whenToShow) {
    InfoBlast.getActiveInfoBlast(whenToShow, function(map) {

        if (map.source != "") {
            $.each(map.source, function(index) {


                if (index === 0) {
                    $(".carousel-indicators").append('<li data-target="#carousel-example-generic" data-slide-to="' + index + '" class="active"></li>');
                    $(".carousel-inner").append('<div class="item active">'
                            + '<img src="' + map.infoBlastUrl + "" + this.imagePath + "" + this.title + '" alt="..." class="img-responsive center-block">'
                            + '<div class="carousel-caption">'
                            + '</div>'
                            + '</div>');
                } else {
                    $(".carousel-indicators").append('<li data-target="#carousel-example-generic" data-slide-to="' + index + '" ></li>');
                    $(".carousel-inner").append('<div class="item">'
                            + '<img src="' + map.infoBlastUrl + "" + this.imagePath + "" + this.title + '" alt="..." class="img-responsive center-block">'
                            + '<div class="carousel-caption">'
                            + '</div>'
                            + '</div>');
                }


            });
            if (whenToShow === "O") {
                $("#infoBlastClose").attr("aria-label", "Close");
            } else {
                $("#infoBlastClose").attr("aria-label", "Close");
                $("#infoBlastClose").click(function() {
                    $.session.set("infoBlastIsSeen", "yes");
                    isAnswerSurvey();
                });
            }
            setTimeout(function() {
                $('#carousel-example-generic').carousel();
                $("#modal_infoBlast .modal-body").css("max-height",($(window).height() * .8)).css("overflow-y","auto");
                $("#modal_infoBlast").modal('show');
                
            }, 50)

        } else {
            if (whenToShow === "I") {
                isAnswerSurvey();
            }
        }
    });
}


// ***************************** Modal (6) settings *****************************//
$("#exampleModalToggle6 .TurnOn").click(function (e) {
        $(currentDayTarget).attr({ "data-bs-target": "#exampleModalToggle2", "data-bs-dismiss": "modal", "data-bs-toggle": "modal" });
        $($($(currentDayTarget).children()[1]).children()[0]).attr("src", "icons/on.png");
        $("#exampleModalToggle6").modal('hide');
})

$("#exampleModalToggle6 .Activate").click(function (e) {
        $(currentDayTarget).attr({ "data-bs-target": "#exampleModalToggle2", "data-bs-dismiss": "modal", "data-bs-toggle": "modal" });
        $($($(currentDayTarget).children()[1]).children()[0]).attr("src", "icons/choose.png");
        $("#exampleModalToggle6").modal('hide');
})

// Toggle On & Activate buttons
$(".day").click(function (e) {
        if (e.target.tagName === 'TD') {
                if ($(e.target.children[1].children).attr("src") == "icons/pause.png") {
                        $(".Activate").show();
                        $(".TurnOn").hide();
                }
                else if ($(e.target.children[1].children).attr("src") == "icons/off.png") {
                        $(".Activate").hide();
                        $(".TurnOn").show();
                }
        }
        else if (e.target.tagName === 'SPAN') {
                if ($($(e.target).siblings()[0].children).attr("src") == "icons/pause.png") {
                        $(".Activate").show();
                        $(".TurnOn").hide();
                }
                else if ($($(e.target).siblings()[0].children).attr("src") == "icons/off.png") {
                        $(".Activate").hide();
                        $(".TurnOn").show();
                }
        }
        else if (e.target.tagName === 'IMG') {
                if ($(e.target).attr("src") == "icons/pause.png") {
                        $(".Activate").show();
                        $(".TurnOn").hide();
                }
                else if ($(e.target).attr("src") == "icons/off.png") {
                        $(".Activate").hide();
                        $(".TurnOn").show();
                }
        }
});
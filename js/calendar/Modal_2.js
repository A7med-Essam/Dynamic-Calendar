// ***************************** Modal (2) settings *****************************//
// Toggle icon ON - OFF - Pause

$("#exampleModalToggle2 .modal-footer .TurnOff").click(function(e) {
    $(currentDayTarget).attr({"data-bs-target":"#exampleModalToggle6","data-bs-dismiss":"modal", "data-bs-toggle":"modal"});
    $($($(currentDayTarget).children()[1]).children()[0]).attr("src", "icons/off.png");
    $("#exampleModalToggle2").modal('hide');
    $("#exampleModalToggle").modal('show');
})

$("#exampleModalToggle2 .modal-footer .Pause").click(function(e) {
    $(currentDayTarget).attr({"data-bs-target":"#exampleModalToggle6","data-bs-dismiss":"modal", "data-bs-toggle":"modal"});
    $($($(currentDayTarget).children()[1]).children()[0]).attr("src", "icons/pause.png");
    $("#exampleModalToggle2").modal('hide');
    $("#exampleModalToggle").modal('show');
})




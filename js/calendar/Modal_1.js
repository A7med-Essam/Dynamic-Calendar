// variables
let week1 = $('#daysRow1 .day');
let week2 = $('#daysRow2 .day');
let week3 = $('#daysRow3 .day');
let week4 = $('#daysRow4 .day');
let week5 = $('#daysRow5 .day');
let today = new Date();
let number = $('.number');
var days = $('.day .number');
let dayName = $(".day-name");
// get number of days in the current month through the daysInMonth function
let CurrentDaysInMonth = daysInMonth(today.getMonth()+1,today.getFullYear());

let subscriptionStartByDay = 5;
let subscriptionEndByDay = 31;

let subscriptionStartByMonth = 10;
let subscriptionEndByMonth = 10;



// calculation of no. of days between two date 
function calcDays(start, end) {
    let date1 = new Date(start);
    let date2 = new Date(end);
    let Difference_In_Time = date2.getTime() - date1.getTime();
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return Difference_In_Days;
}
        // ***************************** Calendar settings *****************************//
        // method to get number of days in the current month 
        function daysInMonth(month, year) {
            return new Date(year, month, 0).getDate();
        }

        // Set day numbers in calendar
        function setDaysInCalendar() {
            for (let i = 1; i <= CurrentDaysInMonth; i++) {
                number[i].innerText = i
            }
            for (let i = 0; i < number.length; i++) {
                // remove attr from non-days
                if ($(number[i]).text() == "-") {
                    $(number[i]).siblings().remove();
                    $(number[i]).parent().attr({"data-bs-toggle" : "", "data-bs-dismiss" : "", "data-bs-target" : ""});
                }
                // add class today to the current day 
                if (number[i].innerText == today.getDate()) {
                    $(number[i]).parent().addClass("today");
                }
            }
        }

        // set table header to calendar 
        function setCalendarHeader(){
            let indexOfToday = $('.today').index(); 
            switch (indexOfToday) {
                case 1:
                    $(dayName[indexOfToday]).text(today.toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday + 1]).text(new Date((new Date()).valueOf() + 1000 * 3600 * 24).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday + 2]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 2)).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday + 3]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 3)).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday + 4]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 4)).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday + 5]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 5)).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday - 1]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 6)).toLocaleString('en-us', { weekday: 'long' }));
                    FridayController(dayName[indexOfToday])
                    SaturdayController(dayName[indexOfToday + 1])
                    SundayController(dayName[indexOfToday +2 ])
                    MondayController(dayName[indexOfToday + 3])
                    TuesdayController(dayName[indexOfToday + 4])
                    WednesdayController(dayName[indexOfToday + 5])
                    ThursdayController(dayName[indexOfToday - 1])
                    break;
        
                case 2:
                    $(dayName[indexOfToday]).text(today.toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday + 1]).text(new Date((new Date()).valueOf() + 1000 * 3600 * 24).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday + 2]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 2)).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday + 3]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 3)).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday + 4]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 4)).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday - 2]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 5)).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday - 1]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 6)).toLocaleString('en-us', { weekday: 'long' }));
                    FridayController(dayName[indexOfToday -1])
                    SaturdayController(dayName[indexOfToday])
                    SundayController(dayName[indexOfToday + 1])
                    MondayController(dayName[indexOfToday + 2])
                    TuesdayController(dayName[indexOfToday + 3])
                    WednesdayController(dayName[indexOfToday + 4])
                    ThursdayController(dayName[indexOfToday - 2])
                    break;
        
                case 3:
                    $(dayName[indexOfToday]).text(today.toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday + 1]).text(new Date((new Date()).valueOf() + 1000 * 3600 * 24).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday + 2]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 2)).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday + 3]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 3)).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday - 3]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 4)).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday - 2]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 5)).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday - 1]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 6)).toLocaleString('en-us', { weekday: 'long' }));
                    FridayController(dayName[indexOfToday - 2])
                    SaturdayController(dayName[indexOfToday - 1])
                    SundayController(dayName[indexOfToday])
                    MondayController(dayName[indexOfToday + 1])
                    TuesdayController(dayName[indexOfToday + 2])
                    WednesdayController(dayName[indexOfToday + 3])
                    ThursdayController(dayName[indexOfToday - 3])
                    break;
        
                case 4:
                    $(dayName[indexOfToday]).text(today.toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday + 1]).text(new Date((new Date()).valueOf() + 1000 * 3600 * 24).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday + 2]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 2)).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday - 4]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 3)).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday - 3]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 4)).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday - 2]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 5)).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday - 1]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 6)).toLocaleString('en-us', { weekday: 'long' }));
                    FridayController(dayName[indexOfToday - 3])
                    SaturdayController(dayName[indexOfToday - 2])
                    SundayController(dayName[indexOfToday - 1])
                    MondayController(dayName[indexOfToday])
                    TuesdayController(dayName[indexOfToday + 1])
                    WednesdayController(dayName[indexOfToday + 2])
                    ThursdayController(dayName[indexOfToday - 4])
                    break;
        
                case 5:
                    $(dayName[indexOfToday]).text(today.toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday + 1]).text(new Date((new Date()).valueOf() + 1000 * 3600 * 24).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday - 5]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 2)).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday - 4]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 3)).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday - 3]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 4)).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday - 2]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 5)).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday - 1]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 6)).toLocaleString('en-us', { weekday: 'long' }));
                    FridayController(dayName[indexOfToday - 4])
                    SaturdayController(dayName[indexOfToday - 3])
                    SundayController(dayName[indexOfToday - 2])
                    MondayController(dayName[indexOfToday - 1])
                    TuesdayController(dayName[indexOfToday])
                    WednesdayController(dayName[indexOfToday + 1])
                    ThursdayController(dayName[indexOfToday - 5])
                    break;
        
                case 6:
                    $(dayName[indexOfToday]).text(today.toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday - 6]).text(new Date((new Date()).valueOf() + 1000 * 3600 * 24).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday - 5]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 2)).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday - 4]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 3)).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday - 3]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 4)).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday - 2]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 5)).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday - 1]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 6)).toLocaleString('en-us', { weekday: 'long' }));
                    FridayController(dayName[indexOfToday - 5])
                    SaturdayController(dayName[indexOfToday - 4])
                    SundayController(dayName[indexOfToday - 3])
                    MondayController(dayName[indexOfToday - 2])
                    TuesdayController(dayName[indexOfToday -1])
                    WednesdayController(dayName[indexOfToday])
                    ThursdayController(dayName[indexOfToday - 6])
                    break;
        
                default:
                    $(dayName[indexOfToday]).text(today.toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday + 1]).text(new Date((new Date()).valueOf() + 1000 * 3600 * 24).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday + 2]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 2)).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday + 3]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 3)).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday + 4]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 4)).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday + 5]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 5)).toLocaleString('en-us', { weekday: 'long' }));
                    $(dayName[indexOfToday + 6]).text(new Date((new Date()).valueOf() + ((1000 * 3600 * 24) * 6)).toLocaleString('en-us', { weekday: 'long' }));
                    FridayController(dayName[indexOfToday + 1])
                    SaturdayController(dayName[indexOfToday + 2])
                    SundayController(dayName[indexOfToday + 3])
                    MondayController(dayName[indexOfToday + 4])
                    TuesdayController(dayName[indexOfToday + 5])
                    WednesdayController(dayName[indexOfToday + 6])
                    ThursdayController(dayName[indexOfToday])
                    break;
            }
        }

        // set delivered icon to all prev days
        function setIconToPrevDays(status) {
            let prevWeeks = $(".today").parent().prevAll("#daysRow1, #daysRow2, #daysRow3, #daysRow4, #daysRow5").children();
            let prevDays = $(".today").prevAll();
            if ($(".today .number").text() >= subscriptionStartByDay && $(".today .number").text() <= subscriptionEndByDay) {
                setPreparingIcon(); // set icon preparing & on delivery to the next day...
                // set icon to the current day & attach it to modal 5
                $(`.today`).attr("data-bs-target","#exampleModalToggle5");
                $($($($( ".today" )).children()[1]).children()[0]).attr("src", "icons/delivered.png");
                for (let i = 0; i < prevDays.length; i++) {
                    $(prevDays[i]).children('.ImgContainer').children().attr("src", "icons/delivered.png");
                    $(prevDays[i]).attr({"data-bs-target" : "#exampleModalToggle5", "data-bs-toggle" : "modal", "data-bs-dismiss" : "modal"});
                }
                for (let i = 0; i < prevWeeks.length; i++) {
                    if (status == "Current") {
                        if ($(prevWeeks[i]).children(".number").text() >= subscriptionStartByDay && $(prevWeeks[i]).children(".number").text() <= subscriptionEndByDay) {
                            $(prevWeeks[i]).children('.ImgContainer').children().attr("src", "icons/delivered.png");
                            $(prevWeeks[i]).attr({"data-bs-target" : "#exampleModalToggle5", "data-bs-toggle" : "modal", "data-bs-dismiss" : "modal"});
                        }
                    }
                    else if(status == "Prev"){
                        if ($(prevWeeks[i]).children(".number").text() >= 1) {
                            $(prevWeeks[i]).children('.ImgContainer').children().attr("src", "icons/delivered.png");
                            $(prevWeeks[i]).attr({"data-bs-target" : "#exampleModalToggle5", "data-bs-toggle" : "modal", "data-bs-dismiss" : "modal"});
                        }
                    }
                }
            }
            else{
                if(subscriptionStartByMonth < today.getMonth()+1 && subscriptionEndByMonth > today.getMonth()+1){
                    for (let i = 0; i < number.length; i++) {
                        if ($(number[i]).text() >= 1 && $(number[i]).text() <= Number($('.today .number').text()))
                        {
                            $($(number[i]).parent()).attr({"data-bs-target" : "#exampleModalToggle5", "data-bs-toggle" : "modal", "data-bs-dismiss" : "modal"});
                            $($(number[i]).parent()).children('.ImgContainer').children().attr("src", "icons/delivered.png");
                        }
                    }
                }
                else if(subscriptionStartByMonth < today.getMonth()+1 && subscriptionEndByMonth == today.getMonth()+1)
                {
                    for (let i = 0; i < number.length; i++) {
                        if ($(number[i]).text() >= 1 && $(number[i]).text() <= subscriptionEndByDay)
                        {
                            $($(number[i]).parent()).attr({"data-bs-target" : "#exampleModalToggle5", "data-bs-toggle" : "modal", "data-bs-dismiss" : "modal"});
                            $($(number[i]).parent()).children('.ImgContainer').children().attr("src", "icons/delivered.png");
                        }
                    }
                }
                else if(subscriptionStartByMonth == today.getMonth()+1 && subscriptionEndByMonth == today.getMonth()+1)
                {
                    for (let i = 0; i < number.length; i++) {
                        if ($(number[i]).text() >= subscriptionStartByDay && $(number[i]).text() <= subscriptionEndByDay)
                        {
                            $($(number[i]).parent()).attr({"data-bs-target" : "#exampleModalToggle5", "data-bs-toggle" : "modal", "data-bs-dismiss" : "modal"});
                            $($(number[i]).parent()).children('.ImgContainer').children().attr("src", "icons/delivered.png");
                        }
                    }
                }
                else if(subscriptionStartByMonth == today.getMonth()+1 && subscriptionEndByMonth > today.getMonth()+1)
                {
                    for (let i = 0; i < number.length; i++) {
                        if (Number($(number[i]).text()) >= subscriptionStartByDay && $(number[i]).text() <= Number($(".today .number").text()))
                        {
                            $($(number[i]).parent()).attr({"data-bs-target" : "#exampleModalToggle5", "data-bs-toggle" : "modal", "data-bs-dismiss" : "modal"});
                            $($(number[i]).parent()).children('.ImgContainer').children().attr("src", "icons/delivered.png");
                        }
                    }
                }
            }
    
        }

        // set icon preparing & on delivery to the next day...
        function setPreparingIcon() {
            if ($( ".today" ).next().text() != "-") {
                if ($( ".today" ).next().length == 0) {
                    let NextRow = $( ".today" ).parent().next().attr("id");
                    if (today.getHours() > 18) {
                        $($($($(`#${NextRow} .Thursday`)).children()[1]).children()[0]).attr("src", "icons/preparing.png");
                        $(`#${NextRow} .Thursday`).attr({"data-bs-target":"#exampleModalToggle5", "data-bs-toggle":"modal", "data-bs-dismiss":"modal"});
                    }
                    else{
                        $($($($(`#${NextRow} .Thursday`)).children()[1]).children()[0]).attr("src", "icons/on-delivery.png");
                        $(`#${NextRow} .Thursday`).attr({"data-bs-target":"#exampleModalToggle2", "data-bs-toggle":"modal", "data-bs-dismiss":"modal"});
                    }
                } 
                else {
                    if (today.getHours() > 18) {
                        $($($($( ".today" ).next()).children()[1]).children()[0]).attr("src", "icons/preparing.png");
                        $($( ".today" ).next()).attr({"data-bs-target":"#exampleModalToggle5", "data-bs-toggle":"modal", "data-bs-dismiss":"modal"});
                    }
                    else{
                        $($($($( ".today" ).next()).children()[1]).children()[0]).attr("src", "icons/on-delivery.png");
                        $($( ".today" ).next()).attr({"data-bs-target":"#exampleModalToggle2", "data-bs-toggle":"modal", "data-bs-dismiss":"modal"});
                    }
                }
            }
        }

        // set choose icon to next days
        function setChooseIcon() {
            if (subscriptionStartByMonth == today.getMonth()+1) {
                if (subscriptionEndByMonth == today.getMonth()+1) {
                    for (let i = 1; i < days.length; i++) {
                        if ($(days[i]).text() >= subscriptionStartByDay && $(days[i]).text() != "-" && $(days[i]).text() <= subscriptionEndByDay ) {
                            $($(days[i]).siblings().children()[0]).attr("src", "icons/choose.png");
                            $($(days[i]).parent()).attr({"data-bs-target":"#exampleModalToggle2", "data-bs-toggle":"modal", "data-bs-dismiss":"modal"});
                            
                        }
                    }
                } 
                else if(subscriptionEndByMonth > today.getMonth()+1 || subscriptionEndByMonth < today.getMonth()+1){
                    for (let i = 1; i < days.length; i++) {
                        if ($(days[i]).text() >= subscriptionStartByDay && $(days[i]).text() != "-" && $(days[i]).text() <= CurrentDaysInMonth ) {
                            $($(days[i]).siblings().children()[0]).attr("src", "icons/choose.png");
                            $($(days[i]).parent()).attr({"data-bs-target":"#exampleModalToggle2", "data-bs-toggle":"modal", "data-bs-dismiss":"modal"});
                        }
                    }
                }
                setIconToPrevDays("Current")
            } 
            else if(subscriptionStartByMonth < today.getMonth()+1){
                if (subscriptionEndByMonth == today.getMonth()+1) {
                    for (let i = 1; i < days.length; i++) {
                        if ($(days[i]).text() >= 1 && $(days[i]).text() != "-" && $(days[i]).text() <= subscriptionEndByDay ) {
                            $($(days[i]).siblings().children()[0]).attr("src", "icons/choose.png");
                            $($(days[i]).parent()).attr({"data-bs-target":"#exampleModalToggle2", "data-bs-toggle":"modal", "data-bs-dismiss":"modal"});
                        }
                    }
                    setIconToPrevDays("Prev")
                }
                else if(subscriptionEndByMonth > today.getMonth()+1 || subscriptionEndByMonth < today.getMonth()+1){
                    for (let i = 1; i < days.length; i++) {
                        if ($(days[i]).text() >= 1 && $(days[i]).text() != "-" && $(days[i]).text() <= CurrentDaysInMonth ) {
                            $($(days[i]).siblings().children()[0]).attr("src", "icons/choose.png");
                            $($(days[i]).parent()).attr({"data-bs-target":"#exampleModalToggle2", "data-bs-toggle":"modal", "data-bs-dismiss":"modal"});
                        }
                    }
                    setIconToPrevDays("Prev")
                }
            }
        }

        // ***************************** set classes to calendar days *****************************//
        function FridayController(friday) {
            let indexOfFriday = $(friday).index();
            addClassToSpecificDay(week1[indexOfFriday], week2[indexOfFriday], week3[indexOfFriday], week4[indexOfFriday], week5[indexOfFriday], "friday");
        }

        function SaturdayController(Saturday) {
            let indexOfFriday = $(Saturday).index();
            addClassToSpecificDay(week1[indexOfFriday], week2[indexOfFriday], week3[indexOfFriday], week4[indexOfFriday], week5[indexOfFriday], "Saturday");
        }

        function SundayController(Sunday) {
            let indexOfFriday = $(Sunday).index();
            addClassToSpecificDay(week1[indexOfFriday], week2[indexOfFriday], week3[indexOfFriday], week4[indexOfFriday], week5[indexOfFriday], "Sunday");
        }

        function MondayController(Monday) {
            let indexOfFriday = $(Monday).index();
            addClassToSpecificDay(week1[indexOfFriday], week2[indexOfFriday], week3[indexOfFriday], week4[indexOfFriday], week5[indexOfFriday], "Monday");
        }

        function TuesdayController(Tuesday) {
            let indexOfFriday = $(Tuesday).index();
            addClassToSpecificDay(week1[indexOfFriday], week2[indexOfFriday], week3[indexOfFriday], week4[indexOfFriday], week5[indexOfFriday], "Tuesday");
        }

        function WednesdayController(Wednesday) {
            let indexOfFriday = $(Wednesday).index();
            addClassToSpecificDay(week1[indexOfFriday], week2[indexOfFriday], week3[indexOfFriday], week4[indexOfFriday], week5[indexOfFriday], "Wednesday");
        }

        function ThursdayController(Thursday) {
            let indexOfFriday = $(Thursday).index();
            addClassToSpecificDay(week1[indexOfFriday], week2[indexOfFriday], week3[indexOfFriday], week4[indexOfFriday], week5[indexOfFriday], "Thursday");
        }

        function addClassToSpecificDay(week1, week2, week3, week4, week5, className) {
            $(week1).addClass(className);
            $(week2).addClass(className);
            $(week3).addClass(className);
            $(week4).addClass(className);
            $(week5).addClass(className);
        }

        // ***************************** END ICON *****************************//
        // set end of subscription icon
        function setEndIcon() {
            if (subscriptionStartByMonth <= today.getMonth()+1) {
                if (subscriptionEndByMonth == today.getMonth()+1) {
                    for (let i = 0; i < days.length; i++) {
                        if ($(days[i]).text() == subscriptionEndByDay) {
                            $($(days[i+1]).parent()).attr({"data-bs-target":"", "data-bs-dismiss":""});
                            $($($(days[i+1]).parent().children()[1]).children()[0]).attr("src", "icons/end.png");
                        }
                    }
                }
            }
            else{
                $("#exampleModalToggleLabel p").text("Your subscription plan did not start yet!")
            }
        }

        // ***************************** Modal (1) settings *****************************//

        $( document ).ready(function() {
            setDaysInCalendar();
            setCalendarHeader();
            if (today.getMonth()+1 > subscriptionStartByMonth && today.getMonth()+1 > subscriptionEndByMonth) {
                console.log("subscription End")
            }
            else{
                setChooseIcon();
                setEndIcon();
            }
        });

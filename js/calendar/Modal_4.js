// ***************************** Modal (4) settings *****************************//
// incrase & decrease buttons
// every function related with Item number based on how many items in the meal
    function setCounter(btn,input_number) {
                $(btn).click(function(e){
                    e.preventDefault();
                    
                    fieldName = $(this).attr('data-field');
                    type      = $(this).attr('data-type');
                    var input = $(`input${input_number}[name='${fieldName}']`);
                    var currentVal = parseInt(input.val());
                    if (!isNaN(currentVal)) {
                        if(type == 'minus') {
                            
                            if(currentVal > input.attr('min')) {
                                input.val(currentVal - 5).change();
                                if (btn == '.btn-number') {
                                    changeGramsItem1(currentVal - 5)
                                    changeNutritionFactsItem1(((currentVal - 5)/100), "minus")
                                }
                                else if(btn == '.btn-number1'){
                                    changeGramsItem2(currentVal - 5)
                                    changeNutritionFactsItem2(((currentVal - 5)/100), "minus")
                                }
                            } 
                            if(parseInt(input.val()) == input.attr('min')) {
                                $(this).attr('disabled', true);
                            }
                        } 
                        else if(type == 'plus') {
                            if(currentVal < input.attr('max')) {
                                input.val(currentVal + 5).change();
                                if (btn == '.btn-number') {
                                    changeGramsItem1(currentVal + 5)
                                    changeNutritionFactsItem1(((currentVal + 5)/100))
                                }
                                else if(btn == '.btn-number1'){
                                    changeGramsItem2(currentVal + 5)
                                    changeNutritionFactsItem2(((currentVal + 5)/100))
                                }
                            }
                            if(parseInt(input.val()) == input.attr('max')) {
                                $(this).attr('disabled', true);
                            }
                        }
                    } 
                    else {
                        input.val(0);
                    }
                });
                $(input_number).focusin(function(){
                    $(this).data('oldValue', $(this).val());
                });
                $(input_number).change(function() {
                    minValue =  parseInt($(this).attr('min'));
                    maxValue =  parseInt($(this).attr('max'));
                    valueCurrent = parseInt($(this).val());
                    
                    name = $(this).attr('name');
                    if(valueCurrent >= minValue) {
                        $(`${btn}[data-type='minus'][data-field='${name}']`).removeAttr('disabled')
                    } else {
                        // alert('Sorry, the minimum value was reached');
                        $(this).val($(this).data('oldValue'));
                    }
                    if(valueCurrent <= maxValue) {
                        $(`${btn}[data-type='plus'][data-field='${name}']`).removeAttr('disabled')
                    } else {
                        // alert('Sorry, the maximum value was reached');
                        $(this).val($(this).data('oldValue'));
                    }
                });
    }

    function changeGramsItem1(Gram) {
                $('.Meal-item1 span').text(Gram)
    }

    function changeGramsItem2(Gram) {
                $('.Meal-item2 span').text(Gram)
    }
    
    function changeNutritionFactsItem1(percentage) {
                $('.Calories').text( (109*($(".input-number1").val()/100) + (88*percentage)).toFixed(2));
                $('.Protein').text((5*($(".input-number1").val()/100) + (7.5*percentage)).toFixed(2));
                $('.Carbs').text((12*($(".input-number1").val()/100) + (17*percentage)).toFixed(2));
                $('.Fat').text((4.5*($(".input-number1").val()/100) + (1.7*percentage)).toFixed(2));     
    }

    function changeNutritionFactsItem2(percentage) {
                $('.Calories').text((88*($(".input-number").val()/100) + (109*percentage)).toFixed(2));
                $('.Protein').text((7.5*($(".input-number").val()/100) + (5*percentage)).toFixed(2));
                $('.Carbs').text((17*($(".input-number").val()/100) + (12*percentage)).toFixed(2));
                $('.Fat').text((1.7*($(".input-number").val()/100) + (4.5*percentage)).toFixed(2));  
    }

    setCounter('.btn-number','.input-number')
    setCounter('.btn-number1','.input-number1')

    // get clicked day After Click On Pick Meal Button or Confirm Button
    let currentDayTarget = null;
    $('.day').click(function (e){
        currentDayTarget = e.currentTarget;
    })

    // Apply Changes
    $('#exampleModalToggle3 .pick-meal, #exampleModalToggle4 .pick-meal').click(function () {
                if (confirm('Are you sure you want to change your meal?')) {
                    $("#exampleModalToggle3, #exampleModalToggle4").modal('hide');
                    if (currentDayTarget != null) {
                        $($($(currentDayTarget).children()[1]).children()[0]).attr("src", "icons/selected.png")
                        $("#exampleModalToggle").modal('show');
                    }
                } else {
                    console.log('canceled');
                }
    });
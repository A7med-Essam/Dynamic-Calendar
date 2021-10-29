        // ***************************** Modal (3) settings *****************************//
        // model 3 categories toggle
        $("#exampleModalToggle3 .categories .item").click(function (e) {
            if ($(e.target).hasClass("active") == false) {
                // toggle class
                $(e.target).addClass("active");
                $(e.target).siblings().removeClass("active");
                // toggle content based on data attr
                let content = $(`[data-target=${$(e.target).attr('id')}]`)
                $(content).removeClass("d-none");
                $(content).siblings().addClass("d-none");
            }
            // show & hide selected meal icon
            $('#content .item.toggle').removeClass('toggle');
            $("button.pick-meal").attr("disabled","disabled")
        });

        // modal 3 (pick meal) //>
        $('#content .item').click(function (e) {
            $('#content .item.toggle').toggleClass('toggle');
            $(this).toggleClass('toggle');
            $("button.pick-meal").removeAttr("disabled")
        });
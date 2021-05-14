$( document ).ready(function() {

    let amenities = []

    console.log('test');

    $('input:checkbox').change(
        function(){
            if ($(this).is(':checked')) {
                amenities.push($(this).parent().parent().attr("data-id"))
            }
            else
            {
                amenities.pop($(this).parent().parent().attr("data-id"))
            }
            $(".amenities h4").text(amenities)
        });
});

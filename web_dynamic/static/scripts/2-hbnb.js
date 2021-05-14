$( document ).ready(function() {

    let amenities_names = [];
    let amenities_ids = [];

    $('input:checkbox').change(
        function(){
            if ($(this).is(':checked')) {
                let data_id = ($(this).parent().parent().attr("data-id"));
                let name = ($(this).parents('li').attr("data-name"));
                amenities_ids.push(data_id);
                amenities_names.push(name);
            }
            else
            {
                amenities_ids.pop('data-id');
                amenities_names.pop('data-name');
                console.log(amenities_names);
            }
            if (amenities_names.length === 0) {
                $(".amenities h4").html("&nbsp;");
            } else {
                $(".amenities h4").text(amenities_names.join(", "));
            }
        });
});

$(function()
{
	$.get("http://0.0.0.0:5001/api/v1/status/", function(data, textStatus)
	{
        if (data.status === "OK") {
            $(".apistatus").addClass("available")
        }
        else {
            $(".apistatus").removeClass("available")
        }
    });
});
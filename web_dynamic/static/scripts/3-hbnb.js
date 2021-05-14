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
            $.ajax({
                type: 'POST',
                contentType: 'application/json',
                url: 'http://0.0.0.0:5001/api/v1/places_search',
                dataType: 'json',
                data: {'amenities': amenities_ids},
                complete: function (data) {
                    console.log(data);
                }
            })
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


// {% for place in places %}
// 	<article>
// 	  <div class="title_box">
// 	    <h2>{{ place.name }}</h2>
// 	    <div class="price_by_night">${{ place.price_by_night }}</div>
// 	  </div>
// 	  <div class="information">
// 	    <div class="max_guest">{{ place.max_guest }} Guest{% if place.max_guest != 1 %}s{% endif %}</div>
//             <div class="number_rooms">{{ place.number_rooms }} Bedroom{% if place.number_rooms != 1 %}s{% endif %}</div>
//             <div class="number_bathrooms">{{ place.number_bathrooms }} Bathroom{% if place.number_bathrooms != 1 %}s{% endif %}</div>
// 	  </div>
// 	  <div class="user">
//             <b>Owner:</b> {{ place.user.first_name }} {{ place.user.last_name }}
//           </div>
//           <div class="description">
// 	    {{ place.description | safe }}
//           </div>
// 	</article>
// 	{% endfor %} 
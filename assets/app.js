console.log("labas");
$.ajax({
  url: 'https://api.chucknorris.io/jokes/random',
  type: "GET"
})
.done(function(data) {
  console.log(data.value);
  $('#randomJoke').text(data.value);
  $('#jokeIcon').attr('src', data.icon_url);
});

$.ajax({
        url: 'https://api.chucknorris.io/jokes/categories',
        type: 'GET'
    })
    .done(function(data) {
        $.each(data, function(index, data){
            $('ul[name=categories]').append(`<li>${data}</li>`);
        });

        $('ul[name=categories] > li').on('click', function(){
            $.ajax({
                url: `https://api.chucknorris.io/jokes/random?category=${$(this).text()}`,
                type: 'GET',
            })
            .done(function(data) {
                $('#randomJoke').text(data.value);
            })
        });
    })

const form = $('#entryForm');
const list = $('#MovieList');

form.addClass('centerAlign');
// list.addClass('centerAlign');

form.on('submit', function(e){
    e.preventDefault();
    list.append(`<li class="movies">${$('#MovieName').val()} ${$('#MovieRating').val()} stars</li>`);
    
    
})
$('li').append('<button>X</button>');

list.on('click', function(e){
    
    e.target.remove();
})
const form = $('#entryForm');
const list = $('#MovieList');

form.addClass('centerAlign');
// list.addClass('centerAlign');

form.on('submit', function(e){
    e.preventDefault();
    const listItem = $(`<li class="movies">${$('#MovieName').val()} ${$('#MovieRating').val()} stars</li>`);
    const removeButton = $('<button class="remove">X</button>');
    listItem.append(removeButton);
    list.append(listItem);

    
})


list.on('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        e.target.parentNode.remove();
    }
    
})
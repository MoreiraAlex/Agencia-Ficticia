// Filtro dos projetos

$('.filter-btn').on('click', function() {
    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removedClass('active');
    $(this).addClass('active');
})

console.log('teste');
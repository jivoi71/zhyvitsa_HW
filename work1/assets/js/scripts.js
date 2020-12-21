$('.js-open-modal').click(function () {
    let modalName = $(this).attr('data-modal');
    let modal = $('.js-modal[data-modal="' + modalName + '"]');

    modal.addClass('is-show');
    $('.js-overlay').addClass('is-show');
});
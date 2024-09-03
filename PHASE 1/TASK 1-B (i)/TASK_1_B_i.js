$(document).ready(function() {
    $('#photoModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var photoSrc = button.data('photo');
        var modal = $(this);
        modal.find('#modalPhoto').attr('src', photoSrc);
        modal.find('.modal-title').text(button.find('.caption').text());
    });
});

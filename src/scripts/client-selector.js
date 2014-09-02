/* ==================
 * Chaordic Bootstrap
 * ==================
 * Client Selector
 * ==================
 */

$(document)
    // set input focus when selector is opened
    .on('click', '.client-selector > .btn', function() {
        $('.client-selector input').trigger('focus').select();
    })

    // prevent selector from closing on input click
    .on('click', '.client-selector input', function(event) {
        event.stopPropagation();
    })

    // listen for input changes
    .on('keyup', '.client-selector input', function(event) {
        // close dropdown is it's esc key
        if (event.which === 27) {
            $('.client-selector .dropdown-toggle').dropdown('toggle');
            return;
        }

        var query = event.target.value.toLowerCase();

        $(event.target).closest('.dropdown-menu').find('li').each(function(i, element) {
            var jqElement = $(element);

            // prevent from hiding input or divider
            if (jqElement.find('input').size() > 0 || jqElement.hasClass('divider')) {
                return;
            }

            jqElement.toggleClass('hidden', jqElement.text().toLowerCase().indexOf(query) === -1);
        });
    });

/* ==================
 * Chaordic Bootstrap
 * ==================
 * Client Selector
 * ==================
 */

$(document)
    // Add slidedown animation to dropdown
    .on('show.bs.dropdown', '.sidebar-brand', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    })

    // Add slideup animation to dropdown
    .on('hide.bs.dropdown', '.sidebar-brand', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });

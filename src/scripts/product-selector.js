/* ==================
 * Chaordic Bootstrap
 * ==================
 * Client Selector
 * ==================
 */

$(document)
    // Add slidedown animation to dropdown
    .on('show.bs.dropdown', '.sidebar-brand, .product-selector > .btn-group', function() {
        var jqThis = $(this);
        jqThis.addClass('animating').find('.dropdown-menu').first().stop(true, true).slideDown(function() {
            jqThis.removeClass('animating');
        });
    })

    // Add slideup animation to dropdown
    .on('hide.bs.dropdown', '.sidebar-brand, .product-selector > .btn-group', function() {
        var jqThis = $(this);
        jqThis.addClass('animating').find('.dropdown-menu').first().stop(true, true).slideUp(function() {
            jqThis.removeClass('animating');
        });
    });

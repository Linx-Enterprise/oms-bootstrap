/* ==================
 * Chaordic Bootstrap
 * ==================
 * Dropdown
 * ==================
 */

$(document)
    // disable click on dropdown headers
    .on('click', '.dropdown-header, .sidebar-header', function(event) {
        event.stopPropagation();
    });

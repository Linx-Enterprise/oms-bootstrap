/* ==================
 * Chaordic Bootstrap
 * ==================
 * Tree list
 * ==================
 */

$(document)
    // listen for toggler click
    .on('click', '.tree .tree-toggler', function() {
        $(this)
            .toggleClass('open')
            .closest('.tree')
            .toggleClass('open')
            .children('.subtree')
            .toggleClass('open');
    });

(function($) {
  // Function to update the cards' height
  M.resizeStaggeredCards = function() {
    console.log('resizing');
    if ((grids = document.querySelectorAll('.staggered-cards'))) {
      grids.forEach(function(grid) {
        if ((items = grid.querySelectorAll('.item'))) {
          items.forEach(function(item) {
            rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
            rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
            if (item.querySelector('.card-panel, .card')) {
              rowSpan = Math.ceil(
                (item.querySelector('.card-panel, .card').getBoundingClientRect().height + rowGap) /
                  (rowHeight + rowGap)
              );
            }
            item.style.gridRowEnd = 'span ' + rowSpan;
          });
        }
      });
    }
  };

  $(document).ready(function() {
    // Add active if input element has been pre-populated on document ready
    alert(2);

    $(document).ready(function() {
      M.resizeStaggeredCards();
    });

    document.addEventListener('resize', M.resizeStaggeredCards());
  }); // End of $(document).ready
})(cash);

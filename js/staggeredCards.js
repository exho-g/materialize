(function($) {
  // Function to update the cards' height
  M.resizeStaggeredCards = function() {
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

    document.addEventListener('resize', M.resizeStaggeredCards());

    // Add listener to onload of images when using LazyLoad
    try {
      new LazyLoad({
        callback_enter: M.resizeStaggeredCards
      });
    } catch (e) {}
  };
})(cash);

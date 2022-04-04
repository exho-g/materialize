(function ($) {
  // Function to update labels of text fields
  M.resizeStaggeredGrid = function () {
    if (grids = document.querySelectorAll('.staggered-grid')) {
      grids.forEach(function (grid) {
        if (items = grid.querySelectorAll('.item')) {
          items.forEach(function (item) {
            rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
            rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
            if (item.querySelector('.card-panel, .card')) {
              rowSpan = Math.ceil((item.querySelector('.card-panel, .card').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap)) + 1;
            }
            item.style.gridRowEnd = "span " + rowSpan;
          });
        }
      });
    }
  };

  $(document).ready(function () {
    // Add active if input element has been pre-populated on document ready
    $(document).ready(function () {
      M.resizeStaggeredGrid();
    });

    document.addEventListener("resize", M.resizeStaggeredGrid());

    // Add listener to onload of images when using LazyLoad
    try {
      new LazyLoad({
        callback_enter: M.resizeAllGridItems
      });
    } catch (e) {
    }
  }); // End of $(document).ready
})(cash);

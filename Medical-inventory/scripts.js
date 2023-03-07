$(document).ready(function() {
    // Add a click event listener to each row
    $('table tbody tr').click(function() {
      // Get the data from the current row
      var name = $(this).find('td:eq(1)').text();
      var desc = $(this).find('td:eq(2)').text();
      var qty = $(this).find('td:eq(3)').text();
      var price = $(this).find('td:eq(4)').text();
  
      // Create a modal dialog
      var modal = $('<div>').addClass('modal fade');
      var dialog = $('<div>').addClass('modal-dialog modal-dialog-centered');
      var content = $('<div>').addClass('modal-content');
      var header = $('<div>').addClass('modal-header').appendTo(content);
      var title = $('<h5>').addClass('modal-title').text(name).appendTo(header);
      var closeButton = $('<button>').addClass('close').attr('type', 'button').attr('data-dismiss', 'modal').html('&times;').appendTo(header);
      var body = $('<div>').addClass('modal-body').appendTo(content);
      $('<p>').text(desc).appendTo(body);
      var list = $('<ul>').appendTo(body);
      $('<li>').text('Quantity: ' + qty).appendTo(list);
      $('<li>').text('Price: ' + price).appendTo(list);
      var footer = $('<div>').addClass('modal-footer').appendTo(content);
      $('<button>').addClass('btn btn-secondary').attr('type', 'button').attr('data-dismiss', 'modal').text('Close').appendTo(footer);
      $('<button>').addClass('btn btn-primary').attr('type', 'button').text('Add to Cart').appendTo(footer);
  
      // Add the modal dialog to the page
      content.appendTo(dialog);
      dialog.appendTo(modal);
      modal.appendTo('body');
  
      // Show the modal dialog
      modal.modal('show');
    });
  });

  $(document).ready(function() {
    // Define the search input and table rows
    var $searchInput = $('#search-input');
    var $tableRows = $('table tbody tr');
  
    // Add a click event listener to each row
    $tableRows.click(function() {
      // Get the data from the current row...
      // (same as previous code)
    });
  
    // Add a keyup event listener to the search input
    $searchInput.on('keyup', function() {
      // Get the search query from the input field
      var query = $(this).val().toLowerCase();
  
      // Filter the table rows based on the search query
      $tableRows.each(function() {
        var name = $(this).find('td:eq(1)').text().toLowerCase();
        var desc = $(this).find('td:eq(2)').text().toLowerCase();
        var qty = $(this).find('td:eq(3)').text().toLowerCase();
        var price = $(this).find('td:eq(4)').text().toLowerCase();
  
        if (name.indexOf(query) > -1 || desc.indexOf(query) > -1 || qty.indexOf(query) > -1 || price.indexOf(query) > -1) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    });
  });
  
  
//business logic
function Task(input) {
  this.description = input;
}

//ui logic
$(function() {
  var items = 0;
  $('form#task-form').submit(function(event) {
    var input = $('input#add-task').val();
    if (input) {
    var toDoTask = new Task(input);
    items += 1;
    $('#to-do-tasks').prepend('<div class="well task item' + items + '">' + toDoTask.description +
                                '<button class="btn mark-complete item' + items + '">' +
                                '<span class="glyphicon glyphicon-ok"></span>' +
                                '</button>' +
                              '</div>');
    $('form#task-form').trigger('reset');

    $('button.item' + items).click(function() {
      $(this).parent().hide();
    });

  } else {
    alert('Please enter something');
  }
    event.preventDefault();
  });
});

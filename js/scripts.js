//business logic
function Task(input) {
  this.description = input;
}

//ui logic
$(function() {
  var itemCount = 0;
  $('form#task-form').submit(function(event) {
    var input = $('input#add-task').val();
    if (input) {
    var toDoTask = new Task(input);
    itemCount += 1;
    $('div#to-do-tasks').prepend('<div class="well task">' + toDoTask.description +
                                    '<button class="btn mark-complete item' + itemCount + '">' +
                                      '<span class="glyphicon glyphicon-ok"></span>' +
                                    '</button>' +
                                  '</div>');
    $('form#task-form').trigger('reset');

    $('button.item' + itemCount).click(function() {
      $(this).parent().hide();
      $('div#completed-tasks').prepend('<div class="well completed-task">' + toDoTask.description +
                                          '<button class="btn delete">' +
                                            '<span class="glyphicon glyphicon-remove-circle"></span>' +
                                          '</button>' +
                                        '</div>');
        });

  } else {
    alert('Please enter something');
  }
    event.preventDefault();
  });
});

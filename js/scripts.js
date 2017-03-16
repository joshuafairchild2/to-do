//business logic
function Task(description, deadline, importance) {
  this.description = description;
  this.deadline = deadline;
  this.importance = importance;
}

//ui logic
$(function() {
  var itemCount = 0;
  $('form#task-form').submit(function(event) {
    var description = $('input#add-task').val();
    var deadline = $('input#add-deadline').val();
    var importance = parseInt($('select#add-importance').val());
    var toDoTask = new Task(description, deadline, importance);
    console.log(toDoTask);
    itemCount += 1;
    $('div#to-do-tasks').prepend('<div class="well task item' + itemCount + '">' + 'I need to ' + toDoTask.description + ' before ' + toDoTask.deadline +
                                    '<button class="btn mark-complete item' + itemCount + '">' +
                                      '<span class="glyphicon glyphicon-ok"></span>' +
                                    '</button>' +
                                  '</div>');
    if (toDoTask.importance === 1) {
      $('div.item' + itemCount).addClass('yellow-bg');
    } else if (toDoTask.importance === 2) {
      $('div.item' + itemCount).addClass('orange-bg');
    } else if (toDoTask.importance === 3) {
      $('div.item' + itemCount).addClass('red-bg');
    }
    $('form#task-form').trigger('reset');

    $('button.item' + itemCount).click(function() {
      $(this).parent().hide();
      $('div#completed-tasks').prepend('<div class="well completed-task">' + 'I need to ' + toDoTask.description + ' before ' + toDoTask.deadline +
                                          '<button class="btn delete-item">' +
                                            '<span class="glyphicon glyphicon-remove-circle"></span>' +
                                          '</button>' +
                                        '</div>');
    });
    event.preventDefault();
  });
});

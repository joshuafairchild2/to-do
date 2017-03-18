//business logic
//constructor for an object that will contain the information associated with a single 'to-do task'
function Task(description, deadline, importance) {
  this.description = description;
  this.deadline = deadline;
  this.importance = importance;
}

//ui logic
$(function() {
  //initialize variables used to act as a running count of how many 'task-items' or 'completed-tasks' have been created. The number of the variable is used for naming classes, making it easier to target a specific task-item/completeted-task
  var itemCount = 0;
  var completedCount = 0

  $('form#task-form').submit(function(event) {
    event.preventDefault();
    //get the input for each field (when the form is submitted)
    var description = $('input#add-task').val();
    var deadline = $('input#add-deadline').val();
    var importance = parseInt($('select#add-importance').val());

    if (!description || !deadline || !importance) {
      //error message if any field is left blank
      alert('Please fill out all fields');
    } else {
      //store a new Task object inside of var toDoTask and increase the running count of task-items by 1
      var toDoTask = new Task(description, deadline, importance);
      itemCount += 1;

      //insert an html <div> into the DOM containing some of the data (description and deadline) from the new task as well as a button to mark the task as complete
      $('div#to-do-tasks').prepend('<div class="well task item' + itemCount + '">' + 'I need to ' +       toDoTask.description + ' before ' + toDoTask.deadline +
                                      '<button class="btn action-button item' + itemCount + '">' +
                                        '<span class="glyphicon glyphicon-ok"></span>' +
                                      '</button>' +
                                    '</div>');

      //determine what the color scheme of the div will be based on the value of toDoTask.importance and add the corresponding class to the div containing the task-item
      if (toDoTask.importance === 1) {
        $('div.item' + itemCount).addClass('yellow-border');
      } else if (toDoTask.importance === 2) {
        $('div.item' + itemCount).addClass('orange-border');
      } else if (toDoTask.importance === 3) {
        $('div.item' + itemCount).addClass('red-border');
      }

      //clear the form fields and remove placeholder text from tasks area
      $('form#task-form').trigger('reset');
      $('#tasks-header').hide();

      //attach a click event handler to the button inside of the task-item
      $('button.item' + itemCount).click(function() {
        //increase the running count of completed-tasks by 1
        completedCount +=1;

        //hide the task-item of the button that was clicked and insert an html <div> into the DOM (under 'Completed Tasks') containing the same information as the hidden task-item
        $(this).parent().hide();
        $('div#completed-tasks').prepend('<div class="well task completed-task' + completedCount + '">' + 'I need to ' + toDoTask.description + ' before ' + toDoTask.deadline +
                                            '<button class="btn action-button delete-item' + completedCount + '">' +
                                            '<span class="glyphicon glyphicon-remove"></span>' +
                                            '</button>' +
                                          '</div>');

        //hide the line of placeholder text from "Completed Tasks" area
        $('#placeholder').hide();

        //determine what the color scheme of the completed-task div needs to be and add the corresponding class
        if (toDoTask.importance === 1) {
          $('div.completed-task' + completedCount).addClass('yellow-border');
        } else if (toDoTask.importance === 2) {
          $('div.completed-task' + completedCount).addClass('orange-border');
        } else if (toDoTask.importance === 3) {
          $('div.completed-task' + completedCount).addClass('red-border');
        }

        //attach a click event handler to the button inside of each completed-task item
        $('button.delete-item' + completedCount).click(function() {
          //hide the completed-task of the button that was clicked
          $(this).parent().hide();
        });
      });
    }
  });
});

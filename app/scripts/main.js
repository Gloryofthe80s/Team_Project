// ------ TEMPLATES ------

var modalTemplate = _.template($('.composeTemplate').text());

var taskTemplate = _.template($('.printedTask').text());



// ------ DATA HANDLING ------

// the task constructor
function TaskObject(propertyObject) {
    propertyObject =  propertyObject || {};
    this.task = propertyObject.task || 'no task selected';
    this.dueDate = propertyObject.dueDate;
    this.notes = propertyObject.notes;
    this.complete = false;
};

var taskArray = [];

// ------ EVENT HANDLING ------

// bring up task creation dialog box
$(document).ready(function(){
  $('.compose-btn').click(function() {
    $('.shadow-toggle').addClass('active');
    $('body').append(modalTemplate());


    // if cancel is clicked
    $('.cancel-btn').click(function() {
      $('.shadow-toggle').removeClass('active');
      $('.compose-box').remove();
      });

   // create new task
    $('.submit-btn').click(function() {
      $('.shadow-toggle').removeClass('active');

        var input = {
          task: $('#task-input').val(),
          dueDate: $('#due-date-input').val(),
          notes: $('#notes-input').val()
        };

        //var task = new TaskObject(input);
        taskArray.push(new TaskObject(input));

        // sort the array here (optional)

        $('.compose-box').remove();


        // re-add all tasks (so that they're sorted, if sort is implemented)
        
        $('#tasks').html('');

        _.each(taskArray, function(task, index) {
              $('#tasks').append(taskTemplate(task));
        });
    });
  });

  $('#tasks').on('click', '.complete-btn', function() {
    $(this).closest('.printed-task-container').toggleClass('completed');
  });

  $('#tasks').on('click', '.delete-btn', function() {
    $(this).closest('.printed-task-container').remove();
  });

  $('#tasks').on('click','.more-btn', function() {
    $(this).closest('.printed-task-container').toggleClass('expand');
    $(this).closest('.printed-notes').toggleClass('more');
    $(this).siblings().toggleClass('drop-down')
  });

});






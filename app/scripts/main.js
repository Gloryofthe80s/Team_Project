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
    this.uniqueId = _.uniqueId('task_')

};

var taskArray = [];

// ------ EVENT HANDLING ------
$(document).ready(function() {
// bring up task creation dialog box
$('.compose-btn').click(function() {
  $('.shadow-toggle').addClass('active');
  $('body').append(modalTemplate());
  $( "#task-input" ).focus();

    // set default date to today
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;
    $('#due-date-input').val(today);

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
     $(this).closest('.printed-task-container').find('.check').toggleClass('showup');
        console.log('check');
  });

  $('#tasks').on('click', '.delete-btn', function() {
    $(this).closest('.printed-task-container').remove();
    var taskToBeDeleted = _.findWhere(taskArray, {uniqueId : $(this).closest('.printed-task-container').attr('data-uniqueid')});
    _.each(taskArray, function(task, index) {
      if (task.uniqueId == taskToBeDeleted.uniqueId) {
          taskArray.splice(index, 1);
      }  
    });
  });  

  $('#tasks').on('click','.more-btn', function() {
    $(this).closest('.task-btns').toggleClass('drop-down');
    $(this).closest('.printed-task-container').find('.printed-notes').toggleClass('more-notes');
    $(this).closest('.printed-task-container').toggleClass('expand');
  });

});








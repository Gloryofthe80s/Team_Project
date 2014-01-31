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
    this.completed = function(){
        this.complete = true;
    };
};

var taskArray = [];

// ------ EVENT HANDLING ------
// bring up task creation dialog box
$('.compose-btn').click(function() {
  $('.shadow-toggle').addClass('active');
  $('body').append(modalTemplate());

<<<<<<< HEAD
  // create new task
  $('.submit-btn').click(function() {
  $('.shadow-toggle').removeClass('active');

  var input = {
    task: $('.task-input').val(),
    dueDate: $('.due-date-input').val(),
    notes: $('.notes-input').val()
  };

  taskArray.push(new TaskObject(input));

  $('.compose-box').remove();

  _.each(taskArray, function(task, index) {
  $('.container').append(taskTemplate(task));
  });
  

$('.complete').click(function(){
  $(this).parent('.printed-task-container').toggleClass('completed');
});



});
});






=======
    // if cancel is clicked
    $('.cancel-btn').click(function() {
        $('.shadow-toggle').removeClass('active');
        $('.compose-box').remove();
    });

    // create new task
    $('.submit-btn').click(function() {
        $('.shadow-toggle').removeClass('active');

        var input = {
            task: $('.task-input').val(),
            dueDate: $('.due-date-input').val(),
            notes: $('.notes-input').val()
        };

        taskArray.push(new TaskObject(input));

        $('.compose-box').remove();

        _.each(taskArray, function(task, index) {
            $('.container').append(taskTemplate(task));
        });
    });
});




















>>>>>>> 728cc58b2cbbf28b8aef70dc5ce8e0751a8c202e


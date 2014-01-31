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








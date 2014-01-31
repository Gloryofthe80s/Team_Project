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
$('.compose-btn').click(function() {
  $('.shadow-toggle').addClass('active');
  $('body').append(modalTemplate());


  // if cancel is clicked
  $('.cancel-btn').click(function() {
    $('.shadow-toggle').removeClass('active');
    $('.compose-box').remove();
    });

<<<<<<< HEAD
        var input = {
            task: $('#task-input').val(),
            dueDate: $('#due-date-input').val(),
            notes: $('#notes-input').val()
        };
=======
 // create new task
  $('.submit-btn').click(function() {
    $('.shadow-toggle').removeClass('active');
>>>>>>> d088846fab3a05b965713fd5d75dbef47f2d12cf

      var input = {
        task: $('#task-input').val(),
        dueDate: $('#due-date-input').val(),
        notes: $('#notes-input').val()
      };

      taskArray.push(new TaskObject(input));

      $('.compose-box').remove();
       
      _.each(taskArray, function(task, index) {
            if (taskArray[index] == taskArray[taskArray.length - 1]) {
                $('.container').append(taskTemplate(task));
            };
      });    

      $('.complete-btn').click(function(){
        $(this).parent().toggleClass('completed');
      });

      $('.delete-btn').click(function(){
       $(this).parent().remove();
      });

     
    });
  });

 








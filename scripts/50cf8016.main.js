function TaskObject(a){a=a||{},this.task=a.task||"no task selected",this.dueDate=a.dueDate,this.notes=a.notes,this.complete=!1,this.uniqueId=_.uniqueId("task_")}var modalTemplate=_.template($(".composeTemplate").text()),taskTemplate=_.template($(".printedTask").text()),taskArray=[];$(document).ready(function(){$(".compose-btn").click(function(){$(".shadow-toggle").addClass("active"),$("body").append(modalTemplate()),$("#task-input").focus();var a=new Date,b=a.getDate(),c=a.getMonth()+1,d=a.getFullYear();10>c&&(c="0"+c),10>b&&(b="0"+b);var e=d+"-"+c+"-"+b;$("#due-date-input").val(e),$(".cancel-btn").click(function(){$(".shadow-toggle").removeClass("active"),$(".compose-box").remove()}),$(".submit-btn").click(function(){$(".shadow-toggle").removeClass("active");var a={task:$("#task-input").val(),dueDate:$("#due-date-input").val(),notes:$("#notes-input").val()};taskArray.push(new TaskObject(a)),$(".compose-box").remove(),$("#tasks").html(""),_.each(taskArray,function(a){$("#tasks").append(taskTemplate(a))})})}),$("#tasks").on("click",".complete-btn",function(){$(this).closest(".printed-task-container").toggleClass("completed"),$(this).closest(".printed-task-container").find(".check").toggleClass("showup"),console.log("check")}),$("#tasks").on("click",".delete-btn",function(){$(this).closest(".printed-task-container").remove();var a=_.findWhere(taskArray,{uniqueId:$(this).closest(".printed-task-container").attr("data-uniqueid")});_.each(taskArray,function(b,c){b.uniqueId==a.uniqueId&&taskArray.splice(c,1)})}),$("#tasks").on("click",".more-btn",function(){$(this).closest(".task-btns").toggleClass("drop-down"),$(this).closest(".printed-task-container").find(".printed-notes").toggleClass("more-notes"),$(this).closest(".printed-task-container").toggleClass("expand")})});
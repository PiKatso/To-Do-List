// Buisness Logic
  function toDoList(name, items) {
    this.choreName = name;
    this.taskItems = items;
  }

  var createList = function(array) {
    array.forEach(function(item){
      $(".chore-output ul").append(`<li class="listed-task">${item}</li>`);
      $(".chore-output ul li").last().click(function() {
          $(this).toggleClass("done");
      });
    });
  };

  var userTaskArray = [];
// User Interface Logic
$(document).ready(function(){

  $("button[name=task-items]").click(function() {
    var userChoreItem = $("input[name=task]").val();
    $(".task-output").append(`<li>${userChoreItem}</li>`);

    return userTaskArray.push(userChoreItem);
  });


  $("form").submit(function(event) {
    event.preventDefault();
    var userChoreName = $("input[name=chore-name]").val();
    var newChore = new toDoList(userChoreName, userTaskArray);

    $(".task-output").empty();
    $(".chore-output h3").text(newChore.choreName);
    createList(userTaskArray);

    return userTaskArray = [];
  });

  $(".chore-output h3").click(function() {
    $(".chore-output").toggleClass("done");
  });




});

$(document).ready(() => {
  $("#add-btn").click(() => {
    let task = $("#task-bar").val();
    let desc = $("#task-desc").val();
    if (task === "" || desc === "") {
      alert("Please enter task and description.");
      return;
    }
    $("#task-bar").val("");
    $("#task-desc").val("");
    let taskbar = `<div class="taskbox">
        <div>
        <p class="task-name">${task}</p>
        <p class="task-desc">${desc}</p>
        </div>
        <div>
        <button id=btn-delete>❌</button>
        <button id=btn-done>✅</button>
        </div>
        </div>`;
    $(".task-items").append(taskbar);

    $(".task-items").on("click", "#btn-delete", function () {
      $(this).closest(".taskbox").remove();
    });

    $(".task-items").on("click", "#btn-done", function () {
      $(this).closest(".taskbox").remove();
      alert("Task is done");
    });
  });
});

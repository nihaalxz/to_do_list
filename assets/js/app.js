$(document).ready(() => {
    $(".task-list").hide();
    $("#add-btn").click(() => {
        let task = $("#task-bar").val();
        let desc = $("#task-desc").val();
        if(task===""||desc==="")
        {
            alert("Please enter details")
            return;
        }
        
        $("#task-id").text(task);
        $("#desc-id").text(desc);
        $(".task-list").show();
        
    })
    
    $("#btn-delete").click(() => {
        $(".task-list").remove();
    });

    $("#btn-done").click(() => {
        $(".task-list").remove();
        alert("Task done!");
    })

});

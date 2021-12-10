$(document).ready(function() {
    $("#sendMessage").click(fucntion () {
        var message = $("#inputArea").val();
        
        if (message == "")
            {
                return;
            }
        
        else if (message.startsWith("!play ") == 0)
            {
                continue;
            }
        
        else
            {
                $.ajax({
                    type: "POST",
                    url: "chatbox.php",
                    data: {message: message},
                    success: function(response) {
                        message = response;
                        //Call function to play music in iframe
                    }
                });
            }
        
        $("#displayChat").append(message);
    });
}
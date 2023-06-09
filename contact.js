$('#loader').hide();
$("#sentMessage").on('submit',(function(e) {
    e.preventDefault();
   alert("okay now");
    var name = $("#userName").val();
     $.ajax({
            url: "contact.php",
            type: "POST",
            data:  new FormData(this),
            contentType: false,
                  cache: false,
            processData:false,
            beforeSend : function()
            {
              $('#loader').show();
            },
            success: function(data)
              {
            if(data=='invalid')
            {
            // invalid file format.
              //$("#err").html("Invalid File !").fadeIn();
            }
            else
            {
              // //view uploaded file.
              //$("#preview").html(data).fadeIn();
              //$('#form').each(function() { this.reset() });
            $('#MessageSuccess').html("<div class='alert alert-success'>");
                $('#MessageSuccess> .alert-success').html("<button type='button' id='buttonclose' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                $('#MessageSuccess > .alert-success')
                        .append(`<strong>${name}, your Message has been sent successfully. </strong>`);
                $('#MessageSuccess > .alert-success')
                        .append('</div>');
                $('#sentMessage').trigger("reset");
               //  $(".custom-file-label").removeClass("selected").html('Upload file');
             //alert('Uploaded file successfully');
            }
              },
              error: function(e) 
              {
                $('#MessageSuccess').html("<div class='alert alert-danger'>");
                $('#MessageSuccess > .alert-danger').html("<button type='button' class='close' data-dismiss='#success' aria-hidden='true'>&times;")
                        .append("</button>");
                $('#MessageSuccess > .alert-danger').append($("<strong>").text("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"));
                $('#MessageSuccess > .alert-danger').append('</div>');
                $('#sentMessage').trigger("reset");
               // $(".custom-file-label").removeClass("selected").html('Upload file');
                $("#sendMessageButton").removeClass("selected");
               // alert('errrrrrrrrrror');
              },
              
              
    //           success: function () {
    //             $('#success').html("<div class='alert alert-success'>");
    //             $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
    //                     .append("</button>");
    //             $('#success > .alert-success')
    //                     .append("<strong>Your message has been sent. </strong>");
    //             $('#success > .alert-success')
    //                     .append('</div>');
    //             $('#form').trigger("reset");
    //         },
    //         error: function () {
    //             $('#success').html("<div class='alert alert-danger'>");
    //             $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
    //                     .append("</button>");
    //             $('#success > .alert-danger').append($("<strong>").text("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"));
    //             $('#success > .alert-danger').append('</div>');
    //             $('#form').trigger("reset");
    //         },
            complete: function () {
                $('#loader').hide();
                $("#sendMessageButton").removeClass("selected");
            }
       });
       $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
        });

    }));
    $('#name').focus(function () {
      $('#MessageSuccess').html('');
  });
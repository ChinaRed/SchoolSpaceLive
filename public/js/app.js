$(function () {
  cycleText();

  // validates form fields
  $("#userForm").validate({
    rules: {
      name: {
        required: true
      },
      phone: {
        required: true,
        phoneUS: true
      },
      email: {
        required: true
      }
    },
    // submits form if all fields are valid
    submitHandler: function submitContact(){
      var name, phone, email, message;
      name=$('#name').val();
      phone=$('#phone').val();
      email=$('#email').val();
      message=$('#message').val();
      
      $.get("http://localhost:3000/send", {
        name:name,
        phone:phone,
        email:email,
        message:message
      }, function (data) {
        if(data == "sent"){
          console.log('success!');
        }
      });
    }
  });
});

function cycleText(){
  var activityList = [
    "Meeting",
    "Group Tutoring",
    "Business Seminar",
    "Group Consultation",
    "Real Estate Class",
    "Group Meetup",
    "Dance Practice"
  ];

  var iconList = [
    "public/assets/images/meeting.png",
    "public/assets/images/tutor.png",
    "public/assets/images/seminar.png",
    "public/assets/images/consultation.png",
    "public/assets/images/realestate.png",
    "public/assets/images/meetup.png",
    "public/assets/images/dance.png",
  ];

  var activity = $("#activity");
  var hero_icon= $(".hero_icon");
  var i = 0;
  var j = 0;

  setInterval(function () {
    //set text for to change each activity
    hero_icon.css("background-image", "url('" + iconList[j++] + "')");

    activity.text(activityList[i++]);
    //set the background of hero div to change 
    //corresponding to activity
    //if activity equals the length of activity list 
    //return to zero
    if (i == activityList.length) i = 0;
    if (j == iconList.length) j = 0;
  }, 6000);
}

// function submitContact () {
//   var name, phone, email, message;
//   $('.submit').click(function () {
//     name=$('#name').val();
//     phone=$('#phone').val();
//     email=$('#email').val();
//     message=$('#message').val();
    
//     $.get("http://localhost:3000/send", {
//       name:name,
//       phone:phone,
//       email:email,
//       message:message
//     }, function (data) {
//       if(data == "sent"){
//        console.log('success!');
//       }
//     });
//   });
// }


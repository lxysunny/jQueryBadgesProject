$(function() {
  $.ajax({
  url:'https://www.codeschool.com/users/2113335.json',
  dataType: 'jsonp',
  success: function(response) {
    //console.log('response', response.courses.in_progress);
    addCourses(response.courses.in_progress);
  }
});

  function addCourses(courses) {
    var $badges = $('#badges');
    courses.forEach(function(course) {
        var $course = $('<div />', {
          'class':'course'
        }).appendTo($badges);

        $('<h3 />', {
          text: course.title
        }).appendTo($course);

        $('<img />', {
          src: course.badge
        }).appendTo($course);

        $('<a />', {
          class: 'btn btn-primary',
          target: '_blank',
          herf: course.url,
          text: 'See Course'
        }).appendTo($course);
    })
  }
});

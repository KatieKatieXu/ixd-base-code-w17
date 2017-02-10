var courses = require('../data.json').courses;

exports.show = function(req, res) {
  var len = courses.length;
  var course;
  for (var i = 0; i < len; i++) {
    if (courses[i].id === req.params.id) {
      course = courses[i];
      break;
    }
  }

  if (course) {
    res.render('course', course);
  } else {
    res.render('course');
  }
};

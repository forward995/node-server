const Course = require('../models/courses')

const courseAdd = (req, res) => {
    let course = new Course(req.body)
    course.save()
        .then((course) => {
            return res.status(200).json(course)
        })
        .catch(() => {
            return res.status(400).json('Faild')
        })
}

const getCourses = (req, res) => {
    Course.find(function(err, courses) {
        if(err) {
            return res.json(err);
        }
        else {
            return res.json(courses);
        }
    })
}

const editCourse = (req, res) => {
    let id = req.params.id
    Course.findById(id, function(err, course){
        if(err) {
            return res.json(err)
        }
        else {
            return res.json(course)
        }
    })
}

const updateCourse = (req, res) => {
    Course.findById(req.params.id, function(err, course){
        if(!course) {
            return res.status(400).send('faild')
        }
        else {
            course.courseName = req.body.courseName
            course.description = req.body.description
            course.save().then((course) => {
                return res.json(course)
            })
            .catch(() => {
                return res.status(400).send("unable to update the database")
            })
        }
    })
}

const deleteCourse = (req, res) => {
    Course.findByIdAndRemove({_id: req.params.id}, function(err) {
        if(err)
            return res.json(err)
        else 
            return res.json('Successfully removed')
    })
}

module.exports = {
    courseAdd,
    getCourses,
    editCourse,
    updateCourse,
    deleteCourse
}
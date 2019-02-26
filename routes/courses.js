const express = require('express')
const courseCtrl = require('../controllers/courseCtrl')

const router = express.Router()

router.route('/api/courseAdd')
    .post(courseCtrl.courseAdd)

router.route('/api/courses')
    .get(courseCtrl.getCourses)

router.route('/api/editCourse/:id')
    .get(courseCtrl.editCourse)

router.route('/api/updateCourse/:id')
    .post(courseCtrl.updateCourse)

router.route('/api/deleteCourse/:id')
    .delete(courseCtrl.deleteCourse)

module.exports = router
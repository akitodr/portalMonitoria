/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route';

Route.resource('/campuses', 'CampusesController').apiOnly();
Route.get('/campuses/:id/schools', 'CampusesController.getSchools');

Route.resource('/schools', 'SchoolsController').apiOnly();
Route.get('/schools/:id/courses', 'SchoolsController.getCourses');
Route.post('/schools/:id/add-course', 'SchoolsController.addCourse');
Route.post('/schools/:id/delete-course', 'SchoolsController.deleteCourse');

Route.resource('/courses', 'CoursesController').apiOnly();
Route.resource('/students', 'StudentsController').apiOnly();
Route.post('/students/import', 'StudentsController.import');

Route.resource('/teachers', 'TeachersController').apiOnly();
Route.post('/teachers/import', 'TeachersController.import');

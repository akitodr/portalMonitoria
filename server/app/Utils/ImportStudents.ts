import { DateTime } from 'luxon';
import Student from 'App/Models/Student';
import Course from 'App/Models/Course';
import School from 'App/Models/School';
import xlsx from 'xlsx';

export default async function importStudent(filePath: string) {
  const workbook = xlsx.readFile(filePath, { cellDates: true });

  const workspace = workbook.Sheets[workbook.SheetNames[0]];

  const data = xlsx.utils.sheet_to_json(workspace, {
    header: 1,
    blankrows: false,
  });

  for (let index = 1; index < data.length; index++) {
    let [
      project,
      start_date,
      name,
      cpf,
      birth_date,
      phone,
      email,
      institutionalEmail,
      school,
      course,
      status,
      type,
      cr,
      cv,
      number_class,
      number_extraclass,
      service_type,
      discipline,
      teacher,
    ] = data[index];

    console.log('Old course:' + course);

    project = project.trim();
    name = name
      .trim()
      .toLowerCase()
      .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
    cpf = cpf.toString().trim().replace(/\./g, '').replace('-', '');
    console.log('CPF: ' + cpf);
    phone = phone.toString().trim();
    console.log('Telefone: ' + phone);
    email = email.trim().toLowerCase();
    institutionalEmail = institutionalEmail.trim().toLowerCase();
    school = school
      .trim()
      .toLowerCase()
      .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
    course = course
      .trim()
      .toLowerCase()
      //replacing non-break space (160) to normal space (32)
      .replace(/\u00A0/g, ' ')
      .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
    status = status
      .trim()
      .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
    type = type.trim();
    service_type = service_type.trim();
    discipline = discipline.trim();
    teacher = teacher
      .trim()
      .toLowerCase()
      .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));

    console.log('New course:' + course);
    //console.log(project, name, cpf, phone, email, institutionalEmail, school, course, status, type, service_type, discipline, teacher);

    const courseTest = await Course.query()
      .where('name', 'ilike', course)
      .first();
    const courseId = courseTest!.id;
    const schoolTest = await School.query()
      .where('name', 'ilike', school)
      .first();
    const schoolId = schoolTest!.id;

    await Student.create({
      name,
      cpf,
      birthDate: DateTime.fromJSDate(birth_date),
      phone,
      email,
      institutionalEmail,
      status,
      schoolId,
      courseId,
    });
  }
}

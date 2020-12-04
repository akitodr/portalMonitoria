import Discipline from 'App/Models/Discipline';
import xlsx from 'xlsx';

export default async function importProjects(filePath: string) {
  const workbook = xlsx.readFile(filePath, { cellDates: true });

  const workspace = workbook.Sheets[workbook.SheetNames[2]];

  const data = xlsx.utils.sheet_to_json(workspace, {
    header: 1,
    blankrows: false,
  });

  for (let index = 0; index < data.length; index++) {
    let [project, discipline, code, ch] = data[index];

    project = project.toString().toUpperCase().trim();
    discipline = discipline
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
    code = code.toString().toUpperCase().trim();
    ch === null ? ch = '' : ch = ch.toString().toLowerCase().trim();

    await Discipline.create({
      name: discipline,
      code,
      hours: ch,
    });
  }
}

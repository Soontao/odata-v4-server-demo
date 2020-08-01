import { BaseODataModel, ODataColumn, ODataModel, ODataNavigation } from '@odata/server';
import { Class } from './Class';
import { Student } from './Student';

@ODataModel()
export class RelStudentClassAssignment extends BaseODataModel {

  @ODataColumn({ primary: true, generated: 'uuid' })
  uuid: string;

  @ODataColumn()
  studentId: number;

  @ODataColumn()
  classId: number;

  @ODataNavigation({ entity: () => Student, foreignKey: 'studentId', type: 'ManyToOne' })
  student: Student;

  @ODataNavigation({ entity: () => Class, foreignKey: 'classId', type: 'ManyToOne' })
  clazz: Class;

}

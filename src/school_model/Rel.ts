import { IncKeyProperty, ODataModel, ODataNavigation, Property } from '@odata/server';
import { Class } from './Class';
import { Student } from './Student';

@ODataModel()
export class RelStudentClassAssignment {

  @IncKeyProperty()
  uuid: number;

  @Property()
  studentId: number;

  @Property()
  classId: number;

  @ODataNavigation({ entity: () => Student, foreignKey: 'studentId', type: 'ManyToOne' })
  student: Student;

  @ODataNavigation({ entity: () => Class, foreignKey: 'classId', type: 'ManyToOne' })
  clazz: Class;

}

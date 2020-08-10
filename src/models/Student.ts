import { BaseODataModel, ODataColumn, ODataModel, ODataNavigation } from '@odata/server';
import { RelStudentClassAssignment } from './Rel';

@ODataModel()
export class Student extends BaseODataModel {

  // generated id
  @ODataColumn({ primary: true, generated: 'increment' })
  id: number;

  @ODataColumn()
  name: string;

  @ODataColumn({ nullable: true })
  age: number;

  @ODataNavigation({ type: 'OneToMany', entity: () => RelStudentClassAssignment, targetForeignKey: 'studentId' })
  classes: any;

}

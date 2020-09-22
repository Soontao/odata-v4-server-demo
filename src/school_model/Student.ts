import { IncKeyProperty, ODataModel, ODataNavigation, OptionalProperty, Property } from '@odata/server';
import { RelStudentClassAssignment } from './Rel';

@ODataModel()
export class Student {

  // generated id
  @IncKeyProperty()
  sid: number;

  @Property()
  name: string;

  @OptionalProperty()
  age: number;

  @ODataNavigation({ type: 'OneToMany', entity: () => RelStudentClassAssignment, targetForeignKey: 'studentId' })
  classes: any;

}

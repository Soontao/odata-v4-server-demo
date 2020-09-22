import { IncKeyProperty, ODataModel, ODataNavigation, OptionalProperty, Property, withEntitySetName } from '@odata/server';
import { RelStudentClassAssignment } from './Rel';
import { Teacher } from './Teacher';

// indicate the entity set name for entity
@withEntitySetName('Classes')
@ODataModel()
export class Class {

  @IncKeyProperty()
  cid: number;

  @Property()
  name: string;

  @Property()
  desc: string

  @OptionalProperty()
  teacherOneId: number;

  @ODataNavigation({ type: 'ManyToOne', entity: () => Teacher, foreignKey: 'teacherOneId' })
  teacher: any;

  // GET http://localhost:50000/Classes?$expand=students($expand=student)
  @ODataNavigation({ type: 'OneToMany', entity: () => RelStudentClassAssignment, targetForeignKey: 'classId' })
  students: any;

}

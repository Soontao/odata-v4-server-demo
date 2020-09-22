import { IncKeyProperty, ODataModel, ODataNavigation, Property } from '@odata/server';
import { Teacher } from '.';

@ODataModel()
export class Profile {

  @IncKeyProperty()
  id: number;

  @Property()
  title: string;

  @ODataNavigation({ type: 'OneToOne', entity: () => Teacher, targetForeignKey: 'profileId' })
  teacher: Teacher;

}

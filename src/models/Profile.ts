import { BaseODataModel, ODataColumn, ODataModel, ODataNavigation } from '@odata/server';
import { Teacher } from '.';

@ODataModel()
export class Profile extends BaseODataModel {

  @ODataColumn({ primary: true, generated: 'increment' })
  id: number;

  @ODataColumn()
  title: string;

  @ODataNavigation({ type: 'OneToOne', entity: () => Teacher, targetForeignKey: 'profileId' })
  teacher: Teacher;

}

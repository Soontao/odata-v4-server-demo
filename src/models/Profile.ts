import { BaseODataModel, ODataColumn, ODataModel } from '@odata/server';

@ODataModel()
export class Profile extends BaseODataModel {

  @ODataColumn({ primary: true, generated: 'increment' })
  id: number;

  @ODataColumn()
  title: string;

}

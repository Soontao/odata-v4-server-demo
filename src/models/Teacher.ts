import { BaseODataModel, Edm, odata, ODataAction, ODataColumn, ODataHttpContext, ODataModel, ODataNavigation, ResourceNotFoundError } from '@odata/server';
import { isUndefined } from 'util';
import { Class } from './Class';
import { Profile } from './Profile';

@ODataModel()
export class Teacher extends BaseODataModel {

  @ODataColumn({ primary: true, generated: 'increment' })
  id: number;

  @ODataColumn()
  name: string;

  @ODataColumn({ nullable: true })
  profileId: number;

  @ODataNavigation({ type: 'OneToOne', entity: () => Profile, foreignKey: 'profileId' })
  profile: Profile;

  @ODataNavigation({ type: 'OneToMany', entity: () => Class, foreignKey: 'teacherOneId' })
  classes: Class[];

  // POST http://localhost:50000/Teachers(1)/Default.addClass
  // {
  //  "classId": 1
  // }
  @ODataAction
  async addClass(@Edm.Int32 classId: number, @odata.context ctx: ODataHttpContext) {
    const classService = this._gerService(Class);
    const c = await classService.findOne(classId, ctx);

    if (isUndefined(c)) {
      throw new ResourceNotFoundError(`not found instance class[${classId}]`);
    }
    c.teacherOneId = this.id;

    await classService.save(c.id, c, ctx); // save with hooks lifecycle, suggested
    // await c.save() // save to DB directly
  }

  // GET http://localhost:50000/Teachers(1)/Default.queryClass()
  @Edm.Function(Edm.Collection(Edm.String))
  async queryClass(@odata.context ctx) {
    const qr = await this._getQueryRunner(ctx);
    // run native SQL query
    const items = await qr.query(`select name from class where teacherOneId = :id`, [this.id]);
    return items.map((item) => item.name);
  }

}

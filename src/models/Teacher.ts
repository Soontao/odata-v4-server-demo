import { BaseODataModel, Edm, odata, ODataAction, ODataColumn, ODataFunction, ODataModel, ODataNavigation, ResourceNotFoundError, TransactionContext } from '@odata/server';
import { isUndefined } from 'util';
import { Class } from './Class';
import { Profile } from './Profile';

class Response {
  @Edm.Decimal
  outNumber: number;
  @Edm.String
  outString: string;
}

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

  @ODataNavigation({ type: 'OneToMany', entity: () => Class, targetForeignKey: 'teacherOneId' })
  classes: Class[];

  // POST http://localhost:50000/Teachers(1)/Default.addClass
  // {
  //  "classId": 1
  // }
  @ODataAction
  async addClass(@Edm.Int32 classId: number, @odata.txContext ctx: TransactionContext): Promise<void> {
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
  @ODataFunction(Edm.Collection(Edm.String))
  async queryClass(@odata.txContext ctx: TransactionContext): Promise<string> {
    const qr = await this._getQueryRunner(ctx);
    // run native SQL query
    const items = await qr.query(`select name from class where teacherOneId = :id`, [this.id]);
    return items.map((item) => item.name);
  }

  @ODataFunction(Edm.ComplexType(Response))
  async echo(inNumber: number, inString: string): Promise<any> {
    return {
      outNumber: inNumber,
      outString: inString
    };
  }

}

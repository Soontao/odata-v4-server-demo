import { ODataNavigation, ODataColumn, ODataModel, BaseODataModel } from "@odata/server";
import { Class } from "./Class";
import { Profile } from "./Profile";

@ODataModel()
export class Teacher extends BaseODataModel {

    @ODataColumn({ primary: true, generated: "increment" })
    id: number;

    @ODataColumn()
    name: string;

    @ODataNavigation({ type: "OneToOne", entity: () => Profile, foreignKey: "profileId" })
    profile: Profile;

    @ODataColumn()
    profileId: number;

    @ODataNavigation({ type: 'OneToMany', entity: () => Class, foreignKey: "teacherOneId" })
    classes: Class[]

}
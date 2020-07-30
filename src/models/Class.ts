import { ODataModel, BaseODataModel, ODataColumn, ODataNavigation } from "@odata/server";
import { Teacher } from "./Teacher";

@ODataModel()
export class Class extends BaseODataModel {

    @ODataColumn({ primary: true, generated: "increment" })
    id: number;

    @ODataColumn()
    name: string;

    @ODataColumn()
    desc: string

    @ODataNavigation({ type: 'ManyToOne', entity: () => Teacher, foreignKey: "teacherOneId" })
    teacher: any

    @ODataColumn()
    teacherOneId: number;

}
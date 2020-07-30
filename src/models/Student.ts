import { ODataModel, BaseODataModel, ODataColumn } from "@odata/server";

@ODataModel()
export class Student extends BaseODataModel {

    // generated id
    @ODataColumn({ primary: true, generated: "increment" })
    id: number;

    @ODataColumn()
    name: string;

    @ODataColumn()
    age: number;

}





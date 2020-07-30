import { ODataModel, BaseODataModel, ODataColumn } from "@odata/server";

@ODataModel()
export class Profile extends BaseODataModel {

    @ODataColumn({ primary: true, generated: "increment" })
    id: number;

}
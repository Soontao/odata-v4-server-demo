import {
    ODataModel, ODataNavigation,
    OptionalProperty,
    UUIDKeyProperty,
    withEntitySetName
} from '@odata/server';
import { Proposal } from './Proposal';

// indicate the entity set name for entity
@withEntitySetName('Providers')
@ODataModel()
export class Provider {

    @UUIDKeyProperty()
    id: string;

    @OptionalProperty()
    name: string;

    @OptionalProperty({ length: 13 })
    tax_number: string;

    @ODataNavigation({ type: 'OneToMany', entity: () => Proposal, targetForeignKey: 'providerId' })
    proposals: Proposal[];
}
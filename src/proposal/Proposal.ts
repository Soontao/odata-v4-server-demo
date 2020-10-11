import {
    BaseODataModel, ODataModel,
    ODataNavigation, OptionalProperty, UUIDKeyProperty, withEntitySetName
} from '@odata/server';
import { Provider } from './Provider';

// indicate the entity set name for entity
@withEntitySetName('Proposals')
@ODataModel()
export class Proposal extends BaseODataModel {

    @UUIDKeyProperty()
    id: string;

    @OptionalProperty({ charset: "Utf8", length: 72 })
    name: string;

    @OptionalProperty({ enum: ["high", "medium-high", "medium", "medium-low", "low"] })
    voltage_level: string;

    @OptionalProperty({ enum: ["blank", "profiles", "controlled", "time-series"] })
    consumer_profile: string;

    @OptionalProperty({ type: "decimal", precision: 12, scale: 2 })
    energy_fee: string;

    @OptionalProperty({ type: "boolean", default: false })
    funds: boolean;

    @OptionalProperty({ type: "boolean", default: false })
    nogaranty: boolean;

    @OptionalProperty({ type: "boolean", default: false })
    garanty: boolean;

    @OptionalProperty({ type: "boolean", default: false })
    discounts: boolean;

    @OptionalProperty({ type: "boolean", default: false })
    green: boolean;

    @OptionalProperty({ type: "boolean", default: false })
    domastic: boolean;

    @OptionalProperty({ type: "boolean", default: false })
    loyalty: boolean;

    @OptionalProperty({ type: "boolean", default: false })
    online: boolean;

    @OptionalProperty({ type: "boolean", default: false })
    yearly: boolean;

    @OptionalProperty({ type: "boolean", default: false })
    co2: boolean;

    @OptionalProperty({ type: "date" })
    start_date: string;

    @OptionalProperty({ type: "date" })
    end_date: string;

    @OptionalProperty({ default: true })
    isPublic: boolean;

    @OptionalProperty({ type: "uuid" })
    providerId: string;

    @ODataNavigation({ type: 'ManyToOne', entity: () => Provider, foreignKey: 'providerId' })
    provider: Provider;

}
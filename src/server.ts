import { createTypedODataServer } from '@odata/server';
import 'reflect-metadata';
import { ProposalEntities } from './proposal';
import { SchoolEntities } from './school_model';


const run = async () => {

    const server = await createTypedODataServer({
        name: 'default',
        type: 'sqljs',
        synchronize: true,
        logging: true,
        cache: true,
        entities: [...SchoolEntities, ...ProposalEntities]
    });

    const s = server.create(parseInt(process.env.PORT) || 50000);

    s.once(
        'listening',
        () => console.log(`server started at ${s.address()['address']}:${s.address()['port']}`)
    );

};

if (require.main == module) {
    run().catch(console.error);
}

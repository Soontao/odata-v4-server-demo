import { createTypedODataServer } from '@odata/server';
import express from "express";
import 'reflect-metadata';
import { ProposalEntities } from './proposal';
import { SchoolEntities } from './school_model';

const run = async () => {

    const port = parseInt(process.env.PORT || '50000', 10);

    const server = await createTypedODataServer({
        name: 'default',
        type: 'sqljs',
        synchronize: true,
        logging: true,
        cache: true,
        entities: [...SchoolEntities, ...ProposalEntities]
    });

    const app = express();

    app.set('trust proxy', true);

    app.use(server.create());

    app.listen(port, () => {
        console.log(`server started at ${port}`);
    });

};

if (require.main == module) {
    run().catch(console.error);
}

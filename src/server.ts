import { createTypedODataServer } from '@odata/server';
import 'reflect-metadata';
import { Class, Profile, Student, Teacher } from './models';


const run = async () => {

    const entities = [Student, Class, Teacher, Profile];

    const server = await createTypedODataServer({
        name: 'default',
        type: 'sqljs',
        synchronize: true,
        logging: true,
        cache: true,
        entities
    }, ...entities);

    const s = server.create(parseInt(process.env.PORT) || 50000);

    s.once(
        'listening',
        () => console.log(`server started at ${s.address()['port']}`)
    );

};

if (require.main == module) {
    run();
}

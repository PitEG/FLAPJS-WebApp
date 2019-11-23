import { uuid } from '@flapjs/util/MathHelper';

export const SERVICE_LIST_SYMBOL = Symbol('serviceList');

class ModuleHandler
{
    constructor() {}

    prepareSessionForModule(session, currentModule)
    {
        if (!currentModule) return;
        
        session.sessionID = uuid();
        session.sessionName = 'Untitled';
        session.moduleID = currentModule.id;
        session.module = currentModule;

        if (typeof currentModule.preload === 'function')
        {
            currentModule.preload(session);
        }

        const serviceList = session[SERVICE_LIST_SYMBOL] = [];

        if ('services' in currentModule)
        {
            const services = currentModule.services;
            if (Array.isArray(services))
            {
                for(const service of services)
                {
                    const instance = session[service.SERVICE_KEY] = new (service)();
                    serviceList.push(instance);
                }
            }
            else if (typeof services === 'function')
            {
                const instance = session[services.SERVICE_KEY] = new (services)();
                serviceList.push(instance);
            }
        }
        
        if (typeof currentModule.load === 'function')
        {
            currentModule.load(session);
        }

        // Load services...
        // NOTE: This is used as a forward iterator :P (to match the reverse iterator)
        if (serviceList.length > 0) serviceList.reduce((prev, current) => current.load(session), serviceList[0]);
    }

    didMountSession(sessionProvider)
    {
        const serviceList = sessionProvider.state[SERVICE_LIST_SYMBOL];

        // Mount services...
        // NOTE: This is used as a forward iterator :P (to match the reverse iterator)
        if (serviceList.length > 0) serviceList.reduce((prev, current) => current.mount(sessionProvider), serviceList[0]);
    }

    willUnmountSession(sessionProvider)
    {
        const serviceList = sessionProvider.state[SERVICE_LIST_SYMBOL];

        // Unmount services...
        // NOTE: This is used as a reverse iterator :P
        if (serviceList.length > 0) serviceList.reduceRight((prev, current) => current.unmount(sessionProvider), serviceList[serviceList.length - 1]);
    }

    destroySession(session)
    {
        const serviceList = session[SERVICE_LIST_SYMBOL];

        // Unload services...
        // NOTE: This is used as a reverse iterator :P
        if (serviceList.length > 0) serviceList.reduceRight((prev, current) => current.unload(session), serviceList[serviceList.length - 1]);
        serviceList.length = 0;
    }
}

export default ModuleHandler;
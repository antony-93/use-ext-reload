import server from './server';
import websocket from './websocket';
import watchDirectorys from './watchdirectorys';
import { Application } from 'express';
import yargs from './yargs';
import useExtConfig from './use-ext.config';

export default async (app: Application) => {
    const { paths } = useExtConfig(),
        { args } = await yargs(),
        { create, onServerListening, getPort } = await server(app),    
        newServer = create(args.log as boolean),
        wss = await websocket(newServer);

    watchDirectorys(paths, wss, args['browser-reload'] as boolean);

    newServer.listen(await getPort(args.port as number), () => {
        onServerListening(newServer)
    });
};
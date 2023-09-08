import { omelop } from 'omelop';
import { preload } from './preload';
import * as fs from 'fs';
import * as tls from 'tls';
import * as path from 'path';

/**
 *  替换全局Promise
 *  自动解析sourcemap
 *  捕获全局错误
 */
preload();

/**
 * Init app for client.
 */
let app = omelop.createApp();
app.set('name', 'omelop-example');

const sslKeyPath = './config/server.key';
const sslCertPath = './config/server.crt';

function readCertsSync() {
    return {
        key: fs.readFileSync(sslKeyPath),
        cert: fs.readFileSync(sslCertPath)
    }
}

// app configuration
app.configure('production|development', 'connector', function () {
    const sslOpt: tls.SecureContextOptions = readCertsSync();
    app.set('connectorConfig',
        {
            connector: omelop.connectors.hybridconnector,
            heartbeat: 3,
            useDict: true,
            useProtobuf: true,
            ssl: sslOpt,
            sslWatcher: (cb) => {
                fs.watch(sslKeyPath, () => {
                    cb(readCertsSync());
                });
            }
        });
});

// start app
app.start();


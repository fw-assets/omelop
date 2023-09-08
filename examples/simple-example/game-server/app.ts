import { omelop } from 'omelop';
import { preload } from './preload';
import { createBasePlugin } from 'omelop-base-plugin';

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

// app configuration
app.configure('production|development', 'connector', function () {
    app.set('connectorConfig',
        {
            connector: omelop.connectors.hybridconnector,
            heartbeat: 3,
            useDict: true,
            useProtobuf: true
        });
});

// 载入测试的组件
app.use(createBasePlugin());

// start app
app.start();


/**
 * Created by 35031 on 2016/11/13.
 */
var connect=require('connect');
connect()
    .use(logger)
    .use(restrictFileAccess)
    .use(serverStaticFiles)
    .use(hello);
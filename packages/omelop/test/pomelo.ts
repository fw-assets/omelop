let omelop = require('../lib/index').omelop;
import * as should from 'should';
let mockBase = process.cwd() + '/test';
// import { describe, it } from "mocha-typescript"

describe('omelop', function () {
  describe('#createApp', function () {
    it('should create and get app, be the same instance', function (done: MochaDone) {
      let app = omelop.createApp({ base: mockBase });
      should.exist(app);

      let app2 = omelop.app;
      should.exist(app2);
      should.strictEqual(app, app2);
      done();
    });
  });
});

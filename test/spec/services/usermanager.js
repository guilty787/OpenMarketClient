'use strict';

describe('Service: UserManager', function () {

  // load the service's module
  beforeEach(module('openMarketClientApp'));

  // instantiate service
  var UserManager;
  beforeEach(inject(function (_UserManager_) {
    UserManager = _UserManager_;
  }));

  it('should do something', function () {
    expect(!!UserManager).toBe(true);
  });

});

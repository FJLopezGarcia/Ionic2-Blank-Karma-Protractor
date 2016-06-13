
describe('MyApp', () => {

  beforeEach(() => {
    browser.get('http://localhost:8100');
    browser.waitForAngular();
  });

  // Passing test
  it('should have a title called home', () => {
    var title = browser.getTitle();
    expect(title).toEqual('Home');
  });

  // Failing test
  it('should fail', () => {
    var title = browser.getTitle();
    expect(title).toEqual('THIS WILL FAIL');
  });

});

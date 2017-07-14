import { RyanairTestPage } from './app.po';

describe('ryanair-test App', () => {
  let page: RyanairTestPage;

  beforeEach(() => {
    page = new RyanairTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

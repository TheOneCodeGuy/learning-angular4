import { LearnPage } from './app.po';

describe('learn App', () => {
  let page: LearnPage;

  beforeEach(() => {
    page = new LearnPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

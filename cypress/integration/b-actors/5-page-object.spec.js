/// <reference types="cypress" />

import { AboutPage } from "../../support/pages/about-page";

describe('GIVEN the "about"  page ', () => {
  let aboutPage;
  beforeEach(() => {
    aboutPage = new AboutPage();
  })
  context('WHEN I visit it  ', () => {
    beforeEach(() => {

    });
    it('THEN should display "About" as the title ', () => {
      aboutPage.getTitle().should('contain', 'About');
    });
  });
});


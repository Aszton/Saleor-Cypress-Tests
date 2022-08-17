import { userAccountSelectors } from "./selectors/userAccountSelectors";

Cypress.Commands.add("isUserLoginCorrectly", () => {
      cy.get(userAccountSelectors.ordersTab).should('be.visible');
      cy.title().should("eq", "Dashboard | Saleor e-commerce");
});
import { loginSelectors } from "./selectors/loginSelectors";
import { userAccountSelectors } from "./selectors/userAccountSelectors";

      Cypress.Commands.add("openLoginPage", () => {
            cy.visit("/");
            cy.title().should("eq", "Saleor e-commerce");
      });

      Cypress.Commands.add("fillLoginInputs", (email, password) => {
            cy.get(loginSelectors.emailInput).clear().type(email).should("have.value", email);
            cy.get(loginSelectors.passwordInput).clear().type(password).should("have.value", password);
      });

      Cypress.Commands.add("clickSignInButton", () => {
            cy.get(loginSelectors.signInButton).click()
            cy.on('uncaught:exception', (err, runnable) => {
                  return false })
      });
      Cypress.Commands.add("isUserLoginCorrectly", () => {
            cy.get(userAccountSelectors.ordersTab).should('be.visible');
            cy.title().should("eq", "Dashboard | Saleor e-commerce");
      });

      Cypress.Commands.add("isLoginErrorMessageDisplayed", () => {
            cy.get(loginSelectors.errorLogin)
            .should("have.text", "Sorry, your username and/or password are incorrect. Please try again.")
      });
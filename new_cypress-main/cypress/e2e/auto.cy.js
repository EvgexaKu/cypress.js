describe('Проверка авторизации', function () {

    beforeEach('Начало теста', function () {
         cy.visit('https://login.qa.studio/')}); //зашел на сайт

         it('аторизация', function () { //1)
         cy.get('#mail').type('german@dolnikov.ru'); //ввел логин   
         cy.get('#pass').type('iLoveqastudio1'); // ввел пароль
         cy.get('#loginButton').click(); // нажал кнопку
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверил текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверил крестик
         cy.get('#exitMessageButton > .exitIcon').click()}) // кликнул на крестик

         it('Восстановление пароля', function () { //2
         cy.get('#forgotEmailButton').click(); // нажал забыли пароль
         cy.get('#mailForgot').type('german@dolnikov.ru'); // ввел почту
         cy.get('#restoreEmailButton').click(); // кликнул на кнопку
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверил текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверил крестик
         cy.get('#exitMessageButton > .exitIcon').click()}) // кликнул на крестик
     
         it('Логин верный пароль неверный', function () { //3
         cy.get('#mail').type('german@dolnikov.ru'); //ввел логин   
         cy.get('#pass').type('iLoveqastudio8'); // ввел пароль
         cy.get('#loginButton').click(); // нажал кнопку
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверил текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверил крестик
         cy.get('#exitMessageButton > .exitIcon').click()}) // кликнул на крестик
       
         it('Логин неверный пароль верный ', function () { //4
         cy.get('#mail').type('german@dooljnikov.ru'); //ввел логин неверный
         cy.get('#pass').type('iLoveqastudio8'); // ввел пароль
         cy.get('#loginButton').click(); // нажал кнопку
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверил текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверил крестик
         cy.get('#exitMessageButton > .exitIcon').click()}) // кликнул на крестик
       
         it('Логин без @ пароль верный ', function () { //5
         cy.get('#mail').type('germandolnikov.ru'); //ввел логин без @
         cy.get('#pass').type('iLoveqastudio1'); // ввел пароль
         cy.get('#loginButton').click(); // нажал кнопку 
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверил текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверил крестик
         cy.get('#exitMessageButton > .exitIcon').click()}) // кликнул на крестик

         it('Проверка логина на строчные буквы ', function () { //5
         cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввел логин 
         cy.get('#pass').type('iLoveqastudio1'); // ввел пароль
         cy.get('#loginButton').click(); // нажал кнопку 
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверил текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверил крестик
         cy.get('#exitMessageButton > .exitIcon').click()}) // кликнул на крестик
      
 }) 

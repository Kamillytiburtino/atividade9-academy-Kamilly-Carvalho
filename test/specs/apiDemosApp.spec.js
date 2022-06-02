describe("Verifica fluxo App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE;", () => {
    before(async () => await driver.launchApp());

    it("deve existir botão app", async () => {
        const visibilidade = await $('android=new UiSelector().text("App").className("android.widget.TextView")').isDisplayed();
        
        expect(visibilidade).toBe(true);
    });

    it("deve ir para a tela App ao clicar no botão", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        const visibilidade = await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').isDisplayed();

        expect(visibilidade).toBe(true);
    });

    it("deve existir botão Alert Dialogs", async () => {
        const visibilidade = await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').isDisplayed();

        expect(visibilidade).toBe(true);
    });

    it("deve ir para a tela Alert Dialogs ao clicar no botão", async () => {
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        const visibilidade = await $('android=new UiSelector().text("App/Alert Dialogs").className("android.widget.TextView")').isDisplayed();

        expect(visibilidade).toBe(true);
    });

    it("deve exibir Alert ao clicar no botão CANCEL DIALOG WITH MESSAGE ", async () => {
        await $("id=two_buttons").click()
        const visibilidade = await $('android=new UiSelector().textContains("Lorem ipsum dolo").className("android.widget.TextView")').isDisplayed()
    
        expect(visibilidade).toBe(true);
    });

    after(async () => await driver.closeApp());
});


describe("Verifica fluxo App/Alert Dialogs/LIST DIALOG", () => {
    before(async () => await driver.launchApp());

    it("deve existir botão app", async () => {
        await driver.launchApp();

        const visibilidade = await $('android=new UiSelector().text("App").className("android.widget.TextView")').isDisplayed();
        
        expect(visibilidade).toBe(true);
    });

    it("deve ir para a tela App ao clicar no botão", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        const visibilidade = await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').isDisplayed();

        expect(visibilidade).toBe(true);
    });

    it("deve existir botão Alert Dialogs", async () => {
        const visibilidade = await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').isDisplayed();

        expect(visibilidade).toBe(true);
    });

    it("deve ir para a tela Alert Dialogs ao clicar no botão", async () => {
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        const visibilidade = await $('android=new UiSelector().text("App/Alert Dialogs").className("android.widget.TextView")').isDisplayed();

        expect(visibilidade).toBe(true);
    });

    it("deve exibir Alert ao clicar no botão LIST DIALOG ", async () => {
        await $("id=select_button").click();
        const visibilidade = await $('android=new UiSelector().text("Header title").className("android.widget.TextView")').isDisplayed();
    
        expect(visibilidade).toBe(true);
    });

    after(async () => await driver.closeApp());
});


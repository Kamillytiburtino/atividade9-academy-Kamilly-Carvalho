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

describe("Verifica fluxo  App/Fragment/Hide and Show", () => {
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

    it("deve clicar no botão Fragment", async () => {
        const visibilidade = await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').isDisplayed();
        await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
        expect(visibilidade).toBe(true);
    });

  
    it("deve clicar em  Hide and Show ", async () => {
        const visibilidade = await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').isDisplayed();
        await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();

        expect(visibilidade).toBe(true);
    });

    it("deve ir para a tela Hide and Show", async () => {
        await $("id=android:id/action_bar").click();
        const visibilidade = await $('android=new UiSelector().text("App/Fragment/Hide and Show").className("android.widget.TextView")').isDisplayed();

        expect(visibilidade).toBe(true);
    });


    after(async () => await driver.closeApp());
});

describe("Verifica fluxo  App/Action Bar/Display options/DISPLAY_HOME_AS_UP", () => {
    before(async () => await driver.launchApp());

    it("deve existir botão app", async () => {
       const visibilidade = await $('android=new UiSelector().text("App").className("android.widget.TextView")').isDisplayed();
        
        expect(visibilidade).toBe(true);
    });

    it("deve ir para a tela App ao clicar no botão", async () => {
        const visibilidade = await $('android=new UiSelector().text("App").className("android.widget.TextView")').isDisplayed();
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();

        expect(visibilidade).toBe(true);
    });

    it("deve clicar no botão Action Bar", async () => {
        const visibilidade = await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').isDisplayed();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        expect(visibilidade).toBe(true);
    });

  
    it("deve clicar em Display options", async () => {
        const visibilidade = await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').isDisplayed();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        
        expect(visibilidade).toBe(true);
    });


    it("deve verificar a opção DISPLAY_HOME_AS_UP", async () => {
        const visibilidade = await $('android=new UiSelector().text("App/Action Bar/Display Options").className("android.widget.TextView")').isDisplayed();
        await $("id=io.appium.android.apis:id/toggle_home_as_up").click();
        expect(visibilidade).toBe(true);
    });

    after(async () => await driver.closeApp());
});

describe("Verifica fluxo  App/Action Bar/Display options/DISPLAY_SHOW_TITLE", () => {
    before(async () => await driver.launchApp());

    it("deve existir botão app", async () => {
        const visibilidade = await $('android=new UiSelector().text("App").className("android.widget.TextView")').isDisplayed();
        
        expect(visibilidade).toBe(true);
    });

    it("deve ir para a tela App ao clicar no botão", async () => {
        const visibilidade = await $('android=new UiSelector().text("App").className("android.widget.TextView")').isDisplayed();
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();

        expect(visibilidade).toBe(true);
    });

    it("deve clicar no botão Action Bar", async () => {
        const visibilidade = await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').isDisplayed();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        expect(visibilidade).toBe(true);
    });

  
    it("deve clicar em Display options", async () => {
        const visibilidade = await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').isDisplayed();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        
        expect(visibilidade).toBe(true);
    });


    it("deve verificar a opção DISPLAY_SHOW_TITLE", async () => {
        const visibilidade = await $('android=new UiSelector().text("App/Action Bar/Display Options").className("android.widget.TextView")').isDisplayed();
        await $("id=io.appium.android.apis:id/toggle_show_title").click();
        expect(visibilidade).toBe(true);
    });

    after(async () => await driver.closeApp());
});

describe("Verifica fluxo  App/Action Bar/Display options/DISPLAY_SHOW_CUSTOM", () => {
    before(async () => await driver.launchApp());

    it("deve existir botão app", async () => {
        const visibilidade = await $('android=new UiSelector().text("App").className("android.widget.TextView")').isDisplayed();
        
        expect(visibilidade).toBe(true);
    });

    it("deve ir para a tela App ao clicar no botão", async () => {
        const visibilidade = await $('android=new UiSelector().text("App").className("android.widget.TextView")').isDisplayed();
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();

        expect(visibilidade).toBe(true);
    });

    it("deve clicar no botão Action Bar", async () => {
        const visibilidade = await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').isDisplayed();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        expect(visibilidade).toBe(true);
    });

  
    it("deve clicar em Display options", async () => {
        const visibilidade = await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').isDisplayed();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        
        expect(visibilidade).toBe(true);
    });


    it("deve verificar a opção DISPLAY_SHOW_CUSTOM", async () => {
        const visibilidade = await $('android=new UiSelector().text("App/Action Bar/Display Options").className("android.widget.TextView")').isDisplayed();
        await $("id=io.appium.android.apis:id/toggle_show_custom").click();
        expect(visibilidade).toBe(true);
    });

    after(async () => await driver.closeApp());
});

describe("Verifica fluxo  App/Action Bar/Display options/DISPLAY_SHOW_NAVIGATION", () => {
    before(async () => await driver.launchApp());

    it("deve existir botão app", async () => {
        const visibilidade = await $('android=new UiSelector().text("App").className("android.widget.TextView")').isDisplayed();
        
        expect(visibilidade).toBe(true);
    });

    it("deve ir para a tela App ao clicar no botão", async () => {
        const visibilidade = await $('android=new UiSelector().text("App").className("android.widget.TextView")').isDisplayed();
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();

        expect(visibilidade).toBe(true);
    });

    it("deve clicar no botão Action Bar", async () => {
        const visibilidade = await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').isDisplayed();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        expect(visibilidade).toBe(true);
    });

  
    it("deve clicar em Display options", async () => {
        const visibilidade = await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').isDisplayed();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        
        expect(visibilidade).toBe(true);
    });


    it("deve verificar a opção DISPLAY_SHOW_NAVIGATION", async () => {
        const visibilidade = await $('android=new UiSelector().text("App/Action Bar/Display Options").className("android.widget.TextView")').isDisplayed();
        await $("id=io.appium.android.apis:id/toggle_navigation").click();
        expect(visibilidade).toBe(true);
    });

    after(async () => await driver.closeApp());
});
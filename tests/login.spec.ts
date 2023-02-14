import { test, expect } from 'fixtures/loginfixture';

test.describe.only('Login Page Tests', () => {
    const STANDARD_USER = 'standard_user';
    const LOCKED_OUT_USER = 'locked_out_user';
    const PROBLEM_USER = 'problem_user';
    const PERFORMANCE_GLITCH_USER = 'performance_glitch_user';
    const PASSWORD = 'secret_sauce';

    const USERERRORMSG = 'Epic sadface: Username is required';
    const PASSWORDERRORMSG = 'Epic sadface: Password is required';
    const BADUSER = 'Epic sadface: Username and password do not match any user in this service'

    test('should verify page loaded', async ({_login}) => {
    
        const USERNAMEFIELD =  await _login.isUsernameFieldPresent();
        const PASSWORDFIELD =  await _login.isPasswordFieldPresent();
        const LOGINBUTTON = await _login.isLoginButtonPresent()

        expect(USERNAMEFIELD).toBe(true);
        expect(PASSWORDFIELD).toBe(true);
        expect(LOGINBUTTON).toBe(true);
    });

    test('should test empty username and password', async ({_login}) => {
        await _login.setUsernameAndPassword("", "");
        await _login.clickLoginButton();

        const ERRORMSG = await _login.errorMessage();
        expect(ERRORMSG).toContain(USERERRORMSG)
    });

    test('Should test empty Username', async ({_login}) => {
        await _login.setUsernameAndPassword("",PASSWORD);
        await _login.clickLoginButton();

        const ERRORMSG = await _login.errorMessage();
        expect(ERRORMSG).toContain(USERERRORMSG);

    });

    test('Should test empty Password', async ({_login}) => {
        await _login.setUsernameAndPassword(STANDARD_USER,"");
        await _login.clickLoginButton();

        const ERRORMSG = await _login.errorMessage();
        expect(ERRORMSG).toContain(PASSWORDERRORMSG);

    });

    test('Should test bad Username and Password', async ({_login}) => {
        
        await _login.setUsernameAndPassword("bad_user_name","bad_password");
        await _login.clickLoginButton();

        const ERRORMSG = await _login.errorMessage();
        expect(ERRORMSG).toContain(BADUSER);

    });

    test('Should test bad Username', async ({_login}) => {
        
        await _login.setUsernameAndPassword("bad_user_name",PASSWORD);
        await _login.clickLoginButton();

        const ERRORMSG = await _login.errorMessage();
        expect(ERRORMSG).toContain(BADUSER);

    });

    test('Should test bad Password', async ({_login}) => {
        
        await _login.setUsernameAndPassword(STANDARD_USER,"bad_password");
        await _login.clickLoginButton();

        const ERRORMSG = await _login.errorMessage();
        expect(ERRORMSG).toContain(BADUSER);

    });

    test('Should test Valid Login', async ({_login}) => {
        
        await _login.setUsernameAndPassword(STANDARD_USER, PASSWORD);
        await _login.clickLoginButton();
        const LOGINCHECK = await _login.isLogedIn();

        expect(LOGINCHECK).toBe(true);

    })
});
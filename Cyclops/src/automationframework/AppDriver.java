package automationframework;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;

public class AppDriver 
{
    public static WebDriver getDriver(String browserType)
    {
        // TODO: Get browser driver based on browser type specified.
//        WebDriver driver = new FirefoxDriver();
//        System.setProperty("webdriver.chrome.driver", "src\\lib\\chromedriver.exe");
        WebDriver driver = new PhantomJSDriver();
//        driver.manage().window().maximize();
//        driver.get(Configuration.applicationUnderTestURL());
        return driver;
    }

    public static void clearBrowserContext(WebDriver driver)
    {
        if (driver != null)
        {
            driver.manage().deleteAllCookies();
            driver.quit();
        }
    }
}

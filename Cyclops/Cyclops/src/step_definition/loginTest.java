package step_definition;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import driverInitialize.driverInitialize;
import Utilities.*;

public class loginTest {
		
	static driverInitialize d = new driverInitialize();
	static WebDriver driver = d.driverInit();
	
	@Given("^I have the permission to Cyclops as an Agent through Phalanx$")
	public void valid_agent_id() throws Exception
	{
		try
		{
			
			String url = settings.cyclops_url();
			driver.get(url);
		}
		catch (Exception e)
		{
			throw e;
		}
	}

	@When("^I navigate to cyclops' login url$")
	public void login_url() throws Exception 
	{
		try
		{
			if(pageObjects.callDisposition.fcd_text(driver).isDisplayed())
			{
				pageObjects.callDisposition.call_dispose_slider(driver).click();
		    	pageObjects.callDisposition.call_dispose_option(driver).click();
		    	pageObjects.callDisposition.apply_button(driver).click();
		    	System.out.println("Forced Call Disposition value set");
		    }
		    else
		    {
		    	System.out.println("Forced Call Disposition page not found");
		    }
		}
		catch (Exception e)
		{
			throw e;
		}
	}

	@Then("^I should be able to view Cyclops' Home Page$")
	public void cyclops_home() throws Exception
	{
		WebDriverWait wait = new WebDriverWait(driver, 60);
		try
		{ 
			wait.until(ExpectedConditions.titleContains("Home"));
			if(pageObjects.homePage.txt_breadcrumb(driver).getText().contains("Home"))
		    {

				Writer writer = new BufferedWriter(new OutputStreamWriter(
				          new FileOutputStream("C:\\Users\\sandra\\Desktop\\CyclopsPageSource\\homepage.txt"), "utf-8"));
				    writer.write(driver.getPageSource());
		    	System.out.println("Test Case has passed");
		    }
		    else
		    {
		    	System.out.println("Test Case has failed");
		    }
			driver.quit();
		}
		catch (Exception e)
		{
			throw e;
		}	
	}
	
	
}

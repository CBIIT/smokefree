<?php

use Drupal\DrupalExtension\Context\RawDrupalContext;
use Behat\Behat\Context\SnippetAcceptingContext;
use Behat\Gherkin\Node\PyStringNode;
use Behat\Gherkin\Node\TableNode;
use Behat\Behat\Tester\Exception\PendingException;

use Behat\Behat\Context\ClosuredContextInterface;
use	Behat\Behat\Context\TranslatedContextInterface;
use	Behat\Behat\Context\BehatContext;
use Behat\MinkExtension\Context\MinkContext;

use Behat\Gherkin\Parser;
use Behat\MinkExtension\Context\RawMinkContext;
use	Behat\Behat\Hook\Scope\AfterScenarioScope;
use Behat\Behat\Hook\Scope\BeforeScenarioScope;




/**
 * Defines application features from the specific context.
 */
class FeatureContext extends RawDrupalContext implements SnippetAcceptingContext {

  /**
   * Initializes context.
   *
   * Every scenario gets its own context instance.
   * You can also pass arbitrary arguments to the
   * context constructor through behat.yml.
   */
  public function __construct() {
  }

	/**
	 * @Given a user :arg1 with password :arg2
	 */
	public function aUserWithPassword($arg1, $arg2)
	{
		throw new PendingException();
	}


	/**
	 * @BeforeStep ~@javascript
	 */
	public function beforeStep($event)
	{
		$username = variable_get('behat_ui_http_user', '');
		$password = variable_get('behat_ui_http_password', '');
		if (!empty($username) && !empty($password)) {
			$this->getSession()->getDriver()->setBasicAuth($username, $password);
		}
	}

	/**
	 * @When I login as :arg1 with password :arg2
	 */
	public function iLoginAsWithPassword($arg1, $arg2)
	{
		throw new PendingException();
	}

	/**
	 * @Then it shoudl display :arg1
	 */
	public function itShoudlDisplay($arg1)
	{
		throw new PendingException();
	}

	/**
	 * @Then I should see the login form
	 */
	public function iShouldSeeTheLoginForm()
	{
		throw new PendingException();
	}


	/**
	 * @Then I should see :arg1 in :arg2 block
	 */
	public function iShouldSeeInBlock2($arg1, $arg2)
	{
		throw new PendingException();
	}



	/**
	 * @Then I should be able to edit :arg1 ( content)
	 */
	public function iShouldBeAbleToEditContent($arg1)
	{
		throw new PendingException();
	}


	/**
	 * Authenticates a user with password from configuration.
	 *
	 * @Given /^I am logged in as the "([^"]*)"$/
	 */
	public function iAmLoggedInAsUser($username) {
		$password = $this->fetchPassword('drupal', $username);
		$this->iAmLoggedInAsWithThePassword($username, $password);
	}

	/**
	 * @Then I should not see the :arg1
	 */
	public function iShouldNotSeeThe($arg1)
	{
		throw new PendingException();
	}

	/**
	 * @Then I should see :arg1 link
	 */
	public function iShouldSeeLink($arg1)
	{
		throw new PendingException();
	}


	/**
	 * @Given I visit a file embed form
	 */
	public function iVisitAFileEmbedForm()
	{
		throw new PendingException();
	}

	/**
	 * @Then the selected view mode should be original
	 */
	public function theSelectedViewModeShouldBeOriginal()
	{
		throw new PendingException();
	}
}

<?php

use PHPUnit\Framework\TestCase;

include 'MCDoublePost.php';


class IcfTextSignupTests extends TestCase {

  /**
   * A MCDoublePost object.
   *
   * @var object
   */
  private $mCDoublePost;

  /**
   * A full webform remote post payload.
   *
   * @var array
   */
  private $payload;

  /**
   * A correctly modified payload.
   *
   * @var array
   */
  private $modified_payload;

  /**
   * A webform remote post target.
   *
   * @var array
   */
  private $target;

  /**
   * Creates a MCDoublePost object to work with.
   */
  public function setup() {
    $this->modified_payload = array(
      'person_phone' => '555-555-5555',
      'opt_in_path' => 'ervr455vrev'
    );
    $this->target = array(
      'url' => 'secure.mcommons.com/join'
    );

    $this->mCDoublePost = $this->getMockBuilder(MCDoublePost::class)
      ->setConstructorArgs(array($this->modified_payload, $this->target))
      ->setmethods(array('make_request', 'make_watchdog_warning', 'get_current_node'))
      ->getMock();
  }

  /**
   * Tests that drupal_http_request is made once.
   */
  public function testIcfiTxtSignupSendInitialPostRunsDrupalHttpRequest() {
    $request_result = new stdClass;
    $request_result->code = 200;
    $this->mCDoublePost->expects($this->once())->method('make_request')
      ->will($this->returnValue($request_result));
    $this->assertEquals('200', $this->mCDoublePost->icfi_txt_signup_send_initial_post($this->modified_payload));
  }

  /**
   * Data provider for testIcfiTxtSignupSendInitialPostReturnsCorrectCodes.
   *
   * @return array
   *    Status code -> expected result should always be the same.
   */
  public function txtSignupDataProvider() {
    return array(
      array(200, 200),
      array(500, 500),
      array(403, 403),
      array(301, 301),
      array(0, 0)
    );
  }

  /**
   * @dataProvider txtSignupDataProvider
   *
   * Tests that whatever code is given by drupal_http_request is returned.
   */
  public function testIcfiTxtSignupSendInitialPostReturnsCorrectCodes($status_code, $expected_result) {
    $request_result = new stdClass;
    $request_result->code = $status_code;
    $this->mCDoublePost->expects($this->any())->method('make_request')
      ->will($this->returnValue($request_result));
    $this->assertEquals($expected_result, $this->mCDoublePost->icfi_txt_signup_send_initial_post($this->modified_payload));
  }

  /**
   * Data provider for testLogErrorNeverCallsWatchdogAndReturnsFalseWhenNoError
   *
   * @return array
   *    Array of acceptable responses that should not generate error message.
   */
  public function noLogWhenNoError() {
    return array(
      array(200),
      array(301),
      array(302),
      array(307)
    );
  }

  /**
   * @dataProvider noLogWhenNoError
   *
   * When the status code is OK or redirect, no watchdog warning issued.
   */
  public function testLogErrorNeverCallsWatchdogAndReturnsFalseWhenNoError($response_code) {
    $this->mCDoublePost->expects($this->never())->method('make_watchdog_warning');
    $this->assertFalse($this->mCDoublePost->log_error($response_code, $this->target));
  }

  public function testLogErrorCallsWatchdogAndReturnsTrueWhenError() {
    $response_code = 403;
    $this->mCDoublePost->expects($this->once())->method('make_watchdog_warning')
    ->will($this->returnValue(NULL));
    $this->assertTrue($this->mCDoublePost->log_error($response_code, $this->target));
  }
}
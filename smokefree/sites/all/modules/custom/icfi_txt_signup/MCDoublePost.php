<?php

Class MCDoublePost {

  /**
   * The form values to post- should just be opt-in code and phone.
   *
   * @var array
   */
  protected $payload;

  /**
   * Webform remote post target.
   *
   * @var array
   */
  protected $target;

  /**
   * MCDoublePost constructor.
   *
   * @param array $payload
   *    Values posted in text signup form.
   *
   * @param array $target
   *    Webform remote post target array; must include URL at minimum.
   */
  function __construct($payload, $target) {
    $this->payload = $payload;
    $this->target = $target;
  }

  /**
   * Posts a form payload to a target URL.
   *
   * This is copied directly from the webform_remote_post.module file and uses
   * the webform remote post API to make an initial post to mobile commons with
   * JUST the phone number and opt-in code. This is to correct a bug on the
   * reporting end per Kiran Muppidi.
   *
   * @param array $modified_payload
   *    The form values to post- should just be opt-in code and phone.
   *
   * @return integer
   *    Response code received from mobile commons.
   */
  public function icfi_txt_signup_send_initial_post($modified_payload) {

    // JSON Encode the payload.
    $post_data = json_encode($modified_payload);

    $drupal_http_request_options = array(
      'method' => 'POST',
      'data' => $post_data,
      'timeout' => 15,
      'headers' => array('Content-Type' => 'application/json', 'Accept' => '*/*'),
    );

    $request = $this->make_request($this->target['url'], $drupal_http_request_options);

    watchdog('webform_remote_post', 'Debug : %node_title', array('%node_title' => $request), WATCHDOG_INFO, NULL);


    // Log any errors.
    $this->log_error($request->code, $this->target['url']);

    return $request->code;
  }

  /**
   * Wrapper function for making drupal_http_request.
   *
   * @param string $url
   *    Mobile commons URL to which to post the data.
   *
   * @param array $options
   *    Options including method, data, timeout, and headers.
   *
   * @return object
   *    The request option.
   */
  public function make_request($url, $options) {
    return drupal_http_request($url, $options);
  }

  /**
   * Wrapper function for making watchdog warning entry.
   *
   * @param string $log_msg
   *    paramaterized string.
   * @param integer $nid
   *    NID of the text signup form.
   * @param integer $response_code
   *    Response code returned by mobile commons.
   * @param string $url
   *    Mobile commons text signup URL.
   */
  public function make_watchdog_warning($log_msg, $nid, $response_code, $url) {
    watchdog(
      'webform_remote_post',
      $log_msg,
      array(
        '%id'   => $nid,
        '%url'  => $url,
        '%code' => $response_code,
      ),
      WATCHDOG_WARNING);
  }

  /**
   * Returns current node ID or else 0;
   *
   * @return int
   *    node id from menu_get_object or 0.
   */
  public function get_current_node() {
    if ($node = menu_get_object()) {
      if (isset($node->id)) {
        return $node->id;
      }
    }
    return 0;
  }

  /**
   * @param $response_code
   *    Response code received from mobile commons.
   *
   * @param $url
   *    Target URL.
   *
   * @return bool
   *    Whether a message was logged. True if response was unsuccessful code.
   */
  public function log_error($response_code, $url) {
    // Acceptable server response codes.
    $benign_reponse_codes = array('200', '301', '302', '307');
    if (!in_array($response_code, $benign_reponse_codes)) {
      $nid = $this->get_current_node();
      $log_msg = 'An INITIAL remote post to %url by webform node ID %id returned a \'%code\' code, which is a different HTTP response code than expected. Please make sure that the remote post URL is correct in the Remote Posts webform settings, and that the post was received in the remote system.';
      $this->make_watchdog_warning($log_msg, $nid, $response_code, $url);
      return TRUE;
    }
    else return FALSE;
  }

  /**
   * Reduces the payload to just the opt-in-code and phone number.
   *
   * This is used for an initial request of mobile commons to amerliorate a bug
   * in the reporting per Kiran Muppidi.
   *
   * @return array
   *    The payload with everything but opt-in code and phone number removed.
   */
  function get_minimized_payload() {
    if (is_array($this->payload) && !empty($this->payload)) {
      $fields_to_keep = array(
      //  'opt_in_path',
        'person_phone',
      );
      $filtered_array = array();
      foreach ($this->payload as $key => $value) {
        if (in_array($key, $fields_to_keep)) {
          $filtered_array[$key] = $value;
        }
      }
      return $filtered_array;
    }
    return $this->payload;
  }

  function pre_post() {
    $this->icfi_txt_signup_send_initial_post($this->get_minimized_payload());
  }
}

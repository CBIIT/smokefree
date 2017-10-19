<?php


class ICFIApi {
  protected $machineName;
  protected $apiValue;
  protected $isJsVariable;

  public function __construct($machineName, $apiValue, $isJsVariable) {
    if (empty($machineName) || empty($apiValue)) {
      throw new InvalidArgumentException('Please supply a valid api value and an appropriate machine name');
    }

    // Remove accidental whitespaces at the end
    $this->machineName = trim($machineName);
    $this->apiValue = trim($apiValue);
    $this->isJsVariable = $isJsVariable;
  }

  /**
   * Create a new API key entry in the database
   */
  public function create() {

    // Check if this machine name exists, only enter a new record if there is no existing value
    $entryExists = self::getKeyValue($this->machineName);
    if (empty($entryExists)) {
      $transaction = db_transaction();
      try {
        $query = db_insert('icfi_api_keys')->fields(array(
            'api_key_machine_name' => $this->machineName,
            'api_key_value' => $this->apiValue,
            'javascript_variable' => $this->isJsVariable,)
        );
        $query->execute();
        return TRUE;
      }
      //Shouldn't really happen
      catch (Exception $e) {
        $transaction->rollback();
        watchdog_exception('icfi_api_keys', $e);
        return FALSE;
      }
    }
    else {
      return FALSE;
    }
  }

  /**
   * Updates an existing API key entry in the database
   */
  public function update() {
    $transaction = db_transaction();
    try {
      $query = db_update('icfi_api_keys')->fields(array(
          'api_key_value' => $this->apiValue,
          'javascript_variable' => $this->isJsVariable,)
      );
      $query->condition('api_key_machine_name', $this->machineName);
      $query->execute();
      return TRUE;
    }
    // Shouldn't really happen
    catch (Exception $e) {
      $transaction->rollback();
      watchdog_exception('icfi_api_keys', $e);
    }
  }

  /** Static Methods */

  /**
   * Returns the API Key value associated with the supplied machine name
   */
  public static function getKeyValue($machine_name) {
    if (empty($machine_name)) {
      throw new InvalidArgumentException('Please supply a valid key name');
    }
    else {
      return db_query('SELECT api_key_value FROM {icfi_api_keys} WHERE api_key_machine_name = :machine_name', array(':machine_name' => $machine_name))->fetchField();
    }
  }

  /**
   * Loads all the available data for supplied machine name
   */
  public static function load($machine_name) {
    if (empty($machine_name)) {
      throw new InvalidArgumentException('Please supply a valid key name');
    }
    else {
      $apidata = db_query('SELECT * FROM {icfi_api_keys} WHERE api_key_machine_name = :machine_name', array(':machine_name' => $machine_name))->fetchAll();
      return ($apidata[0]);
    }
  }

  /**
   * Returns a list of all API Keys which need to be added to JS files
   */
  public static function getJsKeys() {
    return db_query('SELECT * FROM {icfi_api_keys} WHERE javascript_variable = 1')->fetchAll();
  }
}
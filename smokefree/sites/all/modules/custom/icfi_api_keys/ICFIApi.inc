<?php


class ICFIApi {
  protected $machineName;
  protected $apiValue;
  protected $isJsVariable;

  /**
   * ICFIApi constructor.
   *
   * @param string $machineName
   *    The machine name of the API key
   *
   * @param string $apiValue
   *    The value to store/update in the database
   *
   * @param string $isJsVariable
   *    An indicator of whether the apivalue will be used in JS files
   */

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
   * Creates a new API key entry in the database
   *
   * @return boolean
   *   TRUE if a new entry was successfully created, FALSE if the supplied machine name exists in the database
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
      }
      //Shouldn't really happen
      catch (Exception $e) {
        $transaction->rollback();
        watchdog_exception('icfi_api_keys', $e);
      }
    }
    else {
      return FALSE;
    }
  }

  /**
   * Updates an existing API key entry in the database
   *
   *@return boolean
   *   TRUE if the entry was successfully updated, FALSE if the supplied machine name does not exist in the database
   */
  public function update() {
    $entryExists = self::getKeyValue($this->machineName);
    if (empty($entryExists)) {
      return FALSE;
    }
    else {
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
  }

  /** Static Methods */

  /**
   * Returns the API Key value associated with the supplied machine name
   *
   * @param string
   *   Machine name of the API key
   *
   * @return object
   *   A DatabaseStatementInterface object
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
   *
   * @param string
   *   Machine name of the API key
   *
   * @return object
   *   A DatabaseStatementInterface object
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
   *
   * @param string
   *   Machine name of the API key
   *
   * @return object
   *   A DatabaseStatementInterface object
   */
  public static function getJsKeys() {
    return db_query('SELECT * FROM {icfi_api_keys} WHERE javascript_variable = 1')->fetchAll();
  }
}
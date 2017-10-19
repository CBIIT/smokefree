-- SUMMARY --

The motivation for writing this module was to
1: Move hardcoded environment specific information out of the codebase (such as API keys) and into the database
2: Provide an UI for administrators (or users with the correct permissions) to easily update or add new keys/information


The values could have been store in the "variable" table as opposed to creating a new one. However, that would not let us easily maintain different
values across environments. By storing this in a separate table, we can easily maintain the environment specific information by excluding the table
during the backporting process

-- USAGE --

- Add new keys by going to "admin/config/system/icfi-api"
- If you wish to use this value in JS files check the box
- The machine name is important, please make sure you choose it wisely, as you cannot edit it.

NOTE: This iteration of the module does not allow deletion of keys. The reason being, deletion of the key will also
warrant removal of all its references from the codebase which will require a developer. Deletion should be rare and only done by a developer.

- PHP -
To access the stored variable in the codebase, do ..
$value = ICFIApi::getKeyValue($machine_name);
Example:
$value = ICFIApi::getKeyValue('addevent');

- JS -
To access a variable in JS files, do..
var value = Drupal.settings.icfi_api_keys.<machine_name>;
Example:
Example:
var value = Drupal.settings.icfi_api_keys.addevent;


<?php
/**
 * User: Sasanka Jandhyala
 * Date: 6/15/17
 * Time: 12:22 PM
 *
 * Script to bootstrap Drupal 7 for PHPUnit tests.
 * On multisite installation, set $http_host variable
 * to the site you want to test.
 */

/*=====================
SETTINGS
====================*/
// Check the drupal root path
$drupal_root = guessDrupalRootPath();
// in a multisite installation, set the domain name you are testing.
$http_host = 'localhost';

/*=====================
DRUPAL BOOTSTRAP
====================*/
// try to guess drupal root path if it is not specified.
function guessDrupalRootPath()
{
    $path = getcwd();
    while ($path != '/') {
        if (file_exists($path . '/includes/bootstrap.inc')) {
            break;
        }
        $path = dirname($path);
    }
    return $path;
}

$_SERVER['HTTP_HOST'] = $http_host;
$_SERVER['SCRIPT_NAME'] = '/index.php';
$_SERVER['REMOTE_ADDR'] = '127.0.0.1';
$_SERVER['REQUEST_METHOD'] = 'GET';
$_SERVER['SERVER_NAME'] = null;
$_SERVER['SERVER_SOFTWARE'] = null;
$_SERVER['HTTP_USER_AGENT'] = null;
define('DRUPAL_ROOT', $drupal_root);
require_once DRUPAL_ROOT . '/includes/bootstrap.inc';
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);


?>
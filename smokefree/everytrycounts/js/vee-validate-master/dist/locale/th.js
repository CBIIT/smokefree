!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n.__vee_validate_locale__th=n.__vee_validate_locale__th||{},n.__vee_validate_locale__th.js=e())}(this,function(){"use strict";var n={name:"th",messages:{_default:function(n){return"ข้อมูล "+n+" ไม่ถูกต้อง"},after:function(n,e){return n+" ต้องเป็นวันที่หลังจาก "+e[0]},alpha_dash:function(n){return n+" สามารถมีตัวอักษร ตัวเลข เครื่องหมายขีดกลาง (-) และเครื่องหมายขีดล่าง (_)"},alpha_num:function(n){return n+" ต้องเป็นตัวอักษร และตัวเลขเท่านั้น"},alpha_spaces:function(n){return n+" ต้องเป็นตัวอักษร และช่องว่างเท่านั้น"},alpha:function(n){return n+" ต้องเป็นตัวอักษรเท่านั้น"},before:function(n,e){return n+" ต้องเป็นวันที่ก่อน "+e[0]},between:function(n,e){return n+" ต้องเป็นค่าระหว่าง "+e[0]+" และ "+e[1]},confirmed:function(n){return"การยืนยันข้อมูลของ "+n+" ไม่ตรงกัน"},credit_card:function(n){return"ข้อมูล "+n+" ไม่ถูกต้อง"},date_between:function(n,e){return"วันที่ "+n+" ต้องอยู่ระหว่าง "+e[0]+" และ "+e[1]},date_format:function(n,e){return"วันที่ "+n+" ต้องอยู่ในรูปแบบ "+e[0]},decimal:function(n,e){void 0===e&&(e=["*"]);var t=e[0];return n+" ต้องเป็นตัวเลข และสามารถมีจุดทศนิยม "+("*"===t?"":t+" จุด")},digits:function(n,e){return n+" ต้องเป็นตัวเลข "+e[0]+" หลักเท่านั้น"},dimensions:function(n,e){return n+" ต้องมีขนาด "+e[0]+" x "+e[1]+" px"},email:function(n){return n+" ต้องเป็นรูปแบบอีเมล"},ext:function(n){return n+" สกุลไฟล์ไม่ถูกต้อง"},image:function(n){return n+" ต้องเป็นรูปภาพเท่านั้น"},in:function(n){return n+" เป็นค่าทีไม่ถูกต้องตามเงื่อนไขที่กำหนด"},ip:function(n){return n+" ไม่ถูกต้องตามรูปแบบ ip address"},max:function(n,e){return n+" ต้องมีความยาวไม่เกิน "+e[0]+" ตัวอักษร"},max_value:function(n,e){return n+" ต้องมีค่าไม่เกิน "+e[0]},mimes:function(n){return n+" ประเภทไฟล์ไม่ถูกต้อง"},min:function(n,e){return n+" ต้องมีความยาวอย่างน้อย "+e[0]+" ตัวอักษร"},min_value:function(n,e){return n+" ต้องมีค่าตั้งแต่ "+e[0]+" ขึ้นไป"},not_in:function(n){return n+" เป็นค่าทีไม่ถูกต้องตามเงื่อนไขที่กำหนด"},numeric:function(n){return n+" ต้องเป็นตัวเลขเท่านั้น"},regex:function(n){return"รูปแบบ "+n+" ไม่ถูกต้อง"},required:function(n){return"กรุณากรอก "+n},size:function(n,e){return n+" ต้องมีขนาดไม่เกิน "+e[0]+" KB"},url:function(n){return n+" ไม่ใช่รูปแบบของ URL ที่ถูกต้อง"}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate&&(VeeValidate.Validator,!0)&&VeeValidate.Validator.addLocale(n),n});
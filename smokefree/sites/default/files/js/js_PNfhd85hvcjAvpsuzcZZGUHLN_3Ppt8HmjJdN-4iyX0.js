
/**
 * Cookie plugin 1.0
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+(m.path):"";var g=m.domain?"; domain="+(m.domain):"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};
;
/**
 * @file
 * jQuery code.
 * Based on code: Adrian "yEnS" Mato Gondelle, twitter: @adrianmg
 * Modifications for Drupal: Grzegorz Bartman grzegorz.bartman@openbit.pl
 */


// Setting up popup.
// 0 means disabled; 1 means enabled.
var popupStatus = 0;

/**
 * Loading popup with jQuery.
 */
function popup_message_load_popup() {
  // Loads popup only if it is disabled.
  if (popupStatus === 0) {
    jQuery("#popup-message-background").css({
      "opacity": "0.7"
    });
    jQuery("#popup-message-background").fadeIn("slow");
    jQuery("#popup-message-window").fadeIn("slow");
    popupStatus = 1;
  }
}

/**
 * Disabling popup with jQuery.
 */
function popup_message_disable_popup() {
  // Disables popup only if it is enabled.
  if (popupStatus == 1) {
    jQuery("#popup-message-background").fadeOut("slow");
    jQuery("#popup-message-window").fadeOut("slow");
    jQuery('#popup-message-content').empty().remove();
    popupStatus = 0;
  }
}

/**
 * Centering popup.
 */
function popup_message_center_popup(width, height) {
  // Request data for centering.
  var windowWidth = document.documentElement.clientWidth;
  var windowHeight = document.documentElement.clientHeight;

  var popupWidth = 0;
  if (typeof width == "undefined") {
    popupWidth = $("#popup-message-window").width();
  }
  else {
    popupWidth = width;
  }
  var popupHeight = 0;
  if (typeof width == "undefined") {
    popupHeight = $("#popup-message-window").height();
  }
  else {
    popupHeight = height;
  }

  // Centering.
  jQuery("#popup-message-window").css({
    "position": "absolute",
    "width" : popupWidth + "px",
    "height" : popupHeight + "px",
    "top": windowHeight / 2 - popupHeight / 2,
    "left": windowWidth / 2 - popupWidth / 2
  });
  // Only need force for IE6.
  jQuery("#popup-message-background").css({
    "height": windowHeight
  });

}

/**
 * Display popup message.
 */
function popup_message_display_popup(popup_message_title, popup_message_body, width, height) {
  jQuery('body').append("<div id='popup-message-window'><a id='popup-message-close'>X</a><br /><h1 class='popup-message-title'>" + popup_message_title + "</h1><div id='popup-message-content'>" + popup_message_body + "</div></div><div id='popup-message-background'></div>");

  // Loading popup.
  popup_message_center_popup(width, height);
  popup_message_load_popup();

  // Closing popup.
  // Click the x event!
  jQuery("#popup-message-close").click(function() {
    popup_message_disable_popup();
  });
  // Click out event!
  jQuery("#popup-message-background").click(function() {
    popup_message_disable_popup();
  });
  // Press Escape event!
  jQuery(document).keypress(function(e) {
    if (e.keyCode == 27 && popupStatus == 1) {
      popup_message_disable_popup();
    }
  });
}

/**
 * Helper function for get last element from object.
 * Used if on page is loaded more than one message.
 */
function popup_message_get_last_object_item(variable_data) {
  if (typeof(variable_data) == 'object') {
      variable_data = variable_data[(variable_data.length - 1)];
  }
  return variable_data;
}

Drupal.behaviors.popup_message = {
  attach: function(context) {
    var timestamp = (+new Date());
    var check_cookie = Drupal.settings.popup_message.check_cookie;
    check_cookie = popup_message_get_last_object_item(check_cookie);
    var popup_message_cookie = jQuery.cookie("popup_message_displayed"),
    delay = Drupal.settings.popup_message.delay * 1000,
    show_popup = false;
    if (!popup_message_cookie || check_cookie == 0) {
      // Set cookie.
      jQuery.cookie("popup_message_displayed", timestamp, {path: '/'});
      // Display message.
      show_popup = true;
    }
    else {
      popup_message_cookie = parseInt(popup_message_cookie, 10);
      show_popup = timestamp < popup_message_cookie + delay;
    }

    if (show_popup) {
      var run_popup = function () {
        // Get variables.
        var popup_message_title = Drupal.settings.popup_message.title,
        popup_message_body = Drupal.settings.popup_message.body,
        popup_message_width = Drupal.settings.popup_message.width,
        popup_message_height = Drupal.settings.popup_message.height;

        popup_message_title = popup_message_get_last_object_item(popup_message_title);
        popup_message_body = popup_message_get_last_object_item(popup_message_body);
        popup_message_width = popup_message_get_last_object_item(popup_message_width);
        popup_message_height = popup_message_get_last_object_item(popup_message_height);
        popup_message_display_popup(
          popup_message_title,
          popup_message_body,
          popup_message_width,
          popup_message_height);
      };

      var trigger_time = delay;
      setTimeout(run_popup, trigger_time);
    }
  }
};
;
(function ($) {

Drupal.behaviors.textarea = {
  attach: function (context, settings) {
    $('.form-textarea-wrapper.resizable', context).once('textarea', function () {
      var staticOffset = null;
      var textarea = $(this).addClass('resizable-textarea').find('textarea');
      var grippie = $('<div class="grippie"></div>').mousedown(startDrag);

      grippie.insertAfter(textarea);

      function startDrag(e) {
        staticOffset = textarea.height() - e.pageY;
        textarea.css('opacity', 0.25);
        $(document).mousemove(performDrag).mouseup(endDrag);
        return false;
      }

      function performDrag(e) {
        textarea.height(Math.max(32, staticOffset + e.pageY) + 'px');
        return false;
      }

      function endDrag(e) {
        $(document).unbind('mousemove', performDrag).unbind('mouseup', endDrag);
        textarea.css('opacity', 1);
      }
    });
  }
};

})(jQuery);
;

/**
 * @file: Popup dialog interfaces for the media project.
 *
 * Drupal.media.popups.mediaBrowser
 *   Launches the media browser which allows users to pick a piece of media.
 *
 * Drupal.media.popups.mediaStyleSelector
 *  Launches the style selection form where the user can choose what
 *  format/style they want their media in.
 */

(function ($) {
namespace('Drupal.media.popups');

/**
 * Media browser popup. Creates a media browser dialog.
 *
 * @param {function}
 *   onSelect Callback for when dialog is closed, received (Array media, Object
 *   extra);
 * @param {Object}
 *   globalOptions Global options that will get passed upon initialization of
 *   the browser. @see Drupal.media.popups.mediaBrowser.getDefaults();
 * @param {Object}
 *   pluginOptions Options for specific plugins. These are passed to the plugin
 *   upon initialization.  If a function is passed here as a callback, it is
 *   obviously not passed, but is accessible to the plugin in
 *   Drupal.settings.variables. Example:
 *   pluginOptions = {library: {url_include_patterns:'/foo/bar'}};
 * @param {Object}
 *   widgetOptions Options controlling the appearance and behavior of the modal
 *   dialog. @see Drupal.media.popups.mediaBrowser.getDefaults();
 */
Drupal.media.popups.mediaBrowser = function (onSelect, globalOptions, pluginOptions, widgetOptions) {
  // Get default dialog options.
  var options = Drupal.media.popups.mediaBrowser.getDefaults();

  // Add global, plugin and widget options.
  options.global = $.extend({}, options.global, globalOptions);
  options.plugins = pluginOptions;
  options.widget = $.extend({}, options.widget, widgetOptions);

  // Find the URL of the modal iFrame.
  var browserSrc = options.widget.src;

  if ($.isArray(browserSrc) && browserSrc.length) {
    browserSrc = browserSrc[browserSrc.length - 1];
  }

  // Create an array of parameters to send along to the iFrame.
  var params = {};

  // Add global field widget settings and plugin information.
  $.extend(params, options.global);
  params.plugins = options.plugins;

  // Append the list of parameters to the iFrame URL as query parameters.
  browserSrc += '&' + $.param(params);

  // Create an iFrame with the iFrame URL.
  var mediaIframe = Drupal.media.popups.getPopupIframe(browserSrc, 'mediaBrowser');

  // Attach an onLoad event.
  mediaIframe.bind('load', options, options.widget.onLoad);

  // Create an array of Dialog options.
  var dialogOptions = options.dialog;

  // Setup the dialog buttons.
  var ok = Drupal.t('OK');
  var notSelected = Drupal.t('You have not selected anything!');

  dialogOptions.buttons[ok] = function () {
    // Find the current file selection.
    var selected = this.contentWindow.Drupal.media.browser.selectedMedia;

    // Alert the user if a selection has yet to be made.
    if (selected.length < 1) {
      alert(notSelected);

      return;
    }

    // Select the file.
    onSelect(selected);

    // Close the dialog.
    $(this).dialog('close');
  };

  // Create a jQuery UI dialog with the given options.
  var dialog = mediaIframe.dialog(dialogOptions);

  // Allow the dialog to react to re-sizing, scrolling, etc.
  Drupal.media.popups.sizeDialog(dialog);
  Drupal.media.popups.resizeDialog(dialog);
  Drupal.media.popups.scrollDialog(dialog);
  Drupal.media.popups.overlayDisplace(dialog.parents(".ui-dialog"));

  return mediaIframe;
};

/**
 * Retrieves a list of default settings for the media browser.
 *
 * @return
 *   An array of default settings.
 */
Drupal.media.popups.mediaBrowser.getDefaults = function () {
  return {
    global: {
      types: [], // Types to allow, defaults to all.
      activePlugins: [] // If provided, a list of plugins which should be enabled.
    },
    widget: { // Settings for the actual iFrame which is launched.
      src: Drupal.settings.media.browserUrl, // Src of the media browser (if you want to totally override it)
      onLoad: Drupal.media.popups.mediaBrowser.mediaBrowserOnLoad // Onload function when iFrame loads.
    },
    dialog: Drupal.media.popups.getDialogOptions()
  };
};

/**
 * Sets up the iFrame buttons.
 */
Drupal.media.popups.mediaBrowser.mediaBrowserOnLoad = function (e) {
  var options = e.data;

  // Ensure that the iFrame is defined.
  if (this.contentWindow.Drupal.media == undefined) {
    return;
  }

  // Check if a selection has been made and press the 'ok' button.
  if (this.contentWindow.Drupal.media.browser.selectedMedia.length > 0) {
    var ok = Drupal.t('OK');
    var ok_func = $(this).dialog('option', 'buttons')[ok];

    ok_func.call(this);

    return;
  }
};

/**
 * Finalizes the selection of a file.
 *
 * Alerts the user if a selection has yet to be made, triggers the file
 * selection and closes the modal dialog.
 */
Drupal.media.popups.mediaBrowser.finalizeSelection = function () {
  // Find the current file selection.
  var selected = this.contentWindow.Drupal.media.browser.selectedMedia;

  // Alert the user if a selection has yet to be made.
  if (selected.length < 1) {
    alert(notSelected);

    return;
  }

  // Select the file.
  onSelect(selected);

  // Close the dialog.
  $(this).dialog('close');
};

/**
 * Style chooser Popup. Creates a dialog for a user to choose a media style.
 *
 * @param mediaFile
 *   The mediaFile you are requesting this formatting form for.
 *   @todo: should this be fid? That's actually all we need now.
 *
 * @param Function
 *   onSubmit Function to be called when the user chooses a media style. Takes
 *   one parameter (Object formattedMedia).
 *
 * @param Object
 *   options Options for the mediaStyleChooser dialog.
 */
Drupal.media.popups.mediaStyleSelector = function (mediaFile, onSelect, options) {
  var defaults = Drupal.media.popups.mediaStyleSelector.getDefaults();

  // @todo: remove this awful hack :(
  if (typeof defaults.src === 'string' ) {
    defaults.src = defaults.src.replace('-media_id-', mediaFile.fid) + '&fields=' + encodeURIComponent(JSON.stringify(mediaFile.fields));
  }
  else {
    var src = defaults.src.shift();

    defaults.src.unshift(src);
    defaults.src = src.replace('-media_id-', mediaFile.fid) + '&fields=' + encodeURIComponent(JSON.stringify(mediaFile.fields));
  }

  options = $.extend({}, defaults, options);

  // Create an iFrame with the iFrame URL.
  var mediaIframe = Drupal.media.popups.getPopupIframe(options.src, 'mediaStyleSelector');

  // Attach an onLoad event.
  mediaIframe.bind('load', options, options.onLoad);

  // Create an array of Dialog options.
  var dialogOptions = Drupal.media.popups.getDialogOptions();

  // Setup the dialog buttons.
  var ok = Drupal.t('OK');
  var notSelected = Drupal.t('Very sorry, there was an unknown error embedding media.');

  dialogOptions.buttons[ok] = function () {
    // Find the current file selection.
    var formattedMedia = this.contentWindow.Drupal.media.formatForm.getFormattedMedia();
    formattedMedia.options = $.extend({}, mediaFile.attributes, formattedMedia.options);

    // Alert the user if a selection has yet to be made.
    if (!formattedMedia) {
      alert(notSelected);

      return;
    }

    // Select the file.
    onSelect(formattedMedia);

    // Close the dialog.
    $(this).dialog('close');
  };

  // Create a jQuery UI dialog with the given options.
  var dialog = mediaIframe.dialog(dialogOptions);

  // Allow the dialog to react to re-sizing, scrolling, etc.
  Drupal.media.popups.sizeDialog(dialog);
  Drupal.media.popups.resizeDialog(dialog);
  Drupal.media.popups.scrollDialog(dialog);
  Drupal.media.popups.overlayDisplace(dialog.parents(".ui-dialog"));

  return mediaIframe;
};

Drupal.media.popups.mediaStyleSelector.mediaBrowserOnLoad = function (e) {
};

Drupal.media.popups.mediaStyleSelector.getDefaults = function () {
  return {
    src: Drupal.settings.media.styleSelectorUrl,
    onLoad: Drupal.media.popups.mediaStyleSelector.mediaBrowserOnLoad
  };
};

/**
 * Style chooser Popup. Creates a dialog for a user to choose a media style.
 *
 * @param mediaFile
 *   The mediaFile you are requesting this formatting form for.
 *   @todo: should this be fid? That's actually all we need now.
 *
 * @param Function
 *   onSubmit Function to be called when the user chooses a media style. Takes
 *   one parameter (Object formattedMedia).
 *
 * @param Object
 *   options Options for the mediaStyleChooser dialog.
 */
Drupal.media.popups.mediaFieldEditor = function (fid, onSelect, options) {
  var defaults = Drupal.media.popups.mediaFieldEditor.getDefaults();

  // @todo: remove this awful hack :(
  defaults.src = defaults.src.replace('-media_id-', fid);
  options = $.extend({}, defaults, options);

  // Create an iFrame with the iFrame URL.
  var mediaIframe = Drupal.media.popups.getPopupIframe(options.src, 'mediaFieldEditor');

  // Attach an onLoad event.
  mediaIframe.bind('load', options, options.onLoad);

  // Create an array of Dialog options.
  var dialogOptions = Drupal.media.popups.getDialogOptions();

  // Setup the dialog buttons.
  var ok = Drupal.t('OK');
  var notSelected = Drupal.t('Very sorry, there was an unknown error embedding media.');

  dialogOptions.buttons[ok] = function () {
    // Find the current file selection.
    var formattedMedia = this.contentWindow.Drupal.media.formatForm.getFormattedMedia();

    // Alert the user if a selection has yet to be made.
    if (!formattedMedia) {
      alert(notSelected);

      return;
    }

    // Select the file.
    onSelect(formattedMedia);

    // Close the dialog.
    $(this).dialog('close');
  };

  // Create a jQuery UI dialog with the given options.
  var dialog = mediaIframe.dialog(dialogOptions);

  // Allow the dialog to react to re-sizing, scrolling, etc.
  Drupal.media.popups.sizeDialog(dialog);
  Drupal.media.popups.resizeDialog(dialog);
  Drupal.media.popups.scrollDialog(dialog);
  Drupal.media.popups.overlayDisplace(dialog);

  return mediaIframe;
};

Drupal.media.popups.mediaFieldEditor.mediaBrowserOnLoad = function (e) {

};

Drupal.media.popups.mediaFieldEditor.getDefaults = function () {
  return {
    // @todo: do this for real
    src: '/media/-media_id-/edit?render=media-popup',
    onLoad: Drupal.media.popups.mediaFieldEditor.mediaBrowserOnLoad
  };
};

/**
 * Generic functions to both the media-browser and style selector.
 */

/**
 * Returns the commonly used options for the dialog.
 */
Drupal.media.popups.getDialogOptions = function () {
  return {
    title: Drupal.t('Media browser'),
    buttons: {},
    dialogClass: Drupal.settings.media.dialogOptions.dialogclass,
    modal: Drupal.settings.media.dialogOptions.modal,
    draggable: Drupal.settings.media.dialogOptions.draggable,
    resizable: Drupal.settings.media.dialogOptions.resizable,
    minWidth: Drupal.settings.media.dialogOptions.minwidth,
    width: Drupal.settings.media.dialogOptions.width,
    height: Drupal.settings.media.dialogOptions.height,
    position: Drupal.settings.media.dialogOptions.position,
    overlay: {
      backgroundColor: Drupal.settings.media.dialogOptions.overlay.backgroundcolor,
      opacity: Drupal.settings.media.dialogOptions.overlay.opacity
    },
    zIndex: Drupal.settings.media.dialogOptions.zindex,
    close: function (event, ui) {
      var elem = $(event.target);
      var id = elem.attr('id');
      if(id == 'mediaStyleSelector') {
        $(this).dialog("destroy");
        $('#mediaStyleSelector').remove();
      }
      else {
        $(this).dialog("destroy");
        $('#mediaBrowser').remove();
      }
    }
  };
};

/**
 * Get an iframe to serve as the dialog's contents. Common to both plugins.
 */
Drupal.media.popups.getPopupIframe = function (src, id, options) {
  var defaults = {width: '100%', scrolling: 'auto'};
  var options = $.extend({}, defaults, options);

  return $('<iframe class="media-modal-frame"/>')
  .attr('src', src)
  .attr('width', options.width)
  .attr('id', id)
  .attr('scrolling', options.scrolling);
};

Drupal.media.popups.overlayDisplace = function (dialog) {
  if (parent.window.Drupal.overlay && jQuery.isFunction(parent.window.Drupal.overlay.getDisplacement)) {
    var overlayDisplace = parent.window.Drupal.overlay.getDisplacement('top');

    if (dialog.offset().top < overlayDisplace) {
      dialog.css('top', overlayDisplace);
    }
  }
}

/**
 * Size the dialog when it is first loaded and keep it centered when scrolling.
 *
 * @param jQuery dialogElement
 *  The element which has .dialog() attached to it.
 */
Drupal.media.popups.sizeDialog = function (dialogElement) {
  if (!dialogElement.is(':visible')) {
    return;
  }

  var windowWidth = $(window).width();
  var dialogWidth = windowWidth * 0.8;
  var windowHeight = $(window).height();
  var dialogHeight = windowHeight * 0.8;

  dialogElement.dialog("option", "width", dialogWidth);
  dialogElement.dialog("option", "height", dialogHeight);
  dialogElement.dialog("option", "position", 'center');

  $('.media-modal-frame').width('100%');
}

/**
 * Resize the dialog when the window changes.
 *
 * @param jQuery dialogElement
 *  The element which has .dialog() attached to it.
 */
Drupal.media.popups.resizeDialog = function (dialogElement) {
  $(window).resize(function() {
    Drupal.media.popups.sizeDialog(dialogElement);
  });
}

/**
 * Keeps the dialog centered when the window is scrolled.
 *
 * @param jQuery dialogElement
 *  The element which has .dialog() attached to it.
 */
Drupal.media.popups.scrollDialog = function (dialogElement) {
  // Keep the dialog window centered when scrolling.
  $(window).scroll(function() {
    if (!dialogElement.is(':visible')) {
      return;
    }

    dialogElement.dialog("option", "position", 'center');
  });
}

})(jQuery);
;
(function ($) {

/**
 * Toggle the visibility of a fieldset using smooth animations.
 */
Drupal.toggleFieldset = function (fieldset) {
  var $fieldset = $(fieldset);
  if ($fieldset.is('.collapsed')) {
    var $content = $('> .fieldset-wrapper', fieldset).hide();
    $fieldset
      .removeClass('collapsed')
      .trigger({ type: 'collapsed', value: false })
      .find('> legend span.fieldset-legend-prefix').html(Drupal.t('Hide'));
    $content.slideDown({
      duration: 'fast',
      easing: 'linear',
      complete: function () {
        Drupal.collapseScrollIntoView(fieldset);
        fieldset.animating = false;
      },
      step: function () {
        // Scroll the fieldset into view.
        Drupal.collapseScrollIntoView(fieldset);
      }
    });
  }
  else {
    $fieldset.trigger({ type: 'collapsed', value: true });
    $('> .fieldset-wrapper', fieldset).slideUp('fast', function () {
      $fieldset
        .addClass('collapsed')
        .find('> legend span.fieldset-legend-prefix').html(Drupal.t('Show'));
      fieldset.animating = false;
    });
  }
};

/**
 * Scroll a given fieldset into view as much as possible.
 */
Drupal.collapseScrollIntoView = function (node) {
  var h = document.documentElement.clientHeight || document.body.clientHeight || 0;
  var offset = document.documentElement.scrollTop || document.body.scrollTop || 0;
  var posY = $(node).offset().top;
  var fudge = 55;
  if (posY + node.offsetHeight + fudge > h + offset) {
    if (node.offsetHeight > h) {
      window.scrollTo(0, posY);
    }
    else {
      window.scrollTo(0, posY + node.offsetHeight - h + fudge);
    }
  }
};

Drupal.behaviors.collapse = {
  attach: function (context, settings) {
    $('fieldset.collapsible', context).once('collapse', function () {
      var $fieldset = $(this);
      // Expand fieldset if there are errors inside, or if it contains an
      // element that is targeted by the URI fragment identifier.
      var anchor = location.hash && location.hash != '#' ? ', ' + location.hash : '';
      if ($fieldset.find('.error' + anchor).length) {
        $fieldset.removeClass('collapsed');
      }

      var summary = $('<span class="summary"></span>');
      $fieldset.
        bind('summaryUpdated', function () {
          var text = $.trim($fieldset.drupalGetSummary());
          summary.html(text ? ' (' + text + ')' : '');
        })
        .trigger('summaryUpdated');

      // Turn the legend into a clickable link, but retain span.fieldset-legend
      // for CSS positioning.
      var $legend = $('> legend .fieldset-legend', this);

      $('<span class="fieldset-legend-prefix element-invisible"></span>')
        .append($fieldset.hasClass('collapsed') ? Drupal.t('Show') : Drupal.t('Hide'))
        .prependTo($legend)
        .after(' ');

      // .wrapInner() does not retain bound events.
      var $link = $('<a class="fieldset-title" href="#"></a>')
        .prepend($legend.contents())
        .appendTo($legend)
        .click(function () {
          var fieldset = $fieldset.get(0);
          // Don't animate multiple times.
          if (!fieldset.animating) {
            fieldset.animating = true;
            Drupal.toggleFieldset(fieldset);
          }
          return false;
        });

      $legend.append(summary);
    });
  }
};

})(jQuery);
;
(function ($) {

/**
 * Automatically display the guidelines of the selected text format.
 */
Drupal.behaviors.filterGuidelines = {
  attach: function (context) {
    $('.filter-guidelines', context).once('filter-guidelines')
      .find(':header').hide()
      .closest('.filter-wrapper').find('select.filter-list')
      .bind('change', function () {
        $(this).closest('.filter-wrapper')
          .find('.filter-guidelines-item').hide()
          .siblings('.filter-guidelines-' + this.value).show();
      })
      .change();
  }
};

})(jQuery);
;
/**
 *  @file
 *  File with utilities to handle media in html editing.
 */
(function ($) {

  Drupal.media = Drupal.media || {};
  /**
   * Utility to deal with media tokens / placeholders.
   */
  Drupal.media.filter = {
    /**
     * Replaces media tokens with the placeholders for html editing.
     * @param content
     */
    replaceTokenWithPlaceholder: function(content) {
      Drupal.media.filter.ensure_tagmap();
      var matches = content.match(/\[\[.*?\]\]/g);

      if (matches) {
        for (var i = 0; i < matches.length; i++) {
          var match = matches[i];
          if (match.indexOf('"type":"media"') == -1) {
            continue;
          }

          // Check if the macro exists in the tagmap. This ensures backwards
          // compatibility with existing media and is moderately more efficient
          // than re-building the element.
          var media = Drupal.settings.tagmap[match];
          var media_json = match.replace('[[', '').replace(']]', '');

          // Ensure that the media JSON is valid.
          try {
            var media_definition = JSON.parse(media_json);
          }
          catch (err) {
            // @todo: error logging.
            // Content should be returned to prevent an empty editor.
            return content;
          }

          // Re-build the media if the macro has changed from the tagmap.
          if (!media && media_definition.fid) {
            Drupal.media.filter.ensureSourceMap();
            var source;
            if (source = Drupal.settings.mediaSourceMap[media_definition.fid]) {
              media = document.createElement(source.tagName);
              media.src = source.src;
              media.innerHTML = source.innerHTML;
            }
            else {
              // If the media element can't be found, leave it in to be resolved
              // by the user later.
              continue;
            }
          }

          // Apply attributes.
          var element = Drupal.media.filter.create_element(media, media_definition);
          var markup  = Drupal.media.filter.outerHTML(element);

          // Use split and join to replace all instances of macro with markup.
          content = content.split(match).join(markup);
        }
      }

      return content;
    },

    /**
     * Returns alt and title field attribute data from the corresponding fields.
     *
     * Specifically looks for file_entity module's file_image_alt_text and
     * file_image_title_text fields as those are by default used to store
     * override values for image alt and title attributes.
     *
     * @param options (array)
     *   Options passed through a popup form submission.
     * @param includeFieldID (bool)
     *   If set, the returned object will have extra keys with the IDs of the
     *   found fields.
     *
     * If the alt or title fields were not found, their keys will be excluded
     * from the returned array.
     *
     * @return
     *   An object with the following keys:
     *   - alt: The value of the alt field.
     *   - altField: The id of the alt field.
     *   - title: The value of the title field.
     *   - titleField: The id of the title field.
     */
    parseAttributeFields: function(options, includeFieldID) {
      var attributes = {};

      for (var field in options) {
        // If the field is set to false, use an empty string for output.
        options[field] = options[field] === false ? '' : options[field];
        //if (field.match(/^field_file_image_alt_text/)) {
        if (field.match(new RegExp('^' + Drupal.settings.media.img_alt_field))) {
          attributes.alt = options[field];
          if (includeFieldID) {
            attributes.altField = field;
          }
        }

        //if (field.match(/^field_file_image_title_text/)) {
        if (field.match(new RegExp('^' + Drupal.settings.media.img_title_field))) {
          attributes.title = options[field];
          if (includeFieldID) {
            attributes.titleField = field;
          }
        }
      }

      return attributes;
    },

    /**
     * Ensures changes made to fielded attributes are done on the fields too.
     *
     * This should be called when creating a macro tag from a placeholder.
     *
     * Changed made to attributes represented by fields are synced back to the
     * corresponding fields, if they exist. The alt/title attribute
     * values encoded in the macro will override the alt/title field values (set
     * in the Media dialog) during rendering of both WYSIWYG placeholders and
     * the final file entity on the server. Syncing makes changes applied to a
     * placeholder's alt/title attribute using native WYSIWYG tools visible in
     * the fields shown in the Media dialog.
     *
     * The reverse should be done when creating a placeholder from a macro tag
     * so changes made in the Media dialog are reflected in the placeholder's
     * alt and title attributes or the values there become stale and the change
     * appears uneffective.
     *
     * @param file_info (object)
     *   A JSON decoded object of the file being inserted/updated.
     */
    syncAttributesToFields: function(file_info) {
      if (!file_info) {
        file_info = {};
      }
      if (!file_info.attributes) {
        file_info.attributes = {};
      }
      if (!file_info.fields) {
        file_info.fields = {};
      }
      var fields = Drupal.media.filter.parseAttributeFields(file_info.fields, true);

      // If the title attribute has changed, ensure the title field is updated.
      var titleAttr = file_info.attributes.title || false;
      if (fields.titleField && (titleAttr !== fields.title)) {
        file_info.fields[fields.titleField] = titleAttr;
      }

      // If the alt attribute has changed, ensure the alt field is updated.
      var altAttr = file_info.attributes.alt || false;
      if (fields.altField && (altAttr !== fields.alt)) {
        file_info.fields[fields.altField] = altAttr;
      }

      return file_info;
    },

    /**
     * Replaces media elements with tokens.
     *
     * @param content (string)
     *   The markup within the wysiwyg instance.
     */
    replacePlaceholderWithToken: function(content) {
      Drupal.media.filter.ensure_tagmap();

      // Locate and process all the media placeholders in the WYSIWYG content.
      var contentElements = $('<div/>').html(content);  // TODO: once baseline jQuery is 1.8+, switch to using $.parseHTML(content)
      var mediaElements = contentElements.find('.media-element');
      if (mediaElements) {
        $(mediaElements).each(function (i) {
          // Attempt to derive a JSON macro representation of the media placeholder.
          // Note: Drupal 7 ships with JQuery 1.4.4, which allows $(this).attr('outerHTML') to retrieve the eement's HTML,
          // but many sites use JQuery update to increate this to 1.6+, which insists on $(this).prop('outerHTML).
          // Until the minimum jQuery is >= 1.6, we need to do this the old-school way.
          // See http://stackoverflow.com/questions/2419749/get-selected-elements-outer-html
          var markup = $(this).get(0).outerHTML;
          if (markup === undefined) {
            // Browser does not support outerHTML DOM property.  Use the more expensive clone method instead.
            markup = $(this).clone().wrap('<div>').parent().html();
          }
          var macro = Drupal.media.filter.create_macro($(markup));
          if (macro) {
            // Replace the placeholder with the macro in the parsed content.
            // (Can't just replace the string section, because the outerHTML may be subtly different,
            // depending on the browser. Parsing tends to convert <img/> to <img>, for instance.)
            Drupal.settings.tagmap[macro] = markup;
            $(this).replaceWith(macro);
          }
        });
        content = $(contentElements).html();
      }

      return content;
    },

    /**
     * Serializes file information as a url-encoded JSON object and stores it
     * as a data attribute on the html element.
     *
     * @param html (string)
     *    A html element to be used to represent the inserted media element.
     * @param info (object)
     *    A object containing the media file information (fid, view_mode, etc).
     */
    create_element: function (html, info) {
      if ($('<div>').append(html).text().length === html.length) {
        // Element is not an html tag. Surround it in a span element so we can
        // pass the file attributes.
        html = '<span>' + html + '</span>';
      }
      var element = $(html);

      // Parse out link wrappers. They will be re-applied when the image is
      // rendered on the front-end.
      if (element.is('a') && element.find('img').length) {
        element = element.children();
      }

      // Extract attributes represented by fields and use those values to keep
      // them in sync, usually alt and title.
      var attributes = Drupal.media.filter.parseAttributeFields(info.fields);
      info.attributes = $.extend(info.attributes, attributes);

      // Move attributes from the file info array to the placeholder element.
      if (info.attributes) {
        $.each(Drupal.settings.media.wysiwyg_allowed_attributes, function(i, a) {
          if (info.attributes[a]) {
            element.attr(a, info.attributes[a]);
          }
          else if (element.attr(a)) {
            // If the element has the attribute, but the value is empty, be
            // sure to clear it.
            element.removeAttr(a);
          }
        });
        delete(info.attributes);

        // Store information to rebuild the element later, if necessary.
        Drupal.media.filter.ensureSourceMap();
        Drupal.settings.mediaSourceMap[info.fid] = {
          tagName: element[0].tagName,
          src: element[0].src,
          innerHTML: element[0].innerHTML
        }
      }

      info.type = info.type || "media";

      // Store the data in the data map.
      Drupal.media.filter.ensureDataMap();

      // Generate a "delta" to allow for multiple embeddings of the same file.
      var delta = Drupal.media.filter.fileEmbedDelta(info.fid, element);
      if (Drupal.settings.mediaDataMap[info.fid]) {
        info.field_deltas = Drupal.settings.mediaDataMap[info.fid].field_deltas || {};
      }
      else {
        info.field_deltas = {};
      }
      info.field_deltas[delta] = info.fields;
      element.attr('data-delta', delta);

      Drupal.settings.mediaDataMap[info.fid] = info;

      // Store the fid in the DOM to retrieve the data from the info map.
      element.attr('data-fid', info.fid);

      // Add data-media-element attribute so we can find the markup element later.
      element.attr('data-media-element', '1')

      var classes = ['media-element'];
      if (info.view_mode) {
        // Remove any existing view mode classes.
        element.removeClass (function (index, css) {
          return (css.match (/\bfile-\S+/g) || []).join(' ');
        });
        classes.push('file-' + info.view_mode.replace(/_/g, '-'));
      }
      // Check for alignment info, after removing any existing alignment class.
      element.removeClass (function (index, css) {
        return (css.match (/\bmedia-wysiwyg-align-\S+/g) || []).join(' ');
      });
      if (info.fields && info.fields.alignment) {
        classes.push('media-wysiwyg-align-' + info.fields.alignment);
      }
      element.addClass(classes.join(' '));

      // Attempt to override the link_title if the user has chosen to do this.
      info.link_text = this.overrideLinkTitle(info);
      // Apply link_text if present.
      if (info.link_text) {
        $('a', element).html(info.link_text);
      }

      return element;
    },

    /**
     * Create a macro representation of the inserted media element.
     *
     * @param element (jQuery object)
     *    A media element with attached serialized file info.
     */
    create_macro: function (element) {
      var file_info = Drupal.media.filter.extract_file_info(element);
      if (file_info) {
        if (typeof file_info.link_text == 'string') {
          file_info.link_text = this.overrideLinkTitle(file_info);
          // Make sure the link_text-html-tags are properly escaped.
          file_info.link_text = file_info.link_text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        }
        return '[[' + JSON.stringify(file_info) + ']]';
      }
      return false;
    },

    /**
     * Extract the file info from a WYSIWYG placeholder element as JSON.
     *
     * @param element (jQuery object)
     *    A media element with associated file info via a file id (fid).
     */
    extract_file_info: function (element) {
      var fid, file_info, value, delta;

      if (fid = element.data('fid')) {
        Drupal.media.filter.ensureDataMap();

        if (file_info = Drupal.settings.mediaDataMap[fid]) {
          file_info.attributes = {};

          $.each(Drupal.settings.media.wysiwyg_allowed_attributes, function(i, a) {
            if (value = element.attr(a)) {
              // Replace &quot; by \" to avoid error with JSON format.
              if (typeof value == 'string') {
                value = value.replace('&quot;', '\\"');
              }
              file_info.attributes[a] = value;
            }
          });

          // Extract the link text, if there is any.
          file_info.link_text = (Drupal.settings.mediaDoLinkText) ? element.find('a').html() : false;

          // When a file is embedded, its fields can be overridden. To allow for
          // the edge case where the same file is embedded multiple times with
          // different field overrides, we look for a data-delta attribute on
          // the element, and use that to decide which set of data in the
          // "field_deltas" property to use.
          if (delta = element.data('delta')) {
            if (file_info.field_deltas && file_info.field_deltas[delta]) {
              file_info.fields = file_info.field_deltas[delta];

              // Also look for an overridden view mode, aka "format".
              // Check for existance of fields to make it backward compatible.
              if (file_info.fields && file_info.fields.format && file_info.view_mode) {
                file_info.view_mode = file_info.fields.format;
              }
            }
          }
        }
        else {
          return false;
        }
      }
      else {
        return false;
      }

      return Drupal.media.filter.syncAttributesToFields(file_info);
    },

    /**
     * Gets the HTML content of an element.
     *
     * @param element (jQuery object)
     */
    outerHTML: function (element) {
      return element[0].outerHTML || $('<div>').append(element.eq(0).clone()).html();
    },

    /**
     * Gets the wrapped HTML content of an element to insert into the wysiwyg.
     *
     * It also registers the element in the tag map so that the token
     * replacement works.
     *
     * @param element (jQuery object) The element to insert.
     *
     * @see Drupal.media.filter.replacePlaceholderWithToken()
     */
    getWysiwygHTML: function (element) {
      // Create the markup and the macro.
      var markup = Drupal.media.filter.outerHTML(element),
        macro = Drupal.media.filter.create_macro(element);

      // Store macro/markup in the tagmap.
      Drupal.media.filter.ensure_tagmap();
      Drupal.settings.tagmap[macro] = markup;

      // Return the html code to insert in an editor and use it with
      // replacePlaceholderWithToken()
      return markup;
    },

    /**
     * Ensures the src tracking has been initialized and returns it.
     */
    ensureSourceMap: function() {
      Drupal.settings.mediaSourceMap = Drupal.settings.mediaSourceMap || {};
      return Drupal.settings.mediaSourceMap;
    },

    /**
     * Ensures the data tracking has been initialized and returns it.
     */
    ensureDataMap: function() {
      Drupal.settings.mediaDataMap = Drupal.settings.mediaDataMap || {};
      return Drupal.settings.mediaDataMap;
    },

    /**
     * Ensures the tag map has been initialized and returns it.
     */
    ensure_tagmap: function () {
      Drupal.settings.tagmap = Drupal.settings.tagmap || {};
      return Drupal.settings.tagmap;
    },

    /**
     * Return the overridden link title based on the file_entity title field
     * set.
     * @param file the file object.
     * @returns the overridden link_title or the existing link text if no
     * overridden.
     */
    overrideLinkTitle: function(file) {
      var file_title_field = Drupal.settings.media.img_title_field.replace('field_', '');
      var file_title_field_machine_name = '';
      if (typeof(file.fields) != 'undefined') {
        jQuery.each(file.fields, function(field, fieldValue) {
          if (field.indexOf(file_title_field) != -1) {
            file_title_field_machine_name = field;
          }
        });

        if (typeof(file.fields[file_title_field_machine_name]) != 'undefined' && file.fields[file_title_field_machine_name] != '') {
          return file.fields[file_title_field_machine_name];
        }
        else {
          return file.link_text;
        }
      }
      else {
        return file.link_text;
      }
    },

    /**
     * Generates a unique "delta" for each embedding of a particular file.
     */
    fileEmbedDelta: function(fid, element) {
      // Ensure we have an object to track our deltas.
      Drupal.settings.mediaDeltas = Drupal.settings.mediaDeltas || {};
      Drupal.settings.maxMediaDelta = Drupal.settings.maxMediaDelta || 0;

      // Check to see if the element already has one.
      if (element && element.data('delta')) {
        var existingDelta = element.data('delta');
        // If so, make sure that it is being tracked in mediaDeltas. If we're
        // going to create new deltas later on, make sure they do not overwrite
        // other mediaDeltas.
        if (!Drupal.settings.mediaDeltas[existingDelta]) {
          Drupal.settings.mediaDeltas[existingDelta] = fid;
          Drupal.settings.maxMediaDelta = Math.max(Drupal.settings.maxMediaDelta, existingDelta);
        }
        return existingDelta;
      }
      // Otherwise, generate a new one.
      var newDelta = Drupal.settings.maxMediaDelta + 1;
      Drupal.settings.mediaDeltas[newDelta] = fid;
      Drupal.settings.maxMediaDelta = newDelta;
      return newDelta;
    }
  }

})(jQuery);
;
/**
 * @file
 * Webform node form interface enhancments.
 */

(function ($) {

  "use strict";

  Drupal.behaviors.webformAdmin = {};
  Drupal.behaviors.webformAdmin.attach = function (context) {
    // On click or change, make a parent radio button selected.
    Drupal.webform.setActive(context);
    Drupal.webform.updateTemplate(context);
    // Update the template select list upon changing a template.
    // Select all link for file extensions.
    Drupal.webform.selectCheckboxesLink(context);
    // Enhance the normal tableselect.js file to support indentations.
    Drupal.webform.tableSelectIndentation(context);
    // Automatically download exports if available.
    Drupal.webform.downloadExport(context);
    // Enhancements for the conditionals administrative page.
    Drupal.webform.conditionalAdmin(context);
    // Trigger radio/checkbox change when label click automatically selected by
    // browser.
    Drupal.webform.radioLabelAutoClick(context);
  };

  Drupal.webform = Drupal.webform || {};

  Drupal.webform.setActive = function (context) {
    $('.webform-inline-radio', context).click(function (e) {
      $(this).closest('.form-type-radio').find('input[type=radio]').webformProp('checked', true);
    });
    $('.webform-set-active', context).change(function (e) {
      if ($(this).val()) {
        $(this).closest('.form-type-radio').find('input[type=radio]').webformProp('checked', true);
      }
      e.preventDefault();
    });

    // Firefox improperly selects the parent radio button when clicking inside
    // a label that contains an input field. The only way of preventing this
    // currently is to remove the "for" attribute on the label.
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=213519.
    if (navigator.userAgent.match(/Firefox/)) {
      $('.webform-inline-radio', context).removeAttr('for');
    }
  };

  // Update e-mail templates between default and custom.
  Drupal.webform.updateTemplate = function (context) {
    var defaultTemplate = $('#edit-templates-default').val();
    var $templateSelect = $('#webform-template-fieldset select#edit-template-option', context);
    var $templateTextarea = $('#webform-template-fieldset textarea:visible', context);

    var updateTemplateSelect = function () {
      if ($(this).val() == defaultTemplate) {
        $templateSelect.val('default');
      }
      else {
        $templateSelect.val('custom');
      }
    };

    var updateTemplateText = function () {
      if ($(this).val() == 'default' && $templateTextarea.val() != defaultTemplate) {
        if (confirm(Drupal.settings.webform.revertConfirm)) {
          $templateTextarea.val(defaultTemplate);
        }
        else {
          $(this).val('custom');
        }
      }
    };

    $templateTextarea.keyup(updateTemplateSelect);
    $templateSelect.change(updateTemplateText);
  };

  Drupal.webform.selectCheckboxesLink = function (context) {
    function selectCheckboxes() {
      var group = this.className.replace(/.*?webform-select-link-([^ ]*).*/, '$1');
      var $checkboxes = $('.webform-select-group-' + group + ' input[type=checkbox]');
      var reverseCheck = !$checkboxes[0].checked;
      $checkboxes.each(function () {
        this.checked = reverseCheck;
      });
      $checkboxes.trigger('change');
      return false;
    }
    $('a.webform-select-link', context).click(selectCheckboxes);
  };

  Drupal.webform.tableSelectIndentation = function (context) {
    var $tables = $('th.select-all', context).parents('table');
    $tables.find('input.form-checkbox').change(function () {
      var $rows = $(this).parents('table:first').find('tr');
      var row = $(this).parents('tr:first').get(0);
      var rowNumber = $rows.index(row);
      var rowTotal = $rows.size();
      var indentLevel = $(row).find('div.indentation').size();
      for (var n = rowNumber + 1; n < rowTotal; n++) {
        if ($rows.eq(n).find('div.indentation').size() <= indentLevel) {
          break;
        }
        $rows.eq(n).find('input.form-checkbox').webformProp('checked', this.checked);
      }
    });
  };

  /**
   * Attach behaviors for Webform results download page.
   */
  Drupal.webform.downloadExport = function (context) {
    if (context === document && Drupal.settings && Drupal.settings.webformExport && document.cookie.match(/webform_export_info=1/)) {
      window.location = Drupal.settings.webformExport;
      delete Drupal.settings.webformExport;
    }
  };

  /**
   * Attach behaviors for Webform conditional administration.
   */
  Drupal.webform.conditionalAdmin = function (context) {
    var $context = $(context);
    // Bind to the entire form and allow events to bubble-up from elements. This
    // saves a lot of processing when new conditions are added/removed.
    $context.find('#webform-conditionals-ajax:not(.webform-conditional-processed)')
      .addClass('webform-conditional-processed')
      .bind('change', function (e) {

        var $target = $(e.target);
        if ($target.is('.webform-conditional-source select')) {
          Drupal.webform.conditionalSourceChange.apply(e.target);
        }

        if ($target.is('.webform-conditional-operator select')) {
          Drupal.webform.conditionalOperatorChange.apply(e.target);
        }

        if ($target.is('.webform-conditional-andor select')) {
          Drupal.webform.conditionalAndOrChange.apply(e.target);
        }

        if ($target.is('.webform-conditional-action select')) {
          Drupal.webform.conditionalActionChange.apply(e.target);
        }
      });

    // Add event handlers to delete the entire row if the last rule or action is removed.
    $context.find('.webform-conditional-rule-remove:not(.webform-conditional-processed)').bind('click', function () {
      this.webformRemoveClass = '.webform-conditional-rule-remove';
      window.setTimeout($.proxy(Drupal.webform.conditionalRemove, this), 100);
    }).addClass('webform-conditional-processed');
    $context.find('.webform-conditional-action-remove:not(.webform-conditional-processed)').bind('click', function () {
      this.webformRemoveClass = '.webform-conditional-action-remove';
      window.setTimeout($.proxy(Drupal.webform.conditionalRemove, this), 100);
    }).addClass('webform-conditional-processed');

    // Trigger default handlers on the source element, this in turn will trigger
    // the operator handlers.
    $context.find('.webform-conditional-source select').trigger('change');

    // Trigger defaults handlers on the action element.
    $context.find('.webform-conditional-action select').trigger('change');

    // When adding a new table row, make it draggable and hide the weight column.
    if ($context.is('tr.ajax-new-content') && $context.find('.webform-conditional').length === 1) {
      Drupal.tableDrag['webform-conditionals-table'].makeDraggable($context[0]);
      $context.find('.webform-conditional-weight').closest('td').addClass('tabledrag-hide');
      if ($.cookie('Drupal.tableDrag.showWeight') !== '1') {
        Drupal.tableDrag['webform-conditionals-table'].hideColumns();
      }
      $context.removeClass('ajax-new-content');
    }
  };

  /**
   * Event callback for the remove button next to an individual rule.
   */
  Drupal.webform.conditionalRemove = function () {
    // See if there are any remaining rules in this element.
    var rowCount = $(this).parents('.webform-conditional:first').find(this.webformRemoveClass).length;
    if (rowCount <= 1) {
      var $tableRow = $(this).parents('tr:first');
      var $table = $('#webform-conditionals-table');
      if ($tableRow.length && $table.length) {
        $tableRow.remove();
        Drupal.webform.restripeTable($table[0]);
      }
    }
  };

  /**
   * Event callback to update the list of operators after a source change.
   */
  Drupal.webform.conditionalSourceChange = function () {
    var source = $(this).val();
    var dataType = Drupal.settings.webform.conditionalValues.sources[source]['data_type'];
    var $operator = $(this).parents('.webform-conditional-rule:first').find('.webform-conditional-operator select');

    // Store a the original list of all operators for all data types in the select
    // list DOM element.
    if (!$operator[0]['webformConditionalOriginal']) {
      $operator[0]['webformConditionalOriginal'] = $operator[0].innerHTML;
    }

    // Reference the original list to create a new list matching the data type.
    var $originalList = $($operator[0]['webformConditionalOriginal']);
    var $newList = $originalList.filter('optgroup[label=' + dataType + ']');
    var newHTML = $newList[0].innerHTML;

    // Update the options and fire the change event handler on the list to update
    // the value field, only if the options have changed. This avoids resetting
    // existing selections.
    if (newHTML != $operator.html()) {
      $operator.html(newHTML);
    }
    // Trigger the change in case the source component changed from one select
    // component to another.
    $operator.trigger('change');

  };

  /**
   * Event callback to update the value field after an operator change.
   */
  Drupal.webform.conditionalOperatorChange = function () {
    var source = $(this).parents('.webform-conditional-rule:first').find('.webform-conditional-source select').val();
    var dataType = Drupal.settings.webform.conditionalValues.sources[source]['data_type'];
    var operator = $(this).val();
    var $value = $(this).parents('.webform-conditional-rule:first').find('.webform-conditional-value');
    var name = $value.find('input, select, textarea').attr('name');
    var originalValue = false;

    // Given the dataType and operator, we can determine the form key.
    var formKey = Drupal.settings.webform.conditionalValues.operators[dataType][operator]['form'];
    var formSource = typeof Drupal.settings.webform.conditionalValues.forms[formKey] == 'undefined' ? false : source;

    // On initial request, save the default field as printed on the original page.
    if (!$value[0]['webformConditionalOriginal']) {
      $value[0]['webformConditionalOriginal'] = $value[0].innerHTML;
      originalValue = $value.find('input:first').val();
    }
    // On changes to an existing operator, check if the form key is different
    // (and any per-source form, such as a select option list) before replacing
    // the form with an identical version.
    else if ($value[0]['webformConditionalFormKey'] == formKey && $value[0]['webformConditionalFormSource'] == formSource) {
      return;
    }

    // Store the current form key for checking the next time the operator changes.
    $value[0]['webformConditionalFormKey'] = formKey;
    $value[0]['webformConditionalFormSource'] = formSource;

    // If using the default (a textfield), restore the original field.
    if (formKey === 'default') {
      $value[0].innerHTML = $value[0]['webformConditionalOriginal'];
    }
    // If the operator does not need a source value (i.e. is empty), hide it.
    else if (formKey === false) {
      $value[0].innerHTML = '<input type="text" value="" style="display: none;" >';
    }
    // If there is a per-source form for this operator (e.g. option lists), use
    // the specialized value form.
    else if (typeof Drupal.settings.webform.conditionalValues.forms[formKey] == 'object') {
      $value[0].innerHTML = Drupal.settings.webform.conditionalValues.forms[formKey][source];
    }
    // Otherwise all the sources use a generic field (e.g. a text field).
    else {
      $value[0].innerHTML = Drupal.settings.webform.conditionalValues.forms[formKey];
    }

    // Set the name attribute to match the original placeholder field.
    var $firstElement = $value.find('input, select, textarea').filter(':first');
    $firstElement.attr('name', name);

    if (originalValue) {
      $firstElement.val(originalValue);
    }
  };

  /**
   * Event callback to make sure all group and/or operators match.
   */
  Drupal.webform.conditionalAndOrChange = function () {
    var rid = this.getAttribute('data-rid');
    var text = $(this).find('option:selected').text();
    $(this).parents('.webform-conditional:first').find('.webform-conditional-andor div[data-rid="' + rid + '"]').text(text);
  };

  /**
   * Event callback to show argument only for appropriate actions.
   */
  Drupal.webform.conditionalActionChange = function () {
    var action = $(this).val();
    var $argument = $(this).parents('.webform-conditional-condition:first').find('.webform-conditional-argument input');
    var isShown = $argument.is(':visible');
    switch (action) {
      case 'show':
      case 'require':
        if (isShown) {
          $argument.hide();
        }
        break;
      case 'set':
        if (!isShown) {
          $argument.show();
        }
        break;
    }
  };

  /**
   * Triggers a change event when a label receives a click.
   *
   * When the browser automatically selects a radio button when it's label is
   * clicked, the FAPI states jQuery code doesn't receive an event. This function
   * ensures that automatically-selected radio buttons keep in sync with the
   * FAPI states.
   */
  Drupal.webform.radioLabelAutoClick = function (context) {
    $('label').once('webform-label').click(function () {
      $(this).prev('input:radio').change();
    });
  };

  /**
   * Make a prop shim for jQuery < 1.9.
   */
  $.fn.webformProp = $.fn.webformProp || function (name, value) {
    if (value) {
      return $.fn.prop ? this.prop(name, true) : this.attr(name, true);
    }
    else {
      return $.fn.prop ? this.prop(name, false) : this.removeAttr(name);
    }
  };

})(jQuery);
;
(function ($) {

Drupal.behaviors.tableSelect = {
  attach: function (context, settings) {
    // Select the inner-most table in case of nested tables.
    $('th.select-all', context).closest('table').once('table-select', Drupal.tableSelect);
  }
};

Drupal.tableSelect = function () {
  // Do not add a "Select all" checkbox if there are no rows with checkboxes in the table
  if ($('td input:checkbox', this).length == 0) {
    return;
  }

  // Keep track of the table, which checkbox is checked and alias the settings.
  var table = this, checkboxes, lastChecked;
  var strings = { 'selectAll': Drupal.t('Select all rows in this table'), 'selectNone': Drupal.t('Deselect all rows in this table') };
  var updateSelectAll = function (state) {
    // Update table's select-all checkbox (and sticky header's if available).
    $(table).prev('table.sticky-header').andSelf().find('th.select-all input:checkbox').each(function() {
      $(this).attr('title', state ? strings.selectNone : strings.selectAll);
      this.checked = state;
    });
  };

  // Find all <th> with class select-all, and insert the check all checkbox.
  $('th.select-all', table).prepend($('<input type="checkbox" class="form-checkbox" />').attr('title', strings.selectAll)).click(function (event) {
    if ($(event.target).is('input:checkbox')) {
      // Loop through all checkboxes and set their state to the select all checkbox' state.
      checkboxes.each(function () {
        this.checked = event.target.checked;
        // Either add or remove the selected class based on the state of the check all checkbox.
        $(this).closest('tr').toggleClass('selected', this.checked);
      });
      // Update the title and the state of the check all box.
      updateSelectAll(event.target.checked);
    }
  });

  // For each of the checkboxes within the table that are not disabled.
  checkboxes = $('td input:checkbox:enabled', table).click(function (e) {
    // Either add or remove the selected class based on the state of the check all checkbox.
    $(this).closest('tr').toggleClass('selected', this.checked);

    // If this is a shift click, we need to highlight everything in the range.
    // Also make sure that we are actually checking checkboxes over a range and
    // that a checkbox has been checked or unchecked before.
    if (e.shiftKey && lastChecked && lastChecked != e.target) {
      // We use the checkbox's parent TR to do our range searching.
      Drupal.tableSelectRange($(e.target).closest('tr')[0], $(lastChecked).closest('tr')[0], e.target.checked);
    }

    // If all checkboxes are checked, make sure the select-all one is checked too, otherwise keep unchecked.
    updateSelectAll((checkboxes.length == $(checkboxes).filter(':checked').length));

    // Keep track of the last checked checkbox.
    lastChecked = e.target;
  });

  // If all checkboxes are checked on page load, make sure the select-all one
  // is checked too, otherwise keep unchecked.
  updateSelectAll((checkboxes.length == $(checkboxes).filter(':checked').length));
};

Drupal.tableSelectRange = function (from, to, state) {
  // We determine the looping mode based on the order of from and to.
  var mode = from.rowIndex > to.rowIndex ? 'previousSibling' : 'nextSibling';

  // Traverse through the sibling nodes.
  for (var i = from[mode]; i; i = i[mode]) {
    // Make sure that we're only dealing with elements.
    if (i.nodeType != 1) {
      continue;
    }

    // Either add or remove the selected class based on the state of the target checkbox.
    $(i).toggleClass('selected', state);
    $('input:checkbox', i).each(function () {
      this.checked = state;
    });

    if (to.nodeType) {
      // If we are at the end of the range, stop.
      if (i == to) {
        break;
      }
    }
    // A faster alternative to doing $(i).filter(to).length.
    else if ($.filter(to, [i]).r.length) {
      break;
    }
  }
};

})(jQuery);
;

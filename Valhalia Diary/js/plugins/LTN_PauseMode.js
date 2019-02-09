/**
 * @file LTN PauseMode
 * @author LTN Games
 * @version 1.0.1
 */
/*~struct~SoundEffect:
  @param name
  @text Name
  @type file
  @dir audio/se/
  @desc The name of the sound effect

  @param volume
  @text Volume
  @type number
  @min 1
  @max 100
  @default 50
  @desc The volume of this sound effect. This controls the loudness and softness of the audio.

  @param pitch
  @text Pitch
  @type number
  @min 1
  @max 200
  @default 100
  @desc The pitch of this sound effect. This controls the highs and lows of the audio.

  @param pan
  @text Pan
  @type number
  @default 0.5
  @decimals 0.1
  @min 0
  @max 1
  @desc The pan of this sound effect.
*/

/*~struct~Addon:
  @param enable
  @text Enable Addon
  @type boolean
  @default false
  @desc Turn on this addon to add it to the pause mode scene

  @param containerX
  @text Container's X Position(eval)
  @default 0
  @desc The x position of the container which holds all of this add ons elements

  @param containerY
  @text Container's Y Position(eval)
  @default 0
  @desc The y position of the container which holds all of this add ons elements

  @param icon
  @text Icon
  @default 0
  @desc If this add-on contain an icon, then input the iconId of the icon you'd like displayed

  @param el
  @text Main Element
  @type struct<Element>
  @default {"x":"0","y":"0","align":"left","font":"0"}
  @desc All add-ons contain one element, these are the options for changing the element within the add-ons container.

  @param el1
  @text Element 2
  @type  struct<Element>
  @default {"x":"0","y":"0","align":"left","font":"0"}
  @desc If this add-on contains a 2nd element, you can chnage it's options here (See Help For More Information)

  @param el2
  @text Element 3
  @type  struct<Element>
  @default {"x":"0","y":"0","align":"left","font":"0"}
  @desc If this add-on contains a 3rd element, you can chnage it's options here (See Help For More Information)
*/

/*~struct~Element:
  @param enable
  @text Enable
  @type boolean
  @default
  @desc Hide or show the element.

  @param text
  @text Text
  @default
  @desc If the element contains a customizable text element, you can change it here.

  @param x
  @text X Position
  @type number
  @default 0
  @desc The x position of of this element

  @param y
  @text Y Position
  @type number
  @default 0
  @desc The y position of this element

  @param align
  @text Text Alignment
  @default left
  @desc The text alignment of this elements font

  @param font
  @text Font Face
  @default GameFont
  @desc The font face for the text within this element

  @param fontSize
  @text Font Size
  @default 24
  @desc The font size for the text within this element
*/

/*~struct~ButtonContainer:
  @param containerX
  @text Container's X Position(eval)
  @default 0
  @desc The x position of the container which holds all of the button elements

  @param containerY
  @text Container's Y Position(eval)
  @default 0
  @desc The y position of the container which holds all of thhe buttons elements

  @param spacing
  @text Spacing
  @type number
  @default 25
  desc The spacing between all the elements within the container. If applicable. (See Help For More Info)
  */

/*~struct~Button:
  @param pos
  @text Position
  @type number
  @default 0
  @desc The position the element should appear within the button container

  @param enable
  @text Enable
  @type boolean
  @default false
  @desc Choose to enable this button, so it appears on the pause mode scene

  @param image
  @text Button Image
  @type file
  @dir img\system
  @default
  @desc The button-sheet image to use for this button.

  @param commonEvent
  @text Common Event
  @type common_event
  @default 0
  @desc The common event to run when this button is pressed.
*/

/*~struct~ButtonFrames:
  @param size
  @type number
  @text Size Of Button Sheet
  @default 64
  @desc The size of one frame on the button-sheet sprite-sheet

  @param normal
  @text Normal Frame
  @type number
  @default 0
  @desc The frame to use on the button-sheet sprite-sheet when the button is not being touched..

  @param touched
  @text On Touch Frame
  @type number
  @default 1
  @desc The frame to use on the button-sheet sprite-sheet when the button is touched.

  @param disabled
  @type number
  @text Disabled Frame
  @default 2
  @desc The frame to use on the button-sheet sprite-sheet when the button is disabled
  */

/*~struct~Background:
@param blur
@type boolean
@text Blurred Background
@default true
@desc Create a blurred background of the previous scene.
  @param darkRect
@type boolean
@text Darken Background
@default true
@desc Create a darkened transparent sprite to cover the background.
  @param custom
@type file
@dir img
@text Custom Background
@default
@desc You can use a custom background instead.
  @param x
@type number
@text Custom Background X
@default 0
@desc Custom backgrounds x position on the scene.
  @param y
@type number
@text Custom Background Y
@default 0
@desc Custom backgrounds y position on the scene.
*/

/*:
 @plugindesc v 1.0.1 A customizable pause scene, enhancing mobile gameplay and increases accessibility
  <LTN_PauseMode>
 @author LTN Games (https://ltngames.net)

 @category Stamina

 @param Pause Key
 @desc  The key used to pause the game (Not used for mobile devices)
 @type number
 @default 100
 @type Nummber

 @param Pause Text
 @desc  The text displayed on screen when paused
 @type struct<Element>
 @default {"text":"Pause Mode","x":"Graphics.width / 2 - 100","y":"Graphics.height / 2 - 50","align":"left","font":"GameFont","fontSize":"50"}

 @param Enter/Exit Sound
 @desc  The sound to play when entering or exiting the pause mode scene.
 @type struct<SoundEffect>
 @default {"name":"Flash1","volume":"40","pitch":"100","pan":"0.5"}

 @param Pause Background
 @desc  The background used for the pause mode scene.
 @type struct<Background>
 @default {"blur":"true","darkRect":"true","custom":"","x":"0","y":"0"}

 @category Scene Options

 @param Override Menu Access
 @desc Overriding menu access will open the pause mode scene instead of the menu. The menu can be accessed from the pause mode scene.
 @type boolean
 @default false
 @type Boolean

 @param Buttons

 @param Buttons Container
 @parent Buttons
 @type struct<ButtonContainer>
 @desc  All butons are in one container, changing settigs here affect all buttons.
 @default {"containerX":"Graphics.boxWidth / 2 - 150","containerY":"Graphics.boxHeight / 2","spacing":"75"}

 @param Return Button
 @parent Buttons
 @desc  The return button continues gameplay
 @type struct<Button>
 @default {"pos":"0","enable":"true","image":"exitLeft","commonEvent":"0"}

 @param Menu Button
 @parent Buttons
 @type struct<Button>
 @desc  The menu button will open the main menu
 @default {"pos":"1","enable":"true","image":"menuList","commonEvent":"0"}

 @param Options Button
 @parent Buttons
 @type struct<Button>
 @desc  The options button opens the default options menu
 @default {"pos":"2","enable":"true","image":"options","commonEvent":"0"}

 @param Mute Button
 @parent Buttons
 @type struct<Button>
 @desc  The mute button mutes all audio
 @default {"pos":"3","enable":"true","image":"audio","commonEvent":"0"}

 @param Save Button
 @parent Buttons
 @type struct<Button>
 @desc  The mute button mutes all audio
 @default {"pos":"4","enable":"true","image":"save","commonEvent":"0"}

 @param Common Event Buttons
 @parent Buttons

 @param Common Event Button
 @parent Common Event Buttons
 @type struct<Button>
 @desc  An extra common event button.
 @default {"pos":"0","enable":"false","image":"options","commonEvent":"0"}

 @param Common Event Button 2
 @parent Common Event Buttons
 @type struct<Button>
 @desc  An extra common event button.
 @default {"pos":"0","enable":"false","image":"","commonEvent":"0"}

@param Common Event Button 3
 @parent Common Event Buttons
 @type struct<Button>
 @desc  An extra common event button.
 @default {"pos":"0","enable":"false","image":"","commonEvent":"0"}

 @param Button Sprite Frames
 @parent Buttons
 @type struct<ButtonFrames>
 @desc  Basic details about your buttons spritesheet frames.
 @default {"size":"64","normal":"0","touched":"1","disabled":"2"}

 @param Buttons Touch Sound
 @parent Buttons
 @desc  Sound effect when a button is touched
 @type struct<SoundEffect>
 @default {"name":"Cursor1","volume":"100","pitch":"100","pan":"0.5"}

 @param Addons/Extras

 @param Location
 @parent Addons/Extras
 @desc  Add the current map name with an icon.
 @type struct<Addon>
 @default {"enable":"true","containerX":"5","containerY":"0","icon":"191","el":"{\"enable\":\"true\",\"text\":\"Location: \",\"x\":\"0\",\"y\":\"0\",\"align\":\"left\",\"font\":\"GameFont\",\"fontSize\":\"24\"}","el1":"","el2":""}

 @param Play Time
 @parent Addons/Extras
 @desc  Add the playtime with an icon.
 @type struct<Addon>
 @default {"enable":"false","containerX":"5","containerY":"Graphics.boxHeight","icon":"0","el":"{\"enable\":\"false\",\"text\":\"Playtime: \",\"x\":\"0\",\"y\":\"0\",\"align\":\"left\",\"font\":\"GameFont\",\"fontSize\":\"24\"}","el1":"","el2":""}

 @param Quest Journal Addon
 @parent Addons/Extras
 @desc  Add information about the active quest (requires LTN Quest Journal)
 @type struct<Addon>
 @default {"enable":"false","containerX":"5","containerY":"575","icon":"0","el":"{\"enable\":\"true\",\"text\":\"\",\"x\":\"Graphics.boxWidth / 2\",\"y\":\"5\",\"align\":\"left\",\"font\":\"0\",\"fontSize\":\"24\"}","el1":"{\"enable\":\"true\",\"text\":\"\",\"x\":\"Graphics.boxWidth / 2\",\"y\":\"20\",\"align\":\"left\",\"font\":\"GameFont\",\"fontSize\":\"24\"}","el2":"{\"x\":\"0\",\"y\":\"0\",\"align\":\"left\",\"font\":\"0\"}"}

 @param Time Engine Addon
 @parent Addons/Extras
 @desc  Add information about the current time - Elements -> 1: WeekDay, 2:Month, 3: Time Clock
 @type struct<Addon>
 @default {"enable":"false","containerX":"5","containerY":"575","icon":"0","el":"{\"enable\":\"true\",\"text\":\"\",\"x\":\"Graphics.boxWidth\",\"y\":\"5\",\"align\":\"left\",\"font\":\"GameFont\",\"fontSize\":\"50\"}","el1":"{\"enable\":\"true\",\"text\":\"\",\"x\":\"Graphics.boxWidth\",\"y\":\"45\",\"align\":\"left\",\"font\":\"GameFont\",\"fontSize\":\"24\"}","el2":"{\"enable\":\"true\",\"text\":\"\",\"x\":\"Graphics.boxWidth\",\"y\":\"80\",\"align\":\"left\",\"font\":\"GameFont\",\"fontSize\":\"24\"}"}

 @param Social Media Buttons Addon
 @parent Addons/Extras
 @desc  Adds Social Media Buttons - Contains No Elements
 @type struct<Addon>
 @default {"enable":"false","containerX":"Graphics.boxWidth","containerY":"Graphics.boxHeight","icon":"0","el":"{\"x\":\"0\",\"y\":\"0\",\"align\":\"left\",\"font\":\"0\"}","el1":"{\"x\":\"0\",\"y\":\"0\",\"align\":\"left\",\"font\":\"0\"}","el2":"{\"x\":\"0\",\"y\":\"0\",\"align\":\"left\",\"font\":\"0\"}"}

@help
 ================================================================================
 ▼ TERMS OF USE
 ================================================================================
Credit must be given to: LTN Games

Exclusive to https://ltngames.net, please don't share anywhere else unless given strict permission by the author of the plugin.

The plugin may be used in commercial and non-commercial products.
Credit must be given!

Please report all bugs to https://ltngames.net/Support

 ================================================================================
 ▼ Instructions
 ================================================================================
 Install in your projects js/plugins directory

 This is a mouse/touch only plugin, meaning you cannot navigate the scene with a keyboard and is strict to only touch input and mouse input.

 All parameters are fairly basic to understand. All addon parameters are
 associated with my other plugins and cannot be used without them. So,
 do not enable those parameters unless you have the corresponding plugin
 installed in the same project.

 ---------------------------
 ▼ About Buton Sprite Sheets
 ---------------------------
 + All buttons require you to use an image, this image should contain 3 frames.
 + Button frames can only be 1 line long and only require 3 frames.
   + Each frame is a button state. Normal, Touched and Disabled.
   + Keep a consistent pattern for all buttons. If  your image is in the order of
   "Normal | Touched | Disabled", make sure all you images are the same way.
 + You can freely adjust the frame size in the plugin parameters and
 choose which frame should be which state.

 ---------------------------
 ▼ About Add-Ons
 ---------------------------
Time Engine, Quest Journal and Social Media Buttons add-ons all require you
to have the corresponding plugin installed and turned on.

=> Playtime - contains 1 element
  Main: The playtime and prefix

=> Location - contains 1 element
  Main: The location and prefix

=> Time Engine Add-on - contains 3 elements
 Main: Day of the week - Displays the current day of the week. Monday, Tuesday etc
 2: Month and Day - Displays the current month and the day of the month.
 3: Current Time - Displays the current time. 6:00AM

=> Quest Journal Add-on - Contains 2 elements
 Main: Quest Title - The current quests title
 2: Quest Objective - The current quest's objecive.

=> Social Media Buttons - Contains no elements
  ---------------------------
 ▼ Plugin Commands
 ---------------------------
 No Plugins commands are available with this plugins
*/

/* global QUEST Scene_Options ConfigManager Scene_Save */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof LTN === 'undefined') {
  var strA = 'You need to install the LTN Core plugin';
  var strB = ' in order for this plugin to work! Please visit';
  var strC = '\n http://ltngames.net/ltn-core';
  var strD = ' to download the latest verison.';
  throw new Error(strA + strB + strC + strD);
} else {
  LTN.PluginRegistrar.registerPlugin('PauseMode', '1.0.1', 'LTNGames');
}

;(function ($) {
  var _Utils = LTN.Utilities;
  var _PluginRegistrar = LTN.PluginRegistrar;

  $.Parameters = PluginManager.getPluginParameters('LTN_PauseMode');
  $.Param = $.Param || {};
  $.Param.pauseKey = $.Parameters['Pause Key'];
  $.Param.pauseText = _Utils.toObj($.Parameters['Pause Text']);
  $.Param.exitEnterSe = _Utils.toObj($.Parameters['Enter/Exit Sound']);
  $.Param.pauseBackground = _Utils.toObj($.Parameters['Pause Background']);
  $.Param.overrideMenuAccess = _Utils.toBool($.Parameters['Override Menu Access']);
  $.Param.buttons = {
    return: _Utils.toObj($.Parameters['Return Button']),
    menu: _Utils.toObj($.Parameters['Menu Button']),
    audio: _Utils.toObj($.Parameters['Mute Button']),
    options: _Utils.toObj($.Parameters['Options Button']),
    save: _Utils.toObj($.Parameters['Save Button'])
  };
  $.Param.ceButtons = {
    1: _Utils.toObj($.Parameters['Common Event Button']),
    2: _Utils.toObj($.Parameters['Common Event Button 2']),
    3: _Utils.toObj($.Parameters['Common Event Button 3'])
  };
  $.Param.buttonOptions = {
    container: _Utils.toObj($.Parameters['Buttons Container']),
    frames: _Utils.toObj($.Parameters['Button Sprite Frames']),
    sound: _Utils.toObj($.Parameters['Buttons Touch Sound'])
  };
  $.Param.mapName = _Utils.toObj($.Parameters['Location']);
  $.Param.playtime = _Utils.toObj($.Parameters['Play Time']);
  $.Param.socialButtons = _Utils.toObj($.Parameters['Social Media Buttons Addon']);
  $.Param.questJournal = _Utils.toObj($.Parameters['Quest Journal Addon']);
  $.Param.timeEngine = _Utils.toObj($.Parameters['Time Engine Addon']);

  var keyPress = function keyPress() {
    if (Input.isTriggered($.Param.pauseKey)) {
      if (SceneManager.isScene(Scene_Map)) {
        SceneManager.push(Scene_GamePause);
      }
    }
  };
  /** -----------------------------------------------------------------------
   * Alised Native Methods >>
   *
   ------------------------------------------------------------------------ */
  $.Alias.Scene_Map_Update = Scene_Map.prototype.update;
  Scene_Map.prototype.update = function () {
    $.Alias.Scene_Map_Update.call(this);
    keyPress();
  };

  $.Alias.Scene_Map_updateCallMenu = Scene_Map.prototype.updateCallMenu;
  Scene_Map.prototype.updateCallMenu = function () {
    if ($.Param.overrideMenuAccess && this.isMenuCalled()) {
      AudioManager.playSe($.Param.exitEnterSe);
      SceneManager.push(Scene_GamePause);
    } else {
      $.Alias.Scene_Map_updateCallMenu.call(this);
    }
  };
  /** -----------------------------------------------------------------------
   * AudioManager New Methods & Proeprties >>
   *
   * @TODO - Add or merge to LTN Core
   *
   ------------------------------------------------------------------------ */
  AudioManager._isMuted = false;

  AudioManager._savedVolume = {};

  AudioManager.isMute = function () {
    return this._isMuted === true;
  };

  AudioManager.saveVolume = function () {
    this._savedVolume = {
      bgm: AudioManager.bgmVolume,
      bgs: AudioManager.bgsVolume,
      me: AudioManager.meVolume,
      se: AudioManager.seVolume
    };
  };

  AudioManager.restoreVolume = function () {
    this.bgmVolume = this._savedVolume.bgm || 15;
    this.bgsVolume = this._savedVolume.bgs || 15;
    this.meVolume = this._savedVolume.me || 15;
    this.seVolume = this._savedVolume.se || 15;
  };

  AudioManager.muteAudio = function () {
    if (!this._isMuted) {
      this.saveVolume();
      this.bgmVolume = 0;
      this.bgsVolume = 0;
      this.meVolume = 0;
      this.seVolume = 0;
      this._isMuted = true;
    } else if (this._isMuted) {
      this.restoreVolume();
      this._isMuted = false;
    }
  };

  /** -----------------------------------------------------------------------
   * Config Manager New Methods & Proeprties >>
   *
   * @TODO - Add or merge to LTN Core
   *
   ------------------------------------------------------------------------ */
  Object.defineProperty(ConfigManager, 'isMuted', {
    get: function get() {
      return AudioManager.isMute();
    },
    set: function set(value) {
      AudioManager._isMuted = value;
    },
    configurable: true
  });

  Object.defineProperty(ConfigManager, 'volumeBeforeMute', {
    get: function get() {
      return AudioManager._savedVolume;
    },
    set: function set(value) {
      AudioManager._savedVolume = value;
    },
    configurable: true
  });

  $.Alias.ConfigManager_makeData = ConfigManager.makeData;
  ConfigManager.makeData = function () {
    var config = $.Alias.ConfigManager_makeData.call(this);
    config.isMuted = this.isMuted;
    config.volumeBeforeMute = this.volumeBeforeMute;
    return config;
  };

  $.Alias.ConfigManager_applyData = ConfigManager.applyData;
  ConfigManager.applyData = function (config) {
    $.Alias.ConfigManager_applyData.call(this, config);
    this.isMuted = config.isMuted;
    this.volumeBeforeMute = config.volumeBeforeMute;
  };

  /** -----------------------------------------------------------------------
   * PauseModeButton >>
   *
   *  @TODO Merge with LTN Core as a general button usable across plugins
   *
   ------------------------------------------------------------------------ */

  var PauseModeButton = function (_Sprite_Button) {
    _inherits(PauseModeButton, _Sprite_Button);

    /**
     * A button for the pause mode
     *
     * @param {*} src - The image source for the button
     * @param {*} x - The x position of the button
     * @param {*} y - The y position of the button
     */
    function PauseModeButton(data, x, y) {
      _classCallCheck(this, PauseModeButton);

      var _this = _possibleConstructorReturn(this, (PauseModeButton.__proto__ || Object.getPrototypeOf(PauseModeButton)).call(this));

      _get(PauseModeButton.prototype.__proto__ || Object.getPrototypeOf(PauseModeButton.prototype), 'initialize', _this).call(_this);
      _this._size = $.Param.buttonOptions.frames.size;
      _this._data = data;
      _this.bitmap = data.src;
      _this.setClickHandler(data.action);
      _this._isTouched = false;
      _this._mousePos = {};
      _this._isEnabled = true;
      _this.initializeFrames();
      return _this;
    }

    _createClass(PauseModeButton, [{
      key: 'initializeFrames',
      value: function initializeFrames() {
        this._touchedFrame = $.Param.buttonOptions.frames.touched * this._size;
        this._disabledFrame = $.Param.buttonOptions.frames.disabled * this._size;
        this._normalFrame = $.Param.buttonOptions.frames.normal * this._size;
        this.setColdFrame(this._normalFrame, 0, this._size, this._size);
        this.setHotFrame(this._touchedFrame, 0, this._size, this._size);
        this.setFrame(this._normalFrame, 0, this._size, this._size);
      }
    }, {
      key: 'callClickHandler',
      value: function callClickHandler() {
        if (this._clickHandler) {
          this._clickHandler(this._data.type, this);
        }
      }
    }, {
      key: 'updateMousePosition',
      value: function updateMousePosition(event) {
        this._mousePos.x = event.pageX;
        this._mousePos.y = event.pageY;
      }
    }, {
      key: 'update',
      value: function update() {
        _get(PauseModeButton.prototype.__proto__ || Object.getPrototypeOf(PauseModeButton.prototype), 'update', this).call(this);
      }
    }, {
      key: 'commonEvent',
      value: function commonEvent() {
        return this._data.commonEvent;
      }
    }, {
      key: 'updateFrame',
      value: function updateFrame(event) {
        var frame = null;
        if (this.isButtonTouching() && !this._isTouched && this._isEnabled) {
          AudioManager.playSe($.Param.buttonOptions.sound);
          frame = this._hotFrame;
          this._isTouched = true;
        } else if (this._isTouched && !this.isButtonTouching()) {
          frame = this._coldFrame;
          this._isTouched = false;
        }
        if (frame && this._isEnabled) {
          this.setFrame(frame.x, frame.y, frame.width, frame.height);
        }
      }
    }, {
      key: 'isButtonTouching',
      value: function isButtonTouching() {
        if (!this._mousePos.x || !this._mousePos.y) {
          return false;
        }
        var x = this.canvasToLocalX(Graphics.pageToCanvasX(this._mousePos.x));
        var y = this.canvasToLocalY(Graphics.pageToCanvasY(this._mousePos.y));
        return x >= 0 && y >= 0 && x < this.width && y < this.height;
      }
    }, {
      key: 'setDisabled',
      value: function setDisabled() {
        this.setFrame(this._disabledFrame, 0, this._size, this._size);
        this._isEnabled = false;
      }
    }, {
      key: 'setEnabled',
      value: function setEnabled() {
        this.setFrame(this._normalFrame, 0, this._size, this._size);
        this._isEnabled = true;
      }
    }, {
      key: 'setPosition',
      value: function setPosition(x, y) {
        this.x = x;
        this.y = y;
      }
    }]);

    return PauseModeButton;
  }(Sprite_Button);
  /** -----------------------------------------------------------------------
   * Button Container >>
   *
   *  Contians all pause mode buttons.
   *
   ------------------------------------------------------------------------ */


  var ButtonContainer = function (_Sprite_Button2) {
    _inherits(ButtonContainer, _Sprite_Button2);

    /**
     * A cotnainer to hold all social media buttons
     *
     * @param {*} x - The x position of the container
     * @param {*} y - The y position of the container
     */
    function ButtonContainer(x, y, onPress) {
      _classCallCheck(this, ButtonContainer);

      var _this2 = _possibleConstructorReturn(this, (ButtonContainer.__proto__ || Object.getPrototypeOf(ButtonContainer)).call(this));

      _this2._onPress = onPress;
      _this2._listener = _this2.processButtonTouching.bind(_this2);
      document.addEventListener('mousemove', _this2._listener);
      _this2.createButtons();
      return _this2;
    }

    _createClass(ButtonContainer, [{
      key: 'processButtonTouching',
      value: function processButtonTouching(event) {
        this.children.forEach(function (button) {
          return button.updateMousePosition(event);
        });
      }
    }, {
      key: 'createButtons',
      value: function createButtons() {
        var _this3 = this;

        var ceButton = $.Param.ceButtons;
        var gameButtons = $.Param.buttons;
        var sources = Object.assign({}, ceButton, gameButtons);

        /* Filter sources and check if enabled is true - It's a string because parameters are strings */
        Object.keys(sources).filter(function (button) {
          return sources[button].enable === true;
        }).forEach(function (button) {
          var options = sources[button];
          if (!options.enable) {
            return;
          }
          var pos = options.pos;
          var spacing = $.Param.buttonOptions.container.spacing;
          var x = pos === 1 ? 0 : pos === 2 ? spacing : spacing * (pos - 1);
          var data = {
            /* Common events are #s, so ensure type = 'common' */
            type: !isNaN(button) ? 'common' : button,
            src: ImageManager.loadSystem(options.image),
            action: _this3._onPress,
            commonEvent: options.commonEvent
          };
          var spriteButton = new PauseModeButton(data);
          _this3.addChild(spriteButton);
          spriteButton.bitmap.addLoadListener(function () {
            spriteButton.setPosition(x + spriteButton.width, 0);
            _this3.resize();
            if (!$gameSystem.isMenuEnabled() && button === 'menu') {
              spriteButton.setDisabled();
            }
            if (AudioManager.isMute() && button === 'audio') {
              spriteButton.setDisabled();
            }
            if (!$gameSystem.isSaveEnabled() && button === 'save') {
              spriteButton.setDisabled();
            }
          });
        });
      }
    }, {
      key: 'setPosition',
      value: function setPosition() {
        var opts = $.Param.buttonOptions.container;
        var x = _Utils.tryEval(opts.containerX);
        var y = _Utils.tryEval(opts.containerY);
        this.x = this.x >= Graphics.boxWidth ? x - this.getBounds().width : x;
        this.y = this.y >= Graphics.boxHeight ? y - this.getBounds().height : y;
      }
    }, {
      key: 'resize',
      value: function resize() {
        this.calculateBounds();
        this.setPosition();
      }
    }, {
      key: 'removeListener',
      value: function removeListener() {
        document.removeEventListener('mousemove', this._listener);
      }
    }]);

    return ButtonContainer;
  }(Sprite_Button);
  /** -----------------------------------------------------------------------
   * Scene_GamePause >>
   *
   *
   ------------------------------------------------------------------------ */


  var Scene_GamePause = function (_Scene_MenuBase) {
    _inherits(Scene_GamePause, _Scene_MenuBase);

    function Scene_GamePause() {
      _classCallCheck(this, Scene_GamePause);

      return _possibleConstructorReturn(this, (Scene_GamePause.__proto__ || Object.getPrototypeOf(Scene_GamePause)).apply(this, arguments));
    }

    _createClass(Scene_GamePause, [{
      key: 'terminate',
      value: function terminate() {
        _get(Scene_GamePause.prototype.__proto__ || Object.getPrototypeOf(Scene_GamePause.prototype), 'terminate', this).call(this);
        this._buttonContianer.removeListener();
        ConfigManager.save();
      }
    }, {
      key: 'create',
      value: function create() {
        this.createPauseBackground();
        this.createInfoContainer();
        this.createButtonContainer();
        this.createPauseText();
        this.createMapName();
        this.createPlaytime();
        this.createSocialMediaButtons();
        this.createActiveQuestText();
        this.createGameTimeText();
      }
    }, {
      key: 'createButtonContainer',
      value: function createButtonContainer() {
        this._buttonContianer = new ButtonContainer(0, 0, this.onButtonPress.bind(this));
        this.addChild(this._buttonContianer);
      }
    }, {
      key: 'createInfoContainer',
      value: function createInfoContainer() {
        this._infoContainer = new PIXI.Container();
        this.addChild(this._infoContainer);
      }
    }, {
      key: 'createGameTimeText',
      value: function createGameTimeText() {
        var opts = $.Param.timeEngine;
        var el = _Utils.toObj(opts.el);
        var el1 = _Utils.toObj(opts.el1);
        var el2 = _Utils.toObj(opts.el2);
        var timeEngine = LTN.PluginRegistrar.requirePlugin(false, 'TimeEngine');
        var gameTime = timeEngine.gameTime;
        if (gameTime && opts.enable) {
          var month = gameTime.currentDate().month.name + ' ' + gameTime.currentDate().day;
          var weekDay = gameTime.currentDate().week.name;
          var time = _Utils.toTimeFormat(null, null, gameTime.currentTime());
          this.createTextSprite(weekDay, _Utils.tryEval(el.x), _Utils.tryEval(el.y), el.fontSize, el.align);
          this.createTextSprite(month, _Utils.tryEval(el1.x), _Utils.tryEval(el1.y), el1.fontSize, el1.align);
          this.createTextSprite(time, _Utils.tryEval(el2.x), _Utils.tryEval(el2.y), el2.fontSize, el2.align);
        }
      }
    }, {
      key: 'createActiveQuestText',
      value: function createActiveQuestText() {
        var opts = $.Param.questJournal;
        if (typeof QUEST !== 'undefined' && opts.enable) {
          var el = _Utils.toObj(opts.el);
          var el1 = _Utils.toObj(opts.el1);
          var quest = QUEST.activeQuest;
          if (!quest) {
            return;
          }
          var name = quest.name;
          var step = quest.steps[quest.step - 1].desc;
          this.createTextSprite(el.ext + name, _Utils.tryEval(el.x), _Utils.tryEval(el.y), el.fontSize, el.align);
          this.createTextSprite(el1.ext + step, _Utils.tryEval(el1.x), _Utils.tryEval(el1.y), el1.fontSize, el1.align);
        }
      }
    }, {
      key: 'createSocialMediaButtons',
      value: function createSocialMediaButtons() {
        var opts = $.Param.socialButtons;
        if (!opts.enable) {
          return;
        }
        var SMB = _PluginRegistrar.requirePlugin(false, 'SocialMediaButtons');
        if (!SMB) {
          throw new Error('Pause Mode: Cannot find plugin "Social Media Buttons"');
        }
        var x = _Utils.tryEval(opts.containerX);
        var y = _Utils.tryEval(opts.containerY);
        var container = new SMB.SocialMediaContainer(x, y);
        this.addChild(container);
      }
    }, {
      key: 'createPlaytime',
      value: function createPlaytime() {
        var opts = $.Param.playtime;
        if (!opts.enable) {
          return;
        }
        var element = _Utils.toObj(opts.el);
        var playtime = $gameSystem.playtimeText();
        var x = _Utils.tryEval(opts.containerX) || 0;
        var y = _Utils.tryEval(opts.containerY) || 0;
        var text = element.text || 'Playtime: ';
        var font = element.fontSize || 18;
        var align = element.align || 'left';
        this.createTextSprite(text + playtime, x, y, font, align);
      }
    }, {
      key: 'createMapName',
      value: function createMapName() {
        var opts = $.Param.mapName;
        if (!opts.enable) {
          return;
        }
        var element = _Utils.toObj(opts.el);
        var mapName = $gameMap.displayName();
        var x = _Utils.tryEval(opts.containerX) || 0;
        var y = _Utils.tryEval(opts.containerY) || 0;
        var text = element.text || 'Location: ';
        var font = element.fontSize || 18;
        var align = element.align || 'left';
        this.createTextSprite(text + mapName, x, y, font, align);
      }
    }, {
      key: 'createPauseText',
      value: function createPauseText() {
        var opts = $.Param.pauseText;
        if (!opts.enable) {
          return;
        }
        var x = _Utils.tryEval(opts.x);
        var y = _Utils.tryEval(opts.y);
        this.createTextSprite(opts.text, x, y, opts.fontSize, opts.align);
      }
    }, {
      key: 'createTextSprite',
      value: function createTextSprite(text, x, y, fontSize, align) {
        var bitmap = new Bitmap(Graphics.boxWidth, Graphics.boxHeight);
        bitmap.outlineColor = 'black';
        bitmap.outlineWidth = 5;
        bitmap.fontSize = fontSize || 24;
        bitmap.drawText(text, 0, 0, Graphics.width, 50, align);

        var textWidth = bitmap.measureTextWidth(text);
        var sprite = new Sprite(bitmap);
        sprite.x = x >= Graphics.boxWidth ? Graphics.boxWidth - (textWidth + 10) : x;
        sprite.y = y >= Graphics.boxHeight ? Graphics.boxHeight - fontSize * 2 : y;
        this._infoContainer.addChild(sprite);
      }
    }, {
      key: 'createDarkRect',
      value: function createDarkRect(x, y, width, height) {
        var bitmap = new Bitmap(Graphics.boxWidth, Graphics.boxHeight);
        var sprite = new Sprite(bitmap);
        var color1 = 'rgba(0, 0, 0, 0.6)';
        var color2 = 'rgba(0, 0, 0, 0)';
        bitmap.gradientFillRect(x, y, width / 2, height, color2, color1);
        bitmap.gradientFillRect(x + width / 2, y, width / 2, height, color1, color2);
        this.addChild(sprite);
      }
    }, {
      key: 'createPauseBackground',
      value: function createPauseBackground() {
        var opts = $.Param.pauseBackground;
        var customBg = null;
        if (opts.custom) {
          customBg = ImageManager.loadBitmap('img/', opts.custom);
        }
        var bitmap = opts.blur ? SceneManager.backgroundBitmap() : customBg;
        this._pauseSprite = new Sprite(bitmap);
        this.addChild(this._pauseSprite);
        if (opts.darkRect) {
          this.createDarkRect(0, 0, Graphics.boxWidth, Graphics.boxHeight);
        }
      }
    }, {
      key: 'returnToMap',
      value: function returnToMap() {
        AudioManager.playSe($.Param.exitEnterSe);
        SceneManager.goto(Scene_Map);
      }
    }, {
      key: 'update',
      value: function update() {
        _get(Scene_GamePause.prototype.__proto__ || Object.getPrototypeOf(Scene_GamePause.prototype), 'update', this).call(this);
        if (Input.isTriggered('menu') || TouchInput.isCancelled()) {
          this.returnToMap();
        }
      }
    }, {
      key: 'onButtonPress',
      value: function onButtonPress(type, button) {
        switch (type) {
          case 'menu':
            if (this.isMenuEnabled()) {
              SceneManager.push(Scene_Menu);
            } else {
              SoundManager.playBuzzer();
            }
            break;
          case 'audio':
            if (ConfigManager.isMuted) {
              button.setEnabled();
            } else {
              button.setDisabled();
            }
            AudioManager.muteAudio();
            break;
          case 'options':
            SceneManager.push(Scene_Options);
            break;
          case 'save':
            if ($gameSystem.isSaveEnabled()) {
              SceneManager.push(Scene_Save);
            } else {
              SoundManager.playBuzzer();
            }
            break;
          case 'return':
            this.returnToMap();
            break;
          case 'common':
            this.returnToMap();
            setTimeout(function () {
              $gameTemp.reserveCommonEvent(button.commonEvent());
              $gameMap.requestRefresh();
            }, 300);
            break;
          default:
            break;
        }
      }
    }, {
      key: 'isMenuEnabled',
      value: function isMenuEnabled() {
        return $gameSystem.isMenuEnabled() && !$gameMap.isEventRunning();
      }
    }]);

    return Scene_GamePause;
  }(Scene_MenuBase);
})(LTN.PluginRegistrar.requirePlugin(false, 'PauseMode'));
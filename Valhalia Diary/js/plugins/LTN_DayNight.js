// =============================================================================
// LTN_DayNight.js
// =============================================================================
// Version 1.2.2
/*~struct~TimeTint:
  @param name
  @text Phase Name
  @default morning
  @desc The name of this tint or cycle's phase

  @param tint
  @text Tint Values
  @default -34, -17, 10, 68
  @desc The tint values in rgba

  @param hour
  @text Hour To Tint
  @default 6
  @type number
  @desc The hour of the day for the tint to activate
*/
/*:
 *@plugindesc v 1.2.2 Adds a day and night cycle for LTN TimeEngine.
 <LTN_DayNight>

 @author LTN Games (https://ltngames.net)

 @param  Time Of Day Sync

 @param TOD Variable
 @parent Time Of Day Sync
 @type variable
 @desc This variable will be updated with the current time of day.
 @default 0

 @param TOD Common Event
 @parent Time Of Day Sync
 @type common_event
 @desc This common event will run once each time of day or tint change
 @default 0

 @param  Tints & Time

 @param Tint speed
 @parent Tints & Time
 @desc This determines how fast the tint will appear. It will
 @type number
 gradually increase until it reaches the max time entered here.
 @default 60

 @param Morning Time
 @parent Tints & Time
 @type struct<TimeTint>
 @desc The morning time phase settings. The tint values and hour to activate.
 @default {"name":"morning","tint":"-34, -17, 10, 68","hour":"6"}

 @param Day Time
 @parent Tints & Time
 @type struct<TimeTint>
 @desc The day time phase settings. The tint values and hour to activate.
 @default {"name":"day","tint":"0, 0, 0, 0","hour":"8"}

 @param Noon Time
 @parent Tints & Time
 @type struct<TimeTint>
 @desc The noon time phase settings. The tint values and hour to activate.
 @default {"name":"noon","tint":"0, 0, 0, 0","hour":"12"}

 @param Evening Time
 @parent Tints & Time
 @type struct<TimeTint>
 @desc The evening time phase settings. The tint values and hour to activate.
 @default {"name":"evening","tint":"17, -34, -68, 17","hour":"17"}

 @param Night Time
 @parent Tints & Time
 @type struct<TimeTint>
 @desc The night time phase settings. The tint values and hour to activate.
 @default {"name":"night","tint":"-102, -85, 0, 170","hour":"20"}

 @help
================================================================================
▼ TERMS OF USE
================================================================================
Credit must be given to: LTN Games

Exclusive to https://ltngames.net, please don't share anywhere else unless given strict
permission by the author of the plugin.

The plugin may be used in commerical and non-commerical products.
Credit must be given!

Please report all bugs to https://ltngames.net/Support

===============================================================================
▼ DEPENDENCIES
===============================================================================
 Requires LTN Core.
 Requires LTN TimeEngine

===============================================================================
▼ INFORMATION
===============================================================================
This plugin is an add-on for "LTN TimeEngine", it will give you options to change
the tint of the game when a certain time is reached.

 ============================================================================
 ▼ DONATIONS
 ============================================================================
Most of the plugins I write are free to use commercially, and I put a lot of
hours into the development of my plugins, If you like my work and want to see
more of it in the future, I ask that you consider offering a donation.

If you do wish to provide your support, you can do so by sending your
contribution via PayPal to: ttps://ltngames.net/Donate

===============================================================================
▼ INSTRUCTIONS
===============================================================================
To use this plugin you first have to setup all tints and times in the
parameters, you may use the default tints and times.

==================
Time Of Day Variable
==================
The plugin parameter "Time Of Day Variable" will update a variable with a number
each time the tint changes. It will be either 0, 1, 2, 3 or 4
'morning' = 0,
'day' = 1
'noon' = 2
'evening' = 3
'night' = 4

=======================
No Tint Notetag
========================
If there is a map you don't want to be affected by the tints, like an indoor map
open the map properties and enter <NoTint> in the notes section. This will turn
off all screen tints.

<NoTint> is case sensitive please ensure you type it exactly as seen here.

*/
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof LTN === 'undefined') {
  var strA = 'You need to install the LTN Core plugin';
  var strB = 'in order for this plugin to work! Please visit';
  var strC = '\n http://ltngames.net/ltn-core';
  var strD = ' to download the latest verison.';
  throw new Error(strA + strB + strC + strD);
} else {
  var requiredPlugins = ['TimeEngine'];
  // Set plugin namespace
  LTN.PluginRegistrar.registerPlugin('DayNight', '1.2.2', 'LTNGames', requiredPlugins);
}
;(function ($) {
  /** ----------------------------------------------------
   * IMPORT Plugin(Time Engine) and Utilities from LTNCore >>
   ------------------------------------------------------- */
  var TimeEngine = LTN.PluginRegistrar.requirePlugin(false, 'TimeEngine');
  var Game_Time = TimeEngine.Game_Time;
  var _Utils = LTN.Utilities;
  var noTintTag = [];
  var tintCleared = false;
  /** ----------------------------------------------------
      * Parameters >>
  ------------------------------------------------------- */
  $.Parameters = PluginManager.getPluginParameters('LTN_DayNight');
  $.Param = $.Param || {};
  $.Param.tintSpeed = Number($.Parameters['Tint Speed']);
  $.Param.todVar = Number($.Parameters['TOD Variable']);
  $.Param.todCommonEvent = Number($.Parameters['TOD Common Event']);

  $.Param.morning = _Utils.toObj($.Parameters['Morning Time']);
  $.Param.day = _Utils.toObj($.Parameters['Day Time']);
  $.Param.noon = _Utils.toObj($.Parameters['Noon Time']);
  $.Param.evening = _Utils.toObj($.Parameters['Evening Time']);
  $.Param.night = _Utils.toObj($.Parameters['Night Time']);

  var _paramTints = [$.Param.morning, $.Param.day, $.Param.noon, $.Param.evening, $.Param.night];
  /**
   * Signal
   *
   * Event Pub/Sub for important events in day and night changes.
   *
   */
  var Signal = function Signal() {
    var _signals = LTN.SignalDispatcher();
    return {
      on(signal, handler, context) {
        _signals.add(signal, handler, context);
      },

      emit(signal, message) {
        _signals.emit(signal, message);
      }
    };
  };

  /**
   * This class is an extension to Time Engine's game time class.
   * Sets up and updates tints automaticaly
   *
   * @class Time_DayNight
   */

  var Time_DayNight = function (_Game_Time) {
    _inherits(Time_DayNight, _Game_Time);

    function Time_DayNight() {
      _classCallCheck(this, Time_DayNight);

      var _this = _possibleConstructorReturn(this, (Time_DayNight.__proto__ || Object.getPrototypeOf(Time_DayNight)).call(this));

      _this._gameTime = TimeEngine.gameTime;
      _this._currentTime = _this._gameTime.currentTime();
      _this._noTintMap = false;
      _this._tintSpeed = $.Param.tintSpeed || 60;
      _this._currentPhase = null;
      _this._phases = [];
      _this.signal = Signal();
      _this.setupTintTimes();
      return _this;
    }

    _createClass(Time_DayNight, [{
      key: 'setupTintTimes',
      value: function setupTintTimes() {
        var _this2 = this;

        _paramTints.forEach(function (tint, index) {
          _paramTints[index].tint = _Utils.toArray(_paramTints[index].tint);
          _paramTints[index].active = false;
          _this2._phases.push(_paramTints[index]);
        });
        this._currentPhase = this.firstPhase();
      }
    }, {
      key: 'clearMapTint',
      value: function clearMapTint() {
        if (!tintCleared) {
          $gameScreen.startTint([0, 0, 0, 0], 0);
          tintCleared = true;
        }
      }
    }, {
      key: 'updateTints',
      value: function updateTints() {
        if (noTintTag) {
          this.clearMapTint();
          return;
        }
        if (!SceneManager.isScene(Scene_Map)) {
          return;
        }
        if (this.isPhaseReady(this.nextPhase())) {
          $gameVariables.setValue($.Param.todVar, this.getTintId());
          $gameTemp.reserveCommonEvent($.Param.todCommonEvent);
          this.setPhase(this.nextPhase());
        }
      }
    }, {
      key: 'getTintId',
      value: function getTintId() {
        var tints = ['morning', 'day', 'noon', 'evening', 'night'];
        return tints.indexOf(this.currentPhase().name);
      }
    }, {
      key: 'setPhase',
      value: function setPhase(phase) {
        this._currentPhase.active = false;
        this._currentPhase = phase;
        this._currentPhase.active = true;
        $gameScreen.startTint(phase.tint, this._tintSpeed);
        this.signal.emit('tint-change', phase);
      }
    }, {
      key: 'currentPhase',
      value: function currentPhase() {
        return this._currentPhase;
      }
    }, {
      key: 'nextPhase',
      value: function nextPhase() {
        var current = this.currentPhase().hour;
        return this.isLastPhase() ? this.firstPhase() : this._phases.filter(function (phase) {
          return phase.hour > current;
        }).sort(function (a, b) {
          return a.hour - b.hour;
        })[0];
      }
    }, {
      key: 'isPhaseReady',
      value: function isPhaseReady(phase) {
        if (this.isLastPhase()) {
          if (phase.hour < this._currentTime.hour) {
            return false;
          }
        }
        return !phase.active && this._currentTime.hour >= phase.hour;
      }
    }, {
      key: 'firstPhase',
      value: function firstPhase() {
        return this._phases.sort(function (a, b) {
          return a.hour - b.hour;
        })[0];
      }
    }, {
      key: 'lastPhase',
      value: function lastPhase() {
        return this._phases.sort(function (a, b) {
          return b.hour - a.hour;
        })[0];
      }
    }, {
      key: 'isLastPhase',
      value: function isLastPhase() {
        return this.currentPhase().name === this.lastPhase().name && this.lastPhase().active;
      }
    }, {
      key: 'timeToNextPhase',
      value: function timeToNextPhase() {
        return this.isLastPhase() ? this.firstPhase().hour : this.nextPhase().hour;
      }
      /* End Of Class */

    }]);

    return Time_DayNight;
  }(Game_Time);

  /** ----------------------------------------------------
   * SceneMap Update >>
  ------------------------------------------------------- */


  $.Alias.SceneMap_update = Scene_Map.prototype.update;

  Scene_Map.prototype.update = function () {
    $.dayNight.updateTints();
    $.Alias.SceneMap_update.call(this);
  };

  /** ----------------------------------------------------
   * Game_Player >>
  ------------------------------------------------------- */
  $.Alias.GamePlayer_performTransfer = Game_Player.prototype.performTransfer;
  Game_Player.prototype.performTransfer = function () {
    // Tint screen instantly upon transferring.
    $gameScreen.startTint($.dayNight.currentPhase().tint || [0, 0, 0, 0], 0);
    $.Alias.GamePlayer_performTransfer.call(this);
  };

  /** ----------------------------------------------------
   * Plugin Commands >>
   *
   ------------------------------------------------------- */
  $.Alias.GameInterp_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function (command, args) {
    if (command.toLowerCase() === 'daynight') {
      switch (args[0].toLowerCase().trim()) {
        case 'next':
          var toNextCycle = $.dayNight.timeToNextPhase();
          TimeEngine.gameTime.setTime(toNextCycle, 0);
          break;
        default:
          console.log('Error: Not a Day Night plugin command');
          break;
      }
    } else {
      $.Alias.GameInterp_pluginCommand.call(this, command, args);
    }
  };

  /** -----------------------------------------------------------------------
   * Save And Load Core Signals >>
   ------------------------------------------------------------------------ */
  LTN.CoreSignals.add('map-loaded', function (datamap) {
    var meta = _Utils.getMetaData(datamap, 'notint');
    tintCleared = false;
    noTintTag = meta;
  });

  LTN.CoreSignals.add('new-game', function () {
    $.dayNight = new Time_DayNight();
  });

  LTN.CoreSignals.add('game-save', function (contents) {
    $.SaveData = {
      dayNight: {
        _currentTime: $.dayNight._currentTime,
        _currentPhase: $.dayNight._currentPhase,
        _phases: $.dayNight._phases
      }
    };
  });
  /** ----------------------------------------------------
   * EXPORT FOR ADD-ONS>>
   ------------------------------------------------------- */
})(LTN.PluginRegistrar.requirePlugin(false, 'DayNight'));
/*:
 * @author ScSWinter
 * @plugindesc v0.9.0 Improves the audio management during the game.
 *
 * @help
 * =======================================================
 * Introduction
 * =======================================================
 * This script allows you to incorporate some improvements
 * in the audio management made by the game engine.
 *
 *
 * =======================================================
 * Credits
 * =======================================================
 * Please, credit to "ScSWinter" in the credits of your game.
 *
 *
 * =======================================================
 * Changelog
 * =======================================================
 * v0.9.0 Preload battle BGM and ME changes in events.
 * v0.8.5 Refresh battle BGM cache on map changes.
 * v0.8.4 Fixed a bug with possible empty play commands.
 * v0.8.3 Added the option "Always use M4A files".
 * v0.8.2 Fixed an error with encrypted preloading.
 * v0.8.1 Avoid the need of map-cache to use the new option.
 * v0.8.0 Option to force map bgm-bgs based on switches.
 * v0.7.1 Added title bgm early load with DataManager.
 * v0.7.0 Added map bgm and bgs early load with DataManager.
 * v0.6.1 Fixed a reference bug with tmax variable.
 * v0.6.0 Limit the max-preemptive cache to max-cache.
 * v0.5.2 Fixed a bug with out-of-focus audio in mobile.
 * v0.5.1 Organized plugin parameters.
 * v0.5.0 Added the "Global Volume" options.
 * v0.4.0 Added the option "Always use OGG files".
 * v0.3.1 Solved a out-of-range bug with animationId.
 * v0.3.0 First public release of the plugin.
 *
 *
 * =======================================================
 * License: The MIT License
 * =======================================================
 * Copyright 2020 ScSWinter
 *
 * Permission is hereby granted, free of charge, to any
 * person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the
 * Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall
 * be included in all copies or substantial portions of the
 * Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
 * KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *
 *
 * @param --- General ---
 * @desc
 *
 * @param Stop out-focus audio
 * @type boolean
 * @parent --- General ---
 * @on Yes
 * @off No
 * @desc Stop audio when the game is out focus?
 * @default true
 *
 * @param Always use OGG files
 * @type boolean
 * @parent --- General ---
 * @on Yes
 * @off No
 * @desc You can delete m4a files after you export the game
 * (reducing size), but Safari will not play sound.
 * @default false
 *
 * @param Always use M4A files
 * @type boolean
 * @parent --- General ---
 * @on Yes
 * @off No
 * @desc You can delete ogg files after you export the game
 * (reducing size) but only works when we export as website.
 * @default false
 *
 * @param Mark audio files as used
 * @type file[]
 * @parent --- General ---
 * @desc Audio files added here will not be deleted when the
 * game is exported with the "remove unused files" option.
 * @require 1
 * @dir audio/
 * @default []
 *
 * @param Debug
 * @type boolean
 * @parent --- General ---
 * @on Yes
 * @off No
 * @desc Show debug messages. Be sure to leave it as "No"
 * when you export and distribute your game.
 * @default false
 *
 *
 * @param --- Global Volume ---
 * @desc
 *
 * @param Add a global volume
 * @type boolean
 * @parent --- Global Volume ---
 * @on Yes
 * @off No
 * @desc Add a global volume control on the options window.
 * @default true
 *
 * @param Remove secondary volumes
 * @type boolean
 * @parent --- Global Volume ---
 * @on Yes
 * @off No
 * @desc Remove secondary volume controls from options window.
 * @default true
 *
 * @param Use quadratic volume
 * @type boolean
 * @parent --- Global Volume ---
 * @on Yes
 * @off No
 * @desc Improve perception, when the volume is changed, using
 * a quadratic function.
 * @default true
 *
 * @param Global volume name
 * @parent --- Global Volume ---
 * @desc The name that will have the global menu option.
 * @default Volume
 *
 *
 * @param --- Audio Cache ---
 * @desc
 *
 * @param Cache of used audios
 * @type boolean
 * @parent --- Audio Cache ---
 * @on Yes
 * @off No
 * @desc Store in cache the recently used audio files?
 * @default true
 *
 * @param BGM cache size
 * @type number
 * @parent --- Audio Cache ---
 * @min 2
 * @max 12
 * @desc Maximum number of BGM stored (default 7).
 * Increase this number reduces lag but increases memory.
 * @default 7
 *
 * @param BGS cache size
 * @type number
 * @parent --- Audio Cache ---
 * @min 2
 * @max 12
 * @desc Maximum number of BGS stored (default 5).
 * Increase this number reduces lag but increases memory.
 * @default 5
 *
 * @param ME cache size
 * @type number
 * @parent --- Audio Cache ---
 * @min 2
 * @max 12
 * @desc Maximum number of ME stored (default 3).
 * Increase this number reduces lag but increases memory.
 * @default 3
 *
 * @param SE cache size
 * @type number
 * @parent --- Audio Cache ---
 * @min 5
 * @max 40
 * @desc Maximum number of SE stored (default 20).
 * Increase this number reduces lag but increases memory.
 * @default 20
 *
 * @param Preemptive event cache
 * @type boolean
 * @parent --- Audio Cache ---
 * @on Yes
 * @off No
 * @desc Store in cache audios that may be used in events in
 * the future? Requires "Yes" in "Cache of used audios".
 * @default true
 *
 * @param Preemptive battle cache
 * @type boolean
 * @parent --- Audio Cache ---
 * @on Yes
 * @off No
 * @desc Store in cache audios that may be used in battle in
 * the future? Requires "Yes" in "Cache of used audios".
 * @default true
 *
 * @param Preemp. boot/map cache
 * @type boolean
 * @parent --- Audio Cache ---
 * @on Yes
 * @off No
 * @desc Store in cache audios as soon as possible in boot and
 * map changes? Requires "Yes" in "Cache of used audios".
 * @default true
 *
 *
 * @param --- Extra ---
 * @desc
 *
 * @param Force map bgm and bgs
 * @type struct<MapSoundForced>[]
 * @parent --- Extra ---
 * @desc Force to play a specified Bgm and Bgs when a
 * switch is ON.
 * @default []
 *
 *
 */
 /*~struct~MapSoundForced:
 * @param Switch Id
 * @type switch
 * @desc Mandatory. When this switch is ON, the plugin will force
 * all maps to play the Bgm and Bgs specified.
 *
 * @param Play Bgm
 * @type file
 * @dir audio/bgm/
 * @require 1
 * @desc The Bgm to play when the switch is ON.
 * Leave blank to mantain the map Bgm.
 *
 * @param Play Bgs
 * @type file
 * @dir audio/bgs/
 * @require 1
 * @desc The Bgs to play when the switch is ON.
 * Leave blank to mantain the map Bgs.
 */

(function() {

  var BetterAudio = { outfocus:{ bgm:null, bgs:null, sav:false }, saved:{
    bgs:{},bgm:{},me:{},se:{},cmax:{bgs:2,bgm:2,me:2,se:2},tmax:{bgs:0,bgm:0,me:0,se:0}
  }, debug:false, forced:[] };

  BetterAudio.params = PluginManager.parameters('BetterAudio');
  BetterAudio.params["Stop out-focus audio"]=(BetterAudio.params["Stop out-focus audio"]=="true");
  BetterAudio.params["Always use OGG files"]=(BetterAudio.params["Always use OGG files"]=="true");
  BetterAudio.params["Always use M4A files"]=(BetterAudio.params["Always use M4A files"]=="true");
  BetterAudio.params["Add a global volume"]=(BetterAudio.params["Add a global volume"]=="true");
  BetterAudio.params["Remove secondary volumes"]=(BetterAudio.params["Remove secondary volumes"]=="true");
  BetterAudio.params["Use quadratic volume"]=(BetterAudio.params["Use quadratic volume"]=="true");
  BetterAudio.params["Global volume name"]=String(BetterAudio.params["Global volume name"]);
  BetterAudio.params["Cache of used audios"]=(BetterAudio.params["Cache of used audios"]=="true");
  BetterAudio.params["Preemptive event cache"]=(BetterAudio.params["Preemptive event cache"]=="true");
  BetterAudio.params["Preemptive battle cache"]=(BetterAudio.params["Preemptive battle cache"]=="true");
  BetterAudio.params["Preemp. boot/map cache"]=(BetterAudio.params["Preemp. boot/map cache"]=="true");
  BetterAudio.params["Debug"]=(BetterAudio.params["Debug"]=="true");
  BetterAudio.debug=BetterAudio.params["Debug"];
  BetterAudio.saved.cmax.bgm=parseInt(BetterAudio.params["BGM cache size"]);
  BetterAudio.saved.cmax.bgs=parseInt(BetterAudio.params["BGS cache size"]);
  BetterAudio.saved.cmax.me=parseInt(BetterAudio.params["ME cache size"]);
  BetterAudio.saved.cmax.se=parseInt(BetterAudio.params["SE cache size"]);
  try{
    BetterAudio.forced=JSON.parse(BetterAudio.params["Force map bgm and bgs"])||JSON.parse("[]");
    for(var i=0;i<BetterAudio.forced.length;i++){
      BetterAudio.forced[i]=JSON.parse(BetterAudio.forced[i]);
    }
  }catch(e){
    BetterAudio.forced=[];
  }

if(BetterAudio.debug){

  BetterAudio.showDebug=function(content){
    console.log("[BetterAudio] "+content);
  };
  console.log("=== Updated BetterAudio Object ===");
  console.log(BetterAudio);
  console.log("=== ===");

}else{

  BetterAudio.showDebug=function(content){;};

}


if(BetterAudio.params["Stop out-focus audio"]){

  WebAudio._shouldMuteOnHide = function() {
      return false;
  };

  document.addEventListener("visibilitychange",function(){
    if(!AudioManager) return;
    if(document.hidden){
      BetterAudio.outfocus.bgm = AudioManager.saveBgm();
      BetterAudio.outfocus.bgs = AudioManager.saveBgs();
      BetterAudio.outfocus.sav = true;
      AudioManager.stopAll();
      BetterAudio.showDebug("Paused audio as out-of-focus detected.");
    }else if(BetterAudio.outfocus.sav){
      AudioManager.replayBgm(BetterAudio.outfocus.bgm);
      AudioManager.replayBgs(BetterAudio.outfocus.bgs);
      BetterAudio.outfocus.sav = false;
      BetterAudio.showDebug("Resumed audio as in-focus detected.");
    }
  },false);

}

if(BetterAudio.params["Always use OGG files"]){

  AudioManager.audioFileExt=function(){
    return '.ogg';
  };

}else if(BetterAudio.params["Always use M4A files"]){

  AudioManager.audioFileExt=function(){
    return '.m4a';
  };

}

if(BetterAudio.params["Add a global volume"]){

  AudioManager._globalVolume=100;
  Object.defineProperty(AudioManager,'globalVolume',{
    get:function(){ return this._globalVolume; },
    set:function(value){
      this._globalVolume=value;
      this.updateBgmParameters(this._currentBgm);
      this.updateBgsParameters(this._currentBgs);
      this.updateMeParameters(this._currentMe);
    },configurable:true
  });

  Object.defineProperty(ConfigManager,'globalVolume',{
    get:function(){ return AudioManager.globalVolume; },
    set:function(value){ AudioManager.globalVolume=value; },
    configurable:true
  });

  BetterAudio.originalMakeData = ConfigManager.makeData;
  ConfigManager.makeData=function(){
    var config=BetterAudio.originalMakeData.call(this);
  	config.globalVolume=this.globalVolume;
    return config;
  };

  BetterAudio.originalApplyData = ConfigManager.applyData;
  ConfigManager.applyData = function(config){
    this.globalVolume=this.readVolume(config,'globalVolume');
    BetterAudio.originalApplyData.call(this,config);
  };

  AudioManager.updateBufferParameters = function(buffer,configVolume,audio){
    if(buffer && audio){
      var globalVolume=(this.globalVolume||0);
      if(BetterAudio.params["Use quadratic volume"]){
        globalVolume=parseInt((globalVolume*globalVolume)/100)/100;
      }else globalVolume=globalVolume/100;
      BetterAudio.showDebug("Called updateBufferParameters with real global volume of "+globalVolume)
      buffer.volume = (globalVolume*configVolume) * (audio.volume||0) / 10000;
      buffer.pitch = (audio.pitch||0) / 100;
      buffer.pan = (audio.pan||0) / 100;
    }
  };

  Window_Options.prototype.addVolumeOptions = function(){
    this.addCommand(BetterAudio.params["Global volume name"],'globalVolume');
    if(!BetterAudio.params["Remove secondary volumes"]){
      this.addCommand(TextManager.bgmVolume,'bgmVolume');
      this.addCommand(TextManager.bgsVolume,'bgsVolume');
      this.addCommand(TextManager.meVolume,'meVolume');
      this.addCommand(TextManager.seVolume,'seVolume');
    }
  };

}

if(BetterAudio.params["Cache of used audios"]){

  BetterAudio.updateIndexSaved=function(buffer,toItem){
    var keys=Object.keys(buffer);
    for(var i=0;i<keys.length;i++){
      var number=buffer[keys[i]][1];
      if(number==toItem){
        buffer[keys[i]][1]=1;
      }else if(number<toItem){
        buffer[keys[i]][1]=number+1;
      }
    }
  }

  BetterAudio.deleteOldSaved=function(buffer,max){
    var keys=Object.keys(buffer);
    for(var i=0;i<keys.length;i++){
      var number=buffer[keys[i]][1];
      if(number>max){
        delete buffer[keys[i]];
      }
    }
  }

  BetterAudio.restartBufferCount = function(){
    BetterAudio.saved.tmax={bgs:0,bgm:0,me:0,se:0};
  }

  BetterAudio.addNewToBuffer = function(btype,aname){
    if( (typeof aname==='undefined') || (aname===null) || (aname=="") ) return;
    if(BetterAudio.saved.tmax[btype]<BetterAudio.saved.cmax[btype]){
      AudioManager.createBuffer(btype,aname);
      BetterAudio.saved.tmax[btype]+=1;
    }
  }

  AudioManager.shouldUseHtml5Audio=function(){
    return false;
  };

  BetterAudio.originalCreateBuffer = AudioManager.createBuffer;
  AudioManager.createBuffer = function(folder, name) {
    if(name in BetterAudio.saved[folder]){
      BetterAudio.showDebug("Served "+folder+" cached file: "+name);
    }else{
      BetterAudio.saved[folder][name]=[BetterAudio.originalCreateBuffer.call(this,folder,name),999];
      BetterAudio.showDebug("Cached new "+folder+" file: "+name);
    }
    BetterAudio.updateIndexSaved(BetterAudio.saved[folder], BetterAudio.saved[folder][name][1]);
    BetterAudio.deleteOldSaved(BetterAudio.saved[folder],BetterAudio.saved.cmax[folder]);
    return BetterAudio.saved[folder][name][0];
  };

}

if(BetterAudio.params["Cache of used audios"] && BetterAudio.params["Preemptive event cache"]){

  BetterAudio.originalSetup=Game_Interpreter.prototype.setup;
  Game_Interpreter.prototype.setup=function(list,eventId){
    BetterAudio.originalSetup.call(this,list,eventId);
    BetterAudio.showDebug("Analyzing commands of event "+eventId);
    BetterAudio.restartBufferCount();
    for(var i=0;i<this._list.length;i++){
      var com=this._list[i];
      if(com.code==241){
        BetterAudio.showDebug("Detected start bgm in event");
        BetterAudio.addNewToBuffer("bgm",com.parameters[0].name);
      }else if(com.code==245){
        BetterAudio.showDebug("Detected start bgs in event");
        BetterAudio.addNewToBuffer("bgs",com.parameters[0].name);
      }else if(com.code==249){
        BetterAudio.showDebug("Detected play me in event");
        BetterAudio.addNewToBuffer("me",com.parameters[0].name);
      }else if(com.code==250){
        BetterAudio.showDebug("Detected play se in event");
        BetterAudio.addNewToBuffer("se",com.parameters[0].name);
      }else if(com.code==301){
        BetterAudio.showDebug("Detected start battle in event");
        BetterAudio.addNewToBuffer("bgm",($gameSystem.battleBgm()).name);
        BetterAudio.addNewToBuffer("me",($gameSystem.victoryMe()).name);
        BetterAudio.addNewToBuffer("me",($gameSystem.defeatMe()).name);
      }else if(com.code==132){
        BetterAudio.showDebug("Detected change battle BGM");
        BetterAudio.addNewToBuffer("bgm",com.parameters[0].name);
      }else if(com.code==133){
        BetterAudio.showDebug("Detected change victory ME");
        BetterAudio.addNewToBuffer("me",com.parameters[0].name);
      }
    }
  }

}

if(BetterAudio.params["Cache of used audios"] && BetterAudio.params["Preemptive battle cache"]){

  BetterAudio.preloadAnimation = function(animationId){
    if(animationId<=0 || animationId>=$dataAnimations.length) return;
    BetterAudio.showDebug('Try to preload battle animation '+animationId);
    BetterAudio.restartBufferCount();
    var mytimings=$dataAnimations[animationId].timings;
    for(var i=0;i<mytimings.length;i++){
      if(mytimings[i].se){
        BetterAudio.showDebug("Detected se in battle animation");
        BetterAudio.addNewToBuffer("se",mytimings[i].se.name);
      }
    }
  }

  BetterAudio.originalStartAction = BattleManager.startAction;
  BattleManager.startAction = function() {
    var skill = (this._subject.currentAction()).item();
    BetterAudio.showDebug("Start preload in battle by startAction");
    BetterAudio.preloadAnimation(skill.animationId);
    BetterAudio.originalStartAction.call(this);
  };

  BetterAudio.originalOnSkillOk = Scene_Battle.prototype.onSkillOk;
  Scene_Battle.prototype.onSkillOk = function() {
    var skill = this._skillWindow.item();
    BetterAudio.showDebug("Start preload in battle by onSkillOk");
    BetterAudio.preloadAnimation(skill.animationId);
    BetterAudio.originalOnSkillOk.call(this);
  };

  BetterAudio.originalOnItemOk = Scene_Battle.prototype.onItemOk;
  Scene_Battle.prototype.onItemOk = function() {
    var skill = this._itemWindow.item();
    BetterAudio.showDebug("Start preload in battle by onItemOk");
    BetterAudio.preloadAnimation(skill.animationId);
    BetterAudio.originalOnItemOk.call(this);
  };

}

if(BetterAudio.forced.length>0){

  BetterAudio.forceMapBgmAndBgs=function(object){
    for(var i=0;i<BetterAudio.forced.length;i++){
      var mfe=BetterAudio.forced[i];
      if($gameSwitches.value(mfe['Switch Id'])==true){
        if(mfe['Play Bgm']!=""){
          BetterAudio.showDebug("Changed map Bgm to "+mfe['Play Bgm']+" by "+mfe['Switch Id']);
          object.autoplayBgm=true;
          object.bgm={name:mfe['Play Bgm'], pan:0, pitch:100, volume:90};
        }
        if(mfe['Play Bgs']!=""){
          BetterAudio.showDebug("Changed map Bgs to "+mfe['Play Bgs']+" by "+mfe['Switch Id']);
          object.autoplayBgs=true;
          object.bgs={name:mfe['Play Bgs'], pan:0, pitch:100, volume:90};
        }
        return true;
      }
    }
    return false;
  }

}else{

  BetterAudio.forceMapBgmAndBgs=function(object){;};

}

if(BetterAudio.params["Cache of used audios"] && BetterAudio.params["Preemp. boot/map cache"]){

  BetterAudio.originalDataManagerOnLoad = DataManager.onLoad;
  DataManager.onLoad=function(object){
    if(object){
      BetterAudio.restartBufferCount();
      if(object===$dataMap){
        BetterAudio.forceMapBgmAndBgs(object);
        BetterAudio.addNewToBuffer("bgm",($gameSystem.battleBgm()).name);
        if(object.bgm && object.bgm.name){
          BetterAudio.showDebug("Detected map changing, so preloading "+object.bgm.name);
          BetterAudio.addNewToBuffer("bgm",object.bgm.name);
        }
        if(object.bgs && object.bgs.name){
          BetterAudio.showDebug("Detected map changing, so preloading "+object.bgs.name);
          BetterAudio.addNewToBuffer("bgs",object.bgs.name);
        }
      }else if(object===$dataSystem){
        if(object.titleBgm && object.titleBgm.name){
          Decrypter.hasEncryptedAudio = !!object.hasEncryptedAudio;
          BetterAudio.showDebug("Detected system loading, so preloading "+object.titleBgm.name);
          BetterAudio.addNewToBuffer("bgm",object.titleBgm.name);
        }
      }
    }
    BetterAudio.originalDataManagerOnLoad.call(this,object);
  }

}else if(BetterAudio.forced.length>0){

  BetterAudio.originalDataManagerOnLoad = DataManager.onLoad;
  DataManager.onLoad=function(object){
    if(object){
      if(object===$dataMap){
        BetterAudio.forceMapBgmAndBgs(object);
      }
    }
    BetterAudio.originalDataManagerOnLoad.call(this,object);
  }

}


})(window);

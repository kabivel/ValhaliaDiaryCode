/*---------------------------------------------------------------------------*
 * 2018/09/23 @kido0617
 * https://kido0617.github.io/
 * Public Domain
 * Please use freely, credit not necessary
 * Ver.1.0
 *---------------------------------------------------------------------------*/

/*:
 * @plugindesc Plugin for showing plugins usage in console
 * @author @kido0617
 * @help
 * Details:
 * https://kido0617.github.io/rpgmaker/2018-09-24-plugin-usage
 * After installation, list of plugins that are unused/on/off shown in console
 * Version compatibility- RPG Maker MV 1.6 or higher
 * 
*/



(function(){

  var path = './js/plugins/';
  var fs = require('fs');
  var files = fs.readdirSync(path);
  var usage = {
    on: [],
    off: [],
    ununsed: []
  };

  for(var file of files){
    if(fs.statSync(path + file).isDirectory()) continue;
    var target = null;
    for(var p of $plugins){
      if(file.split('.js')[0] == p.name) {
        target = p;
        break;
      }
    }
    if(!target) usage.ununsed.push(file);
    else{
      if(p.status) usage.on.push(file);
      else usage.off.push(file);
    }
  }
  var endOfLine = require('os').EOL;
  var text = '';
  text += '・Unused--------------' + endOfLine;
  for(var f of usage.ununsed){
    text += f + endOfLine;
  }
  text += endOfLine;
  text += '・ON------------------' + endOfLine;
  for(f of usage.on){
    text += f + endOfLine;
  }
  text += endOfLine;
  text += '・OFF-----------------' + endOfLine;
  for(f of usage.off){
    text += f + endOfLine;
  }

  console.log(text);

})();
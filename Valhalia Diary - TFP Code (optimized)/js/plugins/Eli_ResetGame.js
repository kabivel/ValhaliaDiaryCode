//==========================================================================
// Eli_ResetGame.js
//==========================================================================

/*:
@plugindesc v1.0 - Resets the game like F5 does
@author Eliaquim or Rakuen Zero

@help

==============================================================================
Introduction
==============================================================================
Reset the game like F5 does using a plugin command(it's not case sensitive):
resetgame

==============================================================================
Contact
==============================================================================
RM Web - https://forums.rpgmakerweb.com/index.php?members/eliaquim.123037/
Centro Rpg Maker - https://centrorpg.com/index.php?action=profile
Instagram - https://www.instagram.com/rakuen.zero
Twitter - https://twitter.com/rakuenzero
Facebook - https://www.facebook.com/rakuenzero

============================================================================
Terms of Use
============================================================================
 
1. Give the credits to Eliaquim or Rakuen Zero in the credits section of 
your game.
2. It can be used in free and commercial games.
3. Do not sell or say that you made this plugin.
4. Do not redistribute this plugin. Instead, give this link to the download:
https://rakuenzero.itch.io/eli-resetgame

*/

/*:pt
@plugindesc v1.0 - Reseta o jogo como o F5 faz.
@author Eliaquim or Rakuen Zero

@help

==============================================================================
Introdução
==============================================================================
Resete o jogo igual o F5, usando o comando de plugin(maiúsculo ou minúsculo):
resetgame

==============================================================================
Contato
==============================================================================
RM Web - https://forums.rpgmakerweb.com/index.php?members/eliaquim.123037/
Centro Rpg Maker - https://centrorpg.com/index.php?action=profile
Instagram - https://www.instagram.com/rakuen.zero
Twitter - https://twitter.com/rakuenzero
Facebook - https://www.facebook.com/rakuenzero

============================================================================
Termos de uso
============================================================================
 
1. Dê os créditos para Eliaquim ou Rakuen Zero na seção de créditos do 
seu jogo.
2. Pode ser usado em jogos gratuitos e comerciais.
3. Não venda e nem diga que foi você que fez esse plugin.
4. Não redistribua esse plugin. Ao invés disso, dê este link para o download:
https://rakuenzero.itch.io/eli-resetgame

*/

var Imported = Imported || {}; 
Imported.Eli_ResetGame = true;

var Eli = Eli || {}; 
Eli.ResetGame = Eli.ResetGame || {}; 

Eli.Parameters = PluginManager.parameters('Eli_ResetGame');
Eli.Param = Eli.Param || {};

Eli.ResetGame.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
Eli.ResetGame.Game_Interpreter_pluginCommand.call(this, command, args);
    if (command.toLowerCase() === "resetgame") {
		return location.reload();
	}
};

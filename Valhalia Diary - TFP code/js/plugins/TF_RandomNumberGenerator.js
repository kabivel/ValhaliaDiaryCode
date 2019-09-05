//=============================================================================
// Random Number Generator
// by Tagflag
// Date: 11/30/2015  
// TODO: nothing
// 
//=============================================================================
 
var Tagflag = Tagflag || {};

/*:
 * @plugindesc v1.0.0 Get random number.
 * Can also call the command wait with a variable.
 * @author Tagflag
 *
 * @help
 * This plugin creates a random number and stores it into a in-game variable.
 * min and max values are included that means:
 * a random value between 5 and 10 can be:
 * 5, 6, 7, 8, 9 or 10
 * 
 * Use as plugin commands in events:
 * TF_RandomNumber x y z
 * x = min, y = max, z = variable id to store the random number
 * example: TF_RandomNumber 5 10 2
 * this stores a random number between 5 and 10 (example: 7) in variable id 2
 * you then can access the variable with the escape sequence: \V[2]
 *
 * TF_Wait variable_id
 * ececutes the wait command for variables's value in frames.
 */
 
(function() {
    // Random number generator function
    getRandomNumber = function(min, max)
    {
        min = parseFloat(min);
        max = parseFloat(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    
    // get plugin commands and execute wait
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    var _Game_Interpreter_Wait = Game_Interpreter.prototype.wait;
    
    Game_Interpreter.prototype.pluginCommand = function(command, args)
    {
        // initialize
        _Game_Interpreter_pluginCommand.call(this, command, args);
        
        // Plugin Command
        if (command.toLowerCase() === 'tf_randomnumber')
        {
            if (args.length >= 3) {
                var result = getRandomNumber(args[0], args[1]);
                $gameVariables.setValue(parseInt(args[2]), result)
            }
        }
        
        if (command.toLowerCase() === 'tf_wait')
        {
            if (args.length >= 1) {
                var duration = $gameVariables.value(parseInt(args[0]));
                _Game_Interpreter_Wait.call(this, duration);
            }
        }
    };
})();

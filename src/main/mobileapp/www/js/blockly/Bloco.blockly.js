window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Bloco = window.blockly.js.blockly.Bloco || {};

/**
 * @function Executar
 *
 *
 *
 *
 * @author Natali Amaral
 * @since 17/01/2024, 15:43:37
 *
 */
window.blockly.js.blockly.Bloco.ExecutarArgs = [];
window.blockly.js.blockly.Bloco.Executar = async function() {

  //
  this.cronapi.screen.changeView("#/app/logged/user",[ { id : this.cronapi.screen.getValueOfField("User.active.id") } ]);
}

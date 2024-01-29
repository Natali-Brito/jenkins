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
 * @since 24/01/2024, 15:23:23
 *
 */
window.blockly.js.blockly.Bloco.ExecutarArgs = [];
window.blockly.js.blockly.Bloco.Executar = async function() {

  //
  this.cronapi.screen.notify('success','teste');
  //
  (await this.cronapi.client('cronapi.social.ssoLogin').run());
}

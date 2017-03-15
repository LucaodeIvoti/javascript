const Code = require('code');
const Lab = require('lab');
const lab = exports.lab=Lab.script();
const {bemVindo}= require('./ola.js');
lab.test('verifica',function(done){
Code.expect(BemVindo('mario')),to.equal('bem vindo mario');
}

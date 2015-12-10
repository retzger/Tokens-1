"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Standard_Token = (function (_Pudding) {
    _inherits(Standard_Token, _Pudding);

    function Standard_Token() {
      _classCallCheck(this, Standard_Token);

      _get(Object.getPrototypeOf(Standard_Token.prototype), "constructor", this).apply(this, arguments);
    }

    return Standard_Token;
  })(Pudding);

  ;

  // Set up specific data for this class.
  Standard_Token.abi = [{ "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "success", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "_total", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "success", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "success", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }], "name": "unapprove", "outputs": [{ "name": "success", "type": "bool" }], "type": "function" }, { "inputs": [{ "name": "_initial_amount", "type": "uint256" }], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_from", "type": "address" }, { "indexed": true, "name": "_to", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_owner", "type": "address" }, { "indexed": true, "name": "_spender", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "Approved", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_owner", "type": "address" }, { "indexed": true, "name": "_spender", "type": "address" }], "name": "Unapproved", "type": "event" }];
  Standard_Token.binary = "60606040526040516020806103a7833950608060405251600160a060020a0333166000908152602081905260409020819055600281905550610362806100456000396000f3606060405236156100615760e060020a6000350463095ea7b3811461006357806318160ddd146100d057806323b872dd146100de57806370a0823114610214578063a9059cbb14610239578063dd62ed3e146102cb578063fbf1f78a146102ff575b005b6100d4600435602435600160a060020a03338116600081815260016020908152604080832094871680845294825282208054860190556060858152919392917f80da462ebfbe41cfc9bc015e7a9a3c7a2a73dbccede72d8ceb583606c27f8f909190a35060015b92915050565b6002545b6060908152602090f35b6100d4600435602435604435600160a060020a0383166000908152602081905260408120548290108015906101315750600160209081526040808320600160a060020a0333168452909152812054829010155b801561013d5750600082115b1561020d57600160a060020a03838116808352602083815260408420805486019055606085815291928716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9190a3816000600050600086600160a060020a03168152602001908152602001600020600082828250540392505081905550816001600050600086600160a060020a03168152602001908152602001600020600050600033600160a060020a03168152602001908152602001600020600082828250540392505081905550600190505b9392505050565b6100d4600435600160a060020a0381166000908152602081905260409020545b919050565b6100d4600435602435600160a060020a03331660009081526020819052604081205482901080159061026b5750600082115b1561035d57604080822080548490039055600160a060020a03808516808452918320805485019055606084815233909116907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602090a35060016100ca565b6100d4600435602435600160a060020a038083166000908152600160209081526040808320938516835292905220546100ca565b600160a060020a033381166000818152600160209081526040808320600435958616808552925282208290556100d493927f1ab270601cc6b54dd5e8ce5c70dbac96a01ff12939e4e76488df62adc8e68373836060a3506001610234565b6100ca56";

  if ("" != "") {
    Standard_Token.address = "";

    // Backward compatibility; Deprecated.
    Standard_Token.deployed_address = "";
  }

  Standard_Token.generated_with = "1.0.2";
  Standard_Token.contract_name = "Standard_Token";

  return Standard_Token;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Standard_Token = factory;
}
pragma solidity >=0.5.0 <0.6.0

// Interchange TradeChannel 
contract Interchange {
	address public tradeChannel;	
	address public from;
	address public to;
	string public hash_msg;
	string public hash_ack;
	uint256 public timestamp_msg;
	uint256 public timestamp_ack;
	
	
	function Interchange(address _tradeChannel,address _from,address _to,string _hash_msg) {
		tradeChannel=__tradeChannel;
		from=_from;
		to=_to;
		hash_msg=_hash_msg;
		timestamp_msg=now;
	}
	
	function ack(string _hash) {
		if(msg.sender!=to) throw;
		if(timestamp_ack>0) throw;
		hash_ack=_hash;
		timestamp_ack=now;		
	}
	
	function() {
		if(msg.value>0) {
			if(msg.sender==from) {			
				to.send(msg.value);
			} else {
				from.send(msg.value);
			}
		}
	}
	
}
contract TradeChannel
{
	address public tradeChannel;		
	
	uint256 public fee_registration;
	uint256 public fee_msg;
	uint256 public cnt_registrations;
	
	struct TradePartner {
		address adr; // @ TODO REPLACE
		string hash;
		string gnid; // @ TODO REPLACE
	}	
	
	mapping(address=>TradePartner) public regadr;	// @ TODO REPLACE
	mapping(address=>Interchange[]) public msgs;
	mapping(address=>Interchange[]) public sent;
	mapping(address=>bool) public pretradePartner;	
	
	TradePartner[] public regs;
	
	function TradeChannel() {
		tradeChannel=msg.sender;
	}
	
	function register(string hash) {
		updateTradePartner(hash,'');		
	}
	
	function unregister() {
		delete regadr[msg.sender]; // @ TODO REPLACE
	}
	
    // @ TODO REPLACE
	function updateTradePartner(string hash,string gnid) {		// @ TODO REPLACE
		if((msg.value>=fee_registration)||(pretradePartner[msg.sender])) {			
			regadr[msg.sender]=TradePartner(msg.sender,hash,gnid); // @ TODO REPLACE
			regs.push(regadr[msg.sender]); // @ TODO REPLACE
			if(fee_registration>0) tradeChannel.send(this.balance);
			pretradePartner[msg.sender]=false;
			cnt_registrations++;
		} else throw;
	}
	
	function preRegister(address preReg) {
		if(msg.sender!=tradeChannel) throw;
		preReg.send(msg.value);		
		pretradePartner[preReg]=true;
	}
	
	function getMsgs() returns (Interchange[]) {
		return msgs[msg.sender];	
	}
	
	function setTradePartnerPrice(uint256 price) {
		if(msg.sender!=tradeChannel) throw;
		fee_registration=price;
	}
	
	function setMsgPrice(uint256 price) {
		if(msg.sender!=tradeChannel) throw;
		fee_msg=price;
	}
	
	function sendMsg(address to,string hash) {
		if(msg.value>=fee_msg) {	
			    Interchange m = new  Interchange(this,msg.sender,to,hash);
				msgs[to].push(m);	
			    sent[msg.sender].push(m);
			if(fee_msg>0) tradeChannel.send(this.balance);
		} else throw;		
	}
	
	function ackMsg(uint256 msgid,string hash) {
		Interchange message =Interchange(msgs[msg.sender][msgid]);
		message.ack(hash);
	}
	
	function() {
		if(msg.value>0) {
			tradeChannel.send(msg.value);
		}
	}
}
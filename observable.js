var Customer = function(){
  this.attributes = {};
  this.events = {};
}
Customer.prototype.get = function(name) {
  return this.attributes[name];
}
Customer.prototype.set = function(name,value) {
  handlers = this.events['change'];
  if(handlers!==undefined){
    for(var idx in handlers) {
      handlers[idx](value,this.attributes[name],this);
    }
  }
  this.attributes[name]=value;
}
Customer.prototype.on = function(event,handler,ctxt) {
  if(ctxt!==undefined)
    handler=handler.bind(ctxt);
  if(this.events[event]===undefined)
    this.events[event]=[];
  this.events[event].push(handler);
}

var Application = function(){
  this.customer = new Customer();
  this.message="Something";
}
Application.prototype.myChangeHandler= function(newValue,oldValue, obj){
  this.message=this.message + " -- first handler";
  console.log("First change handler called.");
  console.log(arguments);
  console.log(this);
}

Application.prototype.myChangeHandler2 = function(newValue,oldValue, obj){
  this.message=this.message + " -- second handler";
  console.log("Second change handler called.");
  console.log(arguments);
  console.log(this);
}
Application.prototype.bindEvents = function() {
  this.customer.on('change',this.myChangeHandler,this);
  this.customer.on('change',this.myChangeHandler2,this);

}
window.app = new Application();
app.bindEvents();
app.customer.set('name','Vagmi');


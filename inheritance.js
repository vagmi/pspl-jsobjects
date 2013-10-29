Klass = function(){

}
Klass.extend = function(obj){
  var copy = function(obj1, obj2 ) {
    for(var k in obj2){
      obj1[k] = obj2[k];
    }
  }
  var newKlass = function(){};
  copy(newKlass.prototype, this.prototype)
  copy(newKlass.prototype,obj);
  copy(newKlass,this);
  return newKlass;
};

var Person = Klass.extend({
  getName: function(){
    return this.name;
  },
  setName: function(value){
    this.name = value;
  },
  sayHello: function() {
    console.log("Hello , " + this.name);
  }
})
Person.getInstance = function() {
  if(this.instance===undefined){
    this.instance = new this();
  }
  return this.instance;
}

Student = Person.extend({
  subjects: function(){
    return ["JS","Clojure","Backbone"];
  }
});


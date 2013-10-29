// Singleton

var MyClass = function() {

}
MyClass.getInstance = function() {
  if(MyClass.instance===undefined){
    MyClass.instance = new MyClass();
  }
  return MyClass.instance;
}

// Factory pattern
MyClass = function(valid) {
  this.valid = valid
}
MyClassFactory = function(){}
MyClassFactory.createValidObject = function() {
  var myObj=new MyClass(true);
  return myObj;
}
MyClassFactory.createInvalidObject = function() {
  var myObj=new MyClass(false);
  return myObj;

}
var myValidObj = MyClassFactory.createValidObject();
var myInvalidObj = MyClassFactory.createInvalidObject();

// -- module pattern
var MyModule = function(name){
  var greeting = "Hello, " + name;
  var greetFn = function() {
    return greeting;
  }
  return {
    greeting: greetFn;
  };
};

obj = MyModule("Vagmi");
obj.greeting() // = "Hello, Vagmi"

var PersonModule = function() {
  var name;
  var getName = function() {
    return name;
  }
  var setName = function(val) {
    name=val
  }
  return {
    getName: getName, setName: setName
  }
};
var personObj = PersonModule();
personObj.setName("Vagmi");
personObj.getName() // = "Vagmi"


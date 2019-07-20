var message:string = "hello world"
var n:number = 12;
console.log(message)
console.log(n)

class G {
  protected num:number;
  constructor(n:number) {
    this.num = n;
  }
  Greet():void {
    console.log(message);
  }
}

class Son extends G {
  protected name:string;
  anything;
  constructor(arg) {
    super(3);
    this.anything = arg;
  }
  Greet():void {
    console.log(message + this.num + this.anything)
  }
}



var obj = new Son("kkk");
var obj2 = new Son(454);
obj.Greet();
obj2.Greet();

export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atsushi';
  static lastName: string = 'Ishida';

  static work() {
    // 'Hey, guys! This is Atsushi! We have a gift for You!';
    return `Hey, guys! This is ${this.firstName}! We have a gift for You!`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());

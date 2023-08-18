// function a() {
//   function c() {
//     console.log(b);
//   }
//   c();
// }

// var b = 10;
// a();

// Shadowing occurs only in var
{
  var a = 3;
  {
    a = 20;
    let b = 4;
    {
      const c = 5;
    }
    // console.log(c);
    console.log(b);
  }
  console.log(a);
}
console.log(a);

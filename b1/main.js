var fullName='Quoc Anh'
var age = 12;

// alert(fullName)
// alert(age)
// nhấn '/' + 2 dấu ** để mở 1 khối comment nhiều dòng 

// 1 số hàm built in trong js
/**
 * 1.alert  : hiện thông báo
 * 2.Console: chứa các hàm để hiển thị trong console
 * 3.Confirm  : hiện thông báo có nút confirm
 * 4.Prompt : hien thong bao có ô text
 * 5.Set timeout  : chay 1 doan code sau 1 khoang thoi gian nhat dinh
 * 6.Set interval : chay 1 doan code sau 1 khoang thoi gian va lap di lap lai
 */


// console.error(fullName)

// confirm('bạn đủ tuổi chưa?')

// prompt('bạn đủ tuổi chưa?')

// setTimeout(function(){S
//      alert('thông báo')
// }, 1000)

// setInterval(function(){
//     console.log('day la log'+ Math.random())
// }, 1000)


/**
 * Các toán tử trong javascript
 * 1.số học : + - * / ** %
 * 2.gán =
 * 3.so sánh > < >=  <=  == !=
 * 4. logic
 */

//2.toán tử chuỗi
// var a = 'quoc';
// var b = 'anh';
// a+=b
// console.log(a)



//---------------------------------------3
/* kiểu dữ liệu sẽ đc convert sang false :
1.0
2.false
3.''-""
4.undefined
5.NaN
6.null
*/

// var lastName = 'Trần'
// if('a')
// {
//     console.log("true vale")
// }else{
//   console.log("false value")
// }



//----------------------------------------4
/**
 * toán tử logic
 * 1.&&-And
 * 2.|| - or
 * 3.! - not
 */
// var a=1;
// var b=2;
// if(!(a>b)){
//   console.log("điều kiện đúng");
// }



//----------------------------------5
/**
 *  Các kiểu dữ liệu trong js:
 * 1.dữ liệu nguyên thủy: giá trị đc tạo lưu vào vùng nhớ trong ram khi chạy ct và ko thể sửa vùng nhớ đó, khi gán giá trị thì đc lưu vào vùng nhớ mới
 * -Number
 * -String
 * -boolean
 * -undefined : variable without assigned any value
 * -null
 * -symbol
 * 
 * 2.Dữ liệu phức tạp - Complex Data
 * -function
 * -object
 * 
 */

// var stringType = 'laa \'dfdsf';
// console.log(stringType)

//Function
// var hello = function(){
//   alert('hi everyone')
// }
// hello()

//Object
var myobject ={
  name: 'quoc anh',
  age: 21,
  address: 'hanoi',
  myFunction: function(){

  } 
};

// console.log(myobject)

var myArray = ['javascript', 'PHP', 'Ruby'];

// console.log(myArray)
// console.log(typeof myArray)
// console.log(typeof hello)

var nameNull = null;
// console.log(typeof nameNull)
// console.log(typeof 1)

// console.log(typeof myobject)



//---------------------------------------6
/**
 *toán tử so sánh phần 2 
  ===
  !==
 */
// var a =1;
// var b ='1';
//khi sử dụng toán tử == thì chỉ qtam đến giá trị 2 biến, còn === so sánh cả datatype
// console.log(a===b)
// console.log(a!==b)


//-----------------------------------------7
/**
 * toán tử logic và câu điều kiện if
 * toán tử && đọc từ trái sang phải, nếu gặp gt không thuộc 6 giá trị trả về false nó sẽ đọc tiếp sang giá trị bên phải cho đến hết thì gán giá trị đó cho result. nếu có gt thuộc 6 gt false thì lấy luôn gt đó gán cho result
 * toán tử || đọc từ trái sang phải nếu gặp gt khác 6 gt false thì lấy luôn
 */
// var result = 'A'&&'B'&&undefined&&'C';
// if(result){
//   console.log("kq đúng");
// }else{
//   console.log("kq sai");
// }


//-------------------------------------------8----CHUỖI
/**
 * Chuỗi trong js
 * 1.Tạo chuỗi
 * -các cách tạo chuỗi
 * -nên dùng cách nào, lí do
 * -kiểm tra data type
 * 
 * 2. một số các case sử dụng backslash
 * 3. xem độ dài chuỗi
 * 4. Chú ý độ dài khi viết code. số ký tự trên 1 dòng ko nên quá 80 ký tự
 * 5. Template string ES6
 */

// var firstname = 'anh';
// var lastname = 'tran';
// console.log(`fullname: ${firstname} ${lastname}`);



//-------------------------------------------9
/**
 * Làm việc với chuỗi
 * 1.Length
 * 2.Find index
 * 3. Cut string
 * 4. Replace
 * 5. Convert to uppercase
 * 6. Convert to lowercase
 * 7. Trim : loại bỏ khoảng trắng ở 2 đầu
 * 8. Split
 * 9. Get a character by index
 */

var myString = "  hoc lap trinh tai f8 ";

// console.log(myString.indexOf('t',9));
// console.log(myString.lastIndexOf('t'));
// console.log(myString.search('t'));

// console.log(myString.slice(-3, -1));

// console.log(myString.replace('f8', 'F8'));

// console.log(myString.trim().length)

// var languages = 'java, php, python';
// console.log(languages.split(''));

// console.log(languages.charAt(0))


//số và làm việc với số
// var doubleNum = 1.223231231;
// console.log(doubleNum.toFixed(3));



//---------------------------------------10
/*****Mảng *****/

var myArray = ['halo', 'polo', null, function(){}, {} ]

// console.log(Array.isArray(myArray))   //kiểm tra kiểu mảng


//----------------------------------------11
/**Làm việc với Array
 * 
 * 1.To string
 * 2. Join
 * 3. Pop
 * 4. Push
 * 5. Shift
 * 6. Unshift
 * 7. Splicing
 * 8. Concat
 * 9.Sclicing
*/
var languages = ['js', 'java', 'PHP'];

// biến thành kiểu chuỗi có thêm dấu giữa các phần tử
// console.log(typeof languages.join('-'));

//console.log(languages.pop()) //xóa phần tử cuối mảng và trả về phần tử đó, nếu mảng rỗng mà xóa thì trả về undefined

//console.log(languages);

//console.log(languages.push('Dart', 'ruby'))//trả về độ dài mới của mảng và thêm vào mảng

//console.log(languages);

//console.log(languages.shift()); //xóa phần tử ở đầu mảng và trả về phần tử xóa. Nếu mảng hết phần tử thì trả về undefined
//console.log(languages);

//console.log(languages.unshift('Dart', 'Ruby'));//thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng
//console.log(languages)

//languages.splice(1,3) // tham số đầu là chỉ mục, tham số thứ 2 là số lượng phần tử muốn xóa
//console.log(languages)

//languages.splice(1,0,'Dart');//thêm phần tử vào chỉ mục. tham số thứ 3 trở đi là phần tử muốn thêm vào
//console.log(languages)

var languages2 = [
  'Dart', 'ruby'
];

//console.log(languages.concat(languages2));//nối mảng

//console.log(languages.slice(1,2));//trả về các phần tử bị cắt. copy mảng thì dùng slice(0). truyền vào tham số âm để truyền ngược từ cuối mảng


//------------------------------------------12
/*****Hàm *****/
// function writeLog(message){
//   console.log(message);
// }
// function writeLog(){
//   // console.log(arguments);
//   var myString = '';
//   for(var param of arguments)
//   {
//     myString += `${param} `;
//   }
//   console.log(myString);
// }
// writeLog('log1', 'log2', 'log3');



//Return trong hàm
// var isConfirm = confirm("Message?");

// console.log(isConfirm)

// function showMes(message){
//   function showMessage2(){
//     console.log(message)
//   }
//   showMessage2()
// }
 
// showMes('hello')

 var showMessage = function() {

 }  //Expression Function, Declaration function thì gọi được trước dòng định nghĩa.



 //---------------------------------------13
 /**------Object--------- */
var emailKey = 'email';

 var myInfo = {
    name : 'Anh',
    age : 21,
    address: 'Ha Noi, Vn',
    [emailKey]: 'asb@gmaul.com',
    getName : function(){
      return this.name;
    }
 };

//  myInfo.email = 'quocanh@gmail.com'
// myInfo['email'] = 'quocanh@gmail.com'

var mykey = 'address'

//function --> method
//others --> properties
//  console.log(myInfo);
delete myInfo.age
//  console.log(myInfo.getName());

 
//--------------------------------------14
/**Object Constructor**/
//viet hoa chu cai dau cua ten object constructor

function User(firstname, lastname, avatar){
  this.firstname = firstname;
  this.lastname = lastname;
  this.avatar = avatar;
  this.getName = function(){
    return `${this.firstname} ${this.lastname}`;
  }
}

var author = new User('anh', 'tran', 'avar');
var user = new User('b', 'a', 'as');

author.title = 'balclsad';
user.comment = 'asdfsf';

// console.log( author.getName())
// console.log(user)



//-------------------------------------------15
/**----Object prototype----- */
// thêm vào tất cả các instance của đối tượng đc tạo nhưng chỉ hiện trong prototype

User.prototype.className = 'f8'
User.prototype.getClassName = function(){
  return this.className;
}
// console.log(user.className);
//  console.log(user.getClassName());



//----------------------------------------------16
/*--------Date object------- */
var date = new Date();

//console.log(date);
//console.log(date.getFullYear());

var month = date.getMonth()+1;
//console.log(month);
var day = date.getDate();
// console.log(day);

// console.log(`${day} /${month} /${date.getFullYear()}`)



//-----------------------------------------------------------------17
/**Vòng lặp - Loop 
 * 
 * 1.for-lặp với đk đúng
 * 2.for/in - Lặp qua key của đối tượng
 * 3. for/of - lặp qua value của đối tượng
 * 4. while - Lặp khi điều kiện đúng
 * 5. do/while - lặp ít nhất 1 lần. Sau đó lặp khi đk đúng
 * 
*/

/**for/in loop */
//lay chi so

var myInfo = {
  name: 'quoc anh',
  age: 21,
  address: 'Ha Noi, VN'
};

// for(var key in myInfo){
//   console.log(myInfo[key]);
// }

var languages3=[
  'java', 'php', 'mySql','python'
]

// for(var key in languages3){
//   console.log(languages3[key]);
// }

var myString = 'Javascript'
// for(var key in myString){
//    console.log(myString[key]);
// }



/**For /of */
//lay phan tu

// for(var value of languages3){
//   console.log(value);
// }

// for(var value of myString){
//   console.log(value);
// }

// use for of with object
// console.log(Object.keys(myInfo)) return an array of key

// for(var value of Object.keys(myInfo)){
//   console.log(myInfo[value]);
// }

//console.log(Object.values(myInfo)); //return an array of value

// for(var value of Object.values(myInfo)){
//     console.log(value);
// } 


//----------------------------------------18
/*******do/while loop*********/
var i =0 ;
var isSuccess = false;

// do{
//   i++;
//   console.log('nạp thẻ lần '+ i);

//   if(false){
//     isSuccess = true;  
//   }
// }while(!isSuccess && i<=3);



//--------------------------------------------19
/****Nested Array**** */

var nestArray = [
  [1,2,3],
  [4,2,1],
  ['a','c','v']
];

// for(var i = 0 ; i<nestArray.length; i++){
//   for(var j = 0 ; j < nestArray[i].length; j++){
//     console.log(nestArray[i][j]);
//   }
// }



/*****Recursion*******/
var arr=['a', 'b', 'c', 'd', 'a', 'a', 'c'];

// console.log([...(new Set(arr))]);

/**
 * 1.xác định điểm dừng
 * 2.Logic Handle => tạo ra điểm dừng
 */
function countDown(num){
  if(num>0){
    console.log(num);
    return countDown(num-1);
  }
  return num;
}

// countDown(10);


//---------------------------------------------------------20
/*****Works with Array P2*****/
/**
 * Arrays methods:
 *      forEach(): return : undefined
 *      every() : return true if every elem statisfy the condition, otherwise false
 *      some()  : return true if there is one elem satisfy the condition and false otherwise
 *      find()
 *      filter()
 *      map()
 *      reduce()
 */

var courses = [
    {
      id:1,
      name: 'Javascript',
      coin: 250
    },
    {
      id:2,
      name: 'HTML, CSS',
      coin: 0
    },
    {
      id:3,
      name:'Ruby',
      coin: 0
    },
    {
      id: 4,
      name: 'PHP',
      coin: 400
    },
    {
      id:5,
      name: 'ReactJS',
      coin: 500
    },
    {
      id:6,
      name:'Ruby',
      coin: 0
    }
];

// courses.forEach(function(course, index){
//   console.log(index, course)
// });  //call backs  

var isfree = courses.every(function(course, index){
    return course.coin === 0;
});  //duyet mang va kiem tra dieu kien, lap qua tung phan tu cua mang,moi lan lap lai thi goi vao ham ma cta da truyen vao day. va truyen cho ham do 1 tham so la phan tu cua mang cua chung ta. sau khi nhan dc phan tu thi chung ta so sanh. neu tat ca khoa hoc mien phi thi tra ve true, neu ko tra ve false
// console.log(isfree)

var isfree = courses.some(function(course, index){
  return course.coin === 0;
});//tuong tu every nhung chi can 1 dk thoa man thi tra ve true
// console.log(isfree)


// var course = courses.find(function(course, index){
//   return course.name === 'Ruby';
// }); tra ve phan tu thoa man
// console.log(course);

var listCourse = courses.filter(function(course, index){
  return course.name === 'Ruby';
}); //giong find nhung tra ve 1 mang tat ca phan tu thoa man
// console.log(listCourse);



//---------------------------------------------------------21
//map: dùng khi muốn thay đổi element của một array. tra ve 1 mang
//1st parameter: element of the array
//2nd parameter: index of the array
//3rd parameter: originArray
function courseHandler(course, index, originArray){
     // console.log(course);
    // return {
    //   id: course.id,
    //   name: `Khoa hoc: ${course.name}`,
    //   coin: course.coin,
    //   cointText: `Gia: ${course.coin}`,
    //   index: index,
    //   originArray: originArray
    // };
  //  return course.name;
};

var newCourses = courses.map(courseHandler);
//lặp qua mọi phần tử, mỗi khi lặp qua 1 phần tử thì call lại 1 function để thực thi. function đó phải dc truyền vào map()

// console.log(newCourses)


//----------------------------------------------------22
/****Reduce method*****/
//sd khi muon nhan ve gia tri duy nhat sau khi tinh toan va xu ly tren tung phan tu trong 1 array, phai co bien luu tru
//accumulator: bien luu tru
//currentvalue: element hien tai dang dc duyet toi
//currentIndex: chi muc cua currentValue
//originArray: array goi toi courses
//return cai gi thi luu tru cai do(accumulator)

// var i =0;
function coinHandler(accumulator, currentValue, currentIndex, originArray){
    // i++;
    // console.table({
    //    'Lượt chạy: ': i,
    //    'Biến tích trữ: ':accumulator
    // });
    return accumulator+currentValue.coin;
}

var totalCoin = courses.reduce(coinHandler, 0);//tham so thu 2 là gia tri khoi tao
//  console.log(totalCoin)



//-------------------------------------------------23
//Array method qua ví dụ
//mong muon nhan kieu du lieu la gi thi dat bien initial cung kieu du lieu do.
//neu ko dat initial, thi accumulator dau tien la phan tu dau tien trong mang va ham bat dau duyet tu phan tu thu 2

//Flat - "làm phẳng" mảng từ Depth array - "mảng sâu"
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var resultArray = depthArray.reduce(function(accumulator, depthItem){
       return accumulator.concat(depthItem); 
}, []);

//console.log(resultArray);

//lấy ra khóa học và đưa vào 1 mảng mới
var courseArr = [
   {
     topic: 'Front-end',
     course:[
      {
        id: 1,
        title:'HTML, CSS'
      },
      {
        id: 2,
        title: 'Javascript'
      }
     ]
     
   },
   {
      topic: 'Back-end',
      course:[
        {
          id: 1,
          title:'PHP'
        },
        {
          id: 2,
          title: 'Nodejs'
        }
      ]
   }
];

var myCourse = courseArr.reduce(function(accumulator , Arritem){
              return accumulator.concat(Arritem.course);
}, []);

// console.log(myCourse);
var htmls = myCourse.map(function(course){
     return `
         <div>
             <h2> ${course.title} </h2>
             <p> ${course.id} </p> 

         </div>
     `;
}); 

// console.log(htmls.join(''));


//--------------------------------------------------24
// String/Array includes() method
var myMessage = 'hello there from the California'
// console.log(myMessage.includes('hello', 2));

var courses2 = ['javascript', 'PHP', 'python'];
// console.log(courses.includes('java',-1))
//tham so thu 2 la am thi bd tim tu vi tri = length + 2nd param. neu < 0 thi mac dinh la 0


//--------------------------------------------25
/**
 * Math object
 * -Math.PI
 * -Math.round()
 * -Math.abs()
 * -Math.ceil() : lam tron tren
 * -Math.floor():lam tron duoi
 * -Math.random(): tra ve so thap phan ngau nhien >0 va <1
 * -Math.min()
 * -Math.max()
 */

// console.log(Math.floor(Math.random()*10));

var bounty = [
  '100k',
  '200k',
   '300k'
];

// console.log(bounty[Math.floor(Math.random()*3)]);
// console.log(Math.floor(Math.random()*3));



//--------------------------------------------26
//Callbacks

//Là hàm đc truyền qua đối số khi gọi hàm khác
//1.hàm
//2.được truyền qua đối số

function callBackfunc(message){
  console.log('my message: ', message);
}

function callfunction(param){
    if(typeof param === 'function'){
      param('hello');
    }
    
}

// callfunction(callBackfunc);

//-------------------------------------27

Array.prototype.map2 = function(callbacks){
    var result = [], callbacksLength= this.length;
    for(var i=0; i< callbacksLength; i++){
          var elem = callbacks(this[i]);
          result.push(elem);
    }
    return result;
}

// var map2result = courses.map2(function(course){
//      return `<h2>${course}</h2>`;
// });//trong prototype cua Array constructor ko co map2 nen ko dinh nghia thi loi

// console.log(map2result.join(''));


/**----------------ForEach2--------------------*/
Array.prototype.forEach2 = function(callbacks){
    var arrlength = this.length, result=0;
    for(var i=0; i< arrlength; i++)
    {
       callbacks(this[i]);
    }
   
}

// courses.forEach2(function(course){
//       console.log(course);
// });


/**----------------------reduce2-------------------- */

Array.prototype.reduce2 = function(callback, accumulator){
    var arrlength = this.length;
    var result=accumulator;
  
    for(var i=0; i < arrlength; i++)
    {
        
          result = callback(accumulator, this[i]);
          accumulator = result;
    }
    return result;      
}

var result = courses.reduce2(function(accumulator, elem){
         return accumulator+elem.coin;
} , 0);
// console.log(result);


//** -------------filter------------- */
Array.prototype.filter2 = function(callbacks){
     var result = [];
     var len = this.length;
     for(var i=0; i < len; i++)
     {
        if(callbacks(this[i]) == true){
          result.push(this[i]);
        }
     }
     return result;
}

// console.log(courses.filter2(function(course){
//           return course.name === 'Ruby';
// }));


//********Empty elements of array******/
// var courses = ['javascript', 'PHP'];
// var courses = new Array(10)
// courses.length = 10;
// courses.push('PHP', 'Javascript');
// console.log(courses);
// for(var i = 0; i<courses.length; i++){
//   console.log(courses[i]);
// }
// for(var index in courses){
//   console.log(courses[index]);
// }

// for in duyet qua ca key cua element trong prototype
//Array constructor da dc dinh nghia trong prototype nen khi khoi tao 1 array thi no dc tao tu array constructor the nen no ke thua dc phuong thuc dc dinh nghia san
Array.prototype.forEach1 = function(callback){
      for(index in this){                       
        if(this.hasOwnProperty(index)){  //phan biet elem thuc trong array va elem trong prototype
             callback(this[index], index, this);
        }
      }
}
// courses.forEach1(function(elem, index, a){
//      console.log(elem, index, a);
// })
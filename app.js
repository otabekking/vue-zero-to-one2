"use sctrict"

// This first lesson

// new Vue({
//     el: '#app',
//     data: {
//         name: 'hello everone',h
//         surname: 'Read again',
//         number: 20 ** 2 + 2 ** 2,
//         olver: false,
//         string: 'This is info more question about '
//     },
//     methods: {
//         changeName: function (event) {
//             this.name = event.target.value;

//         },
//         colors: function (lok) {
//             this.surname = lok.target.value
//         },
//         sayAnything: function () {
//             return "I am otabek"
//         }
//     }
//  });


// This second lesson

//  new Vue({
//      el: '#app',
//      data: {
//          url: "http://google.com",
//          Telegram: 'https://t.me/@king_07777',
//          call: "hey guys"
//      }
//  });


// This third lesson


//  new Vue({
//      el: '#app',
//      data: {
//          link: '<a href="https://t.me/@king_07777">Click</a>'
//      }
//  });

// This fourth lesson


//  new Vue({
//      el: '#app',
//      data: {
//          counter: 0,
//          counter2: 0
//      },
//      methods: {
//          RiseCounter: function () {
//              this.counter--
//          },
//          hover: function (event) {
//              event.target.style.color = 'red'
//          }
//      }
//  });

// This fifth lesson

//   new Vue({
//       el: '#app',
//       data: {
//           adder: 0,
//           Divison: "multply"
//       },
//       methods: {
//           RiseNumber: function (num, event) {
//               this.adder += num
//               if (num === 5) {
//                   event.target.style.color = "red"
//               } else if (num == 10) {
//                   event.target.style.color = "blue"
//               }

//           },
//           RiseNumber2: function (ad, event) {
//               this.adder += ad
//               if (ad == 10) {
//                   event.target.style.color = "greeng"
//               }
//           }
//       }
//   });

// This sixth lesson

// new Vue({
//     el: '#app',
//     data: {
//         X: 0,
//         Y: 0
//     },
//     methods: {
//         moverhandle: function (event) {
//             this.X = event.clientX
//             this.Y = event.clientY
//         }
//     }
// });

// This sevevnth lesson

// new Vue({
//     el: '#app',
//     data: {

//     },
//     methods: {
//         alertcall: function (event) {

//             if (event.keyCode === 13) {
//                 alert(event.target.value)
//             }
//         }
//     }
// });

// This eighth lesson

// new Vue({
//     el: '#app',
//     data: {
//         sanash: 0,
//         url:'https:/google.com'
//     },
//     methods: {

//     }
// });

// This ninth lesson

// new Vue({
//     el: "#app",
//     data: {
//         inputform: "hello"
//     }
// });


// This tenth lesson

// new Vue({
//     el: "#app",
//     data: {
//         isActive: false,
//         color: ''
//     },
//     computed: {
//         getCssClasses: function () {
//             return {
//                 'red': this.isActive,
//                 'green': !this.isActive
//             }
//         }
//     },

// Bunda sekin ishlaydi tepadgi bundan yaxshi ishlaydi
//     methods: {
//         getCssClasses: function () {
//             return {
//                 'red': this.isActive,
//                 'green': !this.isActive
//             }
//         }
//     }
// });

// This eleventh lesson

// new Vue({
//     el: "#app",
//     data: {
//         color: "green",
//         height: 100,
//         width: 100,

//     },
//     computed: {
//         circleClass: function () {
//             return {
//                 'background': this.color,
//                 'height': this.height + 'px',
//                 'width': this.width + 'px'
//             }
//         }
//     }
// });

// This twelveth lesson

// new Vue({
//     el: '#app',
//     data: {

//         Visible: false
//     }
// });

// This thirteenth lesson

// new Vue({
//     el: "#app",
//     data: {
//        isVisibel: true
//     }
// });

// This fourteenth lesson

// new Vue({
//     el: '#app',
//     data: {
// people: [
//     'Anvar', 'Akmal',
//     'jahon', 'Rashid', 'Abdulajon', 20
// ] Bu array kornishi
//         people: [

//             {
//                 name: 'otabek,age:22'
//             },
//             {
//                 name: 'Abdulajon,age:27'
//             },
//             {
//                 name: 'Teshmat,age:26'
//             },
//         ],
//         worker:[
//             'Eshmat','Ketmon','Boltvoy'
//         ]
//     }
// });

// This fifteenth lesson and 16

// new Vue({
//     el: '#app',
//     data: {
//         counter: 0,
//         condintion: "",

//     },
//     methods: {
//         changing: function () {
//             this.counter++
//             this.condintion = this.counter >= 3 ? 'more than 3' : 'less than 3'
//         },
//         changing2: function () {
//             this.counter--
//             this.condintion = this.counter >= -3 ? "not mauch num" : 'crawed num'
//         },
//         result: function () {
//             console.log("result is called")
//             return this.counter > 5 ? 'sen uta olmading' : 'sen ota olding'
//         }

//     },
//     computed: {
//         last: function () {
//             console.log('')
//             return this.counter >= 15 ? 'smart' : ' no profesional'
//         }
//     },
//     watch: {
//         counter: function () {
//             console.log(this.counter)
//         }
//     }
// });

// This Seventeenth lesson

let vue1 = new Vue({
    el: '#app',
    data: {
        title: 'hello vue'
    },
    methods: {
        alertFast: function () {
            alert('do you want to join vue 1')
        }
    }

});
console.log(vue1)
vue1.newfield = 'Random text'
new Vue({
    el: '#app2',
    data: {
        title: 'hello vue2'
    },
    methods: {
        salom: function () {
            vue1.title = 'hello everyone'
            vue1.newfield = 'my friends are very clever'

            setTimeout(function () {
                vue1.alertFast()
            }, 5000)
        }
    }
})
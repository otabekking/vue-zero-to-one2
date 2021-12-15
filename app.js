 // This first lesson

 // new Vue({
 //     el: '#app',
 //     data: {
 //         name: 'hello everone',
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
 //          Telegram: 'https://t.me/@king_07777'
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

 new Vue({
     el: '#app',
     data: {
         adder: 0,
         Divison: "multply"
     },
     methods: {
         RiseNumber: function (num, event) {
             this.adder += num
             if (num === 5) {
                 event.target.style.color = "red"
             } else if (num == 10) {
                 event.target.style.color = "blue"
             }

         },
         RiseNumber2: function (ad, event) {
             this.adder += ad
             if (ad == 10) {
                 event.target.style.color = "greeng"
             }
         }
     }
 })
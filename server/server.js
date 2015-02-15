Meteor.startup(function () {
  smtp = {
    username: 'wesley.vance32@gmail.com',   // eg: server@gentlenode.com
    password: 'USaf32@CNC23',   // eg: 3eeP1gtizk5eziohfervU
    server:   'smtp.gmail.com',  // eg: mail.gandi.net
    port: 25
  };

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;

  // if(Products.find().count() === 0){
  //   Products.insert({thumb:'applepie.jpeg',name:'Apple Pie',desc:'Decadent Apple Pie',price:2.50,catName:'Fruity'});
  //   Products.insert({thumb:'blackberrysmoothie.jpeg',name:'Blackberry Smoothie',desc:'Luscious Blackbery Smoothie',price:2.50,catName:'Fruity'});
  //   Products.insert({thumb:'mod1.jpg',name:'EGO Twist',desc:'Ego Twist Mod',price:23.50,catName:'Mods'});

  // }
  // if(Categories.find().count() === 0){
  //     var hwid = Categories.insert({name:'HARDWARE'});
  //     var juid = Categories.insert({name:'JUICE'});
  //     SubCategories.insert({name:'Mods',cat:hwid});
  //     SubCategories.insert({name:'Fruity',cat:juid});
  //     SubCategories.insert({name:'Sweet',cat:juid});
  // }
});

Meteor.methods({
  sendEmail: function (to, from, subject, text) {
    check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  }

  // removeAll:function(){
  //       Products.remove({});
  //       Categories.remove({});
  //       CartItems.remove({});
  //   },
  //   addToCart:function(qty,product,session){
  //       if(qty > 0){
  //           CartItems.insert({qty:qty,product:product,sessid:session});
  //       } else{
  //           console.log('Quantity is Zero');
  //       }

  //   },
  //   removeCartItem:function(id){
  //       CartItems.remove({_id:id});
  //   }

});
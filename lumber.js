Transactions = new Mongo.Collection('transactions');



if (Meteor.isClient) {
  //config
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

  //Collections

  Template.main.helpers({
    transactions: function(){
        return Transactions.find();
      }

  });

  //Events
  Template.main.events({
    "keypress input.qty": function(evt, template){
      if(evt.which === 13){
        var obj = {};
        //TODO find the right way to do this...
        obj.to = $('#to').val();
        obj.from = $('#from').val();
        obj.material = $('#material').val();
        obj.qty = template.find('.qty').value;

        Meteor.call('addTransaction',obj);

        //obj = {};
      }


      //alert(evt.which);
    },
    "click #removeTransactions": function(){
      Meteor.call('removeTransactions');
    }
  });





}


Meteor.methods({
  addTransaction: function(obj){
    console.log('saveTransactions called');

    Transactions.insert({
      to: obj.to,
      from: obj.from,
      material: obj.material,
      qty: obj.qty
    });
  },
  removeTransactions: function(){
    Transactions.remove({});
  }
});



if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

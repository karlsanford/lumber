Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/main',function(){
    this.layout('layout');
    this.render('main');
});
Router.route('/',function(){
    this.layout('layout');
    this.render('home');
});
Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here ....
});

Router.route('/', {name: 'home'});
Router.route('userList');
Router.route('contact');
Router.route('chat');
Router.route('about');
Router.route('getinvolve');

Router.route('apidemo');

Router.route('comments');

Router.route('profile')

Router.route('dreamerpage/:_id',
	{name:'dreamerpage',
	 data:function(){
	 	console.log(this.params._id);
	 	return Dreamers.findOne(this.params._id)}})
Router.route('supporterpage/:_id',
	{name:'supporterpage',
	 data:function(){
	 	console.log(this.params._id);
	 	return Supporters.findOne(this.params._id)}})


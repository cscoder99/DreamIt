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

Router.route('firefly');

Router.route('profile')



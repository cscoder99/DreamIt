Template.comments.events({
"click #submitcomment": function(event){
	console.log("hey we clicked it");
	alert("Your comment has been successfully recorded.")
	const comment =$("#comment").val();
	const date = new Date();
	const jsonobj = {comment:comment, date:date};
	Comments.insert(jsonobj);
}
})


Template.comments.helpers({
 commentlist: function(){return Comments.find();}
})
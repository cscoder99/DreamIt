Template.profile.events({
	"submit #dreamerForm": function(event){
		event.preventDefault();

		console.log("hey we clicked it");
		alert("Your response has been successfully recorded.")
		const name =$("#dreamerName").val();
		const goals = $('#dreamerGoals').val();
	    const biography = $('#dreamerBio').val();
	    const email = $('#dreamerEmail').val();
	    const phonenumber = $('#dreamerPhone').val();
	    if($('#dreamerAble').is(':checked')) {
	    	var able = true;
	    }
	    else {
	    	var able = false;
	    }


		const jsonobj = {name:name, goals:goals, biography:biography, email:email, phonenumber:phonenumber, able:able};
		Dreamers.insert(jsonobj);
	},
	"submit #supporterForm": function(event) {
		event.preventDefault();
		console.log("hey we clicked it");
		alert("Your response has been successfully recorded.")
		const name =$("#supporterName").val();
		const skills = $('#supporterSkills').val();
	    const biography = $('#supporterBio').val();
	    const email = $('#supporterEmail').val();
	    const phonenumber = $('#supporterPhone').val();
	    if($('#supporterAble').is(':checked')) {
	    	var able = true;
	    }
	    else {
	    	var able = false;
	    }


		const jsonobj = {name:name, skills:skills, biography:biography, email:email, phonenumber:phonenumber, able:able};
		Supporters.insert(jsonobj);
	}
})


Template.profile.helpers({

})

Template.supporters.helpers({
	supporters:function(){
		return Supporters.find();
	}
})
document.getElementById("uploadBtn").onchange = function () {
    document.getElementById("uploadFile").value = this.value;
};
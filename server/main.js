Meteor.publish('entidades',function(){
	return entidades.find();
})
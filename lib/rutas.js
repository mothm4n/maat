Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: '404',
	waitOn: function(){ return Meteor.subscribe('entidades'); }
})
Router.onBeforeAction('404',{only:'entidadShow'});

Router.route('/', function () {
  this.render('listadoEntidades');
});

Router.route('/qrscanner', function () {
  this.render('qrscanner');
});


Router.route('/entidad/:_id', function () {
	var entidad = entidades.findOne({_id: this.params._id});
	this.render('entidadShow', {data: entidad});
	},{
	name:"entidad.show"
	}
);

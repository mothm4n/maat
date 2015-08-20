Template.entitySubmit.events({
	'submit form': function (e) {
		e.preventDefault();

		var entity = {
			titulo: $(e.target).find('[name=titulo]').val(),
			texto: $(e.target).find('[name=texto]').val(),
		};
		entity._id = entidades.insert(entity);
		Router.go('entidad.show',entity);
	}
});
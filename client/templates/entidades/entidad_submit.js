Template.entitySubmit.events({
	'submit form': function (e) {
		e.preventDefault();
		var codigo =_.sample(["bishop","knight","queen","pawn","knight"], 4);

		var entity = {
			titulo: $(e.target).find('[name=titulo]').val(),
			texto: $(e.target).find('[name=texto]').val(),
			img: "http://placehold.it/124x124",
			code: codigo
		};
		entity._id = entidades.insert(entity);
		Router.go('entidad.show',entity);
	}
});
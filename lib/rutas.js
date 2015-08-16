Router.route('/', function () {
  this.render('home');
});

Router.route('/qrscanner', function () {
  this.render('qrscanner');
});

Router.route('/entidad/:_id', function () {
  //renderizar con ese dato
  this.render('entidad', {
    entidad: function () {
      return entidades.findOne({_id: this.params._id});
    }
  });
});
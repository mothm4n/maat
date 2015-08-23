Template.layout.helpers({
	tp: function () {
		return Session.get('tituloPagina');
	},
	gd: function guid() {
		  function s4() {
		    return Math.floor((1 + Math.random()) * 0x10000)
		      .toString(16)
		      .substring(3);
		  }
		  return s4();
		}
});
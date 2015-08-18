/*[
      {
        nombre: 'leaf'
      },
      {
        nombre: 'fire'
      },
      {
        nombre: 'tint'
      },
      {
        nombre: 'eye-open'
      },
      {
        nombre: 'apple'
      },
      {
        nombre: 'grain'
      }
    ]
*/

Template.listadoEntidades.helpers({
  entidades: function(){
    return entidades.find();
  }

});


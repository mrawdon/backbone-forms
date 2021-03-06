
//==================================================================================================
//NESTEDFIELD
//==================================================================================================

Form.NestedField = Form.Field.extend({

  template: _.template($.trim('\
    <div>\
	  <label for="<%= editorId %>"><%= title %></label>\
	  <span data-editor></span>\
      <% if (help) { %>\
        <div><%= help %></div>\
      <% } %>\
      <div data-error></div>\
    </div>\
  '), null, Form.templateSettings)

});

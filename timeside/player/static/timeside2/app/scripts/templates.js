define(['handlebars'], function(Handlebars) {

this["templates"] = this["templates"] || {};

this["templates"]["footer"] = Handlebars.default.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h2>Footer</h2>";
  },"useData":true});

this["templates"]["header"] = Handlebars.default.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<nav class=\"navbar navbar-default navbar-fixed-top\"></nav>";
  },"useData":true});

this["templates"]["layout"] = Handlebars.default.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<!-- Modal --><div class=\"modal fade popup-container\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"></div><header class=\"hidden\"></header><div class=\"main-container container-fluid\" id=\"swiper-container\"><div class=\"main-wrapper container-fluid\"><div class=\"side-menu col-sm-3 col-md-3\"><label></label></div><div class=\"main col-sm-9 col-md-9\" ><h2></h2></div></div></div><div class=\"notification modal\" data-backdrop=\"static\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button><h4>miaw</h4></div><div class=\"container\"></div><div class=\"modal-body\"><div class=\"alert\" role=\"alert\">...</div></div><div class=\"modal-footer\"><a href=\"#\" data-dismiss=\"modal\" class=\"btn\">Close</a><a href=\"#\" class=\"btn btn-primary\">Save <small>changes</small></a></div></div></div></div>";
  },"useData":true});

this["templates"]["leftmenu"] = Handlebars.default.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"panel-group\" id=\"accordion\"><div class=\"dropdown panel desktop-hidden\"><a href=\"#\" id=\"connected_user_lbl\" class=\"panel-title dropdown-toggle panel-heading\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"glyphicon glyphicon-th-large\"></span>Connected user <span class=\"caret\"></span></a><ul class=\"dropdown-menu\"><li><a href=\"#\">Logout</a></li></ul></div><div class=\"panel \" data-role=\"ALL\" data-category=\"home\"><div class=\"panel-heading\"><h4 class=\"panel-title\"><a href=\"/#\"><span class=\"glyphicon glyphicon-th-large\"></span>Home</a></h4></div></div><div class=\"panel\" data-role=\"ADMIN_SI\" data-category=\"user\"><div class=\"panel-heading\"><h4 class=\"panel-title\"><a href=\"/#users/list\"><span class=\"glyphicon glyphicon-th-large\"></span>Users</a></h4></div></div><div class=\"panel \" data-rolearray=\"DISPATCHER,AGENT_DEPOT\" data-category=\"message\"><div class=\"panel-heading\"><h4 class=\"panel-title\"><a href=\"#messages\"><span class=\"glyphicon glyphicon-envelope text-primary\"></span>Messages&nbsp;<span class=\"badge\">0</span></a></h4></div></div><div class=\"panel \" data-role=\"ADMIN_SI\" data-category=\"message\"><div class=\"panel-heading\"><h4 class=\"panel-title\"><a href=\"#typemessages/list\"><span class=\"glyphicon glyphicon-envelope text-primary\"></span>Message types</a></h4></div></div><div class=\"panel\" data-role=\"ADMIN_SI\" data-category=\"dataref\"><div class=\"panel-heading\"><h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\"><span class=\"glyphicon glyphicon-folder-close\"></span>Global data</a></h4></div><div id=\"collapseOne\" class=\"panel-collapse collapse in\" ><div class=\"panel-body\"><table class=\"table\"><tr><td><span class=\"glyphicon glyphicon-pencil text-primary\"></span><a href=\"/#dataref/typeclient/list\">Client types</a></td></tr><tr><td><span class=\"glyphicon glyphicon-user text-primary\"></span><a href=\"/#dataref/localite/list\">Cities</a></td></tr><tr><td><span class=\"glyphicon glyphicon-usd text-info\"></span><a href=\"/#dataref/devise/list\">Currencies</a></td></tr><tr><td><span class=\"glyphicon glyphicon-filter text-info\"></span><a href=\"/#dataref/uniteproduit/list\">Product units</a></td></tr></table></div></div></div><div class=\"panel\" data-rolearray=\"DISPATCHER,AGENT_DEPOT\" data-category=\"livraison\"><div class=\"panel-heading\"><h4 class=\"panel-title\"><a data-toggle=\"collapse\" class=\"collapsed\" data-parent=\"#accordion\" href=\"#collapseLivraisons\"><span class=\"glyphicon glyphicon-th\"></span>Deliveries</a></h4></div><div id=\"collapseLivraisons\" class=\"panel-collapse collapse\"><div class=\"panel-body\"><table class=\"table\"><tr><td><span class=\"glyphicon glyphicon-user text-info\"></span><a href=\"/#livraison/list\">Deliveries list</a></td></tr><tr><td><span class=\"glyphicon glyphicon-upload text-danger\"></span><a href=\"/#livraison/import\">Import</a></td></tr></table></div></div></div><div class=\"panel \" data-rolearray=\"DISPATCHER,AGENT_DEPOT\" ><div class=\"panel-heading\"><h4 class=\"panel-title\"><a href=\"/#notificationslenez\"><span class=\"glyphicon glyphicon-flag\"></span>Notifications</a></h4></div></div><div class=\"panel \" data-role=\"DISPATCHER\" data-category=\"client\"><div class=\"panel-heading\"><h4 class=\"panel-title\"><a data-toggle=\"collapse\" class=\"collapsed\" data-parent=\"#accordion\" href=\"#collapseTwo\"><span class=\"glyphicon glyphicon-th\"></span>Clients</a></h4></div><div id=\"collapseTwo\" class=\"panel-collapse collapse\"><div class=\"panel-body\"><table class=\"table\"><tr><td><span class=\"glyphicon glyphicon-user text-info\"></span><a href=\"/#zones_commerciales/list\">Commercial areas</a></td></tr><tr><td><span class=\"glyphicon glyphicon-user text-info\"></span><a href=\"/#clients/list\">Client list</a></td></tr><tr><td><span class=\"glyphicon glyphicon-upload text-danger\"></span><a href=\"/#clients/import\">Import</a></td></tr></table></div></div></div><div class=\"panel \" data-role=\"DISPATCHER\" data-category=\"camion\"><div class=\"panel-heading\"><h4 class=\"panel-title\"><a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseNew1\"><span class=\"glyphicon glyphicon-globe\"></span>Transporters</a></h4></div><div id=\"collapseNew1\" class=\"panel-collapse collapse\"><div class=\"panel-body\"><table class=\"table\"><tr><td><span class=\"glyphicon glyphicon-globe text-info\"></span><a href=\"/#transporteurs/list\">Transporter list</a></td></tr><tr><td><span class=\"glyphicon glyphicon-globe text-info\"></span><a href=\"/#camions/list\">Truck list</a></td></tr><tr><td><span class=\"glyphicon glyphicon-upload text-danger\"></span><a href=\"/#transporteurs/import\">Import</a></td></tr><tr><td><span class=\"glyphicon glyphicon-globe text-info\"></span><a href=\"/#camions/debug_active\">Debug - Active trucks</a></td></tr></table></div></div></div><div class=\"panel \" data-role=\"DISPATCHER\" data-category=\"depot\"><div class=\"panel-heading\"><h4 class=\"panel-title\"><a href=\"/#depots/list\"><span class=\"glyphicon glyphicon-home\"></span>Depots</a></h4></div></div><div class=\"panel \" data-rolearray=\"DISPATCHER,ADMIN_SI\" data-category=\"produit\"><div class=\"panel-heading\"><h4 class=\"panel-title\"><a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseNew2\"><span class=\"glyphicon glyphicon-oil\"></span>Products</a></h4></div><div id=\"collapseNew2\" class=\"panel-collapse collapse\"><div class=\"panel-body\"><table class=\"table\"><tr data-role=\"ADMIN_SI\"><td><span class=\"glyphicon glyphicon-list-alt text-info\"></span><a href=\"/#dataref/familleproduit/list\">Families</a></td></tr><tr data-role=\"DISPATCHER\"><td><span class=\"glyphicon glyphicon-oil text-info\"></span><a href=\"/#produits/list\">Items</a></td></tr><tr data-role=\"DISPATCHER\"><td><span class=\"glyphicon glyphicon-upload text-danger\"></span><a href=\"/#produits/import\">Import</a></td></tr></table></div></div></div><div class=\"panel \" data-role=\"DISPATCHER\" ><div class=\"panel-heading\"><h4 class=\"panel-title\"><a href=\"/#messages/list\"><span class=\"glyphicon glyphicon-star\"></span>Feedbacks</a></h4></div></div><div class=\"panel \" data-role=\"ADMIN_SI\" data-category=\"webservice\"><div class=\"panel-heading\"><h4 class=\"panel-title\"><a href=\"/#acces_ws/edit\"><span class=\"glyphicon glyphicon-cog text-danger\"></span>WS credentials</a></h4></div></div></div>";
  },"useData":true});

this["templates"]["auth/login"] = Handlebars.default.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"page-header text-center\"><img src=\"http://www.total.fr/cs/Total_NW/img/common/logos/header-logo-total.png\" alt=\"Total\"><h1>W.I.T. Admin <small>Login page</small></h1></div><div class=\"login_form\"><div class=\"form-group\"><label class=\"control-label\"> </label><input type=\"text\" data-validation=\"username\" class=\"form-control\" placeholder=\"Username\" value=\"\"></div><div class=\"form-group\"><label class=\"control-label\"> </label><input type=\"password\" data-validation=\"password\" class=\"form-control\" placeholder=\"Password\" value=\"\"></div><div class=\"checkbox\"><label><input type=\"checkbox\" data-validation=\"remember\"> Stay connected</label></div><div class=\"text-center form-group\"><button type=\"button\" class=\"btn btn-primary has-spinner\" id=\"btnGo\"><i class=\"fa fa-spinner fa-spin\"></i>Login<small>into Back Office</small></button><button type=\"button\" class=\"btn\" id=\"btnForgetPassword\"><a href=\"#auth/forgetpassword\">Password<small>forgotten</small></a></button></div></div>";
  },"useData":true});

this["templates"]["auth/popup_forgetpassword"] = Handlebars.default.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"btn_close close\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><h4 class=\"modal-title\" id=\"myModalLabel\">Password forgotten</h4></div><div class=\"modal-body\"><div class=\"forgetpassword_form\"><div class=\"form-group\"><label class=\"control-label\"> </label><input type=\"text\" data-validation=\"username\" class=\"form-control\" placeholder=\"Please enter your username\" value=\"\"></div><div class=\"form-group\"><label class=\"control-label\"> </label><input type=\"text\" data-validation=\"username2\" class=\"form-control\" placeholder=\"Please re-enter your username\" value=\"\"></div><button type=\"button\" class=\"btn btn-primary has-spinner\" id=\"btnGo\"><i class=\"fa fa-spinner fa-spin\"></i>Send</button></div></div><!--<div class=\"modal-footer\"><button type=\"button\" class=\"btn_close btn btn-default\">Close</button></div>--></div></div>";
  },"useData":true});

this["templates"]["auth/popup_newpassword"] = Handlebars.default.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"btn_close close\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><h4 class=\"modal-title\" id=\"myModalLabel\">New password</div><div class=\"modal-body\"><div class=\"newpassword_form\"><div class=\"form-group\"><label class=\"control-label\"> </label><input type=\"text\" data-validation=\"email\" class=\"form-control\" placeholder=\"Email\" value=\"\"></div><div class=\"form-group\"><label class=\"control-label\"> </label><input type=\"password\" data-validation=\"password\" class=\"form-control\" placeholder=\"Your new password\" value=\"\"></div><div class=\"form-group\"><label class=\"control-label\"> </label><input type=\"password\" data-validation=\"confirm_password\" class=\"form-control\" placeholder=\"Your new password\" value=\"\"></div><button type=\"button\" class=\"btn btn-primary has-spinner\" id=\"btnGo\"><i class=\"fa fa-spinner fa-spin\"></i>Send</button></div></div><!--<div class=\"modal-footer\"><button type=\"button\" class=\"btn_close btn btn-default\">Close</button></div>--></div></div>";
  },"useData":true});

this["templates"]["data/item_detail"] = Handlebars.default.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<h1>Item : "
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>";
},"useData":true});

this["templates"]["data/liste_items"] = Handlebars.default.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<li data-id="
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + " >"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "<button data-uuid="
    + escapeExpression(((helper = (helper = helpers.uuid || (depth0 != null ? depth0.uuid : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"uuid","hash":{},"data":data}) : helper)))
    + " data-viewid=\"item_detail\">Details (404)</button><button data-uuid="
    + escapeExpression(((helper = (helper = helpers.uuid || (depth0 != null ? depth0.uuid : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"uuid","hash":{},"data":data}) : helper)))
    + " data-viewid=\"item_view\">View</button></li>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<h1>Liste des items </h1><ul>";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.items : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</ul>";
},"useData":true});

this["templates"]["navigation/base_generic_confirmimport"] = Handlebars.default.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"table-responsive\"><table class=\"table table-striped\"><thead><th>Row number</th><th>Column number</th><th>Message</th></thead><tbody>";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.errors : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</tbody></table></div>";
},"2":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<tr><td>"
    + escapeExpression(((helpers.val || (depth0 && depth0.val) || helperMissing).call(depth0, (depth0 != null ? depth0.row : depth0), {"name":"val","hash":{},"data":data})))
    + "</td><td>"
    + escapeExpression(((helpers.val || (depth0 && depth0.val) || helperMissing).call(depth0, (depth0 != null ? depth0.column : depth0), {"name":"val","hash":{},"data":data})))
    + "</td><td>"
    + escapeExpression(((helpers.val || (depth0 && depth0.val) || helperMissing).call(depth0, (depth0 != null ? depth0.message : depth0), {"name":"val","hash":{},"data":data})))
    + "</td></tr>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"page-header\"><h1>W.I.T. Admin <small>"
    + escapeExpression(((helper = (helper = helpers.mainTitle || (depth0 != null ? depth0.mainTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"mainTitle","hash":{},"data":data}) : helper)))
    + "</small></h1></div><h2>Global reporting</h2><label class=\"lbl-errors\">"
    + escapeExpression(((helpers.val || (depth0 && depth0.val) || helperMissing).call(depth0, (depth0 != null ? depth0.errorMessage : depth0), {"name":"val","hash":{},"data":data})))
    + "</label>";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.hasError : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "<h2>Result</h2><div class=\"generic_array_container\"></div><button type=\"button\" class=\"btn btn-confirm-import\"> <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> Validate import</button>";
},"useData":true});

this["templates"]["navigation/base_genericimportview"] = Handlebars.default.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"page-header\"><h1>W.I.T. <small>"
    + escapeExpression(((helper = (helper = helpers.mainTitle || (depth0 != null ? depth0.mainTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"mainTitle","hash":{},"data":data}) : helper)))
    + "</small></h1></div><div class=\"panel panel-default\"><div class=\"panel-title\"></div><div class=\"panel-body\"><div class=\"row\"><div class=\"form-group col-md-6\"><label>Choose file</label><label class=\"control-label\"> </label><input class=\"input_file upload_data_file\" class=\"form-control\" type=\"file\" name=\"files[]\" accept=\".xls, .xlsx\"></div><div class=\"col-md-6\"><a><button type=\"button\" class=\"btn btn-download-sample\" ><span class=\"glyphicon glyphicon-download\" aria-hidden=\"true\"></span>Download a sample file</button></a></div></div></div></div><div class=\"text-center form-group\"><button type=\"button\" class=\"btn btn-primary has-spinner btn-lg disabled btn-upload-file\" id=\"btnGo\"><i class=\"fa fa-spinner fa-spin\"></i>Upload file</button></div>";
},"useData":true});

this["templates"]["navigation/base_genericlist"] = Handlebars.default.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.newBtnConfig : depth0)) != null ? stack1.url : stack1), depth0))
    + "\"><button type=\"button\" class=\"btn \"> <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.newBtnConfig : depth0)) != null ? stack1.label : stack1), depth0))
    + "</button></a>";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"filters\"><label for=\"filters\"></label><input id=\"filters\" placeholder=\"Filter\" type=\"text\" class=\"generic_list_filter\" value=\""
    + escapeExpression(((helper = (helper = helpers.inputFilterText || (depth0 != null ? depth0.inputFilterText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"inputFilterText","hash":{},"data":data}) : helper)))
    + "\"/></div>";
},"5":function(depth0,helpers,partials,data) {
  return "";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"page-header\"><h1>W.I.T. Admin <small>"
    + escapeExpression(((helper = (helper = helpers.mainTitle || (depth0 != null ? depth0.mainTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"mainTitle","hash":{},"data":data}) : helper)))
    + "</small></h1></div>";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.newBtnConfig : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.showFilter : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "<div class=\"generic_array_container\"></div>";
  stack1 = ((helpers.paginate || (depth0 && depth0.paginate) || helperMissing).call(depth0, (depth0 != null ? depth0.paginate : depth0), {"name":"paginate","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});

this["templates"]["navigation/home"] = Handlebars.default.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"row parameters\"><button data-viewid=\"visu_test1\">POC Tests</button><button data-viewid=\"list_items\">Item list</button></div>";
  },"useData":true});

this["templates"]["navigation/sub_base_genericlist_array"] = Handlebars.default.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<th>"
    + escapeExpression(lambda(depth0, depth0))
    + "</th>";
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<tr>";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.computed_values : depth0), {"name":"each","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</tr>";
},"4":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "<td>";
  stack1 = ((helpers.valGenericList || (depth0 && depth0.valGenericList) || helperMissing).call(depth0, depth0, {"name":"valGenericList","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</td>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"table-container\"><div class=\"table-wrapper\"><table class=\"table table-striped\"><thead>";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.headers : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "</thead><tbody>";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.items : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</tbody></table></div></div>";
},"useData":true});

this["templates"]["navigation/tests"] = Handlebars.default.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"row parameters\"><button data-layout=\"test\">TEST</button><button data-layout=\"update\">UPDATE</button></div><div class=\"row test d3\"><div class=\"waveform\"><h4>SVG:</h4><div class=\"svg\"></div><h4>SVG2:</h4><div class=\"svg2\"></div></div></div>";
  },"useData":true});

this["templates"]["users/edit_user"] = Handlebars.default.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<option value=\""
    + escapeExpression(((helpers.val || (depth0 && depth0.val) || helperMissing).call(depth0, (depth0 != null ? depth0.id : depth0), {"name":"val","hash":{},"data":data})))
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.selected : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">"
    + escapeExpression(((helpers.val || (depth0 && depth0.val) || helperMissing).call(depth0, (depth0 != null ? depth0.display : depth0), {"name":"val","hash":{},"data":data})))
    + "</option>";
},"2":function(depth0,helpers,partials,data) {
  return " selected=\"selected\" ";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "<div class=\"page-header\"><h1>W.I.T. Admin <small>"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</small></h1></div><div class=\"edituser_form\"><div class=\"row\"><div class=\"col-md-6\"><div class=\"panel panel-default\"><div class=\"panel-title\">Credentials</div><div class=\"panel-body\"><div class=\"form-group\"><label>Email</label><label class=\"control-label\"> </label><input type=\"text\" data-validation=\"email\" class=\"form-control\" placeholder=\"Email\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.email : stack1), depth0))
    + "\"></div><div class=\"form-group\"><label>Login</label><label class=\"control-label\"> </label><input type=\"text\" data-validation=\"username\" class=\"form-control\" placeholder=\"username\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.username : stack1), depth0))
    + "\"></div><div class=\"form-group\"><label>Password</label><label class=\"control-label\"> </label><input type=\"password\" data-validation=\"password\" class=\"form-control\" placeholder=\"Password\" value=\"\"></div><div class=\"form-group\"><label>Password confirmation</label><label class=\"control-label\"> </label><input type=\"password\" data-validation=\"confirm_password\" class=\"form-control\" placeholder=\"Password confirmation\" value=\"\"></div></div></div></div><div class=\"col-md-6\"><div class=\"panel panel-default\"><div class=\"panel-title\">Identification</div><div class=\"panel-body\"><div class=\"form-group\"><label>Role</label><label class=\"control-label\"> </label><select class=\"select-role\" class=\"form-control\" data-validation=\"role\">";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.roles : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "</select></div><div class=\"form-group\"><label>Phone number</label><label class=\"control-label\"> </label><input type=\"text\" data-validation=\"telephone\" class=\"form-control\" placeholder=\"Téléphone\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.telephone : stack1), depth0))
    + "\"></div><div class=\"form-group\" id=\"panel_zonecommerciale\"><label>Commercial area</label><label class=\"control-label\"> </label><select class=\"form-control\" data-validation=\"zoneCommerciale\">";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.zonesCommerciales : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "</select></div><div class=\"form-group\" id=\"panel_depot\"><label>Depot</label><label class=\"control-label\"> </label><select class=\"form-control other_langs\" data-validation=\"depot\">";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.depots : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</select></div></div></div></div></div><div class=\"text-center form-group\"><button type=\"button\" class=\"btn btn-primary has-spinner btn-lg\" id=\"btnGo\"><i class=\"fa fa-spinner fa-spin\"></i>Save</button></div></div>";
},"useData":true});

this["templates"]["visu/item_view"] = Handlebars.default.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<h2>Item : "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h2><div><button data-action=\"start\">Start loading</button><button data-action=\"add\" disabled>Add waveform track</button><button data-action=\"play\" disabled>Play</button></div><div class=\"row test d3\"><div class=\"\"><h4>Navigation track</h4><div class=\"navigation-track\"></div><h4>Other tracks</h4><div class=\"other-tracks\"></div></div></div>";
},"useData":true});

this["templates"]["visu/sub_track_canvas"] = Handlebars.default.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"container_track_canvas\"><canvas class=\"canvas\"></canvas></div>";
  },"useData":true});

this["templates"]["visu/sub_track_navigator"] = Handlebars.default.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"container_track_navigator waveform\"><div class=\"svg\"></div></div>";
  },"useData":true});

this["templates"]["visu/sub_track_waveform"] = Handlebars.default.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"container_track_waveform waveform\"><div class=\"svg\"></div></div>";
  },"useData":true});

this["templates"]["visu/test1"] = Handlebars.default.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"row parameters\"><button data-layout=\"test\">TEST</button><button data-layout=\"update\">UPDATE</button><button data-layout=\"audio\">Load audio file</button></div><div class=\"row test d3\"><div class=\"\"><h4>Navigation track</h4><div class=\"navigation-track\"></div><h4>Other tracks</h4><div class=\"other-tracks\"></div></div></div>";
  },"useData":true});

this["templates"]["visu/test2"] = Handlebars.default.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"row parameters\"><button data-layout=\"test\">TEST CANVAS</button></div><div class=\"row test\"><div class=\"\"><h4>Test test</h4><canvas class=\"canvas-test\" width=\"300\" height=\"200\"></canvas><h4>Other tracks</h4><div class=\"other-tracks\"></div></div></div>";
  },"useData":true});

return this["templates"];

});
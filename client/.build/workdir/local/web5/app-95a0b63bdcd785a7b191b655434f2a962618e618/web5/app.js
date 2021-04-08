let AppAPIClient = function() {
	JkWidgetWebJSONAPIClientWithGui.call(this);
	this.widgetDefaultErrorHandler = null;
};

AppAPIClient.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetWebJSONAPIClientWithGui.prototype);
AppAPIClient.prototype.constructor = AppAPIClient;
AppAPIClient.prototype._t = {
	"JkWebJsonJSONAPIClient" : true,
	"AppAPIClient" : true,
	"JkWidgetWebJSONAPIClientWithGui" : true
};
AppAPIClient.prototype._tobj = AppAPIClient;

AppAPIClient.NEW = function() {
	var v = new AppAPIClient;
	return v.CTOR_AppAPIClient();
};

AppAPIClient.prototype.CTOR_AppAPIClient = function() {
	this.widgetDefaultErrorHandler = null;
	if(JkWidgetWebJSONAPIClientWithGui.prototype.CTOR_JkWidgetWebJSONAPIClientWithGui.call(this) == null) {
		return null;
	}
	return this;
};

AppAPIClient.getInstance = function() {
	return AppAPIClient.instance;
};

AppAPIClient.create = function(context, parentWidget) {
	if(!(context != null)) {
		return null;
	}
	AppAPIClient.instance = AppAPIClient.NEW();
	AppAPIClient.instance.setApiUrl("http://ec2-13-212-197-20.ap-southeast-1.compute.amazonaws.com:30128");
	AppAPIClient.instance.setContext(context);
	if(parentWidget != null) {
		AppAPIClient.instance.setParentWidget(parentWidget);
	}
	return AppAPIClient.instance;
};

AppAPIClient.prototype.onError1 = function(error, callback) {
	if(!(callback != null)) {
		this.onDefaultErrorHandler(error);
		return;
	}
	JkWidgetWebJSONAPIClientWithGui.prototype.onError1.call(this, error, callback);
};

AppAPIClient.prototype.onDefaultErrorHandler = function(error) {
	var context = this.getContext();
	if(!(context != null)) {
		return;
	}
	if(!(error != null)) {
		return;
	}
	if(!(this.widgetDefaultErrorHandler != null)) {
		context.showErrorDialog((error.toString()), null);
		return;
	}
	this.widgetDefaultErrorHandler(error);
};

AppAPIClient.prototype.addUser = function(data, callback, errorCallback) {
	this.doPost("/user", data, callback, errorCallback);
};

AppAPIClient.prototype.updateUser = function(id, data, callback, errorCallback) {
	this.doPut("/user/" + (JkLangString.safeString(id)), data, callback, errorCallback);
};

AppAPIClient.prototype.deleteUser = function(id, callback, errorCallback) {
	this.doDelete("/user/" + (JkLangString.safeString(id)), callback, errorCallback);
};

AppAPIClient.prototype.getUser = function(callback, errorCallback) {
	this.doGet("/user", callback, errorCallback);
};

AppAPIClient.prototype.getWidgetDefaultErrorHandler = function() {
	return this.widgetDefaultErrorHandler;
};

AppAPIClient.prototype.setWidgetDefaultErrorHandler = function(v) {
	this.widgetDefaultErrorHandler = v;
	return this;
};

AppAPIClient.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppAPIClient"] === true;
};

AppAPIClient.instance = null;

let AppAddAdminRegistrationUser = function() {
	JkJsonJSONObjectAdapter.call(this);
	this._firstname = null;
	this._lastname = null;
	this._username = null;
	this._password = null;
	this._phonenumber = null;
};

AppAddAdminRegistrationUser.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkJsonJSONObjectAdapter.prototype);
AppAddAdminRegistrationUser.prototype.constructor = AppAddAdminRegistrationUser;
AppAddAdminRegistrationUser.prototype._t = {
	"JkLangStringObject" : true,
	"JkJsonJSONObjectAdapter" : true,
	"JkJsonJSONObject" : true,
	"AppAddAdminRegistrationUser" : true
};
AppAddAdminRegistrationUser.prototype._tobj = AppAddAdminRegistrationUser;

AppAddAdminRegistrationUser.NEW = function() {
	var v = new AppAddAdminRegistrationUser;
	return v.CTOR_AppAddAdminRegistrationUser();
};

AppAddAdminRegistrationUser.prototype.CTOR_AppAddAdminRegistrationUser = function() {
	this._phonenumber = null;
	this._password = null;
	this._username = null;
	this._lastname = null;
	this._firstname = null;
	if(JkJsonJSONObjectAdapter.prototype.CTOR_JkJsonJSONObjectAdapter.call(this) == null) {
		return null;
	}
	return this;
};

AppAddAdminRegistrationUser.prototype.setFirstname = function(value) {
	this._firstname = value;
	return this;
};

AppAddAdminRegistrationUser.prototype.getFirstname = function() {
	return this._firstname;
};

AppAddAdminRegistrationUser.prototype.setLastname = function(value) {
	this._lastname = value;
	return this;
};

AppAddAdminRegistrationUser.prototype.getLastname = function() {
	return this._lastname;
};

AppAddAdminRegistrationUser.prototype.setUsername = function(value) {
	this._username = value;
	return this;
};

AppAddAdminRegistrationUser.prototype.getUsername = function() {
	return this._username;
};

AppAddAdminRegistrationUser.prototype.setPassword = function(value) {
	this._password = value;
	return this;
};

AppAddAdminRegistrationUser.prototype.getPassword = function() {
	return this._password;
};

AppAddAdminRegistrationUser.prototype.setPhonenumber = function(value) {
	this._phonenumber = value;
	return this;
};

AppAddAdminRegistrationUser.prototype.getPhonenumber = function() {
	return this._phonenumber;
};

AppAddAdminRegistrationUser.prototype.toJsonObject = function() {
	var v = JkLangDynamicMap.NEW();
	if(this._firstname != null) {
		v.setObject("firstname", (this.asJsonValue(this._firstname)));
	}
	if(this._lastname != null) {
		v.setObject("lastname", (this.asJsonValue(this._lastname)));
	}
	if(this._username != null) {
		v.setObject("username", (this.asJsonValue(this._username)));
	}
	if(this._password != null) {
		v.setObject("password", (this.asJsonValue(this._password)));
	}
	if(this._phonenumber != null) {
		v.setObject("phonenumber", (this.asJsonValue(this._phonenumber)));
	}
	return v;
};

AppAddAdminRegistrationUser.prototype.fromJsonObject = function(o1) {
	var v = (function(o) {
		if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
			return o;
		}
		return null;
	}.bind(this))(o1);
	if(!(v != null)) {
		return false;
	}
	this._firstname = v.getString("firstname", null);
	this._lastname = v.getString("lastname", null);
	this._username = v.getString("username", null);
	this._password = v.getString("password", null);
	this._phonenumber = v.getString("phonenumber", null);
	return true;
};

AppAddAdminRegistrationUser.prototype.fromJsonString = function(o) {
	return this.fromJsonObject((JkJsonJSONParser.parse(o)));
};

AppAddAdminRegistrationUser.prototype.toJsonString = function() {
	return JkJsonJSONEncoder.encode((this.toJsonObject()), true, false);
};

AppAddAdminRegistrationUser.prototype.toString = function() {
	return this.toJsonString();
};

AppAddAdminRegistrationUser.forJsonString = function(o) {
	var v = AppAddAdminRegistrationUser.NEW();
	if(!v.fromJsonString(o)) {
		return null;
	}
	return v;
};

AppAddAdminRegistrationUser.forJsonObject = function(o) {
	var v = AppAddAdminRegistrationUser.NEW();
	if(!v.fromJsonObject(o)) {
		return null;
	}
	return v;
};

AppAddAdminRegistrationUser.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppAddAdminRegistrationUser"] === true;
};

let AppAddAdminRegistration = function() {
	JkWidgetLayerWidget.call(this);
	this.vbox = null;
	this.firstname = null;
	this.lastname = null;
	this.username = null;
	this.password = null;
	this.phonenumber = null;
};

AppAddAdminRegistration.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetLayerWidget.prototype);
AppAddAdminRegistration.prototype.constructor = AppAddAdminRegistration;
AppAddAdminRegistration.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetWidget" : true,
	"AppAddAdminRegistration" : true,
	"JkWidgetLayerWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppAddAdminRegistration.prototype._tobj = AppAddAdminRegistration;

AppAddAdminRegistration.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppAddAdminRegistration;
	return v.CTOR_AppAddAdminRegistration_JkUiGuiApplicationContext(context);
};

AppAddAdminRegistration.prototype.CTOR_AppAddAdminRegistration_JkUiGuiApplicationContext = function(context) {
	this.phonenumber = null;
	this.password = null;
	this.username = null;
	this.lastname = null;
	this.firstname = null;
	this.vbox = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppAddAdminRegistration.prototype.initializeWidget = function() {
	JkWidgetLayerWidget.prototype.initializeWidget.call(this);
	var confirmbtn = JkWidgetCommonButtonWidget.forText(this.context, "Confirm", (function() {
		var admin = AppAddAdminRegistrationUser.NEW();
		admin.setFirstname((this.firstname.getWidgetText()));
		admin.setLastname((this.lastname.getWidgetText()));
		admin.setUsername((this.username.getWidgetText()));
		admin.setPassword((this.password.getWidgetText()));
		admin.setPhonenumber((this.phonenumber.getWidgetText()));
		AppAPIClient.getInstance().addUser((admin.toDynamicMap()), (function(res1) {
			this.context.showMessageDialog("Notice", "Admin account successfully added", null);
			this.firstname.setWidgetText("");
			this.lastname.setWidgetText("");
			this.username.setWidgetValue("");
			this.password.setWidgetText("");
			this.phonenumber.setWidgetText("");
		}.bind(this)), (function(err1) {
			this.context.showMessageDialog("Notice", "Failed to add admin account", null);
		}.bind(this)));
	}.bind(this)));
	var returnbtn = JkWidgetCommonButtonWidget.forText(this.context, "Return", (function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppLoginPage.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	confirmbtn.setWidgetBackgroundColor((JkGfxColor.instance("#264651")));
	confirmbtn.setWidgetTextColor((JkGfxColor.white()));
	confirmbtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	confirmbtn.setWidgetBackgroundColor((JkGfxColor.instance("#008CBA")));
	returnbtn.setWidgetBackgroundColor((JkGfxColor.instance("#264651")));
	returnbtn.setWidgetTextColor((JkGfxColor.white()));
	returnbtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.vbox.addWidget(confirmbtn);
	this.vbox.addWidget(returnbtn);
};

AppAddAdminRegistration.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.instance("DarkGray")));
	this.addWidget(widget);
	var widget2 = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	var widget3 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetMarginLeft(400);
	widget3.setWidgetMarginRight(400);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5000um")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget4 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("Admin Registation");
	widget4.setWidgetTextColor((JkGfxColor.black()));
	widget4.setWidgetFontSize((this.context.getHeightValue("8mm")));
	widget4.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget4.setWidgetFontBold(true);
	this.vbox.addWidget(widget4);
	this.firstname = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.firstname.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.firstname.setWidgetPlaceholder("First Name");
	this.firstname.setWidgetBackgroundColor((JkGfxColor.white()));
	this.firstname.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.firstname.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.firstname);
	this.lastname = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.lastname.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.lastname.setWidgetPlaceholder("Last Name");
	this.lastname.setWidgetBackgroundColor((JkGfxColor.white()));
	this.lastname.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.lastname.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.lastname);
	this.username = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.username.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.username.setWidgetPlaceholder("Username");
	this.username.setWidgetBackgroundColor((JkGfxColor.instance("#b0b0b0")));
	this.username.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.username.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.username);
	this.password = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.password.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_PASSWORD);
	this.password.setWidgetPlaceholder("Password");
	this.password.setWidgetBackgroundColor((JkGfxColor.white()));
	this.password.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.password.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.password);
	this.phonenumber = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.phonenumber.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_PHONE_NUMBER);
	this.phonenumber.setWidgetPlaceholder("Phone Number");
	this.phonenumber.setWidgetBackgroundColor((JkGfxColor.white()));
	this.phonenumber.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.phonenumber.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.phonenumber);
	widget3.addWidget1(this.vbox, 0.5, 0.5, true);
	widget2.addWidget(widget3);
	this.addWidget(widget2);
};

AppAddAdminRegistration.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppAddAdminRegistration"] === true;
};

let AppLoginPage = function() {
	JkWidgetLayerWidget.call(this);
	this.vbox = null;
	this.username = null;
};

AppLoginPage.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetLayerWidget.prototype);
AppLoginPage.prototype.constructor = AppLoginPage;
AppLoginPage.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"AppLoginPage" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetWidget" : true,
	"JkWidgetLayerWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppLoginPage.prototype._tobj = AppLoginPage;

AppLoginPage.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppLoginPage;
	return v.CTOR_AppLoginPage_JkUiGuiApplicationContext(context);
};

AppLoginPage.prototype.CTOR_AppLoginPage_JkUiGuiApplicationContext = function(context) {
	this.username = null;
	this.vbox = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppLoginPage.prototype.initializeWidget = function() {
	JkWidgetLayerWidget.prototype.initializeWidget.call(this);
	var loginbtn = JkWidgetCommonButtonWidget.forText(this.context, "Login", (function() {
	}.bind(this)));
	var signupbtn = JkWidgetCommonButtonWidget.forText(this.context, "Sign Up", (function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppAddAdminRegistration.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	loginbtn.setWidgetBackgroundColor((JkGfxColor.instance("#008CBA")));
	loginbtn.setWidgetTextColor((JkGfxColor.white()));
	loginbtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	signupbtn.setWidgetBackgroundColor((JkGfxColor.instance("#008CBA")));
	signupbtn.setWidgetTextColor((JkGfxColor.white()));
	signupbtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.vbox.addWidget(loginbtn);
	this.vbox.addWidget(signupbtn);
};

AppLoginPage.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.instance("#229977")));
	this.addWidget(widget);
	var widget2 = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	var widget3 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetMarginLeft(400);
	widget3.setWidgetMarginRight(400);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("700um")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget4 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("Login");
	widget4.setWidgetTextColor((JkGfxColor.black()));
	widget4.setWidgetFontSize((this.context.getHeightValue("8mm")));
	widget4.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget4.setWidgetFontBold(true);
	this.vbox.addWidget(widget4);
	this.username = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.username.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.username.setWidgetBackgroundColor((JkGfxColor.white()));
	this.username.setWidgetPlaceholder("Username");
	this.username.setWidgetFontSize((this.context.getHeightValue("5mm")));
	this.username.setWidgetPadding1((this.context.getHeightValue("1500um")));
	this.vbox.addWidget(this.username);
	var widget5 = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget5.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_PASSWORD);
	widget5.setWidgetPlaceholder("Password");
	widget5.setWidgetBackgroundColor((JkGfxColor.white()));
	widget5.setWidgetFontSize((this.context.getHeightValue("5mm")));
	widget5.setWidgetPadding1((this.context.getHeightValue("1500um")));
	this.vbox.addWidget(widget5);
	widget3.addWidget1(this.vbox, 0.3, 0.3, true);
	widget2.addWidget(widget3);
	this.addWidget(widget2);
};

AppLoginPage.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppLoginPage"] === true;
};

let AppMainScreen = function() {
	JkWidgetScreenForWidget.call(this);
	this.navi = null;
};

AppMainScreen.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetScreenForWidget.prototype);
AppMainScreen.prototype.constructor = AppMainScreen;
AppMainScreen.prototype._t = {
	"JkUiScreen" : true,
	"JkUiScreenWithContext" : true,
	"AppMainScreen" : true,
	"JkWidgetScreenForWidget" : true
};
AppMainScreen.prototype._tobj = AppMainScreen;

AppMainScreen.NEW = function() {
	var v = new AppMainScreen;
	return v.CTOR_AppMainScreen();
};

AppMainScreen.prototype.CTOR_AppMainScreen = function() {
	this.navi = null;
	if(JkWidgetScreenForWidget.prototype.CTOR_JkWidgetScreenForWidget.call(this) == null) {
		return null;
	}
	return this;
};

AppMainScreen.prototype.initialize = function() {
	JkWidgetScreenForWidget.prototype.initialize.call(this);
	this.navi = JkWidgetCommonNavigationWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.navi.setWidgetEnableActionBar(false);
	this.setWidget(this.navi);
	AppAPIClient.create(this.context, this.navi);
	this.navi.pushWidget((AppLoginPage.NEW_JkUiGuiApplicationContext(this.context)));
};

AppMainScreen.main = function(args) {
	var context = JkUiGuiApplicationContextForHTML.NEW();
	var resources = [];
	context.prepareResources(resources, (function() {
		var main = AppMainScreen.NEW();
		if(JkUiScreenWithContext.IS_INSTANCE && JkUiScreenWithContext.IS_INSTANCE(main)) {
			main.setContext(context);
		}
		main.initialize();
	}.bind(this)));
	return 0;
};

AppMainScreen.main();

AppMainScreen.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppMainScreen"] === true;
};

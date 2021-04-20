let AppUserDashboard = function() {
	JkWidgetVerticalBoxWidget.call(this);
	this.btnHome = null;
	this.btnSchedule = null;
	this.btnAboutUs = null;
	this.btnLogout = null;
	this.container = null;
	this.vbox = null;
	this.grid = null;
};

AppUserDashboard.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetVerticalBoxWidget.prototype);
AppUserDashboard.prototype.constructor = AppUserDashboard;
AppUserDashboard.prototype._t = {
	"AppUserDashboard" : true,
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidget" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetVerticalBoxWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppUserDashboard.prototype._tobj = AppUserDashboard;

AppUserDashboard.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppUserDashboard;
	return v.CTOR_AppUserDashboard_JkUiGuiApplicationContext(context);
};

AppUserDashboard.prototype.CTOR_AppUserDashboard_JkUiGuiApplicationContext = function(context) {
	this.grid = null;
	this.vbox = null;
	this.container = null;
	this.btnLogout = null;
	this.btnAboutUs = null;
	this.btnSchedule = null;
	this.btnHome = null;
	if(JkWidgetVerticalBoxWidget.prototype.CTOR_JkWidgetVerticalBoxWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppUserDashboard.prototype.onHomeClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppUserDashboard.NEW_JkUiGuiApplicationContext(this.context)));
};

AppUserDashboard.prototype.onADDClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppUserProfile.NEW_JkUiGuiApplicationContext(this.context)));
};

AppUserDashboard.prototype.onrecordClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppRecords.NEW_JkUiGuiApplicationContext(this.context)));
};

AppUserDashboard.prototype.onLogoutClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppLoginPage.NEW_JkUiGuiApplicationContext(this.context)));
};

AppUserDashboard.prototype.createWidget = function() {
	JkWidgetVerticalBoxWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.instance("#5d89e8")));
	this.addWidget(widget);
	this.setWidgetSpacing((this.context.getHeightValue("2000um")));
	this.setWidgetMargin((this.context.getHeightValue("5mm")));
	var widget2 = JkWidgetHorizontalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget2.setWidgetSpacing((this.context.getHeightValue("100um")));
	this.btnHome = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnHome.setWidgetText("HOME");
	this.btnHome.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnHome.setWidgetBackgroundColor((JkGfxColor.instance("#264651")));
	this.btnHome.setWidgetClickHandler((function() {
		this.onHomeClicked();
	}.bind(this)));
	widget2.addWidget1(this.btnHome, 1.0);
	this.btnSchedule = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnSchedule.setWidgetText("Profile");
	this.btnSchedule.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnSchedule.setWidgetBackgroundColor((JkGfxColor.instance("#264651")));
	this.btnSchedule.setWidgetClickHandler((function() {
		this.onADDClicked();
	}.bind(this)));
	widget2.addWidget1(this.btnSchedule, 1.0);
	this.btnAboutUs = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnAboutUs.setWidgetText("SubjectHandling");
	this.btnAboutUs.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnAboutUs.setWidgetBackgroundColor((JkGfxColor.instance("#264651")));
	this.btnAboutUs.setWidgetClickHandler((function() {
		this.onrecordClicked();
	}.bind(this)));
	widget2.addWidget1(this.btnAboutUs, 1.0);
	this.btnLogout = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnLogout.setWidgetText("LOGOUT");
	this.btnLogout.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnLogout.setWidgetBackgroundColor((JkGfxColor.instance("#264651")));
	this.btnLogout.setWidgetClickHandler((function() {
		var popup = JkWidgetCommonPopupDialogManager.NEW_JkUiGuiApplicationContextJkWidgetWidget(this.context, this);
		popup.showConfirmDialog("Confirmation", "Leave this Page?", (function() {
			this.onLogoutClicked();
		}.bind(this)), (function() {
			;
		}.bind(this)));
	}.bind(this)));
	widget2.addWidget1(this.btnLogout, 1.0);
	this.addWidget(widget2);
	var widget3 = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetScrollBarDisabled(false);
	this.container = JkWidgetLayerWithBackgroundColorWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.container.setWidgetColor((JkGfxColor.instance("#5d89e8")));
	var widget4 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5mm")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget5 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget5.setWidgetText("SCHEDULE");
	widget5.setWidgetTextColor((JkGfxColor.black()));
	widget5.setWidgetFontSize((this.context.getHeightValue("8mm")));
	widget5.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget5.setWidgetFontBold(true);
	this.vbox.addWidget(widget5);
	widget4.addWidget1(this.vbox, 0.5, 0.5, false);
	this.container.addWidget(widget4);
	this.grid = JkWidgetDatagridDataGridWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.grid.setWidgetCellPadding(1);
	this.container.addWidget(this.grid);
	widget3.addWidget(this.container);
	this.addWidget(widget3);
};

AppUserDashboard.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppUserDashboard"] === true;
};

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
	AppAPIClient.instance.setApiUrl("http://ec2-54-179-146-170.ap-southeast-1.compute.amazonaws.com:30128");
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

let AppLoginPage = function() {
	JkWidgetLayerWidget.call(this);
	this.vbox = null;
	this.username = null;
	this.password = null;
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
	this.password = null;
	this.username = null;
	this.vbox = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppLoginPage.prototype.initializeWidget = function() {
	JkWidgetLayerWidget.prototype.initializeWidget.call(this);
	var loginbtn = JkWidgetCommonButtonWidget.forText(this.context, "Log In", (function() {
		AppAPIClient.getInstance().getUser((function(response1) {
			var data = response1.getDynamicMap("data");
			if(!(data != null)) {
				return;
			}
			var records = data.getDynamicVector("records");
			var Username = "";
			var Password = "";
			var array = records.toVector();
			if(array != null) {
				var n = 0;
				var m = array.length;
				for(n = 0 ; n < m ; n++) {
					var record = (function(o) {
						if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
							return o;
						}
						return null;
					}.bind(this))(array[n]);
					if(record != null) {
						if(this.username.getWidgetText() == record.getString("username", null) && this.password.getWidgetText() == record.getString("password", null)) {
							Username = record.getString("username", null);
							Password = record.getString("password", null);
							if(this.username != "User" && this.password != "user") {
								this.context.showMessageDialog("Notice", "Welcome to Faculty Profilling Web Page!", null);
								JkWidgetCommonNavigationWidget.switchToContainer(this, (AppUserDashboard.NEW_JkUiGuiApplicationContext(this.context)));
							}
						}
					}
				}
			}
			if(Username == "" && Password == "") {
				this.context.showMessageDialog("Notice", "Try Again!", null);
			}
		}.bind(this)), null);
	}.bind(this)));
	loginbtn.setWidgetFontSize((this.context.getHeightValue("2mm")));
	loginbtn.setWidgetBackgroundColor((JkGfxColor.instance("#949796")));
	this.vbox.addWidget(loginbtn);
};

AppLoginPage.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.instance("#5d89e8")));
	this.addWidget(widget);
	var widget2 = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	var widget3 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetMarginLeft(400);
	widget3.setWidgetMarginRight(400);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5000um")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget4 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("LOGIN FORM");
	widget4.setWidgetTextColor((JkGfxColor.black()));
	widget4.setWidgetFontSize((this.context.getHeightValue("7mm")));
	widget4.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget4.setWidgetFontBold(true);
	this.vbox.addWidget(widget4);
	this.username = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.username.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.username.setWidgetPlaceholder("Username");
	this.username.setWidgetTextColor((JkGfxColor.black()));
	this.username.setWidgetBackgroundColor((JkGfxColor.white()));
	this.username.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.username.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.username);
	this.password = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.password.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_PASSWORD);
	this.password.setWidgetPlaceholder("Password");
	this.password.setWidgetTextColor((JkGfxColor.black()));
	this.password.setWidgetBackgroundColor((JkGfxColor.white()));
	this.password.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.password.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.password);
	widget3.addWidget1(this.vbox, 0.5, 0.5, true);
	widget2.addWidget(widget3);
	this.addWidget(widget2);
};

AppLoginPage.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppLoginPage"] === true;
};

let AppHomepage = function() {
	JkWidgetVerticalBoxWidget.call(this);
	this.btnHome = null;
	this.btnSchedule = null;
	this.btnAboutUs = null;
	this.btnLogin = null;
	this.container = null;
	this.vbox = null;
	this.grid = null;
};

AppHomepage.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetVerticalBoxWidget.prototype);
AppHomepage.prototype.constructor = AppHomepage;
AppHomepage.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetVerticalBoxWidget" : true,
	"JkWidgetWidget" : true,
	"AppHomepage" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppHomepage.prototype._tobj = AppHomepage;

AppHomepage.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppHomepage;
	return v.CTOR_AppHomepage_JkUiGuiApplicationContext(context);
};

AppHomepage.prototype.CTOR_AppHomepage_JkUiGuiApplicationContext = function(context) {
	this.grid = null;
	this.vbox = null;
	this.container = null;
	this.btnLogin = null;
	this.btnAboutUs = null;
	this.btnSchedule = null;
	this.btnHome = null;
	if(JkWidgetVerticalBoxWidget.prototype.CTOR_JkWidgetVerticalBoxWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppHomepage.prototype.onHomeClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppAdminPage.NEW_JkUiGuiApplicationContext(this.context)));
};

AppHomepage.prototype.onADDClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppAddinstructor.NEW_JkUiGuiApplicationContext(this.context)));
};

AppHomepage.prototype.onrecordClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppRecords.NEW_JkUiGuiApplicationContext(this.context)));
};

AppHomepage.prototype.onlogoutClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppLoginPage.NEW_JkUiGuiApplicationContext(this.context)));
};

AppHomepage.prototype.createWidget = function() {
	JkWidgetVerticalBoxWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	this.setWidgetSpacing((this.context.getHeightValue("2000um")));
	this.setWidgetMargin((this.context.getHeightValue("5mm")));
	var widget = JkWidgetHorizontalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetSpacing((this.context.getHeightValue("100um")));
	this.btnHome = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnHome.setWidgetText("HOME");
	this.btnHome.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnHome.setWidgetBackgroundColor((JkGfxColor.instance("#D91E18")));
	this.btnHome.setWidgetClickHandler((function() {
		this.onHomeClicked();
	}.bind(this)));
	widget.addWidget1(this.btnHome, 1.0);
	this.btnSchedule = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnSchedule.setWidgetText("ADD INSTRUCTOR");
	this.btnSchedule.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnSchedule.setWidgetBackgroundColor((JkGfxColor.instance("#D91E18")));
	this.btnSchedule.setWidgetClickHandler((function() {
		this.onADDClicked();
	}.bind(this)));
	widget.addWidget1(this.btnSchedule, 1.0);
	this.btnAboutUs = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnAboutUs.setWidgetText("RECORDS");
	this.btnAboutUs.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnAboutUs.setWidgetBackgroundColor((JkGfxColor.instance("#D91E18")));
	this.btnAboutUs.setWidgetClickHandler((function() {
		this.onrecordClicked();
	}.bind(this)));
	widget.addWidget1(this.btnAboutUs, 1.0);
	this.btnLogin = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnLogin.setWidgetText("LOGOUT");
	this.btnLogin.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnLogin.setWidgetBackgroundColor((JkGfxColor.instance("#fc3730")));
	this.btnLogin.setWidgetClickHandler((function() {
		this.onlogoutClicked();
	}.bind(this)));
	widget.addWidget1(this.btnLogin, 1.0);
	this.addWidget(widget);
	var widget2 = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget2.setWidgetScrollBarDisabled(false);
	this.container = JkWidgetLayerWithBackgroundColorWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.container.setWidgetColor((JkGfxColor.instance("#5d89e8")));
	var widget3 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5mm")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget4 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("SCHEDULE");
	widget4.setWidgetTextColor((JkGfxColor.black()));
	widget4.setWidgetFontSize((this.context.getHeightValue("8mm")));
	widget4.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget4.setWidgetFontBold(true);
	this.vbox.addWidget(widget4);
	widget3.addWidget1(this.vbox, 0.5, 0.5, false);
	this.container.addWidget(widget3);
	this.grid = JkWidgetDatagridDataGridWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.grid.setWidgetCellPadding(1);
	this.container.addWidget(this.grid);
	widget2.addWidget(this.container);
	this.addWidget(widget2);
};

AppHomepage.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppHomepage"] === true;
};

let AppAdminPage = function() {
	JkWidgetVerticalBoxWidget.call(this);
	this.btnHome = null;
	this.btnSchedule = null;
	this.btnAboutUs = null;
	this.btnLogout = null;
	this.container = null;
	this.vbox = null;
	this.grid = null;
};

AppAdminPage.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetVerticalBoxWidget.prototype);
AppAdminPage.prototype.constructor = AppAdminPage;
AppAdminPage.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetVerticalBoxWidget" : true,
	"AppAdminPage" : true,
	"JkWidgetWidget" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppAdminPage.prototype._tobj = AppAdminPage;

AppAdminPage.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppAdminPage;
	return v.CTOR_AppAdminPage_JkUiGuiApplicationContext(context);
};

AppAdminPage.prototype.CTOR_AppAdminPage_JkUiGuiApplicationContext = function(context) {
	this.grid = null;
	this.vbox = null;
	this.container = null;
	this.btnLogout = null;
	this.btnAboutUs = null;
	this.btnSchedule = null;
	this.btnHome = null;
	if(JkWidgetVerticalBoxWidget.prototype.CTOR_JkWidgetVerticalBoxWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppAdminPage.prototype.initializeWidget = function() {
	JkWidgetVerticalBoxWidget.prototype.initializeWidget.call(this);
	this.grid.addColumn("User Id", "id", 0.2, 0);
	this.grid.addColumn("Name", "firstname", 1.0, 0);
	this.grid.addColumn("lastName", "lastname", 1.0, 0);
	this.grid.addColumn("Username", "username", 1.0, 0);
	this.grid.addColumn("Password", "password", 1.0, 0);
	this.grid.addColumn("Phonenumber", "phonenumber", 1.0, 0);
	this.grid.addColumn("Gender", "gender", 1.0, 0);
	this.grid.addColumn("Position", "position", 1.0, 0);
	this.grid.addColumn("Subject Handle", "subject", 1.0, 0);
	this.grid.addWidgetHeaderRow();
	AppAPIClient.getInstance().getUser((function(response1) {
		var data = response1.getDynamicMap("data");
		if(!(data != null)) {
			return;
		}
		var records = data.getDynamicVector("records");
		if(!(records != null) || records.getSize() < 1) {
			this.grid.addRow(["NO data In Database"], null, null);
			this.context.showMessageDialog("Notice", "NO DATA INSERT!", null);
		}
		else {
			var array = records.toVector();
			if(array != null) {
				var n = 0;
				var m = array.length;
				for(n = 0 ; n < m ; n++) {
					var record = (function(o) {
						if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
							return o;
						}
						return null;
					}.bind(this))(array[n]);
					if(record != null) {
						this.grid.addRow([record.getString("id", null), record.getString("firstname", null), record.getString("lastname", null), record.getString("username", null), record.getString("password", null), record.getString("phonenumber", null), record.getString("gender", null), record.getString("position", null), record.getString("subject", null)], null, null);
					}
				}
			}
		}
	}.bind(this)), null);
};

AppAdminPage.prototype.onHomeClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppAdminPage.NEW_JkUiGuiApplicationContext(this.context)));
};

AppAdminPage.prototype.onADDClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppAddinstructor.NEW_JkUiGuiApplicationContext(this.context)));
};

AppAdminPage.prototype.onrecordClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppRecords.NEW_JkUiGuiApplicationContext(this.context)));
};

AppAdminPage.prototype.onLogoutClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppLoginPage.NEW_JkUiGuiApplicationContext(this.context)));
};

AppAdminPage.prototype.onUpdateClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppUpdateinfo.NEW_JkUiGuiApplicationContext(this.context)));
};

AppAdminPage.prototype.createWidget = function() {
	JkWidgetVerticalBoxWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.instance("#5d89e8")));
	this.addWidget(widget);
	this.setWidgetSpacing((this.context.getHeightValue("2000um")));
	this.setWidgetMargin((this.context.getHeightValue("5mm")));
	var widget2 = JkWidgetHorizontalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget2.setWidgetSpacing((this.context.getHeightValue("100um")));
	this.btnHome = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnHome.setWidgetText("HOME");
	this.btnHome.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnHome.setWidgetBackgroundColor((JkGfxColor.instance("#264651")));
	this.btnHome.setWidgetClickHandler((function() {
		this.onHomeClicked();
	}.bind(this)));
	widget2.addWidget1(this.btnHome, 1.0);
	this.btnSchedule = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnSchedule.setWidgetText("ADD INSTRUCTOR");
	this.btnSchedule.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnSchedule.setWidgetBackgroundColor((JkGfxColor.instance("#264651")));
	this.btnSchedule.setWidgetClickHandler((function() {
		this.onADDClicked();
	}.bind(this)));
	widget2.addWidget1(this.btnSchedule, 1.0);
	this.btnAboutUs = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnAboutUs.setWidgetText("RECORDS");
	this.btnAboutUs.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnAboutUs.setWidgetBackgroundColor((JkGfxColor.instance("#264651")));
	this.btnAboutUs.setWidgetClickHandler((function() {
		this.onrecordClicked();
	}.bind(this)));
	widget2.addWidget1(this.btnAboutUs, 1.0);
	this.btnLogout = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnLogout.setWidgetText("LOGOUT");
	this.btnLogout.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnLogout.setWidgetBackgroundColor((JkGfxColor.instance("#264651")));
	this.btnLogout.setWidgetClickHandler((function() {
		var popup = JkWidgetCommonPopupDialogManager.NEW_JkUiGuiApplicationContextJkWidgetWidget(this.context, this);
		popup.showConfirmDialog("Confirmation", "Leave this Page?", (function() {
			this.onLogoutClicked();
		}.bind(this)), (function() {
			;
		}.bind(this)));
	}.bind(this)));
	widget2.addWidget1(this.btnLogout, 1.0);
	this.addWidget(widget2);
	var widget3 = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetScrollBarDisabled(false);
	this.container = JkWidgetLayerWithBackgroundColorWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.container.setWidgetColor((JkGfxColor.instance("#264651")));
	var widget4 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5mm")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget5 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget5.setWidgetText("SCHEDULE");
	widget5.setWidgetTextColor((JkGfxColor.black()));
	widget5.setWidgetFontSize((this.context.getHeightValue("8mm")));
	widget5.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget5.setWidgetFontBold(true);
	this.vbox.addWidget(widget5);
	widget4.addWidget1(this.vbox, 0.5, 0.5, false);
	this.container.addWidget(widget4);
	this.grid = JkWidgetDatagridDataGridWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.grid.setWidgetCellPadding(1);
	this.container.addWidget(this.grid);
	widget3.addWidget(this.container);
	this.addWidget(widget3);
};

AppAdminPage.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppAdminPage"] === true;
};

let AppAddinstructorUser = function() {
	JkJsonJSONObjectAdapter.call(this);
	this._firstname = null;
	this._lastname = null;
	this._username = null;
	this._password = null;
	this._phonenumber = null;
	this._gender = null;
	this._position = null;
	this._subject = null;
};

AppAddinstructorUser.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkJsonJSONObjectAdapter.prototype);
AppAddinstructorUser.prototype.constructor = AppAddinstructorUser;
AppAddinstructorUser.prototype._t = {
	"JkLangStringObject" : true,
	"JkJsonJSONObjectAdapter" : true,
	"JkJsonJSONObject" : true,
	"AppAddinstructorUser" : true
};
AppAddinstructorUser.prototype._tobj = AppAddinstructorUser;

AppAddinstructorUser.NEW = function() {
	var v = new AppAddinstructorUser;
	return v.CTOR_AppAddinstructorUser();
};

AppAddinstructorUser.prototype.CTOR_AppAddinstructorUser = function() {
	this._subject = null;
	this._position = null;
	this._gender = null;
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

AppAddinstructorUser.prototype.setFirstname = function(value) {
	this._firstname = value;
	return this;
};

AppAddinstructorUser.prototype.getFirstname = function() {
	return this._firstname;
};

AppAddinstructorUser.prototype.setLastname = function(value) {
	this._lastname = value;
	return this;
};

AppAddinstructorUser.prototype.getLastname = function() {
	return this._lastname;
};

AppAddinstructorUser.prototype.setUsername = function(value) {
	this._username = value;
	return this;
};

AppAddinstructorUser.prototype.getUsername = function() {
	return this._username;
};

AppAddinstructorUser.prototype.setPassword = function(value) {
	this._password = value;
	return this;
};

AppAddinstructorUser.prototype.getPassword = function() {
	return this._password;
};

AppAddinstructorUser.prototype.setPhonenumber = function(value) {
	this._phonenumber = value;
	return this;
};

AppAddinstructorUser.prototype.getPhonenumber = function() {
	return this._phonenumber;
};

AppAddinstructorUser.prototype.setGender = function(value) {
	this._gender = value;
	return this;
};

AppAddinstructorUser.prototype.getGender = function() {
	return this._gender;
};

AppAddinstructorUser.prototype.setPosition = function(value) {
	this._position = value;
	return this;
};

AppAddinstructorUser.prototype.getPosition = function() {
	return this._position;
};

AppAddinstructorUser.prototype.setSubject = function(value) {
	this._subject = value;
	return this;
};

AppAddinstructorUser.prototype.getSubject = function() {
	return this._subject;
};

AppAddinstructorUser.prototype.toJsonObject = function() {
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
	if(this._gender != null) {
		v.setObject("gender", (this.asJsonValue(this._gender)));
	}
	if(this._position != null) {
		v.setObject("position", (this.asJsonValue(this._position)));
	}
	if(this._subject != null) {
		v.setObject("subject", (this.asJsonValue(this._subject)));
	}
	return v;
};

AppAddinstructorUser.prototype.fromJsonObject = function(o1) {
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
	this._gender = v.getString("gender", null);
	this._position = v.getString("position", null);
	this._subject = v.getString("subject", null);
	return true;
};

AppAddinstructorUser.prototype.fromJsonString = function(o) {
	return this.fromJsonObject((JkJsonJSONParser.parse(o)));
};

AppAddinstructorUser.prototype.toJsonString = function() {
	return JkJsonJSONEncoder.encode((this.toJsonObject()), true, false);
};

AppAddinstructorUser.prototype.toString = function() {
	return this.toJsonString();
};

AppAddinstructorUser.forJsonString = function(o) {
	var v = AppAddinstructorUser.NEW();
	if(!v.fromJsonString(o)) {
		return null;
	}
	return v;
};

AppAddinstructorUser.forJsonObject = function(o) {
	var v = AppAddinstructorUser.NEW();
	if(!v.fromJsonObject(o)) {
		return null;
	}
	return v;
};

AppAddinstructorUser.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppAddinstructorUser"] === true;
};

let AppAddinstructor = function() {
	JkWidgetLayerWidget.call(this);
	this.vbox = null;
	this.firstname = null;
	this.lastname = null;
	this.username = null;
	this.password = null;
	this.phonenumber = null;
	this.gender = null;
	this.position = null;
	this.subject = null;
};

AppAddinstructor.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetLayerWidget.prototype);
AppAddinstructor.prototype.constructor = AppAddinstructor;
AppAddinstructor.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetWidget" : true,
	"AppAddinstructor" : true,
	"JkWidgetLayerWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppAddinstructor.prototype._tobj = AppAddinstructor;

AppAddinstructor.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppAddinstructor;
	return v.CTOR_AppAddinstructor_JkUiGuiApplicationContext(context);
};

AppAddinstructor.prototype.CTOR_AppAddinstructor_JkUiGuiApplicationContext = function(context) {
	this.subject = null;
	this.position = null;
	this.gender = null;
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

AppAddinstructor.prototype.initializeWidget = function() {
	JkWidgetLayerWidget.prototype.initializeWidget.call(this);
	var confirmbtn = JkWidgetCommonButtonWidget.forText(this.context, "Submit", (function() {
		var user = AppAddinstructorUser.NEW();
		user.setFirstname((this.firstname.getWidgetText()));
		user.setLastname((this.lastname.getWidgetText()));
		user.setUsername((this.username.getWidgetText()));
		user.setPassword((this.password.getWidgetText()));
		user.setPhonenumber((this.phonenumber.getWidgetText()));
		user.setGender((this.gender.getWidgetText()));
		user.setPosition((this.position.getWidgetText()));
		user.setSubject((this.subject.getWidgetText()));
		AppAPIClient.getInstance().addUser((user.toDynamicMap()), (function(res1) {
			this.context.showMessageDialog("Notice", "Your account successfully added", null);
			this.firstname.setWidgetText("");
			this.lastname.setWidgetText("");
			this.username.setWidgetValue("");
			this.password.setWidgetText("");
			this.phonenumber.setWidgetText("");
			this.gender.setWidgetText("");
			this.position.setWidgetText("");
			this.subject.setWidgetText("");
		}.bind(this)), (function(error1) {
			this.context.showMessageDialog("Notice", "HINDI KA MA ADD", null);
		}.bind(this)));
	}.bind(this)));
	var returnbtn = JkWidgetCommonButtonWidget.forText(this.context, "Return", (function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppAdminPage.NEW_JkUiGuiApplicationContext(this.context)));
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

AppAddinstructor.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.instance("#008CBA")));
	this.addWidget(widget);
	var widget2 = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	var widget3 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetMarginLeft(400);
	widget3.setWidgetMarginRight(400);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5000um")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget4 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("Registation");
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
	this.gender = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.gender.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.gender.setWidgetPlaceholder("gender");
	this.gender.setWidgetBackgroundColor((JkGfxColor.white()));
	this.gender.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.gender.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.gender);
	this.position = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.position.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.position.setWidgetPlaceholder("Position");
	this.position.setWidgetBackgroundColor((JkGfxColor.white()));
	this.position.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.position.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.position);
	this.subject = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.subject.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.subject.setWidgetPlaceholder("Subject Handling");
	this.subject.setWidgetBackgroundColor((JkGfxColor.white()));
	this.subject.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.subject.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.subject);
	widget3.addWidget1(this.vbox, 0.5, 0.5, true);
	widget2.addWidget(widget3);
	this.addWidget(widget2);
};

AppAddinstructor.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppAddinstructor"] === true;
};

let AppDeleteinfo = function() {
	JkWidgetVerticalBoxWidget.call(this);
	this.btnHome = null;
	this.btnSchedule = null;
	this.btnAboutUs = null;
	this.btnLogout = null;
	this.container = null;
	this.image = null;
	this.vbox = null;
	this.id = null;
};

AppDeleteinfo.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetVerticalBoxWidget.prototype);
AppDeleteinfo.prototype.constructor = AppDeleteinfo;
AppDeleteinfo.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetVerticalBoxWidget" : true,
	"JkWidgetWidget" : true,
	"JkWidgetWidgetWithLayout" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetContainerWidget" : true,
	"AppDeleteinfo" : true
};
AppDeleteinfo.prototype._tobj = AppDeleteinfo;

AppDeleteinfo.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppDeleteinfo;
	return v.CTOR_AppDeleteinfo_JkUiGuiApplicationContext(context);
};

AppDeleteinfo.prototype.CTOR_AppDeleteinfo_JkUiGuiApplicationContext = function(context) {
	this.id = null;
	this.vbox = null;
	this.image = null;
	this.container = null;
	this.btnLogout = null;
	this.btnAboutUs = null;
	this.btnSchedule = null;
	this.btnHome = null;
	if(JkWidgetVerticalBoxWidget.prototype.CTOR_JkWidgetVerticalBoxWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppDeleteinfo.prototype.initializeWidget = function() {
	JkWidgetVerticalBoxWidget.prototype.initializeWidget.call(this);
	var deletebtn = JkWidgetCommonButtonWidget.forText(this.context, "Submit", (function() {
		AppAPIClient.getInstance().getUser((function(response1) {
			var data = response1.getDynamicMap("data");
			if(!(data != null)) {
				return;
			}
			var records = data.getDynamicVector("records");
			var array = records.toVector();
			if(array != null) {
				var n = 0;
				var m = array.length;
				for(n = 0 ; n < m ; n++) {
					var record = (function(o) {
						if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
							return o;
						}
						return null;
					}.bind(this))(array[n]);
					if(record != null) {
						if(record.getString("id", null) == this.id.getWidgetText()) {
							var popup = JkWidgetCommonPopupDialogManager.NEW_JkUiGuiApplicationContextJkWidgetWidget(this.context, this);
							popup.showConfirmDialog("Confirmation", "Are you sure to delete Info?", (function() {
								AppAPIClient.getInstance().deleteUser((this.id.getWidgetText()), (function(res1) {
									this.context.showMessageDialog("Notice", "Successfully deleted!", null);
								}.bind(this)), (function(err1) {
									this.context.showMessageDialog("Notice", "Failed! to Delete", null);
								}.bind(this)));
							}.bind(this)), (function() {
								;
							}.bind(this)));
						}
					}
				}
			}
		}.bind(this)), null);
	}.bind(this)));
	deletebtn.setWidgetFontSize((this.context.getHeightValue("2mm")));
	deletebtn.setWidgetBackgroundColor((JkGfxColor.instance("#5d89e8")));
	this.vbox.addWidget(deletebtn);
};

AppDeleteinfo.prototype.onHomeClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppAdminPage.NEW_JkUiGuiApplicationContext(this.context)));
};

AppDeleteinfo.prototype.onADDClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppAddinstructor.NEW_JkUiGuiApplicationContext(this.context)));
};

AppDeleteinfo.prototype.onrecordClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppRecords.NEW_JkUiGuiApplicationContext(this.context)));
};

AppDeleteinfo.prototype.onLogoutClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppLoginPage.NEW_JkUiGuiApplicationContext(this.context)));
};

AppDeleteinfo.prototype.onUpdateClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppUpdateinfo.NEW_JkUiGuiApplicationContext(this.context)));
};

AppDeleteinfo.prototype.createWidget = function() {
	JkWidgetVerticalBoxWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.instance("#5d89e8")));
	this.addWidget(widget);
	this.setWidgetSpacing((this.context.getHeightValue("2000um")));
	this.setWidgetMargin((this.context.getHeightValue("5mm")));
	var widget2 = JkWidgetHorizontalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget2.setWidgetSpacing((this.context.getHeightValue("100um")));
	this.btnHome = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnHome.setWidgetText("HOME");
	this.btnHome.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnHome.setWidgetBackgroundColor((JkGfxColor.instance("#264651")));
	this.btnHome.setWidgetClickHandler((function() {
		this.onHomeClicked();
	}.bind(this)));
	widget2.addWidget1(this.btnHome, 1.0);
	this.btnSchedule = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnSchedule.setWidgetText("ADD INSTRUCTOR");
	this.btnSchedule.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnSchedule.setWidgetBackgroundColor((JkGfxColor.instance("#264651")));
	this.btnSchedule.setWidgetClickHandler((function() {
		this.onADDClicked();
	}.bind(this)));
	widget2.addWidget1(this.btnSchedule, 1.0);
	this.btnAboutUs = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnAboutUs.setWidgetText("RECORDS");
	this.btnAboutUs.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnAboutUs.setWidgetBackgroundColor((JkGfxColor.instance("#264651")));
	this.btnAboutUs.setWidgetClickHandler((function() {
		this.onrecordClicked();
	}.bind(this)));
	widget2.addWidget1(this.btnAboutUs, 1.0);
	this.btnLogout = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnLogout.setWidgetText("LOGOUT");
	this.btnLogout.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnLogout.setWidgetBackgroundColor((JkGfxColor.instance("#264651")));
	this.btnLogout.setWidgetClickHandler((function() {
		var popup = JkWidgetCommonPopupDialogManager.NEW_JkUiGuiApplicationContextJkWidgetWidget(this.context, this);
		popup.showConfirmDialog("Confirmation", "Leave this Page?", (function() {
			this.onLogoutClicked();
		}.bind(this)), (function() {
			;
		}.bind(this)));
	}.bind(this)));
	widget2.addWidget1(this.btnLogout, 1.0);
	this.addWidget(widget2);
	var widget3 = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetScrollBarDisabled(true);
	this.container = JkWidgetLayerWithBackgroundColorWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.image = JkWidgetImageWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.image.setWidgetImageResource("delete");
	this.image.setWidgetImageWidth((this.context.getHeightValue("260mm")));
	this.image.setWidgetImageHeight((this.context.getHeightValue("100mm")));
	this.container.addWidget(this.image);
	var widget4 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5mm")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	this.id = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.id.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_INTEGER);
	this.id.setWidgetPlaceholder("ID");
	this.id.setWidgetBackgroundColor((JkGfxColor.white()));
	this.id.setWidgetFontSize((this.context.getHeightValue("2mm")));
	this.id.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.id);
	widget4.addWidget1(this.vbox, 0.5, 0.5, false);
	this.container.addWidget(widget4);
	widget3.addWidget(this.container);
	this.addWidget(widget3);
};

AppDeleteinfo.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppDeleteinfo"] === true;
};

let AppUpdateinfoUser = function() {
	JkJsonJSONObjectAdapter.call(this);
	this._firstname = null;
	this._lastname = null;
	this._username = null;
	this._password = null;
	this._phonenumber = null;
	this._gender = null;
	this._position = null;
	this._subject = null;
};

AppUpdateinfoUser.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkJsonJSONObjectAdapter.prototype);
AppUpdateinfoUser.prototype.constructor = AppUpdateinfoUser;
AppUpdateinfoUser.prototype._t = {
	"AppUpdateinfoUser" : true,
	"JkJsonJSONObjectAdapter" : true,
	"JkJsonJSONObject" : true,
	"JkLangStringObject" : true
};
AppUpdateinfoUser.prototype._tobj = AppUpdateinfoUser;

AppUpdateinfoUser.NEW = function() {
	var v = new AppUpdateinfoUser;
	return v.CTOR_AppUpdateinfoUser();
};

AppUpdateinfoUser.prototype.CTOR_AppUpdateinfoUser = function() {
	this._subject = null;
	this._position = null;
	this._gender = null;
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

AppUpdateinfoUser.prototype.setFirstname = function(value) {
	this._firstname = value;
	return this;
};

AppUpdateinfoUser.prototype.getFirstname = function() {
	return this._firstname;
};

AppUpdateinfoUser.prototype.setLastname = function(value) {
	this._lastname = value;
	return this;
};

AppUpdateinfoUser.prototype.getLastname = function() {
	return this._lastname;
};

AppUpdateinfoUser.prototype.setUsername = function(value) {
	this._username = value;
	return this;
};

AppUpdateinfoUser.prototype.getUsername = function() {
	return this._username;
};

AppUpdateinfoUser.prototype.setPassword = function(value) {
	this._password = value;
	return this;
};

AppUpdateinfoUser.prototype.getPassword = function() {
	return this._password;
};

AppUpdateinfoUser.prototype.setPhonenumber = function(value) {
	this._phonenumber = value;
	return this;
};

AppUpdateinfoUser.prototype.getPhonenumber = function() {
	return this._phonenumber;
};

AppUpdateinfoUser.prototype.setGender = function(value) {
	this._gender = value;
	return this;
};

AppUpdateinfoUser.prototype.getGender = function() {
	return this._gender;
};

AppUpdateinfoUser.prototype.setPosition = function(value) {
	this._position = value;
	return this;
};

AppUpdateinfoUser.prototype.getPosition = function() {
	return this._position;
};

AppUpdateinfoUser.prototype.setSubject = function(value) {
	this._subject = value;
	return this;
};

AppUpdateinfoUser.prototype.getSubject = function() {
	return this._subject;
};

AppUpdateinfoUser.prototype.toJsonObject = function() {
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
	if(this._gender != null) {
		v.setObject("gender", (this.asJsonValue(this._gender)));
	}
	if(this._position != null) {
		v.setObject("position", (this.asJsonValue(this._position)));
	}
	if(this._subject != null) {
		v.setObject("subject", (this.asJsonValue(this._subject)));
	}
	return v;
};

AppUpdateinfoUser.prototype.fromJsonObject = function(o1) {
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
	this._gender = v.getString("gender", null);
	this._position = v.getString("position", null);
	this._subject = v.getString("subject", null);
	return true;
};

AppUpdateinfoUser.prototype.fromJsonString = function(o) {
	return this.fromJsonObject((JkJsonJSONParser.parse(o)));
};

AppUpdateinfoUser.prototype.toJsonString = function() {
	return JkJsonJSONEncoder.encode((this.toJsonObject()), true, false);
};

AppUpdateinfoUser.prototype.toString = function() {
	return this.toJsonString();
};

AppUpdateinfoUser.forJsonString = function(o) {
	var v = AppUpdateinfoUser.NEW();
	if(!v.fromJsonString(o)) {
		return null;
	}
	return v;
};

AppUpdateinfoUser.forJsonObject = function(o) {
	var v = AppUpdateinfoUser.NEW();
	if(!v.fromJsonObject(o)) {
		return null;
	}
	return v;
};

AppUpdateinfoUser.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppUpdateinfoUser"] === true;
};

let AppUpdateinfo = function() {
	JkWidgetLayerWidget.call(this);
	this.vbox = null;
	this.id = null;
	this.firstname = null;
	this.lastname = null;
	this.username = null;
	this.password = null;
	this.phonenumber = null;
	this.gender = null;
	this.position = null;
	this.subject = null;
};

AppUpdateinfo.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetLayerWidget.prototype);
AppUpdateinfo.prototype.constructor = AppUpdateinfo;
AppUpdateinfo.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetWidget" : true,
	"AppUpdateinfo" : true,
	"JkWidgetLayerWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppUpdateinfo.prototype._tobj = AppUpdateinfo;

AppUpdateinfo.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppUpdateinfo;
	return v.CTOR_AppUpdateinfo_JkUiGuiApplicationContext(context);
};

AppUpdateinfo.prototype.CTOR_AppUpdateinfo_JkUiGuiApplicationContext = function(context) {
	this.subject = null;
	this.position = null;
	this.gender = null;
	this.phonenumber = null;
	this.password = null;
	this.username = null;
	this.lastname = null;
	this.firstname = null;
	this.id = null;
	this.vbox = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppUpdateinfo.prototype.initializeWidget = function() {
	JkWidgetLayerWidget.prototype.initializeWidget.call(this);
	var searchbtn = JkWidgetCommonButtonWidget.forText(this.context, "Search", (function() {
		AppAPIClient.getInstance().getUser((function(response1) {
			var data = response1.getDynamicMap("data");
			if(!(data != null)) {
				return;
			}
			var records = data.getDynamicVector("records");
			if(!(records != null) || records.getSize() < 1) {
				;
			}
			else {
				var array = records.toVector();
				if(array != null) {
					var n = 0;
					var m = array.length;
					for(n = 0 ; n < m ; n++) {
						var record = (function(o) {
							if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
								return o;
							}
							return null;
						}.bind(this))(array[n]);
						if(record != null) {
							if(this.id.getWidgetText() == record.getInteger("id", 0)) {
								this.firstname.setWidgetText((record.getString("firstname", null)));
								this.lastname.setWidgetText((record.getString("lastname", null)));
								this.username.setWidgetText((record.getString("username", null)));
								this.password.setWidgetText((record.getString("password", null)));
								this.phonenumber.setWidgetText((record.getString("phonenumber", null)));
								this.gender.setWidgetText((record.getString("gender", null)));
								this.position.setWidgetText((record.getString("position", null)));
								this.subject.setWidgetText((record.getString("subject", null)));
							}
						}
					}
				}
			}
		}.bind(this)), null);
	}.bind(this)));
	var updated = JkWidgetCommonButtonWidget.forText(this.context, "Update", (function() {
	}.bind(this)));
	var backbtn = JkWidgetCommonButtonWidget.forText(this.context, "Back", (function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppAdminPage.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	searchbtn.setWidgetBackgroundColor((JkGfxColor.instance("#16F0E3")));
	searchbtn.setWidgetTextColor((JkGfxColor.white()));
	searchbtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.vbox.addWidget(searchbtn);
	updated.setWidgetBackgroundColor((JkGfxColor.instance("#16BFF0")));
	updated.setWidgetTextColor((JkGfxColor.white()));
	updated.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.vbox.addWidget(updated);
	backbtn.setWidgetBackgroundColor((JkGfxColor.instance("#28B463")));
	backbtn.setWidgetTextColor((JkGfxColor.white()));
	backbtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.vbox.addWidget(backbtn);
};

AppUpdateinfo.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.instance("#5d89e8")));
	this.addWidget(widget);
	var widget2 = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	var widget3 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetMarginLeft(400);
	widget3.setWidgetMarginRight(400);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5000um")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget4 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("Update Information");
	widget4.setWidgetTextColor((JkGfxColor.black()));
	widget4.setWidgetFontSize((this.context.getHeightValue("6mm")));
	widget4.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget4.setWidgetFontBold(true);
	this.vbox.addWidget(widget4);
	this.id = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.id.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_INTEGER);
	this.id.setWidgetPlaceholder("Search ID");
	this.id.setWidgetBackgroundColor((JkGfxColor.white()));
	this.id.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.id.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.id);
	this.firstname = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.firstname.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.firstname.setWidgetPlaceholder("FIRST NAME");
	this.firstname.setWidgetBackgroundColor((JkGfxColor.white()));
	this.firstname.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.firstname.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.firstname);
	this.lastname = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.lastname.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.lastname.setWidgetPlaceholder("LAST NAME");
	this.lastname.setWidgetBackgroundColor((JkGfxColor.white()));
	this.lastname.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.lastname.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.lastname);
	this.username = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.username.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.username.setWidgetPlaceholder("username");
	this.username.setWidgetBackgroundColor((JkGfxColor.white()));
	this.username.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.username.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.username);
	this.password = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.password.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.password.setWidgetPlaceholder("password");
	this.password.setWidgetBackgroundColor((JkGfxColor.white()));
	this.password.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.password.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.password);
	this.phonenumber = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.phonenumber.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.phonenumber.setWidgetPlaceholder("phonenumber");
	this.phonenumber.setWidgetBackgroundColor((JkGfxColor.white()));
	this.phonenumber.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.phonenumber.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.phonenumber);
	this.gender = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.gender.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_INTEGER);
	this.gender.setWidgetPlaceholder("gender");
	this.gender.setWidgetBackgroundColor((JkGfxColor.white()));
	this.gender.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.gender.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.gender);
	this.position = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.position.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.position.setWidgetPlaceholder("position");
	this.position.setWidgetBackgroundColor((JkGfxColor.white()));
	this.position.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.position.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.position);
	this.subject = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.subject.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.subject.setWidgetPlaceholder("subject");
	this.subject.setWidgetBackgroundColor((JkGfxColor.white()));
	this.subject.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.subject.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.subject);
	widget3.addWidget1(this.vbox, 0.5, 0.5, true);
	widget2.addWidget(widget3);
	this.addWidget(widget2);
};

AppUpdateinfo.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppUpdateinfo"] === true;
};

let AppUsersubject = function() {
	JkWidgetVerticalBoxWidget.call(this);
	this.btnHome = null;
	this.btnSchedule = null;
	this.btnAboutUs = null;
	this.btnLogout = null;
	this.container = null;
	this.vbox = null;
	this.grid = null;
};

AppUsersubject.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetVerticalBoxWidget.prototype);
AppUsersubject.prototype.constructor = AppUsersubject;
AppUsersubject.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetVerticalBoxWidget" : true,
	"JkWidgetWidget" : true,
	"AppUsersubject" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppUsersubject.prototype._tobj = AppUsersubject;

AppUsersubject.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppUsersubject;
	return v.CTOR_AppUsersubject_JkUiGuiApplicationContext(context);
};

AppUsersubject.prototype.CTOR_AppUsersubject_JkUiGuiApplicationContext = function(context) {
	this.grid = null;
	this.vbox = null;
	this.container = null;
	this.btnLogout = null;
	this.btnAboutUs = null;
	this.btnSchedule = null;
	this.btnHome = null;
	if(JkWidgetVerticalBoxWidget.prototype.CTOR_JkWidgetVerticalBoxWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppUsersubject.prototype.initializeWidget = function() {
	JkWidgetVerticalBoxWidget.prototype.initializeWidget.call(this);
	this.grid.addColumn("User Id", "id", 0.2, 0);
	this.grid.addColumn("Name", "firstname", 1.0, 0);
	this.grid.addColumn("lastName", "lastname", 1.0, 0);
	this.grid.addColumn("Username", "username", 1.0, 0);
	this.grid.addColumn("Password", "password", 1.0, 0);
	this.grid.addColumn("Phonenumber", "phonenumber", 1.0, 0);
	this.grid.addColumn("Gender", "gender", 1.0, 0);
	this.grid.addColumn("Position", "position", 1.0, 0);
	this.grid.addColumn("Subject Handle", "subject", 1.0, 0);
	this.grid.addWidgetHeaderRow();
	AppAPIClient.getInstance().getUser((function(response1) {
		var data = response1.getDynamicMap("data");
		if(!(data != null)) {
			return;
		}
		var records = data.getDynamicVector("records");
		if(!(records != null) || records.getSize() < 1) {
			this.grid.addRow(["NO data Record"], null, null);
		}
		else {
			var array = records.toVector();
			if(array != null) {
				var n = 0;
				var m = array.length;
				for(n = 0 ; n < m ; n++) {
					var record = (function(o) {
						if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
							return o;
						}
						return null;
					}.bind(this))(array[n]);
					if(record != null) {
						this.grid.addRow([record.getString("id", null), record.getString("firstname", null), record.getString("lastname", null), record.getString("username", null), record.getString("password", null), record.getString("phonenumber", null), record.getString("gender", null), record.getString("position", null), record.getString("subject", null)], null, null);
					}
				}
			}
		}
	}.bind(this)), null);
};

AppUsersubject.prototype.onHomeClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppUserDashboard.NEW_JkUiGuiApplicationContext(this.context)));
};

AppUsersubject.prototype.onADDClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppUserProfile.NEW_JkUiGuiApplicationContext(this.context)));
};

AppUsersubject.prototype.onrecordClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppRecords.NEW_JkUiGuiApplicationContext(this.context)));
};

AppUsersubject.prototype.onLogoutClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppLoginPage.NEW_JkUiGuiApplicationContext(this.context)));
};

AppUsersubject.prototype.createWidget = function() {
	JkWidgetVerticalBoxWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.instance("#5d89e8")));
	this.addWidget(widget);
	this.setWidgetSpacing((this.context.getHeightValue("2000um")));
	this.setWidgetMargin((this.context.getHeightValue("5mm")));
	var widget2 = JkWidgetHorizontalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget2.setWidgetSpacing((this.context.getHeightValue("100um")));
	this.btnHome = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnHome.setWidgetText("HOME");
	this.btnHome.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnHome.setWidgetBackgroundColor((JkGfxColor.instance("#264651")));
	this.btnHome.setWidgetClickHandler((function() {
		this.onHomeClicked();
	}.bind(this)));
	widget2.addWidget1(this.btnHome, 1.0);
	this.btnSchedule = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnSchedule.setWidgetText("Profile");
	this.btnSchedule.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnSchedule.setWidgetBackgroundColor((JkGfxColor.instance("#264651")));
	this.btnSchedule.setWidgetClickHandler((function() {
		this.onADDClicked();
	}.bind(this)));
	widget2.addWidget1(this.btnSchedule, 1.0);
	this.btnAboutUs = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnAboutUs.setWidgetText("RECORDS");
	this.btnAboutUs.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnAboutUs.setWidgetBackgroundColor((JkGfxColor.instance("#264651")));
	this.btnAboutUs.setWidgetClickHandler((function() {
		this.onrecordClicked();
	}.bind(this)));
	widget2.addWidget1(this.btnAboutUs, 1.0);
	this.btnLogout = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnLogout.setWidgetText("LOGOUT");
	this.btnLogout.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnLogout.setWidgetBackgroundColor((JkGfxColor.instance("#264651")));
	this.btnLogout.setWidgetClickHandler((function() {
		var popup = JkWidgetCommonPopupDialogManager.NEW_JkUiGuiApplicationContextJkWidgetWidget(this.context, this);
		popup.showConfirmDialog("Confirmation", "Leave this Page?", (function() {
			this.onLogoutClicked();
		}.bind(this)), (function() {
			;
		}.bind(this)));
	}.bind(this)));
	widget2.addWidget1(this.btnLogout, 1.0);
	this.addWidget(widget2);
	var widget3 = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetScrollBarDisabled(false);
	this.container = JkWidgetLayerWithBackgroundColorWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.container.setWidgetColor((JkGfxColor.instance("#264651")));
	var widget4 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5mm")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget5 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget5.setWidgetText("SCHEDULE");
	widget5.setWidgetTextColor((JkGfxColor.black()));
	widget5.setWidgetFontSize((this.context.getHeightValue("8mm")));
	widget5.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget5.setWidgetFontBold(true);
	this.vbox.addWidget(widget5);
	widget4.addWidget1(this.vbox, 0.5, 0.5, false);
	this.container.addWidget(widget4);
	this.grid = JkWidgetDatagridDataGridWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.grid.setWidgetCellPadding(1);
	this.container.addWidget(this.grid);
	widget3.addWidget(this.container);
	this.addWidget(widget3);
};

AppUsersubject.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppUsersubject"] === true;
};

let AppUserProfile = function() {
	JkWidgetVerticalBoxWidget.call(this);
	this.btnHome = null;
	this.btnProfile = null;
	this.btnRecords = null;
	this.btnLogout = null;
	this.container = null;
	this.vbox = null;
};

AppUserProfile.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetVerticalBoxWidget.prototype);
AppUserProfile.prototype.constructor = AppUserProfile;
AppUserProfile.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"AppUserProfile" : true,
	"JkWidgetVerticalBoxWidget" : true,
	"JkWidgetWidget" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppUserProfile.prototype._tobj = AppUserProfile;

AppUserProfile.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppUserProfile;
	return v.CTOR_AppUserProfile_JkUiGuiApplicationContext(context);
};

AppUserProfile.prototype.CTOR_AppUserProfile_JkUiGuiApplicationContext = function(context) {
	this.vbox = null;
	this.container = null;
	this.btnLogout = null;
	this.btnRecords = null;
	this.btnProfile = null;
	this.btnHome = null;
	if(JkWidgetVerticalBoxWidget.prototype.CTOR_JkWidgetVerticalBoxWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppUserProfile.prototype.onHomeClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppUserDashboard.NEW_JkUiGuiApplicationContext(this.context)));
};

AppUserProfile.prototype.onprofileClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppUserProfile.NEW_JkUiGuiApplicationContext(this.context)));
};

AppUserProfile.prototype.onrecordClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppUsersubject.NEW_JkUiGuiApplicationContext(this.context)));
};

AppUserProfile.prototype.onLogoutClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppLoginPage.NEW_JkUiGuiApplicationContext(this.context)));
};

AppUserProfile.prototype.createWidget = function() {
	JkWidgetVerticalBoxWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.instance("#5d89e8")));
	this.addWidget(widget);
	this.setWidgetSpacing((this.context.getHeightValue("2000um")));
	this.setWidgetMargin((this.context.getHeightValue("5mm")));
	var widget2 = JkWidgetHorizontalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget2.setWidgetSpacing((this.context.getHeightValue("100um")));
	this.btnHome = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnHome.setWidgetText("HOME");
	this.btnHome.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnHome.setWidgetBackgroundColor((JkGfxColor.instance("#D91E18")));
	this.btnHome.setWidgetClickHandler((function() {
		this.onHomeClicked();
	}.bind(this)));
	widget2.addWidget1(this.btnHome, 1.0);
	this.btnProfile = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnProfile.setWidgetText("Profile");
	this.btnProfile.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnProfile.setWidgetBackgroundColor((JkGfxColor.instance("#D91E18")));
	this.btnProfile.setWidgetClickHandler((function() {
		this.onprofileClicked();
	}.bind(this)));
	widget2.addWidget1(this.btnProfile, 1.0);
	this.btnRecords = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnRecords.setWidgetText("RECORDS");
	this.btnRecords.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnRecords.setWidgetBackgroundColor((JkGfxColor.instance("#D91E18")));
	this.btnRecords.setWidgetClickHandler((function() {
		this.onrecordClicked();
	}.bind(this)));
	widget2.addWidget1(this.btnRecords, 1.0);
	this.btnLogout = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnLogout.setWidgetText("LOGOUT");
	this.btnLogout.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnLogout.setWidgetBackgroundColor((JkGfxColor.instance("#264651")));
	this.btnLogout.setWidgetClickHandler((function() {
		var popup = JkWidgetCommonPopupDialogManager.NEW_JkUiGuiApplicationContextJkWidgetWidget(this.context, this);
		popup.showConfirmDialog("Confirmation", "Leave this Page?", (function() {
			this.onLogoutClicked();
		}.bind(this)), (function() {
			;
		}.bind(this)));
	}.bind(this)));
	widget2.addWidget1(this.btnLogout, 1.0);
	this.addWidget(widget2);
	var widget3 = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetScrollBarDisabled(false);
	this.container = JkWidgetLayerWithBackgroundColorWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.container.setWidgetColor((JkGfxColor.instance("#5d89e8")));
	var widget4 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5mm")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget5 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget5.setWidgetText("WALA PA NAHUMAN");
	widget5.setWidgetTextColor((JkGfxColor.black()));
	widget5.setWidgetFontSize((this.context.getHeightValue("8mm")));
	widget5.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget5.setWidgetFontBold(true);
	this.vbox.addWidget(widget5);
	widget4.addWidget1(this.vbox, 0.5, 0.5, false);
	this.container.addWidget(widget4);
	widget3.addWidget(this.container);
	this.addWidget(widget3);
};

AppUserProfile.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppUserProfile"] === true;
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

let AppRecords = function() {
	JkWidgetVerticalBoxWidget.call(this);
	this.btnHome = null;
	this.btnSchedule = null;
	this.btnAboutUs = null;
	this.btnLogout = null;
	this.container = null;
	this.vbox = null;
	this.grid = null;
};

AppRecords.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetVerticalBoxWidget.prototype);
AppRecords.prototype.constructor = AppRecords;
AppRecords.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetVerticalBoxWidget" : true,
	"JkWidgetWidget" : true,
	"AppRecords" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppRecords.prototype._tobj = AppRecords;

AppRecords.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppRecords;
	return v.CTOR_AppRecords_JkUiGuiApplicationContext(context);
};

AppRecords.prototype.CTOR_AppRecords_JkUiGuiApplicationContext = function(context) {
	this.grid = null;
	this.vbox = null;
	this.container = null;
	this.btnLogout = null;
	this.btnAboutUs = null;
	this.btnSchedule = null;
	this.btnHome = null;
	if(JkWidgetVerticalBoxWidget.prototype.CTOR_JkWidgetVerticalBoxWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppRecords.prototype.initializeWidget = function() {
	JkWidgetVerticalBoxWidget.prototype.initializeWidget.call(this);
	this.grid.addColumn("User Id", "id", 0.2, 0);
	this.grid.addColumn("Name", "firstname", 1.0, 0);
	this.grid.addColumn("lastName", "lastname", 1.0, 0);
	this.grid.addColumn("Username", "username", 1.0, 0);
	this.grid.addColumn("Password", "password", 1.0, 0);
	this.grid.addColumn("Phonenumber", "phonenumber", 1.0, 0);
	this.grid.addColumn("Gender", "gender", 1.0, 0);
	this.grid.addColumn("Position", "position", 1.0, 0);
	this.grid.addColumn("Subject Handle", "subject", 1.0, 0);
	this.grid.addWidgetHeaderRow();
	AppAPIClient.getInstance().getUser((function(response1) {
		var data = response1.getDynamicMap("data");
		if(!(data != null)) {
			return;
		}
		var records = data.getDynamicVector("records");
		if(!(records != null) || records.getSize() < 1) {
			this.grid.addRow(["NO data"], null, null);
		}
		else {
			var array = records.toVector();
			if(array != null) {
				var n = 0;
				var m = array.length;
				for(n = 0 ; n < m ; n++) {
					var record = (function(o) {
						if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
							return o;
						}
						return null;
					}.bind(this))(array[n]);
					if(record != null) {
						this.grid.addRow([record.getString("id", null), record.getString("firstname", null), record.getString("lastname", null), record.getString("username", null), record.getString("password", null), record.getString("phonenumber", null), record.getString("gender", null), record.getString("position", null), record.getString("subject", null)], null, null);
					}
				}
			}
		}
	}.bind(this)), (function(err1) {
		this.grid.addRow(["Error"], null, null);
	}.bind(this)));
	var btnUpdate = JkWidgetCommonButtonWidget.forText(this.context, "UPDATEInFo", (function() {
		this.onUpdateClicked();
	}.bind(this)));
	btnUpdate.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.vbox.addWidget(btnUpdate);
	var btnDelete = JkWidgetCommonButtonWidget.forText(this.context, "DELETE InFo", (function() {
		this.onDeleteClicked();
	}.bind(this)));
	btnDelete.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.vbox.addWidget(btnDelete);
};

AppRecords.prototype.onHomeClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppAdminPage.NEW_JkUiGuiApplicationContext(this.context)));
};

AppRecords.prototype.onADDClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppAddinstructor.NEW_JkUiGuiApplicationContext(this.context)));
};

AppRecords.prototype.onrecordClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppRecords.NEW_JkUiGuiApplicationContext(this.context)));
};

AppRecords.prototype.onLogoutClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppLoginPage.NEW_JkUiGuiApplicationContext(this.context)));
};

AppRecords.prototype.onUpdateClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppUpdateinfo.NEW_JkUiGuiApplicationContext(this.context)));
};

AppRecords.prototype.onDeleteClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppDeleteinfo.NEW_JkUiGuiApplicationContext(this.context)));
};

AppRecords.prototype.createWidget = function() {
	JkWidgetVerticalBoxWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.instance("#5d89e8")));
	this.addWidget(widget);
	this.setWidgetSpacing((this.context.getHeightValue("2000um")));
	this.setWidgetMargin((this.context.getHeightValue("5mm")));
	var widget2 = JkWidgetHorizontalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget2.setWidgetSpacing((this.context.getHeightValue("100um")));
	this.btnHome = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnHome.setWidgetText("HOME");
	this.btnHome.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnHome.setWidgetBackgroundColor((JkGfxColor.instance("#264651")));
	this.btnHome.setWidgetClickHandler((function() {
		this.onHomeClicked();
	}.bind(this)));
	widget2.addWidget1(this.btnHome, 1.0);
	this.btnSchedule = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnSchedule.setWidgetText("ADD INSTRUCTOR");
	this.btnSchedule.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnSchedule.setWidgetBackgroundColor((JkGfxColor.instance("#264651")));
	this.btnSchedule.setWidgetClickHandler((function() {
		this.onADDClicked();
	}.bind(this)));
	widget2.addWidget1(this.btnSchedule, 1.0);
	this.btnAboutUs = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnAboutUs.setWidgetText("RECORDS");
	this.btnAboutUs.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnAboutUs.setWidgetBackgroundColor((JkGfxColor.instance("#264651")));
	this.btnAboutUs.setWidgetClickHandler((function() {
		this.onrecordClicked();
	}.bind(this)));
	widget2.addWidget1(this.btnAboutUs, 1.0);
	this.btnLogout = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnLogout.setWidgetText("LOGOUT");
	this.btnLogout.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnLogout.setWidgetBackgroundColor((JkGfxColor.instance("#264651")));
	this.btnLogout.setWidgetClickHandler((function() {
		var popup = JkWidgetCommonPopupDialogManager.NEW_JkUiGuiApplicationContextJkWidgetWidget(this.context, this);
		popup.showConfirmDialog("Confirmation", "Leave this Page?", (function() {
			this.onLogoutClicked();
		}.bind(this)), (function() {
			;
		}.bind(this)));
	}.bind(this)));
	widget2.addWidget1(this.btnLogout, 1.0);
	this.addWidget(widget2);
	var widget3 = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetScrollBarDisabled(false);
	this.container = JkWidgetLayerWithBackgroundColorWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.container.setWidgetColor((JkGfxColor.instance("#264651")));
	var widget4 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5mm")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget5 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget5.setWidgetText("SCHEDULE");
	widget5.setWidgetTextColor((JkGfxColor.black()));
	widget5.setWidgetFontSize((this.context.getHeightValue("8mm")));
	widget5.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget5.setWidgetFontBold(true);
	this.vbox.addWidget(widget5);
	widget4.addWidget1(this.vbox, 0.5, 0.5, false);
	this.container.addWidget(widget4);
	this.grid = JkWidgetDatagridDataGridWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.grid.setWidgetCellPadding(1);
	this.container.addWidget(this.grid);
	widget3.addWidget(this.container);
	this.addWidget(widget3);
};

AppRecords.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppRecords"] === true;
};

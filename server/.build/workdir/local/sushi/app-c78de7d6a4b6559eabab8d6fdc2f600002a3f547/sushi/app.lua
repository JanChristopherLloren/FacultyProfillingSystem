app = app or {}

app.FacultyDatabase = {}
app.FacultyDatabase.__index = app.FacultyDatabase
_vm:set_metatable(app.FacultyDatabase, {})

app.FacultyDatabase.USER = "User"
app.FacultyDatabase.REGISTER = "Register"

function app.FacultyDatabase._create()
	local v = _vm:set_metatable({}, app.FacultyDatabase)
	return v
end

function app.FacultyDatabase:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.FacultyDatabase'
	self['_isType.app.FacultyDatabase'] = true
	self.db = nil
end

function app.FacultyDatabase:_construct0()
	app.FacultyDatabase._init(self)
	return self
end

app.FacultyDatabase.User = _g.jk.json.JSONObjectAdapter._create()
app.FacultyDatabase.User.__index = app.FacultyDatabase.User
_vm:set_metatable(app.FacultyDatabase.User, {
	__index = _g.jk.json.JSONObjectAdapter
})

function app.FacultyDatabase.User._create()
	local v = _vm:set_metatable({}, app.FacultyDatabase.User)
	return v
end

function app.FacultyDatabase.User:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.FacultyDatabase.User'
	self['_isType.app.FacultyDatabase.User'] = true
	self['_isType.jk.lang.StringObject'] = true
	self._id = nil
	self._firstname = nil
	self._lastname = nil
	self._username = nil
	self._password = nil
	self._phonenumber = nil
end

function app.FacultyDatabase.User:_construct0()
	app.FacultyDatabase.User._init(self)
	do _g.jk.json.JSONObjectAdapter._construct0(self) end
	return self
end

function app.FacultyDatabase.User:setIdValue(value)
	do return self:setId(_g.jk.lang.Integer:asObject(value)) end
end

function app.FacultyDatabase.User:getIdValue()
	do return _g.jk.lang.Integer:asInteger(self._id) end
end

function app.FacultyDatabase.User:setId(value)
	self._id = value
	do return self end
end

function app.FacultyDatabase.User:getId()
	do return self._id end
end

function app.FacultyDatabase.User:setFirstname(value)
	self._firstname = value
	do return self end
end

function app.FacultyDatabase.User:getFirstname()
	do return self._firstname end
end

function app.FacultyDatabase.User:setLastname(value)
	self._lastname = value
	do return self end
end

function app.FacultyDatabase.User:getLastname()
	do return self._lastname end
end

function app.FacultyDatabase.User:setUsername(value)
	self._username = value
	do return self end
end

function app.FacultyDatabase.User:getUsername()
	do return self._username end
end

function app.FacultyDatabase.User:setPassword(value)
	self._password = value
	do return self end
end

function app.FacultyDatabase.User:getPassword()
	do return self._password end
end

function app.FacultyDatabase.User:setPhonenumberValue(value)
	do return self:setPhonenumber(_g.jk.lang.Integer:asObject(value)) end
end

function app.FacultyDatabase.User:getPhonenumberValue()
	do return _g.jk.lang.Integer:asInteger(self._phonenumber) end
end

function app.FacultyDatabase.User:setPhonenumber(value)
	self._phonenumber = value
	do return self end
end

function app.FacultyDatabase.User:getPhonenumber()
	do return self._phonenumber end
end

function app.FacultyDatabase.User:toJsonObject()
	local v = _g.jk.lang.DynamicMap._construct0(_g.jk.lang.DynamicMap._create())
	if self._id ~= nil then
		do v:setObject("id", self:asJsonValue(self._id)) end
	end
	if self._firstname ~= nil then
		do v:setObject("firstname", self:asJsonValue(self._firstname)) end
	end
	if self._lastname ~= nil then
		do v:setObject("lastname", self:asJsonValue(self._lastname)) end
	end
	if self._username ~= nil then
		do v:setObject("username", self:asJsonValue(self._username)) end
	end
	if self._password ~= nil then
		do v:setObject("password", self:asJsonValue(self._password)) end
	end
	if self._phonenumber ~= nil then
		do v:setObject("phonenumber", self:asJsonValue(self._phonenumber)) end
	end
	do return v end
end

function app.FacultyDatabase.User:fromJsonObject(o)
	local v = _vm:to_table_with_key(o, '_isType.jk.lang.DynamicMap')
	if not (v ~= nil) then
		do return false end
	end
	if v:get("id") ~= nil then
		self._id = _g.jk.lang.Integer:asObject(v:getInteger("id", 0))
	end
	self._firstname = v:getString("firstname", nil)
	self._lastname = v:getString("lastname", nil)
	self._username = v:getString("username", nil)
	self._password = v:getString("password", nil)
	if v:get("phonenumber") ~= nil then
		self._phonenumber = _g.jk.lang.Integer:asObject(v:getInteger("phonenumber", 0))
	end
	do return true end
end

function app.FacultyDatabase.User:fromJsonString(o)
	do return self:fromJsonObject(_g.jk.json.JSONParser:parse(o)) end
end

function app.FacultyDatabase.User:toJsonString()
	do return _g.jk.json.JSONEncoder:encode(self:toJsonObject(), true, false) end
end

function app.FacultyDatabase.User:toString()
	do return self:toJsonString() end
end

function app.FacultyDatabase.User:forJsonString(o)
	local v = _g.app.FacultyDatabase.User._construct0(_g.app.FacultyDatabase.User._create())
	if not v:fromJsonString(o) then
		do return nil end
	end
	do return v end
end

function app.FacultyDatabase.User:forJsonObject(o)
	local v = _g.app.FacultyDatabase.User._construct0(_g.app.FacultyDatabase.User._create())
	if not v:fromJsonObject(o) then
		do return nil end
	end
	do return v end
end

app.FacultyDatabase.Register = _g.jk.json.JSONObjectAdapter._create()
app.FacultyDatabase.Register.__index = app.FacultyDatabase.Register
_vm:set_metatable(app.FacultyDatabase.Register, {
	__index = _g.jk.json.JSONObjectAdapter
})

function app.FacultyDatabase.Register._create()
	local v = _vm:set_metatable({}, app.FacultyDatabase.Register)
	return v
end

function app.FacultyDatabase.Register:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.FacultyDatabase.Register'
	self['_isType.app.FacultyDatabase.Register'] = true
	self['_isType.jk.lang.StringObject'] = true
	self._id = nil
	self._username = nil
	self._password = nil
	self._firstName = nil
	self._lastName = nil
end

function app.FacultyDatabase.Register:_construct0()
	app.FacultyDatabase.Register._init(self)
	do _g.jk.json.JSONObjectAdapter._construct0(self) end
	return self
end

function app.FacultyDatabase.Register:setId(value)
	self._id = value
	do return self end
end

function app.FacultyDatabase.Register:getId()
	do return self._id end
end

function app.FacultyDatabase.Register:setUsername(value)
	self._username = value
	do return self end
end

function app.FacultyDatabase.Register:getUsername()
	do return self._username end
end

function app.FacultyDatabase.Register:setPassword(value)
	self._password = value
	do return self end
end

function app.FacultyDatabase.Register:getPassword()
	do return self._password end
end

function app.FacultyDatabase.Register:setFirstName(value)
	self._firstName = value
	do return self end
end

function app.FacultyDatabase.Register:getFirstName()
	do return self._firstName end
end

function app.FacultyDatabase.Register:setLastName(value)
	self._lastName = value
	do return self end
end

function app.FacultyDatabase.Register:getLastName()
	do return self._lastName end
end

function app.FacultyDatabase.Register:toJsonObject()
	local v = _g.jk.lang.DynamicMap._construct0(_g.jk.lang.DynamicMap._create())
	if self._id ~= nil then
		do v:setObject("id", self:asJsonValue(self._id)) end
	end
	if self._username ~= nil then
		do v:setObject("username", self:asJsonValue(self._username)) end
	end
	if self._password ~= nil then
		do v:setObject("password", self:asJsonValue(self._password)) end
	end
	if self._firstName ~= nil then
		do v:setObject("firstName", self:asJsonValue(self._firstName)) end
	end
	if self._lastName ~= nil then
		do v:setObject("lastName", self:asJsonValue(self._lastName)) end
	end
	do return v end
end

function app.FacultyDatabase.Register:fromJsonObject(o)
	local v = _vm:to_table_with_key(o, '_isType.jk.lang.DynamicMap')
	if not (v ~= nil) then
		do return false end
	end
	self._id = v:getString("id", nil)
	self._username = v:getString("username", nil)
	self._password = v:getString("password", nil)
	self._firstName = v:getString("firstName", nil)
	self._lastName = v:getString("lastName", nil)
	do return true end
end

function app.FacultyDatabase.Register:fromJsonString(o)
	do return self:fromJsonObject(_g.jk.json.JSONParser:parse(o)) end
end

function app.FacultyDatabase.Register:toJsonString()
	do return _g.jk.json.JSONEncoder:encode(self:toJsonObject(), true, false) end
end

function app.FacultyDatabase.Register:toString()
	do return self:toJsonString() end
end

function app.FacultyDatabase.Register:forJsonString(o)
	local v = _g.app.FacultyDatabase.Register._construct0(_g.app.FacultyDatabase.Register._create())
	if not v:fromJsonString(o) then
		do return nil end
	end
	do return v end
end

function app.FacultyDatabase.Register:forJsonObject(o)
	local v = _g.app.FacultyDatabase.Register._construct0(_g.app.FacultyDatabase.Register._create())
	if not v:fromJsonObject(o) then
		do return nil end
	end
	do return v end
end

function app.FacultyDatabase:forContext(ctx)
	local cstr = _g.jk.env.EnvironmentVariable:get("TASK_DATABASE")
	do _g.jk.log.Log:debug(ctx, "Opening database connection: '" .. _g.jk.lang.String:safeString(cstr) .. "'") end
	self.db = _g.jk.mysql.MySQLDatabase:forConnectionStringSync(ctx, cstr)
	if not (self.db ~= nil) then
		do _g.jk.lang.Error:throw("failedToConnectToDatabase", cstr) end
	end
	do
		local v = _g.app.FacultyDatabase._construct0(_g.app.FacultyDatabase._create())
		do v:setDb(self.db) end
		do return v end
	end
end

function app.FacultyDatabase:updateTable(table)
	if not (table ~= nil) then
		do _g.jk.lang.Error:throw("nullTabel", "updateTable") end
	end
	if not (self.db ~= nil) then
		do _g.jk.lang.Error:throw("nullTable", "updateTable") end
	end
	if not self.db:ensureTableExistsSync(table) then
		do _g.jk.lang.Error:throw("failedToUpdateTable", table:getName()) end
	end
end

function app.FacultyDatabase:updateTables()
	local user = _g.jk.sql.SQLTableInfo:forName(_g.app.FacultyDatabase.USER)
	do user:addIntegerKeyColumn("id") end
	do user:addStringColumn("firstname") end
	do user:addStringColumn("lastname") end
	do user:addStringColumn("username") end
	do user:addStringColumn("password") end
	do user:addIntegerColumn("phonenumber") end
	do self:updateTable(user) end
end

function app.FacultyDatabase:addUser(user)
	if not (user ~= nil) then
		do return nil end
	end
	if not self.db:executeSync(self.db:prepareInsertStatementSync(_g.app.FacultyDatabase.USER, user:toDynamicMap())) then
		do return nil end
	end
	do return user end
end

function app.FacultyDatabase:addRegister(register)
	if not (register ~= nil) then
		do return nil end
	end
	if not self.db:executeSync(self.db:prepareInsertStatementSync(_g.app.FacultyDatabase.REGISTER, register:toDynamicMap())) then
		do return nil end
	end
	do return register end
end

function app.FacultyDatabase:updateUser(id, user)
	if not (user ~= nil) then
		do return false end
	end
	do
		local criteria = _g.app.FacultyDatabase.User._construct0(_g.app.FacultyDatabase.User._create())
		do return self.db:executeSync(self.db:prepareUpdateStatementSync(_g.app.FacultyDatabase.USER, criteria:toDynamicMap(), user:toDynamicMap())) end
	end
end

function app.FacultyDatabase:deleteUser(id)
	local criteria = _g.app.FacultyDatabase.User._construct0(_g.app.FacultyDatabase.User._create())
	do return self.db:executeSync(self.db:prepareDeleteStatementSync(_g.app.FacultyDatabase.USER, criteria:toDynamicMap())) end
end

function app.FacultyDatabase:getUser()
	local v = {}
	local it = self.db:querySync(self.db:prepareQueryAllStatementSync(_g.app.FacultyDatabase.USER, nil, nil))
	if not (it ~= nil) then
		do return nil end
	end
	while it ~= nil do
		local o = it:next()
		if not (o ~= nil) then
			do break end
		end
		do
			local user = _g.app.FacultyDatabase.User:forJsonObject(o)
			if not (user ~= nil) then
				goto _continue1
			end
			do _g.jk.lang.Vector:append(v, user) end
		end
		::_continue1::
	end
	do
		local data = _g.jk.lang.DynamicMap._construct0(_g.jk.lang.DynamicMap._create())
		do data:setObject("records", v) end
		do return data end
	end
end

function app.FacultyDatabase:getAdmin()
	local v = {}
	local it = self.db:querySync(self.db:prepareQueryAllStatementSync(_g.app.FacultyDatabase.REGISTER, nil, nil))
	if not (it ~= nil) then
		do return nil end
	end
	while it ~= nil do
		local o = it:next()
		if not (o ~= nil) then
			do break end
		end
		do
			local register = _g.app.FacultyDatabase.Register:forJsonObject(o)
			if not (register ~= nil) then
				goto _continue2
			end
			do _g.jk.lang.Vector:append(v, register) end
		end
		::_continue2::
	end
	do
		local data = _g.jk.lang.DynamicMap._construct0(_g.jk.lang.DynamicMap._create())
		do data:setObject("records", v) end
		do return data end
	end
end

function app.FacultyDatabase:close()
	if self.db ~= nil then
		do self.db:closeSync() end
	end
	self.db = nil
end

function app.FacultyDatabase:getDb()
	do return self.db end
end

function app.FacultyDatabase:setDb(v)
	self.db = v
	do return self end
end

app.FacultyApiHandler = _g.jk.http.worker.HTTPRPCRouter._create()
app.FacultyApiHandler.__index = app.FacultyApiHandler
_vm:set_metatable(app.FacultyApiHandler, {
	__index = _g.jk.http.worker.HTTPRPCRouter
})

function app.FacultyApiHandler._create()
	local v = _vm:set_metatable({}, app.FacultyApiHandler)
	return v
end

function app.FacultyApiHandler:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.FacultyApiHandler'
	self['_isType.app.FacultyApiHandler'] = true
	self.db = nil
	self.cors = _g.app.FacultyConfig:getCorsUtil()
end

function app.FacultyApiHandler:_construct0()
	app.FacultyApiHandler._init(self)
	do _g.jk.http.worker.HTTPRPCRouter._construct0(self) end
	return self
end

app.FacultyApiHandler.UserRequest = _g.jk.json.JSONObjectAdapter._create()
app.FacultyApiHandler.UserRequest.__index = app.FacultyApiHandler.UserRequest
_vm:set_metatable(app.FacultyApiHandler.UserRequest, {
	__index = _g.jk.json.JSONObjectAdapter
})

function app.FacultyApiHandler.UserRequest._create()
	local v = _vm:set_metatable({}, app.FacultyApiHandler.UserRequest)
	return v
end

function app.FacultyApiHandler.UserRequest:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.FacultyApiHandler.UserRequest'
	self['_isType.app.FacultyApiHandler.UserRequest'] = true
	self['_isType.jk.lang.StringObject'] = true
	self._id = nil
	self._firstname = nil
	self._lastname = nil
	self._username = nil
	self._password = nil
	self._phonenumber = nil
end

function app.FacultyApiHandler.UserRequest:_construct0()
	app.FacultyApiHandler.UserRequest._init(self)
	do _g.jk.json.JSONObjectAdapter._construct0(self) end
	return self
end

function app.FacultyApiHandler.UserRequest:setIdValue(value)
	do return self:setId(_g.jk.lang.Integer:asObject(value)) end
end

function app.FacultyApiHandler.UserRequest:getIdValue()
	do return _g.jk.lang.Integer:asInteger(self._id) end
end

function app.FacultyApiHandler.UserRequest:setId(value)
	self._id = value
	do return self end
end

function app.FacultyApiHandler.UserRequest:getId()
	do return self._id end
end

function app.FacultyApiHandler.UserRequest:setFirstname(value)
	self._firstname = value
	do return self end
end

function app.FacultyApiHandler.UserRequest:getFirstname()
	do return self._firstname end
end

function app.FacultyApiHandler.UserRequest:setLastname(value)
	self._lastname = value
	do return self end
end

function app.FacultyApiHandler.UserRequest:getLastname()
	do return self._lastname end
end

function app.FacultyApiHandler.UserRequest:setUsername(value)
	self._username = value
	do return self end
end

function app.FacultyApiHandler.UserRequest:getUsername()
	do return self._username end
end

function app.FacultyApiHandler.UserRequest:setPassword(value)
	self._password = value
	do return self end
end

function app.FacultyApiHandler.UserRequest:getPassword()
	do return self._password end
end

function app.FacultyApiHandler.UserRequest:setPhonenumberValue(value)
	do return self:setPhonenumber(_g.jk.lang.Integer:asObject(value)) end
end

function app.FacultyApiHandler.UserRequest:getPhonenumberValue()
	do return _g.jk.lang.Integer:asInteger(self._phonenumber) end
end

function app.FacultyApiHandler.UserRequest:setPhonenumber(value)
	self._phonenumber = value
	do return self end
end

function app.FacultyApiHandler.UserRequest:getPhonenumber()
	do return self._phonenumber end
end

function app.FacultyApiHandler.UserRequest:toJsonObject()
	local v = _g.jk.lang.DynamicMap._construct0(_g.jk.lang.DynamicMap._create())
	if self._id ~= nil then
		do v:setObject("id", self:asJsonValue(self._id)) end
	end
	if self._firstname ~= nil then
		do v:setObject("firstname", self:asJsonValue(self._firstname)) end
	end
	if self._lastname ~= nil then
		do v:setObject("lastname", self:asJsonValue(self._lastname)) end
	end
	if self._username ~= nil then
		do v:setObject("username", self:asJsonValue(self._username)) end
	end
	if self._password ~= nil then
		do v:setObject("password", self:asJsonValue(self._password)) end
	end
	if self._phonenumber ~= nil then
		do v:setObject("phonenumber", self:asJsonValue(self._phonenumber)) end
	end
	do return v end
end

function app.FacultyApiHandler.UserRequest:fromJsonObject(o)
	local v = _vm:to_table_with_key(o, '_isType.jk.lang.DynamicMap')
	if not (v ~= nil) then
		do return false end
	end
	if v:get("id") ~= nil then
		self._id = _g.jk.lang.Integer:asObject(v:getInteger("id", 0))
	end
	self._firstname = v:getString("firstname", nil)
	self._lastname = v:getString("lastname", nil)
	self._username = v:getString("username", nil)
	self._password = v:getString("password", nil)
	if v:get("phonenumber") ~= nil then
		self._phonenumber = _g.jk.lang.Integer:asObject(v:getInteger("phonenumber", 0))
	end
	do return true end
end

function app.FacultyApiHandler.UserRequest:fromJsonString(o)
	do return self:fromJsonObject(_g.jk.json.JSONParser:parse(o)) end
end

function app.FacultyApiHandler.UserRequest:toJsonString()
	do return _g.jk.json.JSONEncoder:encode(self:toJsonObject(), true, false) end
end

function app.FacultyApiHandler.UserRequest:toString()
	do return self:toJsonString() end
end

function app.FacultyApiHandler.UserRequest:forJsonString(o)
	local v = _g.app.FacultyApiHandler.UserRequest._construct0(_g.app.FacultyApiHandler.UserRequest._create())
	if not v:fromJsonString(o) then
		do return nil end
	end
	do return v end
end

function app.FacultyApiHandler.UserRequest:forJsonObject(o)
	local v = _g.app.FacultyApiHandler.UserRequest._construct0(_g.app.FacultyApiHandler.UserRequest._create())
	if not v:fromJsonObject(o) then
		do return nil end
	end
	do return v end
end

function app.FacultyApiHandler:getDatabase()
	if not (self.db ~= nil) then
		self.db = _g.app.FacultyDatabase:forContext(self:getCtx())
		do self.db:updateTables() end
	end
	do return self.db end
end

function app.FacultyApiHandler:postProcess(req, resp)
	do self.cors:handleWorkerRequest(req, resp) end
end

function app.FacultyApiHandler:initRoutes()
	do _g.jk.http.worker.HTTPRPCRouter.initRoutes(self) end
	do self:addRoute("GET", "/user", function(req, resp, vars)
		local user = self:getDatabase():getUser()
		if not (user ~= nil) then
			do return end
		end
		do self:setOkResponse(resp, user) end
	end) end
	do self:addRoute("POST", "/user", function(req, resp, vars)
		local requestData = _g.app.FacultyApiHandler.UserRequest:forJsonString(req:getBodyString())
		if not (requestData ~= nil) then
			do self:setErrorResponse(resp, "invalidRequest", "500") end
			do return end
		end
		do
			local user = _g.app.FacultyDatabase.User._construct0(_g.app.FacultyDatabase.User._create())
			do user:setFirstname(requestData:getFirstname()) end
			do user:setLastname(requestData:getLastname()) end
			do user:setUsername(requestData:getUsername()) end
			do user:setPassword(requestData:getPassword()) end
			do user:setPhonenumber(requestData:getPhonenumber()) end
			if not (self:getDatabase():addUser(user) ~= nil) then
				do self:setErrorResponse(resp, "failedToSaveUser", "500") end
				do return end
			end
			do self:setOkResponse(resp, nil) end
		end
	end) end
	do self:addRoute("PUT", "/user", function(req, resp, vars)
		local requestData = _g.app.FacultyApiHandler.UserRequest:forJsonString(req:getBodyString())
		if not (requestData ~= nil) then
			do self:setErrorResponse(resp, "invalidRequest", "500") end
			do return end
		end
		do
			local user = _g.app.FacultyDatabase.User._construct0(_g.app.FacultyDatabase.User._create())
			do user:setUsername(requestData:getUsername()) end
			do user:setPassword(requestData:getPassword()) end
			if not self:getDatabase():updateUser(vars:getString("id", nil), user) then
				do self:setErrorResponse(resp, "failedToUpdateUser", "500") end
				do return end
			end
			do self:setOkResponse(resp, nil) end
		end
	end) end
	do self:addRoute("DELETE", "/user", function(req, resp, vars)
		if not self:getDatabase():deleteUser(vars:getString("id", nil)) then
			do self:setErrorResponse(resp, "failedToDeleteUser", "500") end
			do return end
		end
		do self:setOkResponse(resp, nil) end
	end) end
end

app.FacultyConfig = {}
app.FacultyConfig.__index = app.FacultyConfig
_vm:set_metatable(app.FacultyConfig, {})

function app.FacultyConfig._create()
	local v = _vm:set_metatable({}, app.FacultyConfig)
	return v
end

function app.FacultyConfig:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.FacultyConfig'
	self['_isType.app.FacultyConfig'] = true
end

function app.FacultyConfig:_construct0()
	app.FacultyConfig._init(self)
	return self
end

function app.FacultyConfig:getAllowedOrigins()
	do return {
		"http://localhost:8080",
		"http://localhost:8081",
		"http://ec2-13-250-10-234.ap-southeast-1.compute.amazonaws.com:30127"
	} end
end

function app.FacultyConfig:getCorsUtil()
	local allowed = {}
	local array = self:getAllowedOrigins()
	if array ~= nil then
		local n = 0
		local m = #array
		do
			n = 0
			while n < m do
				local origin = array[n + 1]
				if origin ~= nil then
					do _g.jk.lang.Vector:append(allowed, _g.jk.lang.String:asString(origin)) end
				end
				do n = n + 1 end
			end
		end
	end
	do return _g.jk.http.server.cors.HTTPServerCORSUtil:forWhitelist(allowed) end
end

app.FacultyApiServer = _g.jk.server.web.WebServer._create()
app.FacultyApiServer.__index = app.FacultyApiServer
_vm:set_metatable(app.FacultyApiServer, {
	__index = _g.jk.server.web.WebServer
})

function app.FacultyApiServer._create()
	local v = _vm:set_metatable({}, app.FacultyApiServer)
	return v
end

function app.FacultyApiServer:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.FacultyApiServer'
	self['_isType.app.FacultyApiServer'] = true
end

function app.FacultyApiServer:_construct0()
	app.FacultyApiServer._init(self)
	do _g.jk.server.web.WebServer._construct0(self) end
	return self
end

function app.FacultyApiServer:initializeServer(server)
	if not _g.jk.server.web.WebServer.initializeServer(self, server) then
		do return false end
	end
	do server:setCreateOptionsResponseHandler(function(req)
		do return _g.app.FacultyConfig:getCorsUtil():handlePreflightRequest(req) end
	end) end
	do return true end
end

function app.FacultyApiServer:initializeApplication()
	if not _g.jk.server.web.WebServer.initializeApplication(self) then
		do return false end
	end
	do
		local db = _g.app.FacultyDatabase:forContext(self.ctx)
		do db:updateTables() end
		do db:close() end
		do return true end
	end
end

function app.FacultyApiServer:_main(args)
	do return _g.app.FacultyApiServer._construct0(_g.app.FacultyApiServer._create()):setWorker("class:app.FacultyApiHandler"):executeMain(args) end
end

function _main(args)
	do return app.FacultyApiServer:_main(args) end
end

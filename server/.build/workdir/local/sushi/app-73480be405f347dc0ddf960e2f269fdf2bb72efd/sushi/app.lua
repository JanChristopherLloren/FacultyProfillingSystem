app = app or {}

app.FacultyDatabase = {}
app.FacultyDatabase.__index = app.FacultyDatabase
_vm:set_metatable(app.FacultyDatabase, {})

app.FacultyDatabase.INFO = "info"
app.FacultyDatabase.LOGIN = "login"

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

app.FacultyDatabase.Info = _g.jk.json.JSONObjectAdapter._create()
app.FacultyDatabase.Info.__index = app.FacultyDatabase.Info
_vm:set_metatable(app.FacultyDatabase.Info, {
	__index = _g.jk.json.JSONObjectAdapter
})

function app.FacultyDatabase.Info._create()
	local v = _vm:set_metatable({}, app.FacultyDatabase.Info)
	return v
end

function app.FacultyDatabase.Info:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.FacultyDatabase.Info'
	self['_isType.app.FacultyDatabase.Info'] = true
	self['_isType.jk.lang.StringObject'] = true
	self._id = nil
	self._firstname = nil
	self._lastname = nil
	self._contactnumber = nil
	self._address = nil
	self._username = nil
	self._password = nil
	self._firstnamedeceased = nil
	self._lastnamedeceased = nil
	self._currentdate = nil
	self._burialdate = nil
	self._servicetype = nil
	self._serviceprice = nil
	self._lotnumber = nil
	self._timeStampAdded = nil
	self._timeStampLastUpdated = nil
end

function app.FacultyDatabase.Info:_construct0()
	app.FacultyDatabase.Info._init(self)
	do _g.jk.json.JSONObjectAdapter._construct0(self) end
	return self
end

function app.FacultyDatabase.Info:setId(value)
	self._id = value
	do return self end
end

function app.FacultyDatabase.Info:getId()
	do return self._id end
end

function app.FacultyDatabase.Info:setFirstname(value)
	self._firstname = value
	do return self end
end

function app.FacultyDatabase.Info:getFirstname()
	do return self._firstname end
end

function app.FacultyDatabase.Info:setLastname(value)
	self._lastname = value
	do return self end
end

function app.FacultyDatabase.Info:getLastname()
	do return self._lastname end
end

function app.FacultyDatabase.Info:setContactnumber(value)
	self._contactnumber = value
	do return self end
end

function app.FacultyDatabase.Info:getContactnumber()
	do return self._contactnumber end
end

function app.FacultyDatabase.Info:setAddress(value)
	self._address = value
	do return self end
end

function app.FacultyDatabase.Info:getAddress()
	do return self._address end
end

function app.FacultyDatabase.Info:setUsername(value)
	self._username = value
	do return self end
end

function app.FacultyDatabase.Info:getUsername()
	do return self._username end
end

function app.FacultyDatabase.Info:setPassword(value)
	self._password = value
	do return self end
end

function app.FacultyDatabase.Info:getPassword()
	do return self._password end
end

function app.FacultyDatabase.Info:setFirstnamedeceased(value)
	self._firstnamedeceased = value
	do return self end
end

function app.FacultyDatabase.Info:getFirstnamedeceased()
	do return self._firstnamedeceased end
end

function app.FacultyDatabase.Info:setLastnamedeceased(value)
	self._lastnamedeceased = value
	do return self end
end

function app.FacultyDatabase.Info:getLastnamedeceased()
	do return self._lastnamedeceased end
end

function app.FacultyDatabase.Info:setCurrentdate(value)
	self._currentdate = value
	do return self end
end

function app.FacultyDatabase.Info:getCurrentdate()
	do return self._currentdate end
end

function app.FacultyDatabase.Info:setBurialdate(value)
	self._burialdate = value
	do return self end
end

function app.FacultyDatabase.Info:getBurialdate()
	do return self._burialdate end
end

function app.FacultyDatabase.Info:setServicetype(value)
	self._servicetype = value
	do return self end
end

function app.FacultyDatabase.Info:getServicetype()
	do return self._servicetype end
end

function app.FacultyDatabase.Info:setServiceprice(value)
	self._serviceprice = value
	do return self end
end

function app.FacultyDatabase.Info:getServiceprice()
	do return self._serviceprice end
end

function app.FacultyDatabase.Info:setLotnumber(value)
	self._lotnumber = value
	do return self end
end

function app.FacultyDatabase.Info:getLotnumber()
	do return self._lotnumber end
end

function app.FacultyDatabase.Info:setTimeStampAddedValue(value)
	do return self:setTimeStampAdded(_g.jk.lang.LongInteger:asObject(value)) end
end

function app.FacultyDatabase.Info:getTimeStampAddedValue()
	do return _g.jk.lang.LongInteger:asLong(self._timeStampAdded) end
end

function app.FacultyDatabase.Info:setTimeStampAdded(value)
	self._timeStampAdded = value
	do return self end
end

function app.FacultyDatabase.Info:getTimeStampAdded()
	do return self._timeStampAdded end
end

function app.FacultyDatabase.Info:setTimeStampLastUpdatedValue(value)
	do return self:setTimeStampLastUpdated(_g.jk.lang.LongInteger:asObject(value)) end
end

function app.FacultyDatabase.Info:getTimeStampLastUpdatedValue()
	do return _g.jk.lang.LongInteger:asLong(self._timeStampLastUpdated) end
end

function app.FacultyDatabase.Info:setTimeStampLastUpdated(value)
	self._timeStampLastUpdated = value
	do return self end
end

function app.FacultyDatabase.Info:getTimeStampLastUpdated()
	do return self._timeStampLastUpdated end
end

function app.FacultyDatabase.Info:toJsonObject()
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
	if self._contactnumber ~= nil then
		do v:setObject("contactnumber", self:asJsonValue(self._contactnumber)) end
	end
	if self._address ~= nil then
		do v:setObject("address", self:asJsonValue(self._address)) end
	end
	if self._username ~= nil then
		do v:setObject("username", self:asJsonValue(self._username)) end
	end
	if self._password ~= nil then
		do v:setObject("password", self:asJsonValue(self._password)) end
	end
	if self._firstnamedeceased ~= nil then
		do v:setObject("firstnamedeceased", self:asJsonValue(self._firstnamedeceased)) end
	end
	if self._lastnamedeceased ~= nil then
		do v:setObject("lastnamedeceased", self:asJsonValue(self._lastnamedeceased)) end
	end
	if self._currentdate ~= nil then
		do v:setObject("currentdate", self:asJsonValue(self._currentdate)) end
	end
	if self._burialdate ~= nil then
		do v:setObject("burialdate", self:asJsonValue(self._burialdate)) end
	end
	if self._servicetype ~= nil then
		do v:setObject("servicetype", self:asJsonValue(self._servicetype)) end
	end
	if self._serviceprice ~= nil then
		do v:setObject("serviceprice", self:asJsonValue(self._serviceprice)) end
	end
	if self._lotnumber ~= nil then
		do v:setObject("lotnumber", self:asJsonValue(self._lotnumber)) end
	end
	if self._timeStampAdded ~= nil then
		do v:setObject("timeStampAdded", self:asJsonValue(self._timeStampAdded)) end
	end
	if self._timeStampLastUpdated ~= nil then
		do v:setObject("timeStampLastUpdated", self:asJsonValue(self._timeStampLastUpdated)) end
	end
	do return v end
end

function app.FacultyDatabase.Info:fromJsonObject(o)
	local v = _vm:to_table_with_key(o, '_isType.jk.lang.DynamicMap')
	if not (v ~= nil) then
		do return false end
	end
	self._id = v:getString("id", nil)
	self._firstname = v:getString("firstname", nil)
	self._lastname = v:getString("lastname", nil)
	self._contactnumber = v:getString("contactnumber", nil)
	self._address = v:getString("address", nil)
	self._username = v:getString("username", nil)
	self._password = v:getString("password", nil)
	self._firstnamedeceased = v:getString("firstnamedeceased", nil)
	self._lastnamedeceased = v:getString("lastnamedeceased", nil)
	self._currentdate = v:getString("currentdate", nil)
	self._burialdate = v:getString("burialdate", nil)
	self._servicetype = v:getString("servicetype", nil)
	self._serviceprice = v:getString("serviceprice", nil)
	self._lotnumber = v:getString("lotnumber", nil)
	if v:get("timeStampAdded") ~= nil then
		self._timeStampAdded = _g.jk.lang.LongInteger:asObject(v:getLongInteger("timeStampAdded", 0))
	end
	if v:get("timeStampLastUpdated") ~= nil then
		self._timeStampLastUpdated = _g.jk.lang.LongInteger:asObject(v:getLongInteger("timeStampLastUpdated", 0))
	end
	do return true end
end

function app.FacultyDatabase.Info:fromJsonString(o)
	do return self:fromJsonObject(_g.jk.json.JSONParser:parse(o)) end
end

function app.FacultyDatabase.Info:toJsonString()
	do return _g.jk.json.JSONEncoder:encode(self:toJsonObject(), true, false) end
end

function app.FacultyDatabase.Info:toString()
	do return self:toJsonString() end
end

function app.FacultyDatabase.Info:forJsonString(o)
	local v = _g.app.FacultyDatabase.Info._construct0(_g.app.FacultyDatabase.Info._create())
	if not v:fromJsonString(o) then
		do return nil end
	end
	do return v end
end

function app.FacultyDatabase.Info:forJsonObject(o)
	local v = _g.app.FacultyDatabase.Info._construct0(_g.app.FacultyDatabase.Info._create())
	if not v:fromJsonObject(o) then
		do return nil end
	end
	do return v end
end

app.FacultyDatabase.Login = _g.jk.json.JSONObjectAdapter._create()
app.FacultyDatabase.Login.__index = app.FacultyDatabase.Login
_vm:set_metatable(app.FacultyDatabase.Login, {
	__index = _g.jk.json.JSONObjectAdapter
})

function app.FacultyDatabase.Login._create()
	local v = _vm:set_metatable({}, app.FacultyDatabase.Login)
	return v
end

function app.FacultyDatabase.Login:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.FacultyDatabase.Login'
	self['_isType.app.FacultyDatabase.Login'] = true
	self['_isType.jk.lang.StringObject'] = true
	self._id = nil
	self._fullname = nil
	self._gender = nil
	self._username = nil
	self._password = nil
	self._timeStampAdded = nil
	self._timeStampLastUpdated = nil
end

function app.FacultyDatabase.Login:_construct0()
	app.FacultyDatabase.Login._init(self)
	do _g.jk.json.JSONObjectAdapter._construct0(self) end
	return self
end

function app.FacultyDatabase.Login:setId(value)
	self._id = value
	do return self end
end

function app.FacultyDatabase.Login:getId()
	do return self._id end
end

function app.FacultyDatabase.Login:setFullname(value)
	self._fullname = value
	do return self end
end

function app.FacultyDatabase.Login:getFullname()
	do return self._fullname end
end

function app.FacultyDatabase.Login:setGender(value)
	self._gender = value
	do return self end
end

function app.FacultyDatabase.Login:getGender()
	do return self._gender end
end

function app.FacultyDatabase.Login:setUsername(value)
	self._username = value
	do return self end
end

function app.FacultyDatabase.Login:getUsername()
	do return self._username end
end

function app.FacultyDatabase.Login:setPassword(value)
	self._password = value
	do return self end
end

function app.FacultyDatabase.Login:getPassword()
	do return self._password end
end

function app.FacultyDatabase.Login:setTimeStampAddedValue(value)
	do return self:setTimeStampAdded(_g.jk.lang.LongInteger:asObject(value)) end
end

function app.FacultyDatabase.Login:getTimeStampAddedValue()
	do return _g.jk.lang.LongInteger:asLong(self._timeStampAdded) end
end

function app.FacultyDatabase.Login:setTimeStampAdded(value)
	self._timeStampAdded = value
	do return self end
end

function app.FacultyDatabase.Login:getTimeStampAdded()
	do return self._timeStampAdded end
end

function app.FacultyDatabase.Login:setTimeStampLastUpdatedValue(value)
	do return self:setTimeStampLastUpdated(_g.jk.lang.LongInteger:asObject(value)) end
end

function app.FacultyDatabase.Login:getTimeStampLastUpdatedValue()
	do return _g.jk.lang.LongInteger:asLong(self._timeStampLastUpdated) end
end

function app.FacultyDatabase.Login:setTimeStampLastUpdated(value)
	self._timeStampLastUpdated = value
	do return self end
end

function app.FacultyDatabase.Login:getTimeStampLastUpdated()
	do return self._timeStampLastUpdated end
end

function app.FacultyDatabase.Login:toJsonObject()
	local v = _g.jk.lang.DynamicMap._construct0(_g.jk.lang.DynamicMap._create())
	if self._id ~= nil then
		do v:setObject("id", self:asJsonValue(self._id)) end
	end
	if self._fullname ~= nil then
		do v:setObject("fullname", self:asJsonValue(self._fullname)) end
	end
	if self._gender ~= nil then
		do v:setObject("gender", self:asJsonValue(self._gender)) end
	end
	if self._username ~= nil then
		do v:setObject("username", self:asJsonValue(self._username)) end
	end
	if self._password ~= nil then
		do v:setObject("password", self:asJsonValue(self._password)) end
	end
	if self._timeStampAdded ~= nil then
		do v:setObject("timeStampAdded", self:asJsonValue(self._timeStampAdded)) end
	end
	if self._timeStampLastUpdated ~= nil then
		do v:setObject("timeStampLastUpdated", self:asJsonValue(self._timeStampLastUpdated)) end
	end
	do return v end
end

function app.FacultyDatabase.Login:fromJsonObject(o)
	local v = _vm:to_table_with_key(o, '_isType.jk.lang.DynamicMap')
	if not (v ~= nil) then
		do return false end
	end
	self._id = v:getString("id", nil)
	self._fullname = v:getString("fullname", nil)
	self._gender = v:getString("gender", nil)
	self._username = v:getString("username", nil)
	self._password = v:getString("password", nil)
	if v:get("timeStampAdded") ~= nil then
		self._timeStampAdded = _g.jk.lang.LongInteger:asObject(v:getLongInteger("timeStampAdded", 0))
	end
	if v:get("timeStampLastUpdated") ~= nil then
		self._timeStampLastUpdated = _g.jk.lang.LongInteger:asObject(v:getLongInteger("timeStampLastUpdated", 0))
	end
	do return true end
end

function app.FacultyDatabase.Login:fromJsonString(o)
	do return self:fromJsonObject(_g.jk.json.JSONParser:parse(o)) end
end

function app.FacultyDatabase.Login:toJsonString()
	do return _g.jk.json.JSONEncoder:encode(self:toJsonObject(), true, false) end
end

function app.FacultyDatabase.Login:toString()
	do return self:toJsonString() end
end

function app.FacultyDatabase.Login:forJsonString(o)
	local v = _g.app.FacultyDatabase.Login._construct0(_g.app.FacultyDatabase.Login._create())
	if not v:fromJsonString(o) then
		do return nil end
	end
	do return v end
end

function app.FacultyDatabase.Login:forJsonObject(o)
	local v = _g.app.FacultyDatabase.Login._construct0(_g.app.FacultyDatabase.Login._create())
	if not v:fromJsonObject(o) then
		do return nil end
	end
	do return v end
end

function app.FacultyDatabase:forContext(ctx)
	local cstr = _g.jk.env.EnvironmentVariable:get("FacultyDatabase")
	do _g.jk.log.Log:debug(ctx, "Opening database connection: " .. _g.jk.lang.String:safeString(cstr) .. "'") end
	self.db = _g.jk.mysql.MySQLDatabase:forConnectionStringSync(ctx, cstr)
	if not (self.db ~= nil) then
		do _g.jk.lang.Error:throw("failedToConnectionToDatabase", cstr) end
	end
	do
		local v = _g.app.FacultyDatabase._construct0(_g.app.FacultyDatabase._create())
		do v:setDb(self.db) end
		do return v end
	end
end

function app.FacultyDatabase:updateTable(table)
	if not (table ~= nil) then
		do _g.jk.lang.Error:throw("nullTable", "updateTable") end
	end
	if not (self.db ~= nil) then
		do _g.jk.lang.Error:throw("nullDB", "updateTable") end
	end
	if not self.db:ensureTableExistsSync(table) then
		do _g.jk.lang.Error:throw("failedToUpdateTable", table:getName()) end
	end
end

function app.FacultyDatabase:updateInfoTables()
	local info = _g.jk.sql.SQLTableInfo:forName(_g.app.FacultyDatabase.INFO)
	do info:addStringKeyColumn("id") end
	do info:addStringColumn("firstname") end
	do info:addStringColumn("lastname") end
	do info:addStringColumn("contactnumber") end
	do info:addStringColumn("address") end
	do info:addStringColumn("username") end
	do info:addStringColumn("password") end
	do info:addStringColumn("firstnamedeceased") end
	do info:addStringColumn("lastnamedeceased") end
	do info:addStringColumn("currentdate") end
	do info:addStringColumn("burialdate") end
	do info:addStringColumn("servicetype") end
	do info:addStringColumn("serviceprice") end
	do info:addStringColumn("lotnumber") end
	do info:addLongColumn("timeStampAdded") end
	do info:addLongColumn("timeStampLastUpdated") end
	do self:updateTable(info) end
end

function app.FacultyDatabase:updateLoginTables()
	local login = _g.jk.sql.SQLTableInfo:forName(_g.app.FacultyDatabase.LOGIN)
	do login:addStringKeyColumn("id") end
	do login:addStringColumn("fullname") end
	do login:addStringColumn("gender") end
	do login:addStringColumn("username") end
	do login:addStringColumn("password") end
	do login:addLongColumn("timeStampAdded") end
	do login:addLongColumn("timeStampLastUpdated") end
	do self:updateTable(login) end
end

function app.FacultyDatabase:addInfo(info)
	if not (info ~= nil) then
		do return nil end
	end
	do info:setId("1") end
	do info:setTimeStampAddedValue(_g.jk.time.SystemClock:asUTCSeconds()) end
	if not self.db:executeSync(self.db:prepareInsertStatementSync(_g.app.FacultyDatabase.INFO, info:toDynamicMap())) then
		do return nil end
	end
	do return info end
end

function app.FacultyDatabase:updateInfo(id, info)
	if not (info ~= nil) then
		do return false end
	end
	do info:setTimeStampLastUpdatedValue(_g.jk.time.SystemClock:asUTCSeconds()) end
	do
		local criteria = _g.app.FacultyDatabase.Info._construct0(_g.app.FacultyDatabase.Info._create())
		do criteria:setId(id) end
		do return self.db:executeSync(self.db:prepareUpdateStatementSync(_g.app.FacultyDatabase.INFO, criteria:toDynamicMap(), info:toDynamicMap())) end
	end
end

function app.FacultyDatabase:deleteInfo(id)
	local criteria = _g.app.FacultyDatabase.Info._construct0(_g.app.FacultyDatabase.Info._create())
	do criteria:setId(id) end
	do return self.db:executeSync(self.db:prepareDeleteStatementSync(_g.app.FacultyDatabase.INFO, criteria:toDynamicMap())) end
end

function app.FacultyDatabase:getInfo()
	local v = {}
	local it = self.db:querySync(self.db:prepareQueryAllStatementSync(_g.app.FacultyDatabase.INFO, nil, nil))
	if not (it ~= nil) then
		do return nil end
	end
	while it ~= nil do
		local o = it:next()
		if not (o ~= nil) then
			do break end
		end
		do
			local info = _g.app.FacultyDatabase.Info:forJsonObject(o)
			if not (info ~= nil) then
				goto _continue1
			end
			do _g.jk.lang.Vector:append(v, info) end
		end
		::_continue1::
	end
	do
		local data = _g.jk.lang.DynamicMap._construct0(_g.jk.lang.DynamicMap._create())
		do data:setObject("records", v) end
		do return data end
	end
end

function app.FacultyDatabase:addlogin(login)
	if not (login ~= nil) then
		do return nil end
	end
	do login:setId("1") end
	do login:setTimeStampAddedValue(_g.jk.time.SystemClock:asUTCSeconds()) end
	if not self.db:executeSync(self.db:prepareInsertStatementSync(_g.app.FacultyDatabase.LOGIN, login:toDynamicMap())) then
		do return nil end
	end
	do return login end
end

function app.FacultyDatabase:updateLogin(id, login)
	if not (login ~= nil) then
		do return false end
	end
	do login:setTimeStampLastUpdatedValue(_g.jk.time.SystemClock:asUTCSeconds()) end
	do
		local criteria = _g.app.FacultyDatabase.Login._construct0(_g.app.FacultyDatabase.Login._create())
		do criteria:setId(id) end
		do return self.db:executeSync(self.db:prepareUpdateStatementSync(_g.app.FacultyDatabase.LOGIN, criteria:toDynamicMap(), login:toDynamicMap())) end
	end
end

function app.FacultyDatabase:deleteLogin(id)
	local criteria = _g.app.FacultyDatabase.Login._construct0(_g.app.FacultyDatabase.Login._create())
	do criteria:setId(id) end
	do return self.db:executeSync(self.db:prepareDeleteStatementSync(_g.app.FacultyDatabase.LOGIN, criteria:toDynamicMap())) end
end

function app.FacultyDatabase:getLogin()
	local v = {}
	local it = self.db:querySync(self.db:prepareQueryAllStatementSync(_g.app.FacultyDatabase.LOGIN, nil, nil))
	if not (it ~= nil) then
		do return nil end
	end
	while it ~= nil do
		local o = it:next()
		if not (o ~= nil) then
			do break end
		end
		do
			local login = _g.app.FacultyDatabase.Login:forJsonObject(o)
			if not (login ~= nil) then
				goto _continue2
			end
			do _g.jk.lang.Vector:append(v, login) end
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

app.FacultyApiHandler.InfoRequest = _g.jk.json.JSONObjectAdapter._create()
app.FacultyApiHandler.InfoRequest.__index = app.FacultyApiHandler.InfoRequest
_vm:set_metatable(app.FacultyApiHandler.InfoRequest, {
	__index = _g.jk.json.JSONObjectAdapter
})

function app.FacultyApiHandler.InfoRequest._create()
	local v = _vm:set_metatable({}, app.FacultyApiHandler.InfoRequest)
	return v
end

function app.FacultyApiHandler.InfoRequest:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.FacultyApiHandler.InfoRequest'
	self['_isType.app.FacultyApiHandler.InfoRequest'] = true
	self['_isType.jk.lang.StringObject'] = true
	self._firstname = nil
	self._lastname = nil
	self._contactnumber = nil
	self._address = nil
	self._username = nil
	self._password = nil
	self._firstnamedeceased = nil
	self._lastnamedeceased = nil
	self._currentdate = nil
	self._burialdate = nil
	self._servicetype = nil
	self._serviceprice = nil
	self._lotnumber = nil
end

function app.FacultyApiHandler.InfoRequest:_construct0()
	app.FacultyApiHandler.InfoRequest._init(self)
	do _g.jk.json.JSONObjectAdapter._construct0(self) end
	return self
end

function app.FacultyApiHandler.InfoRequest:setFirstname(value)
	self._firstname = value
	do return self end
end

function app.FacultyApiHandler.InfoRequest:getFirstname()
	do return self._firstname end
end

function app.FacultyApiHandler.InfoRequest:setLastname(value)
	self._lastname = value
	do return self end
end

function app.FacultyApiHandler.InfoRequest:getLastname()
	do return self._lastname end
end

function app.FacultyApiHandler.InfoRequest:setContactnumber(value)
	self._contactnumber = value
	do return self end
end

function app.FacultyApiHandler.InfoRequest:getContactnumber()
	do return self._contactnumber end
end

function app.FacultyApiHandler.InfoRequest:setAddress(value)
	self._address = value
	do return self end
end

function app.FacultyApiHandler.InfoRequest:getAddress()
	do return self._address end
end

function app.FacultyApiHandler.InfoRequest:setUsername(value)
	self._username = value
	do return self end
end

function app.FacultyApiHandler.InfoRequest:getUsername()
	do return self._username end
end

function app.FacultyApiHandler.InfoRequest:setPassword(value)
	self._password = value
	do return self end
end

function app.FacultyApiHandler.InfoRequest:getPassword()
	do return self._password end
end

function app.FacultyApiHandler.InfoRequest:setFirstnamedeceased(value)
	self._firstnamedeceased = value
	do return self end
end

function app.FacultyApiHandler.InfoRequest:getFirstnamedeceased()
	do return self._firstnamedeceased end
end

function app.FacultyApiHandler.InfoRequest:setLastnamedeceased(value)
	self._lastnamedeceased = value
	do return self end
end

function app.FacultyApiHandler.InfoRequest:getLastnamedeceased()
	do return self._lastnamedeceased end
end

function app.FacultyApiHandler.InfoRequest:setCurrentdate(value)
	self._currentdate = value
	do return self end
end

function app.FacultyApiHandler.InfoRequest:getCurrentdate()
	do return self._currentdate end
end

function app.FacultyApiHandler.InfoRequest:setBurialdate(value)
	self._burialdate = value
	do return self end
end

function app.FacultyApiHandler.InfoRequest:getBurialdate()
	do return self._burialdate end
end

function app.FacultyApiHandler.InfoRequest:setServicetype(value)
	self._servicetype = value
	do return self end
end

function app.FacultyApiHandler.InfoRequest:getServicetype()
	do return self._servicetype end
end

function app.FacultyApiHandler.InfoRequest:setServiceprice(value)
	self._serviceprice = value
	do return self end
end

function app.FacultyApiHandler.InfoRequest:getServiceprice()
	do return self._serviceprice end
end

function app.FacultyApiHandler.InfoRequest:setLotnumber(value)
	self._lotnumber = value
	do return self end
end

function app.FacultyApiHandler.InfoRequest:getLotnumber()
	do return self._lotnumber end
end

function app.FacultyApiHandler.InfoRequest:toJsonObject()
	local v = _g.jk.lang.DynamicMap._construct0(_g.jk.lang.DynamicMap._create())
	if self._firstname ~= nil then
		do v:setObject("firstname", self:asJsonValue(self._firstname)) end
	end
	if self._lastname ~= nil then
		do v:setObject("lastname", self:asJsonValue(self._lastname)) end
	end
	if self._contactnumber ~= nil then
		do v:setObject("contactnumber", self:asJsonValue(self._contactnumber)) end
	end
	if self._address ~= nil then
		do v:setObject("address", self:asJsonValue(self._address)) end
	end
	if self._username ~= nil then
		do v:setObject("username", self:asJsonValue(self._username)) end
	end
	if self._password ~= nil then
		do v:setObject("password", self:asJsonValue(self._password)) end
	end
	if self._firstnamedeceased ~= nil then
		do v:setObject("firstnamedeceased", self:asJsonValue(self._firstnamedeceased)) end
	end
	if self._lastnamedeceased ~= nil then
		do v:setObject("lastnamedeceased", self:asJsonValue(self._lastnamedeceased)) end
	end
	if self._currentdate ~= nil then
		do v:setObject("currentdate", self:asJsonValue(self._currentdate)) end
	end
	if self._burialdate ~= nil then
		do v:setObject("burialdate", self:asJsonValue(self._burialdate)) end
	end
	if self._servicetype ~= nil then
		do v:setObject("servicetype", self:asJsonValue(self._servicetype)) end
	end
	if self._serviceprice ~= nil then
		do v:setObject("serviceprice", self:asJsonValue(self._serviceprice)) end
	end
	if self._lotnumber ~= nil then
		do v:setObject("lotnumber", self:asJsonValue(self._lotnumber)) end
	end
	do return v end
end

function app.FacultyApiHandler.InfoRequest:fromJsonObject(o)
	local v = _vm:to_table_with_key(o, '_isType.jk.lang.DynamicMap')
	if not (v ~= nil) then
		do return false end
	end
	self._firstname = v:getString("firstname", nil)
	self._lastname = v:getString("lastname", nil)
	self._contactnumber = v:getString("contactnumber", nil)
	self._address = v:getString("address", nil)
	self._username = v:getString("username", nil)
	self._password = v:getString("password", nil)
	self._firstnamedeceased = v:getString("firstnamedeceased", nil)
	self._lastnamedeceased = v:getString("lastnamedeceased", nil)
	self._currentdate = v:getString("currentdate", nil)
	self._burialdate = v:getString("burialdate", nil)
	self._servicetype = v:getString("servicetype", nil)
	self._serviceprice = v:getString("serviceprice", nil)
	self._lotnumber = v:getString("lotnumber", nil)
	do return true end
end

function app.FacultyApiHandler.InfoRequest:fromJsonString(o)
	do return self:fromJsonObject(_g.jk.json.JSONParser:parse(o)) end
end

function app.FacultyApiHandler.InfoRequest:toJsonString()
	do return _g.jk.json.JSONEncoder:encode(self:toJsonObject(), true, false) end
end

function app.FacultyApiHandler.InfoRequest:toString()
	do return self:toJsonString() end
end

function app.FacultyApiHandler.InfoRequest:forJsonString(o)
	local v = _g.app.FacultyApiHandler.InfoRequest._construct0(_g.app.FacultyApiHandler.InfoRequest._create())
	if not v:fromJsonString(o) then
		do return nil end
	end
	do return v end
end

function app.FacultyApiHandler.InfoRequest:forJsonObject(o)
	local v = _g.app.FacultyApiHandler.InfoRequest._construct0(_g.app.FacultyApiHandler.InfoRequest._create())
	if not v:fromJsonObject(o) then
		do return nil end
	end
	do return v end
end

app.FacultyApiHandler.LoginRequest = _g.jk.json.JSONObjectAdapter._create()
app.FacultyApiHandler.LoginRequest.__index = app.FacultyApiHandler.LoginRequest
_vm:set_metatable(app.FacultyApiHandler.LoginRequest, {
	__index = _g.jk.json.JSONObjectAdapter
})

function app.FacultyApiHandler.LoginRequest._create()
	local v = _vm:set_metatable({}, app.FacultyApiHandler.LoginRequest)
	return v
end

function app.FacultyApiHandler.LoginRequest:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.FacultyApiHandler.LoginRequest'
	self['_isType.app.FacultyApiHandler.LoginRequest'] = true
	self['_isType.jk.lang.StringObject'] = true
	self._fullname = nil
	self._gender = nil
	self._username = nil
	self._password = nil
end

function app.FacultyApiHandler.LoginRequest:_construct0()
	app.FacultyApiHandler.LoginRequest._init(self)
	do _g.jk.json.JSONObjectAdapter._construct0(self) end
	return self
end

function app.FacultyApiHandler.LoginRequest:setFullname(value)
	self._fullname = value
	do return self end
end

function app.FacultyApiHandler.LoginRequest:getFullname()
	do return self._fullname end
end

function app.FacultyApiHandler.LoginRequest:setGender(value)
	self._gender = value
	do return self end
end

function app.FacultyApiHandler.LoginRequest:getGender()
	do return self._gender end
end

function app.FacultyApiHandler.LoginRequest:setUsername(value)
	self._username = value
	do return self end
end

function app.FacultyApiHandler.LoginRequest:getUsername()
	do return self._username end
end

function app.FacultyApiHandler.LoginRequest:setPassword(value)
	self._password = value
	do return self end
end

function app.FacultyApiHandler.LoginRequest:getPassword()
	do return self._password end
end

function app.FacultyApiHandler.LoginRequest:toJsonObject()
	local v = _g.jk.lang.DynamicMap._construct0(_g.jk.lang.DynamicMap._create())
	if self._fullname ~= nil then
		do v:setObject("fullname", self:asJsonValue(self._fullname)) end
	end
	if self._gender ~= nil then
		do v:setObject("gender", self:asJsonValue(self._gender)) end
	end
	if self._username ~= nil then
		do v:setObject("username", self:asJsonValue(self._username)) end
	end
	if self._password ~= nil then
		do v:setObject("password", self:asJsonValue(self._password)) end
	end
	do return v end
end

function app.FacultyApiHandler.LoginRequest:fromJsonObject(o)
	local v = _vm:to_table_with_key(o, '_isType.jk.lang.DynamicMap')
	if not (v ~= nil) then
		do return false end
	end
	self._fullname = v:getString("fullname", nil)
	self._gender = v:getString("gender", nil)
	self._username = v:getString("username", nil)
	self._password = v:getString("password", nil)
	do return true end
end

function app.FacultyApiHandler.LoginRequest:fromJsonString(o)
	do return self:fromJsonObject(_g.jk.json.JSONParser:parse(o)) end
end

function app.FacultyApiHandler.LoginRequest:toJsonString()
	do return _g.jk.json.JSONEncoder:encode(self:toJsonObject(), true, false) end
end

function app.FacultyApiHandler.LoginRequest:toString()
	do return self:toJsonString() end
end

function app.FacultyApiHandler.LoginRequest:forJsonString(o)
	local v = _g.app.FacultyApiHandler.LoginRequest._construct0(_g.app.FacultyApiHandler.LoginRequest._create())
	if not v:fromJsonString(o) then
		do return nil end
	end
	do return v end
end

function app.FacultyApiHandler.LoginRequest:forJsonObject(o)
	local v = _g.app.FacultyApiHandler.LoginRequest._construct0(_g.app.FacultyApiHandler.LoginRequest._create())
	if not v:fromJsonObject(o) then
		do return nil end
	end
	do return v end
end

function app.FacultyApiHandler:getInfoDatabase()
	if not (self.db ~= nil) then
		self.db = _g.app.FacultyDatabase:forContext(self:getCtx())
		do self.db:updateInfoTables() end
	end
	do return self.db end
end

function app.FacultyApiHandler:getLoginDatabase()
	if not (self.db ~= nil) then
		self.db = _g.app.FacultyDatabase:forContext(self:getCtx())
		do self.db:updateLoginTables() end
	end
	do return self.db end
end

function app.FacultyApiHandler:postProcess(req, resp)
	do self.cors:handleWorkerRequest(req, resp) end
end

function app.FacultyApiHandler:initRoutes()
	do _g.jk.http.worker.HTTPRPCRouter.initRoutes(self) end
	do self:addRoute("GET", "/info", function(req, resp, vars)
		local info = self:getInfoDatabase():getInfo()
		if not (info ~= nil) then
			do return end
		end
		do self:setOkResponse(resp, info) end
	end) end
	do self:addRoute("POST", "/info", function(req, resp, vars)
		local requestData = _g.app.FacultyApiHandler.InfoRequest:forJsonString(req:getBodyString())
		if not (requestData ~= nil) then
			do return end
		end
		do self:setErrorResponse(resp, "invalidRequestInfo", "500") end
		do
			local info = _g.app.FacultyDatabase.Info._construct0(_g.app.FacultyDatabase.Info._create())
			do info:setFirstname(requestData:getFirstname()) end
			do info:setLastname(requestData:getLastname()) end
			do info:setContactnumber(requestData:getContactnumber()) end
			do info:setAddress(requestData:getAddress()) end
			do info:setUsername(requestData:getUsername()) end
			do info:setPassword(requestData:getPassword()) end
			do info:setFirstnamedeceased(requestData:getFirstnamedeceased()) end
			do info:setLastnamedeceased(requestData:getLastnamedeceased()) end
			do info:setCurrentdate(requestData:getCurrentdate()) end
			do info:setBurialdate(requestData:getBurialdate()) end
			do info:setServicetype(requestData:getServicetype()) end
			do info:setServiceprice(requestData:getServiceprice()) end
			do info:setLotnumber(requestData:getLotnumber()) end
			if not (self:getInfoDatabase():addInfo(info) ~= nil) then
				do self:setErrorResponse(resp, "failedToSaveInfo", "500") end
				do return end
			end
			do self:setOkResponse(resp, nil) end
		end
	end) end
	do self:addRoute("PUT", "/info/:id", function(req, resp, vars)
		local requestData = _g.app.FacultyApiHandler.InfoRequest:forJsonString(req:getBodyString())
		if not (requestData ~= nil) then
			do self:setErrorResponse(resp, "invalidRequest", "500") end
			do return end
		end
		do
			local info = _g.app.FacultyDatabase.Info._construct0(_g.app.FacultyDatabase.Info._create())
			do info:setFirstname(requestData:getFirstname()) end
			do info:setLastname(requestData:getLastname()) end
			do info:setContactnumber(requestData:getContactnumber()) end
			do info:setAddress(requestData:getAddress()) end
			do info:setUsername(requestData:getUsername()) end
			do info:setPassword(requestData:getPassword()) end
			do info:setFirstnamedeceased(requestData:getFirstnamedeceased()) end
			do info:setLastnamedeceased(requestData:getLastnamedeceased()) end
			do info:setCurrentdate(requestData:getCurrentdate()) end
			do info:setBurialdate(requestData:getBurialdate()) end
			do info:setServicetype(requestData:getServicetype()) end
			do info:setServiceprice(requestData:getServiceprice()) end
			do info:setLotnumber(requestData:getLotnumber()) end
			if not self:getInfoDatabase():updateInfo(vars:getString("id", nil), info) then
				do self:setErrorResponse(resp, "FailedUpdateinfo", "500") end
				do return end
			end
			do self:setOkResponse(resp, nil) end
		end
	end) end
	do self:addRoute("DELETE", "/info/:id", function(req, resp, vars)
		if not self:getInfoDatabase():deleteInfo(vars:getString("id", nil)) then
			do self:setErrorResponse(resp, "failedToDeleteinfo", "500") end
			do return end
		end
		do self:setOkResponse(resp, nil) end
	end) end
	do self:addRoute("GET", "/login", function(req, resp, vars)
		local login = self:getLoginDatabase():getLogin()
		if not (login ~= nil) then
			do return end
		end
		do self:setOkResponse(resp, login) end
	end) end
	do self:addRoute("POST", "/login", function(req, resp, vars)
		local requestData = _g.app.FacultyApiHandler.LoginRequest:forJsonString(req:getBodyString())
		if not (requestData ~= nil) then
			do self:setErrorResponse(resp, "invalidRequestlogin", "500") end
			do return end
		end
		do
			local login = _g.app.FacultyDatabase.Login._construct0(_g.app.FacultyDatabase.Login._create())
			do login:setFullname(requestData:getFullname()) end
			do login:setGender(requestData:getGender()) end
			do login:setUsername(requestData:getUsername()) end
			do login:setPassword(requestData:getPassword()) end
			if not (self:getLoginDatabase():addlogin(login) ~= nil) then
				do self:setErrorResponse(resp, "failedToAddlogin", "500") end
				do return end
			end
			do self:setOkResponse(resp, nil) end
		end
	end) end
	do self:addRoute("PUT", "/login/:id", function(req, resp, vars)
		local requestData = _g.app.FacultyApiHandler.LoginRequest:forJsonString(req:getBodyString())
		if not (requestData ~= nil) then
			do self:setErrorResponse(resp, "invalidRequestLogin", "500") end
			do return end
		end
		do
			local login = _g.app.FacultyDatabase.Login._construct0(_g.app.FacultyDatabase.Login._create())
			do login:setFullname(requestData:getFullname()) end
			do login:setGender(requestData:getGender()) end
			do login:setUsername(requestData:getUsername()) end
			do login:setPassword(requestData:getPassword()) end
			if not self:getLoginDatabase():updateLogin(vars:getString("id", nil), login) then
				do self:setErrorResponse(resp, "failedToAddLogin", "500") end
				do return end
			end
			do self:setOkResponse(resp, nil) end
		end
	end) end
	do self:addRoute("DELETE", "/login/:id", function(req, resp, vars)
		if not self:getLoginDatabase():deleteLogin(vars:getString("id", nil)) then
			do self:setErrorResponse(resp, "failedToDeletelogin", "500") end
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
		"http://ec2-13-250-10-234.ap-southeast-1.compute.amazonaws.com:30121"
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
		do db:updateInfoTables() end
		do db:updateLoginTables() end
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

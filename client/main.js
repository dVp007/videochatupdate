(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./sdk/index.ts":
/*!**********************!*\
  !*** ./sdk/index.ts ***!
  \**********************/
/*! exports provided: SDKBrowserModule, CookieBrowser, StorageBrowser, LoopBackConfig, BaseStorage, InternalStorage, SDKStorage, UserDetails, AccessToken, SDKToken, FireLoopRef, LoopBackAuth, ErrorHandler, RealTime, UserDetailsApi, SDKModels, LoggerService, BaseLoopBackApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDKBrowserModule", function() { return SDKBrowserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_core_error_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/core/error.service */ "./sdk/services/core/error.service.ts");
/* harmony import */ var _services_core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/core/auth.service */ "./sdk/services/core/auth.service.ts");
/* harmony import */ var _services_custom_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/custom/logger.service */ "./sdk/services/custom/logger.service.ts");
/* harmony import */ var _services_custom_SDKModels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/custom/SDKModels */ "./sdk/services/custom/SDKModels.ts");
/* harmony import */ var _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage/storage.swaps */ "./sdk/storage/storage.swaps.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage_cookie_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./storage/cookie.browser */ "./sdk/storage/cookie.browser.ts");
/* harmony import */ var _storage_storage_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./storage/storage.browser */ "./sdk/storage/storage.browser.ts");
/* harmony import */ var _sockets_socket_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sockets/socket.browser */ "./sdk/sockets/socket.browser.ts");
/* harmony import */ var _sockets_socket_driver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sockets/socket.driver */ "./sdk/sockets/socket.driver.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sockets/socket.connections */ "./sdk/sockets/socket.connections.ts");
/* harmony import */ var _services_core_real_time__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/core/real.time */ "./sdk/services/core/real.time.ts");
/* harmony import */ var _services_custom_UserDetails__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/custom/UserDetails */ "./sdk/services/custom/UserDetails.ts");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./models/index */ "./sdk/models/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserDetails", function() { return _models_index__WEBPACK_IMPORTED_MODULE_16__["UserDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessToken", function() { return _models_index__WEBPACK_IMPORTED_MODULE_16__["AccessToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKToken", function() { return _models_index__WEBPACK_IMPORTED_MODULE_16__["SDKToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FireLoopRef", function() { return _models_index__WEBPACK_IMPORTED_MODULE_16__["FireLoopRef"]; });

/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/index */ "./sdk/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoopBackAuth", function() { return _services_index__WEBPACK_IMPORTED_MODULE_17__["LoopBackAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return _services_index__WEBPACK_IMPORTED_MODULE_17__["ErrorHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RealTime", function() { return _services_index__WEBPACK_IMPORTED_MODULE_17__["RealTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserDetailsApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_17__["UserDetailsApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKModels", function() { return _services_index__WEBPACK_IMPORTED_MODULE_17__["SDKModels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return _services_index__WEBPACK_IMPORTED_MODULE_17__["LoggerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLoopBackApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_17__["BaseLoopBackApi"]; });

/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lb.config */ "./sdk/lb.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoopBackConfig", function() { return _lb_config__WEBPACK_IMPORTED_MODULE_18__["LoopBackConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseStorage", function() { return _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_5__["BaseStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InternalStorage", function() { return _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_5__["InternalStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKStorage", function() { return _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_5__["SDKStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CookieBrowser", function() { return _storage_cookie_browser__WEBPACK_IMPORTED_MODULE_9__["CookieBrowser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StorageBrowser", function() { return _storage_storage_browser__WEBPACK_IMPORTED_MODULE_10__["StorageBrowser"]; });


/* tslint:disable */
/**
* @module SDKModule
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathan-casarrubias>
* @license MIT 2016 Jonathan Casarrubias
* @version 2.1.0
* @description
* The SDKModule is a generated Software Development Kit automatically built by
* the LoopBack SDK Builder open source module.
*
* The SDKModule provides Angular 2 >= RC.5 support, which means that NgModules
* can import this Software Development Kit as follows:
*
*
* APP Route Module Context
* ============================================================================
* import { NgModule }       from '@angular/core';
* import { BrowserModule }  from '@angular/platform-browser';
* // App Root
* import { AppComponent }   from './app.component';
* // Feature Modules
* import { SDK[Browser|Node|Native]Module } from './shared/sdk/sdk.module';
* // Import Routing
* import { routing }        from './app.routing';
* @NgModule({
*  imports: [
*    BrowserModule,
*    routing,
*    SDK[Browser|Node|Native]Module.forRoot()
*  ],
*  declarations: [ AppComponent ],
*  bootstrap:    [ AppComponent ]
* })
* export class AppModule { }
*
**/















/**
* @module SDKBrowserModule
* @description
* This module should be imported when building a Web Application in the following scenarios:
*
*  1.- Regular web application
*  2.- Angular universal application (Browser Portion)
*  3.- Progressive applications (Angular Mobile, Ionic, WebViews, etc)
**/
var SDKBrowserModule = /** @class */ (function () {
    function SDKBrowserModule() {
    }
    SDKBrowserModule_1 = SDKBrowserModule;
    SDKBrowserModule.forRoot = function (internalStorageProvider) {
        if (internalStorageProvider === void 0) { internalStorageProvider = {
            provide: _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_5__["InternalStorage"],
            useClass: _storage_cookie_browser__WEBPACK_IMPORTED_MODULE_9__["CookieBrowser"]
        }; }
        return {
            ngModule: SDKBrowserModule_1,
            providers: [
                _services_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["LoopBackAuth"],
                _services_custom_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"],
                _services_custom_SDKModels__WEBPACK_IMPORTED_MODULE_4__["SDKModels"],
                _services_core_real_time__WEBPACK_IMPORTED_MODULE_14__["RealTime"],
                _services_custom_UserDetails__WEBPACK_IMPORTED_MODULE_15__["UserDetailsApi"],
                internalStorageProvider,
                { provide: _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_5__["SDKStorage"], useClass: _storage_storage_browser__WEBPACK_IMPORTED_MODULE_10__["StorageBrowser"] },
                { provide: _sockets_socket_driver__WEBPACK_IMPORTED_MODULE_12__["SocketDriver"], useClass: _sockets_socket_browser__WEBPACK_IMPORTED_MODULE_11__["SocketBrowser"] }
            ]
        };
    };
    var SDKBrowserModule_1;
    SDKBrowserModule = SDKBrowserModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]],
            declarations: [],
            exports: [],
            providers: [
                _services_core_error_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"],
                _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_13__["SocketConnection"]
            ]
        })
    ], SDKBrowserModule);
    return SDKBrowserModule;
}());

/**
* Have Fun!!!
* - Jon
**/








/***/ }),

/***/ "./sdk/lb.config.ts":
/*!**************************!*\
  !*** ./sdk/lb.config.ts ***!
  \**************************/
/*! exports provided: LoopBackConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoopBackConfig", function() { return LoopBackConfig; });
/* tslint:disable */
/**
* @module LoopBackConfig
* @description
*
* The LoopBackConfig module help developers to externally
* configure the base url and api version for loopback.io
*
* Example
*
* import { LoopBackConfig } from './sdk';
*
* @Component() // No metadata needed for this module
*
* export class MyApp {
*   constructor() {
*     LoopBackConfig.setBaseURL('http://localhost:3000');
*     LoopBackConfig.setApiVersion('api');
*   }
* }
**/
var LoopBackConfig = /** @class */ (function () {
    function LoopBackConfig() {
    }
    LoopBackConfig.setApiVersion = function (version) {
        if (version === void 0) { version = 'api'; }
        LoopBackConfig.version = version;
    };
    LoopBackConfig.getApiVersion = function () {
        return LoopBackConfig.version;
    };
    LoopBackConfig.setBaseURL = function (url) {
        if (url === void 0) { url = '/'; }
        LoopBackConfig.path = url;
    };
    LoopBackConfig.getPath = function () {
        return LoopBackConfig.path;
    };
    LoopBackConfig.setAuthPrefix = function (authPrefix) {
        if (authPrefix === void 0) { authPrefix = ''; }
        LoopBackConfig.authPrefix = authPrefix;
    };
    LoopBackConfig.getAuthPrefix = function () {
        return LoopBackConfig.authPrefix;
    };
    LoopBackConfig.setDebugMode = function (isEnabled) {
        LoopBackConfig.debug = isEnabled;
    };
    LoopBackConfig.debuggable = function () {
        return LoopBackConfig.debug;
    };
    LoopBackConfig.filterOnUrl = function () {
        LoopBackConfig.filterOn = 'url';
    };
    LoopBackConfig.filterOnHeaders = function () {
        LoopBackConfig.filterOn = 'headers';
    };
    LoopBackConfig.whereOnUrl = function () {
        LoopBackConfig.whereOn = 'url';
    };
    LoopBackConfig.whereOnHeaders = function () {
        LoopBackConfig.whereOn = 'headers';
    };
    LoopBackConfig.isHeadersFilteringSet = function () {
        return (LoopBackConfig.filterOn === 'headers');
    };
    LoopBackConfig.isHeadersWhereSet = function () {
        return (LoopBackConfig.whereOn === 'headers');
    };
    LoopBackConfig.setSecureWebSockets = function () {
        LoopBackConfig.secure = true;
    };
    LoopBackConfig.unsetSecureWebSockets = function () {
        LoopBackConfig.secure = false;
    };
    LoopBackConfig.isSecureWebSocketsSet = function () {
        return LoopBackConfig.secure;
    };
    LoopBackConfig.setRequestOptionsCredentials = function (withCredentials) {
        if (withCredentials === void 0) { withCredentials = false; }
        LoopBackConfig.withCredentials = withCredentials;
    };
    LoopBackConfig.getRequestOptionsCredentials = function () {
        return LoopBackConfig.withCredentials;
    };
    LoopBackConfig.path = '//0.0.0.0:3000';
    LoopBackConfig.version = 'api';
    LoopBackConfig.authPrefix = '';
    LoopBackConfig.debug = true;
    LoopBackConfig.filterOn = 'headers';
    LoopBackConfig.whereOn = 'headers';
    LoopBackConfig.secure = false;
    LoopBackConfig.withCredentials = false;
    return LoopBackConfig;
}());



/***/ }),

/***/ "./sdk/models/BaseModels.ts":
/*!**********************************!*\
  !*** ./sdk/models/BaseModels.ts ***!
  \**********************************/
/*! exports provided: AccessToken, SDKToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessToken", function() { return AccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDKToken", function() { return SDKToken; });
/* tslint:disable */
var AccessToken = /** @class */ (function () {
    function AccessToken(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `AccessToken`.
     */
    AccessToken.getModelName = function () {
        return "AccessToken";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of AccessToken for dynamic purposes.
    **/
    AccessToken.factory = function (data) {
        return new AccessToken(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    AccessToken.getModelDefinition = function () {
        return {
            name: 'AccessToken',
            plural: 'AccessTokens',
            properties: {
                "id": {
                    name: 'id',
                    type: 'string'
                },
                "ttl": {
                    name: 'ttl',
                    type: 'number',
                    default: 1209600
                },
                "scopes": {
                    name: 'scopes',
                    type: '["string"]'
                },
                "created": {
                    name: 'created',
                    type: 'Date'
                },
                "userId": {
                    name: 'userId',
                    type: 'string'
                },
            },
            relations: {
                user: {
                    name: 'user',
                    type: 'User',
                    model: 'User'
                },
            }
        };
    };
    return AccessToken;
}());

var SDKToken = /** @class */ (function () {
    function SDKToken(data) {
        this.id = null;
        this.ttl = null;
        this.scopes = null;
        this.created = null;
        this.userId = null;
        this.user = null;
        this.rememberMe = null;
        Object.assign(this, data);
    }
    return SDKToken;
}());



/***/ }),

/***/ "./sdk/models/FireLoop.ts":
/*!********************************!*\
  !*** ./sdk/models/FireLoop.ts ***!
  \********************************/
/*! exports provided: FireLoop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireLoop", function() { return FireLoop; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./sdk/models/index.ts");
/* tslint:disable */

var FireLoop = /** @class */ (function () {
    function FireLoop(socket, models) {
        this.socket = socket;
        this.models = models;
        this.references = {};
    }
    FireLoop.prototype.ref = function (model) {
        var name = model.getModelName();
        model.models = this.models;
        this.references[name] = new _index__WEBPACK_IMPORTED_MODULE_0__["FireLoopRef"](model, this.socket);
        return this.references[name];
    };
    return FireLoop;
}());



/***/ }),

/***/ "./sdk/models/FireLoopRef.ts":
/*!***********************************!*\
  !*** ./sdk/models/FireLoopRef.ts ***!
  \***********************************/
/*! exports provided: FireLoopRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireLoopRef", function() { return FireLoopRef; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* tslint:disable */


/**
 * @class FireLoopRef<T>
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * This class allows to create FireLoop References which will be in sync with
 * Server. It also allows to create FireLoop Reference Childs, that allows to
 * persist data according the generic model relationships.
 **/
var FireLoopRef = /** @class */ (function () {
    /**
    * @method constructor
    * @param {any} model The model we want to create a reference
    * @param {SocketConnection} socket Socket connection to handle events
    * @param {FireLoopRef<any>} parent Parent FireLoop model reference
    * @param {string} relationship The defined model relationship
    * @description
    * The constructor will receive the required parameters and then will register this reference
    * into the server, needed to allow multiple references for the same model.
    * This ids are referenced into this specific client connection and won't have issues
    * with other client ids.
    **/
    function FireLoopRef(model, socket, parent, relationship) {
        if (parent === void 0) { parent = null; }
        if (relationship === void 0) { relationship = null; }
        this.model = model;
        this.socket = socket;
        this.parent = parent;
        this.relationship = relationship;
        // Reference ID
        this.id = this.buildId();
        // Model Childs
        this.childs = {};
        // Disposable Events
        this.disposable = {};
        this.socket.emit("Subscribe." + (!parent ? model.getModelName() : parent.model.getModelName()), { id: this.id, scope: model.getModelName(), relationship: relationship });
        return this;
    }
    /**
    * @method dispose
    * @return {void}
    * @description
    * This method is super important to avoid memory leaks in the server.
    * This method requires to be called on components destroy
    *
    * ngOnDestroy() {
    *  this.someRef.dispose()
    * }
    **/
    FireLoopRef.prototype.dispose = function () {
        var _this = this;
        var subscription = this.operation('dispose', {}).subscribe(function () {
            Object.keys(_this.disposable).forEach(function (channel) {
                _this.socket.removeListener(channel, _this.disposable[channel]);
                _this.socket.removeAllListeners(channel);
            });
            subscription.unsubscribe();
        });
    };
    /**
    * @method upsert
    * @param {T} data Persisted model instance
    * @return {Observable<T>}
    * @description
    * Operation wrapper for upsert function.
    **/
    FireLoopRef.prototype.upsert = function (data) {
        return this.operation('upsert', data);
    };
    /**
    * @method create
    * @param {T} data Persisted model instance
    * @return {Observable<T>}
    * @description
    * Operation wrapper for create function.
    **/
    FireLoopRef.prototype.create = function (data) {
        return this.operation('create', data);
    };
    /**
    * @method remove
    * @param {T} data Persisted model instance
    * @return {Observable<T>}
    * @description
    * Operation wrapper for remove function.
    **/
    FireLoopRef.prototype.remove = function (data) {
        return this.operation('remove', data);
    };
    /**
    * @method remote
    * @param {string} method Remote method name
    * @param {any[]=} params Parameters to be applied into the remote method
    * @param {boolean} broadcast Flag to define if the method results should be broadcasted
    * @return {Observable<any>}
    * @description
    * This method calls for any remote method. It is flexible enough to
    * allow you call either built-in or custom remote methods.
    *
    * FireLoop provides this interface to enable calling remote methods
    * but also to optionally send any defined accept params that will be
    * applied within the server.
    **/
    FireLoopRef.prototype.remote = function (method, params, broadcast) {
        if (broadcast === void 0) { broadcast = false; }
        return this.operation('remote', { method: method, params: params, broadcast: broadcast });
    };
    /**
    * @method onRemote
    * @param {string} method Remote method name
    * @return {Observable<any>}
    * @description
    * This method listen for public broadcasted remote method results. If the remote method
    * execution is not public only the owner will receive the result data.
    **/
    FireLoopRef.prototype.onRemote = function (method) {
        var event = 'remote';
        if (!this.relationship) {
            event = this.model.getModelName() + "." + event;
        }
        else {
            event = this.parent.model.getModelName() + "." + this.relationship + "." + event;
        }
        return this.broadcasts(event, {});
    };
    /**
    * @method on
    * @param {string} event Event name
    * @param {LoopBackFilter} filter LoopBack query filter
    * @return {Observable<T>}
    * @description
    * Listener for different type of events. Valid events are:
    *   - change (Triggers on any model change -create, update, remove-)
    *   - value (Triggers on new entries)
    *   - child_added (Triggers when a child is added)
    *   - child_updated (Triggers when a child is updated)
    *   - child_removed (Triggers when a child is removed)
    **/
    FireLoopRef.prototype.on = function (event, filter) {
        if (filter === void 0) { filter = { limit: 100, order: 'id DESC' }; }
        if (event === 'remote') {
            throw new Error('The "remote" event is not allowed using "on()" method, use "onRemote()" instead');
        }
        var request;
        if (!this.relationship) {
            event = this.model.getModelName() + "." + event;
            request = { filter: filter };
        }
        else {
            event = this.parent.model.getModelName() + "." + this.relationship + "." + event;
            request = { filter: filter, parent: this.parent.instance };
        }
        if (event.match(/(value|change|stats)/)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(this.pull(event, request), this.broadcasts(event, request));
        }
        else {
            return this.broadcasts(event, request);
        }
    };
    /**
    * @method stats
    * @param {LoopBackFilter=} filter LoopBack query filter
    * @return {Observable<T>}
    * @description
    * Listener for real-time statistics, will trigger on every
    * statistic modification.
    * TIP: You can improve performance by adding memcached to LoopBack models.
    **/
    FireLoopRef.prototype.stats = function (filter) {
        return this.on('stats', filter);
    };
    /**
    * @method make
    * @param {any} instance Persisted model instance reference
    * @return {Observable<T>}
    * @description
    * This method will set a model instance into this a new FireLoop Reference.
    * This allows to persiste parentship when creating related instances.
    *
    * It also allows to have multiple different persisted instance references to same model.
    * otherwise if using singleton will replace a previous instance for a new instance, when
    * we actually want to have more than 1 instance of same model.
    **/
    FireLoopRef.prototype.make = function (instance) {
        var reference = new FireLoopRef(this.model, this.socket);
        reference.instance = instance;
        return reference;
    };
    /**
    * @method child
    * @param {string} relationship A defined model relationship
    * @return {FireLoopRef<T>}
    * @description
    * This method creates child references, which will persist related model
    * instances. e.g. Room.messages, where messages belongs to a specific Room.
    **/
    FireLoopRef.prototype.child = function (relationship) {
        // Return singleton instance
        if (this.childs[relationship]) {
            return this.childs[relationship];
        }
        // Try to get relation settings from current model
        var settings = this.model.getModelDefinition().relations[relationship];
        // Verify the relationship actually exists
        if (!settings) {
            throw new Error("Invalid model relationship " + this.model.getModelName() + " <-> " + relationship + ", verify your model settings.");
        }
        // Verify if the relationship model is public
        if (settings.model === '') {
            throw new Error("Relationship model is private, cam't use " + relationship + " unless you set your model as public.");
        }
        // Lets get a model reference and add a reference for all of the models
        var model = this.model.models.get(settings.model);
        model.models = this.model.models;
        // If everything goes well, we will store a child reference and return it.
        this.childs[relationship] = new FireLoopRef(model, this.socket, this, relationship);
        return this.childs[relationship];
    };
    /**
    * @method pull
    * @param {string} event Event name
    * @param {any} request Type of request, can be LB-only filter or FL+LB filter
    * @return {Observable<T>}
    * @description
    * This method will pull initial data from server
    **/
    FireLoopRef.prototype.pull = function (event, request) {
        var sbj = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        var that = this;
        var nowEvent = event + ".pull.requested." + this.id;
        this.socket.emit(event + ".pull.request." + this.id, request);
        function pullNow(data) {
            if (that.socket.removeListener) {
                that.socket.removeListener(nowEvent, pullNow);
            }
            sbj.next(data);
        }
        ;
        this.socket.on(nowEvent, pullNow);
        return sbj.asObservable();
    };
    /**
    * @method broadcasts
    * @param {string} event Event name
    * @param {any} request Type of request, can be LB-only filter or FL+LB filter
    * @return {Observable<T>}
    * @description
    * This will listen for public broadcasts announces and then request
    * for data according a specific client request, not shared with other clients.
    **/
    FireLoopRef.prototype.broadcasts = function (event, request) {
        var sbj = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        var channels = {
            announce: event + ".broadcast.announce." + this.id,
            broadcast: event + ".broadcast." + this.id
        };
        var that = this;
        // Announces Handler
        this.disposable[channels.announce] = function (res) {
            that.socket.emit(event + ".broadcast.request." + that.id, request);
        };
        // Broadcasts Handler
        this.disposable[channels.broadcast] = function (data) {
            sbj.next(data);
        };
        this.socket.on(channels.announce, this.disposable[channels.announce]);
        this.socket.on(channels.broadcast, this.disposable[channels.broadcast]);
        return sbj.asObservable();
    };
    /**
    * @method operation
    * @param {string} event Event name
    * @param {any} data Any type of data sent to the server
    * @return {Observable<T>}
    * @description
    * This internal method will run operations depending on current context
    **/
    FireLoopRef.prototype.operation = function (event, data) {
        if (!this.relationship) {
            event = this.model.getModelName() + "." + event + "." + this.id;
        }
        else {
            event = this.parent.model.getModelName() + "." + this.relationship + "." + event + "." + this.id;
        }
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        var config = {
            data: data,
            parent: this.parent && this.parent.instance ? this.parent.instance : null
        };
        this.socket.emit(event, config);
        var resultEvent = '';
        if (!this.relationship) {
            resultEvent = this.model.getModelName() + ".value.result." + this.id;
        }
        else {
            resultEvent = this.parent.model.getModelName() + "." + this.relationship + ".value.result." + this.id;
        }
        this.socket.on(resultEvent, function (res) {
            if (res.error) {
                subject.error(res);
            }
            else {
                subject.next(res);
            }
        });
        if (event.match('dispose')) {
            setTimeout(function () { return subject.next(); });
        }
        // This event listener will be wiped within socket.connections
        this.socket.sharedObservables.sharedOnDisconnect.subscribe(function () { return subject.complete(); });
        return subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) { return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].throw(error); }));
    };
    /**
    * @method buildId
    * @return {number}
    * @description
    * This internal method build an ID for this reference, this allows to have
    * multiple references for the same model or relationships.
    **/
    FireLoopRef.prototype.buildId = function () {
        return Date.now() + Math.floor(Math.random() * 100800) *
            Math.floor(Math.random() * 100700) *
            Math.floor(Math.random() * 198500);
    };
    return FireLoopRef;
}());



/***/ }),

/***/ "./sdk/models/UserDetails.ts":
/*!***********************************!*\
  !*** ./sdk/models/UserDetails.ts ***!
  \***********************************/
/*! exports provided: UserDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetails", function() { return UserDetails; });
/* tslint:disable */
var UserDetails = /** @class */ (function () {
    function UserDetails(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `UserDetails`.
     */
    UserDetails.getModelName = function () {
        return "UserDetails";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of UserDetails for dynamic purposes.
    **/
    UserDetails.factory = function (data) {
        return new UserDetails(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    UserDetails.getModelDefinition = function () {
        return {
            name: 'UserDetails',
            plural: 'UserDetails',
            path: 'UserDetails',
            idName: 'id',
            properties: {
                "email": {
                    name: 'email',
                    type: 'string'
                },
                "username": {
                    name: 'username',
                    type: 'string'
                },
                "invites": {
                    name: 'invites',
                    type: 'Array&lt;any&gt;'
                },
                "hosted": {
                    name: 'hosted',
                    type: 'Array&lt;any&gt;'
                },
                "realm": {
                    name: 'realm',
                    type: 'string'
                },
                "emailVerified": {
                    name: 'emailVerified',
                    type: 'boolean'
                },
                "id": {
                    name: 'id',
                    type: 'any'
                },
                "password": {
                    name: 'password',
                    type: 'string'
                },
            },
            relations: {
                accessTokens: {
                    name: 'accessTokens',
                    type: 'any[]',
                    model: '',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'userId'
                },
            }
        };
    };
    return UserDetails;
}());



/***/ }),

/***/ "./sdk/models/index.ts":
/*!*****************************!*\
  !*** ./sdk/models/index.ts ***!
  \*****************************/
/*! exports provided: UserDetails, AccessToken, SDKToken, FireLoopRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserDetails */ "./sdk/models/UserDetails.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserDetails", function() { return _UserDetails__WEBPACK_IMPORTED_MODULE_0__["UserDetails"]; });

/* harmony import */ var _BaseModels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseModels */ "./sdk/models/BaseModels.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessToken", function() { return _BaseModels__WEBPACK_IMPORTED_MODULE_1__["AccessToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKToken", function() { return _BaseModels__WEBPACK_IMPORTED_MODULE_1__["SDKToken"]; });

/* harmony import */ var _FireLoopRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FireLoopRef */ "./sdk/models/FireLoopRef.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FireLoopRef", function() { return _FireLoopRef__WEBPACK_IMPORTED_MODULE_2__["FireLoopRef"]; });

/* tslint:disable */





/***/ }),

/***/ "./sdk/services/core/auth.service.ts":
/*!*******************************************!*\
  !*** ./sdk/services/core/auth.service.ts ***!
  \*******************************************/
/*! exports provided: LoopBackAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoopBackAuth", function() { return LoopBackAuth; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../storage/storage.swaps */ "./sdk/storage/storage.swaps.ts");
/* harmony import */ var _models_BaseModels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/BaseModels */ "./sdk/models/BaseModels.ts");




/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module SocketConnection
* @license MIT
* @description
* This module handle socket connections and return singleton instances for each
* connection, it will use the SDK Socket Driver Available currently supporting
* Angular 2 for web, NativeScript 2 and Angular Universal.
**/
var LoopBackAuth = /** @class */ (function () {
    /**
     * @method constructor
     * @param {InternalStorage} storage Internal Storage Driver
     * @description
     * The constructor will initialize the token loading data from storage
     **/
    function LoopBackAuth(storage) {
        this.storage = storage;
        /**
         * @type {SDKToken}
         **/
        this.token = new _models_BaseModels__WEBPACK_IMPORTED_MODULE_3__["SDKToken"]();
        /**
         * @type {string}
         **/
        this.prefix = '$LoopBackSDK$';
        this.token.id = this.load('id');
        this.token.user = this.load('user');
        this.token.userId = this.load('userId');
        this.token.created = this.load('created');
        this.token.ttl = this.load('ttl');
        this.token.rememberMe = this.load('rememberMe');
    }
    /**
     * @method setRememberMe
     * @param {boolean} value Flag to remember credentials
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials
     **/
    LoopBackAuth.prototype.setRememberMe = function (value) {
        this.token.rememberMe = value;
    };
    /**
     * @method setUser
     * @param {any} user Any type of user model
     * @return {void}
     * @description
     * This method will update the user information and persist it if the
     * rememberMe flag is set.
     **/
    LoopBackAuth.prototype.setUser = function (user) {
        this.token.user = user;
        this.save();
    };
    /**
     * @method setToken
     * @param {SDKToken} token SDKToken or casted AccessToken instance
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials
     **/
    LoopBackAuth.prototype.setToken = function (token) {
        this.token = Object.assign({}, this.token, token);
        this.save();
    };
    /**
     * @method getToken
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials.
     **/
    LoopBackAuth.prototype.getToken = function () {
        return this.token;
    };
    /**
     * @method getAccessTokenId
     * @return {string}
     * @description
     * This method will return the actual token string, not the object instance.
     **/
    LoopBackAuth.prototype.getAccessTokenId = function () {
        return this.token.id;
    };
    /**
     * @method getCurrentUserId
     * @return {any}
     * @description
     * This method will return the current user id, it can be number or string.
     **/
    LoopBackAuth.prototype.getCurrentUserId = function () {
        return this.token.userId;
    };
    /**
     * @method getCurrentUserData
     * @return {any}
     * @description
     * This method will return the current user instance.
     **/
    LoopBackAuth.prototype.getCurrentUserData = function () {
        return (typeof this.token.user === 'string') ? JSON.parse(this.token.user) : this.token.user;
    };
    /**
     * @method save
     * @return {boolean} Whether or not the information was saved
     * @description
     * This method will save in either local storage or cookies the current credentials.
     * But only if rememberMe is enabled.
     **/
    LoopBackAuth.prototype.save = function () {
        var today = new Date();
        var expires = new Date(today.getTime() + (this.token.ttl * 1000));
        this.persist('id', this.token.id, expires);
        this.persist('user', this.token.user, expires);
        this.persist('userId', this.token.userId, expires);
        this.persist('created', this.token.created, expires);
        this.persist('ttl', this.token.ttl, expires);
        this.persist('rememberMe', this.token.rememberMe, expires);
        return true;
    };
    ;
    /**
     * @method load
     * @param {string} prop Property name
     * @return {any} Any information persisted in storage
     * @description
     * This method will load either from local storage or cookies the provided property.
     **/
    LoopBackAuth.prototype.load = function (prop) {
        return this.storage.get("" + this.prefix + prop);
    };
    /**
     * @method clear
     * @return {void}
     * @description
     * This method will clear cookies or the local storage.
     **/
    LoopBackAuth.prototype.clear = function () {
        var _this = this;
        Object.keys(this.token).forEach(function (prop) { return _this.storage.remove("" + _this.prefix + prop); });
        this.token = new _models_BaseModels__WEBPACK_IMPORTED_MODULE_3__["SDKToken"]();
    };
    /**
     * @method persist
     * @return {void}
     * @description
     * This method saves values to storage
     **/
    LoopBackAuth.prototype.persist = function (prop, value, expires) {
        try {
            this.storage.set("" + this.prefix + prop, (typeof value === 'object') ? JSON.stringify(value) : value, this.token.rememberMe ? expires : null);
        }
        catch (err) {
            console.error('Cannot access local/session storage:', err);
        }
    };
    LoopBackAuth = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_storage_storage_swaps__WEBPACK_IMPORTED_MODULE_2__["InternalStorage"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_storage_swaps__WEBPACK_IMPORTED_MODULE_2__["InternalStorage"]])
    ], LoopBackAuth);
    return LoopBackAuth;
}());



/***/ }),

/***/ "./sdk/services/core/base.service.ts":
/*!*******************************************!*\
  !*** ./sdk/services/core/base.service.ts ***!
  \*******************************************/
/*! exports provided: BaseLoopBackApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLoopBackApi", function() { return BaseLoopBackApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.service */ "./sdk/services/core/error.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./sdk/services/core/auth.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lb.config */ "./sdk/lb.config.ts");
/* harmony import */ var _custom_SDKModels__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../custom/SDKModels */ "./sdk/services/custom/SDKModels.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./sdk/sockets/socket.connections.ts");

/* tslint:disable */









var CustomQueryEncoderHelper = /** @class */ (function () {
    function CustomQueryEncoderHelper() {
    }
    CustomQueryEncoderHelper.prototype.encodeKey = function (k) {
        return encodeURIComponent(k);
    };
    CustomQueryEncoderHelper.prototype.encodeValue = function (v) {
        return encodeURIComponent(v);
    };
    CustomQueryEncoderHelper.prototype.decodeKey = function (k) {
        return decodeURIComponent(k);
    };
    CustomQueryEncoderHelper.prototype.decodeValue = function (v) {
        return decodeURIComponent(v);
    };
    return CustomQueryEncoderHelper;
}());
/**
* @module BaseLoopBackApi
* @author Jonathan Casarrubias <@johncasarrubias> <github:jonathan-casarrubias>
* @author Nikolay Matiushenkov <https://github.com/mnvx>
* @license MIT
* @description
* Abstract class that will be implemented in every custom service automatically built
* by the sdk builder.
* It provides the core functionallity for every API call, either by HTTP Calls or by
* WebSockets.
**/
var BaseLoopBackApi = /** @class */ (function () {
    function BaseLoopBackApi(http, connection, models, auth, errorHandler) {
        this.http = http;
        this.connection = connection;
        this.models = models;
        this.auth = auth;
        this.errorHandler = errorHandler;
        this.model = this.models.get(this.getModelName());
    }
    /**
     * @method request
     * @param {string}  method      Request method (GET, POST, PUT)
     * @param {string}  url         Request url (my-host/my-url/:id)
     * @param {any}     routeParams Values of url parameters
     * @param {any}     urlParams   Parameters for building url (filter and other)
     * @param {any}     postBody    Request postBody
     * @return {Observable<any>}
     * @description
     * This is a core method, every HTTP Call will be done from here, every API Service will
     * extend this class and use this method to get RESTful communication.
     **/
    BaseLoopBackApi.prototype.request = function (method, url, routeParams, urlParams, postBody, pubsub, customHeaders) {
        var _this = this;
        if (routeParams === void 0) { routeParams = {}; }
        if (urlParams === void 0) { urlParams = {}; }
        if (postBody === void 0) { postBody = {}; }
        if (pubsub === void 0) { pubsub = false; }
        // Transpile route variables to the actual request Values
        Object.keys(routeParams).forEach(function (key) {
            url = url.replace(new RegExp(":" + key + "(\/|$)", "g"), routeParams[key] + "$1");
        });
        if (pubsub) {
            if (url.match(/fk/)) {
                var arr = url.split('/');
                arr.pop();
                url = arr.join('/');
            }
            var event_1 = ("[" + method + "]" + url).replace(/\?/, '');
            var subject_1 = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
            this.connection.on(event_1, function (res) { return subject_1.next(res); });
            return subject_1.asObservable();
        }
        else {
            var httpParams_1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new CustomQueryEncoderHelper() });
            // Headers to be sent
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            headers = headers.append('Content-Type', 'application/json');
            // Authenticate request
            headers = this.authenticate(url, headers);
            // Body fix for built in remote methods using "data", "options" or "credentials
            // that are the actual body, Custom remote method properties are different and need
            // to be wrapped into a body object
            var body = void 0;
            var postBodyKeys = typeof postBody === 'object' ? Object.keys(postBody) : [];
            if (postBodyKeys.length === 1) {
                body = postBody[postBodyKeys.shift()];
            }
            else {
                body = postBody;
            }
            var queryString = '';
            // Separate filter object from url params and add to search query
            if (urlParams.filter) {
                if (_lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].isHeadersFilteringSet()) {
                    headers = headers.append('filter', JSON.stringify(urlParams.filter));
                }
                else {
                    queryString = "?filter=" + encodeURIComponent(JSON.stringify(urlParams.filter));
                }
                delete urlParams.filter;
            }
            // Separate where object from url params and add to search query
            if (urlParams.where) {
                if (_lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].isHeadersWhereSet()) {
                    /**
                    CODE BELOW WILL GENERATE THE FOLLOWING ISSUES:
                    - https://github.com/mean-expert-official/loopback-sdk-builder/issues/356
                    - https://github.com/mean-expert-official/loopback-sdk-builder/issues/328
                    **/
                    headers = headers.append('where', JSON.stringify(urlParams.where));
                }
                else {
                    queryString = "?where=" + encodeURIComponent(JSON.stringify(urlParams.where));
                }
                delete urlParams.where;
            }
            if (typeof customHeaders === 'function') {
                headers = customHeaders(headers);
            }
            /* enhancement/configure-where-headers
                  this.searchParams.setJSON(urlParams);
                  let request: Request = new Request(
                    new RequestOptions({
                      headers        : headers,
                      method         : method,
                      url            : `${url}${queryString}`,
                      search         : Object.keys(urlParams).length > 0 ? this.searchParams.getURLSearchParams() : null,
                      body           : body ? JSON.stringify(body) : undefined,
                      withCredentials: LoopBackConfig.getRequestOptionsCredentials()
                    })
                  );
            TODO Fix Merge Conflict */
            Object.keys(urlParams).forEach(function (paramKey) {
                var paramValue = urlParams[paramKey];
                paramValue = typeof paramValue === 'object' ? JSON.stringify(paramValue) : paramValue;
                httpParams_1 = httpParams_1.append(paramKey, paramValue);
            });
            var request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"](method, "" + url + queryString, body, {
                headers: headers,
                params: httpParams_1,
                withCredentials: _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getRequestOptionsCredentials()
            });
            return this.http.request(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (event) { return event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (res) { return res.body; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (e) { return _this.errorHandler.handleError(e); }));
        }
    };
    /**
     * @method authenticate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {string} url Server URL
     * @param {Headers} headers HTTP Headers
     * @return {void}
     * @description
     * This method will try to authenticate using either an access_token or basic http auth
     */
    BaseLoopBackApi.prototype.authenticate = function (url, headers) {
        if (this.auth.getAccessTokenId()) {
            headers = headers.append('Authorization', _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getAuthPrefix() + this.auth.getAccessTokenId());
        }
        return headers;
    };
    /**
     * @method create
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T} data Generic data type
     * @return {Observable<T>}
     * @description
     * Generic create method
     */
    BaseLoopBackApi.prototype.create = function (data, customHeaders) {
        var _this = this;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T[]} data Generic data type array
     * @return {Observable<T[]>}
     * @description
     * Generic pubsub oncreate many method
     */
    BaseLoopBackApi.prototype.onCreate = function (data) {
        var _this = this;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); }));
    };
    /**
     * @method createMany
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T[]} data Generic data type array
     * @return {Observable<T[]>}
     * @description
     * Generic create many method
     */
    BaseLoopBackApi.prototype.createMany = function (data, customHeaders) {
        var _this = this;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); }));
    };
    /**
     * @method onCreateMany
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T[]} data Generic data type array
     * @return {Observable<T[]>}
     * @description
     * Generic create many method
     */
    BaseLoopBackApi.prototype.onCreateMany = function (data) {
        var _this = this;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); }));
    };
    /**
     * @method findById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {any} data Generic data type
     * @return {Observable<T>}
     * @description
     * Generic findById method
     */
    BaseLoopBackApi.prototype.findById = function (id, filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        var _urlParams = {};
        if (filter)
            _urlParams.filter = filter;
        return this.request('GET', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, _urlParams, undefined, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method find
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[+>}
     * @description
     * Generic find method
     */
    BaseLoopBackApi.prototype.find = function (filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return this.request('GET', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, { filter: filter }, undefined, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); }));
    };
    /**
     * @method exists
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic exists method
     */
    BaseLoopBackApi.prototype.exists = function (id, customHeaders) {
        return this.request('GET', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id/exists'
        ].join('/'), { id: id }, undefined, undefined, null, customHeaders);
    };
    /**
     * @method findOne
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic findOne method
     */
    BaseLoopBackApi.prototype.findOne = function (filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return this.request('GET', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'findOne'
        ].join('/'), undefined, { filter: filter }, undefined, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method updateAll
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic updateAll method
     */
    BaseLoopBackApi.prototype.updateAll = function (where, data, customHeaders) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'update'
        ].join('/'), undefined, _urlParams, { data: data }, null, customHeaders);
    };
    /**
     * @method onUpdateAll
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic pubsub onUpdateAll method
     */
    BaseLoopBackApi.prototype.onUpdateAll = function (where, data) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'update'
        ].join('/'), undefined, _urlParams, { data: data }, true);
    };
    /**
     * @method deleteById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic deleteById method
     */
    BaseLoopBackApi.prototype.deleteById = function (id, customHeaders) {
        var _this = this;
        return this.request('DELETE', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, undefined, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onDeleteById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onDeleteById method
     */
    BaseLoopBackApi.prototype.onDeleteById = function (id) {
        var _this = this;
        return this.request('DELETE', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, undefined, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method count
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<{ count: number }>}
     * @description
     * Generic count method
     */
    BaseLoopBackApi.prototype.count = function (where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('GET', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'count'
        ].join('/'), undefined, _urlParams, undefined, null, customHeaders);
    };
    /**
     * @method updateAttributes
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic updateAttributes method
     */
    BaseLoopBackApi.prototype.updateAttributes = function (id, data, customHeaders) {
        var _this = this;
        return this.request('PUT', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onUpdateAttributes
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic onUpdateAttributes method
     */
    BaseLoopBackApi.prototype.onUpdateAttributes = function (id, data) {
        var _this = this;
        return this.request('PUT', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, { data: data }, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method upsert
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsert method
     */
    BaseLoopBackApi.prototype.upsert = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PUT', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onUpsert
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onUpsert method
     */
    BaseLoopBackApi.prototype.onUpsert = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PUT', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method upsertPatch
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsert method using patch http method
     */
    BaseLoopBackApi.prototype.upsertPatch = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PATCH', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onUpsertPatch
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onUpsertPatch method using patch http method
     */
    BaseLoopBackApi.prototype.onUpsertPatch = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PATCH', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method upsertWithWhere
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsertWithWhere method
     */
    BaseLoopBackApi.prototype.upsertWithWhere = function (where, data, customHeaders) {
        var _this = this;
        if (where === void 0) { where = {}; }
        if (data === void 0) { data = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'upsertWithWhere'
        ].join('/'), undefined, _urlParams, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onUpsertWithWhere
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onUpsertWithWhere method
     */
    BaseLoopBackApi.prototype.onUpsertWithWhere = function (where, data) {
        var _this = this;
        if (where === void 0) { where = {}; }
        if (data === void 0) { data = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'upsertWithWhere'
        ].join('/'), undefined, _urlParams, { data: data }, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method replaceOrCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic replaceOrCreate method
     */
    BaseLoopBackApi.prototype.replaceOrCreate = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'replaceOrCreate'
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onReplaceOrCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic onReplaceOrCreate method
     */
    BaseLoopBackApi.prototype.onReplaceOrCreate = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'replaceOrCreate'
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method replaceById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic replaceById method
     */
    BaseLoopBackApi.prototype.replaceById = function (id, data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id', 'replace'
        ].join('/'), { id: id }, undefined, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onReplaceById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic onReplaceById method
     */
    BaseLoopBackApi.prototype.onReplaceById = function (id, data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id', 'replace'
        ].join('/'), { id: id }, undefined, { data: data }, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method createChangeStream
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<any>}
     * @description
     * Generic createChangeStream method
     */
    BaseLoopBackApi.prototype.createChangeStream = function () {
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        if (typeof EventSource !== 'undefined') {
            var emit = function (msg) { return subject.next(JSON.parse(msg.data)); };
            var source = new EventSource([
                _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
                _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
                this.model.getModelDefinition().path,
                'change-stream'
            ].join('/'));
            source.addEventListener('data', emit);
            source.onerror = emit;
        }
        else {
            console.warn('SDK Builder: EventSource is not supported');
        }
        return subject.asObservable();
    };
    BaseLoopBackApi = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_9__["SocketConnection"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_custom_SDKModels__WEBPACK_IMPORTED_MODULE_6__["SDKModels"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_auth_service__WEBPACK_IMPORTED_MODULE_4__["LoopBackAuth"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_error_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandler"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_9__["SocketConnection"],
            _custom_SDKModels__WEBPACK_IMPORTED_MODULE_6__["SDKModels"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["LoopBackAuth"],
            _error_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandler"]])
    ], BaseLoopBackApi);
    return BaseLoopBackApi;
}());



/***/ }),

/***/ "./sdk/services/core/error.service.ts":
/*!********************************************!*\
  !*** ./sdk/services/core/error.service.ts ***!
  \********************************************/
/*! exports provided: ErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return ErrorHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

/* tslint:disable */


/**
 * Default error handler
 */
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.prototype.handleError = function (errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorResponse.error.error || 'Server error');
    };
    ErrorHandler = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ErrorHandler);
    return ErrorHandler;
}());



/***/ }),

/***/ "./sdk/services/core/index.ts":
/*!************************************!*\
  !*** ./sdk/services/core/index.ts ***!
  \************************************/
/*! exports provided: LoopBackAuth, ErrorHandler, RealTime, BaseLoopBackApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./sdk/services/core/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoopBackAuth", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["LoopBackAuth"]; });

/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.service */ "./sdk/services/core/error.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return _error_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]; });

/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./sdk/services/core/base.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLoopBackApi", function() { return _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseLoopBackApi"]; });

/* harmony import */ var _real_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./real.time */ "./sdk/services/core/real.time.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RealTime", function() { return _real_time__WEBPACK_IMPORTED_MODULE_3__["RealTime"]; });

/* tslint:disable */






/***/ }),

/***/ "./sdk/services/core/io.service.ts":
/*!*****************************************!*\
  !*** ./sdk/services/core/io.service.ts ***!
  \*****************************************/
/*! exports provided: IO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IO", function() { return IO; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* tslint:disable */

var IO = /** @class */ (function () {
    function IO(socket) {
        this.observables = {};
        this.socket = socket;
    }
    IO.prototype.emit = function (event, data) {
        this.socket.emit('ME:RT:1://event', {
            event: event,
            data: data
        });
    };
    IO.prototype.on = function (event) {
        if (this.observables[event]) {
            return this.observables[event];
        }
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.socket.on(event, function (res) { return subject.next(res); });
        this.observables[event] = subject.asObservable();
        return this.observables[event];
    };
    return IO;
}());



/***/ }),

/***/ "./sdk/services/core/real.time.ts":
/*!****************************************!*\
  !*** ./sdk/services/core/real.time.ts ***!
  \****************************************/
/*! exports provided: RealTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealTime", function() { return RealTime; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _io_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./io.service */ "./sdk/services/core/io.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./sdk/services/core/auth.service.ts");
/* harmony import */ var _models_FireLoop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/FireLoop */ "./sdk/models/FireLoop.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./sdk/sockets/socket.connections.ts");
/* harmony import */ var _custom_SDKModels__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../custom/SDKModels */ "./sdk/services/custom/SDKModels.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */








/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@johncasarrubias>
* @module RealTime
* @license MIT
* @description
* This module is a real-time interface for using socket connections, its main purpose
* is to make sure that when there is a valid connection, it will create instances
* of the different real-time functionalities like FireLoop, PubSub and IO.
**/
var RealTime = /** @class */ (function () {
    /**
    * @method constructor
    * @param {SocketConnection} connection WebSocket connection service
    * @param {SDKModels} models Model provider service
    * @param {LoopBackAuth} auth LoopBack authentication service
    * @description
    * It will intialize the shared on ready communication channel.
    **/
    function RealTime(connection, models, auth) {
        this.connection = connection;
        this.models = models;
        this.auth = auth;
        this.connecting = false;
        this.onReadySubject = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.sharedOnReady = this.onReadySubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["share"])());
        this.sharedOnReady.subscribe();
    }
    /**
    * @method onDisconnect
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is disconnected from server.
    **/
    RealTime.prototype.onDisconnect = function () {
        return this.connection.sharedObservables.sharedOnDisconnect;
    };
    /**
    * @method onAuthenticated
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is authenticated with the server.
    **/
    RealTime.prototype.onAuthenticated = function () {
        return this.connection.sharedObservables.sharedOnAuthenticated;
    };
    /**
    * @method onUnAuthorized
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is not authorized to connect with the server.
    **/
    RealTime.prototype.onUnAuthorized = function () {
        return this.connection.sharedObservables.sharedOnUnAuthorized;
    };
    /**
    * @method onReady
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is Ready for broadcasting.
    * and will register connection flow events to notify subscribers.
    **/
    RealTime.prototype.onReady = function () {
        var _this = this;
        // If there is a valid connection, then we just send back to the EventLoop
        // Or next will be executed before the actual subscription.
        if (this.connection.isConnected()) {
            var to_1 = setTimeout(function () {
                _this.onReadySubject.next('shared-connection');
                clearTimeout(to_1);
            });
            // Else if there is a current attempt of connection we wait for the prior
            // process that started the connection flow.
        }
        else if (this.connecting) {
            var ti_1 = setInterval(function () {
                if (_this.connection.isConnected()) {
                    _this.onReadySubject.next('shared-connection');
                    clearInterval(ti_1);
                }
            }, 500);
            // If there is not valid connection or attempt, then we start the connection flow
            // and make sure we notify all the onReady subscribers when done.
            // Also it will listen for desconnections so we unsubscribe and avoid both:
            // Memory leaks and duplicated triggered events.
        }
        else {
            this.connecting = true;
            this.connection.connect(this.auth.getToken());
            this.IO = new _io_service__WEBPACK_IMPORTED_MODULE_2__["IO"](this.connection);
            this.FireLoop = new _models_FireLoop__WEBPACK_IMPORTED_MODULE_4__["FireLoop"](this.connection, this.models);
            // Fire event for those subscribed 
            var s1_1 = this.connection.sharedObservables.sharedOnConnect.subscribe(function () {
                console.log('Real-Time connection has been established');
                _this.connecting = false;
                _this.onReadySubject.next('connected');
                var s2 = _this.connection.sharedObservables.sharedOnDisconnect.subscribe(function () {
                    s1_1.unsubscribe();
                    s2.unsubscribe();
                });
            });
        }
        return this.sharedOnReady;
    };
    RealTime = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_5__["SocketConnection"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_custom_SDKModels__WEBPACK_IMPORTED_MODULE_6__["SDKModels"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_auth_service__WEBPACK_IMPORTED_MODULE_3__["LoopBackAuth"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_5__["SocketConnection"],
            _custom_SDKModels__WEBPACK_IMPORTED_MODULE_6__["SDKModels"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["LoopBackAuth"]])
    ], RealTime);
    return RealTime;
}());



/***/ }),

/***/ "./sdk/services/custom/SDKModels.ts":
/*!******************************************!*\
  !*** ./sdk/services/custom/SDKModels.ts ***!
  \******************************************/
/*! exports provided: SDKModels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDKModels", function() { return SDKModels; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_UserDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/UserDetails */ "./sdk/models/UserDetails.ts");

/* tslint:disable */


var SDKModels = /** @class */ (function () {
    function SDKModels() {
        this.models = {
            UserDetails: _models_UserDetails__WEBPACK_IMPORTED_MODULE_2__["UserDetails"],
        };
    }
    SDKModels.prototype.get = function (modelName) {
        return this.models[modelName];
    };
    SDKModels.prototype.getAll = function () {
        return this.models;
    };
    SDKModels.prototype.getModelNames = function () {
        return Object.keys(this.models);
    };
    SDKModels = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SDKModels);
    return SDKModels;
}());



/***/ }),

/***/ "./sdk/services/custom/UserDetails.ts":
/*!********************************************!*\
  !*** ./sdk/services/custom/UserDetails.ts ***!
  \********************************************/
/*! exports provided: UserDetailsApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsApi", function() { return UserDetailsApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SDKModels */ "./sdk/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/base.service */ "./sdk/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lb.config */ "./sdk/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/auth.service */ "./sdk/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/error.service */ "./sdk/services/core/error.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./sdk/sockets/socket.connections.ts");

/* tslint:disable */









/**
 * Api services for the `UserDetails` model.
 */
var UserDetailsApi = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserDetailsApi, _super);
    function UserDetailsApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Find a related item by id for accessTokens.
     *
     * @param {any} id userDetails id
     *
     * @param {any} fk Foreign key for accessTokens
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `UserDetails` object.)
     * </em>
     */
    UserDetailsApi.prototype.findByIdAccessTokens = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/userDetails/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Delete a related item by id for accessTokens.
     *
     * @param {any} id userDetails id
     *
     * @param {any} fk Foreign key for accessTokens
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserDetailsApi.prototype.destroyByIdAccessTokens = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/userDetails/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Update a related item by id for accessTokens.
     *
     * @param {any} id userDetails id
     *
     * @param {any} fk Foreign key for accessTokens
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `UserDetails` object.)
     * </em>
     */
    UserDetailsApi.prototype.updateByIdAccessTokens = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/userDetails/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Queries accessTokens of userDetails.
     *
     * @param {any} id userDetails id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `UserDetails` object.)
     * </em>
     */
    UserDetailsApi.prototype.getAccessTokens = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/userDetails/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in accessTokens of this model.
     *
     * @param {any} id userDetails id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `UserDetails` object.)
     * </em>
     */
    UserDetailsApi.prototype.createAccessTokens = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/userDetails/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Deletes all accessTokens of this model.
     *
     * @param {any} id userDetails id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserDetailsApi.prototype.deleteAccessTokens = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/userDetails/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Counts accessTokens of userDetails.
     *
     * @param {any} id userDetails id
     *
     * @param {object} where Criteria to match model instances
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    UserDetailsApi.prototype.countAccessTokens = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/userDetails/:id/accessTokens/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `UserDetails` object.)
     * </em>
     */
    UserDetailsApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/userDetails";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id userDetails id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `UserDetails` object.)
     * </em>
     */
    UserDetailsApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/userDetails/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Login a user with username/email and password.
     *
     * @param {string} include Related objects to include in the response. See the description of return value for more details.
     *   Default value: `user`.
     *
     *  - `rememberMe` - `boolean` - Whether the authentication credentials
     *     should be remembered in localStorage across app/browser restarts.
     *     Default: `true`.
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * The response body contains properties of the AccessToken created on login.
     * Depending on the value of `include` parameter, the body may contain additional properties:
     *
     *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
     *
     *
     */
    UserDetailsApi.prototype.login = function (credentials, include, rememberMe, customHeaders) {
        var _this = this;
        if (include === void 0) { include = 'user'; }
        if (rememberMe === void 0) { rememberMe = true; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/userDetails/login";
        var _routeParams = {};
        var _postBody = {
            credentials: credentials
        };
        var _urlParams = {};
        if (typeof include !== 'undefined' && include !== null)
            _urlParams.include = include;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (response) {
            response.ttl = parseInt(response.ttl);
            response.rememberMe = rememberMe;
            _this.auth.setToken(response);
            return response;
        }));
        return result;
    };
    /**
     * Logout a user with access token.
     *
     * @param {object} data Request data.
     *
     * This method does not accept any data. Supply an empty object.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserDetailsApi.prototype.logout = function (customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/userDetails/logout";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        _urlParams.access_token = this.auth.getAccessTokenId();
        this.auth.clear();
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Trigger user's identity verification with configured verifyOptions
     *
     * @param {any} id userDetails id
     *
     * @param {object} data Request data.
     *
     * This method does not accept any data. Supply an empty object.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserDetailsApi.prototype.verify = function (id, customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/userDetails/:id/verify";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Confirm a user registration with identity verification token.
     *
     * @param {string} uid
     *
     * @param {string} token
     *
     * @param {string} redirect
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserDetailsApi.prototype.confirm = function (uid, token, redirect, customHeaders) {
        if (redirect === void 0) { redirect = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/userDetails/confirm";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof uid !== 'undefined' && uid !== null)
            _urlParams.uid = uid;
        if (typeof token !== 'undefined' && token !== null)
            _urlParams.token = token;
        if (typeof redirect !== 'undefined' && redirect !== null)
            _urlParams.redirect = redirect;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Reset password for a user with email.
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserDetailsApi.prototype.resetPassword = function (options, customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/userDetails/reset";
        var _routeParams = {};
        var _postBody = {
            options: options
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Change a user's password.
     *
     * @param {object} data Request data.
     *
     *  - `oldPassword` – `{string}` -
     *
     *  - `newPassword` – `{string}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserDetailsApi.prototype.changePassword = function (oldPassword, newPassword, customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/userDetails/change-password";
        var _routeParams = {};
        var _postBody = {
            data: {
                oldPassword: oldPassword,
                newPassword: newPassword
            }
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Reset user's password via a password-reset token.
     *
     * @param {object} data Request data.
     *
     *  - `newPassword` – `{string}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserDetailsApi.prototype.setPassword = function (newPassword, customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/userDetails/reset-password";
        var _routeParams = {};
        var _postBody = {
            data: {
                newPassword: newPassword
            }
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {object} data Request data.
     *
     *  - `md` – `{Object}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `UserDetails` object.)
     * </em>
     */
    UserDetailsApi.prototype.invite = function (md, customHeaders) {
        if (md === void 0) { md = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/userDetails/invite";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof md !== 'undefined' && md !== null)
            _urlParams.md = md;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in accessTokens of this model.
     *
     * @param {any} id userDetails id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `UserDetails` object.)
     * </em>
     */
    UserDetailsApi.prototype.createManyAccessTokens = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/userDetails/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * @ngdoc method
     * @name sdk.UserDetails#getCurrent
     * @methodOf sdk.UserDetails
     *
     * @description
     *
     * Get data of the currently logged user. Fail with HTTP result 401
     * when there is no user logged in.
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     */
    UserDetailsApi.prototype.getCurrent = function (filter) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() + "/userDetails" + "/:id";
        var id = this.auth.getCurrentUserId();
        if (id == null)
            id = '__anonymous__';
        var _routeParams = { id: id };
        var _urlParams = {};
        var _postBody = {};
        if (filter)
            _urlParams.filter = filter;
        return this.request(_method, _url, _routeParams, _urlParams, _postBody);
    };
    /**
     * Get data of the currently logged user that was returned by the last
     * call to {@link sdk.UserDetails#login} or
     * {@link sdk.UserDetails#getCurrent}. Return null when there
     * is no user logged in or the data of the current user were not fetched
     * yet.
     *
     * @returns object An Account instance.
     */
    UserDetailsApi.prototype.getCachedCurrent = function () {
        return this.auth.getCurrentUserData();
    };
    /**
     * Get data of the currently logged access tokern that was returned by the last
     * call to {@link sdk.UserDetails#login}
     *
     * @returns object An AccessToken instance.
     */
    UserDetailsApi.prototype.getCurrentToken = function () {
        return this.auth.getToken();
    };
    /**
     * @name sdk.UserDetails#isAuthenticated
     *
     * @returns {boolean} True if the current user is authenticated (logged in).
     */
    UserDetailsApi.prototype.isAuthenticated = function () {
        return !(this.getCurrentId() === '' || this.getCurrentId() == null || this.getCurrentId() == 'null');
    };
    /**
     * @name sdk.UserDetails#getCurrentId
     *
     * @returns object Id of the currently logged-in user or null.
     */
    UserDetailsApi.prototype.getCurrentId = function () {
        return this.auth.getCurrentUserId();
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `UserDetails`.
     */
    UserDetailsApi.prototype.getModelName = function () {
        return "UserDetails";
    };
    UserDetailsApi = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_9__["SocketConnection"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_3__["SDKModels"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_6__["LoopBackAuth"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorHandler"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_9__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_3__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_6__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorHandler"]])
    ], UserDetailsApi);
    return UserDetailsApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseLoopBackApi"]));



/***/ }),

/***/ "./sdk/services/custom/index.ts":
/*!**************************************!*\
  !*** ./sdk/services/custom/index.ts ***!
  \**************************************/
/*! exports provided: UserDetailsApi, SDKModels, LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserDetails */ "./sdk/services/custom/UserDetails.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserDetailsApi", function() { return _UserDetails__WEBPACK_IMPORTED_MODULE_0__["UserDetailsApi"]; });

/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SDKModels */ "./sdk/services/custom/SDKModels.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKModels", function() { return _SDKModels__WEBPACK_IMPORTED_MODULE_1__["SDKModels"]; });

/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger.service */ "./sdk/services/custom/logger.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return _logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]; });

/* tslint:disable */





/***/ }),

/***/ "./sdk/services/custom/logger.service.ts":
/*!***********************************************!*\
  !*** ./sdk/services/custom/logger.service.ts ***!
  \***********************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lb.config */ "./sdk/lb.config.ts");

/* tslint:disable */


/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@johncasarrubias>
* @module LoggerService
* @license MIT
* @description
* Console Log wrapper that can be disabled in production mode
**/
var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (_lb_config__WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].debuggable())
            console.log.apply(console, args);
    };
    LoggerService.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (_lb_config__WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].debuggable())
            console.info.apply(console, args);
    };
    LoggerService.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (_lb_config__WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].debuggable())
            console.error.apply(console, args);
    };
    LoggerService.prototype.count = function (arg) {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.group = function (arg) {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.groupEnd = function () {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].debuggable())
            console.groupEnd();
    };
    LoggerService.prototype.profile = function (arg) {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.profileEnd = function () {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].debuggable())
            console.profileEnd();
    };
    LoggerService.prototype.time = function (arg) {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].debuggable())
            console.time(arg);
    };
    LoggerService.prototype.timeEnd = function (arg) {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].debuggable())
            console.timeEnd(arg);
    };
    LoggerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "./sdk/services/index.ts":
/*!*******************************!*\
  !*** ./sdk/services/index.ts ***!
  \*******************************/
/*! exports provided: LoopBackAuth, ErrorHandler, RealTime, UserDetailsApi, SDKModels, LoggerService, BaseLoopBackApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/index */ "./sdk/services/core/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoopBackAuth", function() { return _core_index__WEBPACK_IMPORTED_MODULE_0__["LoopBackAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return _core_index__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RealTime", function() { return _core_index__WEBPACK_IMPORTED_MODULE_0__["RealTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLoopBackApi", function() { return _core_index__WEBPACK_IMPORTED_MODULE_0__["BaseLoopBackApi"]; });

/* harmony import */ var _custom_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom/index */ "./sdk/services/custom/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserDetailsApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["UserDetailsApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKModels", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["SDKModels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["LoggerService"]; });

/* tslint:disable */




/***/ }),

/***/ "./sdk/sockets/socket.browser.ts":
/*!***************************************!*\
  !*** ./sdk/sockets/socket.browser.ts ***!
  \***************************************/
/*! exports provided: SocketBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketBrowser", function() { return SocketBrowser; });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module SocketBrowser
* @license MIT
* @description
* This module handle socket connections for web browsers, it will be DI Swapped
* depending on the platform environment.
* This module will be generated when the -d ng2web flag is set
**/
var SocketBrowser = /** @class */ (function () {
    function SocketBrowser() {
    }
    /**
     * @method connect
     * @param {string} url URL path to connect with the server.
     * @param {any} options Any socket.io v1 =< valid options
     * @return {any} Not currently a socket.io-client for web Typings implemented.
     * @description
     * This method will return a valid socket connection.
     **/
    SocketBrowser.prototype.connect = function (url, options) {
        return socket_io_client__WEBPACK_IMPORTED_MODULE_0__(url, options);
    };
    return SocketBrowser;
}());



/***/ }),

/***/ "./sdk/sockets/socket.connections.ts":
/*!*******************************************!*\
  !*** ./sdk/sockets/socket.connections.ts ***!
  \*******************************************/
/*! exports provided: SocketConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketConnection", function() { return SocketConnection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _socket_driver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket.driver */ "./sdk/sockets/socket.driver.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lb.config */ "./sdk/lb.config.ts");

/* tslint:disable */





/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module SocketConnection
* @license MIT
* @description
* This module handle socket connections and return singleton instances for each
* connection, it will use the SDK Socket Driver Available currently supporting
* Angular 2 for web, NativeScript 2 and Angular Universal.
**/
var SocketConnection = /** @class */ (function () {
    /**
     * @method constructor
     * @param {SocketDriver} driver Socket IO Driver
     * @param {NgZone} zone Angular 2 Zone
     * @description
     * The constructor will set references for the shared hot observables from
     * the class subjects. Then it will subscribe each of these observables
     * that will create a channel that later will be shared between subscribers.
     **/
    function SocketConnection(driver, zone) {
        this.driver = driver;
        this.zone = zone;
        this.subjects = {
            onConnect: new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"](),
            onDisconnect: new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"](),
            onAuthenticated: new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"](),
            onUnAuthorized: new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]()
        };
        this.sharedObservables = {};
        this.authenticated = false;
        this.sharedObservables = {
            sharedOnConnect: this.subjects.onConnect.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])()),
            sharedOnDisconnect: this.subjects.onDisconnect.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])()),
            sharedOnAuthenticated: this.subjects.onAuthenticated.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])()),
            sharedOnUnAuthorized: this.subjects.onUnAuthorized.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])())
        };
        // This is needed to create the first channel, subsequents will share the connection
        // We are using Hot Observables to avoid duplicating connection status events.
        this.sharedObservables.sharedOnConnect.subscribe();
        this.sharedObservables.sharedOnDisconnect.subscribe();
        this.sharedObservables.sharedOnAuthenticated.subscribe();
        this.sharedObservables.sharedOnUnAuthorized.subscribe();
    }
    /**
     * @method connect
     * @param {AccessToken} token AccesToken instance
     * @return {void}
     * @description
     * This method will create a new socket connection when not previously established.
     * If there is a broken connection it will re-connect.
     **/
    SocketConnection.prototype.connect = function (token) {
        var _this = this;
        if (token === void 0) { token = null; }
        if (!this.socket) {
            console.info('Creating a new connection with: ', _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath());
            // Create new socket connection
            this.socket = this.driver.connect(_lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(), {
                log: false,
                secure: _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].isSecureWebSocketsSet(),
                forceNew: true,
                forceWebsockets: true,
                transports: ['websocket']
            });
            // Listen for connection
            this.on('connect', function () {
                _this.subjects.onConnect.next('connected');
                // Authenticate or start heartbeat now    
                _this.emit('authentication', token);
            });
            // Listen for authentication
            this.on('authenticated', function () {
                _this.authenticated = true;
                _this.subjects.onAuthenticated.next();
                _this.heartbeater();
            });
            // Listen for authentication
            this.on('unauthorized', function (err) {
                _this.authenticated = false;
                _this.subjects.onUnAuthorized.next(err);
            });
            // Listen for disconnections
            this.on('disconnect', function (status) { return _this.subjects.onDisconnect.next(status); });
        }
        else if (this.socket && !this.socket.connected) {
            if (typeof this.socket.off === 'function') {
                this.socket.off();
            }
            if (typeof this.socket.destroy === 'function') {
                this.socket.destroy();
            }
            delete this.socket;
            this.connect(token);
        }
    };
    /**
     * @method isConnected
     * @return {boolean}
     * @description
     * This method will return true or false depending on established connections
     **/
    SocketConnection.prototype.isConnected = function () {
        return (this.socket && this.socket.connected);
    };
    /**
     * @method on
     * @param {string} event Event name
     * @param {Function} handler Event listener handler
     * @return {void}
     * @description
     * This method listen for server events from the current WebSocket connection.
     * This method is a facade that will wrap the original "on" method and run it
     * within the Angular Zone to avoid update issues.
     **/
    SocketConnection.prototype.on = function (event, handler) {
        var _this = this;
        this.socket.on(event, function (data) { return _this.zone.run(function () { return handler(data); }); });
    };
    /**
     * @method emit
     * @param {string} event Event name
     * @param {any=} data Any type of data
     * @return {void}
     * @description
     * This method will send any type of data to the server according the event set.
     **/
    SocketConnection.prototype.emit = function (event, data) {
        if (data) {
            this.socket.emit(event, data);
        }
        else {
            this.socket.emit(event);
        }
    };
    /**
     * @method removeListener
     * @param {string} event Event name
     * @param {Function} handler Event listener handler
     * @return {void}
     * @description
     * This method will wrap the original "on" method and run it within the Angular Zone
     * Note: off is being used since the nativescript socket io client does not provide
     * removeListener method, but only provides with off which is provided in any platform.
     **/
    SocketConnection.prototype.removeListener = function (event, handler) {
        if (typeof this.socket.off === 'function') {
            this.socket.off(event, handler);
        }
    };
    /**
     * @method removeAllListeners
     * @param {string} event Event name
     * @param {Function} handler Event listener handler
     * @return {void}
     * @description
     * This method will wrap the original "on" method and run it within the Angular Zone
     * Note: off is being used since the nativescript socket io client does not provide
     * removeListener method, but only provides with off which is provided in any platform.
     **/
    SocketConnection.prototype.removeAllListeners = function (event) {
        if (typeof this.socket.removeAllListeners === 'function') {
            this.socket.removeAllListeners(event);
        }
    };
    /**
     * @method disconnect
     * @return {void}
     * @description
     * This will disconnect the client from the server
     **/
    SocketConnection.prototype.disconnect = function () {
        this.socket.disconnect();
    };
    /**
     * @method heartbeater
     * @return {void}
     * @description
     * This will keep the connection as active, even when users are not sending
     * data, this avoids disconnection because of a connection not being used.
     **/
    SocketConnection.prototype.heartbeater = function () {
        var _this = this;
        var heartbeater = setInterval(function () {
            if (_this.isConnected()) {
                _this.socket.emit('lb-ping');
            }
            else {
                _this.socket.removeAllListeners('lb-pong');
                clearInterval(heartbeater);
            }
        }, 15000);
        this.socket.on('lb-pong', function (data) { return console.info('Heartbeat: ', data); });
    };
    SocketConnection = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_socket_driver__WEBPACK_IMPORTED_MODULE_2__["SocketDriver"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_socket_driver__WEBPACK_IMPORTED_MODULE_2__["SocketDriver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], SocketConnection);
    return SocketConnection;
}());



/***/ }),

/***/ "./sdk/sockets/socket.driver.ts":
/*!**************************************!*\
  !*** ./sdk/sockets/socket.driver.ts ***!
  \**************************************/
/*! exports provided: SocketDriver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketDriver", function() { return SocketDriver; });
/* tslint:disable */
/**
 * @module SocketDriver
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The SocketDriver class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 **/
var SocketDriver = /** @class */ (function () {
    function SocketDriver() {
    }
    SocketDriver.prototype.connect = function (url, options) { };
    return SocketDriver;
}());



/***/ }),

/***/ "./sdk/storage/cookie.browser.ts":
/*!***************************************!*\
  !*** ./sdk/storage/cookie.browser.ts ***!
  \***************************************/
/*! exports provided: CookieBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieBrowser", function() { return CookieBrowser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* tslint:disable */

/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module CookieBrowser
* @license MIT
* @description
* This module handle cookies, it will be provided using DI Swapping according the
* SDK Socket Driver Available currently supporting Angular 2 for web and NativeScript 2.
**/
var CookieBrowser = /** @class */ (function () {
    function CookieBrowser() {
        /**
         * @type {CookieInterface}
         **/
        this.cookies = {};
    }
    /**
     * @method get
     * @param {string} key Cookie key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in cookies.
     **/
    CookieBrowser.prototype.get = function (key) {
        if (!this.cookies[key]) {
            var cookie = window.document
                .cookie.split('; ')
                .filter(function (item) { return item.split('=')[0] === key; }).pop();
            if (!cookie) {
                return null;
            }
            this.cookies[key] = this.parse(cookie.split('=').slice(1).join('='));
        }
        return this.cookies[key];
    };
    /**
     * @method set
     * @param {string} key Cookie key name
     * @param {any} value Any value
     * @param {Date=} expires The date of expiration (Optional)
     * @return {void}
     * @description
     * The setter will return any type of data persisted in cookies.
     **/
    CookieBrowser.prototype.set = function (key, value, expires) {
        this.cookies[key] = value;
        var cookie = key + "=" + encodeURI(value) + "; path=/" + (expires ? "; expires=" + expires.toUTCString() : '');
        window.document.cookie = cookie;
    };
    /**
     * @method remove
     * @param {string} key Cookie key name
     * @return {void}
     * @description
     * This method will remove a cookie from the client.
     **/
    CookieBrowser.prototype.remove = function (key) {
        document.cookie = key + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        delete this.cookies[key];
    };
    /**
     * @method parse
     * @param {any} value Input data expected to be JSON
     * @return {void}
     * @description
     * This method will parse the string as JSON if possible, otherwise will
     * return the value itself.
     **/
    CookieBrowser.prototype.parse = function (value) {
        try {
            return JSON.parse(decodeURI(value));
        }
        catch (e) {
            return value;
        }
    };
    CookieBrowser = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CookieBrowser);
    return CookieBrowser;
}());



/***/ }),

/***/ "./sdk/storage/storage.browser.ts":
/*!****************************************!*\
  !*** ./sdk/storage/storage.browser.ts ***!
  \****************************************/
/*! exports provided: StorageBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageBrowser", function() { return StorageBrowser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* tslint:disable */

/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module StorageBrowser
* @license MIT
* @description
* This module handle localStorage, it will be provided using DI Swapping according the
* SDK Socket Driver Available currently supporting Angular 2 for web and NativeScript 2.
**/
var StorageBrowser = /** @class */ (function () {
    function StorageBrowser() {
    }
    /**
     * @method get
     * @param {string} key Storage key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in localStorage.
     **/
    StorageBrowser.prototype.get = function (key) {
        var data = localStorage.getItem(key);
        return this.parse(data);
    };
    /**
     * @method set
     * @param {string} key Storage key name
     * @param {any} value Any value
     * @return {void}
     * @description
     * The setter will return any type of data persisted in localStorage.
     **/
    StorageBrowser.prototype.set = function (key, value, expires) {
        localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
    };
    /**
     * @method remove
     * @param {string} key Storage key name
     * @return {void}
     * @description
     * This method will remove a localStorage item from the client.
     **/
    StorageBrowser.prototype.remove = function (key) {
        if (localStorage[key]) {
            localStorage.removeItem(key);
        }
        else {
            console.log('Trying to remove unexisting key: ', key);
        }
    };
    /**
     * @method parse
     * @param {any} value Input data expected to be JSON
     * @return {void}
     * @description
     * This method will parse the string as JSON if possible, otherwise will
     * return the value itself.
     **/
    StorageBrowser.prototype.parse = function (value) {
        try {
            return JSON.parse(value);
        }
        catch (e) {
            return value;
        }
    };
    StorageBrowser = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], StorageBrowser);
    return StorageBrowser;
}());



/***/ }),

/***/ "./sdk/storage/storage.swaps.ts":
/*!**************************************!*\
  !*** ./sdk/storage/storage.swaps.ts ***!
  \**************************************/
/*! exports provided: BaseStorage, InternalStorage, SDKStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseStorage", function() { return BaseStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalStorage", function() { return InternalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDKStorage", function() { return SDKStorage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/* tslint:disable */
/**
 * @module Storage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The InternalStorage class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 **/
var BaseStorage = /** @class */ (function () {
    function BaseStorage() {
    }
    /**
     * @method get
     * @param {string} key Storage key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in storage.
     **/
    BaseStorage.prototype.get = function (key) { };
    /**
     * @method set
     * @param {string} key Storage key name
     * @param {any} value Any value
     * @return {void}
     * @description
     * The setter will return any type of data persisted in localStorage.
     **/
    BaseStorage.prototype.set = function (key, value, expires) { };
    /**
     * @method remove
     * @param {string} key Storage key name
     * @return {void}
     * @description
     * This method will remove a localStorage item from the client.
     **/
    BaseStorage.prototype.remove = function (key) { };
    return BaseStorage;
}());

/**
 * @module InternalStorage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The InternalStorage class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 * This is mainly required because Angular Universal integration.
 * It does inject a CookieStorage instead of LocalStorage.
 **/
var InternalStorage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InternalStorage, _super);
    function InternalStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InternalStorage;
}(BaseStorage));

/**
 * @module SDKStorage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The SDKStorage class is used for dependency injection swapping.
 * It will be provided using factory method according the right environment.
 * This is created for public usage, to allow persisting custom data
 * Into the local storage API.
 **/
var SDKStorage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SDKStorage, _super);
    function SDKStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SDKStorage;
}(BaseStorage));



/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _room_room_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./room/room.component */ "./src/app/room/room.component.ts");
/* harmony import */ var _maillogin_maillogin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./maillogin/maillogin.component */ "./src/app/maillogin/maillogin.component.ts");







var routes = [
    {
        path: "",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    },
    {
        path: "dashboard",
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
    },
    {
        path: "maillogin",
        component: _maillogin_maillogin_component__WEBPACK_IMPORTED_MODULE_6__["MailloginComponent"],
    },
    {
        path: "room",
        component: _room_room_component__WEBPACK_IMPORTED_MODULE_5__["RoomComponent"],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\r\n  <router-outlet></router-outlet>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'learn-angular-from-scratch';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _setmeeting_setmeeting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./setmeeting/setmeeting.component */ "./src/app/setmeeting/setmeeting.component.ts");
/* harmony import */ var _room_room_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./room/room.component */ "./src/app/room/room.component.ts");
/* harmony import */ var _mymeeting_mymeeting_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mymeeting/mymeeting.component */ "./src/app/mymeeting/mymeeting.component.ts");
/* harmony import */ var _maillogin_maillogin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./maillogin/maillogin.component */ "./src/app/maillogin/maillogin.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _setmeeting_setmeeting_component__WEBPACK_IMPORTED_MODULE_10__["SetmeetingComponent"],
                _room_room_component__WEBPACK_IMPORTED_MODULE_11__["RoomComponent"],
                _mymeeting_mymeeting_component__WEBPACK_IMPORTED_MODULE_12__["MymeetingComponent"],
                _maillogin_maillogin_component__WEBPACK_IMPORTED_MODULE_13__["MailloginComponent"],
            ],
            imports: [
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_4__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_4__["OwlNativeDateTimeModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
            ],
            entryComponents: [],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group animationDuration=\"0ms\">\n  <mat-tab label=\"Set Meeting\">\n    <app-setmeeting></app-setmeeting>\n  </mat-tab>\n  <mat-tab label=\"My Meetings\">\n    <app-mymeeting></app-mymeeting>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(userservice) {
        this.userservice = userservice;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userservice.getData(localStorage.getItem("userId")).subscribe(function (e) {
            _this.hostedData = e.hosted;
        });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-dashboard",
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sdk_services_custom_UserDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sdk/services/custom/UserDetails */ "./sdk/services/custom/UserDetails.ts");



var LoginService = /** @class */ (function () {
    function LoginService(UserDetailsApi) {
        this.UserDetailsApi = UserDetailsApi;
    }
    LoginService.prototype.login = function (username, email) {
        return this.UserDetailsApi.login({
            username: username,
            email: email,
            password: "pass@123",
        });
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sdk_services_custom_UserDetails__WEBPACK_IMPORTED_MODULE_2__["UserDetailsApi"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  <input [(ngModel)]=\"username\" class=\"input is-primary\" type=\"text\" placeholder=\"Enter Your name\" />\n  <input [(ngModel)]=\"email\" class=\"input is-primary\" type=\"text\" placeholder=\"Enter Your email\" />\n  <button (click)='submit()'>Submit</button>\n</p> -->\n<div class=\"container\">\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title>Login</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <form class=\"example-form\">\n        <table class=\"example-full-width\" cellspacing=\"0\">\n          <tr>\n            <td>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Enter Your Username\" [(ngModel)]=\"username\" name=\"username\" required>\n              </mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Enter Your Email\" [(ngModel)]=\"email\" type=\"email\" name=\"email\" required>\n              </mat-form-field>\n            </td>\n          </tr>\n        </table>\n      </form>\n      <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-raised-button (click)=\"submit()\" color=\"primary\">Login</button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: relative; }\n\n.example-card {\n  width: auto;\n  height: auto;\n  /* Center vertically and horizontally */\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, 100%);\n          transform: translate(-50%, 100%);\n  margin: -25px 0 0 -25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxEaGFybWlsXFxEZXNrdG9wXFx2aWRlb2NhbGxhcHAtZnJvbnRlbmRcXGxlYXJuLWFuZ3VsYXItZnJvbS1zY3JhdGNoLXN0ZXAtYnktc3RlcC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1Q0FBQTtFQUNBLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmV4YW1wbGUtY2FyZCB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIC8qIENlbnRlciB2ZXJ0aWNhbGx5IGFuZCBob3Jpem9udGFsbHkgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwMCUpO1xyXG4gIG1hcmdpbjogLTI1cHggMCAwIC0yNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginservice, router) {
        this.loginservice = loginservice;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        console.log("submit called");
        this.loginservice.login(this.username, this.email).subscribe(function (result) {
            localStorage.setItem("userId", result.userId);
            _this.router.navigate(["dashboard"]);
        }, function (error) {
            console.log(error);
            alert("Invalid login");
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/maillogin/maillogin.component.html":
/*!****************************************************!*\
  !*** ./src/app/maillogin/maillogin.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  <input [(ngModel)]=\"username\" class=\"input is-primary\" type=\"text\" placeholder=\"Enter Your name\" />\n  <input [(ngModel)]=\"email\" class=\"input is-primary\" type=\"text\" placeholder=\"Enter Your email\" />\n  <button (click)='submit()'>Submit</button>\n</p> -->\n<div class=\"container\">\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title>Login</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <form class=\"example-form\">\n        <table class=\"example-full-width\" cellspacing=\"0\">\n          <tr>\n            <td>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Enter Your Username\" [(ngModel)]=\"username\" name=\"username\" required>\n              </mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Enter Your Email\" [(ngModel)]=\"email\" type=\"email\" name=\"email\" required>\n              </mat-form-field>\n            </td>\n          </tr>\n        </table>\n      </form>\n      <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-raised-button (click)=\"submit()\" color=\"primary\">Login</button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/maillogin/maillogin.component.scss":
/*!****************************************************!*\
  !*** ./src/app/maillogin/maillogin.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: relative; }\n\n.example-card {\n  width: auto;\n  height: auto;\n  /* Center vertically and horizontally */\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, 100%);\n          transform: translate(-50%, 100%);\n  margin: -25px 0 0 -25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbGxvZ2luL0M6XFxVc2Vyc1xcRGhhcm1pbFxcRGVza3RvcFxcdmlkZW9jYWxsYXBwLWZyb250ZW5kXFxsZWFybi1hbmd1bGFyLWZyb20tc2NyYXRjaC1zdGVwLWJ5LXN0ZXAvc3JjXFxhcHBcXG1haWxsb2dpblxcbWFpbGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1Q0FBQTtFQUNBLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWlsbG9naW4vbWFpbGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jYXJkIHtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgLyogQ2VudGVyIHZlcnRpY2FsbHkgYW5kIGhvcml6b250YWxseSAqL1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTAwJSk7XHJcbiAgbWFyZ2luOiAtMjVweCAwIDAgLTI1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/maillogin/maillogin.component.ts":
/*!**************************************************!*\
  !*** ./src/app/maillogin/maillogin.component.ts ***!
  \**************************************************/
/*! exports provided: MailloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailloginComponent", function() { return MailloginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _twilioservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../twilioservice.service */ "./src/app/twilioservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var MailloginComponent = /** @class */ (function () {
    function MailloginComponent(loginservice, twilioService, route, router) {
        var _this = this;
        this.loginservice = loginservice;
        this.twilioService = twilioService;
        this.route = route;
        this.router = router;
        this.route.queryParams.subscribe(function (params) {
            _this.roomName = params["roomName"];
            _this.dateTime = params["dateTime"];
        });
    }
    MailloginComponent.prototype.ngOnInit = function () { };
    MailloginComponent.prototype.submit = function () {
        var _this = this;
        this.loginservice.login(this.username, this.email).subscribe(function (result) {
            _this.twilioService
                .getAccessToken(_this.dateTime, _this.username, _this.roomName)
                .subscribe(function (result) {
                localStorage.setItem("accessToken", result.token);
                _this.router.navigate(["room"], {
                    queryParams: {
                        roomName: _this.roomName,
                        dateTime: _this.dateTime,
                    },
                });
            }, function (error) {
                console.log(error);
            });
        });
    };
    MailloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-maillogin",
            template: __webpack_require__(/*! ./maillogin.component.html */ "./src/app/maillogin/maillogin.component.html"),
            styles: [__webpack_require__(/*! ./maillogin.component.scss */ "./src/app/maillogin/maillogin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _twilioservice_service__WEBPACK_IMPORTED_MODULE_3__["TwilioserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MailloginComponent);
    return MailloginComponent;
}());



/***/ }),

/***/ "./src/app/mymeeting/mymeeting.component.html":
/*!****************************************************!*\
  !*** ./src/app/mymeeting/mymeeting.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 20px;\">\n  <div class=\"row\">\n    <div class=\"column\">\n      <h3 style=\"text-align: center;\">Meetings</h3>\n      <mat-card class=\"example-card\" style=\"margin-bottom: 10px;\" *ngFor=\"let host of data.hosted\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>{{data.username}}</mat-card-title>\n          <mat-card-subtitle><b>Will be held : </b>{{host.dateTime}}</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n          <p>\n            {{host.description}}\n          </p>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-button (click)=\"join(host.dateTime,host.roomname)\">JOIN</button>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n    <div class=\"column\">\n      <h3 style=\"text-align: center;\">Invites</h3>\n      <mat-card class=\"example-card\" style=\"margin-bottom: 10px;\" *ngFor=\"let invite of data.invites\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>{{data.username}}</mat-card-title>\n          <mat-card-subtitle><b>Will be held : </b>{{invite.dateTime}}</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n          <p>\n            {{invite.description}}\n          </p>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-button (click)=\"join(invite.dateTime,invite.roomname)\">JOIN</button>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/mymeeting/mymeeting.component.scss":
/*!****************************************************!*\
  !*** ./src/app/mymeeting/mymeeting.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".column {\n  display: flex;\n  flex-direction: column;\n  width: 40%; }\n\n.row {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXltZWV0aW5nL0M6XFxVc2Vyc1xcRGhhcm1pbFxcRGVza3RvcFxcdmlkZW9jYWxsYXBwLWZyb250ZW5kXFxsZWFybi1hbmd1bGFyLWZyb20tc2NyYXRjaC1zdGVwLWJ5LXN0ZXAvc3JjXFxhcHBcXG15bWVldGluZ1xcbXltZWV0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVLEVBQUE7O0FBR1o7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbXltZWV0aW5nL215bWVldGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2x1bW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/mymeeting/mymeeting.component.ts":
/*!**************************************************!*\
  !*** ./src/app/mymeeting/mymeeting.component.ts ***!
  \**************************************************/
/*! exports provided: MymeetingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MymeetingComponent", function() { return MymeetingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _twilioservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../twilioservice.service */ "./src/app/twilioservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var MymeetingComponent = /** @class */ (function () {
    function MymeetingComponent(userservice, twilioservice, router) {
        this.userservice = userservice;
        this.twilioservice = twilioservice;
        this.router = router;
    }
    MymeetingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userservice.getData(localStorage.getItem("userId")).subscribe(function (e) {
            _this.data = e;
        });
    };
    MymeetingComponent.prototype.join = function (dateTime, roomname) {
        var _this = this;
        this.twilioservice
            .getAccessToken(dateTime, this.data.username, roomname)
            .subscribe(function (result) {
            localStorage.setItem("accessToken", result.token);
            _this.router.navigate(["room"], {
                queryParams: {
                    roomName: roomname,
                    dateTime: dateTime,
                },
            });
        }, function (error) {
            console.log(error);
        });
    };
    MymeetingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-mymeeting",
            template: __webpack_require__(/*! ./mymeeting.component.html */ "./src/app/mymeeting/mymeeting.component.html"),
            styles: [__webpack_require__(/*! ./mymeeting.component.scss */ "./src/app/mymeeting/mymeeting.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _twilioservice_service__WEBPACK_IMPORTED_MODULE_3__["TwilioserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MymeetingComponent);
    return MymeetingComponent;
}());



/***/ }),

/***/ "./src/app/room/room.component.html":
/*!******************************************!*\
  !*** ./src/app/room/room.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-col\">\n  <div class=\"remote\">\n    <h3 class=\"title\">Remote Users</h3>\n    <hr>\n    <div #remote>\n\n    </div>\n  </div>\n  <div class=\"width-70\">\n    <div #local>\n\n    </div>\n    <div>\n      <button class=\"disconnect\" (click)='disconnect()'>Disconnect</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/room/room.component.scss":
/*!******************************************!*\
  !*** ./src/app/room/room.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-col {\n  display: flex; }\n\n.remote {\n  width: 30%;\n  background-color: #f6f6f6;\n  min-height: 100vh;\n  padding: 10px; }\n\n.box {\n  width: 100%;\n  height: 40%;\n  background-color: red; }\n\n.title {\n  text-align: center; }\n\n.width-70 {\n  width: 70%;\n  display: flex;\n  flex-direction: column-reverse; }\n\n.disconnect {\n  position: relative;\n  left: 30%;\n  bottom: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9vbS9DOlxcVXNlcnNcXERoYXJtaWxcXERlc2t0b3BcXHZpZGVvY2FsbGFwcC1mcm9udGVuZFxcbGVhcm4tYW5ndWxhci1mcm9tLXNjcmF0Y2gtc3RlcC1ieS1zdGVwL3NyY1xcYXBwXFxyb29tXFxyb29tLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsYUFBYSxFQUFBOztBQUdmO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcm9vbS9yb29tLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgtY29sIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucmVtb3RlIHtcclxuICB3aWR0aDogMzAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmJveCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLndpZHRoLTcwIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG59XHJcblxyXG4uZGlzY29ubmVjdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDMwJTtcclxuICBib3R0b206IDEwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/room/room.component.ts":
/*!****************************************!*\
  !*** ./src/app/room/room.component.ts ***!
  \****************************************/
/*! exports provided: RoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function() { return RoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _twilioservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../twilioservice.service */ "./src/app/twilioservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RoomComponent = /** @class */ (function () {
    function RoomComponent(twilioService, route, router) {
        var _this = this;
        this.twilioService = twilioService;
        this.route = route;
        this.router = router;
        this.route.queryParams.subscribe(function (params) {
            _this.roomName = params["roomName"];
            _this.dateTime = params["dateTime"];
        });
        this.accessToken = localStorage.getItem("accessToken");
    }
    RoomComponent.prototype.ngOnInit = function () {
        this.twilioService.localVideo = this.localVideo;
        this.twilioService.remoteVideo = this.remoteVideo;
        this.twilioService.connectToRoom(this.accessToken, {
            name: this.roomName,
            audio: true,
            video: { width: 240 },
        });
    };
    RoomComponent.prototype.disconnect = function () {
        this.twilioService.roomObj.disconnect();
        this.router.navigate(["dashboard"]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("local"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RoomComponent.prototype, "localVideo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("remote"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RoomComponent.prototype, "remoteVideo", void 0);
    RoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-room",
            template: __webpack_require__(/*! ./room.component.html */ "./src/app/room/room.component.html"),
            styles: [__webpack_require__(/*! ./room.component.scss */ "./src/app/room/room.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_twilioservice_service__WEBPACK_IMPORTED_MODULE_2__["TwilioserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RoomComponent);
    return RoomComponent;
}());



/***/ }),

/***/ "./src/app/setmeeting/setmeeting.component.html":
/*!******************************************************!*\
  !*** ./src/app/setmeeting/setmeeting.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  <input [(ngModel)]=\"username\" class=\"input is-primary\" type=\"text\" placeholder=\"Enter Your name\" />\n  <input [(ngModel)]=\"email\" class=\"input is-primary\" type=\"text\" placeholder=\"Enter Your email\" />\n  <button (click)='submit()'>Submit</button>\n</p> -->\n<div class=\"container\">\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title>Set Meeting</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <form class=\"example-form\">\n        <table class=\"example-full-width\" cellspacing=\"0\">\n          <tr>\n            <td>\n              <mat-form-field class=\"example-full-width\">\n                <input\n                  matInput\n                  placeholder=\"Enter Recipient Name\"\n                  name=\"rname\"\n                  [(ngModel)]=\"rname\"\n                  required\n                />\n              </mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <mat-form-field class=\"example-full-width\">\n                <input\n                  matInput\n                  placeholder=\"Enter Recipient Email\"\n                  type=\"email\"\n                  name=\"remail\"\n                  [(ngModel)]=\"remail\"\n                  required\n                />\n              </mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <mat-form-field class=\"example-full-width\">\n                <input\n                  matInput\n                  [owlDateTime]=\"dt1\"\n                  [owlDateTimeTrigger]=\"dt1\"\n                  name=\"datetime\"\n                  [(ngModel)]=\"datetime\"\n                  placeholder=\"Date Time\"\n                />\n                <owl-date-time #dt1></owl-date-time>\n              </mat-form-field>\n            </td>\n          </tr>\n        </table>\n      </form>\n      <mat-spinner\n        [style.display]=\"showSpinner ? 'block' : 'none'\"\n      ></mat-spinner>\n    </mat-card-content>\n    <mat-card-actions>\n      <button (click)=\"submit()\" mat-raised-button color=\"primary\">\n        Invite\n      </button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/setmeeting/setmeeting.component.scss":
/*!******************************************************!*\
  !*** ./src/app/setmeeting/setmeeting.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: relative;\n  min-height: 100vh; }\n\n.example-card {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 50%;\n  -webkit-transform: translate(-50%, 50%);\n          transform: translate(-50%, 50%); }\n\n.example-full-width {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0bWVldGluZy9DOlxcVXNlcnNcXERoYXJtaWxcXERlc2t0b3BcXHZpZGVvY2FsbGFwcC1mcm9udGVuZFxcbGVhcm4tYW5ndWxhci1mcm9tLXNjcmF0Y2gtc3RlcC1ieS1zdGVwL3NyY1xcYXBwXFxzZXRtZWV0aW5nXFxzZXRtZWV0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULFVBQVU7RUFDVix1Q0FBK0I7VUFBL0IsK0JBQStCLEVBQUE7O0FBR2pDO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2V0bWVldGluZy9zZXRtZWV0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jYXJkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB3aWR0aDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/setmeeting/setmeeting.component.ts":
/*!****************************************************!*\
  !*** ./src/app/setmeeting/setmeeting.component.ts ***!
  \****************************************************/
/*! exports provided: SetmeetingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetmeetingComponent", function() { return SetmeetingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");




var SetmeetingComponent = /** @class */ (function () {
    function SetmeetingComponent(userservice, _snackBar) {
        this.userservice = userservice;
        this._snackBar = _snackBar;
    }
    SetmeetingComponent.prototype.ngOnInit = function () { };
    SetmeetingComponent.prototype.submit = function () {
        var _this = this;
        console.log("Submit clicked");
        var data = {
            userId: localStorage.getItem("userId"),
            recieverEmail: this.remail,
            recieverName: this.rname,
            dateTime: this.datetime,
        };
        this.userservice.invite(data).subscribe(function (data) {
            _this._snackBar.open("Invite Sent sucessfully", "Okay", {
                duration: 2000,
            });
            _this.datetime = "";
            _this.rname = "";
            _this.remail = "";
            console.log(data);
            console.log("invite sent successfully");
        }, function (error) {
            console.log(error);
        });
    };
    SetmeetingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-setmeeting",
            template: __webpack_require__(/*! ./setmeeting.component.html */ "./src/app/setmeeting/setmeeting.component.html"),
            styles: [__webpack_require__(/*! ./setmeeting.component.scss */ "./src/app/setmeeting/setmeeting.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], SetmeetingComponent);
    return SetmeetingComponent;
}());



/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\r\n  <li class=\"breadcrumb-item\" *ngFor=\"let breadcrumb of breadcrumbs; let last = last;\">\r\n    <a *ngIf=\"!last; else lastItem\" [routerLink]=\"[breadcrumb.url]\">{{ breadcrumb.label }}</a>\r\n    <ng-template #lastItem>{{ breadcrumb.label }}</ng-template>\r\n  </li>\r\n</ol>\r\n"

/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
  \***********************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
// Inspired on: http://brianflove.com/2016/10/23/angular2-breadcrumb-using-router/




var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.breadcrumbs = [];
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._routerSubscription = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () { return _this.activatedRoute; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (route) { return route.outlet === 'primary'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (route) { return route.data; }))
            .subscribe(function (event) {
            if (event['data'] && event['data'].breadcrumbs) {
                _this.breadcrumbs = event['data'].breadcrumbs;
            }
            else {
                // Empty breadcrumbs
                _this.breadcrumbs = [];
            }
        });
    };
    BreadcrumbComponent.prototype.ngOnDestroy = function () {
        if (this._routerSubscription) {
            this._routerSubscription.unsubscribe();
        }
    };
    BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/shared/breadcrumb/breadcrumb.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./styles/breadcrumb.scss */ "./src/app/shared/breadcrumb/styles/breadcrumb.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/shared/breadcrumb/styles/breadcrumb.scss":
/*!**********************************************************!*\
  !*** ./src/app/shared/breadcrumb/styles/breadcrumb.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "breadcrumb .breadcrumb {\n  background: transparent;\n  border-radius: 0;\n  margin: 20px 0;\n  padding: 0; }\n  breadcrumb .breadcrumb .breadcrumb-item {\n    color: #FFF;\n    font-size: 15px;\n    font-weight: 500;\n    letter-spacing: 1.9px; }\n  breadcrumb .breadcrumb .breadcrumb-item a {\n      color: #FFF;\n      text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2JyZWFkY3J1bWIvc3R5bGVzL0M6XFxVc2Vyc1xcRGhhcm1pbFxcRGVza3RvcFxcdmlkZW9jYWxsYXBwLWZyb250ZW5kXFxsZWFybi1hbmd1bGFyLWZyb20tc2NyYXRjaC1zdGVwLWJ5LXN0ZXAvc3JjXFxhcHBcXHNoYXJlZFxcYnJlYWRjcnVtYlxcc3R5bGVzXFxicmVhZGNydW1iLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxVQUFVLEVBQUE7RUFMZDtJQVFNLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHFCQUFxQixFQUFBO0VBWDNCO01BY1EsV0FBVztNQUNYLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2JyZWFkY3J1bWIvc3R5bGVzL2JyZWFkY3J1bWIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJyZWFkY3J1bWIge1xyXG4gIC5icmVhZGNydW1iIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAuYnJlYWRjcnVtYi1pdGVtIHtcclxuICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuOXB4O1xyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _sdk_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../sdk/index */ "./sdk/index.ts");
/* harmony import */ var _shared_slugify_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/slugify.pipe */ "./src/app/shared/slugify.pipe.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/shared/breadcrumb/breadcrumb.component.ts");









// Material modules


var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbComponent"],
                _shared_slugify_pipe__WEBPACK_IMPORTED_MODULE_8__["SlugifyPipe"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _sdk_index__WEBPACK_IMPORTED_MODULE_7__["SDKBrowserModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]
            ],
            providers: [
                _shared_slugify_pipe__WEBPACK_IMPORTED_MODULE_8__["SlugifyPipe"]
            ],
            exports: [
                _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                // Material modules
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/slugify.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/shared/slugify.pipe.ts ***!
  \****************************************/
/*! exports provided: SlugifyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlugifyPipe", function() { return SlugifyPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SlugifyPipe = /** @class */ (function () {
    function SlugifyPipe() {
    }
    SlugifyPipe.prototype.transform = function (input) {
        return input.toString().toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(/[^\w\-]+/g, '') // Remove all non-word chars
            .replace(/\-\-+/g, '-') // Replace multiple - with single -
            .replace(/^-+/, '') // Trim - from start of text
            .replace(/-+$/, ''); // Trim - from end of text
    };
    SlugifyPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'slugify' })
    ], SlugifyPipe);
    return SlugifyPipe;
}());



/***/ }),

/***/ "./src/app/twilioservice.service.ts":
/*!******************************************!*\
  !*** ./src/app/twilioservice.service.ts ***!
  \******************************************/
/*! exports provided: TwilioserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwilioserviceService", function() { return TwilioserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var twilio_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! twilio-video */ "./node_modules/twilio-video/es5/index.js");
/* harmony import */ var twilio_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(twilio_video__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");






var TwilioserviceService = /** @class */ (function () {
    function TwilioserviceService(http, rendererFactory) {
        this.http = http;
        this.rendererFactory = rendererFactory;
        this.msgSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]("");
        this.microphone = true;
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    TwilioserviceService.prototype.getAccessToken = function (dateTime, identity, roomname) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + "/token?datetime=" + dateTime + "&identity=" + identity + "&roomName=" + roomname);
    };
    TwilioserviceService.prototype.connectToRoom = function (accessToken, options) {
        var _this = this;
        Object(twilio_video__WEBPACK_IMPORTED_MODULE_2__["connect"])(accessToken, options).then(function (room) {
            _this.roomObj = room;
            if (!_this.previewing && options["video"]) {
                _this.startLocalVideo();
                _this.previewing = true;
            }
            _this.roomParticipants = room.participants;
            room.participants.forEach(function (participant) {
                _this.attachParticipantTracks(participant);
            });
            room.on("participantDisconnected", function (participant) {
                _this.detachTracks(participant);
            });
            room.on("participantConnected", function (participant) {
                _this.roomParticipants = room.participants;
                _this.attachParticipantTracks(participant);
                participant.on("trackPublished", function (track) {
                    console.log(participant);
                    var element = track.attach();
                    _this.renderer.data.id = track.sid;
                    _this.renderer.setStyle(element, "height", "100 % ");
                    _this.renderer.setStyle(element, "max - width", "100 % ");
                    _this.renderer.appendChild(_this.remoteVideo.nativeElement, element);
                });
            });
            // When a Participant adds a Track, attach it to the DOM.
            room.on("trackPublished", function (track, participant) {
                _this.attachTracks([track]);
            });
            // When a Participant removes a Track, detach it from the DOM.
            room.on("trackRemoved", function (track, participant) {
                _this.detachTracks([track]);
            });
            room.once("disconnected", function (room) {
                room.localParticipant.tracks.forEach(function (track) {
                    track.track.stop();
                    var attachedElements = track.track.detach();
                    attachedElements.forEach(function (element) { return element.remove(); });
                    room.localParticipant.videoTracks.forEach(function (video) {
                        var trackConst = [video][0].track;
                        trackConst.stop(); // <- error
                        trackConst.detach().forEach(function (element) { return element.remove(); });
                        room.localParticipant.unpublishTrack(trackConst);
                    });
                    var element = _this.remoteVideo.nativeElement;
                    while (element.firstChild) {
                        element.removeChild(element.firstChild);
                    }
                    var localElement = _this.localVideo.nativeElement;
                    while (localElement.firstChild) {
                        localElement.removeChild(localElement.firstChild);
                    }
                });
            });
        }, function (error) {
            alert(error.message);
        });
    };
    TwilioserviceService.prototype.attachParticipantTracks = function (participant) {
        var _this = this;
        participant.tracks.forEach(function (part) {
            _this.trackPublished(part);
        });
    };
    TwilioserviceService.prototype.trackPublished = function (publication) {
        var _this = this;
        if (publication.isSubscribed)
            this.attachTracks(publication.track);
        if (!publication.isSubscribed)
            publication.on("subscribed", function (track) {
                _this.attachTracks(track);
            });
    };
    TwilioserviceService.prototype.attachTracks = function (tracks) {
        var element = tracks.attach();
        this.renderer.data.id = tracks.sid;
        this.renderer.setStyle(element, "height", "100 % ");
        this.renderer.setStyle(element, "max - width", "100 % ");
        this.renderer.appendChild(this.remoteVideo.nativeElement, element);
    };
    TwilioserviceService.prototype.startLocalVideo = function () {
        var _this = this;
        this.roomObj.localParticipant.videoTracks.forEach(function (publication) {
            var element = publication.track.attach();
            _this.renderer.data.id = publication.track.sid;
            _this.renderer.setStyle(element, "width", "25 % ");
            _this.renderer.addClass(element, "localvideo");
            _this.renderer.appendChild(_this.localVideo.nativeElement, element);
        });
    };
    TwilioserviceService.prototype.detachTracks = function (tracks) {
        var _this = this;
        tracks.tracks.forEach(function (track) {
            var element = _this.remoteVideo.nativeElement;
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
        });
    };
    TwilioserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"]])
    ], TwilioserviceService);
    return TwilioserviceService;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sdk_services_custom_UserDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sdk/services/custom/UserDetails */ "./sdk/services/custom/UserDetails.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");





var UserService = /** @class */ (function () {
    function UserService(UserDetailsApi, http) {
        this.UserDetailsApi = UserDetailsApi;
        this.http = http;
    }
    UserService.prototype.invite = function (data) {
        return this.UserDetailsApi.invite(data);
    };
    UserService.prototype.getData = function (userId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url + "/api//userDetails/" + userId);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sdk_services_custom_UserDetails__WEBPACK_IMPORTED_MODULE_2__["UserDetailsApi"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    api_url: "https://update-video-chat.herokuapp.com",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sdk */ "./sdk/index.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(function (err) { return console.error(err); });
_sdk__WEBPACK_IMPORTED_MODULE_3__["LoopBackConfig"].setBaseURL(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dharmil\Desktop\videocallapp-frontend\learn-angular-from-scratch-step-by-step\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
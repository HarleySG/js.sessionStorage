
/*
* @class like ES5
* @referencia https://codepen.io/HarleySG/pen/GzLZNv
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// pseudo clases
var BrowserSession = /** @class */ (function () {
    /*
    * @class BrowserSession
    * Functión con utilidad de acceder al sessionStorage
    */
    function BrowserSession() {
    }
    BrowserSession.prototype.set = function (id, value) {
        if (typeof value === 'object')
            value = JSON.stringify(value);
        sessionStorage.setItem(id, value);
    };
    BrowserSession.prototype.get = function (id) {
        var value = sessionStorage.getItem(id);
        try {
            return JSON.parse(value);
        }
        catch (e) {
            return value;
        }
    };
    return BrowserSession;
}());
var GetSession = /** @class */ (function (_super) {
    __extends(GetSession, _super);
    function GetSession(key) {
        var _this = _super.call(this) || this;
        _this.key = key;
        return _this;
    }
    GetSession.prototype.getSession = function () {
        var keyString = String(this.key);
        var session = new BrowserSession();
        return session.get(keyString);
    };
    return GetSession;
}(BrowserSession));
var SetSession = /** @class */ (function (_super) {
    __extends(SetSession, _super);
    function SetSession(key, value) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.value = value;
        return _this;
    }
    SetSession.prototype.setSession = function () {
        var keyString = String(this.key);
        var valueString = String(this.value);
        var session = new BrowserSession();
        return session.set(keyString, valueString);
    };
    return SetSession;
}(BrowserSession));
var PathAuth = /** @class*/ (function () {
    /*
    *
    *
    */
   function PathAuth(arrPaths){
      /* constructor */
      this.arr = arrPaths;
   };
   PathAuth.prototype.mapArr = function () {
      this.arr.map(function(path){
         if(path && sessionStorage.getItem('oauth') == 'false'){
            window.location.pathname = '/js.sessionStorage/';
            return false;
         }else{
             // window.history.back();
         }
      })
   };
   return PathAuth;
}());
/*
* getSessionDate
* @function
* @referencia GetSession [@class]
*/
var getSession = function (k) { return new GetSession(k).getSession(); };
/*
* setSessionDate
* @function
* @referencia SetSession [@class]
*/
var setSession = function (k, v) { return new SetSession(k, v).setSession(); };
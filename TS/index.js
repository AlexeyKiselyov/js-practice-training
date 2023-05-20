var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var House = /** @class */ (function () {
    function House(type, street) {
        this.type = type;
        this.street = street;
        this.tenants = [];
    }
    House.prototype.showAddress = function () {
        console.log('Address: ' + this.street);
    };
    House.prototype.showType = function () {
        console.log('House Type: ' + this.type);
    };
    House.prototype.addTenant = function (tenant) {
        this.tenants.push(tenant);
    };
    House.prototype.showTenants = function () {
        console.log(this.tenants);
    };
    return House;
}());
var StoneHouse = /** @class */ (function (_super) {
    __extends(StoneHouse, _super);
    function StoneHouse(street, generalTenant) {
        var _this = _super.call(this, 'stone', street) || this;
        // Добавляем владельца квартиры
        _this.chargeOfTheHouse = generalTenant;
        _this.addTenant(generalTenant);
        return _this;
    }
    StoneHouse.prototype.showTenants = function () {
        console.log('General: ' + this.chargeOfTheHouse);
        // Запускаем родительский метод showTenants();
        _super.prototype.showTenants.call(this);
    };
    return StoneHouse;
}(House));
var stoneHouse = new StoneHouse('Stone-world', 'Max');
stoneHouse.addTenant('Anton');
stoneHouse.addTenant('Nikita');
stoneHouse.showTenants();
stoneHouse.showType();
stoneHouse.showAddress();

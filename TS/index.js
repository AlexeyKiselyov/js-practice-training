"use strict";
class House {
    constructor(type, street) {
        this.type = type;
        this.street = street;
        this.tenants = [];
    }
    showAddress() {
        console.log('Address: ' + this.street);
    }
    showType() {
        console.log('House Type: ' + this.type);
    }
    addTenant(tenant) {
        this.tenants.push(tenant);
    }
    showTenants() {
        console.log(this.tenants);
    }
}
class StoneHouse extends House {
    constructor(street, generalTenant) {
        super('stone', street); // Вызов родительского конструктора
        // Добавляем владельца квартиры
        this.chargeOfTheHouse = generalTenant;
        super.addTenant(generalTenant);
    }
    showTenants() {
        console.log('General: ' + this.chargeOfTheHouse);
        // Запускаем родительский метод showTenants();
        super.showTenants();
    }
}
const stoneHouse = new StoneHouse('Stone-world', 'Max');
stoneHouse.addTenant('Anton');
stoneHouse.addTenant('Nikita');
stoneHouse.showTenants();
stoneHouse.showType();
stoneHouse.showAddress();

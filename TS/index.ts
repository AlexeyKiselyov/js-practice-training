class House {
  private tenants: string[] = [];

  constructor(private readonly type: string, private street: string) {}

  public showAddress(this: House) {
    console.log('Address: ' + this.street);
  }

  public showType(this: House) {
    console.log('House Type: ' + this.type);
  }

  public addTenant(tenant: string) {
    this.tenants.push(tenant);
  }

  public showTenants() {
    console.log(this.tenants);
  }
}

class StoneHouse extends House {
  private chargeOfTheHouse: string; // Главный в доме

  constructor(street: string, generalTenant: string) {
    super('stone', street); // Вызов родительского конструктора

    // Добавляем владельца квартиры
    this.chargeOfTheHouse = generalTenant;
    super.addTenant(generalTenant);
  }

  public showTenants() {
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

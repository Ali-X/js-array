let auto = {
  brand: 'BMW',
  year: 2003,
  mileage: 1000,
  color: 'black',
  ignited: false,
  run: false,
  fuel: 0,
  isIgnited: function () {
    return this.ignited;
  },
  hasFuel: function () {
    return this.fuel !== 0;
  },
  addFuel: function () {
    this.fuel = 100;
  },
  ignite: function () {
    if (this.hasFuel()) {
      this.ignited = true;
    } else {
      console.log("Hужно заправить автомобиль");
    }
  },
  runAuto: function () {
    if (this.isIgnited()) {
      this.run = true;
      console.log("Машина " + this.brand + " марки " + this.color + " цвета поехала!");
    } else {
      console.log("Включите вначале зажигание");
    }
  },
  stop: function () {
    if (this.isIgnited()) {
      this.run = false;
      this.ignited = false;
      console.log("Машинка остановилась");
    } else {
      console.log("Зажигание и так выключено");
    }
  }
};

auto.ignite();
auto.addFuel();
auto.runAuto();
auto.ignite();
auto.runAuto();
auto.stop();
auto.stop();
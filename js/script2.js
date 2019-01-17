let auto = {
  brand: 'BMW',
  year: 2003,
  mileage: 1000,
  color: 'black',
  ignited: false,
  run: false,
  fuel: 0,
};

function isIgnited() {
  return auto.ignited;
}

function hasFuel() {
  return auto.fuel !== 0;
}

function addFuel() {
  auto.fuel = 100;
}

function ignite() {
  if (hasFuel()) {
    auto.ignited = true;
  } else {
    console.log("Hужно заправить автомобиль");
  }
}

function run() {
  if (isIgnited()) {
    auto.run = true;
    console.log("Машина " + auto.brand + " марки " + auto.color + " цвета поехала!");
  } else {
    console.log("Включите вначале зажигание");
  }
}

function stop() {
  if (isIgnited()) {
    auto.run = false;
    auto.ignited = false;
    console.log("Машинка остановилась");
  } else {
    console.log("Зажигание и так выключено");
  }
}

ignite();
addFuel();
run();
ignite();
run();
stop();
stop();
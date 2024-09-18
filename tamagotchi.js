export class Tamagatchi
{

  constructor(name)
  {
    this.name = name;
    this.foodLevel = 4;
    this.healthLevel = 4;
    this.sportLevel = 4;
  }

  //These are the drain amounts

  hungerDrain()
  {
    setInterval(() =>
    {
        this.foodLevel-=1;
    }, 10000);
  }

  healthDrain()
  {
    setInterval(() =>
    {
        this.healthLevel-=1;
    }, 10000);
  }

  sportDrain()
  {
    setInterval(() =>
    {
      this.sportLevel-=1;
    }, 10000);
  }


  //These are the functions to feed/sleep/play with the Tamagatchi

  feed() {
    this.foodLevel += 1;
  }

  health() {
    this.healthLevel += 1;
  }

  sport() {
    this.sportLevel += 1;
  }


  didTamagatchiDie()
  {
    if(this.foodLevel === 0 || this.healthLevel === 0 || this.sportLevel === 0)
    {
      return true;
    }
    else return false;
  }


}
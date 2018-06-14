class Restaurant{
    constructor(obj){
        const {cash,seats,staff} = obj;
        this.cash = cash;
        this.seats = seats;
        this.staff =staff;
    }
    hire(staff){
        this.staff.push(staff);
    }
    fire(name){
        let ind = this.staff.findIndex(val=>val.name===name);
        this.staff.splice(ind,1);
    }
}


class Staff {
    constructor(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }

    doAWork() {
        console.log('一次工作');
    }
}

class Waiter extends Staff{
    constructor(...arg){
        super(...arg);
    }

    oAWork(food) {
        if (Array.isArray(food)) {
            console.log('点菜', food.join(','))
            return food.map(val => new Food(val));
        } else {
            console.log('上菜', food);
        }
    }
}

class Cook extends Staff{
    constructor(...arg){
        super(...arg);
    }
    oAWork(food){
        console.log('烹饪',food);
    }
}
class Food{
    constructor(name,price,cost){
        this.name = name;
        this.price = price;
        this.name = name;
    }
}

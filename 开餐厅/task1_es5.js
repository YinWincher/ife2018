function extend(sub,sup){
    let F = function(){}
    F.prototype = sup.prototype;
    sub.prototype = new F();
    sub.prototype.constructor = sub;
}
function Restaurant(obj){
    const {cash,seats,staff} = obj;
    this.cash = cash;
    this.seats = seats;
    this.staff =staff;
}
Restaurant.prototype = {
    constructor : Restaurant,
    hire : function(staff){
        this.staff.push(staff);
    },
    fire : function(name){
        let ind = this.staff.findIndex(val=>val.name===name);
        this.staff.splice(ind,1);
    }
}

function Staff(name,id,salary){
    this.name = name;
    this.id = id;
    this.salary = salary;
}
Staff.prototype.doAWork = function(){
    console.log('一次工作');
}
function Waiter(...ar){
    Staff.call(this,...ar);
}
extend(Waiter,Staff);
Waiter.prototype.doAWork = function(food){
    if(Array.isArray(food)){
        console.log('点菜',food.join(','))
        return food.map(val=>new Food(val));
    }else{
        console.log('上菜',food);
    }
}
function Cook(...ar){
    Staff.call(this,...ar);
}
extend(Cook,Staff);
Cook.prototype.doAWork = function(food){
    console.log('烹饪',food);
}

function Food(name,price,cost){
    this.name = name;
    this.price = price;
    this.name = name;
}





var Singleton = function(fn){
    let instance;
    function createInstance(...ar){
        let object = new fn(...ar)
        return object;
    }
    return function(...a){
        debugger;
        return {
            getInstance : function(){
                if(!instance){
                    instance = createInstance(...a);
                }
                return instance;
            }
        }
    }
};
var cookSingle = Singleton(Cook);
var cook1 = cookSingle();

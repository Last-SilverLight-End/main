/*function first(){
    second();
    console.log("first");
}

function second()
{
    third();
    console.log("second");
}

function third()
{
    console.log("third");
}

first();*/

/*const relation2 = {
    name : 'zero',
    friends : ['nero', 'hero' , 'xero'],
    logFriends(){
        this.friends.forEach(friend=> {
            console.log(this.name,friend);
        });
    },
};
relation2.logFriends();*/

const candyMachine = {
    status : {
        name : 'node',
        count : 5,

    },
    getCandy(){
        this.status.count--;
        return this.status.count;
    },
};
const {getCandy, status : {count}} = candyMachine;
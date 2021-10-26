/*function findAndSaveUser(Users){
    Users.findOne({})
    .then((user)=> {
        user.name= 'zero';
        return user.save();
    })
    .then((user)=> {
        return Users.findOne({ gender : 'm'});
    })
    .then((user) => {

    })
    .catch(err => {
        console.error(err);
    });
} // 아직도 너무 길다 */

/*async function findAndSaveUser(Users){
    try{
    let user = await Users.findOne({});
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({gender : 'm'});
    }
    catch(error){
        console.error(error);
    }
    
} // 아니면 밑과 같이 짤 수 있다.*/

const findAndSaveUser = async (Users) =>{
    try {
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({ gender : 'm'});
    }
    catch(error){
        console.error(error);
    }
};

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');

(async () => {
    for await (promise of [promise1,promise2]){
        console.log(promise);
    }
})();
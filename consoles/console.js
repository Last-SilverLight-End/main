const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    coutside:{
        inside:{
            key : 'value',
        },
    },
};

console.time('전체시간');
console.log('평범한 로그 입니다 쉼표로 구분 가능');
console.log(string, number, boolean);
console.error('에러메세지는 console.error');

console.table([{name : 'zero' , birth : 1994} , {name : 'hero' , birth : 1988}]);

console.dir(obj , {colors : false, depth : 2});
console.dir(obj, {colors : true , depth : 1});

console.time('시간 측정');
for(let i =0; i<10000; i++)
{

}
console.timeEnd('시간 측정');

function b(){
    console.trace('에러 위치 추적');
}

function a(){
    b();
}

a();

console.timeEnd('전체시간');
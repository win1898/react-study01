//reduce() 사용하기

let arrNums=[1,2,3,4,5,6,7,8,9,10];

function sum(numbers){
    return numbers.reduce((total,num)=> total + num,0);

}
console.log(sum(arrNums));

const query = '?banana=100&apple=20&orange=30';

function parse1(qs){
    const queryString = qs.substr(1);
    const chunks = queryString.split('&');

    return chunks
    .map(chunks =>{
        const [key, value] = chunks.split('=');
        return {key,value};
    })
    .reduce((result,item) => {
        result[item.key]=item.value;
        return result;
    },{});
}
console.log(parse1(query));
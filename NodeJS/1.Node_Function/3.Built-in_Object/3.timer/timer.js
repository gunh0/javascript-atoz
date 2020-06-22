const timeout = setTimeout(()=>{
    console.log('Run after 1.5 seconds')
},1500);

const interval = setInterval(()=>{
    console.log('Every 1 sec.');
},1000);

const timeout2 = setTimeout(()=>{
    console.log('No.');
},3000);

setTimeout(()=>{
    clearTimeout(timeout2);
    clearInterval(interval);
},2500);

const immediate = setImmediate(()=>{
    console.log('Immediately')
})
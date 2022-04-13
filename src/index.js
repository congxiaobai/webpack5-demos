import test from '@/test.js'

const hello  = async ()=>{
   const res  =  await test();
   console.log(res)
}
hello()
// gọi ra từ index.js đê gọn ko phải gọi nhiều file
// đây là import tĩnh
import { calculation } from './index.js';
const pi=3.14;
const array=[];
const object={};
const MyMath={
    pi,
    array,
    object
}
export {pi,array,object};
export default MyMath

import {formatIntl} from './types'

interface TypeProps{
    Intl:formatIntl;
}
const IntlCodes=({Intl='en'}:TypeProps)=>{
    const  {codeNameDay,codeNameMonth} =require(`./codeName${ Intl.toUpperCase()}`);
    return {formatDays:codeNameDay,formatMonth:codeNameMonth}
 }

 export default IntlCodes
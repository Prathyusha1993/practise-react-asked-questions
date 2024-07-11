// Name Export                       ------>     Name Import
export const name = 'value' ;                    import {name} from '...';

//Defaeult Export                    ------>     Default Import         
export default 'value';                           import anyName from '...';

//Rename Export                      ------>     name Import
export {name as newName};                         import {newName} from '...';

//Exporting multiple values          ------>     Importing multiple values
export {name1, name2 as newName2};                  import {name1, newName2} from '...';
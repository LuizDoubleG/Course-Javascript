//switch case
 /* switch (variable){
    case (condition):
         execute script
    break; (to exit condition comparison) 
 }
 */

let permission;
permission = 'manager'
switch (permission){
    case 'default':
        console.log('Default User');
    break;

    case 'manager':
        console.log('Manager User');
    break;

    case 'principal':
        console.log('Principal User');
    break;

    default:
        console.log('Undefined User');
}

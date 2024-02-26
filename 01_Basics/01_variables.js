const accountId=144553
let accountEmail="ayush@gmail.com"
var acountPassword="12345"
accountCity="Panipat"


//  accountId=155662     not  allowed as accountId is a constant 

accountEmail="aniket@gmail.com"
accountPassword="67890"
accountCity="Sonepat"


/* Prefer not to use var
   because of block and functional issue  in var*/


let accountState;     //its allowed not to initilize value till last 

console.table([accountId,accountEmail, accountPassword, accountCity,accountState])




//login page

let registered_id;
let registered_password;

let entered_id;
let entered_password;

if( entered_id == registered_id)
{
  if(entered_password== registered_password )
  {
    console.log("login successful");
  }
  else{
    console.log("wrong password");
  }
}
  
else
{
  console.log("wrong id")
}

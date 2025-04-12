

////////////////////
// Development URL
////////////////////

var serverUrl = "http://localhost:3001/api/v1/business";


/////////////////////////
// Production URL
//////////////////////////
//var serverUrl = "https://filipworks.com/api/api/v1/business"


async function GetUser(id){

    try{
      
        const response = await fetch(serverUrl + "/getUser/"+id);

        if (!response.ok) {
            toastr.error('Network response was not ok' + response.statusText);
        }

        const data = await response.json();
        console.log("data: "+data);

        if (data.messages.code === 0) {
            localStorage.setItem("id", data.response._id);
            localStorage.setItem("token", data.response.token);
            localStorage.setItem("subscriptionplan", data.response.subscriptionPlan);
          
            return data
        } else {
            toastr.error(data.messages.message);
            return null
        }

    }catch(e){
        console.error("Error: ", e);
        toastr.error("Something went wrong, Please try again later.");
        return null
    }

}
# Api.js
It's a promise based wrapper of **XML Request** in Javascript

EXAMPLE
First set BASE_URL in Api.js file

    let  BASE_URL  =  "http://www.example.com/api/"
   
  Now for `GET` Request without Params
  

    async sendRequest() {
       let endPoint  =  "getListOfSomethings"
        try {
	    	let resp  =  await  api.get(endPoint)
    	    alert(JSON.stringify(resp))
        } catch (error) {
    	    alert(error)
        }
      }
  Now for `GET` Request with Params
  

    async sendRequest() {
        let endPoint  =  "getListOfSomethings"
        let params  =  "param1=VALUE1&param2=VALUE2"
        try {
    	    let resp  =  await  api.get(endPoint,params)
    	    alert(JSON.stringify(resp))
        } catch (error) {
    	    alert(error)
        }
      }

   
  Now for `POST` Request 
  

    async sendRequest() {
        let endPoint  =  "Login"
        let params  =  "username=Jhondoe&pass=abc123"
        try {
    	    let resp  =  await  api.post(endPoint,params)
    	    alert(JSON.stringify(resp))
        } catch (error) {
    	    alert(error)
        }
      }

## And thats its!

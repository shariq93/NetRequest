const BASE_URL = "YOUR API BASE URL"

class Api {
  get = (end_point, params) => {
    let url = BASE_URL + end_point;
    let executer = (resolve, reject) => {
      var http = new XMLHttpRequest();
      if (params != null && params != '') {
        url += '?' + params
      }
      http.open('GET', url, true);
      http.onreadystatechange = function () {
        if (http.readyState == 4) {
          if (http.status == 200) {
            console.log("makeGetRequest:  " + http.response);
            json = JSON.parse(http.response);

            resolve(json);

          } else {
            reject(http._response);
          }
        }
      }
      http.send();
    }
    var promise = new Promise(executer);


    return promise;
  }

  post = (end_point, params) => {
    let url = BASE_URL + end_point;
    let executer = (resolve, reject) => {
      var http = new XMLHttpRequest();
      http.open('POST', url, true);
      http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      http.onreadystatechange = function () {//Call a function when the state changes.

        if (http.readyState == 4) {
          if (http.status == 200) {

            json = JSON.parse(http.response);

            resolve(json);


          } else {

            reject(http._response);

          }
        }
      }
      http.send(params);
    }
    var promise = new Promise(executer);


    return promise;
  }



}
const api = new Api();
export default api;

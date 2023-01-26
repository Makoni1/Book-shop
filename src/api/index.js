import axios from 'axios';
let API_URL = 'https://63cfb2321098240437842ac6.mockapi.io';
   export default function callApi(items, method = 'GET', body) {
       return axios({
           method,
           url: `${API_URL}/${items}`,
           data: body
       }).catch(err => {
           console.log(err);
       });
}
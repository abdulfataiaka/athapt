const AthaptRest = require('@athapt/rest');

const request = AthaptRest.request(null);
console.log(request.field);

const response = AthaptRest.response(null);
console.log(response.field);

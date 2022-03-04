var chai = require('chai'),
    should = chai.should,
    expect = chai.expect,
    Promise = require('bluebird'),
    request = require('superagent-promise')(require('superagent'), Promise),
    chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var url = process.env.URL || 'http://localhost:8000/todos'; 

function post(url, data) {
    return request.post(url)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .send(data)
    .end();
}

function get(url) {
    return request.get(url)
    .set('Accept', 'application/json')
    .end();
}

function del(url) {
    return request.del(url).end();
}

function update(url, method, data) {
    return request(method, url)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .send(data)
    .end(); 
}


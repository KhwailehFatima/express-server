'use strict'

const supertest=require('supertest');
const server=require('../server');
const request=supertest(server.app); //to fake running our server

describe ('API server',()=>{
    //testing
    it ('Home page works', async ()=>{
        const res =await request.get('/');  //calling the home page route
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('Hello World')
    });
    it (('Person route works'), async ()=>{
        const res= await request.post('/person').query({
            name: 'Fatima', age:'28', gender: 'female'
        });
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('28');
    });
})
 import React, { Component } from 'react';
 import './App.css';
 import Customer from './components/Customer';

const customers = [
    {
    'id':1,
    'image': 'http://placeimg.com/64/64/1',
    'name': '최낙준',
    'birthday': '910914',
    'gender': '남자',
    'job': '사원'
},
{
    'id':2,
    'image': 'http://placeimg.com/64/64/2',
    'name': '홍길동',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
},
{
    'id':3,
    'image': 'http://placeimg.com/64/64/3',
    'name': '이순신',
    'birthday': '912392',
    'gender': '여자',
    'job': '중학생'
}
]


 class App extends Component {
     render() {
         return (
             <div>
             {
                 customers.map(c => {
                     return  (
                     <Customer 
                        key={c.id}
                        id={c.id} 
                        image={c.image}
                        name={c.name}
                        birthday={c.birthday}
                        gender={c.gender}
                        job={c.job}
                     />
                     );
                 })
             }
              </div>
         );
     }
 }

 export default App;

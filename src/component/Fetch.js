import React from 'react';

class Fetch extends React.Component {

    request = (metod , url, body = null) => {
         const config = {
            metod,
            headers: {},
            body,
         }
        return fetch(url)
        .then( res =>{ 
            if(res.status >=400){
                const err = new Error("Error")
                throw(err)
            }
            res.json()}
            )
    }

     componentDidMount = () => {
        this.request('GET', 'https://reqres.in/api/register' , JSON.stringify({email: "eve.holt@reqres.in",
        password: "pistol"}))
        .then( resJson => {
            console.log(resJson)
        })
        .catch( err => console.log(err))
    }

 render(){
     return(
         <div>
             {/* <button onClick={this.getData}>get data</button>   */}
         </div>
     )
 }
}

export default Fetch;
import { useState, useEffect } from 'react';
import axios from 'axios';

const UseLoginValidator = () => {
  const [isLogged, setIsLogged] = useState(false);

  const fetchUser = async () => {
    try {
      var headers = {headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('user_token')}}

      const res = await axios.get('/users/me', headers);
      if (res.status === 200) {
        setIsLogged(true);
      }
    }
    catch(e) {
      console.log(e);
    }
  }

  useEffect(
    () => {
      fetchUser();
    }, [isLogged]
  )

  return isLogged;
}

export default UseLoginValidator;

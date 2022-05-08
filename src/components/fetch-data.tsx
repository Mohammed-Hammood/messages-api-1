
import { useState, useEffect } from 'react';
import axios from 'axios';



//google-chrome --disable-web-security --user-data-dir="/Users/mohammed/Library/ApplicationSupport/Google/Chrome"
export default  function  useFetch<useFetchProps>() {
    const [messages, setMessages] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(()=> {
        const url = 'http://f0665380.xsph.ru/';
        setLoading(true);
          const bodyFormData = new FormData();
          bodyFormData.append('actionName', 'MessagesLoad');
          bodyFormData.append('messageId', "2698");
          bodyFormData.append('oldMessages', "true");
          axios.post(url, bodyFormData)
          .then((response) => {
            if(response.data.Messages.length > 0){
              console.log('red: ', response.data.Messages);
              setLoading(false);
              setMessages(response.data.Messages)
            }
            return response;
          })
          .catch(err => console.log(err))
    }, []);
  return {
      loading,
      messages
  }
}
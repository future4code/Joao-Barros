import { useState, useCallback } from "react";
import axios from "axios";

const useData = () => {

  const [data, setData] = useState(null)

  const request = useCallback(async (url, body, header, method) => {
    let response

    if (method.toLowerCase() === 'post') {
      try {
        response = await axios.post(url, body, header)
      } finally {
        setData(response)
        return response
      }
    } else{
        try {
            response = await axios[method.toLowerCase()](url, header)
          } finally {
            setData(response)
            return response
          }
    }
  }, [])

  return {
    data,
    request
  }
}

export default useData
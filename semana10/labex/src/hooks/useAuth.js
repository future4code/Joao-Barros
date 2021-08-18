import React, { useState, useCallback } from "react";
import axios from "axios";

const useAuth = () => {

  const [data, setData] = useState(null)

  const request = useCallback(async (url, body, header, method) => {
    let response

    if (method === "GET") {
      try {
        response = await axios.get(url, header)
      } finally {
        setData(response)
        return response
      }
    }
    if (method === "POST") {
      try {
        response = await axios.post(url, body, header)
      } finally {
        setData(response)
        return response
      }
    }
    if (method === "PUT") {
      try {
        response = await axios.delete(url, body, header)
      } finally {
        setData(response)
        return response
      }
    }
    if (method === "DELETE") {
      try {
        response = await axios.delete(url, header)
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

export default useAuth

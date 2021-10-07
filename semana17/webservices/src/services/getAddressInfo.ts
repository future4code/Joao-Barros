import axios from 'axios';
import { addressInfo } from '../types';

export const getAddressInfo = async (
  zipCode: number
): Promise<addressInfo | null> => {
  try{
    const response: any = await axios.get(
      `https://viacep.com.br/ws/${zipCode}/json/`
    )
  
    return {
      street: response.data.logradouro,
      neighborhood: response.data.bairro,
      city: response.data.localidade,
      state: response.data.uf
    }
  } catch (err) {

    return null
  }

  
}
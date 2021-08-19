import { useHistory } from "react";

const useProtectedPage = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if(token === null) {
      console.log("Nao esta logado")
      history.push("/LoginPage")
    }
  }, []);

export default useProtectedPage
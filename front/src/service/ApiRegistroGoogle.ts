const apiKey = process.env.NEXT_PUBLIC_API_URL;
export const PostRegistroGoogle = async(data:any) => {
    const { uid, email, displayName } = data;
    const dataGoogle =  {uid, email, displayName} 
    console.log(dataGoogle);
    try {
      const response = await fetch(`${apiKey}/auth/authRegister`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataGoogle),
      });
    console.log(dataGoogle);
      if (response.ok) {
        console.log("Usuario registrado correctamente");
    
      } else {
        const errorMessage = await response.text();
        console.error("Error al registrar usuario:", errorMessage);
        
      }
    } catch (error:any) {
      console.error("Error inesperado:", error.message);
      
    }
}
import { useState } from "react";
import { useForm } from "react-hook-form";

function Login() {
    const {register, handleSubmit, watch, reset, formState: {errors}} = useForm({
        defaultValues:{
            NameUser: "",
            PasswordUser: "",
            EmailUser: ""
        }
    });
    
    // useState dos register do hook form
    const [info, setInfo] = useState({
        NameUser: "",
        PasswordUser: "",
        EmailUser: ""
    })

    const dataUser = (data) => {console.log(setInfo(data));}

    console.log('watch', watch("EmailUser")); 
    console.log('info', info);
    
    

    return (
        <>
            <form
                className="w-[500px] rounded-lg bg-slate-700 grid p-5 m-auto mt-20" 
                onSubmit={handleSubmit(dataUser)}
            >
                <h1 className="text-xl text-yellow-100">Fazer Login</h1>
                
                <span className="text-white mt-2 mb-1">Nome {errors.NameUser?.message}</span>
                <input
                    className="p-2 rounded-sm" 
                    {...register("NameUser", {maxLength: {value:10,message:'Erro no max 10 letras'}})} 
                />

                <span className="text-white mt-2 mb-1">Email {errors.EmailUser?.message}</span>
                <input
                    type="email"
                    className="p-2 rounded-sm" 
                    {...register("EmailUser", {required: true })} 
                />

                <span className="text-white mt-2 mb-1">Senha {errors.PasswordUser?.message}</span>
                <input
                    type="password"
                    className="p-2 rounded-sm" 
                    {...register("PasswordUser", {minLength: {
                        value: 3, message:'Erro min 3 para senha'}, maxLength: {value:10,message:"Erro max 10 para senha"}, required: true})} 
                />

                <button 
                    className="mt-5 bg-blue-600 rounded-md p-2" 
                    type="submit"  
                >
                    Enviar
                </button>

                <input
                    className="mt-5 bg-red-600 rounded-md p-2"
                    type="button"
                    onClick={() => reset()}
                    value="Resetar campos"
                />
            </form>
        </>
    )
}


export default Login;
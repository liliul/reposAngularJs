/**  
 // react hook form puro

import { useState } from "react";
import { useForm } from "react-hook-form";

function Login() {
    const {
        register, 
        handleSubmit, 
        watch, 
        reset,
        clearErrors, 
        formState: {errors}
    } = useForm({
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

    console.log('watch', watch(["EmailUser","PasswordUser"])); 
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

                <input
                    className="mt-5 bg-orange-600 rounded-md p-2"
                    type="button"
                    onClick={() => clearErrors(['NameUser','EmailUser','PasswordUser'])}
                    value="Limpar erros"
                />
            </form>
        </>
    )
}


export default Login;
*/


// react hook form com zod

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'


const formUserSchema = z.object({
    NameUser: z.string().nonempty('O nome é obrigatorio').transform(name => {
        return name.trim().split(' ').map(word => {
            return word[0].toLocaleUpperCase().concat(word.substring(1))
        }).join(' ')
    }),
    PasswordUser: z.string().nonempty('A senha é obrigatoria').min(3, 'No minimo 3 letra ou numeros'),
    EmailUser: z.string().nonempty('O email é obrigatorio').email('O email em formato invalido').toLowerCase().refine(email => {
        return email.endsWith('gmail.com')
    }, 'O formato do precisa ser gmail'),
})
function Login() {
    const {
        register, 
        handleSubmit, 
        formState: {errors}
    } = useForm({
        resolver: zodResolver(formUserSchema)
    });
    
    // useState dos register do hook form
    // {
    //     NameUser: "",
    //     PasswordUser: "",
    //     EmailUser: ""
    // }
    const [info, setInfo] = useState()

    const dataUser = (data) => {console.log(setInfo(data));}

    console.log('info', info);
    
    

    return (
        <>
            <form
                className="w-[500px] rounded-lg bg-slate-700 grid p-5 m-auto mt-20" 
                onSubmit={handleSubmit(dataUser)}
            >
                <h1 className="text-xl text-yellow-100">Fazer Login</h1>
                
                <span className="text-white mt-2 mb-1">Nome <span className="text-red-500">{errors.NameUser?.message}</span></span>
                <input
                    className="p-2 rounded-sm" 
                    {...register("NameUser")} 
                />

                <span className="text-white mt-2 mb-1">Email <span className="text-red-500">{errors.EmailUser?.message}</span></span>
                <input
                    type="email"
                    className="p-2 rounded-sm" 
                    {...register("EmailUser")} 
                />

                <span className="text-white mt-2 mb-1">Senha <span className="text-red-500">{errors.PasswordUser?.message}</span></span>
                <input
                    type="password"
                    className="p-2 rounded-sm" 
                    {...register("PasswordUser")} 
                />

                <button 
                    className="mt-5 bg-blue-600 rounded-md p-2" 
                    type="submit"  
                >
                    Enviar
                </button>

            </form>
        </>
    )
}


export default Login;
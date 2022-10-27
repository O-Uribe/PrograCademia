import React from "react"
import { useForm } from "react-hook-form";

const Formulario = () => {

    const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            categoria: 'Science:Computers',
            tipo_pregunta: 'multiple',
            dificultad: 'normal',
            titulo: 'pregunta',
            a: 'A',
            b: 'B',
            c: 'C',
            d: 'D'
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <center>
            <form class="bg-gray-600 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2">Categoria</label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type='text' {...register('categoria')}></input>
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2">Tipo de Pregunta</label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type='text' {...register('tipo_pregunta')}></input>
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2">Dificultad</label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                        type='text' {...register('dificultad')}></input>
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2">Titulo</label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                        type='text' {...register('titulo')}></input>
                    </div>
                </div>
                Respuestas
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2">A</label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                        type='text' {...register('a')}></input>
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2">B</label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                        type='text' {...register('b')}></input>
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2">C</label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                        type='text' {...register('c')}></input>
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2">D</label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                        type='text' {...register('d')}></input>
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2">================</label>
                        <select class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                {...register('a2')}>
                                <option>False</option>
                                <option>True</option>
                        </select>
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2">================</label>
                        <select class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                {...register('b2')}>
                                <option>False</option>
                                <option>True</option>
                        </select>
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2">================</label>
                        <select class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                {...register('c2')}>
                                <option>False</option>
                                <option>True</option>
                        </select>
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2">================</label>
                        <select class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                {...register('d2')}>
                                <option>False</option>
                                <option>True</option>
                        </select>
                    </div>
                </div>
                <input class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit" value="enviar"/>
            </form>
        </center>
    );
};

export default Formulario;
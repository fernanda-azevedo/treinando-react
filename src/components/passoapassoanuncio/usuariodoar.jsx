import React from 'react';
import '../../App.css';

export default function CardsDoar() {
    return (

        <div className="my-8">
            <section className="flex justify-between">
                <><>
                <div class="flex  w-64 bg-orange-300 rounded-2xl overflow-hidden">
                    <div class="w-1/3 bg-green-50 bg-landscape flex justify-center items-center">
                        <h1 class="text-6xl text-green">1</h1>
                    </div>

                    <div class="w-2/3 p-4">
                        <p class="mt-2 text-gray-900 text-sm">
                            Ao clicar em “Publicar anúncio”, você estará concordando com as normas de uso da plataforma.
                        </p>
                    </div>
                </div>


                    <div>
                        <div class="flex w-64 bg-orange-300 rounded-2xl overflow-hidden">
                            <div class="w-1/3 bg-cover bg-landscape flex justify-center items-center">
                                <h1 class="text-6xl text-green">2</h1>
                            </div>

                            <div class="w-2/3 p-4">
                                <p class="mt-2 text-gray-900 text-sm">
                                    Ao clicar em “Publicar anúncio”, você estará concordando com as normas de uso da plataforma.
                                </p>
                            </div>
                        </div>
                    </div></><div>
                        <div class="flex w-64 bg-orange-300 rounded-2xl overflow-hidden">
                            <div class="w-1/3 bg-cover bg-landscape flex justify-center items-center">
                                <h1 class="text-6xl text-green">3</h1>
                            </div>

                            <div class="w-2/3 p-4">
                                <p class="mt-2 text-gray-900 text-sm">
                                    Ao clicar em “Publicar anúncio”, você estará concordando com as normas de uso da plataforma.
                                </p>
                            </div>
                        </div>
                    </div></>
            </section>

            <div class="flex justify-center my-8">
            <button type="button" class="py-2 px-4 w-2.5 bg-orange-600 hover:bg-orange-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            Realizar anúncio
            </button>
            </div>
                 
        </div>


    );
}
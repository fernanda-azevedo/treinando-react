import React from 'react';
import mapaColorido from '../../assets/imgs/mapaColorido.png'

export default function Depoimentos() {
    return (

        //  Parte de depoimentos
        <div class="testimonial-1 py-4 md:py-12 padding-principal-tela">
            <div class="flex justify-inherit">

                {/* Imagem do mapa */}
                <img className="mapa-colorido" class="object-scale-down h-100 w-200" src={mapaColorido} alt="" />

                <div class="md:flex md:flex-wrap w-2/4">

                    {/* Container dos depoimentos */}
                    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">

                        <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div class="bg-gray-700:hover rounded-lg p-6">
                                {/* Container da foto da pessoa e textos */}
                                <div class="flex items-center flex-col">
                                    <img class="h-28 w-28 object-cover object-center rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo" />
                                    {/* Nome da pessoa e profissão */}
                                    <div class="flex flex-col content-center items-center">
                                        <p class="text-xl text-gray-900 font-normal mb-1 my-8 francois">EDUARDO PAES</p>
                                        <p class=" text-blue-900 text-sm">CTO (ONG CRIANCINHAS)</p>
                                    </div>
                                </div>
                                <div>
                                    <p class="text-gray-900 leading-loose font-normal text-base">“A minha experiência com o T-veste foi a melhor possível! Processo fácil de ser feito pelo site, equipe educada e respeitosa [...] Vocês são extraordinários! Parabéns! </p>
                                </div>
                            </div>

                            <div class="bg-white rounded-lg p-6">
                                <div class="flex items-center flex-col">
                                    <img class="h-28 w-28 object-cover object-center rounded-full"
                                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo" />
                                    <div>
                                        <p class="text-xl text-gray-700 font-normal mb-1">ROBERTA BARBOSA</p>
                                        <p class="text-blue-900 text-sm">FOUNDER E CEO (ONG CRIANCINHAS)</p>
                                    </div>
                                </div>
                                <div>
                                    <p class="text-gray-900 leading-loose font-normal text-base">“ O diferencial dessa plataforma é a facilidade que tenho dentro dela, fora a autonomia que elas no dá em fazer o bem à qualquer lugar do Brasil”</p>
                                </div>
                            </div>
                            <div class="bg-white rounded-lg p-6">
                                <div class="flex items-center flex-col">
                                    <img class="h-28 w-28 object-cover object-center rounded-full"
                                        src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80" alt="photo" />
                                    <div>
                                        <p class="text-xl text-gray-700 font-normal mb-1">Jade Bradley</p>
                                        <p class="text-base text-blue-600 font-normal">Dev Ops</p>
                                    </div>
                                </div>
                                <div>
                                    <p class="text-gray-400 leading-loose font-normal text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                            <div class="bg-white rounded-lg p-6">
                                <div class="flex items-center flex-col">
                                    <img class="h-28 w-28 object-cover object-center rounded-full"
                                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo" />
                                    <div>
                                        <p class="text-xl text-gray-700 font-normal mb-1">Lucy Carter</p>
                                        <p class="text-base text-blue-600 font-normal">Graphic Designer</p>
                                    </div>
                                </div>
                                <div>
                                    <p class="text-gray-400 leading-loose font-normal text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>


                        </div>
                    </section>


                </div>


            </div>
        </div>


    );
}
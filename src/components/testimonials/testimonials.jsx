import React, {useState} from 'react';
import mapaColorido from '../../assets/imgs/mapaColorido.png'

export default function Depoimentos() {
    return (
        
    
        <div class="testimonial-1 py-4 md:py-12 padding-principal-tela ">
                <div class="container flex justify-between">
                <img className="mapa-colorido" src={ mapaColorido }/>

                    <div class="md:flex md:flex-wrap w-2/4">

                        <div class="md:flex gap-8">
                            <div class="md:w-1/2 text-center mb-8 md:mb-0">
                                <img class="w-48 h-48 rounded-full mx-auto -mb-24" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" alt="Avatar Jacky" />
                                <div class="bg-gray-100  rounded-lg px-8 pt-32 pb-10 text-gray-900">
                                    <h3 class="font-title text-gray-800 text-xl mb-3">
                                        Jacky Pout
                                    </h3>
                                    <p class="font-body">
                                        FullStack Engineer
                                    </p>
                                    <p class="font-body text-sm mb-4">
                                        He love caramel and he hate PHP
                                    </p>
                                    <a class="font-body text-blue-500 hover:text-gray-800" href="#">
                                        Jacky@poute.com
                                    </a>
                                </div>
                            </div>
                            <div class="md:w-1/2 text-center">
                                <img class="w-48 h-48 rounded-full mx-auto -mb-24" src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?size=626&ext=jpg&ga=GA1.2.123104267.1633305600" alt="Avatar Damien Marley" />
                                <div class="bg-gray-100 rounded-lg px-8 pt-32 pb-10 text-gray-900">
                                    <h3 class="font-title text-gray-900 text-xl mb-3">
                                        ROBERTA BARBOSA
                                    </h3>
                                    <p class="text-sm text-gray-500">
                                    FOUNDER E CEO (ONG CRIANCINHAS)
                                    </p>
                                    <p class="font-body text-sm mb-4">
                                    “A minha experiência com o T-veste foi a melhor possível! Processo fácil de ser feito pelo site, equipe educada e respeitosa [...] Vocês são extraordinários! Parabéns! 
                                    </p>
                                    <a class="font-body text-blue-500 hover:text-gray-800" href="mailto:dino@siete.pm">
                                        Roberta@ONGcriancinhas.com
                                    </a>
                                </div>
                            </div>
                            
                        </div>


                    </div>
                </div>
            </div>
  
    );
}
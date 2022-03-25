import React from 'react';
import poorMen from '../../assets/imgs/poorMen.png';
import poorMen1 from '../../assets/imgs/poorMen.png';
import poorMen3 from '../../assets/imgs/poorMen.png';


export default function Campanhas() {
    return (
        <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#000000]">
        <div class="container">
           <div class="flex flex-wrap -mx-4">
              <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                 <div class="bg-gray rounded-lg overflow-hidden mb-10">
                    <img
                       src={ poorMen }
                       alt="image"
                       class="w-full"
                       />
                    <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                       <h3>
                          <a
                             href="javascript:void(0)"
                             class="
                             font-semibold
                             text-dark text-xl
                             sm:text-[22px]
                             md:text-xl
                             lg:text-[22px]
                             xl:text-xl
                             2xl:text-[22px]
                             mb-4
                             block
                             hover:text-primary
                             ">
                            AJUDE O PRÓXIMO NO COMBATE CONTRA O FRIO INTENSO DO INVERNO                          
                            </a>
                       </h3>
                       <p class="text-base text-body-color leading-relaxed mb-7">
                        O objetivo da campanha é arrecadar roupas e agasalhos para os Bazares Beneficentes e Ações de Distribuição de roupas em São Paulo e no Rio de Janeiro. Entregamos a caixa de papelão gratuitamente e retiramos as doações arrecadadas ao fim da campanha.

                        <span>
                            SÃO PAULO - SP,  Rua Haddock Lobo 565, Vila Brasilândia
                        </span>
                       </p>
                       <a
                          href="javascript:void(0)"
                          class="
                          inline-block
                          py-2
                          px-7
                          border border-[#E5E7EB]
                          rounded-full
                          text-base text-body-color
                          font-medium
                          hover:border-primary hover:bg-primary hover:text-white
                          transition
                          "
                          >
                       View Details
                       </a>
                    </div>
                 </div>
              </div>
              <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                 <div class="bg-white rounded-lg overflow-hidden mb-10">
                    <img
                       src={ poorMen1 }
                       alt="image"
                       class="w-full"
                       />
                    <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                       <h3>
                          <a
                             href="javascript:void(0)"
                             class="
                             font-semibold
                             text-dark text-xl
                             sm:text-[22px]
                             md:text-xl
                             lg:text-[22px]
                             xl:text-xl
                             2xl:text-[22px]
                             mb-4
                             block
                             hover:text-primary" >
                             AJUDE O PRÓXIMO NO COMBATE CONTRA O FRIO INTENSO DO INVERNO                          

                          </a>
                       </h3>
                       <p class="text-base text-body-color leading-relaxed mb-7">
                             AJUDE O PRÓXIMO NO COMBATE CONTRA O FRIO INTENSO DO INVERNO                          

                       </p>
                       <a
                          href="javascript:void(0)"
                          class="
                          inline-block
                          py-2
                          px-7
                          border border-[#E5E7EB]
                          rounded-full
                          text-base text-body-color
                          font-medium
                          hover:border-primary hover:bg-primary hover:text-white
                          transition
                          "
                          >
                       View Details
                       </a>
                    </div>
                 </div>
              </div>
              <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                 <div class="bg-white rounded-lg overflow-hidden mb-10">
                    <img
                       src={ poorMen3 }
                       alt="image"
                       class="w-full"
                       />
                    <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                       <h3>
                          <a
                             href="javascript:void(0)"
                             class="
                             font-semibold
                             text-dark text-xl
                             sm:text-[22px]
                             md:text-xl
                             lg:text-[22px]
                             xl:text-xl
                             2xl:text-[22px]
                             mb-4
                             block
                             hover:text-primary">
                                AJUDE O PRÓXIMO NO COMBATE CONTRA O FRIO INTENSO DO INVERNO                          

                          </a>
                       </h3>
                       <p class="text-base text-body-color leading-relaxed mb-7">
                          Lorem ipsum dolor sit amet pretium consectetur adipiscing
                          elit. Lorem consectetur adipiscing elit.
                       </p>
                       <a
                          href="javascript:void(0)"
                          class="
                          inline-block
                          py-2
                          px-7
                          border border-[#E5E7EB]
                          rounded-full
                          text-base text-body-color
                          font-medium
                          hover:border-primary hover:bg-primary hover:text-white
                          transition">
                       View Details
                       </a>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </section>
    );
}
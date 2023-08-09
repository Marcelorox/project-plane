function Airplanes() {
  return (
    <>
      <div className="flex flex-col h-[100vh] w-[100vw] bg-black items-center justify-center ">
        <div className="">
          <h1 className="text-white">PLANES</h1>
        </div>

        <div className="overflow-x-auto whitespace-nowrap max-w-[80vw] w-[80vw]">
          <div className="inline-block w-[26vw] p-6 m-4 bg-white shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Produto 1</h2>
            <p className="text-gray-600 mb-4">
              O A350 é um avião de nova geração equipado com tecnologia de
              ponta, projetado para economizar combustível e reduzir, assim, a
              contaminação Além disso, oferece inúmeras vantagens para os
              clientes, como corredores mais largos, bagageiros internos com
              maior capacidade, um sistema de renovação de ar que favorece o
              conforto a bordo e janelas panorâmicas, entre muitas outras.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
              Comprar
            </button>
            <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">
              Entrar em Contato
            </button>
          </div>

          {/* <div className="inline-block w-64 p-6 m-4 bg-white shadow-md rounded-lg"></div> */}
        </div>

        <div className="p-4"></div>
      </div>
    </>
  );
}

export { Airplanes };

/** @format */

import { Logo } from 'site/types.ts';

export interface Props {
  /**
   * @format rich-text
   * @description The description of name.
   * @default It Works!
   */
  bgImage?: Logo;
}

export default function Header({ bgImage }: Props) {
  return (
    <div
      id="Hero"
      class="w-full h-screen bg-cover bg-center relative px-4"
      style={{
        backgroundImage: `url(${bgImage?.img})`,
      }}
    >
      <div className="flex gap-3 justify-between p-3 absolute max-w-6xl w-full top-1/2 left-0 right-0 my-0 mx-auto bg-white rounded-md">
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Pretensão
          </option>
          <option>Comprar</option>
          <option>Alugar</option>
        </select>

        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Tipo do imóvel
          </option>
          <option>Casa</option>
          <option>Apartamento</option>
          <option>Terreno</option>
        </select>

        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Digite condomínio, região, bairro ou cidade"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>

        <button className="btn btn-primary">Encontrar imóvel</button>
      </div>
    </div>
  );
}

import { FieldValues, useForm } from "react-hook-form";
import useCadastrarPassagem from "../hooks/useCadastrarPassagem";
import Passagem from "../interfaces/passagem";
import useVoos from "../hooks/useVoo";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { URL_VOOS } from "../utils/constants";
import Voo from "../interfaces/voo";
import useApi from "../hooks/useApis";
import useAlterarPassagem from "../hooks/useAlterarPassagem";
import { useEffect } from "react";
import { DevTool } from "@hookform/devtools";
import usePassagemStore from "../store/PassagemStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faCheck } from "@fortawesome/free-solid-svg-icons";

const { recuperar } = useApi<Voo>(URL_VOOS);
let voosValidos: Voo[];

const validaVoo = async (id: string) => {
  if(!voosValidos) {
    voosValidos = await recuperar();
  }
  const vooValidado = voosValidos.find((voo) => voo.id === parseInt(id))
  return vooValidado;
}

const regexImagem = /^[a-z]+\.(gif|jpg|png|bmp)$/;
const schema = z.object({
    assento: z
    .string()
    .min(1, { message: "O nome deve ser informado." })
    .max(4, { message: "O nome deve ter no máximo 4 caracteres." }),
    imagem: z
    .string()
    .min(1, { message: "A imagem deve ser informada." })
    ,
    tipo: z
    .string()
    .min(1, { message: "O Tipo deve ser informado." })
    .max(7, { message: "O Tipo deve ter no máximo 7 caracteres." }),
    voo: z.string()
    .refine(validaVoo,{message: "Voo inválido."}),
    preco: z
      .number({ invalid_type_error: "O preço deve ser informado." })
      .min(500, { message: "O preço deve ser maior ou igual a R$ 500.00" }),
  });

type FormPassagem = z.infer<typeof schema>;

const CadastroDePassagemForm = () => {
  
  const passagemSelecionada = usePassagemStore(s => s.passagemSelecionada);
  const setPassagemSelecionada = usePassagemStore(s => s.setPassagemSelecionada);
  

  const tratarPassagemSelecionada = (passagem: Passagem) => setPassagemSelecionada(passagem);


  const { mutate: cadastrarPassagem } = useCadastrarPassagem();
  const { data: voos, error: error } = useVoos();
  const { mutate: alterarPassagem, error: errorAlterar } = useAlterarPassagem();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
    setValue,
    setFocus,
    control,
  } = useForm<FormPassagem>({ resolver: zodResolver(schema), mode: "onSubmit",
  defaultValues: {
    assento: "",
  },
});

  const onSubmit = ({
    assento,
    imagem,
    tipo,
    preco,
    voo,
  }: FieldValues) => {
    const passagem: Passagem = {
        assento: assento,
        imagem: imagem,
        tipo: tipo,
        data_compra : new Date(Date.now()),
        preco: preco,
        voo: {id: voo, origem: "",destino: "",empresa: ""}
    };
    console.log(passagem);
    if (passagemSelecionada.id) {
      passagem.id = passagemSelecionada.id;
      alterarPassagem(passagem);
    } else {
      cadastrarPassagem(passagem);
    }
    reset();
  };


  useEffect(() => {
    setFocus("assento");
    if (passagemSelecionada.id) {
      reset();
      setValue("assento", passagemSelecionada.assento);
      setValue("imagem", passagemSelecionada.imagem);
      setValue("tipo", passagemSelecionada.tipo);
      setValue("voo", String(passagemSelecionada.voo.id));
      setValue("preco", passagemSelecionada.preco);
    }
  }, [passagemSelecionada]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      tratarPassagemSelecionada({} as Passagem);
    }
  }, [isSubmitSuccessful]);

  if(error) return null;
  if (errorAlterar) throw errorAlterar;
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="assento" className="col-xl-2 fw-bold">
              assento
            </label>
            <div className="col-xl-10">
              <input
                {...register("assento")}
                type="text"
                id="assento"
                className={
                    errors.assento
                      ? "form-control form-control-sm is-invalid"
                      : "form-control form-control-sm"
                  }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-1">
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="voo" className="col-xl-2 fw-bold">
              voo
            </label>
            <div className="col-xl-10">
              <select
                {...register("voo")}
                id="voo"
                className="form-control form-control-sm"
              >
                <option value="0">Selecione um voo</option>
                {voos?.map((voo) => (
                  <option key={voo.id} value={voo.id}>{voo.empresa}</option>
                ))}
              </select>
              <div className="invalid-feedback">{errors.voo?.message}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-1">
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="preco" className="col-xl-2 fw-bold">
              Preço
            </label>
            <div className="col-xl-10">
              <input
                {...register("preco",{ valueAsNumber: true })}
                type="number"
                step="0.01"
                min="0"
                id="preco"
                className={
                  errors.preco
                    ? "form-control form-control-sm is-invalid"
                    : "form-control form-control-sm"
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="tipo" className="col-xl-2 fw-bold">
              tipo
            </label>
            <div className="col-xl-10">
              <input
                {...register("tipo")}
                type="text"
                id="tipo"
                className={
                    errors.tipo
                      ? "form-control form-control-sm is-invalid"
                      : "form-control form-control-sm"
                  }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="imagem" className="col-xl-2 fw-bold">
              Imagem
            </label>
            <div className="col-xl-10">
              <input
                {...register("imagem")}
                type="text"
                id="imagem"
                className={
                  errors.imagem
                    ? "form-control form-control-sm is-invalid"
                    : "form-control form-control-sm"
                }
              />
              <div className="invalid-feedback">{errors.imagem?.message}</div>
            </div>
          </div>
        </div>

      

        <div className="row mb-5">
          <div className="col-xl-6">
            <div className="row">
              <div className="col-xl-10 offset-xl-2">
                <button id="botao" type="submit" className="btn btn-primary btn-sm me-2">
                  <FontAwesomeIcon icon={faCheck} />
                    {passagemSelecionada.id ? " Alterar" : " Cadastrar"}
                </button>
                <button
                  onClick={() => {
                    reset();
                    tratarPassagemSelecionada({} as Passagem);
                  }}
                  id="botao"
                  type="button"
                  className="btn btn-danger btn-sm"
                >
                  <FontAwesomeIcon icon={faCancel} /> Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
    </form>
    <DevTool control={control} />
    </>
  );
};

export default CadastroDePassagemForm;

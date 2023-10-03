import OutlinedButton from "../../components/Buttons/OutlineButton"
import { TrashIcon, Pencil1Icon } from '@radix-ui/react-icons'
import Search from "../../components/Input/Search"
import { IReceita } from "../../types/IReceita"
import { BoxForm, CustomModal, CustomModalOverlay, FormButton, FormInput, MinhasReceitasContainer } from "./styles"
import { CardContainer } from "../../components/Card/styles"
import { Link } from "react-router-dom"
import { useState } from "react"
import { IOwner } from "../../types/IOwner"
import RaisedButton from "../../components/Buttons/RaisedButton"
import OnlyIconButton from "../../components/Buttons/OnlyIconButton"

export const MinhasReceitas = () => {
  let user: IOwner = {
    id: 12,
    ownerName: "Breno"
  }
  const [receitas, setReceitas] = useState<IReceita[]>([
      {
        id: 0,
        name: "Lasanha muito boa.",
        imgUrl: "src/images/food-1.jpg",
        description: "Lasanha muito boa",
        assessment: 5,
        owner: {
          id: 2,
          ownerName: "Breno"
        }
      },
      {
        id: 1,
        name: "Pastel de Frango",
        imgUrl: "src/images/food-1.jpg",
        description: "Uma deliciosa lasanha para seu almoço",
        assessment: 4,
        owner: {
          id: 3,
          ownerName: "Breno"
        }
      },
      {
        id: 2,
        name: "Carne moida",
        imgUrl: "src/images/food-1.jpg",
        description: "Uma deliciosa carne moida para seu almoço",
        assessment: 3,
        owner: {
          id: 4,
          ownerName: "Nicolas"
        }
      },
      {
        id: 3,
        name: "Torta de Frango",
        imgUrl: "src/images/food-1.jpg",
        description: "uma deliciosa torta de frango",
        assessment: 2,
        owner: {
          id: 5,
          ownerName: "Nicolas"
        }
      }
    ]
  )
  function handleDeleteFromArray(id: number) {
    const index = receitas.findIndex((receita: IReceita) => receita.id === id);
    if (index !== -1) {
      const updatedReceitas = [...receitas];
      updatedReceitas.splice(index, 1);
      setReceitas(updatedReceitas);
    }
  };
  const [EditModallIsOpen, setEditModalIsOpen] = useState(false);

  
  
  const [NewModalIsOpen, setNewModalIsOpen] = useState(false);
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [metodoDePreparo, setMetodoDePreparo] = useState('');
  const [imagem, setImagem] = useState<File | null>(null);


  const openModal = () => {
    setNewModalIsOpen(true);
  };

  const closeModal = () => {
    setNewModalIsOpen(false);
  };

  const handleCreateNewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let id = Math.floor(Math.random() * 1000) + 1
    //@ts-ignore
    let nova_receita = {
      id: id,
      name: nome,
      description: descricao,
      methodPreparation: metodoDePreparo,
      ingredients: ingredientes,
      assessment: 5,
      owner: user,
    }
    receitas.push(nova_receita);

    setNome('');
    setDescricao('');
    setImagem(null);

    closeModal();
  };


  return (
    <>
      <MinhasReceitasContainer>
        <div className="navContainer">
            <nav className="navReceitas">
              <Search
                type="search"
                onChange={(e) => {
                  console.log(e.target.value);
                }}
                placeholder="Pesquisar receita..."
              />
              <OutlinedButton onClick={() => {setNewModalIsOpen(true)}}>NOVA RECEITA</OutlinedButton>
            </nav>
        </div>
        <CustomModal isOpen={NewModalIsOpen} onRequestClose={closeModal} contentLabel="Formulário de Receita">
          <h2>Nova Receita</h2>
          <form onSubmit={handleCreateNewSubmit}>
            <BoxForm>
              <label htmlFor="nome">Nome da Receita:</label>
              <FormInput
                type="text"
                id="nome"
                name="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </BoxForm>
            <br />
            <BoxForm>
              <label htmlFor="descricao">Descrição:</label>
              <FormInput
                id="descricao"
                name="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                required
              ></FormInput>
            </BoxForm>
            <br />
            <BoxForm>
              <label htmlFor="descricao">Ingredientes:</label>
              <FormInput
                id="ingredientes"
                name="ingredientes"
                value={ingredientes}
                onChange={(e) => setIngredientes(e.target.value)}
                required
              ></FormInput>
            </BoxForm>
            <br />
            <BoxForm>
              <label htmlFor="descricao">Modo de preparo :</label>
              <FormInput
                id="metodoDePreparo"
                name="metodoDePreparo"
                value={metodoDePreparo}
                onChange={(e) => setMetodoDePreparo(e.target.value)}
                required
              ></FormInput>
            </BoxForm>
            <br />
            <BoxForm>
              <label htmlFor="imagem">Imagem da Receita:</label>
              <FormInput
                type="file"
                id="imagem"
                name="imagem"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setImagem(e.target.files[0]);
                  }
                }}
              />
            </BoxForm>    
            <br />
            <FormButton type="submit">Enviar</FormButton>
          </form>
        </CustomModal>
        {NewModalIsOpen && <CustomModalOverlay />}

        <div className="receitasContainer">
          {receitas.map(({id, name, imgUrl, description, assessment, owner}: IReceita) => (
            <CardContainer>
              <div className="card">
                <Link to={`receita/${id}`}>
                  {imgUrl ? <img className="img" src={imgUrl} alt="foto da receita" /> : <img className="img" src="/src/images/imageNotFound.png" alt="foto da receita" />  }
                </Link>
                <div className="description-container">
                  <div style={{display: "flex", justifyContent: "space-between"}}>
                    <p className="h3">{name}</p>
                    <p className="h3">Nota {assessment} / 5</p>
                  </div>
                  <div className="information-container">
                    <div>
                      <p className="p">Autor: {owner?.ownerName}</p>
                      <p className="p">{description}</p>
                    </div>
                    <div className="icons-container">
                      <OnlyIconButton>
                        <TrashIcon onClick={() => {handleDeleteFromArray(id)}} />
                      </OnlyIconButton>
                    </div>
                  </div>
                </div>
              </div>
            </CardContainer>
          ))}
        </div>
      </MinhasReceitasContainer>
    </>
  );
};

import React, { useState } from 'react';
import './RecipesList.css';
import RecipeDetail from './RecipeDetail';
import setaVoltar from '../assets/icones/seta.png';
import logo from '../assets/icones/logo_bc.png';
import homeIcon from '../assets/icones/home.png';

// Amargo
import brigadeiro from '../assets/Receitas/Amargo/brigadeiro.jpg';
import alfajor from '../assets/Receitas/Amargo/alfajor.jpg';
import cupcake from '../assets/Receitas/Amargo/cupcake.jpg';
import mousse from '../assets/Receitas/Amargo/mousse.jpg';

// Imagens detalhadas das receitas
import brigadeiroDetail from '../assets/Receitas/Amargo/receitabrigadeiro.png';
import alfajorDetail from '../assets/Receitas/Amargo/receitaalfajor.png';
import cupcakeDetail from '../assets/Receitas/Amargo/receitacupcake.png';
import mousseDetail from '../assets/Receitas/Amargo/receitamousse.png';

// Ao Leite
import brigadeiro823 from '../assets/Receitas/Leite/brigadeiro823.jpg';
import cakepop from '../assets/Receitas/Leite/cakepop.jpg';
import cookie from '../assets/Receitas/Leite/cookierecheado.jpg';
import trufa from '../assets/Receitas/Leite/trufa.jpg';

// Branco
import brigadeirow2 from '../assets/Receitas/Branco/brigadeirow2.jpg';
import tortaMousse from '../assets/Receitas/Branco/torta.jpg';
import souffle from '../assets/Receitas/Branco/souffle.jpg';
import cheesecake from '../assets/Receitas/Branco/cheesecake.jpg';

// Gold
import brigadeiroGold from '../assets/Receitas/Gold/brigadeirogold.jpg';
import barrinhaGold from '../assets/Receitas/Gold/barrinha.jpg';
import cookieBrownie from '../assets/Receitas/Gold/cookie.jpg';
import tortaChoco from '../assets/Receitas/Gold/tortachoco.jpg';

// Ruby
import brigadeiroRuby from '../assets/Receitas/Ruby/brigadeiroruby.jpg';
import snackRuby from '../assets/Receitas/Ruby/snack.jpg';
import florestaRuby from '../assets/Receitas/Ruby/floresta.jpg';
import paveRuby from '../assets/Receitas/Ruby/pave.jpg';

// QR Codes
import qrBrigadeiro811 from '../assets/Receitas/Amargo/brigadeiroqr.png';
import qrAlfajor from '../assets/Receitas/Amargo/Alfajorqr.png';
import qrCupcake from '../assets/Receitas/Amargo/cupcakeqr.png';
import qrMousse from '../assets/Receitas/Amargo/mousseqr.png';
import qrBrigadeiro823 from '../assets/Receitas/Leite/Brigadeiro823qr.png';
import qrCakepop from '../assets/Receitas/Leite/cakepopqr.png';
import qrCookie from '../assets/Receitas/Leite/cookierecheadoqr.png';
import qrTrufa from '../assets/Receitas/Leite/trufaqr.png';
import qrBrigadeiroW2 from '../assets/Receitas/Branco/BrigadeiroW2qr.png';
import qrTortaMousse from '../assets/Receitas/Branco/tortaqr.png';
import qrSouffle from '../assets/Receitas/Branco/souffleqr.png';
import qrCheesecake from '../assets/Receitas/Branco/cheesecakeqr.png';
import qrBrigadeiroGold from '../assets/Receitas/Gold/BrigadeiroGoldqr.png';
import qrBarrinhaGold from '../assets/Receitas/Gold/barrinhaqr.png';
import qrCookieBrownie from '../assets/Receitas/Gold/cookieqr.png';
import qrTortaChoco from '../assets/Receitas/Gold/tortachocoQR.png';
import qrBrigadeiroRuby from '../assets/Receitas/Ruby/BrigadeiroRubyqr.png';
import qrSnackRuby from '../assets/Receitas/Ruby/snackqr.png';
import qrFlorestaRuby from '../assets/Receitas/Ruby/florestaqr.png';
import qrPaveRuby from '../assets/Receitas/Ruby/paveqr.png';


// Imagens detalhadas Ao Leite
import brigadeiro823Detail from '../assets/Receitas/Leite/receitabrigadeiro823.png';
import cakepopDetail from '../assets/Receitas/Leite/receitacakepop.png';
import cookieDetail from '../assets/Receitas/Leite/receitacookie.png';
import trufaDetail from '../assets/Receitas/Leite/receitatrufas.png';

// Imagens detalhadas Branco
import brigadeirow2Detail from '../assets/Receitas/Branco/receitabrigadeirow2.png';
import tortaMousseDetail from '../assets/Receitas/Branco/receitatortamousse.png';
import souffleDetail from '../assets/Receitas/Branco/receitacheesecake.png';
import cheesecakeDetail from '../assets/Receitas/Branco/receitabombom.png';

// Imagens detalhadas Gold
import brigadeiroGoldDetail from '../assets/Receitas/Gold/receitabrigadeirogold.png';
import barrinhaGoldDetail from '../assets/Receitas/Gold/receitabarrinhagold.png';
import cookieBrownieDetail from '../assets/Receitas/Gold/receitacookiebrownie.png';
import tortaChocoDetail from '../assets/Receitas/Gold/receitachocobanoffe.png';

// Imagens detalhadas Ruby
import brigadeiroRubyDetail from '../assets/Receitas/Ruby/receitabrigadeiroruby.png';
import snackRubyDetail from '../assets/Receitas/Ruby/receitasnackdecoco.png';
import florestaRubyDetail from '../assets/Receitas/Ruby/receitaflorestaruby.png';
import paveRubyDetail from '../assets/Receitas/Ruby/receitapaveruby.png';

interface Recipe {
  name: string;
  image: string;
  detailImage: string;
  qrCode: string;
  description?: string;
}

interface RecipesByType {
  'Amargo': Recipe[];
  'Ao leite': Recipe[];
  'Branco': Recipe[];
  'Gold': Recipe[];
  'Ruby': Recipe[];
}

interface RecipesListProps {
  onBack: () => void;
  onHome: () => void;
  chocolateType: keyof RecipesByType;
}

const RecipesList: React.FC<RecipesListProps> = ({ onBack, onHome, chocolateType }) => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const recipesByType: RecipesByType = {
    'Amargo': [
      { 
        name: 'Brigadeiro 811',
        image: brigadeiro,
        detailImage: brigadeiroDetail,
        qrCode: qrBrigadeiro811,
        description: 'Brigadeiro cremoso feito com chocolate amargo 54,5% cacau'
      },
      { 
        name: 'Alfajor de Brigadeiro',
        image: alfajor,
        detailImage: alfajorDetail,
        qrCode: qrAlfajor,
        description: 'Alfajor recheado com brigadeiro amargo'
      },
      { 
        name: 'Cupcake de Chocolate e Avelã',
        image: cupcake,
        detailImage: cupcakeDetail,
        qrCode: qrCupcake,
        description: 'Cupcake de chocolate amargo com avelãs'
      },
      { 
        name: 'Mousse de Avelãs',
        image: mousse,
        detailImage: mousseDetail,
        qrCode: qrMousse,
        description: 'Mousse de chocolate amargo com avelãs'
      }
    ],
    'Ao leite': [
      { 
        name: 'Brigadeiro 823',
        image: brigadeiro823,
        detailImage: brigadeiro823Detail,
        qrCode: qrBrigadeiro823,
        description: 'Brigadeiro tradicional com chocolate ao leite'
      },
      { 
        name: 'Cakepop Pão de Mel',
        image: cakepop,
        detailImage: cakepopDetail,
        qrCode: qrCakepop,
        description: 'Cakepop de pão de mel com chocolate ao leite'
      },
      { 
        name: 'Cookie Recheado de Avelãs',
        image: cookie,
        detailImage: cookieDetail,
        qrCode: qrCookie,
        description: 'Cookie recheado com creme de avelãs'
      },
      { 
        name: 'Trufas de Caramelo Salgados e Avelã',
        image: trufa,
        detailImage: trufaDetail,
        qrCode: qrTrufa,
        description: 'Trufas com caramelo salgado e avelãs'
      }
    ],
    'Branco': [
      { 
        name: 'Brigadeiro W23',
        image: brigadeirow2,
        detailImage: brigadeirow2Detail,
        qrCode: qrBrigadeiroW2,
        description: 'Brigadeiro de chocolate branco'
      },
      { 
        name: 'Torta Mousse Dois Chocolates',
        image: tortaMousse,
        detailImage: tortaMousseDetail,
        qrCode: qrTortaMousse,
        description: 'Torta mousse com dois tipos de chocolate'
      },
      { 
        name: 'Cheesecake Soufflé de Chocolate Branco',
        image: souffle,
        detailImage: souffleDetail,
        qrCode: qrSouffle,
        description: 'Cheesecake soufflé com chocolate branco'
      },
      { 
        name: 'Bombom Cheesecake de Goiabada',
        image: cheesecake,
        detailImage: cheesecakeDetail,
        qrCode: qrCheesecake,
        description: 'Bombom de cheesecake com goiabada'
      }
    ],
    'Gold': [
      { 
        name: 'Brigadeiro Gold',
        image: brigadeiroGold,
        detailImage: brigadeiroGoldDetail,
        qrCode: qrBrigadeiroGold,
        description: 'Brigadeiro com chocolate Gold'
      },
      { 
        name: 'Barrinha Gold com Castanhas',
        image: barrinhaGold,
        detailImage: barrinhaGoldDetail,
        qrCode: qrBarrinhaGold,
        description: 'Barrinha de chocolate Gold com castanhas'
      },
      { 
        name: 'Cookie Brownie',
        image: cookieBrownie,
        detailImage: cookieBrownieDetail,
        qrCode: qrCookieBrownie,
        description: 'Cookie brownie com chocolate Gold'
      },
      { 
        name: 'Torta ChocoBanoff',
        image: tortaChoco,
        detailImage: tortaChocoDetail,
        qrCode: qrTortaChoco,
        description: 'Torta de chocolate Gold com banana e doce de leite'
      }
    ],
    'Ruby': [
      { 
        name: 'Brigadeiro Ruby',
        image: brigadeiroRuby,
        detailImage: brigadeiroRubyDetail,
        qrCode: qrBrigadeiroRuby,
        description: 'Brigadeiro com chocolate Ruby'
      },
      { 
        name: 'Snack de Coco e Framboesa',
        image: snackRuby,
        detailImage: snackRubyDetail,
        qrCode: qrSnackRuby,
        description: 'Snack de chocolate Ruby com coco e framboesa'
      },
      { 
        name: 'Floresta Ruby',
        image: florestaRuby,
        detailImage: florestaRubyDetail,
        qrCode: qrFlorestaRuby,
        description: 'Sobremesa com chocolate Ruby e frutas vermelhas'
      },
      { 
        name: 'Pavê Ruby com Café e Coco',
        image: paveRuby,
        detailImage: paveRubyDetail,
        qrCode: qrPaveRuby,
        description: 'Pavê de chocolate Ruby com café e coco'
      }
    ]
  };

  const recipes = recipesByType[chocolateType];

  if (selectedRecipe) {
    return (
      <RecipeDetail
        recipeName={selectedRecipe.name}
        recipeImage={selectedRecipe.detailImage}
        qrCodeImage={selectedRecipe.qrCode}
        onBack={() => setSelectedRecipe(null)}
        onHome={onHome}
      />
    );
  }

  return (
    <div className="container" style={{ background: "#ecebe4", width: '100%' }}>
      <div className="header">
        <button onClick={onBack} className="backButton">
          <img src={setaVoltar} alt="Voltar" className="backIcon" />
        </button>
        <img src={logo} alt="Callebaut Logo" className="logoIcon" />
        <button onClick={onHome} className="homeButton">
          <img src={homeIcon} alt="Home" className="homeIcon" />
        </button>
      </div>

      <div className="recipes-list">
        {recipes.map((recipe) => (
          <div 
            key={recipe.name} 
            className="recipe-card"
            onClick={() => setSelectedRecipe(recipe)}
          >
            <div className="recipe-image-container">
              <img src={recipe.image} alt={recipe.name} />
            </div>
            <h3>{recipe.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesList;
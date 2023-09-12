import { createContext, useContext } from "react";
import shoppinglis from "./images/shoppingList.jpg";
import portfoliopic from "./images/portfolio.jpg";
const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const date = new Date();
  const portfolio = [
    {
      id: 1,
      image: "pizzabek",
      link: "pizzabek.netlify.app",
      title: "Pizzabek",
      description:
        "Ushbu loyiha shunchaki tajriba uchun tayyorlandi.Texnologiya:ReactJs",
    },
    {
      id: 2,
      image: portfoliopic,
      link: "Akaikumogo.netlify.app",
      title: "Portfolio )",
      description:
        "Portfolio.Ushbu portfolio men va mening ishlarim haqida so'zlaydi)",
    },
    {
      id: 3,
      image: shoppinglis,
      link: "https://shopping-list-akaikumogo.vercel.app/",
      title: "Shopping list",
      description:
        "Local storage bilan ishlovchi shopping list loyihasi,Mahsulot nomi miqdori va zarurlik darajalari haqida ma'lumot kiritiladi todo list ga o'xshab ishlaydi.",
    },
    {
      id: 1,
      image: "pizzabek",
      link: "pizzabek.netlify.app",
      title: "Pizzabek",
      description:
        "Ushbu loyiha shunchaki tajriba uchun tayyorlandi.Texnologiya:ReactJs",
    },
    {
      id: 2,
      image: portfoliopic,
      link: "Akaikumogo.netlify.app",
      title: "Portfolio )",
      description:
        "Portfolio.Ushbu portfolio men va mening ishlarim haqida so'zlaydi)",
    },
    {
      id: 3,
      image: shoppinglis,
      link: "https://shopping-list-akaikumogo.vercel.app/",
      title: "Shopping list",
      description:
        "Local storage bilan ishlovchi shopping list loyihasi,Mahsulot nomi miqdori va zarurlik darajalari haqida ma'lumot kiritiladi todo list ga o'xshab ishlaydi.",
    },
    {
      id: 1,
      image: "pizzabek",
      link: "pizzabek.netlify.app",
      title: "Pizzabek",
      description:
        "Ushbu loyiha shunchaki tajriba uchun tayyorlandi.Texnologiya:ReactJs",
    },
    {
      id: 2,
      image: portfoliopic,
      link: "Akaikumogo.netlify.app",
      title: "Portfolio )",
      description:
        "Portfolio.Ushbu portfolio men va mening ishlarim haqida so'zlaydi)",
    },
    {
      id: 3,
      image: shoppinglis,
      link: "https://shopping-list-akaikumogo.vercel.app/",
      title: "Shopping list",
      description:
        "Local storage bilan ishlovchi shopping list loyihasi,Mahsulot nomi miqdori va zarurlik darajalari haqida ma'lumot kiritiladi todo list ga o'xshab ishlaydi.",
    },
  ];

  return (
    <AppContext.Provider
      value={{
        date,
        portfolio,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

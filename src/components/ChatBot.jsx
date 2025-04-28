import ChatBot from "react-chatbotify";

const FurnitureChatBot = () => {
  const helpOptions = ["Dining", "Dressing", "Wardrobe", "Sofa", "Table", "Bookshelf"];

  const flow = {
    start: {
      message: "Welcome to Furnitures, I'm excited to help you find the quality furniture products 😊!",
      transition: { duration: 1000 },
      path: "show_options",
    },
    show_options: {
      message: "I can help you with the following options to get started:",
      options: helpOptions,
      path: "process_options",
    },
    prompt_again: {
      message: "Do you need any other help?",
      options: helpOptions,
      path: "process_options",
    },
    unknown_input: {
      message: "Sorry, I do not understand your message 😢! If you need assistance, you can visit our Contact Us page.",
      options: helpOptions,
      path: "process_options",
    },
    process_options: {
      transition: { duration: 0 },
      chatDisabled: true,
      path: async (params) => {
        let link = "";
        switch (params.userInput) {
          case "Dining":
              link = "http://localhost:5173/shop?type=Dining";
              break;
          case "Dressing":
            link = "http://localhost:5173/shop?type=Dressing";
            break;
          case "Wardrobe":
            link = "http://localhost:5173/shop?type=Wardrobe";
            break;
          case "Sofa":
            link = "http://localhost:5173/shop?type=Sofa";
            break;
          case "Table":
              link = "http://localhost:5173/shop?type=Table";
              break;
          case "Bookshelf":
              link = "http://localhost:5173/shop?type=Bookshelf";
              break;
          default:
            return "unknown_input";
        }
        await params.injectMessage("Please hold on! I'll take you right there.");
        setTimeout(() => {
          window.open(link);
        }, 1000);
        return "start";
      },
    },
    
    repeat: {
      transition: { duration: 3000 },
      path: "prompt_again",
    },
  };

  const settings = {
    isOpen: true,
    general: {
      primaryColor: '#B33C4A',
      secondaryColor: '#B33C4A',
      fontFamily: 'Arial, sans-serif',
    },
    chatHistory: {
      storageKey: "worthy_skin_chat_history",
    },
  };

  return <ChatBot settings={settings} flow={flow} />;
};

export default FurnitureChatBot;
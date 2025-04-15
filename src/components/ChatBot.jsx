import ChatBot from "react-chatbotify";

const WorthySkinChatBot = () => {
  const helpOptions = ["Foundation", "Compact Powder", "Lipstick", "Mascara", "Concealer", "Eyeliner"];
  const foundation_shadeOptions = ["Light", "Medium", "Dark"];
  const foundationOptions = ["Oily", "Dry", "Combination"];

  const flow = {
    start: {
      message: "Welcome to WorthySkin, I'm excited to help you find the perfect skin care products 😊!",
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
          case "Foundation":
            return "foundation_shade_prompt"
          case "Compact Powder":
              link = "http://localhost:5173/compactpowder";
              break;
          case "Lipstick":
            link = "http://localhost:5173/Lipstick";
            break;
          case "Mascara":
            link = "http://localhost:5173/Mascara";
            break;
          case "Concealer":
            link = "http://localhost:5173/concealer";
            break;
          case "Eyeliner":
              link = "http://localhost:5173/Eyeliner";
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

    foundation_shade_prompt: {
      message: "What foundation shade are you looking for?",
      options: foundation_shadeOptions,
      path: "foundation_shade",
    },

    foundation_shade: {
      transition: { duration: 0 },
      chatDisabled: true,
      path: async (params) => {
        switch (params.userInput) {
          case "Light":
            return "foundation_light_prompt"
          case "Medium":
            return "foundation_medium_prompt"
          case "Dark":
            return "foundation_dark_prompt"
          default:
            return "unknown_input";
        }
      },
    },

    foundation_light_prompt: {
      message: "What is your skin type?",
      options: foundationOptions,
      path: "foundation_light",
    },

    foundation_light: {
      transition: { duration: 0 },
      chatDisabled: true,
      path: async (params) => {
        switch (params.userInput) {
          case "Oily":
            return "foundation_light_oily"
          case "Dry":
            return "foundation_light_dry"
          case "Combination":
            return "foundation_light_combination"
          default:
            return "unknown_input";
        }
      },
    },
    foundation_medium_prompt: {
      message: "What is your skin type?",
      options: foundationOptions,
      path: "foundation_medium",
    },

    foundation_medium: {
      transition: { duration: 0 },
      chatDisabled: true,
      path: async (params) => {
        switch (params.userInput) {
          case "Oily":
            return "foundation_medium_oily"
          case "Dry":
            return "foundation_medium_dry"
          case "Combination":
            return "foundation_medium_combination"
          default:
            return "unknown_input";
        }
      },
    },
    foundation_dark_prompt: {
      message: "What is your skin type?",
      options: foundationOptions,
      path: "foundation_dark",
    },

    foundation_dark: {
      transition: { duration: 0 },
      chatDisabled: true,
      path: async (params) => {
        switch (params.userInput) {
          case "Oily":
            return "foundation_dark_oily"
          case "Dry":
            return "foundation_dark_dry"
          case "Combination":
            return "foundation_dark_combination"
          default:
            return "unknown_input";
        }
      },
    },

    foundation_light_oily: {
      message: "For light & oily skin, try:\n- N7 Light Foundation (Matte)\n- Ms. Asam Light Foundation (Oil-Free)",
      transition: { duration: 3000 },
      path: "start",
   },

    foundation_light_dry: {
      message: "For light & dry skin, try:\n- ICan Light Foundation (Hydrating)\n- Ms. Asam Light Foundation (Moisturizing)",
      transition: { duration: 3000 },
      path: "start",
   },

    foundation_light_combination: {
      message: "For light & combination skin, try:\n- N7 Light Foundation (Balanced Finish)",
      transition: { duration: 3000 },
      path: "start",

   },


    foundation_medium_oily: {
      message: "For medium & oily skin, try:\n- Hudabeauty Medium Foundation (Matte Control)\n- Mars Medium Foundation (Oil-Free)",
      transition: { duration: 3000 },
      path: "start", 
      },

    foundation_medium_dry: {
      message: "For medium & dry skin, try:\n- Rare Beauty Medium Foundation (Hydrating Glow)",
      transition: { duration: 3000 },
      path: "start", 
      },

    foundation_medium_combination: {
      message: "For medium & combination skin, try:\n- Hudabeauty Medium Foundation (Long-Lasting Blend)",
      transition: { duration: 3000 },
      path: "start", 
      },


    foundation_dark_oily: {
      message: "For dark & oily skin, try:\n- Baims Dark Foundation (Oil-Free)\n- Mars Dark Foundation (Matte Finish)",
      transition: { duration: 3000 },
      path: "start",
      },

    foundation_dark_dry: {
      message: "For dark & dry skin, try:\n- GodS Dark Foundation (Moisturizing)\n- Baims Dark Foundation (Hydrating)",
      transition: { duration: 3000 },
      path: "start", 
      },

    foundation_dark_combination: {
      message: "For dark & combination skin, try:\n- Mars Dark Foundation (Balanced Formula)",
      transition: { duration: 3000 },
      path: "start", 
      },
    

    repeat: {
      transition: { duration: 3000 },
      path: "prompt_again",
    },
  };

  const settings = {
    isOpen: true,
    general: {
      primaryColor: '#3b5d50',
      secondaryColor: '#3b5d50',
      fontFamily: 'Arial, sans-serif',
    },
    chatHistory: {
      storageKey: "worthy_skin_chat_history",
    },
  };

  return <ChatBot settings={settings} flow={flow} />;
};

export default WorthySkinChatBot;
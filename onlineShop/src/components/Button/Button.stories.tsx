import { Meta, StoryObj } from "@storybook/react"
import { Button } from "./Button"
import './Button.module.css'
import { Provider } from "react-redux";
import { store } from "../../redux/store"

const meta: Meta<typeof Button> = {
    decorators: [(Story) => <Provider store={store}><Story /></Provider>],
    title: 'Atoms/Button',
    tags:['autodocs'],
    component: Button,

  };
  
export default meta;

type Story = StoryObj<typeof Button>;
  
  export const FirstStory: Story = {
    argTypes:{
        styleCss:{
            type:'string',
            description:"Вариант внешнего вида кнокпи",
            options:['defaultButton','productCountButton','noneBorderButton'],
            control:{
                type:'select'
            },
        },
        
    },
    name:'Кнопки',
    args: {
        styleCss: "defaultButton",
        value: 'Button',
        imgFlg:false,
      },
  };
import { Meta, StoryObj } from "@storybook/react"
import { Faq } from "./Faq"
import './Faq.module.css'
import { store } from "../../redux/store"
import { Provider } from "react-redux";

const meta: Meta<typeof Faq> = {
    decorators: [(Story) => <Provider store={store}><Story /></Provider>],
    title: 'Molecules/Faq',
    tags:['autodocs'],
    component: Faq,
  };
  
export default meta;

type Story = StoryObj<typeof Faq>;
  
  export const FirstStory: Story = {
    name:'Комонента раздела на ответы',
  };
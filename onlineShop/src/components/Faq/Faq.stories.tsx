import { Meta, StoryObj } from "@storybook/react"
import { Faq } from "./Faq"
import './Faq.module.css'

const meta: Meta<typeof Faq> = {
    title: 'Molecules/Faq',
    tags:['autodocs'],
    component: Faq,
  };
  
export default meta;

type Story = StoryObj<typeof Faq>;
  
  export const FirstStory: Story = {
    name:'Комонента раздела на ответы',
  };
import { Meta, StoryObj } from "@storybook/react"
import { SearchField } from "./SearchField"
import './SearchField.module.css'

const meta: Meta<typeof SearchField> = {
    title: 'Atoms/SearchField',
    tags:['autodocs'],
    component: SearchField,
  };
  
export default meta;

type Story = StoryObj<typeof SearchField>;
  
  export const FirstStory: Story = {
    name:'Поле для ввода текста для поиска по Категории',
  };
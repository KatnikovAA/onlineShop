import { Meta, StoryObj } from "@storybook/react"
import { SearchField } from "./SearchField"
import './SearchField.module.css'
import { store } from "../../redux/store"
import { Provider } from "react-redux";

const meta: Meta<typeof SearchField> = {
    decorators: [(Story) => <Provider store={store}><Story /></Provider>],
    title: 'Atoms/SearchField',
    tags:['autodocs'],
    component: SearchField,
  };
  
export default meta;

type Story = StoryObj<typeof SearchField>;
  
  export const FirstStory: Story = {
    name:'Поле для ввода текста для поиска по Категории',
  };
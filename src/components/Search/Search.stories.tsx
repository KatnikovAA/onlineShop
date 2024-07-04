import { Meta, StoryObj } from "@storybook/react"
import { Search } from "./Search"
import './Search.module.css'
import { store } from "../../redux/store"
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { Provider } from "react-redux";


const meta: Meta<typeof Search> = {
    decorators: [(Story) => <Provider store={store}><Story /></Provider>],
    title: 'Molecules/Search',
    tags:['autodocs'],
    component: Search,
  };
  
export default meta;

type Story = StoryObj<typeof Search>;
  
  export const FirstStory: Story = {
    name:'Комопнента поля поиска и кнопки',
  };
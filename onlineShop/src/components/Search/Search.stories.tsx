import { Meta, StoryObj } from "@storybook/react"
import { Search } from "./Search"
import './Search.module.css'

const meta: Meta<typeof Search> = {
    title: 'Molecules/Search',
    tags:['autodocs'],
    component: Search,
  };
  
export default meta;

type Story = StoryObj<typeof Search>;
  
  export const FirstStory: Story = {
    name:'Комопнента поля поиска и кнопки',
  };
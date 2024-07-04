import { Meta, StoryObj } from "@storybook/react"
import { ImgCarousel } from "./ImgCarousel"
import './ImgCarousel.module.css'
import { store } from "../../redux/store"
import { Provider } from "react-redux";
import { ditalPorudctStub } from "../../stub"

const meta: Meta<typeof ImgCarousel> = {
    decorators: [(Story) => <Provider store={store}><Story /></Provider>],
    title: 'Atoms/ImgCarousel',
    component: ImgCarousel,
    tags:['autodocs']
}
  
export default meta;

type Story = StoryObj<typeof ImgCarousel>;
  
  export const Primary: Story = {
    name:'Картиника для карусели',
    argTypes:{
        srcValue:{
            type:'string',
            description:"Вариант внешнего вида картиник без клика",
            options:[ditalPorudctStub.imgUrl[0]],
            control:{
                type:'select'
            },
        },
        styleCss:{
            type:'string',
            description:"Вариант внешнего вида картиники по клике на нее",
            options:['imgCarousel','activImgCarousel'],
            control:{
                type:'radio'
            }
        },
    },
    args: {
        styleCss:'imgCarousel',
        srcValue:ditalPorudctStub.imgUrl[0],
      },
    
    
  };
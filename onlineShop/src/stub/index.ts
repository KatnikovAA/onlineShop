export type objProductStub = {
    imgUrl:string,
    name:string,
    cost:number,
    id?:number,
}

export type objDitalPorudctStub = {
    imgUrl:string[],
    name:string,
    id:number,
    ratinga:number,
    basePrice:number,
    discountPercentage:number,
    discountPrice:number,
    stock:number,
    brand:string,
    category:string,
    description:string,
    skuid:string,
}

export const ditalPorudctStub:objDitalPorudctStub = {
    id:5,
    name:'Puma Force 1 Shadow',
    ratinga:5,
    basePrice:500,
    discountPercentage:10,
    discountPrice:450,
    stock:13,
    brand:"Puma",
    category:'Smartphones',
    description:'An apple mobile which is nothing like apple',
    skuid:'0005',
    imgUrl:[
        'https://s3-alpha-sig.figma.com/img/e6e4/bcd8/d188dc51fd73788dce2272f620078ede?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oNx1eDrmkBC4oUSlQUXpcQPIqW3c-h0FwRzDzp99DcImxXeiRc12pwh7GuN~i0QIJGJy~d2SO4xY9G-LHIZp6-ErG2~JFo025NfpnnTQwyW5GlTdh7pbWAPccVzOWPxAgcEpmfNBrXZNqFxR35gkQXNOEiOThDDYGnWG8odu8yH79HwQAe3UyOWtCXa5f~2pIJtWVBQrYPWdLUuXAuylgxiERLHvCEOC-nhaZeY4CF1eDVCctLfsdnd-u53TZ2CDohkP9Nz2oNDAf49wrSGKOwEuMhNNUDIy0DyaKbi9JQEk3j0lU80ueps~5U0dvspHbwGPYp39DN-C7k7YEDfpyg__',
        'https://s3-alpha-sig.figma.com/img/e6e4/bcd8/d188dc51fd73788dce2272f620078ede?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oNx1eDrmkBC4oUSlQUXpcQPIqW3c-h0FwRzDzp99DcImxXeiRc12pwh7GuN~i0QIJGJy~d2SO4xY9G-LHIZp6-ErG2~JFo025NfpnnTQwyW5GlTdh7pbWAPccVzOWPxAgcEpmfNBrXZNqFxR35gkQXNOEiOThDDYGnWG8odu8yH79HwQAe3UyOWtCXa5f~2pIJtWVBQrYPWdLUuXAuylgxiERLHvCEOC-nhaZeY4CF1eDVCctLfsdnd-u53TZ2CDohkP9Nz2oNDAf49wrSGKOwEuMhNNUDIy0DyaKbi9JQEk3j0lU80ueps~5U0dvspHbwGPYp39DN-C7k7YEDfpyg__',
        'https://s3-alpha-sig.figma.com/img/e6e4/bcd8/d188dc51fd73788dce2272f620078ede?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oNx1eDrmkBC4oUSlQUXpcQPIqW3c-h0FwRzDzp99DcImxXeiRc12pwh7GuN~i0QIJGJy~d2SO4xY9G-LHIZp6-ErG2~JFo025NfpnnTQwyW5GlTdh7pbWAPccVzOWPxAgcEpmfNBrXZNqFxR35gkQXNOEiOThDDYGnWG8odu8yH79HwQAe3UyOWtCXa5f~2pIJtWVBQrYPWdLUuXAuylgxiERLHvCEOC-nhaZeY4CF1eDVCctLfsdnd-u53TZ2CDohkP9Nz2oNDAf49wrSGKOwEuMhNNUDIy0DyaKbi9JQEk3j0lU80ueps~5U0dvspHbwGPYp39DN-C7k7YEDfpyg__',
        'https://s3-alpha-sig.figma.com/img/e6e4/bcd8/d188dc51fd73788dce2272f620078ede?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oNx1eDrmkBC4oUSlQUXpcQPIqW3c-h0FwRzDzp99DcImxXeiRc12pwh7GuN~i0QIJGJy~d2SO4xY9G-LHIZp6-ErG2~JFo025NfpnnTQwyW5GlTdh7pbWAPccVzOWPxAgcEpmfNBrXZNqFxR35gkQXNOEiOThDDYGnWG8odu8yH79HwQAe3UyOWtCXa5f~2pIJtWVBQrYPWdLUuXAuylgxiERLHvCEOC-nhaZeY4CF1eDVCctLfsdnd-u53TZ2CDohkP9Nz2oNDAf49wrSGKOwEuMhNNUDIy0DyaKbi9JQEk3j0lU80ueps~5U0dvspHbwGPYp39DN-C7k7YEDfpyg__',
        'https://s3-alpha-sig.figma.com/img/e6e4/bcd8/d188dc51fd73788dce2272f620078ede?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oNx1eDrmkBC4oUSlQUXpcQPIqW3c-h0FwRzDzp99DcImxXeiRc12pwh7GuN~i0QIJGJy~d2SO4xY9G-LHIZp6-ErG2~JFo025NfpnnTQwyW5GlTdh7pbWAPccVzOWPxAgcEpmfNBrXZNqFxR35gkQXNOEiOThDDYGnWG8odu8yH79HwQAe3UyOWtCXa5f~2pIJtWVBQrYPWdLUuXAuylgxiERLHvCEOC-nhaZeY4CF1eDVCctLfsdnd-u53TZ2CDohkP9Nz2oNDAf49wrSGKOwEuMhNNUDIy0DyaKbi9JQEk3j0lU80ueps~5U0dvspHbwGPYp39DN-C7k7YEDfpyg__',
        'https://s3-alpha-sig.figma.com/img/e6e4/bcd8/d188dc51fd73788dce2272f620078ede?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oNx1eDrmkBC4oUSlQUXpcQPIqW3c-h0FwRzDzp99DcImxXeiRc12pwh7GuN~i0QIJGJy~d2SO4xY9G-LHIZp6-ErG2~JFo025NfpnnTQwyW5GlTdh7pbWAPccVzOWPxAgcEpmfNBrXZNqFxR35gkQXNOEiOThDDYGnWG8odu8yH79HwQAe3UyOWtCXa5f~2pIJtWVBQrYPWdLUuXAuylgxiERLHvCEOC-nhaZeY4CF1eDVCctLfsdnd-u53TZ2CDohkP9Nz2oNDAf49wrSGKOwEuMhNNUDIy0DyaKbi9JQEk3j0lU80ueps~5U0dvspHbwGPYp39DN-C7k7YEDfpyg__',

    ]
}

export const productStub:objProductStub[] = [
    {
        imgUrl:'https://s3-alpha-sig.figma.com/img/6a4c/cb73/3d5636cb20ebbdfd22ef229cec9df732?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TyQwkIdiK-kwuu0r9sknx5H8yU9BXyCtug5RwrHvhvjT2WUQvQ~maZaKcWAKyTjIZj7C9h1qnLDJtuPFPZ2b1wr~4fhUVbI8SXHNd1Olwc9Ir6-mAMUj6iibzdsb9iW7zT-0eaNyAOceoExrHBRcmW6IzoPKtgJqub8reG4DOgEoTER5RVJbm8K5JwedBmxTpZIIM02rT0eybJcdofauMpMoxbxs49bNte8eh7BPPeErVZoElhGX1skAa2qVau7ZPRJ6z94pjE3XvOp4M~Mgtx8WmZZgbD5eRqvis0qCCikQOzUfds~NElcrbsJTvQRr5ibCvTVPdX2i8vn39A4ylg__',
        name:'Essence Mascara Lash Princess',
        cost:110,
        id:0
    },
    {
        imgUrl:'https://s3-alpha-sig.figma.com/img/6a4c/cb73/3d5636cb20ebbdfd22ef229cec9df732?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TyQwkIdiK-kwuu0r9sknx5H8yU9BXyCtug5RwrHvhvjT2WUQvQ~maZaKcWAKyTjIZj7C9h1qnLDJtuPFPZ2b1wr~4fhUVbI8SXHNd1Olwc9Ir6-mAMUj6iibzdsb9iW7zT-0eaNyAOceoExrHBRcmW6IzoPKtgJqub8reG4DOgEoTER5RVJbm8K5JwedBmxTpZIIM02rT0eybJcdofauMpMoxbxs49bNte8eh7BPPeErVZoElhGX1skAa2qVau7ZPRJ6z94pjE3XvOp4M~Mgtx8WmZZgbD5eRqvis0qCCikQOzUfds~NElcrbsJTvQRr5ibCvTVPdX2i8vn39A4ylg__',
        name:'Essence Mascara Lash Princess',
        cost:110,
        id:1
    },
    {
        imgUrl:'https://s3-alpha-sig.figma.com/img/6a4c/cb73/3d5636cb20ebbdfd22ef229cec9df732?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TyQwkIdiK-kwuu0r9sknx5H8yU9BXyCtug5RwrHvhvjT2WUQvQ~maZaKcWAKyTjIZj7C9h1qnLDJtuPFPZ2b1wr~4fhUVbI8SXHNd1Olwc9Ir6-mAMUj6iibzdsb9iW7zT-0eaNyAOceoExrHBRcmW6IzoPKtgJqub8reG4DOgEoTER5RVJbm8K5JwedBmxTpZIIM02rT0eybJcdofauMpMoxbxs49bNte8eh7BPPeErVZoElhGX1skAa2qVau7ZPRJ6z94pjE3XvOp4M~Mgtx8WmZZgbD5eRqvis0qCCikQOzUfds~NElcrbsJTvQRr5ibCvTVPdX2i8vn39A4ylg__',
        name:'Essence Mascara Lash Princess',
        cost:110,
        id:2
    },
    {
        imgUrl:'https://s3-alpha-sig.figma.com/img/6a4c/cb73/3d5636cb20ebbdfd22ef229cec9df732?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TyQwkIdiK-kwuu0r9sknx5H8yU9BXyCtug5RwrHvhvjT2WUQvQ~maZaKcWAKyTjIZj7C9h1qnLDJtuPFPZ2b1wr~4fhUVbI8SXHNd1Olwc9Ir6-mAMUj6iibzdsb9iW7zT-0eaNyAOceoExrHBRcmW6IzoPKtgJqub8reG4DOgEoTER5RVJbm8K5JwedBmxTpZIIM02rT0eybJcdofauMpMoxbxs49bNte8eh7BPPeErVZoElhGX1skAa2qVau7ZPRJ6z94pjE3XvOp4M~Mgtx8WmZZgbD5eRqvis0qCCikQOzUfds~NElcrbsJTvQRr5ibCvTVPdX2i8vn39A4ylg__',
        name:'Essence Mascara Lash Princess',
        cost:110,
        id:3
    },
    {
        imgUrl:'https://s3-alpha-sig.figma.com/img/6a4c/cb73/3d5636cb20ebbdfd22ef229cec9df732?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TyQwkIdiK-kwuu0r9sknx5H8yU9BXyCtug5RwrHvhvjT2WUQvQ~maZaKcWAKyTjIZj7C9h1qnLDJtuPFPZ2b1wr~4fhUVbI8SXHNd1Olwc9Ir6-mAMUj6iibzdsb9iW7zT-0eaNyAOceoExrHBRcmW6IzoPKtgJqub8reG4DOgEoTER5RVJbm8K5JwedBmxTpZIIM02rT0eybJcdofauMpMoxbxs49bNte8eh7BPPeErVZoElhGX1skAa2qVau7ZPRJ6z94pjE3XvOp4M~Mgtx8WmZZgbD5eRqvis0qCCikQOzUfds~NElcrbsJTvQRr5ibCvTVPdX2i8vn39A4ylg__',
        name:'Essence Mascara Lash Princess',
        cost:110,
        id:4
    },
    {
        imgUrl:'https://s3-alpha-sig.figma.com/img/6a4c/cb73/3d5636cb20ebbdfd22ef229cec9df732?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TyQwkIdiK-kwuu0r9sknx5H8yU9BXyCtug5RwrHvhvjT2WUQvQ~maZaKcWAKyTjIZj7C9h1qnLDJtuPFPZ2b1wr~4fhUVbI8SXHNd1Olwc9Ir6-mAMUj6iibzdsb9iW7zT-0eaNyAOceoExrHBRcmW6IzoPKtgJqub8reG4DOgEoTER5RVJbm8K5JwedBmxTpZIIM02rT0eybJcdofauMpMoxbxs49bNte8eh7BPPeErVZoElhGX1skAa2qVau7ZPRJ6z94pjE3XvOp4M~Mgtx8WmZZgbD5eRqvis0qCCikQOzUfds~NElcrbsJTvQRr5ibCvTVPdX2i8vn39A4ylg__',
        name:'Essence Mascara Lash Princess',
        cost:110,
        id:5
    },
    {
        imgUrl:'https://s3-alpha-sig.figma.com/img/6a4c/cb73/3d5636cb20ebbdfd22ef229cec9df732?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TyQwkIdiK-kwuu0r9sknx5H8yU9BXyCtug5RwrHvhvjT2WUQvQ~maZaKcWAKyTjIZj7C9h1qnLDJtuPFPZ2b1wr~4fhUVbI8SXHNd1Olwc9Ir6-mAMUj6iibzdsb9iW7zT-0eaNyAOceoExrHBRcmW6IzoPKtgJqub8reG4DOgEoTER5RVJbm8K5JwedBmxTpZIIM02rT0eybJcdofauMpMoxbxs49bNte8eh7BPPeErVZoElhGX1skAa2qVau7ZPRJ6z94pjE3XvOp4M~Mgtx8WmZZgbD5eRqvis0qCCikQOzUfds~NElcrbsJTvQRr5ibCvTVPdX2i8vn39A4ylg__',
        name:'Essence Mascara Lash Princess',
        cost:110,
        id:6
    },
    {
        imgUrl:'https://s3-alpha-sig.figma.com/img/6a4c/cb73/3d5636cb20ebbdfd22ef229cec9df732?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TyQwkIdiK-kwuu0r9sknx5H8yU9BXyCtug5RwrHvhvjT2WUQvQ~maZaKcWAKyTjIZj7C9h1qnLDJtuPFPZ2b1wr~4fhUVbI8SXHNd1Olwc9Ir6-mAMUj6iibzdsb9iW7zT-0eaNyAOceoExrHBRcmW6IzoPKtgJqub8reG4DOgEoTER5RVJbm8K5JwedBmxTpZIIM02rT0eybJcdofauMpMoxbxs49bNte8eh7BPPeErVZoElhGX1skAa2qVau7ZPRJ6z94pjE3XvOp4M~Mgtx8WmZZgbD5eRqvis0qCCikQOzUfds~NElcrbsJTvQRr5ibCvTVPdX2i8vn39A4ylg__',
        name:'Essence Mascara Lash Princess',
        cost:110,
        id:7
    },
    {
        imgUrl:'https://s3-alpha-sig.figma.com/img/6a4c/cb73/3d5636cb20ebbdfd22ef229cec9df732?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TyQwkIdiK-kwuu0r9sknx5H8yU9BXyCtug5RwrHvhvjT2WUQvQ~maZaKcWAKyTjIZj7C9h1qnLDJtuPFPZ2b1wr~4fhUVbI8SXHNd1Olwc9Ir6-mAMUj6iibzdsb9iW7zT-0eaNyAOceoExrHBRcmW6IzoPKtgJqub8reG4DOgEoTER5RVJbm8K5JwedBmxTpZIIM02rT0eybJcdofauMpMoxbxs49bNte8eh7BPPeErVZoElhGX1skAa2qVau7ZPRJ6z94pjE3XvOp4M~Mgtx8WmZZgbD5eRqvis0qCCikQOzUfds~NElcrbsJTvQRr5ibCvTVPdX2i8vn39A4ylg__',
        name:'Essence Mascara Lash Princess',
        cost:110,
        id:8
    },
]

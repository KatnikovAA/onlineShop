export type objProductStub = {
    imgUrl:string,
    name:string,
    cost:number,
    id?:number,
}

export type objProductInCartStub = {
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
export const productInCartStub:objProductInCartStub[] = [
    {
        imgUrl:'https://s3-alpha-sig.figma.com/img/5d02/cb5f/e04354526949f8dba1c7d1cafd160e5e?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fob-fhC57RBO4B10Hy5Gk-CNd3NKFaszqgUJ~Hi5bsbZzYzRlPqiRy-GdA3h~Bc7Lq29YSIAFlkGptdVtwfSLRDlW9g7~HGIcXTA4NIXWOBHVwatMFjjRPlmiwRkctNY1XPnnzA2F8CZcBCGNq3lrGOJ~ggyChqtUlMpkCbLz9oa9cQHzPJewb0-HTPIY52e4AqImHRx0Lzl9xNCmh8D~E2TPuzHuXs8rkTd3xznpSu2fKYXCOBva4SODdNkLl05tfiVQ53uKH5-Q1cog0FbYBrpB--ap~-EA6XzhYVq~lnOpUOIzhgmoU2QQVnsnJqZZ~ICS6BFIisW5w1HeNUjqg__',
        name:'Essence Mascara Lash Princess',
        cost:110,
        id:1,
    },
    {
        imgUrl:'https://s3-alpha-sig.figma.com/img/5d02/cb5f/e04354526949f8dba1c7d1cafd160e5e?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fob-fhC57RBO4B10Hy5Gk-CNd3NKFaszqgUJ~Hi5bsbZzYzRlPqiRy-GdA3h~Bc7Lq29YSIAFlkGptdVtwfSLRDlW9g7~HGIcXTA4NIXWOBHVwatMFjjRPlmiwRkctNY1XPnnzA2F8CZcBCGNq3lrGOJ~ggyChqtUlMpkCbLz9oa9cQHzPJewb0-HTPIY52e4AqImHRx0Lzl9xNCmh8D~E2TPuzHuXs8rkTd3xznpSu2fKYXCOBva4SODdNkLl05tfiVQ53uKH5-Q1cog0FbYBrpB--ap~-EA6XzhYVq~lnOpUOIzhgmoU2QQVnsnJqZZ~ICS6BFIisW5w1HeNUjqg__',
        name:'Essence Mascara Lash Princess',
        cost:110,
        id:2,
    },
    {
        imgUrl:'https://s3-alpha-sig.figma.com/img/5d02/cb5f/e04354526949f8dba1c7d1cafd160e5e?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fob-fhC57RBO4B10Hy5Gk-CNd3NKFaszqgUJ~Hi5bsbZzYzRlPqiRy-GdA3h~Bc7Lq29YSIAFlkGptdVtwfSLRDlW9g7~HGIcXTA4NIXWOBHVwatMFjjRPlmiwRkctNY1XPnnzA2F8CZcBCGNq3lrGOJ~ggyChqtUlMpkCbLz9oa9cQHzPJewb0-HTPIY52e4AqImHRx0Lzl9xNCmh8D~E2TPuzHuXs8rkTd3xznpSu2fKYXCOBva4SODdNkLl05tfiVQ53uKH5-Q1cog0FbYBrpB--ap~-EA6XzhYVq~lnOpUOIzhgmoU2QQVnsnJqZZ~ICS6BFIisW5w1HeNUjqg__',
        name:'Essence Mascara Lash Princess',
        cost:110,
        id:3,
    },
]
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

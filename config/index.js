const dev = process.env.NODE_ENV !== 'production'
export const server = dev ? 'http://localhost:3000' :'yourwebsite.com'



//test
export const database = 'daventyagency'

export const boxShadow = '0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 0.5px 0.5px 0 rgba(0, 0, 0, 0.19)'





export const formatHeadingLink =(val)=>{
    let array = val.split(' ')
    const regex = /[^A-Za-z0-9]/g;
   let newarray = array.map(val=>{return val.toLowerCase().replace('?','')
   .replace('!','')
})
   
return newarray.join('-').toString()
}

export const  parseCurrency = (amount)=> { 
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(amount).replace('.00','')
}
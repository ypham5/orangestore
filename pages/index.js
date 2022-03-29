import {PageTitle} from './../components/PageTitle'

export default function Home() {
  //JSON Array of Object
  // array will be our firevbase data..
  // 3 products ...display
  // add stripe
  // api routes, ssr, isr ...
  // getStaticPaths getStaticPages
  const productsData = [1,2,3,4,5]
  productsData.map(item=> console.log(item))
  return (
    <>
      <PageTitle title="Orange Store" tagline="featured products"/> 
        <ul>
          {/* {productsData.map(product=> <ListItem key={product} number={product}/>)} */}
        </ul>
    </>
  )
}

function ListItem({number, key, ...props}){

  return <li>{number}<span>{key}</span></li>
  
}
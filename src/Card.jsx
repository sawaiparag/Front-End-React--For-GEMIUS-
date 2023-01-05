function Card(props){
    return(

      <div class="lg:w-1/4 md:w-1/2 p-4 w-full mt-5 ">
        <a class="block relative h-52 rounded ">
          <img class="object-cover w-full h-full rounded " src={props.link}/>
        </a>
        <div class="mt-4 text-center">
          <h3 class="text-gray-500 text-xs title-font mb-1 ">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">{props.name}</h2>
          <p class="mt-1">{props.price}</p>
        </div>
       
           

             </div>



    )


    
}
export default Card
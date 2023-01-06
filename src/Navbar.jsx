import { NavLink } 
    from "./Navbarelements";

function Navbar(props){
    return(


      
<nav class="ml-10 mt-10 mx-auto flex flex-wrap md:flex-row items-center  ">

<div class="sm:flex  ">
  <img class= "h-14" src={require('./images/icons.png')} alt="" />
  <a class="ml-2 mt-4 font-bold text-red-300 text-lg"  href="#">{props.head}</a>
  
  
  <div className=" sm:flex">   
  <div class=" p-2 ml-48 text-gray-600 font-bold ">

       <NavLink class="mr-5  " to="/plp" activeStyle>
          PLP
        </NavLink>
        <NavLink class="mr-5" to="/pdp" activeStyle>
          PDP
        </NavLink>
        <NavLink class="mr-5" to="/team" activeStyle>
          TEAM
        </NavLink>
        <NavLink class="mr-5" to="/philosophy" activeStyle>
        PHILOSOPHY
        </NavLink>


        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Connect Us
       </button>

   
        </div>
      </div >


  <div className='mt-0'>
  <form className='float-right mt-2 ml-40 p-1 bg-blue-100 rounded'>
    <input class="form-control  "  placeholder="Please Type "/>
    <button class="bg-gray-400 font-bold text-white" type="submit">Search</button>
  </form> </div>

   </div>
</nav>

      


)
}
export default Navbar
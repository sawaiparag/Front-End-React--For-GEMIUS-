import React from "react";
import Cardfunction from "../Card"


const Plp = () =>{
    return(
        <>
          <div className="bg-yellow-200">
          
          <div className="flex bg-blue-200 mt-3 ">
                 <Cardfunction link="https://images.pexels.com/photos/611328/pexels-photo-611328.jpeg?auto=compress&cs=tinysrgb&w=600" price="$16.00" name="Loveleey Sheep"/>
                <Cardfunction link="https://images.pexels.com/photos/21787/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" price="$56.00" name="Unmanned Beach"/>
                <Cardfunction link="https://images.pexels.com/photos/176382/pexels-photo-176382.jpeg?auto=compress&cs=tinysrgb&w=600" price="$45.00" name="High Range Waterfall"/>
                <Cardfunction link="https://images.pexels.com/photos/985266/pexels-photo-985266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" price="$96.00" name="Blue Animated Leaf" />       
                </div>

                <div className="flex">
                <Cardfunction link="https://images.pexels.com/photos/7674697/pexels-photo-7674697.jpeg?auto=compress&cs=tinysrgb&w=600" price="$126.00" name="Healthier Kiwi" />       
               <Cardfunction link="https://images.pexels.com/photos/10610860/pexels-photo-10610860.jpeg?auto=compress&cs=tinysrgb&w=600" price="$234.00" name="Clouds Wall" />       
               <Cardfunction link="https://images.pexels.com/photos/12640422/pexels-photo-12640422.jpeg?auto=compress&cs=tinysrgb&w=600" price="$936.00" name="Blue Bird" />       
               <Cardfunction link="https://images.pexels.com/photos/11589788/pexels-photo-11589788.jpeg?auto=compress&cs=tinysrgb&w=600" price="$236.00" name="Mountain Glacier" />       
                </div>
               
            
          </div>
            
         </>
    
     
    )
}

export default Plp;
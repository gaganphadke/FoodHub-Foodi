import React, { useEffect, useState } from 'react'
import Card from '../../components/Card';
import { FaFilter } from 'react-icons/fa'
const Menu = () => {

    const [menu,setmenu]=useState([]);
    const [filtereditems,setfiltereditems] = useState([]);
    const [selec,setselec]=useState("all");
    const [sortopt,setsortopt] =useState("default");

    //pages
    const [page,setpage]=useState(1);
    const [itemsperpage]=useState(8);

    //loading
    useEffect(()=>{
        const fetchdata=async()=>{
            try{
                const response =await fetch("/menu.json");
                const data=await response.json();
                // console.log(data);
                setmenu(data);
                setfiltereditems(data);
            } catch(error){
                console.log(error);
            }
        };
        fetchdata();
    },[])

    const filteritems=(category)=>{
        const filtered=category==="all" ? menu : menu.filter((item)=>item.category===category);
        setfiltereditems(filtered);
        setselec(category);
        setpage(1);
    };

    const showall=()=>{
        setfiltereditems(menu);
        setselec("all");
        setpage(1);
    }

    //sorting

    const handlesort=(option)=>{
        setsortopt(option);
        let sorteditems=[...filtereditems];

        //logic
        switch (option) {
            case "A-Z":
                sorteditems.sort((a,b)=>a.name.localeCompare(b.name))
                break;
            case "Z-A":
                sorteditems.sort((a,b)=>b.name.localeCompare(a.name))
                break;
            case "low-to-high":
                sorteditems.sort((a,b)=>a.price-b.price)
                break;
            case "high-to-low":        
                sorteditems.sort((a,b)=>b.price-a.price)
                break;
            default:
                break;
        }

        setfiltereditems(sorteditems);
        setpage(1);
    }


    // pagination logic
    const indexoflastitem=page*itemsperpage;
    const indexoffirstitem=indexoflastitem-itemsperpage;
    const currentitems=filtereditems.slice(indexoffirstitem,indexoflastitem)
    const paginate=(pageno)=>setpage(pageno);

  return (
    <div>
        {/* menu banner */}
        <div className='cont bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
            <div className='py-48 flex flex-col justify-center items-center gap-8'>
                {/* text */}
                <div className='text-center space-y-7 px-4'>
                    <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug ml-10'>For the love of Delicious Food <span className='text-green'>Food</span></h2>
                    <p className='text-xl text-[]#4A4A4A mx-auto md:w-4/5'> Come with your loved ones and feel the joy of mouthwatering food such as Greek Salad,Lasagne,Butternut Pumpkin,Tokusen Wagyu,Olivas Rellenas and more for a moderate cost</p>
                    <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full ml-10'>Order Now</button>
                </div>
                
            </div>
        </div>
        {/* menu section */}
        <div className='section-container'>
            {/* btns and sort */}
            <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8'>
                {/* all cat buttons */}
                <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap'>
                <button onClick={showall} className={selec==="all"?"active":""}>All</button>
                <button onClick={()=>filteritems("salad")} className={selec==="salad"?"active":""}>Salads</button>
                <button onClick={()=>filteritems("pizza")} className={selec==="pizza"?"active":""}>Pizzas</button>
                <button onClick={()=>filteritems("soup")} className={selec==="soup"?"active":""}>Soups</button>
                <button onClick={()=>filteritems("dessert")} className={selec==="dessert"?"active":""}>Desserts</button>
                <button onClick={()=>filteritems("drinks")} className={selec==="drinks"?"active":""}>Drinks</button>
                </div>
                {/* sorting based filtering */}
                <div className='flex justify-end mb-4 rounded-sm'>
                    <div className='bg-black p-2'>
                        <FaFilter className='h-4 w-4 text-white'/>
                    </div>
                    {/* sorting */}
                    <select name="sort" id="sort" onChange={(e)=>handlesort(e.target.value)} value={sortopt} 
                        className='bg-[#dee0e0] text-black px-2 py-1 rounded-sm'
                    >
                        <option value="default">Default</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                        <option value="low-to-high">Low to High</option>
                        <option value="high-to-low">High to Low</option>

                    </select>
                </div>
            </div>
            {/* products card */}
            <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>
                {
                    currentitems.map((item)=>(
                        <Card key={item._id} item={item}/>
                    ))
                }
            </div>
        </div>
        {/* pagination */}
        <div className='flex justify-center my-8'>
            {
                Array.from({length:Math.ceil(filtereditems.length / itemsperpage)}).map((_,index)=>(
                    <button key={index+1} onClick={()=>paginate(index+1)} className={`mx-1 px-3 py-1 rounded-full ${page==index+1?"bg-green text-white":"bg-gray-200"}`}>{index+1}</button>
                ))
            }
        </div>
    </div>
  );
};

export default Menu
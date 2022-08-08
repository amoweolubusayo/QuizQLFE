import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout.tsx";

export default function Teams() {
	const items = [
		{ id: 1, imageurl:"https://images.unsplash.com/photo-1562577308-c8b2614b9b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGVhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60", name: "Team Ragnorok", members:"5", TotalPoints:"20"},
		{ id: 2, imageurl:"https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60", name: "Team Graphers", members:"3", TotalPoints:"20" },
		{ id: 3,imageurl:"https://images.unsplash.com/photo-1494059980473-813e73ee784b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",  name: "Team Thr33", members:"4", TotalPoints:"20" },
		{ id: 4, imageurl:"https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60", name: "Team web3", members:"7", TotalPoints:"20" },
			
		
	];

    const points = [
        {id:1 ,total: "Current Points:"},
        {id:2 ,total: "Bonus Points:"},
    ]
	return (
		<div>
			<Layout title="Teams">
                
            <div className="container mx-auto flex flex-row space-x-80 ... pl-10 pb-10 ">

                <button className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
                        Add Teams
                    </button>
                    

                   <ul role="list" className="space-x-80 flex flex-row ... ">
                    {points.map((point)=>(
                        <li 
                        key={point.id}
                        className="bg-white shadow overflow-hidden px-4 sm:px-6 sm:rounded-md">
                            <p className="text-center">{point.total}</p>
                        </li>
                    ))}

                   </ul>
                    
            </div>
			<div>
						    
				<ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{items.map((item) => (
						<li
							key={item.id}
							className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:squared-md"
						>
							<div className="flex-1 flex flex-col p-8">
						<img
						className="w-32 h-32 flex-shrink-0 mx-auto squared-full"
						src={item.imageurl}
						alt=""
						/>
									<h3 className="text-center text-lg font-bold">{item.name}</h3>
									<h3 className="text-center">Members: {item.members}</h3>
									<p className="text-center text-neutral-500">Total Points: {item.TotalPoints}</p>
									
									</div>
						</li>
					))}
				</ul>
			</div>
                
			</Layout>
		</div>
	);
}

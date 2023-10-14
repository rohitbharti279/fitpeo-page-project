import React from "react";
import "./Hero.css";
import search from "./SVG/magnifying-glass-solid.svg";
import earning from "./SVG/earning.svg";
import orders from "./SVG/orders.svg";
import balance from "./SVG/balance.svg";
import sales from "./SVG/sales.svg";
import upGreen from "./SVG/arrow-up-solid-green.svg";
import upRed from "./SVG/arrow-down-solid-red.svg";
import BarGraph from "./BarGraph.js";

const Hero = () => {
    return (
        <section className="p-5 md:px-10 lg:w-[70%] xl:w-[82%]">

            <section className="flex flex-wrap gap-3 justify-center md:justify-between">
                <p className="text-2xl md:text-xl font-medium flex-1 px-1 md:px-0">Hello Shahrukh👋🏼,</p>
                <form className="relative text-gray-600 focus-within:text-gray-400 -mr-[55px] md:mr-0">
                    <span className="absolute pl-1">
                        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                            <img src={search} alt="search-icon"></img>
                        </button>
                    </span>
                    <input type="search" placeholder="search" className="py-1 text-sm rounded-md pl-10 focus:outline-none"></input>
                </form>
            </section>

            <section className="mt-5 flex flex-wrap 2xl:flex-nowrap justify-center md:justify-between gap-5">
                <div className="flex gap-3 justify-center p-5 bg-white shadow-md rounded-lg grow transform hover:scale-105 transition-transform duration-500">
                    <div className="bg-[#d7f6fa] self-center rounded-full p-7">
                        <img src={earning} alt="earnings-icon" className="w-12"></img>
                    </div>

                    <div className="self-center">
                        <p className="text-gray-600 -mb-1 tracking-tighter">Earning</p>
                        <p className="text-2xl font-bold">$198k</p>
                        <p className="flex gap-1 text-xs tracking-tight"><img src={upGreen} alt="up-arrow" /><span className="text-[#2e953a] font-bold"> 37.8% </span>this month</p>
                    </div>
                </div>

                <div className="flex gap-3 justify-center p-5 bg-white shadow-md rounded-lg grow transform hover:scale-105 transition-transform duration-500">
                    <div className="bg-[#ded7e0] self-center rounded-full p-7">
                        <img src={orders} alt="orders-icon" className="w-12"></img>
                    </div>

                    <div className="self-center">
                        <p className="text-gray-600 -mb-1 tracking-tighter">Orders</p>
                        <p className="text-2xl font-bold">$2.4k</p>
                        <p className="flex gap-1 text-xs tracking-tight"><img src={upRed} alt="up-arrow" /><span className="text-[#d40202] font-bold"> 2% </span> this month</p>
                    </div>
                </div>

                <div className="flex gap-3 justify-center p-5 bg-white shadow-md rounded-lg grow transform hover:scale-105 transition-transform duration-500">
                    <div className="bg-[#b8e7ed] self-center rounded-full p-7">
                        <img src={balance} alt="balance-icon" className="w-12"></img>
                    </div>

                    <div className="self-center">
                        <p className="text-gray-600 -mb-1 tracking-tighter">Balance</p>
                        <p className="text-2xl font-bold">$2.4k</p>
                        <p className="flex gap-1 text-xs tracking-tight"><img src={upRed} alt="up-arrow" /><span className="text-[#d40202] font-bold"> 2% </span> this month</p>
                    </div>
                </div>

                <div className="flex gap-3 justify-center p-5 bg-white shadow-md rounded-lg grow transform hover:scale-105 transition-transform duration-500">
                    <div className="bg-[#f9b0eb] self-center rounded-full p-7">
                        <img src={sales} alt="sales-icon" className="w-12"></img>
                    </div>

                    <div className="self-center">
                        <p className="text-gray-600 -mb-1 tracking-tighter">Total Sales</p>
                        <p className="text-2xl font-bold">$89k</p>
                        <p className="flex gap-1 text-xs tracking-tight"><img src={upGreen} alt="up-arrow" /><span className="text-[#2e953a] font-bold"> 11% </span> this week</p>
                    </div>
                </div>

            </section>

            <section className="flex flex-col xl:flex-row xl:justify-between gap-5 mt-10 xl:mt-5">
                <div className="flex flex-col bg-white rounded-lg p-5 xl:w-[67%]">
                    <div className="flex justify-between">
                        <div>
                            <p className="font-bold">Overview</p>
                            <p className="tracking-[-0.1em] text-zinc-500">Monthly Earning</p>
                        </div>
                        <select className="bg-slate-200 text-sm px-1 text-zinc-700 tracking-tighter rounded-lg mb-4 focus:outline-none ">
                            <option value="quarterly">Quarterly</option>
                            <option value="half-yearly">Half-yearly</option>
                            <option value="yearly">Yearly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                    </div>
                    <BarGraph />
                </div>

                <div className="flex flex-col bg-white rounded-lg p-5 xl:w-[30%]">
                    <div>
                        <p className="font-bold">Customers</p>
                        <p className="tracking-[-0.1em] text-zinc-500">Customers that buy products</p>
                    </div>

                    {/* <div className="flex w-[80%] h-[100%] justify-center items-center bg-slate-100 shadow-2xl  rounded-[100%]">
                        <p>jij</p>
                    </div> */}
                    


                </div>



            </section>

        </section>
    );
};

export default Hero;
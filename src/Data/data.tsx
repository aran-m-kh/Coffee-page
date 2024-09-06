import { InavbarData } from "../Types & Interfaces/T&I";
import { IServiceData } from "../Types & Interfaces/T&I";
import { ItestimonialsData } from "../Types & Interfaces/T&I";

import cup from "../assets/coffee2.png"

import img1 from "../assets/profile pic/1.png"
import img2 from "../assets/profile pic/2.png"
import img3 from "../assets/profile pic/3.png"
import img4 from "../assets/profile pic/4.png"



export const NavbarData : InavbarData[] = [
    {
        id : 1,
        title : "Home",
        link : "/"
    },
    {
        id : 2,
        title : "Services",
        link : "/services" 
    },
    {
        id : 3,
        title : "About",
        link : "/about"
    },
]



export const servicesData : IServiceData[] = [
    {
        id : 1,
        img : {cup},
        title: "Esspereso",
        description :  "ipsum dolor sit amet consectetur adipisicing elit. Asperiores corrupti voluptatem soluta, eaque deserunt a magni quaerat ipsam velit recusandae possimus molestias maiores incidunt in. Animi itaque sequi ipsa commodi.",
        aos_delay : "100"
    },
    {
        id : 2,
        img : {cup},
        title: "Cappochino",
        description : "ipsum dolor sit amet consectetur adipisicing elit. Asperiores corrupti voluptatem soluta, eaque deserunt a magni quaerat ipsam velit recusandae possimus molestias maiores incidunt in. Animi itaque sequi ipsa commodi.",
        aos_delay : "200"
    },
    {
        id : 3,
        img : {cup},
        title: "Cafe Latte",
        description : "ipsum dolor sit amet consectetur adipisicing elit. Asperiores corrupti voluptatem soluta, eaque deserunt a magni quaerat ipsam velit recusandae possimus molestias maiores incidunt in. Animi itaque sequi ipsa commodi.",
        aos_delay : "300"
    }

]



export const testimonialsData : ItestimonialsData[] = [
    {
        id : 1,
        name : "John Doe",
        text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, similique?",
        img : img1
    },
    {
        id : 2,
        name : "Sara phillips",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ut, fuga unde quia non optio.",
        img : img2
    },
    {
        id : 3,
        name : "tammy smith",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat dolores aliquam et quisquam animi aperiam est magnam ipsa aliquid.",
        img : img3
    },
    {
        id : 4,
        name : "mary jones",
        text : "Lorem ipsum dolor sit amet.",
        img : img4
    }
]



export const footerLinks : InavbarData[] = [
    {
        id : 1,
        title : "Home",
        link : "/"
    },
    {
        id : 2,
        title : "Store",
        link : "/store"
    },
    {
        id : 3,
        title : "contact",
        link : "/contact"
    },
    {
        id : 4,
        title : "Blog",
        link : "/Blog"
    }
]
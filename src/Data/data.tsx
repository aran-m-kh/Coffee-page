import { InavbarData } from "../Types & Interfaces/T&I";
import { IServiceData } from "../Types & Interfaces/T&I";

import cup from "../assets/coffee2.png"

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
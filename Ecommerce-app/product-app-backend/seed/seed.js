import data from "./data.json" assert {type: 'json'}
import ProductModal from "../modal/ProductModal.js";
import slugify from "slugify";


 export default async function main() {
     data.products.map(async(el)=>{
        try{
        const products = new ProductModal({ ...el, slug: slugify(el.title) });

        await products.save();
      } catch (error) {
        console.log(error);
      }
    })
}
import slugify from "slugify";
import ProductModal from "../modal/ProductModal.js";
export const createProductController = async (req, res) => {
    try {
      const { title, description, price, category, quantity, shipping,images } =
        req.fields;
      //Validation
      switch (true) {
        case !title:
          return res.status(404).send({ error: "Name is Required" });
        case !description:
          return res.status(404).send({ error: "Description is Required" });
        case !price:
          return res.status(404).send({ error: "Price is Required" });
        case !category:
          return res.status(404).send({ error: "Category is Required" });
        case !quantity:
          return res.status(404).send({ error: "Quantity is Required" });
        case images.length===0:
          return res
            .status(404)
            .send({ error: "photo is Required" });
      }
  
      const products = new ProductModal({ ...req.fields, slug: slugify(title) });

      await products.save();
      res.status(201).send({
        success: true,
        message: "Product Created Successfully",
        products,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error in crearing product",
      });
    }
  };


  // get single product
export const getSingleProductController = async (req, res) => {
    try {
      const product = await ProductModal
        .findOne({ slug: req.params.slug })
        .populate("category");
      res.status(200).send({
        success: true,
        message: "Single Product Fetched",
        product,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Eror while getitng single product",
        error,
      });
    }
  };

  // product list base on page
export const productListController = async (req, res) => {
    try {
      const perPage = 10;
      const page = req.params.page ? req.params.page : 1;
      const products = await ProductModal
        .find({})
        .skip((page - 1) * perPage)
        .limit(perPage)
        .sort({ createdAt: -1 });

      res.status(200).send({
        success: true,
        products,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        success: false,
        message: "error in per page ctrl",
        error,
      });
    }
  };
"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";

const DorangSpecialSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const product = [
    {
      image:
        "https://ptikandorang.com/sites/default/files/220ml_cup_ikandorang_special.png",
    },
    {
      image:
        "https://ptikandorang.com/sites/default/files/500ml_pack_Ikan_Dorang_Spesial.png",
    },
    {
      image:
        "https://ptikandorang.com/sites/default/files/950ml_standing_pouch_ikandorang_special.png",
    },
    {
      image:
        "https://ptikandorang.com/sites/default/files/1900ml_standing_pouch_Ikan_Dorang_Spesial.png",
    },
    {
      image:
        "https://ptikandorang.com/sites/default/files/en-620ml_botol_Ikan-Dorang_Spesial.png",
    },
    {
      image:
        "https://ptikandorang.com/sites/default/files/en-1L_botol_Ikan_Dorang_Spesial.png",
    },
    {
      image:
        "https://ptikandorang.com/sites/default/files/en-2L_botol_Ikan_Dorang_Spesial.png",
    },
    {
      image:
        "https://ptikandorang.com/sites/default/files/en-5L_jerigen_Ikan_Dorang_Spesial.png",
    },
    {
      image:
        "https://ptikandorang.com/sites/default/files/en-18L_jerigen_Ikan_Dorang_Spesial.png",
    },
  ];

  return (
    <section id="dorang-special" className="p-5 pt-20 md:p-20">
      <div>
        <div className="flex flex-col items-center gap-4 mb-8 md:mb-16">
          <h1 className="text-xl md:text-3xl font-extrabold">Product</h1>
          <p className="md:w-1/2 text-sm md:text-base text-center">
            Discover our premium cooking oils crafted from the finest natural
            ingredients.
          </p>
        </div>
        <div>
          <div className="flex flex-col md:flex-row justify-center md:items-start items-center gap-5 md:gap-10">
            <Dialog>
              <DialogTrigger>
                <Image
                  src={"/asset/id_spesial.png"}
                  alt="dorang special"
                  width={300}
                  height={300}
                />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    <Image
                      src={"/asset/id_spesial.png"}
                      alt="dorang special"
                      width={800}
                      height={800}
                    />
                  </DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <div className="md:w-1/3 w-[90%]">
              <h2 className="text-lg md:text-2xl font-bold mb-4 md:mb-8">Ikan Dorang Special</h2>
              <p className="text-sm md:text-base text-slate-600 mb-4">
                Ikan Dorang Spesial cooking oil is made from quality raw
                material and characterized by its distinct clear colour
                characteristics. This high grade coconut cooking oil is suitable
                for all cooking purposes.
              </p>
              <p className="text-sm md:text-base text-slate-600">
                Composition: <strong>Coconut</strong>
              </p>
              <p className="text-sm md:text-base text-slate-600">
                Usage: <strong>Cooking, deep-fry, stir -fry</strong>
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-lg md:text-2xl font-bold mt-8 md:mt-16 mb-8 ">Product Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {product.map((item, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Image
                      src={item.image}
                      alt="dorang special"
                      width={200}
                      height={200}
                      className="cursor-pointer rounded-lg shadow-md hover:scale-105 transition"
                      onClick={() => setSelectedImage(item.image)}
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl mx-auto flex justify-center">
                    <DialogHeader>
                      <DialogTitle>
                        {selectedImage && (
                          <Image
                            src={selectedImage}
                            alt="Product Fullscreen"
                            width={600}
                            height={500}
                            className="rounded-lg shadow-xl"
                          />
                        )}
                      </DialogTitle>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DorangSpecialSection;

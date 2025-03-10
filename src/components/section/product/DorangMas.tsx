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

const DorangMasSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const product = [
    {
      image:
        "https://ptikandorang.com/sites/default/files/220ml_cup_ikan_dorang_mas.png",
    },
    {
      image:
        "https://ptikandorang.com/sites/default/files/500ml-pack-Ikan-Dorang-Mas.png",
    },
    {
      image:
        "https://ptikandorang.com/sites/default/files/950ml_standing_pouch_Ikan_Dorang_Mas.png",
    },
    {
      image:
        "https://ptikandorang.com/sites/default/files/1900ml_standing_pouch_Ikan_Dorang_Mas.png",
    },
    {
      image:
        "https://ptikandorang.com/sites/default/files/en-620ml_botol_Ikan_Dorang_Mas.png",
    },
    {
      image:
        "https://ptikandorang.com/sites/default/files/en-1L_botol_Ikan_Dorang_Mas.png",
    },
    {
      image:
        "https://ptikandorang.com/sites/default/files/en-2L_botol_Ikan_Dorang_Mas.png",
    },
    {
      image:
        "https://ptikandorang.com/sites/default/files/en-5L_jerigen_Ikan_Dorang_Mas.png",
    },
    {
      image:
        "https://ptikandorang.com/sites/default/files/en-18L_jerigen_Ikan_Dorang_Mas.png",
    },
  ];

  return (
    <section id="dorangmas" className="p-5 md:p-20 bg-[#F9FAFB]">
      <div>
        <div>
          <div  className="flex flex-col md:flex-row justify-center md:items-start items-center gap-5 md:gap-10">
            <Dialog>
              <DialogTrigger>
                <Image
                  src={"/asset/id_mas.png"}
                  alt="dorang special"
                  width={300}
                  height={300}
                />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    <Image
                      src={"/asset/id_mas.png"}
                      alt="dorang special"
                      width={800}
                      height={800}
                    />
                  </DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <div className="md:w-1/3 w-[90%]">
              <h2 className="text-lg md:text-2xl font-bold mb-4 md:mb-8">Ikan Dorang Mas</h2>
              <p className="text-sm md:text-base text-slate-600 mb-4">
                Ikan Dorang Mas cooking oil made from palm oil which naturally
                contains a good source of beta-carotene(pro vitamin A).
              </p>
              <p className="text-sm md:text-base text-slate-600">
                Composition: <strong>Palm oil, Anti-oxidant BHT</strong>
              </p>
              <p className="text-sm md:text-base text-slate-600">
                Usage: <strong>Cooking, frying, stir-fry</strong>
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-lg md:text-2xl font-bold mt-8 md:mt-16 mb-8">Product Gallery</h2>
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

export default DorangMasSection;

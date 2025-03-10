import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const InformationSection = () => {
  return (
    <section className="p-5 md:p-20">
      <div>
        <div className="flex flex-col items-center gap-4 mb-8 md:mb-16">
          <h1 className="text-xl md:text-3xl font-extrabold text-center">
            Nutrition And Packaging Information
          </h1>
          <p className="md:w-1/2 text-sm md:text-base text-center">
            Here you can find all the nutrition facts and packaging information
            for our products.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-20">
          <div className="flex flex-col gap-3 items-center">
            <div>
              <h3 className="font-bold md:text-xl">
                Ikan Dorang Special Nutrition
              </h3>
            </div>
            <div>
              <Dialog>
                <DialogTrigger>
                  <Image
                    src={
                      "https://ptikandorang.com/sites/default/files/1ids.gif"
                    }
                    alt="dorang special"
                    width={400}
                    height={400}
                  />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <Image
                        src={
                          "https://ptikandorang.com/sites/default/files/1ids.gif"
                        }
                        alt="dorang special"
                        width={800}
                        height={800}
                      />
                    </DialogTitle>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <div>
              <h3 className="font-bold md:text-xl">Ikan Dorang Mas Nutrition</h3>
            </div>
            <div>
              <Dialog>
                <DialogTrigger>
                  <Image
                    src={
                      "https://ptikandorang.com/sites/default/files/1idm.gif"
                    }
                    alt="dorang special"
                    width={400}
                    height={400}
                  />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <Image
                        src={
                          "https://ptikandorang.com/sites/default/files/1idm.gif"
                        }
                        alt="dorang special"
                        width={800}
                        height={800}
                      />
                    </DialogTitle>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <div>
          <Dialog>
                <DialogTrigger>
                  <Image
                    src={
                      "https://ptikandorang.com/sites/default/files/tabel.jpg"
                    }
                    alt="dorang special"
                    width={1000}
                    height={400}
                  />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <Image
                        src={
                          "https://ptikandorang.com/sites/default/files/tabel.jpg"
                        }
                        alt="dorang special"
                        width={1000}
                        height={800}
                      />
                    </DialogTitle>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;

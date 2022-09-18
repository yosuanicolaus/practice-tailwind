import Image from "next/image";

export default function ProductCardPage() {
  return (
    <main className="grid min-h-screen place-content-center bg-gradient-to-tr from-pink-200 to-pink-50">
      <ProductCardDesktop />
      <ProductCardMobile />
    </main>
  );
}

function ProductCardDesktop() {
  return (
    <section className="hidden max-w-lg grid-cols-2 rounded-xl bg-white shadow-2xl md:grid">
      <Image
        src={"/product-preview-card/image-product-desktop.jpg"}
        width={275}
        height={400}
        className="rounded-l-xl"
      />
      <CardDescription />
    </section>
  );
}

function ProductCardMobile() {
  return (
    <section className="flex w-72 flex-col rounded-xl bg-white md:hidden">
      <Image
        src={"/product-preview-card/image-product-mobile.jpg"}
        width={275}
        height={200}
        className="rounded-t-xl"
      />
      <CardDescription />
    </section>
  );
}

function CardDescription() {
  return (
    <div className="grid p-2">
      <div className="text-lg text-gray-400">Preview</div>

      <h1 className="font-serif text-2xl font-extrabold">
        Gabrielle Essence Eau De Parfum
      </h1>
      <div className="text-gray-500">
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </div>

      <div className="flex items-center gap-4">
        <div className="font-serif text-3xl font-bold text-emerald-600">
          $149.99
        </div>
        <div className="text-gray-400 line-through">$169.99</div>
      </div>

      <button className="mt-3 rounded-md bg-emerald-700 p-3 text-white transition hover:bg-emerald-600">
        <Image
          src={"/product-preview-card/icon-cart.svg"}
          width={15}
          height={15}
        />{" "}
        Add to Cart
      </button>
    </div>
  );
}

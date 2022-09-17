import Image from "next/image";

export default function QrCodePage() {
  return (
    <main
      className="grid min-h-screen place-content-center bg-gradient-to-t from-blue-300 to-blue-100
     "
    >
      <QrCard />
    </main>
  );
}

function QrCard() {
  return (
    <section className="grid w-80 place-content-center gap-4 rounded-xl bg-white p-4 text-center">
      <Image
        src={"/qr-code/image-qr-code.png"}
        width={300}
        height={300}
        className="rounded-xl"
      />
      <div className="text-lg font-bold">
        Improve your frontend skills by building projects
      </div>
      <div className="text-gray-500">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </div>
    </section>
  );
}

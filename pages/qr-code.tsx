import Image from "next/image";

export default function QrCodePage() {
  return (
    <main
      className="min-h-screen bg-gradient-to-t from-blue-300 to-blue-100 grid place-content-center
     "
    >
      <QrCard />
    </main>
  );
}

function QrCard() {
  return (
    <section className="bg-white rounded-xl w-80 grid place-content-center p-4 text-center gap-4">
      <Image
        src={"/qr-code/image-qr-code.png"}
        width={300}
        height={300}
        className="rounded-xl"
      />
      <div className="font-bold text-lg">
        Improve your frontend skills by building projects
      </div>
      <div className="text-gray-500">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </div>
    </section>
  );
}

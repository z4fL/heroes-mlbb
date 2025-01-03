import localFont from "next/font/local";

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Poppins/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Poppins/Poppins-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Poppins/Poppins-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});

const bebas = localFont({
  src: [
    {
      path: "../../public/fonts/BebasNeue-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bebas",
});

const tungsten = localFont({
  src: [
    {
      path: "../../public/fonts/Tungsten-Bold.ttf",
    },
  ],
  variable: "--font-tungsten",
});

const dinnext = localFont({
  src: [
    {
      path: "../../public/fonts/DINNextW05.ttf",
    },
  ],
  variable: "--font-dinnext",
});


export { poppins, bebas, tungsten, dinnext };
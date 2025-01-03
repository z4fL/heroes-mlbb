const images = [
  {
    icon: "/images/emblem/basic/Basic_Common_Emblem.png",
    name: "Basic Common Emblem",
  },
  {
    icon: "/images/emblem/tank/Custom_Tank_Emblem.png",
    name: "Custom Tank Emblem",
  },
  {
    icon: "/images/emblem/assassin/Custom_Assassin_Emblem.png",
    name: "Custom Assassin Emblem",
  },
  {
    icon: "/images/emblem/mage/Custom_Mage_Emblem.png",
    name: "Custom Mage Emblem",
  },
  {
    icon: "/images/emblem/fighter/Custom_Fighter_Emblem.png",
    name: "Custom Fighter Emblem",
  },
  {
    icon: "/images/emblem/support/Custom_Support_Emblem.png",
    name: "Custom Support Emblem",
  },
  {
    icon: "/images/emblem/marksman/Custom_Marksman_Emblem.png",
    name: "Custom Marksman Emblem",
  },
];

const EmblemTalent = () => {
  return (
    <main className="bg-midnight min-h-screen flex flex-col items-center mt-10">
      <div className="mx-auto max-w-screen-xl w-full px-4 py-6">
        <div className="max-w-screen-lg mx-auto">
          <div className="w-full mt-5 flex justify-center flex-wrap py-0.5 border border-highlight">
            <div className="flex justify-center items-center flex-wrap">
              {images.map((item) => (
                <div
                  key={item.name}
                  className="relative w-12 h-12 mx-5 my-2 rounded-full group"
                >
                  <div
                    style={{ backgroundImage: `url(${item.icon})` }}
                    className="relative z-20 w-12 h-12 cursor-pointer bg-cover bg-center bg-no-repeat"
                  />
                  <div className="z-10 absolute w-8 h-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center rounded-full group-hover:bg-soft-white/40 group-hover:drop-shadow-[0_0px_5px_rgba(255,255,255,255)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EmblemTalent;

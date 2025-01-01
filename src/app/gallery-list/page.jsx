const GalleryList = () => {
  return (
    <main className="flex flex-col items-center mt-10 bg-midnight max-w-screen-2xl mx-auto">
      <div className="min-h-screen flex flex-col justify-center">
        <div className="gallery-container">
          <div
            className="box box-1 !bg-[calc(50%-100px)_center]"
            style={{
              "--img": "url(/images/heroes/22/skins/Hero2210-splashart.jpg);",
            }}
            data-text="Galactic Vanquisher"
          ></div>
          <div
            className="box box-2 !bg-[calc(50%+20px)_center]"
            style={{
              "--img": "url(/images/heroes/68/skins/Hero689-splashart.jpg);",
            }}
            data-text="Divine Goddess"
          ></div>
          <div
            className="box box-3 !bg-[calc(50%-20px)_center]"
            style={{
              "--img": "url(/images/heroes/10/skins/Hero109-splashart.jpg);",
            }}
            data-text="King of Hell"
          ></div>
          <div
            className="box box-4 !bg-[calc(50%+20px)_center]"
            style={{
              "--img": "url(/images/heroes/80/skins/Hero809-splashart.jpg);",
            }}
            data-text="Psion of Tomorrow"
          ></div>
          <div
            className="box box-5 !bg-[calc(50%-40px)_center]"
            style={{
              "--img": "url(/images/heroes/57/skins/Hero577-splashart.jpg);",
            }}
            data-text="Infernal Blaze"
          ></div>
        </div>
      </div>
    </main>
  );
};

export default GalleryList;

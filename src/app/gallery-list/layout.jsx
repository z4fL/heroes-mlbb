import GalleryProvider from "./gallery-provider";

const GalleryLayout = ({ children }) => {
  return (
    <main className="bg-midnight flex flex-col items-center">
      <div className="mt-6 mx-auto max-w-screen-xl max-h-[calc(100vh)] w-full px-4 py-6 flex">
        <GalleryProvider>{children}</GalleryProvider>
      </div>
    </main>
  );
};

export default GalleryLayout;

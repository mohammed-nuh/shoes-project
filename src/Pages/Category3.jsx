import { Tag } from "lucide-react";
import { useEffect } from "react";

const Category3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4 py-8 text-center">
        <Tag className="w-16 h-16 mx-auto mb-4 text-orange-500" />
        <h1 className="text-5xl font-bold mb-4">JOKER 1 GT SE</h1>
        <p className="text-lg text-gray-700">
          This is the page for JOKER 1 GT SE Category. Placeholder content for this category.
        </p>
      </div>
    </div>
  );
};

export default Category3;

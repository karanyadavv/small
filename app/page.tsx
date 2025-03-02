import Articles from "@/components/ui/articles";

export default function Home() {

  return (
    <div className="w-full md:max-w-[1170px] mx-auto min-h-screen flex justify-center items-start pb-20 gap-16 mt-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex items-center justify-center flex-col">
        <h2 className="tracking-[0.3rem] mt-38 md:mt-26">ARTICLES</h2>
        <Articles />
      </div>
    </div>
  );
}

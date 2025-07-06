import ButtonLink from "../ButtonLink";

const CoSquad = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="text-center py-6">
          <div className="inline-block relative">
            <h2 className="font-light text-5xl">
              Co-construisons une équipe adaptée à votre besoin
            </h2>
            <div className="absolute left-0 -bottom-[8px] w-full flex items-center justify-between h-[1px]">
              <div className="bg-black h-[2px] w-[calc(100%-8px)]"></div>
              <div className="w-1 h-1 bg-black rounded-full ml-1"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8 mx-auto">
        <ButtonLink href="/solutions" text="Construisons votre équipe" />
      </div>

      <div className="h-[1px] w-full bg-[#c9cdd2]"></div>
    </>
  );
};
export default CoSquad;

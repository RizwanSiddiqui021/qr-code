import qrcode from "../assets/image-qr-code.png";
const Page = () => {
  return (
    <div>
      <div className="bg-white w-[320px] p-4 rounded-[20px]">
        <img className="rounded-2xl" src={qrcode} alt="" />
        <div className="p-4">
          <h1 className="text-[#1F314F] text-[22px] text-center font-bold mb-4">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-[#68778D] text-center">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;

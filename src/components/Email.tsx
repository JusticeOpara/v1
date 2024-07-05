import Sidebar from './Sidebar';

type EmailProps = {
  isHero?: boolean;
};
const email = "justiceopara33@gmail.com"

const Email: React.FC<EmailProps> = ({ isHero }) => (
  <Sidebar isHero={isHero} orientation="right">
    <div className="flex flex-col items-center relative">
      <a
        href={`mailto:${email}`}
        className="my-5 p-2 text-xs leading-6 tracking-widest font-poppins hover:translate-y-[-3px] focus:translate-y-[-3px] transition-transform texto"
      >
        {email}
      </a>
      <div className="w-[1px] h-[90px] mt-0 mb-0 mx-auto bg-light-slate"></div>
    </div>
  </Sidebar>
);

export default Email;
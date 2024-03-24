import { Users } from "../../utils/Data";
import { ModeToggle } from "../toogle/mode-toggle";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

interface User {
  color: string;
  icon: string;
  name: string;
  since: number | string;
  date: number;
  description: string;
}

const SocialMedia = () => {
  const headerColor = (user: User) => {
    if (user.since === 1987) {
      return (
        <div
          style={{ background: "#188ae8", width: "100%", height: "4px" }}
        ></div>
      );
    } else if (user.since === 1044) {
      return (
        <div
          style={{ background: "#188ae8", width: "100%", height: "4px" }}
        ></div>
      );
    } else if (user.since === "11k") {
      return (
        <div
          style={{
            background: "linear-gradient(to right, #ffd700, #ff49fb)",
            width: "100%",
            height: "4px",
          }}
        ></div>
      );
    } else if (user.since === 8239) {
      return (
        <div
          style={{ background: "#aa0022", width: "100%", height: "4px" }}
        ></div>
      );
    }
  };

  return (
    <section className="mx-auto flex flex-col">
      <div className="px-[73px] mt-5 mb-5 flex justify-between max-sm:gap-3 max-sm:flex-col-reverse ">
        <div>
          <h2 className="text-black text-2xl dark:text-white font-bold ">
            Social Media Dashboard
          </h2>
          <p className="text-[#63687e] font-semibold text-sm ">
            Total Followers: 23,004
          </p>
        </div>
        <div className="flex items-center gap-3 max-sm:justify-between">
          <span className="font-bold text-[#63687e] ">Dark Mode</span>
          <ModeToggle />
        </div>
      </div>
      <article className="flex mx-auto gap-[32px] flex-wrap justify-center">
        {Users.map((user: User) => (
          <Card
            className="dark:bg-[#252b43] flex flex-col items-center overflow-hidden w-[300px]
           bg-[#f0f3fa] hover:bg-[#e1e3f0] transition cursor-pointer "
          >
            {headerColor(user)}
            <CardHeader>
              <div className="flex gap-2">
                <img className="w-4 object-cover" src={user.icon} alt="" />
                <span className="text-[10px]">{user.name}</span>
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-pretty ">
                  {user.since}
                </span>
                <p className=" text-[#63687e] text-[8px] tracking-[3px]">
                  {user.description}
                </p>
              </div>
            </CardContent>
            <CardFooter>
              {user.date !== 144 ? (
                <span
                  className=" text-[10px]
                flex items-center font-semibold text-green-500"
                >
                  <i className="bx  bxs-up-arrow "></i>
                  {user.date} Today
                </span>
              ) : (
                <span
                  className="text-[10px]
            flex items-center font-semibold text-red-500"
                >
                  <i className="bx  bxs-down-arrow "></i>
                  {user.date} Today
                </span>
              )}
            </CardFooter>
          </Card>
        ))}
      </article>
    </section>
  );
};

export default SocialMedia;

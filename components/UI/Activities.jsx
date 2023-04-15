import swr from "../../lib/swr.jsx";
import Tippy from "@tippyjs/react";

export default function Activities() {
  const { data: _profile } = swr("/api/util/me");
  const profile = _profile || null;

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="">
        <div className="flex items-center space-x-5 rounded-lg bg-[#080808] p-5">
          <div className="relative flex items-center w-[100px] h-[100px]">
            {!profile ? (
              <img
                className="animate-pulse rounded-full w-auto"
                src="https://i.ibb.co/68X2Xfq/pulse.png"
              />
            ) : (
              <img
                className="rounded-full w-auto"
                src={`https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}?size=4096`}
              />
            )}
            {profile && (
              <Tippy interactive={true} content={String(profile?.status)}>
                <div className="absolute bottom-1 bg-[#080808] rounded-full right-1 w-6 h-6 flex items-center justify-center">
                  <div className="w-full h-full relative flex items-center justify-center">
                    <div
                      className={
                        "animate-ping w-3 h-3 rounded-full " +
                        `discord-${profile.status}`
                      }
                    />
                    <div
                      className={
                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full " +
                        `discord-${profile.status}`
                      }
                    />
                  </div>
                </div>
              </Tippy>
            )}
          </div>
          {!profile ? (
            <div className="flex-1">
              <div className="animate-pulse bg-white/10 w-16 h-6 rounded-lg" />
              <div className="animate-pulse mt-2 bg-white/10 w-12 h-4 rounded-md" />
            </div>
          ) : (
            <div className="flex-1">
              <h1 className="text-center leading-none font-light text-3xl md:text-xl lg:text-3xl text-white">
                {profile.username}
              </h1>
              <h1 className="text-center leading-none font-semibold text-xl md:text-lg lg:text-xl text-zinc-300">
                #{profile.discriminator}
              </h1>
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-2">
        <a
          target="_blank"
          href="https://discordapp.com/users/803642468025106472             "
          className="flex items-center justify-center cursor-pointer social w-10 h-10 rounded-lg hover:bg-gray-900"
        >
          <i className="fab fa-discord" />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/"
          className="flex items-center justify-center cursor-pointer social w-10 h-10 rounded-lg hover:bg-gray-900"
        >
          <i className="fab fa-twitter" />
        </a>
        <a
          target="_blank"
          href="https://wa.me/12173015216"
          className="flex items-center justify-center cursor-pointer social w-10 h-10 rounded-lg hover:bg-gray-900"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a
          target="_blank"
          href="https://github.com/isacandikkaya"
          className="flex items-center justify-center cursor-pointer social w-10 h-10 rounded-lg hover:bg-gray-900"
        >
          <i className="fa-regular fa-envelope"></i>
        </a>
        <a
          target="_blank"
          href="https://youtube.com/@rubblesoarch"
          className="flex items-center justify-center cursor-pointer social w-10 h-10 rounded-lg hover:bg-gray-900"
        >
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>
    </div>
  );
}

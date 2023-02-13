import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { passOutType } from "@/constants/ggrf0312";
import { PartyForm } from "@/components/party0312/Form";
import { InstaEmbed } from "@/components/party0312/InstaEmbed";
// import KakaoMap from "@/components/party0312/KakaoMap";

export default function Home() {
  const Contents = ["영화 상영", "스윙댄스 강습", "소셜 파티", "공연"];
  const kakaoJsKey = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;

  return (
    <>
      <Head>
        <title>GGRF0312@경성홀</title>
        <meta name="description" content="3월 12일 일요일 GGRF에 초대합니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        {/* <meta property="og:url" content={url} key="ogurl" /> */}
        <meta property="og:image" content="" key="ogimage" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          property="og:site_name"
          content="GGRF0312@경성홀"
          key="ogsitename"
        />
        <meta property="og:title" content="GGRF0312@경성홀" key="ogtitle" />
        <meta
          property="og:description"
          content="3월 12일 GGRF에 초대합니다."
          key="ogdesc"
        />
        <script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoJsKey}&libraries=services`}
        ></script>
      </Head>
      <main className="pt-2 sm:pt-8">
        <div className="layout text-center flex justify-center">
          <div className="max-w-[560px]">
            <div className="content">
              <div className="header flex justify-between items-center px-4 mt-2">
                <Link href="/">
                  <div className="flex items-center space-x-1 sm:space-x-4">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="/IMG_1666.JPG"
                      alt="GG"
                    />
                    <div className="text-left">
                      <div className="hidden sm:block text-sm font-medium">
                        Gentle Gifters Rock Festival
                      </div>
                      <div className="hidden sm:block text-xs font-normal">
                        3월 12일 일요일 @경성홀
                      </div>
                    </div>
                    <div className="sm:hidden block text-sm font-semibold text-left">
                      GGRF_0312
                    </div>
                  </div>
                </Link>
                <div className="space-x-4 text-xs text-gray-800">
                  <button className="font-semibold">내용</button>
                  <button className="font-semibold">장소</button>
                  <button className="rounded-md px-2.5 py-2 bg-gray-800 text-white">
                    등록
                  </button>
                </div>
              </div>
              <div className="mt-20">
                <div className="text-2xl font-semibold text-gray-800">
                  팀 젠틀기프터즈 파티 오픈!
                </div>
                <div className="text-sm mt-4 text-gray-800">
                  얼리버드 2월 17일까지
                </div>
                <div className="w-full mt-12">
                  <img src="ggrf_1.jpeg" />
                </div>
              </div>
              <div className="mt-32 text-base font-semibold text-gray-800">
                프로그램
              </div>
              <div className="grid grid-cols-2 gap-2 px-5 sm:px-0 mt-6">
                {Contents.map((content, idx) => (
                  <div key={idx}>
                    <img
                      className="rounded-md"
                      src={`content${idx}.png`}
                      alt=""
                    />
                  </div>
                ))}
              </div>
              <div className="mt-16 text-base font-semibold text-gray-800">
                패스안내
              </div>
              <div className="grid grid-cols-2 gap-2 px-4 sm:px-0 mt-6">
                {Object.keys(passOutType).map((key) => (
                  <div
                    key={passOutType[key]}
                    className="bg-blue-100 text-gray-700 rounded-md py-4"
                  >
                    <div className="text-sm">
                      {passOutType[key].split(":")[0]}
                    </div>
                    <div className="text-xs mt-3">
                      {passOutType[key]
                        .split(":")[1]
                        .split("-")[0]
                        .split(", ")
                        .map((line: any) => (
                          <p key={line}>{line}</p>
                        ))}
                    </div>
                    <div className="text-xs mt-3">
                      {passOutType[key].split("-")[1]}
                    </div>
                  </div>
                ))}
              </div>
              <PartyForm />
              <div className="mt-32 text-base font-semibold text-gray-800 px-4 sm:px-0">
                장소
                <div className="text-sm font-medium mt-4 text-left">경성홀</div>
                {/* <KakaoMap address="서울 신촌로10길 9" /> */}
              </div>
              <div className="mt-32 px-4 sm:px-0">
                <InstaEmbed />
              </div>
            </div>
            <div className="footer my-16">
              <div className="text-sm font-medium mt-8 text-left px-4 sm:px-0 block text-gray-800">
                <div className="mt-32 text-sm font-medium">Contact</div>
                <div>
                  <a
                    href="mailto:laura.young@gmail.com"
                    className="text-xs text-gray-400"
                  >
                    laura.youngbo@gmail.com
                  </a>
                </div>
                <Link href="https://www.instagram.com/gentlegifters/">
                  <div className="text-xs text-gray-400">
                    https://www.instagram.com/gentlegifters
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

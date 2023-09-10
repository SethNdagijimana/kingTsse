import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import Link from "next/link"

export async function generateMetadata({
  params
}: {
  params: {}
}): Promise<Metadata> {
  return {
    title: "TSSE",
    openGraph: {
      title: "TSSE",

      url: process.env.NEXT_PUBLIC_DOMAIN,
      siteName: "TSSE"
    }
  }
}

export default async function Home() {
  return (
    <div className="min-h-screen landing-page flex flex-col w-full">
      <div className="container pt-20 md:pt-16 pb-24 grid place-items-center flex-1">
        <div className="w-full">
          <div className="flex items-center justify-center mb-10 relative">
            <div className="justify-self-center">
              <h1>TSSE</h1>
            </div>
          </div>

          <div className="mt-9 flex items-center justify-center gap-6">
            <Link
              href={`/signin`}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "bg-[#F5F5F5] text-[#212121] hover:bg-[#F5F5F5] hover:opacity-70 transition h-10"
              )}
            >
              <span className="px-2 py-[2px] text-[#212121] font-medium">
                signin
              </span>
            </Link>

            <Link
              href={`/signup`}
              className={cn(buttonVariants({ variant: "default" }), "h-10")}
            >
              <span className="px-2 py-[2px] font-medium">create-account</span>{" "}
              <svg
                width={25}
                height={24}
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3661 12.3381L14.1817 17.8381C14.0786 17.9474 13.9099 18.0006 13.7974 18.0006C13.6728 18.0006 13.5477 17.9576 13.4486 17.8707C13.237 17.6851 13.2213 17.3688 13.4137 17.1648L17.8099 12.5006H6.01893C5.73233 12.5006 5.50049 12.277 5.50049 12.0287C5.50049 11.7804 5.73239 11.5006 6.01893 11.5006H17.8096L13.4127 6.83494C13.2203 6.63085 13.236 6.31432 13.4476 6.12901C13.6598 5.94444 13.9873 5.9581 14.1804 6.16319L19.3648 11.6632C19.5442 11.8537 19.5442 12.1474 19.3661 12.3381Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
